import { useQuery } from "@tanstack/react-query";
import { getServices } from "./services.api";

export const useGetServices = () => {
  const query = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  return query;
};