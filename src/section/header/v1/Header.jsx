import Link from "next/link";
import { useModal } from "@/src/utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "@/src/common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "@/src/assets/images/logo.png";

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">
          {/* Main Menu Start */}
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                <Link href="/">
                  <img src={logo.src} alt="bithu nft logo" />
                </Link>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
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
                  <li>
                    <Link href="#team">Team</Link>
                  </li>
                  <li>
                    <Link href="#faq">FAQ</Link>
                  </li>
                  <li className="submenu">
                    <Link href="# ">Pages +</Link>
                    <div className="sub_menu_sect">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="sub_menu_list">
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
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="sub_menu_list">
                              <li>
                                <a href="/about">About Us </a>
                              </li>
                              <li>
                                <Link href="/collections">Collections</Link>
                              </li>
                              <li>
                                <Link href="/roadmap">Roadmap</Link>
                              </li>
                              <li>
                                <Link href="/faq"> FAQs </Link>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bithu_menu_btns">
                <button className="menu_btn" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                <Button size="sm" variant="outline" className="join_btn">
                  <FaDiscord /> Join
                </Button>
                <Button
                  size="sm"
                  variant="hovered"
                  className="connect_btn"
                  onClick={() => walletModalHandle()}
                >
                  <FaWallet /> Connect
                </Button>
              </div>
            </div>
          </div>
          {/* <!-- Main Menu END --> */}
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
