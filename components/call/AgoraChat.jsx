"use client";

import Video from "./Video";
import AgoraRTC from "agora-rtc-sdk-ng";

import {
  ClientContext,
  StartContext,
  UserContext,
} from "@/context/GlobalContext";
import { useContext, useRef } from "react";

export default function AgoraChat() {
  const { rtc } = useContext(ClientContext);
  const { users, setUsers } = useContext(UserContext);
  const { start, setStart } = useContext(StartContext);
  const vidDiv = useRef(null);

  const initClientEvents = () => {
    rtc.current.client.on("user-published", async (user, mediaType) => {
      // New User Enters
      await rtc.current.client.subscribe(user, mediaType);
      if (mediaType === "video") {
        const remoteVideoTrack = user.videoTrack;
        setUsers((prevUsers) => {
          return [
            ...prevUsers,
            {
              uid: user.uid,
              audio: user.hasAudio,
              video: user.hasVideo,
              client: false,
              videoTrack: remoteVideoTrack,
            },
          ];
        });
      }

      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
        setUsers((prevUsers) => {
          return prevUsers.map((User) => {
            if (User.uid === user.uid) {
              return { ...User, audio: user.hasAudio };
            }
            return User;
          });
        });
      }
    });

    rtc.current.client.on("user-unpublished", (user, type) => {
      //User Leaves
      if (type === "audio") {
        setUsers((prevUsers) => {
          return prevUsers.map((User) => {
            if (User.uid === user.uid) {
              return { ...User, audio: !User.audio };
            }
            return User;
          });
        });
      }
      if (type === "video") {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      }
    });
  };

  let init = async (name) => {
    rtc.current.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    initClientEvents();
    const uid = await rtc.current.client.join(
      process.env.NEXT_PUBLIC_AGORA_ID,
      name,
      token,
      null
    );
    // Create an audio track from the audio sampled by a microphone.
    rtc.current.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // Create a video track from the video captured by a camera.
    rtc.current.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    //Adding a User to the Users State
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          uid: uid,
          audio: true,
          video: true,
          client: true,
          videoTrack: rtc.current.localVideoTrack,
        },
      ];
    });
    //Publishing your Streams
    await rtc.current.client.publish([
      rtc.current.localAudioTrack,
      rtc.current.localVideoTrack,
    ]);
    setStart(true);
  };

  const playVideo = (user) => {
    user.videoTrack.play(vidDiv.current);
  };
  const stopVideo = (user) => {
    user.videoTrack.stop();
  };

  useEffect(() => {
    playVideo();
    return () => {
      stopVideo();
    };
  }, [users]);

  const leaveChannel = async () => {
    // Destroy the local audio and video tracks.
    await rtc.current.localAudioTrack.close();
    await rtc.current.localVideoTrack.close();
    await rtc.current.client.leave();
    setUsers([]);
    setStart(false);
  };

  const mute = (type, id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.uid === id) {
          if (type === "audio") {
            user.client && rtc.current.localAudioTrack.setEnabled(!user.audio);
            return { ...user, audio: !user.audio };
          } else if (type === "video") {
            user.client && rtc.current.localVideoTrack.setEnabled(!user.video);
            return { ...user, video: !user.video };
          }
        }
        return user;
      })
    );
  };

  return (
    <div id="videos" ref={vidDiv}>
      {users.length > 0 &&
        users.map((user) => <Video key={user.uid} user={user} />)}
    </div>
  );
}
