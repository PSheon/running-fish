import { useState } from "react";
import { useModal } from "@/src/utils/ModalContext"; 

import Button from "@/src/common/button";
import CountdDown from "@/src/common/countDown";
import Particle from "@/src/common/particle/v2";

import bannerThumb1 from "@/src/assets/images/banner/Item1.png";
import bannerThumb2 from "@/src/assets/images/banner/Item2.png";
import bannerThumb3 from "@/src/assets/images/banner/Item3.png";
import BannerStyleWrapper from "./Banner.style";
const Banner = () => {
  const { mintModalHandle } = useModal();
  const [count, setCount] = useState(1);

  const settings = {
    count: 5432560,
    showTitle: true, 
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "",
    hourTitle: "",
    minuteTitle: "",
    secondTitle: "", 
    id: "countdownwrap",
  };

  return (
    <BannerStyleWrapper className="bithu_v3_baner_sect" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-image-area3">
              {/* particles component */}
              <Particle />
              <img
                className="banner-image banner-image1"
                src={bannerThumb1.src}
                alt="bithu banner thumb"
              />
              <img
                className="banner-image banner-image2"
                src={bannerThumb2.src}
                alt="bithu banner thumb"
              />
              <img
                className="banner-image banner-image3"
                src={bannerThumb3.src}
                alt="bithu banner thumb"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-conent3">
              <h4 className="banner-subtitle text-uppercase">
                Whitelist : <span className="red-color">Soldout</span>
              </h4>
              <h1 className="banner-title text-uppercase">Mint is live now</h1>
              <div className="bithu_v3_timer">
                <h5 className="text-uppercase">Public Mint end in</h5>
                <div className="timer">
                <CountdDown date={Date.now() + 1675076996} />
                </div>
              </div>
              <div className="banner-count-inner d-flex align-items-center">
                <div className="banner-btn-area">
                  <span
                    className="input-number-decrement"
                    onClick={() => (count > 1 ? setCount(count - 1) : count)}
                  >
                    –
                  </span>
                  <input
                    className="input-number"
                    type="text"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <span
                    className="input-number-increment"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </span>
                </div>
                <div className="bithu_v3_baner_buttons">
                  <Button size="lg" variant="mint" onClick={() => mintModalHandle()}>
                    Mint Now
                  </Button>
                </div>
              </div>
              <div className="banner-bottom-text text-uppercase">
                Public Mint 0.09 Eth + Gas Floor Price 2.08 Eth
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;