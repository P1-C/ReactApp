import React, { Component}from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent'
import './App.css';
import { DISHES } from './shared/dishes'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
       {/* ReactStrap Navbar */}
       <Navbar dark color="secondary">
         <div className="container">
           <NavbarBrand href="/">
             <img src={logo} className="App-logo" style={{ height:40}} alt="logo"/>
             Ristorante Con Fusion</NavbarBrand>
         </div>
       </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    )
  }
}
// function App() {

//   return (
//     <div className="App">
//       {/* ReactStrap Navbar */}
//       <Navbar dark color="secondary">
//         <div className="container">
//           <NavbarBrand href="/">
//             <img src={logo} className="App-logo" style={{ height:40}} alt="logo"/>
//             Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu/>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
      
//           <h1>Hello World !</h1>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
