import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./pages/WatchPage";
import SubsPage from "./pages/SubsPage";
import ResultsPage from "./pages/ResultsPage";
import SearchWatchPage from "./pages/SearchWatchPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Body />} />
            <Route path="results/:searchQuery" element={<ResultsPage />} />
            <Route path="search/:searchQuery" element={<SearchWatchPage />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="subscriptions" element={<SubsPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
