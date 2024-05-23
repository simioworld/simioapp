import { useMutation } from "convex/react";
import { FunctionReference, FunctionReturnType } from "convex/server";
import { useState } from "react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        setPending(false);
        return result;
      })
      .catch((error) => {
        setPending(false);
        return error;
      });
  };

  return { mutate, pending };
};
