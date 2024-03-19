import { useDataContext } from "@/context/DataContaxt";
import CardPost from "../PostsLayout/CardPost";

const FilteredPosts = ({allPosts}) => {
    const { filteredPosts } = useDataContext();
  return (
    <>
      {filteredPosts != null
        ? filteredPosts?.map((post, i) => <CardPost post={post} key={i} />)
        : allPosts?.map((post, i) => <CardPost post={post} key={i} />)}
    </>
  );
};

export default FilteredPosts;
