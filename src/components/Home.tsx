import React, { useState } from 'react'


const TextForm = ({heading='Heading text is here', mode, showAlert}: Props) => {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    showAlert("Converted to UpperCase", "success")
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
    showAlert("Converted to LowerCase", "success")
  }
  
  const handlecopyClick = () =>{
    navigator.clipboard.writeText(text)
    showAlert("Copied to Clipboard", "success")
  }

  const handleclearClick = () =>{
    // let newText = ""
    setText("")
    showAlert("Clear all text", "success")
  }

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'text.txt';
    link.click();
    showAlert("Text has been downloaded", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    showAlert("ExtraSpaces has been Removed", "success")
  };
  
  const capitalized = () => {
    const words = text.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    setText(capitalizedWords.join(" "));
    showAlert("Capitalized the first letter of each word", "success");
  }
  
  const handleOnChange = (event) =>{
    setText(event.target.value); //"event.target.value" ka matlab ye hai ke ham ab apne text area mai kuch changing kr skte hai.
  }

  const [text, setText] = useState("");
  // setText = "new text";// wrong way to change text in react
  // setText("new text");// correct way to change text in react
  return (
    <>
      <div className="container" style={{color: mode==='dark'?'white': mode==='Green'?'white':'black'}}>
          <div className="mb-3">
          <h2 htmlFor="myBox" className="form-label">{heading}</h2>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here" style={{backgroundColor: mode==='dark'?'gray': mode==='Green'?'#4fa90e' : '#f8f9fa', color: mode==='dark'?'white': mode==='Green'?'white':'#000', border: mode==='Green'?'1px solid white':''}}></textarea>
          </div>
          <button className="btn" style={{backgroundColor: mode==='Green'?'#4fa90e': mode==='dark'?'gray':'#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white':'white'}} onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn mx-1" style={{backgroundColor: mode=== 'Green'?'#4fa90e':  mode==='dark'?'gray':'#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white':"white"}} onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn mx-1"style={{backgroundColor: mode==='Green'?'#4fa90e': mode==='dark'?'gray': '#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white': 'white'}} onClick={handlecopyClick}>Copy to clipboard</button>
          <button className="btn mx-1"style={{backgroundColor: mode==='Green'?'#4fa90e': mode==='dark'?'gray': '#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white': 'white'}} onClick={handleDownload}>Download text</button>
          <button className="btn mx-1"style={{backgroundColor: mode==='Green'?'#4fa90e': mode==='dark'?'gray': '#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white': 'white'}} onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
          <button className="btn mx-1"style={{backgroundColor: mode==='Green'?'#4fa90e': mode==='dark'?'gray': '#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white': 'white'}} onClick={capitalized}>Capitalized text</button>
          <button className="btn mx-1"style={{backgroundColor: mode==='Green'?'#4fa90e': mode==='dark'?'gray': '#0d6efd', color: mode==='Green'?'white': mode==='dark'?'white': 'white'}} onClick={handleclearClick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color: mode==='dark'?'white': mode==='Green'?'white':'black'}}>
        <h3>Your text Summary</h3>
        {/* <p><b>{text.trim().split(/\s+/).filter(Boolean).length}</b> words and <b>{text.length}</b> characters</p> */}
        <p><b>{text.split(" ").filter(Boolean).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").filter(Boolean).length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
};

export default TextForm

interface Props {
  heading: string;
  mode: string;
  showAlert: (message:any, type:any) => void;
  GreenishAlert: (message:any, type:any) => void;
}

// tutorial 7
// ham tutorial 7 mai state ko samjhenge
// container aik class hoti hai bootstrap ko jo input ya textarea ko aik acha look deti hai.
// container class ke sath "my-3"class ka matlab hai ke margin y 3px krdo "mx-3" class ka matlab hai ke margin x 3px krdo
// props aik alag cheez hai or state aik alag cheez hai:props ko ham pass krte hai.ham agar apne component mai koi cheez change krna chahte hai to usko porps ke zariye se change krte hai.state aik aesi cheez hai jo react component ke andar use hoti hai jis mai ham data ko store kr skte hai or us data ko apne component mai use kr skte hai.jab state change hoti hai to component re-render hota hai.
// Hooks React mein ek feature hai jo functional components mein state aur side effects ko manage karne ki facility deti hai. Hooks ko functional components mein use kiya ja sakta hai. Hooks state aur side effects ko manage karne ki facility deti hai.ham aik he component mai bht sare hooks ya state ka use kr skte hai.
// ye jo textarea mai ma ne likha hai "value='{text]'" iska mtlb ye hai ke text ki jo value hai wahi value textarea ki b krdo
// onchange isliye lagaya hai kiunke agr ham onchage ke liye event listen na krte to pir ham textarea mai kuch likh na pate.

// tutorial 8 javascript logic
// ham agr jsx mai javascript likhna chahte hai to usko curly paranthesis mai likhenge.
// {text.split(" ").length} ka matlab ye hai ke jitne b words honge text mai wo maloom krke btao hamay.{text.length} ka matlab hai ke text mai jitne b lafz hai uski length maloom krke btao hamay.
// ham ne google se pta lgwaya to hamay pata chala ke 1minute mai 125words read hote hai pir ham ne 1/125 kia to hamay pata chala ke aik word 0.008sec mai read hota hai.to pir ham ne 0.008 se text ki length ko multipy krdia ab jitne b words honge hamara textarea mai to hamay pata chalta rhega ke wo kitne minutes mai read ho skte hai. 
// agr hamaray textarea mai jitne words hai wo ham textarea mai nhi parh pa rhe ya ham niche alag se preview krke prhna chahte hai to ham "{text}" krdenge.
// ham ne jis trha "convert to uppercase" wala button bnaya ta wese he simple tareeke se "convert to lowercase" wala button b bnaya hai."
// ham "<b></b>" tag ka use krke kisi b element ya word ko bold kr skte hai.

// tutorial 9 adding button
// ham ne copy to clipboard button bnaya. "navigator.clipboard.writeText(text)" se text ke andar jo b kuch likha hoga wo copy ho jaega.
// ham ne Clear button bnaya. setText("") se text ke andar jo b kuch likha hoga wo empty ho jaega.kiunke setText empty hai.
//  ham ne Download text button bnaya.iske liye ham ne event listen krwaya.blob bnaya jo data store krta hai."text/plain" ka matlab ye hai ke text plain hai.anchor <a> element create kiya.pir ham ne anchor or blob ke liye URl create kiya.link.download se link download ho jaega."text.txt" download file ka naam hoga.link.click programmatically button pr click krne se text download krega.
// ham ne extraspaces ko remove krne ke liye aik button lagaya hai.or iske function mai "text.split" ka use kiya hai jo text ko words mai convert krta hai.".join" array ko string mai convert krta hai.".join(" ")" mai paranthesis ke andar jo kuch hoga wahi kuch apke har aik woed ke bad lagega.jaisa ke yaha paranthesistring mai aik space hai isiliye hamare text ke har aik wrod ke bad aik aik spaces ajaegi.or extraspaces remove ho jaingi.


// tutorial 12 enable dark mode in full website
// style={{}} iska matlab ye hai ke mai javascript ke andr object likh rha hu
