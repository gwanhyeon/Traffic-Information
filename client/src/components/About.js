
import React, { Component } from 'react'
import gwan from './images/gwan.jpg'
import image1 from './images/photo.png'
// import image1 from './images/photo.jpeg'
import ji from './images/ji.jpg'

class About extends Component{
    render(){
        return(
            <div className = 'container-fluid row justify-content-around' >
            <div class="card bg-primary shadow-lg" style={{width: '18rem', marginTop: '1rem'}}>
            <img src={gwan} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">김 관 현</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/kgh940525/" class="btn btn-danger">Github</a>
            </div>
            </div>
            <div class="card shadow-lg" style={{width: '18rem', marginTop: '1rem'}}>
            <img src={image1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
            </div>
            <div class="card bg-primary" style={{width: '18rem', marginTop: '1rem'}}>
            <img src={image1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
            </div>
            <div class="card" style={{width: '18rem', marginTop: '1rem'}}>
            <img src={ji} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">이 지현 (Lee Ji-hyeon)</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/easy0319/" class="btn btn-danger">Github</a>
            </div>
            </div>
        
          </div>
        )        
    }
}

export default About;
