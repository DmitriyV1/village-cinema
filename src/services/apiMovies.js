import supabase from "./supabase";

export async function getMovie() {
  const { data, error } = await supabase.from("movies").select("*");

  if (error) {
    console.log(error);
    throw new Error("Movies can not be loaded");
  }

  return data;
}
