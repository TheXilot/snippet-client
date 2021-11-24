import React, { useState, useEffect } from "react";
import Axios from "axios";
import Snippet from "./Snippet";

function Home() {
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    //get snippet
    getSnippets();
  }, []);

  async function getSnippets() {
    const snippetsRes = await Axios.get("http://localhost:5000/snippet/");
    console.log(snippetsRes.data);
    setSnippets(snippetsRes.data);
  }

  function renderSnippets() {
    return snippets.map((snippet, i) => {
      return <Snippet snippet={snippet} key={i} />;
    });
  }

  return <div className="home">{renderSnippets()}</div>;
}

export default Home;
