import Link from "next/link";

export default function Bouton({ label, bg, color, width }) {
  return (
    <>
      <button
        className={`text-[var(--${color})] rounded-full py-2 px-12 bg-[var(--${bg})] font-bold w-${width}`}
      >
        {label}
      </button>
    </>
  );
}
export function Lien({ label, icon, url }) {
  return (
    <>
      <Link
        href={{ url }}
        className=" w-full flex items-center gap-6 px-8 py-5  lien  "
      >
        {icon}
        <p className=" capitalize">{label}</p>
      </Link>
    </>
  );
}
