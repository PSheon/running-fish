"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1";
import Banner from "@/src/section/banner/v1";
import Counter from "@/src/section/counter/v1";
import CharacterSlider from "@/src/section/characterSlider/v1";
import HowToMint from "@/src/section/howToMint/v1";
import About from "@/src/section/about/v1";
import RoadMap from "@/src/section/roadMap/v1";
import Team from "@/src/section/team/v1";
import FAQ from "@/src/section/faq/v1";
import Footer from "@/src/section/footer/v1";
import Popup from "@/src/section/popup";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "@/src/common/modal/mintNowModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function Home() {
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
      <Counter />
      <CharacterSlider />
      <HowToMint />
      <About />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
