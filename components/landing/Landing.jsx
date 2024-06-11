import Link from "next/link";

export default function Landing() {
  return (
    <>
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
