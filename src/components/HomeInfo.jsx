import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className = "info-box">
        <p className="font-medium sm: text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-smug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello, I'm <span className="font-semibold">Eric Li</span>
        <br/>
        An <span className="font-semibold">Applied Math</span> Student at <span className="font-semibold">Northwestern University</span>
        </h1>
    ),
    2: (
        <InfoBox 
        text="Over several years, I have built skills in applied math and coding, shaped by experiences that continue to guide my growth and learning"
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Here is a showcase of my work, ranging from coursework assignments to personal explorations. Each piece tells a story of problem-solving and creativity"
        link="/projects"
        btnText="My Creations"
        />
    ),
    4: (
        <InfoBox 
        text="If you have questions, ideas to collaborate on, or just want to connect, please do not hesitate to reach out. I welcome all conversations and opportunities to engage"
        link="/contact"
        btnText="Contact Me"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent [currentStage] || null;
}

export default HomeInfo