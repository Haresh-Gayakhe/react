import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/haresh-gayakhe")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <img src={data.avatar_url} />
      <div>Github followers: {data.followers}</div>
    </>
  );
}

export default Github;
