import { useEffect, useState } from "react";
import { useModal } from "@/src/utils/ModalContext";
import { FaWallet } from "react-icons/fa";
import Navigation from "./Navigation";
import Button from "@/src/common/button";
import HeaderStyleWrapper from "./Header.style";

import logo from "@/src/assets/images/mint-logo.png";
import menuIcon from "@/src/assets/images/icon/mint-menu_icon.svg";

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
      }});

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderStyleWrapper id="navbar">
        <div className="header_wrapper">
          <div className="header_left">
            <div className="logo">
              <img src={logo.src} alt="logo" />
            </div>
          </div>
          <div className="header_right">
            <div className="bithu_menu_btns">
              <Button
                size="sm"
                variant="hovered"
                className="connect_btn"
                onClick={() => walletModalHandle()}
              >
                <FaWallet /> Connect
              </Button>
              <Button
                variant="outline"
                className="menu_btn"
                onClick={() => handleMobileMenu()}
              >
                <img src={menuIcon.src} alt="menu bar icon" />
              </Button>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>
      {isMobileMenu && <Navigation mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
