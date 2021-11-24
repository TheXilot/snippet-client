import React from "react";

export default function Snippet(props) {
  return (
    <div className="snippet">
      {props.snippet.title && <h2>Title : {props.snippet.title} </h2>}
      {props.snippet.description && (
        <b>Description : {props.snippet.description} </b>
      )}
      {props.snippet.code && (
        <pre>
          Code : <code>{props.snippet.code}</code>
        </pre>
      )}
    </div>
  );
}
