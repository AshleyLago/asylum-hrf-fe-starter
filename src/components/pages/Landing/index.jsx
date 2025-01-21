// Uncommented the imports from assets
import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';

import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
// import {decodeBase64} from '../../../utils/decodeBase64.js'; Commented, no longer needed

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className="flex-c w-[100vw] secondary-c">
      
      <section data-purpose="Landing Header" className="flex primary-c pt-4 pb-8">
        <div className="flex-c mx-auto">
          <h1 className="text-6xl mb-8 text-white">Asylum Office Grant Rate Tracker</h1>
          <h3 className="text-white">
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, 
            and the public an interactive tool to explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </section>

      <section data-purpose="Graphs and Data Interaction" className="flex-c pt-10">
        <div className="flex justify-center m-14 gap-20 text-2xl">
          <div className="flex-c gap-3">
            <img src={barGraph} alt={"Bar Graph"} className="h-[300px] w-[500px]"/>
            <h3>Search Grant Rates By Office</h3>
          </div>
          <div className="flex-c gap-3">
            <img src={pieChart} alt={"Pie Chart"} className="h-[300px] contain-content"/>
            <h3>Search Grant Rates By Nationality</h3>
          </div>
          <div className="flex-c gap-3">
            <img src={lineGraph} alt={"Line Graph"} className="h-[300px] w-[500px]"/>
            <h3>Search Grant Rates Over Time</h3>
          </div>
        </div>
        <div className="flex align-center mx-auto gap-8">
          <button className="bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold">View the Data</button>
          <button className="bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold">Download the Data</button>
        </div>
      </section>

      <section data-purpose="About Section" className="flex" >
        <div className="flex-1 content-center p-20">
          <img src={paperStack} alt={"Paper Stack"} className="hrf-img rounded-2xl h-[70%] w-[100%]"/>
        </div>
        <div className="flex-1 content-center p-20">
          <p className="text-xl">
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum 
            decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we reviewed through a Freedom of 
            Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum 
            office, visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

    </div>
  );
};

/*
View the Data
Download the Data

Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we reviewed through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.

System Disparity Insights
36%
By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 206 to 28 percent in fiscal year 2020.
5%
The New York asylum office grant rate dropped to 5 percent in the fiscal year 2020.
6x Lower
Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.

Read More

Back to Top ^
*/