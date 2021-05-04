import './App.css';
import Header from "./header";
import List from "./list";
import Footer from "./footer";

function addTodo() {
  let list = document.getElementsByClassName("list-group")[0];
}

function App() {
  let todos = [{
    title: "Insert your title",
    description: "Add a description if you may want",
    // deadline: "By 12:00pm you gotta finish it !"
  },
] // array of objects
  return (
    <div className="App">
      <Header />
      <List todos={todos}/>
      <Footer />
    </div>
  );
  // here we passed a JS object todos as react property (props) argument 'todos'
  // don't confuse yourself due to the same name
}

export default App;