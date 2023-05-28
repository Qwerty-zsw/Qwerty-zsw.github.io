import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = (url, dependencies) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData()
  }, dependencies);

  return [loading, data];
};

export default FetchData;
