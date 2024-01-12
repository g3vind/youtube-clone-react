import Body from "../components/Body";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <Body />
    </div>
  );
}

export default HomePage;
