import { ISkill } from "@/context/ResumeContext";
import React from "react";

interface IProps {
    skill: ISkill;
}

export default function SkillRow({ skill }: IProps): JSX.Element {
    const { name, level } = skill;

    return (
        <div className="w-1/4 text-center">
            <div className="m-2 py-6 border rounded">
            <p className="text-lg font-bold text-amber-800">{name}</p>
            <em className="text-sm">{level}</em>
            </div>
        </div>
    )
};