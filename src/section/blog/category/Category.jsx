import Link from "next/link";
import CategoryWrapper from "./Category.style";
import SectionTitle from "@/src/common/sectionTitle";
import categories from "@/src/assets/data/blog/categories";
const Category = () => {
  return (
    <CategoryWrapper>
      <SectionTitle subtitle="Categories" className="widget_title" />

      <div className="category_list">
        {categories?.map((category, i) => (
          <Link key={i} href={category.url}>
            {category.title}
            <span>{`(${category.postCount})`}</span>
          </Link>
        ))}
      </div>
    </CategoryWrapper>
  );
};

export default Category;
