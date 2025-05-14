import React, { useState } from 'react'
import Navbar from './components/Navbar.tsx';
import Alert from './components/Alert.tsx';
import Home from './components/Home.tsx';
// import About from './components/About.tsx';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  const [Greenish, setGreenish] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  // function for the alert of Greenish MOde
  const GreenishAlert = (message, type) => {
    setGreenish({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setGreenish(null)
    }, 1500);

  }


  const darkMode = () => {
    if (mode === 'light' || mode === 'Green') {
      setMode('dark')
      document.body.style.backgroundColor = '#2f2b4a';
      showAlert("Dark mode has been enabled", "success")
      // setInterval(() => {
      //   document.title = "Textutils is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now"
      // }, 1500); //Title ko bar bar change krne ke liye
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils - Light Mode"
    }
  }


  // Function for Greenish Dark Mode
  const GreenishMode = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('Green')
      document.body.style.backgroundColor = 'Green';
      GreenishAlert("Greenish Dark mode has been enabled", "success")
      document.title = "Textutils - Green Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      GreenishAlert("Light mode has been enabled", "success")
      document.title = "Textutils - Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} darkMode={darkMode} GreenishMode={GreenishMode} />
        <Alert alert={alert} Greenish={Greenish} />
        <div className="container my-3 mx-20">
          {/* <Routes> */}
            {/* <Route path="/" element={<Home showAlert={showAlert} GreenishAlert={GreenishAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
          <Home showAlert={showAlert} GreenishAlert={GreenishAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
};
export default App;


/* react ke andar 2 qisam ke components hote hai. aik hote hai class-based components or dusre hote hai function based-components.pehle class-based components use hote te or ab function based-components use hote hai kiu ke wo logo ko asaan lagte hai. function-based components is a new trend.ab react mai b function-based components he use hote hai. */
/* JSX */
/* jsx aik html hai jis ne javascript ka muu pehna hua hai.jsx aik html hai lekin iski khasiyat ye hai ke ham iske andar he andar javascript use kr skte hai.lekin react ke bnane walo ne aesa kia kiu?react ke jo developers hai unho ne socha ke ham alag alag nhi rkhna chahte files ko.ke html aik jaga hia css dusri jaga hai or js dusri jaga hai.to unho ne kaha ke agar aik unified form mai aik jaga sari cheeze rhengi to wo sabse acha developer experience rhega.agr sab kuch aik jaga rhega to waqai aik acha experience rhega.ham is mai html likhenge js b likhenge lekin js curly brackets mai. */
/* html mai jesa ke ham agr class is equal to first (className="first") likhte hai to jsx mai hamay pura className is equal to first (className="first") likhna prhega.or is trha baqi syntax ke words mai b tora tora farq hoga. */
/* jsx mai ham log sirf aik he element return kr skte hai do cheeze return nhi hoti error ajata hai.or agr ham do ya do se zyada cheeze return krna chahte hai to ham opening tag "<>" or closing tag "</>" ka se krenge.  */
/* hamare return ke andar "create react app" ne hamay jo jsx likh kr dee hai wo ham hata denge .kiu ke ham apni jsx likhenge. */

// tutorial 5: understanding the single page application request response system and adding the bootstrap
// single page applicaiton mai server apko website ki html,css or js aik he dafa de deta hai isilye jab ham website ki aik page se dusre page pr jate hai to page refresh nhi hot hai.multi page application mai server apko website ki har page ka alag alag se html,css or js deta hai isiliye jab ham website ki aik page se dusre page pr jate hai to page refresh hota hai.

// tutorial 6 : Modules and props and propTypes
// ham logo ne props ki help se apne component mai changing kee hai.ham ne apni component ke tilte ka name change kiya hai.agr ham log apne is component ko kisi dusri file mai ya kisi dusri website mai use krna chaahte hai to ham function-base-component mai uske naam ka tag use krenge.or usko us file mai import krdenge.
// agr ham log kisi file mai is component ko use krna chahte hai lekin ham chahte hai is component mai ham tori si changing krke is component ko kisi fila mai use kre to ham props ki help se aesa kr skte hai.ham log pehle to props ko function-based-components jaha se start hota hai uske pele line mai likhenge paranthesis () mai.or pir ji cheez ko change krna chahte hai to usle sath props ko kuch {props.title} is trha se use krenge.or pir jis file mai ham is componetn lo use kr rhe hai to us mai title="" jo naam dena chahte hai title ko wo de skte hai.
// ab agr aik dafa ham ne component mai likh diya ke ham isko props kr rhe hai or jis file mai hamne component ko use kiya hai waha props mai changing na kre ya kuch b na likhe to wo cheez adhuri he reh jayegi.us mai pir kuch b likha hua nhi ayega.ham kabi b componetn ke andar props ko change nhi kr skte hai

// Tutorial 15 Changing Dynamic Title Name amd Favicon
// Agr ham apne application ka title change krna chahte hai to ham index.html se kr skte hai.or agr ham chahte hai ke jab hamara darkmode enale ho to application ka name change ho kr "texutils-Dark Mode" ho jaye to ham ne jo darkmode ke liye function bnaya ta us mai "document.title="title name"" change kr skte hai.wese ham aesa krenge nhi ke aik button pr click krne se hamara title change ho jaye but just for understanding.
// ham setinterval ka use krke har aik secind ke bad apne title ka naam change kr skte hai mtlb ke aik secind mai aik naam ho or dusre secind mai dusra naam ho.2titles ko ham repeatidly har secind mai change kr skte hai.ye sirf is liye hota hai takay user ka dhiyaan is taraf aa ske.or user is pr click kre to koi cheez install ho jaye.it is a fake work.

// tutorial 16 React Router
// ham ne jo single paghe application ki baat kee ti jo website ko reload kiye baghair apko website ke dusra page deta hai.Ab ham us qisam ki website bnainge.us trha ki website bnane ke liye router ka use kiya jata hai.so ham react router ka use krenge.
// ham agr "<a>" tag or 'href' ka use krenge to website kaam to kregi aik page se dusre page pr to jaegi lekin reload hone lag jaegi.iske liye hamay "<a>" ki jaga "Link" or h"ref" ki jaga "to" ka use krna hoga takay website reload hue baghair he dusre page pr jaye.
// ham apne navbar wali file mai agr <a> ki jaga "Link" lagate hai to pir hamay link ko import b krna hoga.<Router> ke andar ke router ka use krna hoga.
