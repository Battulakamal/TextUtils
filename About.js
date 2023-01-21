import React from 'react'

function About(props) {

  let myStyle={
    color:props.mode === 'dark'?'white':'black',
    backgroundColor:props.mode === 'dark'?'black':'white',
    border: '2px solid ',
    borderColor:props.mode === 'dark'?'black':'#white'

  }
    // const[myStyle,setMyStyle]=useState({
    //     color :'black',
    //     backGroundColor:'#04273'
    // });

    // const[btnColor,setBtnColor]=useState("enable dark mode")

    // let toggleColor = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color :'#04273',
    //             backgroundColor:'black'
    //         });
    //         setBtnColor("enable light mode")
    //     }else{
    //         setMyStyle({
    //             color :'black',
    //             backgroundColor:'#04273'
    //         })
    //         setBtnColor("enable dark mode")
    //     }

    // }

  return (
    <>
    <div className='container'  >
    <h1 className='my-3' style={{ color:props.mode === 'dark'?'white':'black'}}>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
     Text analysis (TA) is a machine learning technique used to automatically extract valuable insights from unstructured text data. Companies use text analysis tools to quickly digest online data and documents, and transform them into actionable insights.      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
      Free software utility which allows you to find the most frequent phrases and frequencies of words. Non-English language texts are supported.      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compactible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
      This works in the any browser opera, safari, chrome

      </div>
    </div>
  </div>
  
</div>
{/* <div className='container my-1 mb-2'>
    <button type="button" className="btn btn-primary"  onClick={toggleColor}>{btnColor}</button>
</div> */}
</div>
</>
  )
}

export default About