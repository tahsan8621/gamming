// @flow
import * as React from 'react';
import "./OfficialPartner.css"
type Props = {};
const OfficialPartner = (props: Props) => {
    return (
        <div className="section-wrap">
            <h2 className="div-title">official partner</h2>
            <div className="partner">
                <a href={``}>
                    <img src="images/icons/partners/official-partner-heyvip.png"/>
                </a>
            </div>
        </div>
    );
};
export default OfficialPartner;
