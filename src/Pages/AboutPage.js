import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
        </div>
    )
}

export default AboutPage
