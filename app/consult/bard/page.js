import BardWrapper from "@/app/components/Bard/BardWrapper";
import { promises as fs } from "fs";

export default async function BardPage() {
  const file = await fs.readFile(process.cwd() + "/app/data/chat.json", "utf8");
  const data = JSON.parse(file);
  const { chat } = data

  return <BardWrapper chat={chat}/>;
}
