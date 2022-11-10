import { useCallback, useEffect, useState } from "react";
import { httpGetCompanies } from "./company.requests";

/**
 * @func useCompanies Gets and returns the data from httpGetCompanies function
 * @returns A list containing companies informations
 */
export const useCompanies = () => {
  const [companies, setCompanies] = useState(null);

  // Create a memoized function that is remembered
  // on first and subsequent re-renders
  const getCompanies = useCallback(async () => {
    const fetchedCompanies = await httpGetCompanies();
    setCompanies(fetchedCompanies);
  }, []);
  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  return companies;
};
