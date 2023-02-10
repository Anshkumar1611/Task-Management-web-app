import AddTask from "./components/AddTask";
import Header from "./components/Header";
import NoTaskFound from "./components/NoTaskFound";
import Tasks from "./components/Tasks";

import { useStateContext } from "./context/ContextProvider";

function App() {
  const { tasks,loading } = useStateContext()

  if(loading){
    return <div className="text-3xl">Loading ...</div>
  }

  return (
    <div className="bg-stone-100 w-full h-screen">
      <Header />
      <AddTask />
      {
        tasks.length > 0 ? <Tasks /> : <NoTaskFound />
      }
    </div>
  );
}

export default App;
