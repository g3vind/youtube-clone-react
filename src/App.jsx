import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import WatchPage from "./pages/WatchPage";
import SubsPage from "./pages/SubsPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "subscriptions",
        element: <SubsPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
