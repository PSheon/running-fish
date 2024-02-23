import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avatarThumb1 from "@/src/assets/images/team/v2_team_1.png"; 
import avatarThumb2 from "@/src/assets/images/team/v2_team_2.png"; 
import avatarThumb3 from "@/src/assets/images/team/v2_team_3.png"; 
import avatarThumb4 from "@/src/assets/images/team/v2_team_4.png"; 

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
    name: "Lynnette Wilkes",
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
    designation: "Software Engineer",
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
