import { Skill } from '../typings';

export const fetchSKills = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSKills`);

  const data = await response.json();
  const skills: Skill[] = data.skills;

  console.log('fetching', skills);
  return skills;
};
