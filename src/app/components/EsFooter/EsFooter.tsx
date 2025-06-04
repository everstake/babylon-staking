import Image from "next/image";
import React from "react";
import "./EsFooter.css";

import discordIcon from "@/app/assets/discord.svg";
import everstakeIcon from "@/app/assets/everstake-white-text.svg";
import telegramIcon from "@/app/assets/telegram.svg";
import twitterIcon from "@/app/assets/twitter.svg";
import arrowRightIcon from "@/app/assets/arrow-right.svg";
import gdprIcon from "@/app/assets/gdpr.svg";
import isoIcon from "@/app/assets/iso-27001.svg";
import soc2Icon from "@/app/assets/soc-2.svg";

export const EsFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="blob"></div>
      <div className="line line--active"></div>

      <div className="footer__top">
        <a
          href="https://t.me/everstake_acc"
          target="_blank"
          aria-label="Open Join Us on Telegram"
          rel="noopener noreferrer"
          className="footer__top_item"
        >
          <div className="footer__top_item_left">
            <Image
              className="footer__top_item_icon"
              src={telegramIcon}
              alt="Telegram"
              width={22}
              height={22}
            />
            <div className="footer__top_item_text">
              <div>Join Us on Telegram</div>
              <Image
                src={arrowRightIcon}
                alt="Arrow Right"
                width={28}
                height={18}
              />
            </div>
          </div>
          <div className="mobile line line--reverse line--active"></div>
          <div className="vertical__line vertical__line--reverse desktop vertical__line--active"></div>
        </a>

        <a
          href="https://twitter.com/everstake_pool"
          target="_blank"
          aria-label="Open Follow us on X"
          rel="noopener noreferrer"
          className="footer__top_item"
        >
          <div className="footer__top_item_left">
            <Image
              className="footer__top_item_icon"
              src={twitterIcon}
              alt="Twitter"
              width={24}
              height={24}
            />
            <div className="footer__top_item_text">
              <div>Follow us on X</div>
              <Image
                src={arrowRightIcon}
                alt="Arrow Right"
                width={28}
                height={18}
              />
            </div>
          </div>
          <div className="mobile line line--reverse line--active"></div>
          <div className="vertical__line mobile vertical__line--active"></div>
          <div className="vertical__line desktop vertical__line--active"></div>
        </a>

        <a
          href="https://discord.gg/3GYvqvZ3rR"
          target="_blank"
          aria-label="Open Stay in touch via Discord"
          rel="noopener noreferrer"
          className="footer__top_item"
        >
          <div className="footer__top_item_left">
            <Image
              className="footer__top_item_icon"
              src={discordIcon}
              alt="Discord"
              width={24}
              height={20}
            />
            <div className="footer__top_item_text">
              <div>Stay in touch via Discord</div>
              <Image
                src={arrowRightIcon}
                alt="Arrow Right"
                width={28}
                height={18}
              />
            </div>
          </div>
          <div className="mobile line line--reverse line--active"></div>
          <div className="vertical__line vertical__line--reverse desktop vertical__line--active"></div>
        </a>
      </div>

      <div className="Sdesktop line line--reverse line--active"></div>
      <div className="mobile line line--active"></div>

      <div className="footer__bottom">
        <div className="footer__bottom_item footer__bottom_item--first">
          <Image src={everstakeIcon} alt="Everstake" width={250} height={44} />
          <div className="sdesktop footer__bottom_name footer__bottom_name--uppercase">
            Everstake Validation Services LLC
          </div>
          <div className="sdesktop footer__bottom_address">
            c/o Hermes Corporate Services Ltd., Fifth Floor, Zephyr House, 122
            Mary Street, George Town, P.O. Box 31493, Grand Cayman KY1-1206,
            Cayman Islands.
          </div>
        </div>

        <div className="footer__bottom_item footer__bottom_item-menu footer__bottom_item--second">
          <div className="footer-section">
            <h3 className="footer-section__title">COMPANY</h3>
            <div className="footer-section__items">
              <div>
                <a href="/about">about us</a>
              </div>
              <div>
                <a href="/institutional-staking">business</a>
              </div>
              <div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedfKhY9cWScl1Eta28EM-I8E0eVSU6kH1zucoEc-n_inlf1w/viewform"
                  aria-label="Page with Feedback form name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Feedback form
                </a>
              </div>
              <div>
                <a href="/media-kit">Media Kit</a>
              </div>
              <div>
                <a href="/careers">careers</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section__title">CONTROL</h3>
            <div className="footer-section__items">
              <div>
                <a href="/staking">staking</a>
              </div>
              <div>
                <a
                  href="https://status.everstake.one/"
                  aria-label="Page with status name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  status
                </a>
              </div>
              <div>
                <a
                  href="https://security.everstake.one/"
                  aria-label="Page with compliance name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  compliance
                </a>
              </div>
              <div>
                <a href="/report-vulnerability">Report vulnerability</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section__title">COMPLIANCE</h3>
            <div className="footer-section__items">
              <div>
                <a href="/privacy-notice">Privacy Notice</a>
              </div>
              <div>
                <a href="/terms-of-use">Terms Of Use</a>
              </div>
              <div>
                <a href="/cookie-policy">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom footer__bottom-copyright">
        <div className="footer__bottom_item footer__bottom_item--first">
          <div className="sdesktop footer__bottom_name">
            Copyright © 2025 Everstake
          </div>
        </div>
        <div className="footer__bottom_item footer__bottom_item--social">
          <div className="footer__bottom_item_top footer__bottom_item_top--badges">
            <div>
              <Image src={soc2Icon} alt="SOC 2" width={55} height={55} />
            </div>
            <div>
              <Image src={isoIcon} alt="ISO 27001" width={55} height={55} />
            </div>
            <div>
              <Image src={gdprIcon} alt="GDPR" width={55} height={55} />
            </div>
          </div>

          <div className="footer__bottom_item_top">
            <a
              href="https://twitter.com/everstake_pool"
              target="_blank"
              aria-label="Read more in Everstake Twitter"
              rel="noopener noreferrer"
            >
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4256 0H20.8185L13.4062 8.4718L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.reddit.com/r/Everstake/"
              aria-label="Read more in Everstake Reddit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4964 0C12.4456 0 11.2173 0.786831 11.0321 4.3006C11.1881 4.29688 11.3421 4.28571 11.5 4.28571C11.6755 4.28571 11.8568 4.29501 12.0303 4.3006C12.1492 2.18936 12.6756 0.952381 13.4964 0.952381C13.8474 0.952381 14.0462 1.13467 14.4167 1.51786C14.8495 1.96615 15.4149 2.54836 16.5223 2.76786C16.5047 2.64323 16.4911 2.5093 16.4911 2.38095C16.4911 2.18006 16.5125 1.99033 16.5535 1.8006C15.8672 1.62202 15.5046 1.24442 15.1497 0.877976C14.754 0.46875 14.2997 0 13.4964 0ZM19.4857 0.47619C18.3842 0.47619 17.4893 1.33185 17.4893 2.38095C17.4893 3.43006 18.3842 4.28571 19.4857 4.28571C20.5873 4.28571 21.4822 3.43006 21.4822 2.38095C21.4822 1.33185 20.5873 0.47619 19.4857 0.47619ZM11.5 5.2381C5.44441 5.2381 0.519604 8.1808 0.519604 12.381C0.519604 16.5811 5.44441 20 11.5 20C17.5556 20 22.4804 16.5811 22.4804 12.381C22.4804 8.1808 17.5556 5.2381 11.5 5.2381ZM2.76559 5.68452C2.03643 5.68452 1.3443 5.96912 0.81595 6.47321C-0.0438434 7.29353 -0.221261 8.47284 0.270049 9.4494C1.02456 8.05618 2.32302 6.86756 3.99777 5.98214C3.61759 5.79799 3.19647 5.68452 2.76559 5.68452ZM20.2344 5.68452C19.8035 5.68452 19.3824 5.79799 19.0022 5.98214C20.677 6.86756 21.9754 8.05618 22.7299 9.4494C23.2213 8.47284 23.0438 7.29353 22.184 6.47321C21.6557 5.96912 20.9636 5.68452 20.2344 5.68452ZM7.50713 9.52381C8.33378 9.52381 9.00446 10.1637 9.00446 10.9524C9.00446 11.7411 8.33378 12.381 7.50713 12.381C6.68048 12.381 6.0098 11.7411 6.0098 10.9524C6.0098 10.1637 6.68048 9.52381 7.50713 9.52381ZM15.4929 9.52381C16.3195 9.52381 16.9902 10.1637 16.9902 10.9524C16.9902 11.7411 16.3195 12.381 15.4929 12.381C14.6662 12.381 13.9955 11.7411 13.9955 10.9524C13.9955 10.1637 14.6662 9.52381 15.4929 9.52381ZM7.03921 14.7619C7.16399 14.7824 7.28682 14.8493 7.36675 14.9554C7.41939 15.026 8.58918 16.5179 11.5 16.5179C14.4498 16.5179 15.6215 14.9851 15.6332 14.9702C15.7912 14.7563 16.109 14.6987 16.3351 14.8512C16.5593 15.0019 16.6022 15.2902 16.4443 15.506C16.3858 15.5859 14.9626 17.4702 11.5 17.4702C8.03548 17.4702 6.61419 15.5859 6.5557 15.506C6.39778 15.2902 6.43872 15.0019 6.66488 14.8512C6.77796 14.7749 6.91444 14.7414 7.03921 14.7619Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/everstakeofficial/"
              aria-label="Read more in Everstake Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.333245 6.63385V20H4.48058V6.63385H0.333245ZM0.000366211 2.40634C0.000366211 3.7353 1.0754 4.81269 2.40691 4.81269C3.73297 4.81269 4.80801 3.72983 4.80801 2.40634C4.80801 1.07739 3.73297 0 2.40691 0C1.0754 0 0.000366211 1.07739 0.000366211 2.40634ZM15.8585 20H20.0004V12.6661C20.0004 9.06754 19.2255 6.30025 15.029 6.30025C13.0154 6.30025 11.662 7.41045 11.1109 8.46049H11.0563V6.63385H7.08359V20H11.22V13.3935C11.22 11.6489 11.5474 9.95898 13.703 9.95898C15.8312 9.95898 15.8585 11.9552 15.8585 13.5029V20Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@everstake7336"
              aria-label="See more in Everstake Youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4987 2.65518C23.362 2.13738 23.0928 1.66519 22.7183 1.28621C22.3437 0.907216 21.8771 0.63481 21.3654 0.496453C19.504 0.0107389 12 0.0107422 12 0.0107422C12 0.0107422 4.49605 0.0107435 2.62405 0.518045C2.11233 0.656402 1.6457 0.928799 1.27117 1.30779C0.896636 1.68678 0.627444 2.15897 0.490715 2.67678C-0.0106188 4.56566 -0.0106201 8.52154 -0.0106201 8.52154C-0.0106201 8.52154 -0.0106188 12.4747 0.490715 14.369C0.628746 14.8847 0.898593 15.3545 1.2731 15.7311C1.64761 16.1077 2.11357 16.3778 2.62405 16.5142C4.49605 17.0107 12 17.0107 12 17.0107C12 17.0107 19.504 17.0107 21.376 16.5034C21.8865 16.367 22.3525 16.0969 22.727 15.7203C23.1015 15.3437 23.3713 14.8739 23.5094 14.3582C24.0107 12.4693 24.0107 8.51074 24.0107 8.51074C24.0107 8.51074 24 4.54947 23.4987 2.65518ZM9.60004 12.1536V4.86789L15.8347 8.51074L9.60004 12.1536Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom footer__bottom--legal">
        <div className="footer__legal-text">
          Everstake is a software platform that provides infrastructure tools
          and resources for users but does not offer investment advice or
          investment opportunities, manage funds, facilitate collective
          investment schemes, provide financial services or take custody of, or
          otherwise hold or manage, customer assets. Everstake does not conduct
          any independent diligence on or substantive review of any blockchain
          asset, digital currency, cryptocurrency or associated funds.
          Everstake&apos;s provision of technology services allowing a user to
          stake digital assets is not an endorsement or a recommendation of any
          digital assets by it. Users are fully and solely responsible for
          evaluating whether to stake digital assets.
        </div>
      </div>
    </footer>
  );
};
