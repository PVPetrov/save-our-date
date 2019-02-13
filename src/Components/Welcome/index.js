import React from 'react'
// import { Grid } from '@material-ui/core'
import Page from '../Page'
import Section from '../Section'

const Welcome = () => (
    <Page name="home" classes="welcome">
        <Section className="section bg-pink">
            <div>
                <h1 className="italic-fonts">Grete-Merit and Peter wedding</h1>
            </div>
        </Section>
        <Section className="section bg-blue">
            <div>
                <h2 className="italic-fonts">14<sup>th</sup> September, 2019</h2>
            </div>
        </Section>
    </Page>
)

export default Welcome