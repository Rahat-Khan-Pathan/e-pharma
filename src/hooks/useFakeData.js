import { useEffect, useState } from "react";

const useFakeData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(er => console.log(er))
  }, []);

  return { data,setData };
};
export default useFakeData;
