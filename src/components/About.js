
import React from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black"
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor :  props.mode === 'dark' ? 'black' : 'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'? 'white' : 'black'
    }

    // const [btntext, setBtnText] = useState("Enable Light Moad")

    // const toggleStyle = () => {
    //    if(myStyle.color === 'white'){
    //     setMyStyle({
    //         color:'black',
    //         backgroundColor:"white"
    //     })
    //     setBtnText('Enable Dark mode')
    //    }
    //    else{
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:"black" 
    //     })
    //     setBtnText('Enable Light Mode')
    //    }
    // }

  return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1 className='my-3'>AboutUs</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be in word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils is free for every people they can use this software for ther use in free of cost it provide free character counter tool that provide instant count & word count statics for a givin text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compability</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The word counter software work in any browser such as chrome, google, firefox, safari, Opera, Internet Explorer. It suits to count chracter of verious fild like facebook, blog, books, excle, document, pdf etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="contaner my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    )
}
