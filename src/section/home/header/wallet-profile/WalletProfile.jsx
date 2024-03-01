// ** Third-Party Imports
import { useAccount, useDisconnect } from "wagmi";

// ** Context Imports
import { useModal } from "@/utils/ModalContext";

// ** Icon Imports
import { FaWallet } from "react-icons/fa";

// ** Component Imports
import Button from "@/common/button";

const WalletProfile = () => {
  // ** Hooks
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { showWalletModal } = useModal();

  return (
    <div className="header_menu_buttons">
      {isConnected ? (
        <Button
          size="sm"
          variant="hovered"
          className="connect_button"
          onClick={() => disconnect()}
        >
          <FaWallet /> Disconnect
        </Button>
      ) : (
        <Button
          size="sm"
          variant="hovered"
          className="connect_button"
          onClick={() => showWalletModal()}
        >
          <FaWallet /> Connect
        </Button>
      )}
    </div>
  );
};

export default WalletProfile;
