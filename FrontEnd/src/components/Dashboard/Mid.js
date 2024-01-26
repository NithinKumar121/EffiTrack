import { useEffect, useState } from "react";
import Card, { LeetcodeCard, CodeChefCard, CodeforcesCard } from "./Card";
import GitProfile from "./GitProfile";
import LineChart from "./LIneChart";
import Upcoming from "./Upcoming";
import Shim from "./Shimmer";
import { useSelector } from "react-redux";
import Chart from "../highcharts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../services/servicehelp";
import {
  getLeetCount,
  getChefData,
  getForceCount,
} from "../../services/show.service";
import LeetCode_logo from "../../assets/LeetCode_logo.png";
import Codeforces_logo from "../../assets/codeforces.png";
import { modifyCount, modifyRating } from "../../redux/LeetcodeSlice";
import { cfModifyRating, cfModifyProfile } from "../../redux/codeforcesSlice";
import { ccUpdateUserDetails } from "../../redux/codechefSlice";
import { updateGithubRepo, updateGithubProfile } from "../../redux/githubSlice";
import { useDispatch } from "react-redux";

const tokenName = process.env.REACT_APP_JWT_NAME;

const Mid = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const leetcodeDetails = useSelector((store) => store.leetcodeDetails);
  const codechefDetails = useSelector((store) => store.codechefDetails);
  const githubDetails = useSelector((store) => store.githubDetails);

  const { count, rating } = leetcodeDetails;
  const { ccUserDetails } = codechefDetails;
  const { GithubProfile } = githubDetails;

  useEffect(() => {
    leetcodeData();
    codeforcesData();
    codechefData();
    githubData();
  }, []);

  const leetcodeData = async () => {
    const authToken = await getCookie(tokenName);
    if (!authToken) {
      navigate("/login");
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/leetcode/count`,
      );
      const data = lcresponse.data.message;
      dispatch(modifyCount(data));
    } catch (error) {
      if (error.response.data.error || error.response.request.status === 400) {
        console.log(error.response.data.message);
      }
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/leetcode/rating`,
      );
      const data = lcresponse.data.message;

      dispatch(modifyRating(data));
    } catch (error) {
      if (
        error.response.data.error ||
        error.response.request.status === 404 ||
        error.response.request.status === 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  const codeforcesData = async () => {
    const authToken = await getCookie(tokenName);
    if (!authToken) {
      navigate("/login");
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/codeforces/rating`,
      );
      const data = lcresponse.data.message;
      dispatch(cfModifyRating(data));
    } catch (error) {
      if (
        error.response.data.error ||
        error.response.request.status === 404 ||
        error.response.request.status === 500
      ) {
        console.log(error.response.data.message);
      }
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/codeforces/count`,
      );
      const data = lcresponse.data.message;
      dispatch(cfModifyProfile(data));
    } catch (error) {
      if (
        error.response.data.error ||
        error.response.request.status === 404 ||
        error.response.request.status === 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  const codechefData = async () => {
    const authToken = await getCookie(tokenName);
    if (!authToken) {
      navigate("/login");
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/codechef/details`,
      );
      const data = lcresponse.data.message;
      dispatch(ccUpdateUserDetails(data));
    } catch (error) {
      if (
        error.response.data.error ||
        error.response.request.status === 400 ||
        error.response.request.status === 404
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  const githubData = async () => {
    const authToken = await getCookie(tokenName);
    if (!authToken) {
      navigate("/login");
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/github/repo`,
      );
      const data = lcresponse.data.message;
      dispatch(updateGithubRepo(data));
    } catch (error) {
      if (
        error.response.data.error ||
        error.response.request.status === 400 ||
        error.response.request.status === 404
      ) {
        console.log(error.response.data.message);
      }
    }

    try {
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      });
      const lcresponse = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/github/profile`,
      );
      const data = lcresponse.data.message;
      dispatch(updateGithubProfile(data));
    } catch (error) {
      if (
        error.response.data.error ||
        error.response.request.status === 400 ||
        error.response.request.status === 404
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  // const cardData = [
  //   {
  //     title: "Leetcode",
  //     sub_title: "leetcode",
  //     count: count[0].count,
  //     rank: count[0].submissions,
  //     completed_count: count[0].count,
  //     topic_color: "bg-cd1_red",
  //     logo: LeetCode_logo,
  //   },
  //   {
  //     title: "CodeChef",
  //     sub_title: "codechef",
  //     count: "340",
  //     rank: "49+",
  //     completed_count: 400,
  //     topic_color: "bg-cd1_orange",
  //     logo: LeetCode_logo,
  //   },
  //   {
  //     title: "CodeForces",
  //     sub_title: "codeforces",
  //     count: "340",
  //     rank: "49+",
  //     completed_count: 700,
  //     topic_color: "bg-cd1_green",
  //     logo: Codeforces_logo,
  //   },
  // ];

  const github_data = { topic: "bg-cd1_purple" };
  return (
    <>
      {
        <section className="mid-top ">
          <div className="mid-left">
            <div className="cards">
              <LeetcodeCard />
              <CodeChefCard />
              <CodeforcesCard />
            </div>
            <div className="graph-git mb-2">
              <div className="rounded-xl h-full item2 hover:shadow bg-[#fff] slowmo shadow-xl dark:bg-[#1d1d1d] dark:text-[#f3f3f3] mr-2">
                <GitProfile modify={github_data} />
              </div>
              <div className="p-2 bg-white dark:bg-[#1d1d1d] rounded-xl shadow-md ">
                <Chart />
              </div>
            </div>
          </div>
          <div className="mid-right mt-1 mb-2 shadow-lg hover:shadow">
            <Upcoming />
          </div>
        </section>
      }
    </>
  );
};

export default Mid;
