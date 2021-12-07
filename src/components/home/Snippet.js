import React from "react";
import { DeleteSnippet } from "../../api/snippet";
import "./Snippet.scss";

export default function Snippet({
  snippet,
  getSnippets,
  setNewSnippetEditorOpen,
  setEditSnippetData,
}) {
  const handleDelete = async () => {
    await DeleteSnippet(snippet._id);
    getSnippets();
  };

  const handleEdit = async () => {
    setNewSnippetEditorOpen(true);
    setEditSnippetData(snippet);
  };

  return (
    <div className="snippet">
      {snippet.title && <h2 className="title">Title : {snippet.title} </h2>}
      {snippet.description && (
        <p className="description">Description : {snippet.description} </p>
      )}
      {snippet.code && (
        <pre className="code">
          Code : <code>{snippet.code}</code>
        </pre>
      )}
      <button className="btn-edit" type="button" onClick={handleEdit}>
        Edit
      </button>
      <button className="btn-delete" type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
