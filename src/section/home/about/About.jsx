// ** Next Imports
import Link from "next/link";

// ** Component Imports
import Counter from "@/common/counter";
import Button from "@/common/button";
import SectionTitle from "@/common/sectionTitle";

// ** Style Imports
import AboutStyleWrapper from "./About.style";

// ** Constant Imports
import data from "@/assets/data/about/dataV2";

const About = () => {
  // ** Vars
  const { aboutDescription1, aboutDescription2 } = data;

  return (
    <AboutStyleWrapper>
      <div className="container">
        <div className="row about_row">
          <div className="col-lg-6">
            <div className="about_us_left_section">
              <SectionTitle
                title="ABOUT US"
                subtitle="THE STORY "
                className="section_title"
              />
              <div className="about_us_left_text">
                <p>1. Private Team</p>
                <p>2. No Roadmap (running continue...)</p>
                <p>3. No Empowerment</p>
                <p>4. No VC</p>
                <p>5. No IDO</p>
                <p>6. No Pre-mining</p>
                <p>7. No Pre-sale</p>
                <br />
                <p>Just buy it make running fish strong! 💪</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about_right_item">
              <div className="counter_item">
                <h3>
                  <Counter
                    end={10_000_000}
                    decimal="."
                    decimals={10_000_000 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Total Supply</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={9_994_978}
                    decimal="."
                    decimals={9_994_978 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Current Supply</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={5_022}
                    decimal="."
                    decimals={5_022 % 1 !== 0 ? "2" : "0"}
                    suffix={"+"}
                  />
                </h3>
                <h6>Total Burned</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={255}
                    decimal="."
                    decimals={255 % 1 !== 0 ? "2" : "0"}
                    suffix={"K"}
                  />
                </h3>
                <h6>Volume Traded (ETH)</h6>
              </div>
            </div>

            <div className="about_right_item">
              <Link
                href="https://pancakeswap.finance/swap?chain=bscTestnet&outputCurrency=0x918af9De1d46A33416C75Da4746a9507793cE957&inputCurrency=0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
                target="_blank"
              >
                <Button size="sm" variant="mint">
                  Buy now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
