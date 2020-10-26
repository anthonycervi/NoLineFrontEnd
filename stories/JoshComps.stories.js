import React from 'react';
import InputComp from '../comps/InputComp'
import SearchTitle from '../comps/SearchTitle'
import UserPage from '../comps/UserPage'
import MapOverlay from '../comps/MapOverlay'
import SearchResult from '../comps/SearchResult'


export default {
    title: 'Example/FormButtons',
    component: InputCompForm, SearchTitleTop,UserPageTop,GoogleMapOverlay,SearchResultOverlay
}



export const InputCompForm = () => <InputComp/> 

export const SearchTitleTop = () => <SearchTitle/>

export const UserPageTop = () => <UserPage/>

export const GoogleMapOverlay = () => <MapOverlay/>

export const SearchResultOverlay = () => <SearchResult/>