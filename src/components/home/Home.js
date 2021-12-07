import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Snippet from "./Snippet";
import SnippetEditor from "./SnippetEditor";
// import Input from "../misc/Input";
import "./Home.scss";
import UserContext from "../../context/UserContext";

function Home() {
  const [snippets, setSnippets] = useState([]);
  const [NewSnippetEditorOpen, setNewSnippetEditorOpen] = useState(false);

  const [editSnippetData, setEditSnippetData] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) setSnippets([]);
    else getSnippets();
  }, [user]);

  const getSnippets = async () => {
    const snippetsRes = await Axios.get("http://localhost:5000/snippet/", {
      withCredentials: true,
    });
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
    <div className="home-container">
      {/* <Input /> */}
      {!NewSnippetEditorOpen && user && (
        <button
          className="btn-add"
          onClick={() => setNewSnippetEditorOpen(true)}
        >
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
      {!NewSnippetEditorOpen && snippets.length > 0 && (
        <div>{renderSnippets()}</div>
      )}
      {user === null && (
        <>
          <h2 className="text-welcome">Welcome to the snippet manager</h2>
          <p className="text-welcome">Please Register Here</p>
        </>
      )}
    </div>
  );
}

export default Home;
