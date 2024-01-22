import highstock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import { getCookie } from "../services/servicehelp";

const tokenName = process.env.REACT_APP_JWT_NAME;

const options = {

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        // ... other tooltip options
    },

    title:{
        text:'Rating'
    },
    series: [
      {
        name:'Leetcode',
        data: [
          29.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4
        ]
      },
      {
        name:'codeforces',
        data: [ 
          194.1,
          95.6,
          54.4
        ]
      },

    ]
  };

const Chart = () =>{
    const navigate = useNavigate();
    const [chartOptions, setChartOptions] = useState({
      // Initial chart options
      xAxis: {
        title: {
            text: 'Contest Attended' // X-axis label
        }
      },
      yAxis: {
          title: {
              text: 'Rating' // Y-axis label
          }
      },
      title: {
        text: 'Initial Chart',
      },
      series: [
        { name:'Leetcode',
          data: [1],
        },
        { name:'Codefroces',
          data: [2],
        },
      ],
    });
    useEffect(()=>{
          checkAuth();
    },[]);

    useEffect(()=>{
        console.log('leetcode or options any one of them have been changed')
        console.log('options',options)
    },[options])
    const checkAuth = async() =>{
      const authToken = getCookie(tokenName);
      if(!authToken){
        // navigate('/login');
      }
      else{
        try{
          const axiosInstance = axios.create({
            headers: {
              common: {
                Authorization: `Bearer ${authToken}`
              }
            }
          });
          const response = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/leetcode/rating`);
          const cfresponse = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/codeforces/rating`);
          const data = response.data.message;
          const cfdata = cfresponse.data.message;
          const Rating = [];
          const cfRating = [];
          for(let i = 0;i<data.length;i++){
            const contest = {
              name:data[i].contest.title,
              y:Math.round(data[i].rating),
            }
            Rating.push(contest);
            console.log(Rating);
          }
          for(let i = 0;i<cfdata.length;i++){
            const contest ={
              name:cfdata[i].contestName,
              y:Math.round(cfdata[i].newRating),
            }
            cfRating.push(contest);
          }
          setChartOptions({
            chart: {
              type: 'spline',
              backgroundColor: 'transparent'
            },
            xAxis: {
              title: {
                  text: 'Contest Attended' // X-axis label
              }
            },
            yAxis: {
                title: {
                    text: 'Rating' // Y-axis label
                },
                lineColor: '#999',
                gridLineColor: 'gray',
            },
            // chart: {
            //   backgroundColor: 'black' // Chart background
            // },
            title: {
              text: 'Rating Chart',
            },
            series: [
              {
                name:'Leetcode',
                data: Rating,
                color:'green',
                marker:{
                  // radius: 5, // Adjust marker size
                  // // symbol: 'triangle', // Change marker shape (see https://api.highcharts.com/highcharts/series.line.marker.symbol for options)
                  // fillColor: 'blue', // Set marker fill color
                  lineWidth: 1, // Set marker outline width
                  lineColor: 'lightgreen',
                  symbol:'circle',
                }
              },
              {
                name:'Codeforces',
                data:cfRating,
                color:'purple',
                marker:{
                  lineWidth: 1, // Set marker outline width
                  lineColor: 'violet',
                  symbol:'circle',
                }
              }
            ],
            tooltip: {
              enabled: true,
              formatter: function() {
                  return '<b>' + this.point.name + '</b>: ' + this.y + ' <h3>Rating</h3>';
              }
              },
            //   yAxis: {
            //     lineColor: '#999', // Axis line color
            //     gridLineColor: 'gray', // Gridline color
            // }
          });
    
        } catch(error){
            // navigate('/login');
        }
      }
    }

    return(
        <div>
            {
              <>{
                 chartOptions.length === 0 ? <h1>coming wait</h1>
                :
                <HighchartsReact options={chartOptions} highcharts={highstock} />
              }
              </>
               
                
            }
            
        </div>
    )
}

export default Chart;