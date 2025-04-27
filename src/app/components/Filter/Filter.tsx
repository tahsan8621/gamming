// @flow
import * as React from 'react';
import './Filter.css';
type Props = {};

export function Filter(props: Props) {
    return (
        <>
            <div className="filter-wrap">
                <ul className="filter-items flex li-none">
                    <li className="filter-item"><a className="btn" onClick={``}>Recommend</a></li>
                    <li className="filter-item"><a className="btn" onClick={``}>latest</a></li>
                    <li className="filter-item"><a className="btn" onClick={``}>favorite</a></li>
                    <li className="filter-item"><a className="btn" onClick={``}>a-z</a></li>
                </ul>

                <div className="search">
                    <a className={"btn-search"}>
                        <img src={"images/icons/icon-search.svg"} alt={'search'}/>
                    </a>
                </div>
            </div>
        </>
    );
};