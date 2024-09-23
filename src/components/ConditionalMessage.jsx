import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalMessage() {
  const display = true;

  return display ? <Welcome /> : <Code />;
}
