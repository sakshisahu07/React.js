// const App=()=>{
//   return(
//     <h1>Welcome to React class!!</h1>
//   )
// }

// export default App;

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

// const Employee=[
  
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "salary":20000,
//   },
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "salary":20000,
//   },
//   {
//     "rollno":123,
//     "name":"Sakshi",
//     "salary":20000,
//   }
// ]
//   const myans=Employee.map((key)=>{
//     return(
//       <>
//       <table>
//         <tr>
//           <th>
//           {key.rollno}
//           {key.name}
//         { key.salary}
//           </th>
//         </tr>
//       </table>
        
        
//       </>
//     )
//   })
//   const App=()=>{
//     return(
//       <>
//       {myans}
//       </>
//     )
//   }
//   export default App;


// ======================================june 25=====================================================
// import Button from 'react-bootstrap/Button';
// const App=()=>{
//   return(
//     <>
//       <h1>Welcome to Cybrom learn React Bootstrap</h1>
//       <Button variant="outline-primary">Primary</Button>
//     </>
//   )
// }
// export default App;
// ===========================================================================================
// import Alert from 'react-bootstrap/Alert';
// import { Container } from 'react-bootstrap';
// const App=()=>{
//   return(
//     <>
//     <Container>
//           <h1>Welcome</h1>
//     <Alert variant="primary" dismissible>
//           This is my Alertbox!!!
//         </Alert>
//         <Alert variant="danger" dismissible>
//           This is my Alertbox!!!
//         </Alert>
//         <Alert variant="info" dismissible>
//           This is my Alertbox!!!
//         </Alert>
//         <Alert variant="dark" dismissible>
//           This is my Alertbox!!!
//         </Alert>
//         <Alert variant="light" dismissible>
//           This is my Alertbox!!!
//         </Alert>
//         </Container>
//     </>
//   )
// }
// export default App;
// ================================================================================
// import Badge from 'react-bootstrap/Badge';
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <h1>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h1>
//       <h2>
//         Example heading <Badge bg="primary">New</Badge>
//       </h2>
//       <h3>
//         Example heading <Badge bg="danger">New</Badge>
//       </h3>
//       <h4>
//         Example heading <Badge bg="info">New</Badge>
//       </h4>
//       <h5>
//         Example heading <Badge bg="dark">New</Badge>
//       </h5>
//       <h6>
//         Example heading <Badge bg="light">New</Badge>
//       </h6>
//     </>
//   )
// }
// export default App;
// ===================================================================
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// const App=()=>{
//   return(
//     <>
//      <ButtonGroup aria-label="Basic example">
//       <Button variant="warning">Left</Button>
//       <Button variant="secondary">Middle</Button>
//       <Button variant="danger">Right</Button>
//     </ButtonGroup>
//     </>
//   )
// }
// export default App;
// =============================================================================
// import Table from 'react-bootstrap/Table';
// const App=()=>{
//   return(
//     <>

//       <h1>Welcome </h1>
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
   
//     </>
//   )
// }
// export default App;

// ==========================================
// import { Container,Row,Col } from "react-bootstrap";


// const App=()=>{
//   return(
    
//     <>
//      <Container className='border p-5 bg-info'>
//       <Row>
//         <Col md={4} className="bg-danger text-center text-white fs-1 p-5">
//           Hello we are Cybrom Students!!!
//         </Col>
//         <Col md={4} className="bg-danger text-center border text-white fs-1 p-5">
//           Welcome to Cybrom!!
//         </Col>
//         <Col md={4} className="bg-danger text-center text-white fs-1 p-5">
//           Welcome to Cybrom!!
//         </Col>
//         </Row>
//         <br/>
//         <Row>
//         <Col md={8} className="bg-success text-center border text-white fs-2 p-5">
//           Welcome to Cybrom!!
//         </Col>
//         <Col md={2} className="bg-success text-center border text-white fs-2 p-5">
//           Welcome to Cybrom!!
//         </Col>
//         <Col md={2} className="bg-success text-center border text-white fs-2 p-5">
//           Welcome to Cybrom!!
//         </Col>
//       </Row>
//      </Container>
//     </>
//   )
// }
// export default App;

// =============================================================================================

// import myimg1 from "./images/s1.jpg";
// import img2 from "./images/s2.jpg";
// import im3 from "./images/s3.jpg";
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to my app</h1>
//     <img src={myimg1} width="500"/>
//     <img src={img2} width="500"/>

//     <img src={im3} width="500"/>

//     </>
//   )
// }
// export default App;

// ===============================================================================================

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import  Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to my Website</h1>

//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     <br/>

//     <Carousel>
//       <Carousel.Item>
//         <img src="public/a1.jfif" width="100%" height="600" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src="public/a2.jfif" width="100%" height="600" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src="public/a3.jfif" width="100%" height="600"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     <br />
//     <Container>
//     <Row>
//       <Col>
//       <Card style={{ width: '18rem' }}>
//       <img src="public/a2.jfif" alt="" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//       </Col>

//       <Col>
//       <Card style={{ width: '18rem' }}>
//       <img src="public/a3.jfif" alt="" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//       </Col>

//       <Col>
//       <Card style={{ width: '18rem' }}>
//       <img src="public/b1.jfif" alt="" />

//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//       </Col>
//     </Row>
//     </Container>
//     </>
//   )
// }
// export default App;

// ======================================Task============================================================

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const App=()=>{
  return(
    <>
      <h1>WElcome to my Website</h1>
      <Navbar expand="lg" className="bg-body-tertiary text-center fs-1 p-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br/>

    <Carousel>
      <Carousel.Item>
        <img src="public/m4.webp" width="100%" height="600" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="public/m2.jpg" width="100%" height="600"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="public/m3.webp" width="100%" height="600"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>

    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <img src="public/m5.webp" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <img src="public/m6.webp" alt="" />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <img src="public/m7.webp" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    <br/>

  <Col className='border p-3 bg-dark'>
       <Row>
         <Col  className="bg-dark text-center text-white fs-1 p-2">
           FOOTER CONTENT
           here you can use row and column here to organise your footer content.

         </Col>
        <Col className="bg-dark text-center  text-white fs-1 p-2">
         LINKS<br/>
         Link 1<br/>
         Link 2<br/>
         Link 3<br/>
         Link 4<br/>
         Link 5<br/>

         </Col>
        <Col className="bg-dark text-center text-white fs-1 p-2">
        LINKS<br/>
         Link 1<br/>
         Link 2<br/>
         Link 3<br/>
         Link 4<br/>
         Link 5<br/>
        </Col>
           </Row>
      </Col>
    

    </>
  )
}
export default App;