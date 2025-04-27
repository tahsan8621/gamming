// @flow
import * as React from 'react';
import "./Banner.css"
type Props = {

};

export function Banner(props: Props) {
    return (
        <>
            <div className="bannerImage">
                <img src="images/banner/games-jackpot-bg.jpg" alt={'banner'}/>
            </div>
            <div className="text-box">
                <h3>Jackpot total</h3>
                <h2>৳ 32,128,981.33</h2>
            </div>
        </>
    );
};