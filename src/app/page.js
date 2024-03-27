import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Abdul Kadir Khan" />
      <User name="Abdul Jabir Khan" />
      <User name="Rehan Khan"/>

      <h1>Hello Next.js</h1>
    </main>
  );
}

const User = (props)=>{
  return (
    <h2>Hi my name is {props.name}</h2>
  )
}
