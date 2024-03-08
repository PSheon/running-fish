// ** Third-Party Imports
import styled, { keyframes } from "styled-components";

// ** Asset Imports
import sectionBgImage from "@/assets/images/home/banner/bg.png";

const particleSeaTurtle = keyframes`
  0%,
  100% {
    top: 160px;
  },
  50% {
    top: 200px;
}
`;
const particleJellyfish = keyframes`
  0%,
  100% {
    top: 50px;
  },
  50% {
    top: 75px;
  }
`;
const particleNautilus = keyframes`
  0%,
  100% {
    transform: rotate(20deg);
  },
  50% {
    transform: rotate(-20deg);
  }
`;

const BannerWrapper = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${sectionBgImage.src});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 125px;

  .banner_row {
    align-items: center;
  }

  .banner_left {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 60px;
      line-height: 1.35;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 32px;

      img {
        display: inline-block !important;
      }
    }

    h3 {
      font-size: 40px;
      line-height: 1.35;
      color: #ffffff;
      margin-bottom: 0;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 55px;

      button {
        width: 170px;
        height: 55px;
      }
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      span {
        font-family: "Bakbak One";
        text-transform: uppercase;
        font-size: 18px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.8);

        & .highlighted {
          color: #ffe600;
        }
      }
    }
  }

  .banner_right {
    .slick__slider__item {
      margin: 0 auto;
      img {
        margin: auto;
      }
    }
  }

  // coin slider

  .coin_info_slider {
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;

    img {
      filter: brightness(0) invert(1);
    }
  }

  // particles
  .particle {
    position: absolute;

    &.particle_sea_turtle {
      left: 140px;
      top: 180px;
      animation: ${particleSeaTurtle} 5s infinite;
    }
    &.particle_jellyfish {
      right: 340px;
      top: 70px;
      animation: ${particleJellyfish} 5s infinite;
    }
    &.particle_nautilus {
      right: 75px;
      bottom: 300px;
      animation: ${particleNautilus} 5s infinite;
    }
  }

  .banner_thumb {
    display: flex;
    cursor: pointer;
    transition: filter 0.3s ease, transform 0.3s ease;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8));

    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .banner_left {
      padding-left: 100px;
      h2 {
        font-size: 40px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 24px;
      }

      .banner_buttons {
        margin-top: 25px;
      }

      .coin-info {
        margin-top: 40px;
        span {
          font-size: 14px;
          line-height: 25px;
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .banner_left {
      padding-left: 150px;
      h2 {
        margin-bottom: 18px;
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    .banner_row {
      align-items: flex-start;
    }
    .banner_left {
      padding-left: 70px;
    }
    .particle {
      display: none;
    }

    .banner_thumb {
      width: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 120px 0 80px 0;

    .banner_right {
      margin-bottom: 60px;
    }

    .banner_left {
      padding-left: 0;
      max-width: 375px;
      margin: 0 auto;
      padding-bottom: 90px;

      h2 {
        font-size: 40px;
        margin-bottom: 15px;
      }

      h3 {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .coin-info {
        margin-top: 25px;
        span {
          font-size: 14px;
          line-height: 25px;
        }
      }

      .banner_buttons {
        margin-top: 25px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .banner_left {
      padding-bottom: 100px;

      h2 {
        font-size: 35px;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 20px;
      }

      .banner_buttons {
        margin-top: 15px;
        button {
          width: 160px;
          height: 50px;
        }
      }
    }

    .coin_info_slider {
      bottom: 40px;
    }
  }
  @media only screen and (max-width: 414px) {
    .banner_left {
      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 18px;
      }

      .banner_buttons {
        flex-direction: column;
        row-gap: 15px;
        button {
          width: 160px;
          height: 50px;
        }
      }
    }
  }
`;

export default BannerWrapper;
