export default function Message() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to see a message</button>
    </div>
  );
}
