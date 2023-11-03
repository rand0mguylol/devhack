"use server";
import bardClient from "@/app/provider";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";

export const requestBard = async (question, chatArr) => {

  chatArr.push({ content: question.trim() });

  let answer = '';
  let isValid = false;

  try {
    const result = await bardClient.generateMessage({
      model: process.env.BARD_MODEL_NAME,
      prompt: { messages: chatArr },
    });  

    if(result[0].candidates.length !== 0) {
      answer = result[0].candidates[0].content;
      isValid = true;
    } else{
      answer = "Something went wrong. Please try again";
      isValid = false;
    }
  }
  catch(error){
    answer = "Something went wrong. Please try again";
    isValid = false;
  }
  finally{
    await sql`INSERT INTO chats (question, answer, is_valid) VALUES (${question}, ${answer}, ${isValid})`
  }

  
  revalidatePath("/consult/bard");
};
