import Link from "next/link";

export default function Landing() {
  return (
    <>
      <Link href={{ pathname: "/auth/login" }}>Se connecter</Link> <br />
      <Link href={{ pathname: "/auth/register" }}>S{"'"}inscrire</Link>
    </>
  );
}
