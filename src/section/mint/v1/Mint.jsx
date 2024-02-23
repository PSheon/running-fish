import { useState } from "react";
import { useModal } from "@/src/utils/ModalContext";
import { Slider, SliderItem } from "@/src/common/slider/Slider";
import Button from "@/src/common/button";

import thumb1 from "@/src/assets/images/nft/emoji-img4.png";
import thumb2 from "@/src/assets/images/nft/emoji-img5.png";
import thumb3 from "@/src/assets/images/nft/emoji-img6.png";

import MintStyleWrapper from "./Mint.style";
import Link from "next/link";
const Mint = () => {
  const [count, setCount] = useState(1);
  const { mintModalHandle } = useModal();

  const slideImages = [thumb1, thumb2, thumb3];

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChenge = () => {};

  return (
    <MintStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mint_left">
              <Slider {...settings}>
                {slideImages?.map((thumb, idx) => (
                  <SliderItem key={idx}>
                    <div className="mint_thumb">
                      <img src={thumb.src} alt="thumb" />
                    </div>
                  </SliderItem>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mint_right">
              <ul className="mint_count_list">
                <li>
                  <h5>Remaining</h5>
                  <h5>
                    4583/<span>9999</span>
                  </h5>
                </li>
                <li>
                  <h5>Price</h5>
                  <h5>0.15 ETH</h5>
                </li>
                <li>
                  <h5>Quantity</h5>
                  <div className="mint_quantity_sect">
                    <button
                      className="input_number_decrement"
                      onClick={() => (count > 1 ? setCount(count - 1) : count)}
                    >
                      -
                    </button>
                    <input
                      className="input_number"
                      type="text"
                      value={count}
                      onChange={handleChenge}
                    />
                    <button
                      className="input_number_increment"
                      onClick={() => (count > 0 ? setCount(count + 1) : count)}
                    >
                      +
                    </button>
                  </div>
                  <h5>
                    <span>0.30</span> ETH
                  </h5>
                </li>
              </ul>
              <Button size="lg" variant="mint" onClick={() => mintModalHandle()}>
                {" "}
                Mint now
              </Button>
              <p>
                By clicking “MINT”, You agree to our{" "}
                <Link href="#">Terms of Service</Link> and our
                <Link href="#">Privacy Policy.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;
