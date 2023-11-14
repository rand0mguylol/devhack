"use client";

import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import { Box } from "@mui/material";
import CommentWrapper from "@/app/components/Community/CommentWrapper";
import CommentBox from "@/app/components/Community/CommentBox";
import ParentComment from "@/app/components/Community/ParentComment";
import ChildComment from "@/app/components/Community/ChildComment";
import PostHeader from "@/app/components/Community/PostHeader";
import { useState, useTransition } from "react";

export default function PostPageWrapper() {
  const [comments, setComments] = useState([]); //
  const [commentValue, setCommentValue] = useState("");

  const handleOnChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSearch = async () => {
    if (commentValue === "") return;
    setCommentValue("");
    setComments((prev) => [...prev, commentValue]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <WrapperHalf>
        <PageTitle title={""} variant="h5" hasBack={true} />
      </WrapperHalf>

      <PostHeader />

      <Box>
        <CommentWrapper>
          <ParentComment
            comment={
              "Incorrect attachment of the baby on the breast is the most common cause of nipple pain from breastfeeding.Try to avoid soaps and shampoos during showering to help prevent nipple dryness."
            }
          />
          <ChildComment />
        </CommentWrapper>
      </Box>

      <Box>
        <CommentWrapper>
          <ParentComment
            comment={
              "Incorrect attachment of the baby on the breast is the most common cause of nipple pain from breastfeeding.Try to avoid soaps and shampoos during showering to help prevent nipple dryness."
            }
          />
        </CommentWrapper>
      </Box>

      {comments.map((comment, index) => {
        return (
          <Box key={index}>
            <CommentWrapper>
              <ParentComment comment={comment} />
            </CommentWrapper>
          </Box>
        );
      })}
      <CommentBox
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
        onChange={handleOnChange}
        value={commentValue}
      />
    </div>
  );
}
