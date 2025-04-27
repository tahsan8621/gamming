// @flow 
import * as React from 'react';
import "./Favorites.css"

const Favourites = () => {
    return (
        <>
           <section className="section-wrap">
               <h2 className="session-title theme-txt-color">favorites
               </h2>
               <div className="favorites-list">
                   <div className="favorite-item">
                       <a href={``}>
                           <img src={`images/favorites/image_1.jpg`} alt={'favorite'} />
                       </a>
                   </div>
                   <div className="favorite-item">
                       <a href={``}>
                           <img src={`images/favorites/image_1.jpg`} alt={'favorite'} />
                       </a>
                   </div>
                   <div className="favorite-item">
                       <a href={``}>
                           <img src={`images/favorites/image_1.jpg`} alt={'favorite'} />
                       </a>
                   </div>
                   <div className="favorite-item">
                       <a href={``}>
                           <img src={`images/favorites/image_2.jpg`} alt={'favorite'} />
                       </a>
                   </div>
               </div>
           </section>
        </>
    );
};
export default Favourites; 
