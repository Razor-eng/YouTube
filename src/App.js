import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Sidebar />
          <Routes>
            <Route path="/search/:searchTerm" element={<SearchPage/>}/>
            <Route path="/" element={<RecommendedVideos />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
