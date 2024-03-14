                            /*javascript Notes  */

  /* Javascript => Javascript is a programming language which is used to interact with the websites and applied to an HTML document. 
  Introduced in 1995 for adding programs to the webpages in Netscape Navigator browser.
  */
  
  /*  Features of Javascript :- 
    1. structured programming language
    2.weekly typed language
    3.object oriented programming language
    4. case sensitive language
    5.supported to various OS like microsoft , ios e
  */  


 /*Three ways to put Javascript 
   1. Inline JS => between the <body> tag of HTML document.
                   Ex :- 
                   <body>
                     <script type="text/javascript">
                       alert("Hello");
                     </script>
                    </b 
   2. Internal JS => between the <head> tag of html document.
                              Ex:-
                              <html>
                                <head>
                                 <script type="text/javascript">
                                  alert("hi");
                                 </script>
                                 </head>
                                </html>
                                
  3. External JS => external javascript file named as".js" extension and linked to html document in <head> section in <script> tag.
           Ex:-                                                     
           message.js                                               
        -------------------                                       
        function msg(){                                            
           alert("hi");                                          
   

           index.html
        -----------------
        <html>
        <head>
        <script type="text/javascript" src="message.js"></script>
        </head>
        <body>Welcome</body>
        </html>
                  

  
          */

    /*first program
     console.log("hello js");
     age=33;
     fullName="Deepak";
     console.log(age);
  */


  /* Variables in JS 
   
   =>  Variables are the containers for data.

    1. var :- variable can be re-declared and updated. A global scope variable.

    var age = 24;
    var age = 33;
    var age = 29;
    console.log("age");

    2. let :- variable cannot be re-declared but can be updated. A block scope variable.

    let age =18;
    let age =23; (Error)
    age = 20;
    {
      let age = 18;
    }

    {
      let age = 20;
    }


    3. const :- variable cannot be re-declared or updated . A block scope variable.
    
    const age =18;
    age = 20 ;(error)

  */

    /* Data types in JS  => typeof(variable-name)
      
    1. Primitive :- 
       Number 
       String
       Boolean
       Undefined 
       Null
       BigInt
       Symbol
    
    2. Non Primitive
       Objects:-   {  key  : value}
                 const Student = {
                  fullName : "Deepak Saroj",
                  age : 20,
                  cgpa : 7,
                  isPass : true
                 };

                 To accesss :----  object.key
                                   object["key"]

              Question :- 

              const profile = {
                fullName  : "Deepak saroj",
                id : "@deep",
                occupation : "Student",
                Organization : "ABCD"
              };
  */ 


   /* Operators in JS 
   
     To perform some operation 


     Types of Operators 
     1. Arithmetic :--
               + 
               -
               *
               /
               exponential
               modulus
               increment
               decrement

               Ex :--
                let a = 3; 
                let b= 5; 
                console.log("a + b =",a+b);
                console.log("a - b =",a-b);
                console.log("a * b =",a*b);
                console.log("a / b =",a/b);
                console.log("a % b =",a%b);
                console.log("a ** b =",a**b);
                a++;
                b++;
                console.log(a);
                console.log(b);
                a--;
                b--;
                console.log(a);
                console.log(b);
                ++a;++b;
                console.log(a);console.log(b);
                --a;--b;
                console.log(a);console.log(b);

      2. Assignment Operator:--
                    =
                    +=
                    -=
                    *=

      3. Comparision Operator :-- boolean
                  = =
                  = = = => equal to and type
                  <=
                  >=
        
       4. Logical Operator :
        &&
        ||
        !

      5.  Conditional Statement
        
         1. if statement :- if condition true then code executes
     
         let mode = "dark";
         let color;
         if (mode === "dark"){
          color = "black";
         }

         if (mode!="dark"){
          color = "white";
         }

         //2. if else statement :-if condition true then if block code executes otherwise else code executes.block

         let mode = "undark";
         let color;
         if(mode==="dark"){
          color = "black";
         }
         else{
          color = "white";
         }


      //3. if else if statement :-- if statement can be multiple as else if 
  
           let mode ="pink";
           let color;
           if(mode==="dark"){
            color = "black";
           }
           else if (mode === "pink"){
            color = "pink";
           }
           else{
            color = "white";
           }




           6. Ternary Operator :---

            let age = 25;
            let result = age>=25 ?"young":"adult" ;
            console.log(result)
   


              Question :- Using prompt get input from user and check if the number is divisible by 5 or not  .     
              let input =prompt("Enter a number");
              console.log(input)
              if(input%5===0){
                console.log("yes");
              }
            

    */


           /*   Loops in JS 

           => To repeat any statement untill the condition gets false

           1. for loop
           2. while loop
           
           
           1. For Loop:--

           Ex:-

           for(let i =1; i<=10;i++){
            console.log("JS loops");
           }

           let sum = 0;
           for(let i = 1; i<=10;i++){
            sum = sum + i;
            console.log(sum);
           }


           //2. while loop :--

           let i =1;
           while(i<=5){
            console.log("JS");
            i++;
           }

           3. do while loop :-- executes atleast one time


           let i = 10;
           do{
            console.log("Hello");
            i++;
           }while(i<=15);
  
           
           4. for-of loop  :-- strings and arrays

           let str = "Hello";
           for(let i of str){
            console.log(i)
           }

           5. for-in loop :-- object

           let student ={
            name : "Deepak",
            age : 20,
            cgpa : 8
           };

           for(let key in student){
            console.log(key)
           }

           Question :-- Even numbers b/w 0 - 100

           for(let i =0; i<=100;i++){
            if (i%2===0){
              console.log(i);
            }
           }
   

           Question :- Guess the number

           let num =25;
           let inputNum = prompt("Enter a number");
           while (inputNum!=num){
             inputNUm =console.log("You entered wrong number.Enter again.");
           }
           console.log("Congratulations , you guessed it.");
*/


/* Strings in JS 

 => sequence of characters used to represent text 

 Create string :-- let str = " Hello"
 String length :-- str.length
 String Index :-- str[0],str[1] 

 template literals :--- embedd expressions / string interpolation

 let obj ={
  item : "pen",
  price : 10,
 };

 let output =`The price of ${obj.item} is ${obj.price}`;
 console.log(output);


 String Methods 

 1. str.toUpperCase() => new string & new value , old string remains same 
 2. str.toLowerCase()
 3. str.trim() => remove spaces

 

 let user = prompt("Enter your fullName");
 user.length
 let username = `@${user}${user.length}`;
 console.log(username);
 
 */


 /* Arrays in JS
 
 COllection of similar type of data

 let marks = [23,21,22];
 console.log(marks);
 console.log(marks.length);
 
 
 */


 /* Function in JS 
 
     a block of code to perform some task when called.

    // function definition
     function fuction-name(){
      // some task to perform
     }
 
     // function calling 
     function-name();



     Higher Order Function => takes any function as a parameter 
 
 
    arr = [1,2,3,4,5];
    arr.forEach(val => {
      console.log(val*val);
    });


    Map :----  creates a new array with result of some operation . the value its callback returns are used to form a new array.

    arr.map(callbackFxn(value,index,array))

    let num = [2,34,45,567,78];
    let newNum =num.map((val) => {
      return(val);
    });
    console.log(newNum);``
  
   Filter :---- creates a new array of elements that give true for a condition/filter.
     
     arr.filter(callbackFxn => {});

     
        let num =[1,2,3,4,5,6];
        let newNum = num.filter((val) => {
          return val%2==0;
        })
        console.log(newNum);



        Reduce :---- -performs some operation and reduce the array to a single value and returns the single value

        arr.reduce(callbackFxn => {});

       //laregst number
        let num = [1,2,3,4,5,34];
        let larNum = num.reduce((prev,curr) =>{
          return prev>curr?prev:curr;
        });
        console.log(larNum);
        */

        /* DOM - Document Object Model => When a web page is loaded , the browser creates a DOM of the page.
               window -> document -> html 
                                   /     \
                                head      body
                              / / \        /  \
                        meta title link   div script    
                        
                        
                         
           Window Object :- The window object represents an open window in a browser . It is browser's object (not Javascript) & is automatically created by browser.
           It is a global object with lots of properties and methods.


             DOM :---- document and each node is object and model of html

             console.log(window);
             console.dir(window);
             console.log(window.document);

             We can change the page dynamically using DOM in JS.
             Use JS in the last of the body tag.

             DOM Manioulation  :----

             1.Selecting with id (#):- id should be unique 
                                   
                     document.getElementById("id-name")
                     Ex:-
                     let heading = document.getElementById("heading");
                     console.dir(heading);


             2. Selecting with class (.) :- returns html collection

                   document.getElementsByClassName("class-name");

                   Ex:-
                   let headingClass= document.getElementsByClassName("heading-class");
                   console.dir(headingClass);
                   console.log(headingClass);

             3. Selecting with tag :-

              document.getElementByTagName("tag-name");
              Ex:- 
              let headingEle = document.getElementByTagName("h1");
              console.dir(headingEle);
              console.log(headingEle);


              4. Query Selector :- node list

              document.querySelector("myId/myClass/tag") // returns first element
              document.querySelectorAll("myId/myClass/tag") // returns node list




              DOM Manipulation :- Properties

              tagName
              innerText
              innerHTML
              textContent 
        
        */


        /* Events in JS 
        
          The change in the state of an object is known as an Event.
          Events are fired to notify code of "interesting changes" that may affect code execution.

          mouse events
          keyboard events
          form events
          print events


          Event handling :-

          node.event=()=>{
            //code here
          }
         
          Ex :-
           
          btn.onclick= ()=>{
            console.log("btn was clicked");
          }
        

          btn.onmouseover=()=>{
            console.log("mouse used");
          }


          inline event (no priority)
          JS event (priority)

          Event Object (e):- 

          special object that has details about the event.

          e.type
          e.target
          e.clientX

          Event Listeners :- multiple events
          node.addEventListeners(event,callback)
          node.removeEventListeners(event,callback) => callback reference should be same to remove.


        */      

          let modeBtn = document.querySelector("#mode");
          let currMode = "light";

           modeBtn.addEventListener("click",() => {

            if(currMode==="light"){
            currMode = "dark";
              document.querySelector("body").style.backgroundColor="black";
            }
            else{
              currMode = "light";
              document.querySelector('body').style.backgroundColor="white";
            }

            console.log(currMode);

           });
       

   