import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import {TextInput} from "@repo/ui/text-input"



export default function Home() {
  return (
    <div >
      <TextInput placeholders="Hello"/>
      
    </div>
  );
}
