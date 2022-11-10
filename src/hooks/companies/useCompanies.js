import { useCallback, useEffect, useState } from "react";
import { httpGetCompanies } from "./company.requests";

/**
 * @func useCompanies Gets and returns the data from httpGetCompanies function
 * @returns A list containing companies informations
 */
export const useCompanies = () => {
  const [companies, setCompanies] = useState(null);
  // Get companies from httpGetCompanies function
  const getCompanies = useCallback(async () => {
    const fetchedCompanies = await httpGetCompanies();
    setCompanies(fetchedCompanies);
  }, []);
  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  return companies;
};
