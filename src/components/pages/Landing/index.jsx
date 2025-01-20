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
    <div className='flex-c w-[100vw] secondary-c'>
      <div data-purpose="Graphs and Charts" className='flex justify-center gap-20 mb-6'>
        <div className="flex flex-col items-center">
          <img src={barGraph} alt={"Bar Graph"} className="object-contain w-100 h-60"/>
          <p className='text-xl'>Search Grant Rates By Office</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={pieChart} alt={"Pie Chart"} className="object-contain w-90 h-60"/>
          <p className='text-xl'>Search Grant Rates By Nationality</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={lineGraph} alt={"Line Graph"} className="object-contain w-100 h-60"/>
          <p className='text-xl'>Search Grant Rates Over Time</p>
        </div>
      </div>
      
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