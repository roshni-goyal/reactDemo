/**
 * <div id = "parent">
 *      <div id = "child">
 *          <h1>I'm an H1 Tag</h1>
 *          <h2>I'm an H2 Tag</h2>
 *      </div>
 *  <div id = "child">
 *          <h1>I'm a new H1 Tag</h1>
 *          <h2>I'm a new H2 Tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */



const parent =  React.createElement(
    "div",
     {id: "parent"},[
     React.createElement(
        "div",
         {id: "child"},[
          React.createElement("h1", {id : "heading"}, "I am an H1 tag!!"),
          React.createElement("h2", {id : "heading"}, "I am an H2 tag!!")
     ]), React.createElement(
        "div",
         {id: "child2"},[
          React.createElement("h1", {id : "heading"}, "I am a new H1 tag!!"),
          React.createElement("h2", {id : "heading"}, "I am a new H2 tag!!")
     ]) ]
        );

//const heading =  React.createElement("h1", {id : "heading"}, "Hello World!!!"); //CreateElement is the code of React and hence it comes from the first library 
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); //we created a root in react so as to render whatever we are creating , in this case , heading in our root. //CreateRoot function comes from the React DOM which is the second library


root.render(parent);