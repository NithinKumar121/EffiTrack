
import { useEffect, useState } from "react";
import Card from "./Card";
import GitProfile from "./GitProfile";
import LineChart from "./LIneChart";
import Upcoming from "./Upcoming";
import { useSelector } from "react-redux";
const {LcSlice} = require('../../redux/LcSlice');
const {CodeForce} = require('../../redux/store');

const Mid = ()=>{

    var leetcodeCount = useSelector(state => state.Leetcode.LcData);
    var leetcodeRating = useSelector(state => state.Leetcode.LcContest);
    var codeforce_count = useSelector(state => state.CodeForce.CFcount);
    var codeforce_rating = useSelector(state => state.CodeForce.CFrating);
    
    const cardData = [
        {
            title:'Leetcode',
            sub_title:'leetcode',
            count:'340',
            rank:'49+',
            completed_count: 300,
            topic_color:'cd1_red',
        },
        {
            title:'CodeChef',
            sub_title:'codechef',
            count:'340',
            rank:'49+',
            completed_count: 400,
            topic_color:'cd1_orange'
        },
        {
            title:'CodeForces',
            sub_title:'codeforces',
            count:'340',
            rank:'49+',
            completed_count: 700,
            topic_color:'cd1_green'
        }
    ]
    const github_data = {topic:"bg-cd1_purple"}
    return(
    <>
        <section className="mid-top mt-[.5rem]">
            <div className="mid-left">
                <div className="cards">
                    {
                        cardData.map((card,index)=>{
                            return(
                                <Card card={card}/>
                            );
                        })
                    }
                </div>
                <div className="graph-git">
                    {/* <div className="flex justify-center w-full">
                        <LineChart/>
                    </div> */}
                    <div className="rounded-xl h-full item2 shadow-md git-profile">
                        <GitProfile modify={github_data}/>
                    </div>
                    <div className="p-2 bg-white rounded-xl shadow-md ">
                        <LineChart/>
                    </div>
                </div>
            </div> 
            <div className="mid-right">
                <Upcoming/>
            </div>  
        </section>
        </>
    )

}

export default Mid;