import React, { useContext } from "react";
import { IResume, ResumeContext } from "@/context/ResumeContext";
import Section from "./Section";
import Image from 'next/image'

export default function ProfessionalSummary(): JSX.Element {
    const resumeContext = useContext<IResume>(ResumeContext);

    return (
        <Section
            title="Profile"
        >
            <div className="p-4 lg:p-6 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                    <Image
                        className="rounded-full w-64 h-64 lg:w-64 lg:h-64 mx-auto mb-4"
                        src={'/headshot.png'}
                        alt='Austin Jenkins headshot'
                        width={300}
                        height={300}                  
                    />
                </div>
                <div className="w-full lg:w-3/4">
                    <p className="mb-4">Hey there! 👋 I&apos;m a Full Stack Web Developer with over 10 years of experience slinging code left, right and center! 💻 🚀</p>
                    <p className="mb-4">I&apos;m all about writing clean, efficient code that runs like a well-oiled machine 🏎️ 💨. And when it comes to working with teams, I&apos;m like like a shooting guard (can pass the ball or hit the shot from the corner)! 🤝 🏀  I love collaborating with people from all over the organization to make sure we achieve our goals and have some fun along the way 🎉 🎊.</p>
                    <p className="mb-4">I&apos;m a self-starter and love nothing more than rolling up my sleeves and tackling new challenges head-on! 🤓 I&apos;m especially keen to work with growth-stage startups and help them bring their innovative ideas to life! 💡🌱</p>
                    <p className="mb-4">Let&apos;s build something amazing together! 🚀 🌟</p>
                </div>
            </div>
        </Section>
    )

}