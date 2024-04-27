import { Skill } from "./SkillsSection";

interface IProps {
    skill: Skill;
}
export default function SkillCard({
    skill
}: IProps) {

    const { title, skills } = skill;

    return (
        <div className="skill-card-container">
            <div className="skill-card-shadow" />
            <div className="skill-card">
                <div className="skill-header">{title}</div>
                <div className="skill-body">
                    <div className="skill-legend">
                        <div className="skill-legend-section">
                            <div className="year" />
                            <span># of years</span>
                        </div>
                        <div className="skill-legend-section skill-legend-section-project">
                            <div className="project" />
                            <span># of projects</span>
                        </div>
                    </div>
                    {
                        skills.map((skill, index) => (
                            <div className="skill-meter" key={index}>
                                <div className="skill-meter-markers">
                                    {
                                        [...Array(skill.years)].map((year, idx) => <div key={idx} className="year" />)
                                    }

                                    {
                                        [...Array(skill.projects === 'Many' ? 8 : skill.projects)].map((project, idx) => (
                                            <div key={idx} className="project" />
                                        ))
                                    }
                                </div>
                                <span className="skill-meter-name">{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}