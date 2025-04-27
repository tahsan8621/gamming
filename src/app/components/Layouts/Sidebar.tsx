import React from 'react';
import Style from './sidebar.module.scss'

function Sidebar() {
    return (
        <div>
            <div className={`${Style.sidebar}`}>
                <ul>
                    <li><a href={``}><img src={`/images/icons/icon-home.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-slot.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-crash.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-casino.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-sport.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-table.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-lottery.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-fish.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-arcade.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-promotion.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-download.png`} alt={`sidebar-icon`} /> </a> </li>
                    <li><a href={``}><img src={`/images/icons/icon-talk.png`} alt={`sidebar-icon`} /> </a> </li>
                </ul>
            </div>
        </div>

    );
}

export default Sidebar;