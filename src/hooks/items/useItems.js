import { useCallback, useEffect, useState } from "react";
import { httpGetItems } from "./items.request";

/**
 * @func useItems Gets and returns the data from httpGetItems function
 * @returns A list containing items informations
 */
export const useItems = () => {
  const [items, setItems] = useState(null);

  // Create a memoized function that is remembered
  // on first and subsequent re-renders
  const getItems = useCallback(async () => {
    const fetchedItems = await httpGetItems();
    setItems(fetchedItems);
  }, []);
  useEffect(() => {
    getItems();
  }, [getItems]);
  return items;
};
