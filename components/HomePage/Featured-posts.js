import CardPost from "../PostsLayout/CardPost";

import styles from "./featured-posts.module.css";

const FeaturedPosts = ({ featuredPosts }) => {
  return (
    <div>
      <section className={styles.FeaturedPostsContainer}>
        <center>
          <h1>Featured Posts</h1>
        </center>
        <div className={styles.PostsGrid}>
          {featuredPosts.map((post, i) => (
            <CardPost post={post} key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedPosts;
