"use server";
import bardClient from "@/app/provider";
import { revalidatePath } from "next/cache";
import { promises as fs } from "fs";
import fsPromises from "fs/promises";
import path from "path";

export const requestBard = async (question, chatArr) => {

  // console.log('test server action')
  const dataFilePath = path.join(process.cwd(), "/public/data/chat.json");
  const file = await fs.readFile(process.cwd() + "/public/data/chat.json", "utf8");
  const data = JSON.parse(file);
  const { chat } = data;

  chatArr.push({ content: question });

  console.log(chatArr)

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


  chat.push({ question: question, answer: answer, isValid: isValid });
  data.chat = chat;

  const updatedData = JSON.stringify(data);
  // console.log(file);
  await fsPromises.writeFile(dataFilePath, updatedData);

  revalidatePath("/consult/bard");
};
