import { useEffect } from "react";
import UsersList from "./components/UsersList";

function App() {

  useEffect(() => {
    console.log('Hello')
  }, [])
  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  );
}

export default App;
