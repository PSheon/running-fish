import Link from "next/link";
import TagStyleWrapper from "./tag.style";
import tags from "@/src/assets/data/blog/tags";
const Tag = () => {
  return (
    <TagStyleWrapper className="tag_items">
      {tags?.map((tag, i) => (
        <Link key={i} href={tag.url}>
          {" "}
          {tag.title}
        </Link>
      ))}
    </TagStyleWrapper>
  );
};

export default Tag;
