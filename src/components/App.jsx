import React, { Fragment } from 'react'
import Recipes from './Recipes';
import "../styles/index.scss"

export default function App() {
    return (
        <Fragment>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>Hello World</h1>
                </section>
            </main>
            <Recipes />
        </Fragment>
    );
};
