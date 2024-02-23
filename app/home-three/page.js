"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1/Header";
import Banner from "@/src/section/banner/v3";
import CharacterSlider from "@/src/section/characterSlider/v3";
import About from "@/src/section/about/v3";
import HowToMint from "@/src/section/howToMint/v2";
import RoadMap from "@/src/section/roadMap/v3";
import Team from "@/src/section/team/v3";
import FAQ from "@/src/section/faq/v3";
import NewsLetter from "@/src/section/newsLetter";
import CTA from "@/src/section/cta/v2";
import Footer from "@/src/section/footer/v3";
import Popup from "@/src/section/popup";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "@/src/common/modal/mintNowModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function HomeV3() {
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
      <HowToMint />
      <RoadMap />
      <Team />
      <FAQ />
      <NewsLetter />
      <CTA />
      <Footer />
    </>
  );
}
