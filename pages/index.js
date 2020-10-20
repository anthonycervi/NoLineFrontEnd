import React, {useState} from 'react';
import Header from '../comps/Header';
import BigCardBox from '../comps/Bigcard';
import Button from '../comps/Button';
import TextBox from '../comps/TextBox';
import PieChart from '../comps/PieChart';
import InfoCard from '../comps/InfoCard';
import Slider from '../comps/Slider';
import Box from '../comps/'

export default function Home() {
    return <div>
<Header textHeader={"Header"} textforDataHeader={"Welcome to my app about sources"}/>
<BigCardBox textForData={"Starting up"} text={"Going to space is no longer a dream!"}/>
<Button/>
<TextBox/>
<TextBox/>
<TextBox/>
<PieChart/>
<InfoCard/>
<Slider/>
    </div>
}