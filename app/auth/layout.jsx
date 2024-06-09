export default function AuthLayout({ children }) {
  return (
    <div className="h-screen">
      <div className="relative w-full h-full bg-[var(--bg)] flex justify-center items-center overflow-hidden">
        {children}
        <div className="cadre"></div>
      </div>
    </div>
  );
}
