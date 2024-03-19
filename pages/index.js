import { getFeaturedPosts } from "@/lib/posts-util";

import FeaturedPosts from "@/components/HomePage/Featured-posts";
import Hero from "@/components/HomePage/Hero";
import Layout from "@/components/layout/Layout";

function Home(props) {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedPosts featuredPosts={props.featuredPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts: featuredPosts,
    },
  };
}

export default Home;
