import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTutorProfile, getTutorAvailability, getTutorProfile, getTutorsList } from "./tutors.api";

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
    queryKey: ["tutors", tutorId],
    queryFn: ()=> getTutorProfile(tutorId),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return query;
};

export const useGetTutors = () => {
  const query = useQuery({
    queryKey: ["tutors"],
    queryFn: getTutorsList,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  return query;
};

export const useGetTutorAvailability = (tutorId) => {
  const query = useQuery({
    queryKey: ["tutors", "availability", tutorId],
    queryFn: ()=> getTutorAvailability(tutorId),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return query;
};