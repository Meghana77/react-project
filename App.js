const heading = React.createElement("div", {id:"parent"}, [React.createElement("h1", {id:"child1"}, "Here is my code"), React.createElement("h1", {id:"child2"}, "Here is my code")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
