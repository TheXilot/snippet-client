import React, { useState, useEffect } from "react";
import { AddSnippet, UpdateSnippet } from "../../api/snippet";

function SnippetEditor({
  setNewSnippetEditorOpen,
  getSnippets,
  editSnippetData,
  setEditSnippetData,
}) {
  const [editorTitle, setEditorTitle] = useState("");
  const [editorDesc, setEditorDesc] = useState("");
  const [editorCode, setEditorCode] = useState("");

  useEffect(() => {
    if (editSnippetData !== null) {
      setEditorTitle(editSnippetData.title);
      setEditorDesc(editSnippetData.description);
      setEditorCode(editSnippetData.code);
    }
  }, [editSnippetData]);

  function closeEditor() {
    setNewSnippetEditorOpen(false);
    setEditorTitle("");
    setEditorDesc("");
    setEditorCode("");
    setEditSnippetData(null);
  }
  // const handleEdit = async () => {
  //   const result = await UpdateSnippet(snippet._id);
  //   getSnippets();
  // };
  async function handleSubmit(e) {
    e.preventDefault();
    let Rdata = null;
    const newSnippet = {
      title: editorTitle,
      description: editorDesc,
      code: editorCode,
    };
    if (editSnippetData !== null) {
      newSnippet._id = editSnippetData._id;
      console.log(newSnippet);
      const Rdata = await UpdateSnippet(newSnippet);
    } else {
      Rdata = await AddSnippet(newSnippet);
    }

    // const data = setSnippet(newSnippet);

    // console.log(Rdata.data);
    closeEditor();

    getSnippets();
    // setSnippets((snippets) => {
    //   snippets.push(Rdata.data);
    //   return snippets;
    // });
    // console.log(Rdata.data);
    // console.log(snippets);
  }
  return (
    <>
      <div className="snippet-editor">
        <form onSubmit={handleSubmit}>
          <label htmlFor="editor-title">Title :</label>
          <input
            id="editor-title"
            value={editorTitle}
            onChange={(e) => setEditorTitle(e.target.value)}
          ></input>
          <label htmlFor="editor-desc">Desciption :</label>
          <input
            id="editor-desc"
            value={editorDesc}
            onChange={(e) => setEditorDesc(e.target.value)}
          ></input>
          <label htmlFor="editor-code">Code :</label>
          <textarea
            id="editor-code"
            value={editorCode}
            onChange={(e) => setEditorCode(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeEditor}>
            Close
          </button>
        </form>
      </div>
    </>
  );
}

export default SnippetEditor;
