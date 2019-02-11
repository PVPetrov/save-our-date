import React, { Component } from "react";

const link =
	"https://previews.123rf.com/images/realchemyst/realchemyst1511/realchemyst151100001/47920024-white-flowers-bouquet-on-a-old-car-in-a-wedding-day.jpg";

class Ceremony extends Component {

    state = {
        showMap: false
    }

    render(){
        return(
            <section name="ceremony" className="page">
                <section className="section">
                    <div>Ceremony will take place in Tallinn</div>
                </section>
                <section className="section bg-blue">
                    <div>
                        <img src={link} style={{ width: "100%", height: "auto" }} alt="" />
                    </div>
                </section>
            </section>
        );
    }
}

export default Ceremony;