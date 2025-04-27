// @flow
import * as React from 'react';
import "./SocialCommunity.css"
type Props = {};

export function SocialCommunity(props: Props) {
    return (
        <div className="section-wrap">
            <h2 className="div-title">community websites</h2>
            <ul className="social-network flex">
                <li className="communityList">
                    <a href="">
                        <img src={`images/icons/social-net/telegram-channel.png`} alt={'telegram-icon'}/>
                    </a>
                </li>
                <li className="communityList">
                    <a href="">
                        <img src={`images/icons/social-net/facebook.png`} alt={'facebook-icon'}/>
                    </a>
                </li>
                <li className="communityList">
                    <a href="">
                        <img src={`images/icons/social-net/twitter.png`} alt={'twitter-icon'}/>
                    </a>
                </li>
                <li className="communityList">
                    <a href="">
                        <img src={`images/icons/social-net/pinterest.png`} alt={'pinterest-icon'}/>
                    </a>
                </li>
                <li className="communityList">
                    <a href="">
                        <img src={`images/icons/social-net/instagram.png`} alt={'instagram-icon'}/>
                    </a>
                </li>
            </ul>
        </div>
    );
};