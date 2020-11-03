import React from 'react';
import Profile from '../comps/Profile';

export default {
    title: 'Profile',
    component: Profile
  }
  
  export const UserProfile = () => <Profile fname="Jane" lname="Appleseed" city="Vancouver" province="B.C." score="1300"/>;