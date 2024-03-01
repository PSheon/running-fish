"use client";
import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [walletModalVisibility, setModalVisibility] = useState(false);
  const [shareModalVisibility, setShareModalVisibility] = useState(false);
  const [isPopup, setPopup] = useState(true);
  //meta mask
  const [metamaskModal, setMetamaskModal] = useState(false);
  const [accounts, setAccounts] = useState(null);

  const handleAccountConnect = (acc) => {
    setAccounts(acc);
  };

  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const showWalletModal = () => {
    setModalVisibility(() => true);
  };
  const hideWalletModal = () => {
    setModalVisibility(() => false);
  };
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalVisibility(!shareModalVisibility);
  };
  const popupHandle = () => {
    setPopup(!isPopup);
  };

  const handleMetamaskModal = () => {
    setModalVisibility(!walletModalVisibility);
    setMetamaskModal(!metamaskModal);
  };

  return (
    <ModalContext.Provider
      value={{
        visibility,
        mintModalHandle,
        showWalletModal,
        hideWalletModal,
        walletModalVisibility,
        shareModalVisibility,
        shareModalHandle,
        isPopup,
        popupHandle,
        metamaskModal,
        handleMetamaskModal,
        handleAccountConnect,
        accounts,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
