import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTutorProfile, getTutorProfile } from "./tutors.api";

export const useCreateTutor = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: createTutorProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tutors"] });
    }
  })

  return data;
};

export const useGetTutorProfile = (tutorId) => {
  const query = useQuery({
    queryKey: ["tutors"],
    queryFn: ()=> getTutorProfile(tutorId),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return query;
};