import React, { useEffect, useState } from "react";
import BarChart from "@/components/BarChart";
import CommentTable from "@/components/CommentTable";
import useFetchPosts from "@/hooks/useFetchPosts";
import useFetchComments from "@/hooks/useFetchComments";
import Post from "@/components/Post";
import BackButton from "@/components/BackButton";
import styles from "./stats.module.css";

const PostID = ({ postId }) => {
  const post = useFetchPosts(null, postId);
  const comments = useFetchComments(postId);
  const [commentLengths, setCommentLengths] = useState([]);

  useEffect(() => {
    const lengths = comments.map((comment) => comment.body.length);
    setCommentLengths(lengths);
  }, [comments]);
  console.log(post.loading);

  return (
    <div className={styles["stats-wrapper"]}>
      <BackButton />
      {post.loading ? (
        <div className="loader-wrapper main">
          <div class="loader-bar">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Post post={post.posts} ellipsis={false} visibleComments={5} />
          <BarChart data={commentLengths} />
          <CommentTable comments={comments} />
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.query;

  return {
    props: {
      postId,
    },
  };
}

export default PostID;
