import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';

import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 25; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  // Implemented functionality to this function to bring user to humanrightsfirst page
  const handleReadMore = () => {
    const url = "https://humanrightsfirst.org/"
    window.location.href = url
  };

  // Created this function to bring user to /graphs
  const handleViewData = () => {
    navigate('/graphs')
  };

  return (
    <div className="w-[100vw] secondary-c">
      
      <section className="landing-header primary-c pt-4 pb-8">
        <div className="text-white">
          <h1 className="text-6xl mb-8">Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, 
            policymakers, and the public an interactive tool to explore USCIS data on 
            Asylum Office decisions
          </h3>
        </div>
      </section>


      <section className="graphs-data-interaction pt-10 flex-c items-center">
        <div className="graphs-charts flex m-14 gap-20 text-2xl">
          <figure className="flex-c gap-3">
            <img src={barGraph} alt={"Bar Graph"} className="h-[300px] w-[500px]"/>
            <h3>Search Grant Rates By Office</h3>
          </figure>
          <figure className="flex-c gap-3">
            <img src={pieChart} alt={"Pie Chart"} className="h-[300px]"/>
            <h3>Search Grant Rates By Nationality</h3>
          </figure>
          <figure className="flex-c gap-3">
            <img src={lineGraph} alt={"Line Graph"} className="h-[300px] w-[500px]"/>
            <h3>Search Grant Rates Over Time</h3>
          </figure>
        </div>

        <div className="data-buttons flex gap-8"> 
          <button className="bg-[#aaa] px-[10px] py-[5px] text-white font-semibold" 
            onClick={handleViewData}>
              View the Data
          </button>
          <button className="bg-[#aaa] px-[10px] py-[5px] text-white font-semibold" 
            onClick={downloadCSV}>
              Download the Data
          </button>
        </div>
      </section>


      <section className="about-section flex" >
        <div className="flex-1 content-center p-20">
          <img src={paperStack} alt={"Paper Stack"} className="rounded-2xl h-[70%] w-[100%]"/>
        </div>

        <div className="flex-1 content-center p-20">
          <p className="text-xl">
            Human Rights First has created a search tool to give you a user-friendly way to 
            explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS 
            Asylum Office, which we received through a Freedom of Information Act request. 
            You can search for information on asylum grant rates by year, nationality, and 
            asylum office, visualize the data with charts and heat maps, and download the 
            data set.
          </p>
        </div>
      </section>


      <section className="disparity-insights flex-c gap-16">
        <div className="disparity-header">
          <h3 className="text-5xl">Systemic Disparity Insights</h3>
        </div>

        <div className="disparity-data flex m-14 gap-20">
          <div className="flex-c-1 gap-12">
            <h3 className="text-4xl">36%</h3>
            <p className="text-lg">
              By the end of the Trump administration, the average asylum office grant rate 
              had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent 
              in fiscal year 20202.
            </p>
          </div>
          <div className="flex-c-1 gap-12">
            <h3 className="text-4xl">5%</h3>
            <p className="text-lg">The New York asylum office grant rate dropped to 5 percent 
              in fiscal year 2020.</p>
          </div>
          <div className="flex-c-1 gap-12">
            <h3 className="text-4xl">6x Lower</h3>
            <p className="text-lg">
              Between fiscal year 2017 and 2020, the New York asylum office's average grant 
              rate was 6 times lower than the San Francisco asylum office.
            </p>
          </div>
        </div>
      </section>


      <section className="read-more">
        <button className="primary-c text-white px-4 py-2" onClick={handleReadMore}>
          Read More
        </button>
      </section>


      <section className="back-to-top p-16">
        <button className="font-medium" onClick={scrollToTop}>Back To Top ^</button>
      </section>

    </div>
  );
};