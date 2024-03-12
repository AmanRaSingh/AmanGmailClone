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

function App() {
  return (
    <>
      <div class="body-wrapper">

        <Header />
        <Leftsidebar />
        <Routes>
          <Route path="/inbox" element={<Body />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/snoozed" element={<Snoozed />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="draft" element={<Draft />} />
        </Routes>
        <Rightsider />
        <Footer />
      </div>
    </>
  );
}

export default App;
