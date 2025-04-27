import React from 'react';
import Styles from './Announcement.module.scss'
function Announcement() {
    return (
        <div className={`${Styles.announcement}`}>
            <img src={`images/icons/index-announcement-icon.svg`} alt={'announcement'}/>
            <div className={`${Styles.marquee}`}>
                <div className={`${Styles.marqueeContent}`}>🔥 Welcome to This is a scrolling text from right to left.This is a scrolling text from right to left.This is a scrolling text from right to left.</div>
            </div>

        </div>
    );
}

export default Announcement;