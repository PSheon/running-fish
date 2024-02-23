import { useModal } from "@/src/utils/ModalContext";
import Counter from "@/src/common/counter";
import Button from "@/src/common/button";
import BannerV1Wrapper from "./Banner.style";

import characterThumb from "@/src/assets/images/nft/Character1.png";
import mintLiveDownArrow from "@/src/assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "@/src/assets/images/nft/mint_live_text.png";
import homeImageBG from "@/src/assets/images/nft/home_img_bg.png";

const Banner = () => {
  const { mintModalHandle } = useModal();
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>Crazy Meta 🎯 NFT collections</h2>
              <h3>
                <span className="count">
                  <Counter end={5555} duration={5555} />
                </span>{" "}
                / 5555 Minted
              </h3>
              <div className="banner_buttons">
                <Button size="lg" variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button>
                <Button size="lg" variant="outline">
                  Wishlist now
                </Button>
              </div>
              <div className="coin-info">
                <span>Max 2 NFTs per wallet . Price 0.09 ETH + gas</span>
                <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 25 APR 04:00H</span>
                </span>
                <span>Presale : SOLDOUT</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow.src} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText.src} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bithu_v1_baner_right_img_bg">
                  <img src={homeImageBG.src} alt="" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  <img src={characterThumb.src} alt="avater" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
