import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import WatchPage from "./pages/WatchPage";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<WatchPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
