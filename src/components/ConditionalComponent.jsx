export default function ConditionalComponent() {
  const condition = false;

  if (condition) {
    return (
      <div>
        <h3>This is a conditional component</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>Code everyday</h3>
    </div>
  );
}
