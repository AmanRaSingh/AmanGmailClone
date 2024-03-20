import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Leftsidebar from './Component/Leftsidebar';
// import Gmailapi from './GmailAPI/Gmailapi';
import Body from './Component/Body';
import Rightsidebar from './Component/Rightsider';
import Header from './Component/Header';

function App() {
  return (
    <>
      <div className='body-wrapper'>
        <Header />
        <Leftsidebar />
        <Routes>
          <Route path="/" element={<Body params="" />} />
          <Route path="inbox" element={<Body params="inbox" />} />
          <Route path="sent" element={<Body params="sent" />} />
          {/* <Route path='draft' element={<Body params="draft" />} />
          <Route path="snoozed" element={<Body params="snoozed" />} />
          <Route path="starred" element ={ <Body params="starred"/>}/> */}

        </Routes>

        <Rightsidebar />

        <Footer />
      </div>
    </>
  );
}
export default App;
