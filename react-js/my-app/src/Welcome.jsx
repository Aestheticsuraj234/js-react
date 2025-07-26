import React from "react";

function Greeting({ greet }) {
  return <h2>
    {greet}
  </h2>;
}

function Notification({ unreadCount }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}
    </div>
  );
}


const Welcome = ({ isLogged }) => {
    const greetMessage = ["Good Morning" , "Good Night" , "Good Evening"]
//   
return (
    <>
    <Notification unreadCount={90}/>
    
    {
        greetMessage.map((greet)=>(
            <Greeting greet={greet}/>
        ))
    }
    </>
)
};

export default Welcome;
