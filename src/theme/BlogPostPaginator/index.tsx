import React from "react";
import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import Comment from "../../components/Comment";

export default function BlogPostPaginatorWrapper(props: any) {
  return (
    <>
      <BlogPostPaginator {...props} />
      <Comment />
    </>
  );
}
