import React from 'react';
import AchievementIcon from '../../comps/AchievementIcon'
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('AchievementIcon', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Achievement', () => (
    <AchievementIcon />
  ))
  .add('Achievement2', () => (
    <AchievementIcon text="Report a wait time" text2="+2000" image="timer.svg"/>
  ))