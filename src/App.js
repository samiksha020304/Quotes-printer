import React, {useState} from "react";

const quotes = [
  "You can totally do this.",
  "Impossible is for the unwilling. ",
  "I can and I will.",
  "No pressure, no diamonds.",
  "Good things happen to those who hustle.",
  "No guts, no story."
];

function App(){
  const[quote,setQuote] = useState("Click the button to get motivated");
  const getRandomQuote = () => {
    const randomIndex = 
  Math.floor(Math.random()*quotes.length);
    setQuote(quotes[randomIndex]);
 };

 return(
  <div style={{textAlign:"center",marginTop:'100px'}}>
    <h1>Daily Motivation</h1>
    <p style={{fontSize:'20px'}}>{quote}</p>
    <button onClick={getRandomQuote}>Inspire Me</button>
  </div>
 );
}  

export default App;