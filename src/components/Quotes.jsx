import { useEffect, useState } from "react";
import { zenQuotes } from "../services/quotes";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const res = await zenQuotes();
    console.log(res.data);
    setQuotes();
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="flex justify-center items-end flex-col gap-2">
      <p></p>
      <h5></h5>
    </div>
  );
};

export default Quotes;
