
import { useEffect, useState } from "react";
import Card from "./Card";
import GitProfile from "./GitProfile";
import LineChart from "./LIneChart";
import Upcoming from "./Upcoming";
import Shim from "./Shimmer";
import { useSelector } from "react-redux";
import Chart from "../highcharts";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { getCookie } from '../../services/servicehelp';
import { getLeetCount , getChefData , getForceCount } from "../../services/show.service";


const {LcSlice} = require('../../redux/LcSlice');
const tokenName = process.env.REACT_APP_JWT_NAME;

const Mid = ()=>{   
    const navigate = useNavigate();
    useEffect(()=>{
        allplatform();
    },[]);
    const [leetcode,setLeetcode] = useState({});
    const [codechef,setCodechef] = useState({});
    const [codeforces,setCodeforces] = useState({});

    const allplatform = async () =>{
        const authToken = getCookie(tokenName);
        if(!authToken){
            navigate('/login');
        }
     
        try{
          const axiosInstance = axios.create({
            headers: {
              common: {
                Authorization: `Bearer ${authToken}`
              }
            }
          });
          const lcresponse = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/leetcode/count`);
          const ccresponse = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/codechef/details`);
          const cfresponse = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/codeforces/count`);
          if(!lcresponse.error){
            setLeetcode(lcresponse.data.message)
          }
          if(!ccresponse.error){
            setCodechef(ccresponse.data.message)
          }
          if(!cfresponse.error){
            setCodeforces(cfresponse.data.message)
          }
        } catch(error){
            console.log("leetcode data can't be retrieved");
        }
      }
    
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

    const github_data = {topic:"bg-cd1_purple"}
    return(
    <>
    {
        <section className="mid-top ">
            <div className="mid-left">
                <div className="cards">
                    {
                        cardData.map((card,index)=>{
                            return(
                                <Card card={card} key={index}/>
                            );
                        })
                    }
                </div>
                <div className="graph-git">
                    <div className="rounded-xl h-full item2 shadow-md bg-purple-300">
                        <GitProfile modify={github_data}/>
                    </div>
                    <div className="p-2 bg-white rounded-xl shadow-md ">
                      <Chart/>
                    </div>
                </div>
            </div> 
            <div className="mid-right">
                <Upcoming/>
            </div>  
        </section>
    }   
        </>
    )

}

export default Mid;