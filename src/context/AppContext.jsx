import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  // Variable created to hold the base url for the API
  const url = 'https://hrf-asylum-be-b.herokuapp.com/cases';

  // Retrieves data from the fiscalSummary endpoint
  const getFiscalData = async () => {
    try {
      const fiscalDataRes = await axios.get(`${url}/fiscalSummary`);
      return fiscalDataRes.data;
    } catch (error) {
      console.log("Error with getting Fiscal Data", error);
      return {};
    }
  };

  // Retrieves data from the citizenshipSummary endpoint
  const getCitizenshipResults = async () => {
    try {
      const citizenshipRes = await axios.get(`${url}/citizenshipSummary`);
      return citizenshipRes.data;
    } catch (error) {
      console.log("Error with getting Citizenship Results", error);
      return {};
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  // Puts the yearResults from fiscalData and citizenshipResults into GraphData and stops loading
  const fetchData = async () => {
    try {
      const fiscalData = await getFiscalData();
      const citizenshipResults = await getCitizenshipResults();

      setGraphData({
        yearResults: fiscalData.yearResults,
        citizenshipResults: citizenshipResults
      });
    } catch (error) {
      console.log("Fetching Data error ", error);
    }

    setIsDataLoading(false);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}