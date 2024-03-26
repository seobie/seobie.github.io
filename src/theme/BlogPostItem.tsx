import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Comment from "../components/Comment";
import type { JSX } from "react/jsx-runtime";

export default function BlogPostItemWrapper(props: JSX.IntrinsicAttributes) {
  return (
    <>
      <BlogPostItem {...props} />
      <Comment />
    </>
  );
}
