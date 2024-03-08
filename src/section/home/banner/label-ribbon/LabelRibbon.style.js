import styled from "styled-components";

const LabelRibbonWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  .ribbon-wrapper {
    position: absolute;
    width: fit-content;
    background-color: #31859d;
    border: 4px solid #effdff;
    color: #effdff;
    padding: 2px 16px;
    display: flex;
    align-items: center;
  }

  .private-team {
    left: 80px;
    top: 120px;
    transform: rotate(-20deg);
  }

  .no-pre-mining {
    left: 80px;
    bottom: 120px;
    transform: rotate(25deg);
  }

  .no-vc {
    left: 600px;
    top: 340px;
    transform: rotate(20deg);
  }

  .no-ido {
    left: 600px;
    top: 440px;
    transform: rotate(-10deg);
  }

  .no-pre-sale {
    left: 600px;
    bottom: 100px;
    transform: rotate(10deg);
  }

  .no-roadmap {
    right: 120px;
    top: 160px;
    transform: rotate(10deg);
  }

  .no-empowerment {
    right: 80px;
    bottom: 160px;
    transform: rotate(5deg);
  }

  @media (max-width: 1180px) {
    .ribbon-wrapper {
      display: none;
    }
  }
`;

export default LabelRibbonWrapper;
