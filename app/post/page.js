"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v1/Header";
import PageHeader from "@/src/common/pageHeader/v1";
import BlogDetails from "@/src/section/blog/blogDetails/BlogDetails";
import CTA from "@/src/section/cta/v2";
import Footer from "@/src/section/footer/v3";
import Popup from "@/src/section/popup";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function Post() {
  const { metamaskModal, walletModalvisibility, isPopup, popupHandle } =
    useModal();
  return (
    <>
      {isPopup && <Popup popupHandle={popupHandle} />}
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <BlogDetails />
      <CTA />
      <Footer />
    </>
  );
}

