// ** React Imports
import { Fragment } from "react";

// ** Third-Party Imports
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// ** Hook Imports
import { useModal } from "@/utils/ModalContext";

// ** Component Imports
import Header from "@/section/home/header";
import Banner from "@/section/home/banner";
import About from "@/section/home/about";
import RoadMap from "@/section/home/road-map";
import Team from "@/section/home/team";
import FAQ from "@/section/home/faq";
// import MetamaskModal from "@/common/modal/metamaskModal/MetamaskModal";
// import MintNowModal from "@/common/modal/mintNowModal";
import WalletModal from "@/common/modal/walletModal/WalletModal";

// ** Style Imports
import StyleWrapper from "./StyleWrapper";

const Home = () => {
  // ** Hooks
  // const { visibility, walletModalvisibility, metamaskModal } = useModal();
  const { walletModalVisibility } = useModal();

  return (
    <Fragment>
      {/* {metamaskModal && <MetamaskModal />} */}
      {/* {visibility && <MintNowModal />} */}
      {walletModalVisibility && <WalletModal />}

      <Header />

      <StyleWrapper>
        <Tabs>
          <TabList>
            <Tab>
              <span>01.</span> Home
            </Tab>
            <Tab>
              <span>02.</span> About
            </Tab>
            <Tab>
              <span>03.</span> Roadmap
            </Tab>
            <Tab>
              <span>04.</span> Team
            </Tab>
            <Tab>
              <span>05.</span> FAQ
            </Tab>
          </TabList>

          <TabPanel>
            <Banner />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <RoadMap />
          </TabPanel>
          <TabPanel>
            <Team />
          </TabPanel>
          <TabPanel>
            <FAQ />
          </TabPanel>
        </Tabs>
      </StyleWrapper>
    </Fragment>
  );
};

export default Home;
