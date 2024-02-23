"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1/Header";
import Banner from "@/src/section/banner/v2";
import CharacterSlider from "@/src/section/characterSlider/v2";
import About from "@/src/section/about/v2";
import RoadMap from "@/src/section/roadMap/v2";
import Team from "@/src/section/team/v2";
import FAQ from "@/src/section/faq/v2";
import Partner from "@/src/section/partner";
import Footer from "@/src/section/footer/v2";
import Popup from "@/src/section/popup";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "@/src/common/modal/mintNowModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function HomeV2() {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility,
    isPopup,
    popupHandle,
  } = useModal();

  return (
    <>
      {isPopup && <Popup popupHandle={popupHandle} />}
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <Banner />
      <CharacterSlider />
      <About />
      <RoadMap />
      <Team />
      <FAQ />
      <Partner />
      <Footer />
    </>
  );
}
