// ** React Imports
import { Fragment } from "react";

// ** Next Imports
import Link from "next/link";
import Image from "next/image";

// ** Third-Party Imports
import { useConnect, useAccount } from "wagmi";

// ** Context Imports
import { useModal } from "@/utils/ModalContext";

// ** Icon Imports
import { FiX, FiChevronRight } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// ** Style Imports
import WalletModalStyleWrapper from "./WalletModal.style";

// ** Asset Imports
import hoverShape from "@/assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "@/assets/images/icon/MetaMask.svg";
import coinbaseIcon from "@/assets/images/icon/Coinbase.svg";
import walletConnect from "@/assets/images/icon/WalletConnect.svg";

const WalletModal = () => {
  // ** Hooks
  const { hideWalletModal } = useModal();
  const { isConnecting } = useAccount();
  const { connectors, connectAsync } = useConnect();

  return (
    <Fragment>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <button onClick={() => hideWalletModal()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <p>Please select a wallet to connect for start Trading</p>
              <div className="wallet_list">
                {connectors.map((connector) => {
                  if (connector.name === "MetaMask") {
                    return (
                      <Link
                        key={connector.id}
                        href="#"
                        onClick={async () => {
                          await connectAsync({ connector });
                          hideWalletModal();
                        }}
                      >
                        <Image
                          width={31}
                          height={28}
                          src={metamaskIcon.src}
                          alt="Meta-mask"
                        />
                        MetaMask
                        {isConnecting ? (
                          <span>
                            <AiOutlineLoading3Quarters className="loading-icon" />
                          </span>
                        ) : (
                          <span>
                            <FiChevronRight />
                          </span>
                        )}
                      </Link>
                    );
                  }

                  if (connector.name === "WalletConnect") {
                    return (
                      <Link
                        key={connector.id}
                        href="#"
                        onClick={async () => {
                          await connectAsync({ connector });
                          hideWalletModal();
                        }}
                      >
                        <Image
                          width={36}
                          height={22}
                          src={walletConnect.src}
                          alt="Wallet"
                        />
                        WalletConnect
                        {isConnecting ? (
                          <span>
                            <AiOutlineLoading3Quarters className="loading-icon" />
                          </span>
                        ) : (
                          <span>
                            <FiChevronRight />
                          </span>
                        )}
                      </Link>
                    );
                  }

                  if (connector.name === "Coinbase Wallet") {
                    return (
                      <Link
                        key={connector.id}
                        href="#"
                        onClick={async () => {
                          await connectAsync({ connector });
                          hideWalletModal();
                        }}
                      >
                        <Image
                          width={30}
                          height={30}
                          src={coinbaseIcon.src}
                          alt="Coinbase"
                        />
                        Coinbase
                        {isConnecting ? (
                          <span>
                            <AiOutlineLoading3Quarters className="loading-icon" />
                          </span>
                        ) : (
                          <span>
                            <FiChevronRight />
                          </span>
                        )}
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={connector.id}
                      href="#"
                      onClick={async () => {
                        await connectAsync({ connector });
                        hideWalletModal();
                      }}
                    >
                      {connector.name}
                    </Link>
                  );
                })}

                {/* <Link href="# " onClick={(e) => handleMetamask(e)}>
                  <img src={metamaskIcon.src} alt="Meta-mask" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </Link> */}

                {/* <Link href="# " onClick={(e) => handleMetamask(e)}>
                  <img src={metamaskIcon.src} alt="Meta-mask" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </Link>

                <Link href="# ">
                  <img src={formatic.src} alt="Coinbase" />
                  Coinbase
                  <span>
                    <FiChevronRight />
                  </span>
                </Link>
                <Link href="# ">
                  <img src={trustWalletIcon.src} alt="Trust" />
                  Trust Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </Link>
                <Link href="# ">
                  <img src={walletConnect.src} alt="Wallet" />
                  WalletConnect
                  <span>
                    <FiChevronRight />
                  </span>
                </Link> */}
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <Link href="# ">Terms of Service</Link>
                <Link href="# ">Privacy Policy</Link>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape.src} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape.src} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </Fragment>
  );
};

export default WalletModal;
