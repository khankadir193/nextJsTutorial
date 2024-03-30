'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name,setName] = useState('Abdullah Khan');

  const handleClick = ()=> {
    setName('Iqra Khan');
  };

  const navigationPage = (routePath)=>{
   if(routePath === 'login'){
    router.push('/login');
   }else{
    router.push('/about');
   }
  }

  const router = useRouter();

  return (
    <main className={styles.main}>
      <User name="Abdul Kadir Khan" />
      <User name="Abdul Jabir Khan" />
      {/* <User name="Rehan Khan"/> */}
      {User({name:"Rehan Khan"})}
      <h1>Hello Next.js</h1>
      <h2>Hi What is your name:{name}</h2>
      <button onClick={handleClick}>click</button>

      <Link href="/login">Go to login Page</Link>
      <Link href="/about">Go to about Page</Link>
      <button onClick={()=>navigationPage('login')}>Go to login Page</button>
      <button onClick={()=>navigationPage('about')}>Go to about Page</button>
    </main>
  );
}

const User = (props)=>{
  return (
    <h2>Hi my name is {props.name}</h2>
  );
}
