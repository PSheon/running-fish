// ** Next Imports
import Image from "next/image";

// ** Context Imports
import { useModal } from "@/utils/ModalContext";

// ** Component Imports
// import { Slider, SliderItem } from "@/common/slider/Slider";
import Counter from "@/common/counter";
import Button from "@/common/button";
import CoinInfoSlider from "@/section/home/banner/coin-info-slider";

// ** Style Imports
import BannerWrapper from "./Banner.style";

// ** Asset Imports
// import heartIcon from "@/assets/images/home/banner/hart-icon.svg";
import thumb1 from "@/assets/images/home/banner/fish-egg-01.png";
import seaTurtleImage from "@/assets/images/home/banner/sea-turtle.png";
import jellyfishImage from "@/assets/images/home/banner/jellyfish.png";
import nautilusImage from "@/assets/images/home/banner/nautilus.png";

const Banner = () => {
  // ** Hooks
  const { mintModalHandle } = useModal();

  // ** Vars
  // const slideImages = [thumb1, thumb1];
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   autoplay: true,
  //   pauseOnHover: false,
  //   speed: 500,
  //   fade: true,
  //   autoplaySpeed: 500,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <BannerWrapper id="home">
      <div className="container">
        <div className="row banner_row">
          <div className="col-lg-7 order-1 order-lg-0">
            <div className="banner_left">
              <h3>Renouncing ownership! No roadmap!</h3>
              <h3>Just make</h3>
              <h2>running fish strong! 💪</h2>
              {/* <h3>
                <span className="count">
                  <Counter end={5555} duration={5555} />
                </span>{" "}
                / 5555 Minted
              </h3> */}
              <div className="banner_buttons">
                <Button
                  size="sm"
                  variant="mint"
                  onClick={() => mintModalHandle()}
                >
                  {" "}
                  Buy now
                </Button>
                {/* <Button size="sm" variant="outline">
                  Wishlist now
                </Button> */}
              </div>
              <div className="coin-info">
                <span>Total Supply: 10,000,000</span>
                <span>Price: 0.0000001 BNB</span>
                {/* <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 25 APR 04:00H</span>
                </span> */}
                {/* <span>Presale : SOLDOUT</span> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-0 order-lg-1">
            <div className="banner_right">
              {/* <Slider {...settings}>
                {slideImages?.map((thumb, idx) => (
                  <SliderItem key={idx}>
                    <div className="banner_thumb">
                      <img src={thumb.src} alt="thumb" />
                    </div>
                  </SliderItem>
                ))}
              </Slider> */}
              <div className="banner_thumb">
                <Image width={250} height={250} src={thumb1.src} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CoinInfoSlider />

      <span className="particle particle_sea_turtle">
        <Image width={75} height={100} src={seaTurtleImage.src} alt="icon" />
      </span>
      <span className="particle particle_jellyfish">
        <Image width={90} height={80} src={jellyfishImage.src} alt="icon" />
      </span>
      <span className="particle particle_nautilus">
        <Image width={76} height={72} src={nautilusImage.src} alt="icon" />
      </span>
    </BannerWrapper>
  );
};

export default Banner;
