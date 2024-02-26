import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avatarThumb1 from "@/assets/images/team/v4_crew1.png";
import avatarThumb2 from "@/assets/images/team/v4_crew2.png";
import avatarThumb3 from "@/assets/images/team/v4_crew3.png";
import avatarThumb4 from "@/assets/images/team/v4_crew4.png";

const data = [
  {
    avatar: avatarThumb1,
    name: "Berneice Tran",
    designation: "Founder",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaXTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  },
  {
    avatar: avatarThumb2,
    name: "Nathan Bean",
    designation: "Co-Founder",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaXTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  },
  {
    avatar: avatarThumb3,
    name: "Lynnette 4Wilkes",
    designation: "Artist",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaXTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  },
  {
    avatar: avatarThumb4,
    name: "Claudia Hicks",
    designation: "Co-Artist",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaXTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  },
];

export default data;
