import ConditionalComponent from "./components/ConditionalComponent";
import ConditionalMessage from "./components/ConditionalMessage";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Jose",
    message: "Helloooo",
    emoji: "hi",
    seatNumbers: [2, 5, 9],
  };
  return (
    <div className="App">
      <Hello
        name="Rob"
        message="Hi there"
        emoji="hi"
        seatNumbers={seatNumbers}
        person={person}
      />

      <Fruits />

      <ConditionalComponent />

      <ConditionalMessage />

      <Message />

      <Counter />

      <Form />
    </div>
  );
}

export default App;
