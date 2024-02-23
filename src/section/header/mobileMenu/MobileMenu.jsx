import Link from "next/link";
import { useState } from "react";
import { useModal } from "@/src/utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "@/src/common/button";
import logo from "@/src/assets/images/logo.png";
import openseaIcon from "@/src/assets/images/icon/opensea.svg";

import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };
  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="bithu_logo" src={logo.src} alt="bithu logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li></li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
            <li className="submenu mobile_submenu" onClick={handleSubmenu}>
              <Link href="# ">Pages +</Link>
              <ul
                className={`sub_menu_list mobile_sub_menu_list ${
                  isSubmenu === true && "submenu_hovered"
                }`}
              >
                <li>
                  <Link href="/">Home One</Link>
                </li>
                <li>
                  <Link href="/home-two">Home Two</Link>
                </li>
                <li>
                  <Link href="/home-three">Home Three</Link>
                </li>
                <li>
                  <Link href="/home-four">Home Four</Link>
                </li>
                <li>
                  <Link href="/home-five">Home Five</Link>
                </li>
                <li>
                  <Link href="/mint-1">Minting Page 1</Link>
                </li>
                <li>
                  <Link href="/mint-2">Minting Page 2</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/roadmap">Roadmap</Link>
                </li>
                <li>
                  <Link href="/collections">Collections</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/coming-soon">Coming Soon</Link>
                </li>
                <li>
                  <Link href="/blogs">Latest Blog</Link>
                </li>
                <li>
                  <Link href="/post">Blog Details</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <Link href="# ">
            <img src={openseaIcon.src} alt="bithu social icon" />
          </Link>
          <Link href="# ">
            <FaTwitter />
          </Link>
          <Link href="# ">
            <FaDiscord />
          </Link>
        </div>
        <Button
          size="sm"
          variant="hovered"
          className="connect_btn"
          onClick={() => walletModalHandle()}
        >
          <FaWallet /> Connect
        </Button>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
