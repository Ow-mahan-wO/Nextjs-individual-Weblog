import styles from "./ui.module.css";

import Button from "./Button";

import { useDataContext } from "@/context/DataContaxt";

const Filter = ({ posts }) => {
  const { setFilteredPosts } = useDataContext();

  const filterPostsByNameHandler = (e) => {
    let value = e?.target.value;
    if (value !== undefined) {
      const filtered = posts.filter((post) => {
        const filterValue = post.title?.toUpperCase().slice(0, value.length);
        return filterValue == value.toUpperCase();
      });
      setFilteredPosts(filtered);
    }
  };
  return (
    <div>
      <input
        className={styles.input}
        placeholder="Enter blog name"
        onChange={() => filterPostsByNameHandler(event)}
      />
      <Button>Search</Button>
    </div>
  );
};

export default Filter;
