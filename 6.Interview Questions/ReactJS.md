**REACTJS INTERVIEW QUESTIONS**

1.	What is ReactJS and what are its advantages?
2.	What is DOM?
3.	What is the virtual DOM in ReactJS and how does it improve performance?
4.	What is JSX and how is it used in ReactJS?
5.	Can browsers read JSX directly?
6.	What is the difference between JSX and HTML?
7.	What is a component in ReactJS?
8.	Which version of React have you worked with?
9.	Write a simple hello React program.
10.	What is state in ReactJS and how does it differ from props?
11.	How can you update the state of a component?
12.	How to declare state?
13.	Give an example of props.
14.	What is Redux and how is it used in conjunction with ReactJS?
15.	What are higher-order components in ReactJS and how are they used?
16.	What is server-side rendering in ReactJS and what are its benefits?
17.	What is the purpose of the componentDidMount lifecycle method in ReactJS?
18.	What is the difference between a functional component and a class component in ReactJS?
19.	What are hooks in React?
20.	What is React Router and why is it used in React applications?
21.	What are the differences between BrowserRouter and HashRouter in React Router?
22.	How do you pass parameters in React Router?
23.	What is the purpose of the Link component in React Router?
24.	How do you handle 404 pages in React Router?
25.	Which one is better: function component or class component?
26.	What is the difference between a controlled component and an uncontrolled component in React?
27.	What is prop drilling?
28.	How to create custom hooks and why do we need them?
29.	What is the use of React.StrictMode?
30.	How many ways are there to pass data between components in React?
31.	Which one is better, Redux or context API?
32.	How does routing work in React?

**Tips**
1. What is ReactJS and what are its advantages?
ReactJS is a JavaScript library used for building user interfaces. Its advantages include improved performance due to its use of a virtual DOM, the ability to easily reuse components, and its modular architecture.
Advantages of React ?
  1.Better performance 
  2.it use JSX - Java script syntax extension,  better readability 
  3.it can use server side as well as client side.
     What is DOM ?
     What is the virtual DOM in ReactJS and how does it improve          performance? 

The virtual DOM in ReactJS is a lightweight representation of the actual DOM. It allows React to quickly compare the current state of the UI with the previous state and make only necessary updates, resulting in improved performance. 


2. What is JSX and how is it used in ReactJS?     
JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It is used in ReactJS to create components with a more readable structure.   
**Can browser read JSX directly?  ** 
No, browsers cannot read JSX directly. JSX is a syntax extension for   JavaScript and needs to be transform  into regular JavaScript using a tool like Babel before it can be executed by the browser.   

**What is the difference between JSX and html ?   **    

Syntax: JSX uses a syntax similar to HTML, but with some differences. For example, instead of using class to define a class, you use className in JSX. Also, JSX tags must be closed, either with a closing tag (</tag>) or with a self-closing tag (<tag />).      

Attributes: In JSX, you use camelCase for attribute names instead of kebab-case in HTML. For example, you would use className instead of class, and onClick instead of onclick.      

Expressions: In JSX, you can embed JavaScript expressions within curly braces {}. This allows you to dynamically render content based on variables or functions.     

Components: In JSX, you can define your own custom components using JavaScript functions or classes. This allows you to reuse code and create more complex UIs.       
3. What is a component in ReactJS?     
A react application  build up with Components.     
Component in react can be a java script class or a function.     
Component is Build with logic and UI as a template.     
A component in ReactJS is a reusable piece of code that defines the structure and behavior of a user interface element.     
Components can be composed together to create complex interfaces    

5. Which version of react you have work?      
React17 

6. Write a simple hello React program ?
 ```java
import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById('root'));

   ```
4. What is state in ReactJS and how does it differ from props?
State in ReactJS is a built react object that contain data or information about component. Component state can change over the time , whenever state will change the component will re render.
Props, on the other hand, are passed down from a parent component and are read-only.    
How can you update the state of a component?    
You can update the state of a component by calling the setState method provided by React. This method takes an object as an argument, which represents the new state of the component. For example, if you have a component with a state object containing a count property, you can update it like this:    
this.setState({ count: this.state.count + 1 });    
This will update the count property of the state object to the current value of count plus one. When the state is updated, React will automatically re-render the component with the new state.    

How to declare state ?    
To declare state in a React component, you can use the constructor method and set the initial state using this.state. Here's an example:    

```java
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  } 

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

In this example, we have a Counter component that has an initial state of { count: 0 }. The render method displays the current value of count and a button that, when clicked, updates the state by calling this.setState({ count: this.state.count + 1 }). This will increment the value of count by 1 and trigger a re-render of the component with the updated state. 

Give Example of props ?
Props (short for properties) are a way to pass data from a parent component to a child component in React. Props are read-only and cannot be modified by the child component. 

Here's an example of how props can be used:


function Greeting(props) {
  return <h1>welcome, {props.username}!</h1>;
} 

function App() {
  return <Greeting username="John" />;
}


In this example, we have a Greeting component that takes a username prop and displays a greeting message with the name. The App component passes the username prop with the value "John" to the Greeting component. 

When the Greeting component is rendered, it will display "Hello, John!" as the greeting message. If we were to change the value of the name prop to "Jane" in the App component, the Greeting component would re-render with the updated prop value and display "Hello, Jane!" instead. 

6. What is Redux and how is it used in conjunction with ReactJS?
7. What are higher-order components in ReactJS and how are they used?
8. What is server-side rendering in ReactJS and what are its benefits?
9. What is the purpose of the componentDidMount lifecycle method in ReactJS?
10. What is the difference between a functional component and a class component in ReactJS?

6. Redux is a state management library used in conjunction with ReactJS to manage complex application states. It provides a centralized store for all application data and allows for predictable state changes through actions and reducers. 

7. Higher-order components in ReactJS are functions that take in a component as an argument and return a new, enhanced component with additional functionality or props. They are used to reuse code and simplify component logic. 

8. Server-side rendering in ReactJS is the process of rendering React components on the server instead of the client browser. It can improve performance, SEO, and accessibility by providing a pre-rendered version of the UI. 

9. The componentDidMount lifecycle method in ReactJS is called after a component has been mounted to the DOM. It is often used to fetch data from an API or set up event listeners. 

10. Functional components are stateless and only return JSX elements, while class components can have state and lifecycle methods. Functional components are simpler and easier to test, while class components provide more flexibility and functionality.
11.what are hooks in react ?
Hooks in React are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and provide a way to reuse stateful logic across multiple components.
Some of the most commonly used hooks include useState, useEffect, useContext, and useRef. 
The useState hook allows you to manage state in functional components, while useEffect lets you perform side effects such as fetching data or updating the DOM. The useContext hook provides a way to pass data through the component tree without having to manually pass props down through each level. The useRef hook is used to create a reference to a DOM element or a value that persists across renders. Overall, hooks provide a more flexible and powerful way to build React applications with functional components. 

What is React Router and why is it used in React applications? 
Answer: React Router is a library that allows you to handle routing in your React applications. It provides a declarative way to navigate between different pages or views in your app. React Router is used in React applications to build single-page applications with multiple views, and to manage the state and history of your application's UI. 

What are the differences between BrowserRouter and HashRouter in React Router? 
Answer: BrowserRouter and HashRouter are two types of routers in React Router. BrowserRouter uses the HTML5 history API to manage routing, while HashRouter uses the URL hash to manage routing. The main difference between the two is that BrowserRouter requires server-side configuration to work properly, while HashRouter works out of the box. However, HashRouter can cause issues with SEO and bookmarking, as it uses a non-standard URL format. 

How do you pass parameters in React Router? 
Answer: You can pass parameters in React Router using URL parameters or query parameters. URL parameters are defined in the URL path and are accessed using the match.params object, while query parameters are defined in the URL query string and are accessed using the location.search object. Here is an example of passing a parameter using URL parameters: 

php 
Copy code 
<Route path="/users/:id" component={User} /> 
In the above example, the :id parameter is defined in the URL path, and can be accessed in the User component using this.props.match.params.id. 

What is the purpose of the Link component in React Router? 
Answer: The Link component in React Router is used to navigate between different views in your application. It creates an HTML anchor tag with a href attribute that matches the specified route path, and handles the navigation using the React Router history API. Using Link instead of a regular anchor tag ensures that the navigation is handled by React Router, and not by the browser. 

How do you handle 404 pages in React Router? 
Answer: You can handle 404 pages in React Router by defining a <Switch> component with a <Route> component that has no path prop, and placing it at the end of your route definitions. This will match any routes that have not been defined, and render the component specified in the <Route> component's component prop. Here is an example: 

php 
Copy code 
<Switch> 
  <Route exact path="/" component={Home} /> 
  <Route path="/users" component={Users} /> 
  <Route component={NotFound} /> 
</Switch> 
In the above example, the NotFound component will be rendered for any routes that have not been defined. 

Which one is better function component or class component?
Function components are simpler and easier to read and write, while class components offer additional features such as state management and lifecycle methods. With the introduction of React Hooks, function components can now also manage state and use lifecycle methods, making them a popular choice for many developers. Function components are also easy to test .


What is the difference between control component and uncontrol component?
In React, a controlled component is a component that is fully controlled by its parent component. This means that the parent component has full control over the state and behavior of the child component. The parent component passes down all the necessary props to the child component, and the child component does not have any internal state of its own. 

On the other hand, an uncontrolled component is a component that manages its own state internally. The parent component does not have direct control over the state and behavior of the child component. Instead, the parent component can only provide initial values or callbacks to the child component. 

The main difference between controlled and uncontrolled components is the level of control that the parent component has over the child component. Controlled components provide more control and are generally easier to manage, while uncontrolled components provide more flexibility and can be more complex to manage. The choice between controlled and uncontrolled components depends on the specific needs and requirements of the project. 

What is prop drilling?
How to create custom hooks ? Why we need them ?
React.strict mode , what is the use of that ? 

How many ways to pass data between components ?
With the help of props,redux,call back function, context api (ye samjh nhi aaya) 

Which one is better ?
Redux , why ? 

How routing works?
