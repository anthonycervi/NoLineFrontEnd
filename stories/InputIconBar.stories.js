import React from 'react';
import InputIconBar from '../comps/InputIconBar';
import searchIcon from '../public/searchIcon.svg';
import sendIcon from '../public/sendIcon.svg';

export default {
    title: 'InputIconBar',
    component: InputIconBar
  }
  
  export const SearchBar = () => <InputIconBar text="Search" image="SearchSVG.src"/>;
  export const CommentBar = () => <InputIconBar text="Add a Comment..." image="sendIcon.src"/>;