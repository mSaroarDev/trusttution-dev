import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTutorToService, createService, getAService, getServices, updateAService } from "./services.api";

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

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: updateAService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    }
  });

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

export const useAddTutorToService = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: addTutorToService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    }
  })

  return data;
};