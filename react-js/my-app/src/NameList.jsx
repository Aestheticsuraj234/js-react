import React from "react";

const NameList = () => {
  const names = ["Akash", "Priya", "Aman"];

  const users = [
    {
        id:1 , name:"Suraj" , age:21
    },
    {
        id:2 , name:"Priya" , age:21
    },
    {
        id:3 , name:"Aman" , age:21
    }
  ]

  return (
    <div>
        <h2>Name List</h2>
        <ul>
          {/* {
            names.map((name , index)=>(
                <li key={index}>{name}</li>
            ))
          } */}
          {
            users.map((user)=>(
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))
          }

        </ul>
    </div>
  )
};

export default NameList;
