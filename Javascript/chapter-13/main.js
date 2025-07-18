fetch("https://api.github.com/users/aestheticsuraj234", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "suraj",
    age: 21,
  }),
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// async / await

async function FetchData() {
  try {
    const res = await fetch("https://api.github.com/users/aestheticsuraj234");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Always runs");
  }
}

FetchData();
