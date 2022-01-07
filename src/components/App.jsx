import React, { Fragment } from 'react'
import Recipes from './Recipes';
import "../styles/index.scss"
import sword from '../images/swc-sword.png'
import swordSVG from '../images/sword.svg'

export default function App() {
    return (
        <Fragment>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>React Webpack</h1>
                </section>
                <img src={sword} alt="sword" width="250"/>
                <img src={swordSVG} alt="sword" width="250"/>
                <Recipes />
            </main>
        </Fragment>
    );
};
