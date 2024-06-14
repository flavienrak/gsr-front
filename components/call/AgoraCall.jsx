"use client";

import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = process.env.NEXT_PUBLIC_AGORA_ID;

const AgoraCall = () => {
  const client = useRef(null);
  const localVideoTrack = useRef(null);
  const remoteVideoTrack = useRef({});
  const [isJoined, setIsJoined] = useState(false);

  const handleUserPublished = async (user, mediaType) => {
    await client.current.subscribe(user, mediaType);
    if (mediaType === "video") {
      const remoteVideoContainer = document.getElementById("remote-video");
      remoteVideoTrack.current[user.uid] = user.videoTrack;
      user.videoTrack.play(remoteVideoContainer);
    }
  };

  const handleUserUnpublished = (user) => {
    if (remoteVideoTrack.current[user.uid]) {
      remoteVideoTrack.current[user.uid].stop();
      delete remoteVideoTrack.current[user.uid];
    }
  };

  const joinChannel = async () => {
    client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    client.current.on("user-published", handleUserPublished);
    client.current.on("user-unpublished", handleUserUnpublished);

    const UID = await client.current.join(APP_ID, "test", null, null);

    localVideoTrack.current = await AgoraRTC.createCameraVideoTrack();
    localVideoTrack.current.play("local-video");

    await client.current.publish([localVideoTrack.current]);
    setIsJoined(true);
  };

  const leaveChannel = async () => {
    localVideoTrack.current.stop();
    localVideoTrack.current.close();
    await client.current.leave();
    setIsJoined(false);
  };

  useEffect(() => {
    return () => {
      if (localVideoTrack.current) {
        localVideoTrack.current.stop();
        localVideoTrack.current.close();
      }
      if (client.current) {
        client.current.leave();
      }
    };
  }, []);

  return (
    <div className={"bg-white"}>
      <div id="local-video" style={{ width: "400px", height: "300px" }}></div>
      <div id="remote-video" style={{ width: "400px", height: "300px" }}></div>
      <button onClick={isJoined ? leaveChannel : joinChannel}>
        {isJoined ? "Leave" : "Join"}
      </button>
    </div>
  );
};

export default AgoraCall;
