// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackPage from "./pages/FeedbackPage";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}

export default App;
