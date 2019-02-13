import React from 'react'
import Page from '../Page' 
import Section from '../Section'
import './index.css'

const Reception = () => {
  return (
    <Page id="reception" name="reception">
      <Section classes="bg-pink">
        <div>
            <h2>Reception</h2>
        </div>
      </Section>
      <Section classes="bg-blue">
        <div>
            <p>map here with pictures</p>
        </div>
      </Section>
    </Page>
  )
}

export default Reception
