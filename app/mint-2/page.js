"use client";
import { useModal } from "@/src/utils/ModalContext";
import Header from "@/src/section/header/v2";
import Mint from "@/src/section/mint/v3";
import MetamaskModal from "@/src/common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "@/src/common/modal/mintNowModal";
import WalletModal from "@/src/common/modal/walletModal/WalletModal";

export default function MintPageV2() {
  const { visibility, metamaskModal, walletModalvisibility } = useModal();

  return (
    <>
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <Mint />
    </>
  );
}

