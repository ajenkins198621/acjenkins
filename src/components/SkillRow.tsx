import { ISkill } from "@/context/ResumeContext";
import React from "react";

interface IProps {
    skill: ISkill;
}

export default function SkillRow({ skill }: IProps): JSX.Element {
    const { name, level, icon } = skill;

    return (
        <div className="w-1/2 sm:w-1/3 lg:w-1/4 text-center">
            <div className="m-2 py-6 border rounded">
                {!!icon && <div className="flex justify-center text-5xl">{icon}</div>}
                <p className="text-lg font-bold text-rose-600 leading-tight">{name}</p>
                <em className="text-sm">{level}</em>
            </div>
        </div>
    )
};