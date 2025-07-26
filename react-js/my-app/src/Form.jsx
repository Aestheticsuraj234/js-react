import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

const handleChange = (e)=>{
    const {name , value} = e.target;

    setFormData((prevData)=>({
        ...prevData,
        [name]:value
    }))
}
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.username}
        name="username"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={formData.email}
        name="email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

// import React, { useState } from "react";

// const Form = () => {
//   const [name, setName] = useState("");

// const onSubmit = (e)=>{
//     e.preventDefault();
//     alert(`Hello ${name}`)
// }

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">Greet</button>
//     </form>
//   );
// };

// export default Form;
