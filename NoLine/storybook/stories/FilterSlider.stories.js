import React from 'react';
import FilterSlider from '../comps/FilterSlider'

export default {
    title: 'Example/FilterSlider',
    component: FilterSlider
};

export const WaitTime = () => <FilterSlider />;

export const Distance = () => <FilterSlider text="Distance" number="50km" slidenumber="10km"/>;