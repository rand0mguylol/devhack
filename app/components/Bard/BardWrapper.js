"use client";

import Wrapper from "@/app/components/Common/Wrapper";
import PageTitle from "@/app/components/Common/PageTitle";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchBar from "@/app/components/Bard/SearchBar";
import Question from "@/app/components/Bard/Question";
import Answer from "@/app/components/Bard/Answer";
import { startTransition, useState } from "react";
import { requestBard } from "@/app/_actions/Bard";
import { useTransition } from "react";
import LoadingChat from "./LoadingChat";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserProvider";

export default function BardWrapper(props) {
  const userID = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const [tempValue, setTempValue] = useState("");

  const [isPending, startTransition] = useTransition();

  const chatArr = [];

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async () => {
    if (searchValue === "") return;
    setTempValue(searchValue);
    setSearchValue("");
    startTransition(() => {
      requestBard(searchValue, chatArr, userID);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <PageTitle title="PaLM" variant="h5" hasBack={true} />

      <Box
        sx={{
          height: "90%",
          width: "100%",
          backgroundColor: "#fff",
          marginTop: "25px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Start of chat container */}
        <Box
          sx={{
            height: "100%",
            color: "black",
            overflowY: "auto",
            padding: "20px",
            paddingBottom: "20px",
          }}
        >
          {props.chat
            .filter((item) => item.userid === userID)
            .map((item, index) => {
              if (item.is_valid) {
                chatArr.push({ content: item.question });
                chatArr.push({ content: item.answer });
              }
              return (
                <Box key={index}>
                  <Question value={item.question} />
                  <Answer value={item.answer} />
                </Box>
              );
            })}

          {isPending && <Question value={tempValue} />}
          {isPending && <LoadingChat />}
        </Box>

        <SearchBar
          value={searchValue}
          onChange={handleOnChange}
          onSearch={handleSearch}
          onKeyDown={handleKeyPress}
        />
      </Box>
    </Wrapper>
  );
}
