import React, { Component } from "react";
import Page from '../Page';
import Section from '../Section';
import { Element } from 'react-scroll';

const link =
	"https://previews.123rf.com/images/realchemyst/realchemyst1511/realchemyst151100001/47920024-white-flowers-bouquet-on-a-old-car-in-a-wedding-day.jpg";

class Ceremony extends Component {

    state = {
        showMap: false
    }

    render(){
        return(
            <Element name="ceremony">
                <Page>
                <Section id="ceremony" name="ceremony" className="section bg-pink">
                    Ceremony will take place in Tallinn
                </Section>
                <Section className="section bg-blue">
                    <img src={link} className="img-background" alt="" />
                </Section>
            </Page>
            </Element>
        );
    }
}

export default Ceremony;