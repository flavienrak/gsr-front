"use client";

import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = process.env.NEXT_PUBLIC_AGORA_ID;
const CHANNEL = "test";

const GroupVideoCall = () => {
  const client = useRef(null);
  const localVideoTrack = useRef(null);
  const localAudioTrack = useRef(null);
  const [isJoined, setIsJoined] = useState(false);
  const [remoteUsers, setRemoteUsers] = useState([]);

  useEffect(() => {
    const initializeClient = async () => {
      client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

      client.current.on("user-published", handleUserPublished);
      client.current.on("user-unpublished", handleUserUnpublished);
      client.current.on("user-joined", handleUserJoined);
      client.current.on("user-left", handleUserLeft);
    };

    initializeClient();

    return () => {
      if (localVideoTrack.current) {
        localVideoTrack.current.stop();
        localVideoTrack.current.close();
      }
      if (localAudioTrack.current) {
        localAudioTrack.current.stop();
        localAudioTrack.current.close();
      }
      if (client.current) {
        client.current.leave();
      }
    };
  }, []);

  const joinChannel = async () => {
    const UID = await client.current.join(APP_ID, CHANNEL, null, null);

    localVideoTrack.current = await AgoraRTC.createCameraVideoTrack();
    localAudioTrack.current = await AgoraRTC.createMicrophoneAudioTrack();

    await client.current.publish([
      localVideoTrack.current,
      localAudioTrack.current,
    ]);

    const localContainer = document.createElement("div");
    localContainer.id = UID;
    localContainer.style.width = "400px";
    localContainer.style.height = "300px";
    localContainer.style.border = "1px solid #000";
    document.getElementById("video-grid").append(localContainer);

    localVideoTrack.current.play(localContainer);

    setIsJoined(true);
  };

  const leaveChannel = async () => {
    localVideoTrack.current.stop();
    localVideoTrack.current.close();
    localAudioTrack.current.stop();
    localAudioTrack.current.close();
    await client.current.leave();

    document.getElementById("video-grid").innerHTML = "";
    setRemoteUsers([]);
    setIsJoined(false);
  };

  const handleUserPublished = async (user, mediaType) => {
    await client.current.subscribe(user, mediaType);
    if (mediaType === "video" || mediaType === "audio") {
      const remoteContainer = document.createElement("div");
      remoteContainer.id = user.uid;
      remoteContainer.style.width = "400px";
      remoteContainer.style.height = "300px";
      remoteContainer.style.border = "1px solid #000";
      document.getElementById("video-grid").append(remoteContainer);
      if (mediaType === "video") {
        user.videoTrack.play(remoteContainer);
      }
      if (mediaType === "audio") {
        user.audioTrack.play();
      }
      setRemoteUsers((prevUsers) => [...prevUsers, user]);
    }
  };

  const handleUserUnpublished = (user) => {
    const remoteContainer = document.getElementById(user.uid);
    if (remoteContainer) {
      remoteContainer.remove();
    }
    setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
  };

  const handleUserJoined = (user) => {
    setRemoteUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleUserLeft = (user) => {
    const remoteContainer = document.getElementById(user.uid);
    if (remoteContainer) {
      remoteContainer.remove();
    }
    setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
  };

  return (
    <div className={"h-screen flex justify-center items-center text-white"}>
      <div id="video-grid" style={{ display: "flex", flexWrap: "wrap" }}></div>
      <button onClick={isJoined ? leaveChannel : joinChannel}>
        {isJoined ? "Leave" : "Join"}
      </button>
    </div>
  );
};

export default GroupVideoCall;
