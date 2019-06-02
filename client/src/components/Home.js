import React, { Component } from 'react';
import main_image from './images/no3.jpeg'

export default class Home extends Component {

    render() {
        return (
            <div className="container-fluid iron-image-preload" style={{maxWidth:'100%',maxHeight:'100%',bottom:'0',left:'0',margin:'auto',overflow:'auto',position:'fixed',right:'0',top:'0',backgroundImage: `url('${main_image}')`,backgroundSize:'cover'}}>
                <div className="row" >
                    {/* <div className="col bg-white"style={{margin:'auto',marginTop:'300px', height:'auto'}}> */}
                        <h1 className="text-center" style={{margin:'auto',marginTop:'400px',fontStyle:'bold',fontSize:'40px', color:'white'}}>korea national university of transportation<br/>Traffic Information System</h1>
                        {/* <h1 className="text-center" style={{fontSize:'50px', color:'white'}}>Traffic Information System</h1> */}
                    {/* </div> */}
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col ml-auto bg-white"style={{margin:'auto',marginTop:'900px', height:'100px'}}>
                        <p className="text-center" style={{fontSize:'15px', color:'black'}}>Copyright</p>
                    </div>
                    <div className="col bg-white"style={{margin:'auto',marginTop:'900px', height:'100px'}}>
                        <p className="text-center" style={{fontSize:'15px', color:'black'}}>corperation</p>
                    </div>
                    <div className="col bg-white"style={{margin:'auto',marginTop:'900px', height:'100px'}}>
                        <p className="text-center" style={{fontSize:'15px', color:'black'}}>team DB</p>
                    </div> */}
                </div>
            </div>
        )
    }
}