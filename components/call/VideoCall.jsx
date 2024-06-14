"use client";

import { useEffect, useState, useRef } from "react";

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
};

export default function VideoCall() {
  const user1 = useRef(null);
  const user2 = useRef(null);

  const peerConnection = new RTCPeerConnection();
  const remoteStream = new MediaStream();

  const [uid, setUid] = useState(String(Math.floor(Math.random() * 10000)));
  const [localStream, setLocalStream] = useState(null);
  const [token, setToken] = useState(null);
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  const handleChat = async () => {
    const cli = await AgoraRTM.createInstance(process.env.AGORA_ID);
    setClient(cli);

    const loc = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(loc);
  };

  useEffect(() => {
    if (localStream) {
      if (user1?.current && user2?.current) {
        user1.current.srcObject = localStream;
        user2.current.srcObject = remoteStream;

        localStream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, localStream);
        });

        peerConnection.ontrack = (e) => {
          e.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack();
          });
        };

        peerConnection.onicecandidate = async (e) => {
          if (e.candidate) {
            console.log("new ice candidate:", e.candidate);
          }
        };

        (async () => {
          const offer = await peerConnection.createOffer();
          await peerConnection.setLocalDescription(offer);
        })();
      }
    }
  }, [localStream]);

  return (
    <div
      className={
        "h-screen flex justify-center items-center text-white flex-col gap-8 px-8"
      }
    >
      <div className="flex w-full">
        <button
          onClick={handleChat}
          className={"py-2.5 px-5 bgGradient rounded-md"}
        >
          Start
        </button>
      </div>
      <div id="videos" className={"grid grid-cols-2 gap-8"}>
        <video
          ref={user1}
          src=""
          autoPlay
          playsinline
          className={"video-player bg-[var(--bg-1)] w-full h-96"}
        ></video>
        <video
          ref={user2}
          src=""
          autoPlay
          playsinline
          className={"video-player bg-[var(--bg-1)] w-full h-96"}
        ></video>
      </div>
    </div>
  );
}
