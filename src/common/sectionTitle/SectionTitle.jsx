// ** Style Imports
import SectionTitleWrapper from "./SectionTitle.style";

// ** Asset Imports
import sectionTitleShape from "@/assets/images/icon/title_shapes.svg";
import sectionTitleShape2 from "@/assets/images/icon/title_shapes2.svg";

const SectionTitle = ({ title, subtitle, isCenter, ...props }) => {
  return (
    <SectionTitleWrapper {...props}>
      {subtitle && (
        <h2>
          {isCenter ? <img src={sectionTitleShape2.src} alt="" /> : ""}
          {subtitle}{" "}
          <img
            src={sectionTitleShape.src}
            alt="bithu nft section title shape"
          />{" "}
        </h2>
      )}
      {title && <h3>{title}</h3>}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
