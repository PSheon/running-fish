// ** React Imports
import { useEffect, Fragment } from "react";

// ** Next Imports
import Image from "next/image";

// ** Component Imports
import WalletProfile from "@/section/home/header/wallet-profile/WalletProfile";

// ** Style Imports
import HeaderStyleWrapper from "./Header.style";

// ** Asset Imports
import semiLogoImage from "@/assets/images/home/header/semi-logo.png";

const Header = () => {
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
              <Image
                width={48}
                height={48}
                src={semiLogoImage.src}
                alt="running fish"
              />
            </div>
          </div>
          <div className="header_right">
            <WalletProfile />
          </div>
        </div>
      </HeaderStyleWrapper>
    </Fragment>
  );
};

export default Header;
