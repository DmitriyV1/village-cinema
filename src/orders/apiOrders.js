import supabase from "../services/supabase";

export async function addOrder(orderData) {
  let query = supabase.from("orders");

  query = query.insert([{ ...orderData }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Order could not be added");
  }

  return { data, error };
}

export async function getOrder(order) {
  const { time, date, name } = { ...order };
  let { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("time", time)
    .eq("date", date)
    .eq("movie_name", name);
  // .eq("seat", seat);

  return { data, error };
}
