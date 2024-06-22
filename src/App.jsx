// const App=()=>{
//   return(
//     <h1>Welcome to React class!!</h1>
//   )
// }

// export default App

// const App=()=>{
//   return(
//     <>
//     <h1>
//       hiii how are you!!!
//     </h1>
//     <h2>Welcome to cybrom</h2>
//     </>
//   )
// }

// export default App

// =============================================================

// import Cybrom from "./Cybrom";

// const App=()=>{
//   return(
//     <>
//     <h1>This is my first page </h1>
//     <h2>Welcome to Cybrom</h2>
//     <Cybrom/>

//     </>
//   )
// }

// export default App;

// import Cybrom from "./Cybrom";

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to the city of lakes bhopal</h1>
//     <h2>Capital of madhaya pradesh</h2>
//     <Cybrom/>
//     </>
//   )
// }
// export default App;
// ==============================================================

// import Header from "./Header";
// import Middle from "./Middle";
// import Footer from "./Footer";

// const App=()=>{
//   return(
//     <>
//       <Footer/>
//       <Middle/>
//       <Header/>

//     </>
//   )
// }

// export default App ;

// import Header from "./Header";
// import Middle from "./Middle";
// import Footer from "./Footer";

// const App=()=>{
//   return(
//     <>
//     <Header/>
//     <Middle/>
//     <Footer/>
//     </>
//   )
// }
// export default App

// =============================================================

// const age=21;
// const name="Sakshi";

// const App=()=>{
//   return(
//     <h1>hello i am {name} i am {age} year old </h1>
//   )
// }
// export default App ;

// const age=21;
// const name="Sakshi";

// const App=()=>{
//   return(
//     <h1>hello friends i am {name} i am {age} year old </h1>
//   )
// }
// export default App;

// =================================================================

// const sub=<ul>
//   <li>PHP</li>
//   <li>SQL</li>
//   <li>JAVASCRIPT</li>
//   <li>REACT</li>
//   <li>HTML</li>
//         </ul> 

//         const App=()=>{
//           return(
//             <h1>hello my subject is: {sub}</h1>
//           )
//         }
//         export default App;

  // ========================================================
  // const sub=
  //   <ul>
  //     <li>java</li>
  //     <li>mern</li>
  //     <li>Python</li>
  //     <li>DADS</li>
  //     <li>data analysis</li>
  //     <li>communication</li>
  //   </ul>

  //   const App=()=>{
  //     return(
  //       <h1>this is my sub:{sub}</h1>
  //     )
  //   }
  // export default App;

  // const App=()=>{
  //   return(
  //     <h1>hello i am sakshi</h1>
  //   )
  // }
  // export default App;

  // =================================================================================

  // const App=()=>{
  //   return(
  //     <>
  //     <h1>Application Form</h1>
  //     Enter name: <input type="text" />
  //     <br/>
  //     Enter city: <input type="text" />
  //     </>


  //   )
  // }
  // export default App;

  // ==========================================================================================

  // import Cybrom from "./Cybrom";

  // const App=()=>{
  //   return(
  //     <>
  //     <h1>welcome to Cybrom!!!</h1>
  //     <Cybrom/>
  //     </>
  //   )
  // }
  // export default App;

//   import Header from "./Header";
//   import Data from "./Data";
// import Footer from "./Footer";

// const App=()=>{
//   return(
//     <>
//     <Header/>
//     <Data/>
//     <Footer/>
//     </>
//   )
// }
// export default App;

// ==========================================================================

// import Header from "./Header";
// import Data from "./Data";
// import Footer from "./Footer";

// const App=()=>{
//   return(
//     <>
//     <Header/>
//     <Data/>
//     <Footer/>
//     </>
//   )
// }
// export default App;

// import Employee from "./Employee";
// const App=()=>{
//   return(
//     <>
//       <Employee nm=" Sakshi" empno="123" sal="40000"/>
//     </>
//   )
// }
// export default App;
// =================================================================

// import Student from "./Student"

// const nm="Sakshi sahu";
// const cls="mtech";
// const fees="45000";

// const App=()=>{
//   return(
//     <>
//       <Student nm={nm} cls={cls} fs={fees}/>
//     </>
//   )
// }
// export default App;



// import Student from "./Student";

// const nm="Sakshi";
// const crs ="Mern";
// const fees="50000";

// const App=()=>{
//   return(
//     <>
//     <Student nm={nm} crs={crs} fs={fees}/>
//     </>
//   )
// }
// export default App;

// ================================june 20th======================================================

// import Cybrom from "./Cybrom";
// const Student={
//   "rollno":123,
//   "name":"Sakshi",
//   "city":"bhopal",
// }


// const App=()=>{
//   return(
//       <>
//       <h1>Welcome to Cybrom</h1>
//       <Cybrom rno={Student.rollno} nm={Student.name} ct={Student.city}/>
//       </>

//   )
// }
// export default App;

// import Cybrom from "./Cybrom";
// const Student={
//   "rollno":123,
//   "name": "Sakshi",
//   "city": "bhopal",
//   "course": "mern",
//   "subject":"React",
// }
// const App=()=>{
//   return(
//     <>
//       <h1>Welcome to Cybrom</h1>
//       <Cybrom rno={Student.rollno} nm={Student.name} ct={Student.city} crs={Student.course} sub={Student.subject} />
//     </>
//   )
// }
// export default App;

// =======================================map method=====================================================

// const App=()=>{
//   const name=["Ram", "Shyam", "mohan","Rohan"];
//   const ans=name.map((key)=>{
//     return(
//       <>
//         <h1>{key}</h1>
//       </>
//     )
//   })
//   return(
//     <>
//       <h1>Welcome to cybrom</h1>
//       {ans}
//     </>
//   )
// }
// export default App;

// const age=[1,2,3,4,5,6];
// const myage = age.map((key)=>{
//   return(
//     <>
//       <h1>{key*2}</h1>
//     </>
//   )
// })
// const App=()=>{
//   return(
//     <>
//       <h1>Welcome to Cybrom Bhopal!!</h1>
//       {myage}
//     </>
//   )
// }
// export default App;



// ===============================================================================

// const city=["Bhopal", "Indore","Delhi","Satna","Rewa"];
// const mycity=city.map((key)=>{
//       return(
//         <>
//           <option>{key}</option>
//         </>
//       )
// })
// const App=()=>{
//   return(
//     <>
//       <h1>Welcome to bhopal</h1>
//       <select>
//         {mycity}
//       </select>
//     </>
//   )
// }
// export default App;



// ==========================================================================================

// const subject=["Php","Sql","Mern","React","java"];
// const App=()=>{
//   const mysub= subject.map((key)=>{
//     return(
//       <>
//         <li>{key}</li>
//       </>
//     )
//   })

//   return(
//     <>
//       <h1>Welcome to bhopal</h1>
//       <ul>
//         {mysub}
//       </ul>
//     </>
//   )
// }

// export default App;

// ======================================================================================================
// const sub=["Mongo DB","ExpressJS","ReactJs","NodeJs"];
// const mysub=sub.map((key)=>{
//   return(
//     <>
//       <li>{key}</li>
//     </>
//   )
// })
// const App=()=>{
//   return(
//     <>
//     <h1>Mern Stand for</h1>
//       <ul>{mysub}</ul>
//     </>
//   )
// }
// export default App;

// =======================================================================================================
// const Student=[
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "city":"Bhopal",
//   },
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "city":"Bhopal",
//   },
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "city":"Bhopal",
//   },
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "city":"Bhopal",
//   }
// ]
//   const ans=Student.map((key)=>{
//     return(
//       <>
//       <table>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//       </tr>
//       </table>
//       </>
//     )
//   })
//   const App=()=>{
//     return(
//       <>
//         <h1>Welcome to cybrom bhopal!!</h1>
//         <table border="1" width="500" bgcolor="pink">
//           <tr bgcolor="blue">
//           <th>Rollno</th>
//           <th>Name</th>
//           <th>City</th>
//           </tr>
//           {ans}
//         </table>
//       </>
//     )
//   }
//   export default App;

// ===========================================================================================


// const Student=[
//   {
//     "name":"Khushi",
//     "city":"Kanpur",
//     "course":"Mern",
//     "fees": 90000
//   },
//   {
//     "name":"Khushi",
//     "city":"Kanpur",
//     "course":"Mern",
//     "fees": 90000
//   },
//   {
//     "name":"Khushi",
//     "city":"Kanpur",
//     "course":"Mern",
//     "fees": 90000
//   },
//   {
//     "name":"Khushi",
//     "city":"Kanpur",
//     "course":"Mern",
//     "fees": 90000
//   }
// ]
// const ans=Student.map((key)=>{
//   return(
//     <>
//       <tr>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.course}</td>
//         <td>{key.fees}</td>
//       </tr>
//     </>
//   )
// })
// const App=()=>{
//   return(
//     <>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>City</th>
//           <th>Course</th>
//           <th>Salary</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   )
// }
// export default App;
// ======================================================================================

//   import Employee from "./Employee"
//   const ans=Employee.map((key)=>{
//     return(
//       <>
//        <tr>
//         <td>{key.Empno}</td>
//         <td>{key.name}</td>
//         <td>{key.salary}</td>
//         <td>{key.city}</td>
//        </tr>
//       </>
//     )
//   })
//   const App=()=>{
//     return(
//       <>
//         <h1>Welcome to cybrom!!</h1>
//         <table align="center" width="600" bgcolor="yellow">
//           <tr>
//             <th>Emp number</th>
//             <th>Name</th>
//             <th>Salary</th>
//             <th>City</th>
//           </tr>
//           {ans}

//         </table>
//       </>
//     )
//   }
// export default App;
// ========================================================================================
// import School from "./School";
// import Student from "./Student";


// const ans=Student.map((key)=><School 
//           rno={key.rollno}
//           nm={key.name}
//           ct={key.city}
//           fs={key.fees}/> )
//   const App=()=>{
//   return(
//     <>
//       <h1>Our students list</h1>
//       <table border="1" bgcolor="skyblue" width={"100%"} cellPadding={8} >
//         <tr>
//           <th>Roll number</th>
//           <th>Name</th>
//           <th>City</th>
//           <th>Fees</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   )
// }
// export default App;

// ===========================================================================
// import Cybrom from "./Cybrom";
// import Student from "./Student";

// const ans=Student.map((key)=><Cybrom rno={key.rollno} nm={key.name} ct={key.city} fs={key.fees}/>)

// const App=()=>{
//   return(
//     <>
//       <h1>Our Students list</h1>
//       <table align="center" border={1} width={500} bgcolor="skyblue">
//         <tr>
//           <th>Rollno</th>
//           <th>Name</th>
//           <th>City</th>
//           <th>Fees</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   )
// }
// export default App;
// ===============================================================================================
// const App=()=>{
//   return(
//     <>
//       <h1 style={{color:"pink" , fontFamily:"verdana" , }}>Hello we are developer</h1>
//       <h2 style={{color: "blue" , fontFamily:"cursive",}}>React Developer</h2>
//     </>
//   )
// }
// export default App;

// ===================================================================================================
const App=()=>{
  return(
    <>
      <div style={{backgroundColor:"red", borderRadius:"20px", width:"200px",height:"200px"}}>\

      <div style={{backgroundColor:"green" , borderRadius:"20px",width:"150px", height:"150",position:"relative",top:"20px",left:"20px"}}>

              <div style={{backgroundColor:"blue", borderRadius:"20px",width:"100px",height:"100px",margin:"10px",position:"relative", top:"20px",left:"20px"}}>

                <div style={{position:"relative", top:"20px",left:"20px"}}>Cybrom</div>

               </div>
        </div>
        </div>
    </>
  )
}
export default App;