// import React from 'react'
// import PageRoutes from './AllPageRoutes/PageRoutes'
// import Login from './Components/Login'
// // import Quest from './Components/Quest'
// // import { GoogleLogin ,useGoogleOneTapLogin } from '@react-oauth/google'
// // import {jwtDecode} from 'jwt-decode'

// // pdjx bzqm pdij whae
// function App() {
//    return (
//     <>
//     <Login/>
//     {/* <GoogleLogin onSuccess={(credentialResponse)=>{
//       console.log(credentialResponse)
//       console.log(jwtDecode(credentialResponse.credential))
//     }} useOneTap/> */}
//     </>
//   )
// }

// export default App


import React from 'react'
import PageRoutes from './AllPageRoutes/PageRoutes'
function App() {
  // const form=document.getElementById('formmm')
  // form.requestFullscreen()   // full screen
  // form.requestSubmit()   // auto Submit form
  // form.requestPointerLock()    // hides cursor
  return (
    <>
    <PageRoutes/>
    </>
  )
}

export default App