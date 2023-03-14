import { ISkill } from "@/context/ResumeContext";
import React from "react";

interface IProps {
    skill: ISkill;
}

export default function SkillRow({ skill }: IProps): JSX.Element {
    const { name, level } = skill;

    return (
        <div>
            <p>{name}</p>
            <p>{level}</p>
        </div>
    )
};