import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import main_image from './images/no3.jpeg';
import main_logo from './images/photo.png';


export default class Home extends Component {

    render() {
        return (
            <div className="container-fluid iron-image-preload" style={{maxWidth:'100%',maxHeight:'100%',bottom:'0',left:'0',margin:'auto',overflow:'auto',position:'fixed',right:'0',top:'0',backgroundImage: `url('${main_image}')`,backgroundSize:'cover'}}>
                
                <div className="row">
                    <Link className="" to="/transinfo" style={{margin:'auto'}}>
                        <img src={main_logo} style={{maxWidth:'10rem',marginTop:'300px', borderRadius:'50%'}}/>
                    </Link>
                </div>
                <div className="row" >
                    {/* <div className="col bg-white"style={{margin:'auto',marginTop:'300px', height:'auto'}}> */}
                        <h1 className="text-center" style={{margin:'auto',marginTop:'10px',fontWeight:'700', textShadow:'2px 2px black',fontSize:'40px', color:'white'}}><em>korea national university of transportation<br/>Traffic Information System</em></h1>
                        {/* <h1 className="text-center" style={{fontSize:'50px', color:'white'}}>Traffic Information System</h1> */}
                    {/* </div> */}
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