import highstock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams , useNavigate } from "react-router-dom";
const Chart = () => {
  const navigate = useNavigate();
  const leetcodeDetails = useSelector((store) => store.leetcodeDetails);
  const { rating } = leetcodeDetails;
  const codeforcesDetails = useSelector((store) => store.codeforcesDetails);
  const { cfRating } = codeforcesDetails;
  const {id} = useParams();

  const [chartOptions, setChartOptions] = useState({
    // Initial chart options
    xAxis: {
      title: {
        text: "Contest Attended", // X-axis label
      },
    },
    yAxis: {
      title: {
        text: "Rating", // Y-axis label
      },
    },
    title: {
      text: "Initial Chart",
    },
    series: [
      { name: "Leetcode", data: [1] },
      { name: "Codefroces", data: [2] },
    ],
  });
  
  useEffect(() => {
    checkAuth();
  }, [rating, cfRating ,id]);

  const checkAuth = async () => {
    const data = rating;
    const cfdata = cfRating;
    const Rating = [];
    const cfFilterRating = [];
    Rating.push(
      {
        name: "none",
        y: 1500,
      }
    )
    cfFilterRating.push(
      {
        name: "none",
        y: 1500,
      }
    )
    if (data.length > 0) {
      for(let x of data){
        const contest = {
          name: x.contest.title,
          y: Math.round(x.rating),
        };
        Rating.push(contest);
      }
    } 
    // else {
    //   Rating.push({ name: "Contest none", y: 1500 });
    // }

    if (cfdata.length > 0) {
      for(let x of cfdata){
        const contest = {
          name: x.contestName,
          y: Math.round(x.newRating),
        };
        cfFilterRating.push(contest);
      }
    } 
    // else {
    //   const contest = {
    //     name: "Contest None",
    //     y: 0,
    //   };
    //   cfFilterRating.push(contest);
    // }

    setChartOptions({
      chart: {
        type: "spline",
        backgroundColor: "transparent",
      },
      xAxis: {
        title: {
          text: "Contest Attended", // X-axis label
        },
        min:1,
      },
      yAxis: {
        title: {
          text: "Rating", // Y-axis label
        },
        lineColor: "#999",
        gridLineColor: "gray",
      },
      // chart: {
      //   backgroundColor: 'black' // Chart background
      // },
      title: {
        text: "Rating Chart",
      },
      series: [
        {
          name: "Leetcode",
          data: Rating,
          color: "green",
          marker: {
            lineWidth: 1, // Set marker outline width
            lineColor: "lightgreen",
            symbol: "circle",
          },
        },
        {
          name: "Codeforces",
          data: cfFilterRating,
          color: "purple",
          marker: {
            lineWidth: 1, // Set marker outline width
            lineColor: "violet",
            symbol: "circle",
          },
        },
      ],
      tooltip: {
        enabled: true,
        formatter: function () {
          const point =  this.point.name
          const y = this.y;
          return (
            "<b>" + point + "</b>: " + y + " <h3>Rating</h3>"
          );
        },
      },
    });
  };

  return (
    <div>
      {
        <>
          {chartOptions.length === 0 ? (
            <h1>coming wait</h1>
          ) : (
            <HighchartsReact options={chartOptions} highcharts={highstock} />
          )}
        </>
      }
    </div>
  );
};

export default Chart;
