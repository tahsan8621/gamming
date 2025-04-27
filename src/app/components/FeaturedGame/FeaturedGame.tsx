// @flow
import * as React from 'react';
import "./FeaturedGame.css"

const FeaturedGame = () => {
    return (
        <>
            <section className="section-wrap">
                <h2 className="session-title theme-txt-color">favorites
                </h2>
                <div className="featured-list">
                    <div className="feature-item">
                        <a href={``}>
                            <img src={`images/featured-game/game-1.png`} alt={'favorite'} />
                            <span className="captions">magic ace wild</span>
                        </a>
                    </div>
                    <div className="feature-item">
                        <a href={``}>
                            <img src={`images/featured-game/game-2.png`} alt={'favorite'} />
                            <span className="captions">magic ace wild</span>
                        </a>
                    </div>
                    <div className="feature-item">
                        <a href={``}>
                            <img src={`images/featured-game/game-3.png`} alt={'favorite'} />
                            <span className="captions">magic ace wild</span>
                        </a>
                    </div>
                    <div className="feature-item">
                        <a href={``}>
                            <img src={`images/featured-game/game-3.png`} alt={'favorite'} />
                            <span className="captions">magic ace wild</span>
                        </a>
                    </div>
                    <div className="feature-item">
                        <a href={``}>
                            <img src={`images/featured-game/game-3.png`} alt={'favorite'} />
                            <span className="captions">magic ace wild</span>
                        </a>
                    </div>
                    <div className="feature-item">
                        <a href={``}>
                            <img src={`images/featured-game/game-3.png`} alt={'favorite'} />
                            <span className="captions">magic ace wild</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
export default FeaturedGame;
