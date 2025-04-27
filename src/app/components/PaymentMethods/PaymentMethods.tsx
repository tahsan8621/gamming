// @flow
import * as React from 'react';
import "./PaymentMethods.css"
type Props = {

};

export function PaymentMethods(props: Props) {
    return (
        <div className="section-wrap">
            <h2 className="div-title">
                Payment Methods
            </h2>
            <ul className="flex paymentListItems">
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay16.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay17.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay22.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay33.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay34.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay45.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay46.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay59.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay60.png`} alt={'telegram-icon'}/>
                </li>
                <li className="paymentList li-none">
                    <img src={`images/icons/banks/pay61.png`} alt={'telegram-icon'}/>
                </li>
            </ul>
        </div>
    );
};