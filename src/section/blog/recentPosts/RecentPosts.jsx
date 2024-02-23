import Link from "next/link";
import RecentPostsStyleWrapper from "./RecentPosts.style";
import SectionTitle from "@/src/common/sectionTitle";
import data from "@/src/assets/data/blog/blogItems";

const RecentPosts = () => {
  const { posts } = data;
  return (
    <RecentPostsStyleWrapper className="recent_post_list">
      <SectionTitle subtitle="Recent Posts" className="widget_title" />
      {posts?.map(
        (post, i) =>
          i < 3 && (
            <div key={i} className="recent_post_item">
              <img src={post.thumbnail.src} alt="bithu nft post thumb" />
              <div className="post_title">
                <span>{post.timeStamp}</span>
                <Link href="# ">{post.title}</Link>
              </div>
            </div>
          )
      )}
    </RecentPostsStyleWrapper>
  );
};

export default RecentPosts;
