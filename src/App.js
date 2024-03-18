import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Leftsidebar from './Component/Leftsidebar';
import Rightsider from './Component/Rightsider';
import Body from './Component/Body';
import { Routes, Route } from 'react-router-dom';
import Starred from './Component/Starred';
import Snoozed from './Component/snoozed/Snoozed';
import Sent from './Component/Sent/Sent';
import Draft from './Component/snoozed/Draft/Draft';
import Gmailapi from './GmailAPI/Gmailapi';

function App() {
  return (
    <>
      <Gmailapi />

      {/* <div class="body-wrapper">

        <Header />
        <Leftsidebar/>
        <Routes>
          <Route path="/aman" element={<Body />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/snoozed" element={<Snoozed />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="draft" element={<Draft />} />
        </Routes>
        <Rightsider />
        <Footer />
      </div> */}
    </>
  );
}

export default App;


// import { useRef, useState } from 'react';
// import './App.css';

// function App() {
//   const hook = useRef('')
//   const [name, setName] = useState("Input field")

//   function Reset() {
//     setName("")
//     hook.current.focus()
//   }
//   function Color() {
//     hook.current.style.color = 'red'
//   }

//   return (
//     <div className="App">
//       <h1>useRef</h1>
//       <input ref={hook} type='text' value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={Reset}>Reset</button>
//       <button onClick={Color}> Change input color</button>
//     </div>
//   );

// }
// export default App;