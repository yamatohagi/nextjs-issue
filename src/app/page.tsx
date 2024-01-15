import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  console.error("home");
  return (
    <>
      <Link href="/test">test</Link>
    </>
  );
}
