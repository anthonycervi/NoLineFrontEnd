import React from 'react';
import AchievementIcon from '../comps/AchievementIcon'

export default {
    title: 'Example/AchievementIcon',
    component: AchievementIcon
};

export const Achievement1 = () => <AchievementIcon />;

export const Achievement2 = () => <AchievementIcon text="Report a wait time" text2="+2000" image="timer.svg"/>;