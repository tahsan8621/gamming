"use client"
import React, {useState} from "react";
import "./tabs.css";

const tabs = [
    {
        id: "tab1",
        image: <img src={`/images/icons/icon-slot.png`} alt="slot-icon"/>,
        title: "slots",
        content: (
            <ul className={`list-items`}>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
                <li className={`list-item`}>
                    <a href="#">
                        <div className={`list-img`}>
                            <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                        </div>
                        <div className={`list-description`}>Test</div>
                    </a>
                </li>
            </ul>
        )
    },
    {
        id: "tab2",
        title: "crash",
        image: <img src={`/images/icons/icon-crash.png`} alt="crash-icon"/>,
        content: (<ul className={`list-items`}>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
        </ul>)
    },
    {
        id: "tab3",
        title: "casino",
        image: <img src={`/images/icons/icon-casino.png`} alt="casino-icon"/>,
        content: (<ul className={`list-items`}>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-jdb.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
            <li className={`list-item`}>
                <a href="#">
                    <div className={`list-img`}>
                        <img src={`/images/game-1/provider-awcmjili.png`} alt="provider-image"/>
                    </div>
                    <div className={`list-description`}>Test</div>
                </a>
            </li>
        </ul>)
    },
    {
        id: "tab4",
        title: "sports",
        image: <img src={`/images/icons/icon-sport.png`} alt="sport-icon"/>,
        content: (
            <div className="content">
                <div className="title">Table</div>
            </div>
        )
    },
    {
        id: "tab5",
        title: "table",
        image: <img src={`/images/icons/icon-table.png`} alt="table-icon"/>,
        content: <ul></ul>
    },
    {
        id: "tab6",
        title: "lottery",
        image: <img src={`/images/icons/icon-lottery.png`} alt="lottery-icon"/>,
        content: <ul></ul>
    },
    {
        id: "tab7",
        title: "fihsing",
        image: <img src={`/images/icons/icon-fish.png`} alt="fish-icon"/>,
        content: <ul></ul>
    },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

    return (
        <div className="tabs-container">
            {/* Tabs Navigation */}
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <div>
                        <button
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.image}
                            {tab.title}
                        </button>
                    </div>


                ))}
                {/* Sliding Indicator */}
                <div className="tab-indicator" style={{left: `${activeIndex * 100 / tabs.length}%`}}/>
            </div>

            {/* Content Wrapper with Smooth Sliding */}
            <div className="content-wrapper">
                <div
                    className="tab-contents"
                    style={{transform: `translateX(-${activeIndex * 100}%)`, transition: "transform 0.3s ease"}}
                >

                    <div className="tab-title"
                         style={{left: `${activeIndex * 700 / tabs.length}%`}}>{tabs[activeIndex].title}</div>

                    {tabs.slice(0, 10).map((tab) => (
                        <div key={tab.id} className="tab-content">
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
