
const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "children" },
        [
            React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
            React.createElement("h1", { id: "h1-2" }, "I'm an h1-2 tag"),
            React.createElement("h1", { id: "h1-3" }, "I'm an h1-3 tag"),
        ]
    ),
    React.createElement("div", { id: "children-2" },
        [
            React.createElement("h1", { id: "h1-2" }, "I'm an h1 tag"),
            React.createElement("h1", { id: "h1-2-2" }, "I'm an h1-2 tag"),
            React.createElement("h1", { id: "h1-2-3" }, "I'm an h1-3 tag"),
        ]
    )
]   
)

//JSX : can be used simplify the architecture above 

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
//heading or parent is an object. It is not a H1/div tag. React.createElement creates an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);   