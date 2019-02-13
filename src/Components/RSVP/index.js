import React from 'react'
import Page from '../Page'
import Section from '../Section'
import './index.css'

const RSVP = () => {
    return (
        <Page name="rsvp">
            <Section classes="bg-pink">
                <div>
                    <h2>RSVP</h2>
                </div>
            </Section>
            <Section classes="bg-blue">
                <div>
                    <p>form here</p>
                </div>
            </Section>
        </Page>
    )
}

export default RSVP