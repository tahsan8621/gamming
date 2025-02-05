import React from 'react';
import Styles from "./header.module.scss"
function Header() {
    return (
        <header className={`${Styles.header} p-4`}>
            <div className={`${Styles.logo}`}>MyLogo</div>
            <div className={`${Styles.authContainer}`}>
                <a href="#">Login</a>
                <a href="#">Sing up</a>
            </div>
        </header>

    );
}

export default Header;