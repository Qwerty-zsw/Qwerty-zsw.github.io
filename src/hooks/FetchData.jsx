import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = (url, dependencies) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }, dependencies);

  return [loading, data];
};

export default FetchData;
