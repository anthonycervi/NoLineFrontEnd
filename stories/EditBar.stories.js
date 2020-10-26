import React from 'react';
import EditBar from '../comps/EditBar';

export default {
  title: 'EditBar',
  component: EditBar
}

export const EditProfile = () => <EditBar left="Cancel" middle="Edit Profile" right="Done"/>;
export const EditSearchFilters = () => <EditBar left="Cancel" middle="Search Filters" right="Clear Filters"/>;