"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1/Header";
import Banner from "@/src/section/banner/v4";
import CoinInfoSlider from "@/src/section/coinInfoSlider";
import About from "@/src/section/about/v4";
import Features from "@/src/section/features/v1";
import Portfolio from "@/src/section/portfolio";
import RoadMap from "@/src/section/roadMap/v4";
import Team from "@/src/section/team/v4";
import FAQ from "@/src/section/faq/v4";
import Footer from "@/src/section/footer/v4";
import Popup from "@/src/section/popup";
import MintNowModal from "@/src/common/modal/mintNowModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";

export default function HomeV4() {
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
      <CoinInfoSlider />
      <About />
      <Features />
      <Portfolio />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
