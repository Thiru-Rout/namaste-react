import { useState, useEffect, useCallback } from "react";
import { mockMenus } from "./mockData.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchMenu = useCallback(() => {
    try {
      setError(null);
      
      // Use mock data instead of API calls
      const menu = mockMenus[resId];
      
      if (menu) {
        setResInfo(menu);
      } else {
        setError("Restaurant menu not found. Please go back and select a different restaurant.");
      }
    } catch (error) {
      console.error("Error loading menu:", error);
      setError(error.message || "Failed to load restaurant menu. Please try again later.");
    }
  }, [resId]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return { resInfo, error, fetchMenu };
};

export default useRestaurantMenu;
