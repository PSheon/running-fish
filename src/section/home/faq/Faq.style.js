// ** Third-Party Imports
import styled from "styled-components";

// ** Asset Imports
import BgShape from "@/assets/images/home/faq/bg.jpg";

const FAQStyleWrapper = styled.section`
  background: url(${BgShape.src}) no-repeat;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 150px 0;
  display: flex;
  align-items: center;

  .section_title {
    margin-bottom: 45px;
  }

  .faq_row {
    row-gap: 10px;
  }

  .faq_questions_wrapper {
    position: relative;

    .faq_questions {
      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {
        margin-top: 10px;
      }
    }
  }
  .accordion__item {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
  .accordion__header {
    h5 {
      display: flex;
      align-items: center;
      height: 75px;
      margin-bottom: 0px;
      padding: 0 29px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 24px;
      line-height: 34px;
      text-transform: none;
    }
  }

  .accordion__body {
    p {
      padding: 0px 48px 24px 29px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
      max-width: 100%;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .accordion__header {
      h5 {
        height: 55px;
        font-size: 21px;
      }
    }

    .accordion__body {
      p {
        font-size: 13px;
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .section_title {
      h3 {
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .section_title {
      h3 {
        font-size: 40px;
      }
    }

    .accordion__header {
      h5 {
        font-size: 17px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .section_title {
      h3 {
        font-size: 34px;
      }
    }
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .section_title {
      h3 {
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 667px) {
    .bithu_title_text {
      margin: 30px 0 57px 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .accordion__header {
      h5 {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .accordion__body {
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__header {
      h5 {
        font-size: 18px;
      }
    }
  }
`;

export default FAQStyleWrapper;
