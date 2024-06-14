export default function Video(user) {
  return (
    <video
      id={user}
      src=""
      autoPlay
      playsinline
      className={"video-player bg-[var(--bg-1)] w-full h-96"}
    />
  );
}
