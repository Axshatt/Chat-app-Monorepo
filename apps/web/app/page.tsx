"use client"
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import { TextInput } from "@repo/ui/text-input"
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"
    }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}>

        <TextInput placeholders="Hello" />
        <button onClick={()=>{
          router.push("/chat/123")
        }}>Join Room </button>
      </div>

    </div>
  );
}
