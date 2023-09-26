// import React from 'react';
// import ReactDom from 'react-dom';

//first way to render element

// ReactDom.render(
//     // <div>
//     //     <h1>Thapa Techncal!!</h1>
//     //     <h2>Hello</h2>
//     //     <h3>Sir</h3>

//     // </div>,
//     <>
//     <h1>Thapa Techncal!!</h1>
//     <h2>Hello</h2>
//     <h3>Sir</h3>

//     </>,
//     document.getElementById('root'));


//second Way

// var h1=document.createElement("h1");
// h1.innerHTML="My name Is Amit Kumar"
// document.getElementById("root").appendChild(h1);


//First Challenage

// import React from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render(
//     <>
//         <h1>My most Like WebSeries Netflix Pick</h1>
//         <p>List Of 5 Best WebSeries</p>
//         <ol>
//             <li>Dark</li>
//             <li>Extra Curriculam</li>
//             <li>Unexpected love</li>
//             <li>Heaven</li>
//             <li>Dil</li>
//         </ol>
//     </>,
//     document.getElementById('root'));


// import React from "react";
// import ReactDom from 'react-dom';

// var fname="Amit Kumar"
// var lname="yadav";

// ReactDom.render(
//     <>
//         <h1>My Name Is {`${fname} ${lname}`}</h1>
//         <h1>{`My Name Is ${fname} ${lname}`}</h1>
//         <p>Sum of Two Number:-{3+9}</p>
//     </>,
//     document.getElementById('root'));


//Current Date and time

import React from "react";
import ReactDom from 'react-dom';

const currDate=new Date().toLocaleDateString();
const cuuTime=new Date().toLocaleTimeString();

ReactDom.render(
    <>
        <h2>Hello,Current Date And Time</h2>
        <p>Today Date is :-{currDate}</p>
        <p>Today Time is :-{cuuTime}</p>
    </>,
    document.getElementById('root')
);