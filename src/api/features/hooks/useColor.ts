import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as Colors from "../service/Color";

export const useColor = () => {
  const queryClient = useQueryClient();

  const getColor = useQuery({
    queryKey: ["phone"],
    queryFn: Colors.getColor,
  });

  const createColor = useMutation({
    mutationFn: Colors.createColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
  });

  const deleteColor = useMutation({
    mutationFn: Colors.deleteColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
  });

  const updateColor = useMutation({
    mutationFn: Colors.updateColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
  });

  return { getColor, createColor, deleteColor, updateColor };
};
