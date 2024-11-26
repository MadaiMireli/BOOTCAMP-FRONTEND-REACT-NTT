import { useEffect, useState } from "react";

export const useDistricts = () => {
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      const response = await fetch("/mocks/districts.json");
      const data = await response.json();
      setDistricts(data.districts);
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return { districts };
};
