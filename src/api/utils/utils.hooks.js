import { useQuery } from "@tanstack/react-query";
import { getCountries } from "./utils.api";

export const useGetCountries = () => {
  const query = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return query;
};