import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skills-container">
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React JS'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'SCSS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Machine Learning'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'HTML5'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Django'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MySQL'} progress={'50%'} width={'50%'} />
            </div>
        </div>
    )
}

export default AboutPage
