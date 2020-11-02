import React from 'react';
import FoodIcon from '../comps/FoodIcon'

export default {
    title: 'Example/FoodIcon',
    component: FoodIcon
};

export const American = () => <FoodIcon />;
export const French = () => <FoodIcon text="French" image="French.svg"/>;
export const Italian = () => <FoodIcon text="Italian" image="Italian.svg"/>;
export const MiddleEast = () => <FoodIcon text="MiddleEast" image="MiddleEast.svg"/>;
export const Chinese = () => <FoodIcon text="Chinese" image="Chinese.svg"/>;
export const Pizza = () => <FoodIcon text="Pizza" image="Pizza.svg"/>;
export const Mexican = () => <FoodIcon text="Mexican" image="Mexican.svg"/>;
export const Sushi = () => <FoodIcon text="Sushi" image="Sushi.svg"/>;
export const Thai = () => <FoodIcon text="Thai" image="Thai.svg"/>;
export const Indian = () => <FoodIcon text="Indian" image="Indian.svg"/>;
export const Seafood = () => <FoodIcon text="Seafood" image="Seafood.svg"/>;
export const Vietnamese = () => <FoodIcon text="Vietnamese" image="Vietnamese.svg"/>;
