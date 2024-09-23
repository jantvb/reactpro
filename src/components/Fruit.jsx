export default function Fruit(props) {
  return (
    <>
      {/* {props.fruit.name} ${props.fruit.price} */}
      {props.fruit.price > 1 ? (
        <li>
          {props.fruit.name} ${props.fruit.price}{" "}
          {props.fruit.soldout ? "Soldout" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
