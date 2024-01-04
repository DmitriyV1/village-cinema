import supabase from "./supabase";

export async function getMovie() {
  const { data, error } = await supabase.from("movies").select("*");

  if (error) {
    console.log(error);
    throw new Error("Movies can not be loaded");
  }

  return data;
}

export async function addMovie(targetMovie) {
  let query = supabase.from("movies");

  query = query.insert([{ ...targetMovie }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Movie could not be added");
  }

  return { data, error };
}
