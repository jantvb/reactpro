const name = "Jose";

function displayMessage() {
  return "Wow";
}

function Hello(props) {
  console.log(props);
  const person = props.person;
  return (
    <div>
      <h1>Hello from a component. {props.name}</h1>
      <h1>
        {displayMessage()} {props.message} {props.emoji} {props.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
