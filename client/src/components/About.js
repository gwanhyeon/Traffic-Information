import React, { Component } from 'react'
import image1 from './images/photo.jpeg'

class About extends Component{
    render(){
        return(
          
            <div className = 'container-fluid row justify-content-around' style={{marginTop: '3%'}}>
            <div class="card bg-primary shadow-lg" style={{width: '18rem'}}>
            <img src={image1} class="card-img-top" alt="..." sytle={{ borderRadius: '50%'}}/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/easy0319" class="btn btn-danger">Github</a>
            </div>
            </div>
            <div class="card shadow-lg" style={{width: '18rem'}}>
            <img src={image1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
            <div class="card bg-primary" style={{width: '18rem'}}>
            <img src={image1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
            <div class="card" style={{width: '18rem'}}>
            <img src={image1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
        
          </div>
        )        
    }
}

export default About; 