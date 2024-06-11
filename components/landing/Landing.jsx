import Link from "next/link";

export default function Landing() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[var(--bg-1)] rounded-md p-4 border border-[var(--bg-2)] cursor-pointer">
          <h2 className="text-[var(--primary-color)] font-bold text-2xl">
            Titre.
          </h2>
          <span className="text-slate-300 line-clamp-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quasi
            quam ullam obcaecati placeat? Minus fugit cum officiis optio sequi,
            iure ad vitae, excepturi illum aperiam laudantium quam eligendi
            deleniti.
          </span>
        </div>
        <div className="bg-[var(--bg-3)] rounded-md p-4 border border-[var(--bg-4)] cursor-pointer">
          <h2 className="text-white font-bold text-2xl">Titre.</h2>
          <span className="text-slate-300 line-clamp-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quasi
            quam ullam obcaecati placeat? Minus fugit cum officiis optio sequi,
            iure ad vitae, excepturi illum aperiam laudantium quam eligendi
            deleniti.
          </span>
        </div>
      </div>
      <Link
        href={{
          pathname: "/auth",
          query: {
            path: "login",
          },
        }}
      >
        Se connecter
      </Link>{" "}
      <br />
      <Link
        href={{
          pathname: "/auth",
          query: {
            path: "register",
          },
        }}
      >
        S{"'"}inscrire
      </Link>
    </>
  );
}
