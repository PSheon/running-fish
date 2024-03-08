// ** Style Imports
import LabelRibbonWrapper from "./LabelRibbon.style";

const LabelRibbon = () => {
  return (
    <LabelRibbonWrapper>
      <div className="ribbon-wrapper private-team">
        <h3>Private Team</h3>
      </div>
      <div className="ribbon-wrapper no-pre-mining">
        <h3>No Pre-mining</h3>
      </div>
      <div className="ribbon-wrapper no-vc">
        <h3>No VC</h3>
      </div>
      <div className="ribbon-wrapper no-ido">
        <h3>No IDO</h3>
      </div>
      <div className="ribbon-wrapper no-pre-sale">
        <h3>No Pre-sale</h3>
      </div>
      <div className="ribbon-wrapper no-roadmap">
        <h3>No Roadmap</h3>
      </div>
      <div className="ribbon-wrapper no-empowerment">
        <h3>No Empowerment</h3>
      </div>
    </LabelRibbonWrapper>
  );
};

export default LabelRibbon;
