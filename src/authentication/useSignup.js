import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Аккаунт успешно создан. На указанную почту придет сообщение с подтверждением регистрации."
      );
    },
  });

  return { signup, isLoading };
}
