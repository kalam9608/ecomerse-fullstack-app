import React from "react";
import Login from "../components/features/auth/Login";

const LoginPage = () => {
 
  return <div>
    {/* <App/> */}
    <Login/>
  </div>;
};

export default LoginPage;



import { useState, useEffect,memo} from 'react'


// function A() {
//   console.log('A')
//   return <B/>
// }

// const B = memo(() => {
//   console.log('B')
//   return <C/>
// })

// function C() {
//   console.log('C')
//   return null
// }

// function D() {
//   console.log('D')
//   return null
// }

// function App() {
//   const [state, setState] = useState(0)
//   useEffect(() => {
//     setState(state => state + 1)
//   }, [])
//   console.log('App')
//   return (
//     <div>
//       <A state={state}/>
//       <D/>
//     </div>
//   )
// }


// function A() {
//   console.log('A')
//   return <B/>
// }

// function B() {
//   console.log('B')
//   return <C/>
// }

// function C() {
//   console.log('C')
//   return null
// }

// function D() {
//   console.log('D')
//   return null
// }

// function App() {
//   const [state, setState] = useState(0)
//   useEffect(() => {
//     setState(state => state + 1)
//   }, [])
//   console.log('App')
//   return (
//     <div>
//       <A state={state}/>
//       <D/>
//     </div>
//   )
// }
