import Link from "next/link";
import CountdDown, { zeroPad } from "react-countdown";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "@/src/common/button";

import msgIcon from "@/src/assets/images/icon/message-favorite.svg";
import openseaIcon from "@/src/assets/images/icon/opensea.svg";
import mediumIcon from "@/src/assets/images/icon/med.svg";
import hoverShape from "@/src/assets/images/icon/hov_shape_s.svg";
import Particle from "./Particles";
import UpcomingStyleWrapper from "./Upcoming.style";

const CountdownElement = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown_wrapper">
      <div className="count_number">
        <span className="count_value">{zeroPad(days)}</span>{" "}
        <span className="label">Days</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(hours)} </span>{" "}
        <span className="label">Hours</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(minutes)} </span>
        <span className="label">Minutes</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(seconds)} </span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

const Upcoming = () => {
  return (
    <UpcomingStyleWrapper>
      <Particle />
      <div className="container-fluid">
        <div className="upcoming_content">
          <h2 className="title">MINT COMING SOON</h2>
          <div className="time_count">
            <CountdDown
              date={Date.now() + 1675076996}
              renderer={CountdownElement}
            />

            <div className="note">
              <h5>
                Leave Your Email to Be Notified About Presales & Whitelist
              </h5>
            </div>
          </div>

          <div className="input_box">
            <input type="email" placeholder="Email Address" />
            <button>
              {" "}
              Notify Me <img src={msgIcon.src} alt="icon" />
            </button>
          </div>

          <div className="cta_btns">
            <Button size="lg" variant="outline">
              {" "}
              <FaDiscord /> Join Discord{" "}
            </Button>
            <Button size="lg" variant="outline">
              {" "}
              <FaXTwitter /> Join Twitter{" "}
            </Button>
          </div>
        </div>
        <div className="social_links">
          <Link href="#">
            <img src={openseaIcon.src} alt="icon" />
            <span className="hover_shape">
              <img src={hoverShape.src} alt="shape" />
            </span>
          </Link>

          <Link href="#">
            <FaLinkedinIn />
            <span className="hover_shape">
              <img src={hoverShape.src} alt="shape" />
            </span>
          </Link>

          <Link href="#">
            <FaInstagram />
            <span className="hover_shape">
              <img src={hoverShape.src} alt="shape" />
            </span>
          </Link>
          <Link href="#">
            <FaTelegramPlane />
            <span className="hover_shape">
              <img src={hoverShape.src} alt="shape" />
            </span>
          </Link>
          <Link href="#">
            <FaFacebook />
            <span className="hover_shape">
              <img src={hoverShape.src} alt="shape" />
            </span>
          </Link>
          <Link href="#">
            <img src={mediumIcon.src} alt="icon" />
            <span className="hover_shape">
              <img src={hoverShape.src} alt="shape" />
            </span>
          </Link>
        </div>
      </div>
    </UpcomingStyleWrapper>
  );
};

export default Upcoming;
