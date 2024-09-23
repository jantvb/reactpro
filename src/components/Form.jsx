import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  function handleChange(e) {
    setPerson(e.target.value);
    console.log("changed", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(person)
  }
  return (
    <div>
      <form>
        <input
          //onChange={(e) => handleChange(e)}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          type="text"
          value={person.firstName}
        />

        <input
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          type="text"
          value={person.lastName}
        />

        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
