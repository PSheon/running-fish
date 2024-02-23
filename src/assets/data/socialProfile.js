import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import openseaIcon from "@/src/assets/images/icon/opensea.svg";
import mediumIcon from "@/src/assets/images/icon/med.svg";

const data = [
  {
    thumb: openseaIcon,
    url: "#",
  },
  {
    icon: <FaXTwitter />,
    url: "#",
  },
  {
    icon: <FaLinkedinIn />,
    url: "#",
  },
  {
    icon: <FaFacebook />,
    url: "#",
  },
  {
    icon: <FaInstagram />,
    url: "#",
  },
  {
    icon: <FaTelegramPlane />,
    url: "#",
  },
  {
    thumb: mediumIcon,
    url: "#",
  },
];

export default data;
