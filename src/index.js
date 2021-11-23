import React, { useState } from "react";
import reactDom from "react-dom";

// function Welcome(props) {
//   return <h1>Welcome {props.user}!</h1>;
// }
function App() {
  const [message, setMessage] = useState("Hello Word !!");
  setTimeout(() => {
    setMessage("bbb");
  }, 1000);
  return (
    <>
      <Welcome user="Amine" message={message} />
      <Welcome user="Farid" message={message} />
      <Welcome user="Ahmed" message={message} />
    </>
  );
}
class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.user} to my website!</h1>
        <p>{this.props.message}</p>
      </>
    );
  }
}

reactDom.render(<App />, document.getElementById("root"));
