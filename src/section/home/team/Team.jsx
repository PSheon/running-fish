// ** Next Imports
import Link from "next/link";
import Image from "next/image";

// ** Component Imports
import SectionTitle from "@/common/sectionTitle";

// ** Icon Imports
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ** Style Imports
import TeamStyleWrapper from "./Team.style";

// ** Asset Imports
import avatar1 from "@/assets/images/home/team/member-01.png";
import avatar2 from "@/assets/images/home/team/member-02.png";
import avatar3 from "@/assets/images/home/team/member-03.png";
import avatar4 from "@/assets/images/home/team/member-04.png";
import avatar5 from "@/assets/images/home/team/member-05.png";
import avatar6 from "@/assets/images/home/team/member-06.png";
import avatar7 from "@/assets/images/home/team/member-07.png";

const Team = () => {
  return (
    <TeamStyleWrapper>
      <div className="container">
        <SectionTitle
          title="TEAM MEMBERS"
          subtitle="THE CREW"
          className="section_title"
        />

        <div className="row">
          <div className="col-lg-6">
            <div className="team_member_list">
              <div className="team_member_item">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar1.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Berneice Tran <span>Founder</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="team_member_item">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar3.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Moneo Doa <span>Ui Designer</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="team_member_item">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar2.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Nathan Bean <span>Co-Founder</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team_member_list">
              <div className="team_member_item">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar4.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Natala Elon <span>SEO Engineer</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team_member_item">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar5.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Lynne Wilkes <span>Artist</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team_member_item">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar6.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Sony Jina <span>Blockchain Dev</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="team_member_list">
              <div className="team_member_item team_member_item_bottom">
                <div className="member_avatar">
                  <Image
                    width={200}
                    height={200}
                    src={avatar7.src}
                    alt="avatar"
                  />
                </div>
                <div className="member_details">
                  <h6>
                    Robert Neo <span>UX Designer</span>
                  </h6>
                  <div className="social_profiles">
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
