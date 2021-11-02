import { useEffect, useState } from "react";
import axios from "axios";

const Carditem = () => {
  const [data1, setData] = useState();
  const URL = "https://api.agify.io/?name=isa";
  useEffect(() => {
    axios.get(URL).then((res) => setData(res));
  }, []);
  console.log(data1?.data);
  return (
    <div>
      <div>{data1?.data.name}</div>
    </div>
  );
};

export default Carditem;
