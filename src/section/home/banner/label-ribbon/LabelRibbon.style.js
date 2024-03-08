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
    pointer-events: auto;
    background-color: #31859d;
    border: 4px solid #effdff;
    color: #effdff;
    padding: 2px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.3);
    }
  }

  .private-team {
    left: 80px;
    top: 160px;
    transform: rotate(-20deg);
  }

  .no-pre-mining {
    left: 80px;
    bottom: 120px;
    transform: rotate(25deg);
  }

  .no-vc {
    left: 52%;
    top: 30%;
    transform: rotate(20deg);
  }

  .no-ido {
    left: 45%;
    top: 55%;
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
