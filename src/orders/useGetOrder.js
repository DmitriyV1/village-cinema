import { useQuery } from "@tanstack/react-query";
import { getOrder } from "./apiOrders";

function useGetOrder(order) {
  const { isLoading, data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrder(order),
    retry: false,
  });

  return { isLoading, orders };
}

export default useGetOrder;
