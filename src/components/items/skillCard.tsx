import React from "react";
import { type IconType } from "react-icons";

export interface SkillItemData {
  name: string;
  icon: IconType;
  level: string;
  color: string;
}

interface SkillCardProps {
  skill: SkillItemData;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const Icon = skill.icon;
  
  return (
    <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
      <Icon className={`text-4xl md:text-6xl ${skill.color} flex-shrink-0`} />
      <div>
        <h3 className="text-sm md:text-lg font-bold text-white">{skill.name}</h3>
        <p className="text-xs md:text-sm text-purple-400">{skill.level}</p>
      </div>
    </li>
  );
};

export default SkillCard;