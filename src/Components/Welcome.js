import React from 'react'
// import { Grid } from '@material-ui/core'
import './Welcome.css'

const Welcome = () => (
    <div name="home" className="page welcome">
        <section className="section bg-pink">
            <div>
                <h1 className="italic-fonts">Grete-Merit and Peter wedding</h1>
            </div>
        </section>
        <section className="section bg-blue">
            <div>
                <h2 className="italic-fonts">14<sup>th</sup> September, 2019</h2>
            </div>
        </section>
    </div>
)

export default Welcome;