// @flow
import * as React from 'react';
import {Banner} from "@/app/components/Banner/Banner";


const Page = () => {
    return (
        <>
            <section className="banner grid">
                <Banner/>
            </section>
            <section className="gameList">
                <img src={`images/pages/Responsible-Gaming.png`} alt={''}/>
            </section>

        </>
    );
};
export default Page;
