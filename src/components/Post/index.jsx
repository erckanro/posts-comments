import React, { useState } from "react";
import Link from "next/link";
import SeeMore from "./SeeMore";
import styles from "./post.module.css";
import CommentList from "../CommentList";
import useFetchComments from "@/hooks/useFetchComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import PostActions from "./PostActions";
import { useTranslation } from "next-i18next";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Post = ({ post, ellipsis = true, visibleComments }) => {
  const { t } = useTranslation("post");
  const [seeMore, setSeeMore] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const comments = useFetchComments(post.id);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.post}>
      <div className={styles["post-wrapper"]}>
        <h2 className={styles.title}>{t(post.title)}</h2>
        <p className={styles.body}>
          {ellipsis
            ? seeMore
              ? t(post.body)
              : `${t(post.body.slice(0, 100))}...`
            : t(post.body)}
        </p>
        {ellipsis && (
          <SeeMore seeMore={seeMore} onClick={() => setSeeMore(!seeMore)} />
        )}
      </div>

      <PostActions comments={comments} />

      <CommentList comments={comments} visible={visibleComments} />

      <div className={styles.dropdown} onClick={toggleDropdown}>
        <button className={styles["dropdown-button"]}>
          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
        </button>
        {showDropdown && (
          <div className={styles["dropdown-content"]}>
            <Link href={`/post/${post.id}`}>Statistics</Link>
            <Link href="#" className="link disabled">
              Report
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
