"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1/Header";
import PageHeader from "@/src/common/pageHeader/v4";
import Collection from "@/src/section/collection";
import CTA from "@/src/section/cta/v2";
import Footer from "@/src/section/footer/v3";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import Popup from "@/src/section/popup";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function Collections() {
  const { walletModalvisibility, metamaskModal, isPopup, popupHandle } =
    useModal();

  return (
    <>
      {isPopup && <Popup popupHandle={popupHandle} />}
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <Collection />
      <CTA />
      <Footer />
    </>
  );
}
