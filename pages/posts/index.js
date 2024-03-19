import styles from "./posts.module.css";

import Filter from "@/components/ui/Filter";
import Pagination from "@/components/Pagination/Pagination";
import Layout from "@/components/layout/Layout";

import Head from "next/head";

import { getAllPosts } from "@/lib/posts-util";

import FilteredPosts from "@/components/AllPosts/FilteredPosts";

const index = (props) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Layout>
        <center>
          <h1 className={styles.title}>All Posts</h1>
        </center>
        <div className={styles.container}>
          <Filter posts={props.allPosts} />
        </div>
        <div className={styles.container}>
          <FilteredPosts allPosts={props.allPosts} />
        </div>
        <Pagination />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const AllPosts = getAllPosts();
  return {
    props: {
      allPosts: AllPosts,
    },
  };
}

export default index;
