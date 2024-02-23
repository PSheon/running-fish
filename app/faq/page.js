"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1";
import PageHeader from "@/src/common/pageHeader/v6";
import FAQ from "@/src/section/faq/v6";
import CTA from "@/src/section/cta/v2";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import Popup from "@/src/section/popup";
import MintNowModal from "@/src/common/modal/mintNowModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function FaqPage() {
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
      <PageHeader />
      <FAQ />
      <CTA />
    </>
  );
}

