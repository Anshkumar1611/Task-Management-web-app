import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import {useStateContext}  from "./context/ContextProvider";

function App() {
  const { loading } = useStateContext()

  if(loading){
    return <div className="text-3xl">Loading ...</div>
  }
  return (
    <div>
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
