import { useState } from 'react'
import { uid } from 'uid'
import SponsorCard from '../SponsorCard/SponsorCard'
import './Sponsors.css'

const sponsors = [
    {
        name: "Wix Studio",
        type: "Financial Sponsor",
        description: "The intuitive way for agencies and enterprises to design exceptional sites, with full-stack business solutions, multi-site management and built-in AI.",
        logo: "https://static.wixstatic.com/media/0d6674_b39c8ddaafbd4b8dbb459a4221ee8227~mv2.png/v1/fill/w_524,h_519,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2010000017556.png", 
        id: 'wix_card'
    }, {
        name: "Digital Harbor Foundation",
        type: "Venue Sponsor",
        description: "Believes that digital equity is for everyone, & there should be diversity in the technology sector. They feature programming for after school tech clubs, programs in web and mobile development, a maker space.",
        logo: 'https://digitalharbor.org/wp-content/uploads/2022/12/DHF-icon-4023-300x300.png',
        id: 'dhf_card'
    },{
        name: "Spark",
        type: "Venue Sponsor",
        description: "Spark is Baltimore’s most collaborative coworking space, featuring private offices and shared workspace for entrepreneurs, creators and innovators, located at Power Plant Live! They provide us with idyllic venue spaces within their building.",
        logo: 'https://sparkcoworking.com/baltimore/wp-content/uploads/sites/6/2018/05/spark-baltimore-logo.png',
        id: 'spark_card'
    },{
        name: "Pava Center for Entrepreneurship",
        type: "Venue Sponsor",
        description: "The Pava center fuels entrepreneurship for Johns Hopkins students and alumni. For us they serve as a point of integration with Code & coffee & the Hopkins community. They provide various resources such as accelerators, networking events & seminars as well as mentorship.",
        logo: 'https://www.jhu.edu/assets/themes/machado/src/assets/images/logos/university-logo-small-vertical-white-no-clear-space.png',
        id: 'pava_card'
    }
]
function Sponsors() {
    
    return ( 
        <div className="sponsors">
            <h2>Sponsors</h2>
            <p className="sponsors__description">Partner with Us to Grow Your Brand and Support the Tech Community</p>
            <div className="sponsors__tiles">
                {sponsors.map(sponsor => {
                    return (
                        <SponsorCard sponsor={sponsor} key={uid}/>
                    )
                })}
            </div>
            <a href="emailto:test@example.com" className="sponsors__partner-link">Partner With Us</a>
        </div>
        
     );
}

export default Sponsors;