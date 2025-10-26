import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createService, getAService, getServices } from "./services.api";

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

export const useCreateService = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    }
  })

  return data;
};

export const useGetAService = (id) => {
  const data = useQuery({
    queryKey: ["services", id],
    queryFn: ()=> getAService(id),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  })

  return data;
};