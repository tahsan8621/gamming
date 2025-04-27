// @flow
import * as React from 'react';
import './Footer.css'
import {PaymentMethods} from "@/app/components/PaymentMethods/PaymentMethods";
import {SocialCommunity} from "@/app/components/SocialCommunity/SocialCommunity";
import OfficialPartner from "@/app/components/OfficialPartner/OfficialPartner";

type Props = {};
const Footer = (props: Props) => {
    return (
        <>
            <div className={`flex`}><PaymentMethods/></div>
            <div className={`flex`}><SocialCommunity/></div>
            <div className={`flex`}><OfficialPartner/></div>
            <div className="section-wrap">
                <footer className="footer">
                    <ul className="links-items flex li-none">
                        <li className="links-item"><a href="">about us</a></li>
                        <li className="links-item"><a href="">contact us</a></li>
                        <li className="links-item"><a href="">privacy policy</a></li>
                        <li className="links-item"><a href="">terms & conditions</a></li>
                        <li className="links-item"><a href="">Frequently Asked Questions</a></li>
                        <li className="links-item"><a href="">rules and regulations</a></li>
                    </ul>
                    <p className="p-4 bg-gray-200 text-center"> © 2025 My App</p>
                </footer>
            </div>
        </>
    );
};
export default Footer;
