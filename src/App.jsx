import data from './data.js';
import {useState} from "react";
import List from "./components/List.jsx";


const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn" onClick={clearList}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
