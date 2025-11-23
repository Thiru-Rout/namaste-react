const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child1", key: "child1" }, "I am a child 1"),
  React.createElement("h1", { id: "child2", key: "child2" }, "I am a child 2"),
]);


const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Hello from React!"
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);