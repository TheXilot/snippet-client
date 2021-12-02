import React, { useState, useEffect } from "react";
import Axios from "axios";
import Snippet from "./Snippet";
import SnippetEditor from "./SnippetEditor";

function Home() {
  const [snippets, setSnippets] = useState([]);
  const [NewSnippetEditorOpen, setNewSnippetEditorOpen] = useState(false);
  const [editSnippetData, setEditSnippetData] = useState(null);
  useEffect(() => {
    //get snippet
    getSnippets();
  }, []);

  const getSnippets = async () => {
    const snippetsRes = await Axios.get("http://localhost:5000/snippet/");
    console.log(snippetsRes.data);
    setSnippets(snippetsRes.data);
  };

  function renderSnippets() {
    let sortedSnippets = [...snippets];
    sortedSnippets = sortedSnippets.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return sortedSnippets.map((snippet, i) => {
      return (
        <Snippet
          snippet={snippet}
          key={i}
          getSnippets={getSnippets}
          setNewSnippetEditorOpen={setNewSnippetEditorOpen}
          setEditSnippetData={setEditSnippetData}
        />
      );
    });
  }

  return (
    <>
      {!NewSnippetEditorOpen && (
        <button onClick={() => setNewSnippetEditorOpen(true)}>
          Add Snippet
        </button>
      )}
      {NewSnippetEditorOpen && (
        <SnippetEditor
          setNewSnippetEditorOpen={setNewSnippetEditorOpen}
          getSnippets={getSnippets}
          editSnippetData={editSnippetData}
          setEditSnippetData={setEditSnippetData}
        />
      )}
      {!NewSnippetEditorOpen && <div>{renderSnippets()}</div>}
    </>
  );
}

export default Home;
