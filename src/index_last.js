import React, { useState } from "react";
import reactDom from "react-dom";

function App() {
  const [fromUserName, setUserName] = useState("");
  const [fromUserPwd, setUserPwd] = useState("");

  function sendData(e) {
    e.preventDefault();
    console.log(fromUserName);
  }

  return (
    <>
      <form onSubmit={sendData}>
        <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUserPwd(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

// function App() {
//   const snippets = [
//     {
//       title: "Snippet 1",
//     },
//     {
//       title: "Snippet 2",
//     },
//     {
//       title: "Snippet 3",
//     },
//     {
//       title: "Snippet 4",
//     },
//   ];

//   function renderSnippets() {
//     return snippets.map((snippet, i) => {
//       return <Snippet title={snippet.title} key={i} />;
//     });
//   }
//   return <>{renderSnippets()}</>;
// }

// function Snippet(props) {
//   return <h1>{props.title}</h1>;
// }

// function App() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//       console.log("a");
//     }, 1000);
//   }, []);
//   return <Clock time={time} />;
// }
// function Clock(props) {
//   return <p>it's currently {props.time}</p>;
// }

// function App() {
//   const [showMessage, setShowMessage] = useState(false);

//   function onClick() {
//     setShowMessage(!showMessage);
//   }
//   return (
//     <>
//       <p>Message : {showMessage && <Message message="Bonjour" />} </p>
//       <p>
//         {showMessage ? (
//           <Message message="toglled ON" />
//         ) : (
//           <Message message="toglled OFF" />
//         )}
//       </p>
//       <button onClick={onClick}>Click on Me</button>
//     </>
//   );
// }
// function Message(props) {
//   return (
//     <>
//       <b>{props.message}</b>
//     </>
//   );
// }
// function Welcome(props) {
//   return <h1>Welcome {props.user}!</h1>;
// }
// function App() {
//   const [message, setMessage] = useState("Hello Word !!");
//   useEffect(() => {
//     setTimeout(() => {
//       setMessage(Math.random);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       <Welcome user="Amine" message={message} />
//       <Welcome user="Farid" message={message} />
//       <Welcome user="Ahmed" message={message} />
//     </>
//   );
// }
// class Welcome extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Welcome {this.props.user} to my website!</h1>
//         <p>{this.props.message}</p>
//       </>
//     );
//   }
// }

reactDom.render(<App />, document.getElementById("root"));
