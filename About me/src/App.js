const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.branch),
    React.createElement("h3", {}, props.role),
  ]);
};

const app = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "About Me!"),
    React.createElement(pet, {
      name: "Annshiv",
      branch: "ECE",
      role: "Software Developer",
    }),
    React.createElement(pet, {
      name: "Ulagi",
      branch: "CIVIL",
      role: "Junior Engineer",
    }),
    React.createElement(pet, {
      name: "Sandy",
      branch: "MECH",
      role: "Supervisor",
    }),
  ]);
};
ReactDOM.render(React.createElement(app), document.getElementById("root"));
