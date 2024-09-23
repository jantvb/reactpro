import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Banana", "Peach", "Orange", "Mango"];
  const fruits = [
    { name: "Apple", price: 10, soldout: false },
    { name: "Banana", price: 4, soldout: false },
    { name: "Peach", price: 6, soldout: true },
    { name: "Orange", price: 2, soldout: false },
    { name: "Mango", price: 5, soldout: true },
  ];
  return (
    <div>
      <ul>
        {/* {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} ${fruit.price}
          </li>
        ))} */}
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
