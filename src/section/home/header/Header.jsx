// ** React Imports
import { useEffect, Fragment } from "react";

// ** Context Imports
import { useModal } from "@/utils/ModalContext";

// ** Icon Imports
import { FaWallet } from "react-icons/fa";

// ** Component Imports
import Button from "@/common/button";

// ** Style Imports
import HeaderStyleWrapper from "./Header.style";

// ** Asset Imports
import logo from "@/assets/images/home/header/logo.png";

const Header = () => {
  // ** Hooks
  const { walletModalHandle } = useModal();

  // ** Side Effects
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
    <Fragment>
      <HeaderStyleWrapper id="navbar">
        <div className="header_wrapper">
          <div className="header_left">
            <div className="logo">
              <img src={logo.src} alt="logo" />
            </div>
          </div>
          <div className="header_right">
            <div className="header_menu_buttons">
              <Button
                size="sm"
                variant="hovered"
                className="connect_button"
                onClick={() => walletModalHandle()}
              >
                <FaWallet /> Connect
              </Button>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>
    </Fragment>
  );
};

export default Header;
