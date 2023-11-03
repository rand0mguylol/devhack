import BardWrapper from "@/app/components/Bard/BardWrapper";
import { promises as fs } from "fs";
import { sql } from "@vercel/postgres";


export default async function BardPage() {
  const { rows } = await sql`SELECT * FROM chats`;

  return <BardWrapper chat={rows}/>;
}

export const dynamic = 'force-dynamic'