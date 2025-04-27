// @flow
import * as React from 'react';
import './Filter.css';


export function Filter() {
    return (
        <>
            <div className="filter-wrap">
                <ul className="filter-items flex li-none">
                    <li className="filter-item"><a className="btn" >Recommend</a></li>
                    <li className="filter-item"><a className="btn" >latest</a></li>
                    <li className="filter-item"><a className="btn" >favorite</a></li>
                    <li className="filter-item"><a className="btn" >a-z</a></li>
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