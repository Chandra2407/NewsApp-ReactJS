import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import NewsComponent from './component/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = ()=> {
  let pageSize = 8;
  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
  
    return (
      <>
      <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<NewsComponent key="general" pageSize={pageSize} apiKey={apiKey} country='in' category="general"/>} />
      <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={pageSize} apiKey={apiKey} country='in' category='sports'/>} />
      <Route exact path="/home" element={<NewsComponent key="general" pageSize={pageSize} apiKey={apiKey} country='in' category="general"/>} />
      <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={pageSize} apiKey={apiKey} country='in' category="entertainment"/>} /> key=
      <Route exact path="/health" element={<NewsComponent key="health" pageSize={pageSize} apiKey={apiKey} country='in' category="health"/>} />
      <Route exact path="/science" element={<NewsComponent key="science" pageSize={pageSize} apiKey={apiKey} country='in' category="science"/>} />
      <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={pageSize} apiKey={apiKey} country='in' category="technology"/>} />
      <Route exact path="/business" element={<NewsComponent key="business" pageSize={pageSize} apiKey={apiKey} country='in' category="business"/>} />
      </Routes>
      </Router>   
      </>
    )
}
export default App;
