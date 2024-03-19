import styles from "./posts.module.css";

import { Prism, Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";

import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { getPostFeedbacks } from "@/lib/feedback-util";

import PostHeader from "@/components/PostsLayout/PostHeader";
import Notification from "@/components/ui/Notification";

import Image from "next/image";
import Head from "next/head";

import { useDataContext } from "@/context/DataContaxt";
import { useEffect, useState } from "react";
import FeedbackItem from "@/components/PostsLayout/FeedbackItem";

const PostPage = (props) => {
  const [feedbacksList, setFeedbacksList] = useState([]);
  const { feedbackStatus, setFeedbackStatus } = useDataContext();
  useEffect(() => {
    if (feedbackStatus === true || feedbackStatus === false) {
      setTimeout(() => {
        setFeedbackStatus();
      }, 3000);
    }
    setFeedbacksList(props.feedbacks);
  }, [setFeedbackStatus, props.feedbacks, feedbackStatus]);

  const { content, title, image } = props.post;
  const imagePath = `/images/posts/${image}`;
  const CustomRendererImage = (props) => (
    <Image
      className={styles.BlogImage}
      src={props.src}
      width={500}
      height={500}
      loading="lazy"
      alt={props.alt + "-image"}
    />
  );

  const CustomeRendererCode = (props) => (
    <SyntaxHighlighter language={"jsx"} style={coldarkDark}>
      {props.children}
    </SyntaxHighlighter>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Notification
        success={feedbackStatus}
        Message={
          feedbackStatus == true
            ? "Your Feedback Successfully Send."
            : feedbackStatus == false
            ? "Sorry , Your Feedback Send Failed."
            : ""
        }
      />
      <div className={styles.Blogcontainer}>
        <div className={styles.header}>
          <PostHeader title={title} imagePath={imagePath} />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <ReactMarkdown
              components={{
                img: CustomRendererImage,
                code: CustomeRendererCode,
              }}>
              {content}
            </ReactMarkdown>
          </div>
          <div className={styles.sectionTitle}>
            <h2>Users Feedback :</h2>
            {feedbacksList.map((item, i) => (
              <FeedbackItem data={JSON.parse(item)} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const postsFileName = getPostsFiles();
  const slugs = postsFileName.map((postName) => {
    return postName.replace(/\.md$/, "");
  });
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: {
      post: getPostData(params.slug + ".md"),
      feedbacks: getPostFeedbacks(params.slug),
    },
  };
}
export default PostPage;
