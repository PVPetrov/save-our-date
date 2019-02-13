import React from 'react'
// import { Grid } from '@material-ui/core'
import Page from '../Page'
import Section from '../Section'
import { Element } from 'react-scroll';

const Welcome = () => (
    <Element name="home" > 
        <Page classes="welcome">
            <Section className="section bg-pink">
                    <h1 className="italic-fonts" style={{textAlign: 'center'}}>Grete-Merit and Peter wedding</h1>
            </Section>
            <Section className="section bg-blue">
                    <h2 className="italic-fonts">14<sup>th</sup> September, 2019</h2>
            </Section>
        </Page>
    </Element>
)

export default Welcome