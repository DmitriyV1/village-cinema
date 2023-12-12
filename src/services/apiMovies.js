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

// export async function addMovie({
//   name,
//   year,
//   country,
//   time,
//   created_by,
//   genre,
//   poster,
// }) {
//   const { data, error } = await supabase
//     .from("movies")
//     .insert([
//       {
//         name: { name },
//         year: { year },
//         country: { country },
//         time: { time },
//         created_by: { created_by },
//         genre: { genre },
//         poster: { poster },
//       },
//     ])
//     .select();

//   return { data, error };
// }
