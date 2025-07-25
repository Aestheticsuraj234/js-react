import React, { useEffect, useState } from "react";

const App = () => {
const [userData , setUserdata] = useState(null)

  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch("https://api.github.com/users/aestheticsuraj234");
      const data = await res.json();

      setUserdata(data);
    }

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col justify-start py-24 items-center space-y-6 h-screen bg-zinc-900 text-white">
      <h1 className="text-3xl font-extrabold">Welcome to your profile</h1>
     
     <div className="flex flex-col justify-center items-center space-y-3">
    <img src={userData?.avatar_url} alt="User image" height={100} width={100} className="rounded-full"/>
    <h1 className="text-2xl font-bold text-yellow-500">
      {userData?.login}
    </h1>
     </div>
    </div>
  );
};

export default App;
