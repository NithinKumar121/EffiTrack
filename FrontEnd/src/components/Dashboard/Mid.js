
import { useEffect, useState } from "react";
import Card from "./Card";
import GitProfile from "./GitProfile";
import LineChart from "./LIneChart";
import Upcoming from "./Upcoming";
import Shim from "./Shimmer";
import { useSelector } from "react-redux";
const {LcSlice} = require('../../redux/LcSlice');
const {CodeForce} = require('../../redux/store');


const Mid = ()=>{   

    const cardData = [
        {
            title:'Leetcode',
            sub_title:'leetcode',
            count:500,
            rank:100,
            completed_count: 300,
            topic_color:'bg-cd1_red',
        },
        {
            title:'CodeChef',
            sub_title:'codechef',
            count:'340',
            rank:'49+',
            completed_count: 400,
            topic_color:'bg-cd1_orange'
        },
        {
            title:'CodeForces',
            sub_title:'codeforces',
            count:'340',
            rank:'49+',
            completed_count: 700,
            topic_color:'bg-cd1_green'
        }
    ]
    const [hello,sethello] = useState({
        name:'hello',
        age:'24',
    })
    const github_data = {topic:"bg-cd1_purple"}
    return(
    <>
    {
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
                    <div className="rounded-xl h-full item2 shadow-md bg-purple-300">
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
            <button onClick={()=>{
                hello.name = 'new name';
                sethello(hello);
                console.log(hello);
            }}>click</button>
        </section>
    }
        
        </>
    )

}

export default Mid;