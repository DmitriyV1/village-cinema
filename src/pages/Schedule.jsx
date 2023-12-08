import { useQuery } from "@tanstack/react-query";

function Schedule() {
  const user = useQuery({ queryKey: ["user"] });

  return (
    <>
      <div>Schedule</div>
      <button onClick={console.log(user)}>USERS</button>
    </>
  );
}

export default Schedule;
