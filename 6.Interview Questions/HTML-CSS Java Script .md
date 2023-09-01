**HTML CSS**
1. What is HTML?
2. What are the differences between HTML and XHTML?
3. What is CSS?
4. what are the different ways to implement CSS ?
5. What is a CSS selector?
6. What is the box model in CSS?
7. What is the difference between padding and margin in CSS?
8. What is a class in HTML and CSS?
9. How do you center an element horizontally and vertically in CSS?
10. What is the difference between absolute and relative positioning in CSS?
11. How do you create a responsive website using CSS?
12. What is the difference between div and span in HTML?
13. How do you add a background image to an HTML element using CSS?
14. What is the difference between a block-level element and an inline element in HTML?
15. How do you create a hyperlink in HTML?
16. How do you add an image to an HTML page using HTML?
17. What are semantic tags in HTML5?
18. What is the purpose of the alt attribute in HTML?
19. How do you create a table in HTML?
20. What is the difference between GET and POST methods in HTML forms?

**Hints**
--------------------------------------------------------------------------------
1. HTML stands for Hypertext Markup Language, which is the standard markup language used to create web pages.

2. XHTML is a stricter version of HTML that follows the rules of XML.it use for data format such as xml. The main differences between HTML and XHTML are that XHTML requires all tags to be closed, all attribute values to be in quotes, and all tags to be lowercase.

3. CSS stands for Cascading Style Sheets, which is a stylesheet language used to describe the presentation of an HTML document.

4. Inline CSS is applied directly to an HTML element using the style attribute. Internal CSS is included in the head section of an HTML document using the style tag. External CSS is stored in a separate file and linked to the HTML document using the link tag.

5. A CSS selector is a pattern used to select one or more elements on an HTML page.

6. The box model in CSS refers to the way that elements are laid out on a page, including their content, padding, border, and margin.

7. Padding is the space between an element's content and its border, while margin is the space between an element's border and the surrounding elements.

8. A class in HTML and CSS is a way to group elements together and apply styles to them collectively.

9. To center an element horizontally and vertically in CSS, you can use the following code:


.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


10. Absolute positioning positions an element relative to its nearest positioned ancestor, while relative positioning positions an element relative to its normal position on the page.

11. To create a responsive website using CSS, you can use media queries to adjust the layout and styling of your page based on the size of the user's screen.

12. Div and span are both HTML elements used for grouping and styling content. Div is a block-level element, while span is an inline element.

13. To add a background image to an HTML element using CSS, you can use the following code:


.element {
  background-image: url('image.jpg');
}


14. Block-level elements take up the full width of their parent container and create a new line after themselves, while inline elements only take up as much width as their content and do not create a new line.

15. To create a hyperlink in HTML, you can use the following code:


<a href="http://www.example.com">Link Text</a>


16. To add an image to an HTML page using HTML, you can use the following code:


<img src="image.jpg" alt="Image Description">


17. Semantic tags in HTML5 are special tags that have a specific meaning and purpose, such as header, footer, article, and section.

18. The alt attribute in HTML is used to provide a text description of an image for users who cannot see the image.

19. To create a table in HTML, you can use the following code:


<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
  </tr>
</table>


20. The GET method in HTML forms sends form data as part of the URL in the browser's address bar, while the POST method sends form data in the HTTP request body. The GET method is typically used for retrieving data, while the POST method is used for submitting data.


**Java Script** 

1. where you can add java script code in your html page?
2. what is variable and datatype? classification of data types?
   variable and datatype
   variable is the name of memory container.
   data type is nothing but the type of data that is going to be store in varible.
   var, let, const keywords use to create variables in java script.
   data types are 2 types 
   premitive data types - Number, String, Boolean, Null, Undefined
   non premitive data types - Object, Array

3. how many ways input can take from end user in java script ?
   prompt, input fields ,confirm
   
4. how many ways display output in java script ?
   alert, console.log, document.write
   
5. how to typecaste values in java script ?
   string to int -> parseInt(str) , Number(str)
   string to float -> parseFloat(str)
   number,float to string -> num.toString() String(num)
   string -> boolean - Boolean(str)
   number to character -> String.fromCharCode(number)
   character to number ->
    let char  = 'A';
    let unicode = char.charCodeAt();
    console.log(unicode); 
	
6. how many types of operators ?

7. how many ways loop can be define in js ?
   for, while, do-while, forEach (using for keyword), in and of keyword
   for(key in employeeObject){
        console.log(key+" - "+employeeObject[key]);
    }  
	if you use 'of' here it will directly provide value.	

8. How many ways we can declear array in js ?
    var array = ["value1","value2","value3"];
    console.log(array);

    var array = new Array(5);
    array[0] = 10;
    array[1] = 20;
    console.log(array);

    var array = new Array(10,20,30);
    console.log(array);
	if you use 'in' with array it will directly provide index value of values.
	
9. how many types of values you can put inside array ?

  var array2 = [22.5,"hi",[1,2,3],{"key1":"value1","key2":"value2"},function(){console.log("I am function")}];
  console.log(array2[2][2]);
  console.log(array2[3].key2);
  array2[4]();

10. difference between var, let and const ?

11. when NAN error comes ?
     var y = "3b";
     var y = "a34"; //NAN , NOT ALLOWED TO TYPECASTE
     y = parseInt(y);
     console.log(x+y);
	 
12. how many ways we can declear function in js ?
    
	//1
    function demoFunction1(){
        console.log("Welcome to demoFunction1");
    }
    demoFunction1(); 

    //2
	function expression - 
    var demoFunction2 = function(){
        console.log("Welcome to demoFunction2");
    }
    demoFunction2(); 

    //3 using arrow function.
    var demoFunction3 = () => {
        console.log("Welcome to demoFunction3");
    }
    demoFunction3();
	
13. what is call back function ?
		var loginSuccess = function () { 
            console.log("Login successful"); 
        }

        var loginFailed = function () { 
            console.log("Login failed"); 
        }
        
        function validateUser(password, function1, function2) {
            if (password == "admin")
                function1();
            else
                function2();
        }
        validateUser("admin23",loginSuccess,loginFailed );

14. what is destructuring and what is rest parameters?
	var [a,b,c,d,e] = params;

15. how to handle exceptions ? what are the key concepts of exceptions are in java script ?
	try, catch, finally, throw, exceptions will automatically forward in calling chain
	
16. how many ways you can define string ?
	``, "", ''
	
17. how to print variables in string?
	`${variable}`
	""+variable+""

18. names string handling methods?
    length
	toUpperCase
	toLowerCase
	split(" ")
	subString(firstIndex, lastIndex)
	charAt
	indexOf
	replace
	trim
	toString
	
19. How many ways we can do logging ?
    info
	debug
	warn
	error
	log
	
20. how many types of Elements selectors in JS ?
    getElementById
    getElementsByName
    getElementsByTagName
	querySelector - 
	               document.querySelector("#p1")
				   document.querySelectorAll(".pClass")[1]
				   document.querySelectorAll("p")[0]
				 
21. What are the different attributes for any html element we can access using selector ?
value (input, select,text area),textContent, inner Text, inner HTML, outer HTML (p,div,span), style(style.csspropname eg. - style.color)

22. Difference between innerHTML Vs OuterHtml ?

23. How to read params/query strings from URL?
url - localhost:8080/projectname?username=heeren&password=123
 var params = new URLSearchParams(location.search);
 var username = params.get("username");
 var password = params.get("password");
 
24. How to generate random digit using js ?
Math.round(Math.random() * 10);

25.What is function clouser?

26.what is the different functions use in arrays such as filter, map, reduce and sort function ?Give an example ?
  eg1. - get only the users having age more then 20
  var users = [
    {id: 1,name: "Eban", age:25},
    {id: 2,name: "Bob", age:30},
    {id: 3,name: "John", age:20},
  ]
  var filteredUsers = users.filter(user => user.age > 20)
                           .map(user => ({id:user.id, name:user.name}));
  console.log(filteredUsers);
  
  eg2. reduce - sum of all numbers in an array
  array.reduce((result,num) => result+num,0)

  eg3. array = array.sort((a,b) => (a-b)); 
  for string sorting - localeCompare
    var fruits = ["banana","cherry","apple","grapes"];
    fruits = fruits.sort((a,b) => a.localeCompare(b));
	
27. How many ways we can create object in java script ?
      2 ways.-
	  1. using class
	  2. directly creation of object

28. what is constructor in js ? and how to use it ?
	*more then one constructor can not define in  a class in java script.

29. what are the memebers in the class ?
    1. property - represent object property
    2. method - kind of function
    3. constructor - it is use to initilize class proprties
    4. accessor - use to access proprties

30. how to access class property within a class and outside the class ?
class property access with in a class using this keyword 
class property access outside the  class using class object 

31. what are the different types of events ?
classifications-
	1. mouse event
	2. keyboard event
	3. button event
	4. Touch event

31. how many ways we can bind event with function ?
in 2 ways - 
onClick = "functionName()"
htmlElementObj.addEventListener("click", () => {});

32. what is inheritance ? what is the rule for constructor in inheritance?
If base class is having constructor then it must call from the child class
constructor.calling define like - super();

33. Name some events in java script?
on body load -onload
input - onInput
button - onClick
onmouseout
mouserover
mouseup
mousedown
mousemove
on key up
on key down

34. what is module ?
module is the collection of functions, values and classes.
modules are use to build libraries.
every java script file is cosidered as module

35. how to export module ?
36. ES6 Features ?
ES6, also known as ECMAScript 2015, is a major update to the JavaScript language that introduced several new features and improvements. Some of the key features of ES6 include: 

1. Arrow functions: A shorthand way to write functions that are more concise and easier to read. 

2. Let and const keywords: A new way to declare variables that provides block scope and prevents accidental reassignment. 

3. Template literals: A new way to create strings that allows for variable interpolation and multi-line strings. 

4. Classes: A new syntax for creating object-oriented classes in JavaScript. 

5. Default function parameters: A way to set default values for function parameters. 

6. Rest and spread operators: A way to work with arrays and objects more easily. 

7. Destructuring assignment: A way to extract values from arrays and objects into separate variables. 

8. Promises: A new way to handle asynchronous operations in JavaScript. 

9. Modules: A new way to organize and share code between files and projects. 

10. Iterators and generators: A way to work with collections of data more easily.

37. what is default function paramenters ?

----------------------------------------------------------------------