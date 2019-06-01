
import React, { Component } from 'react'
import gwan from './images/gwan.jpg'
import image1 from './images/photo.png'
import jun from './images/jun.jpeg'
import so from './images/so.jpg'
import ji from './images/ji.jpg'

class About extends Component{
    render(){
        return(
            <div className = 'container-fluid row justify-content-around' /*style={{marginRight:'5rem',paddingRight:'8rem',paddingLeft:'8rem'}}*/ >
            <div class="card shadow-lg" style={{background:'', height: 'auto',width: '18rem', marginTop: '1rem'}}>
            <img src={gwan} class="card-img-top" alt="..." style={{height: '360px'}}/>
            <div class="card-body" >
              <h4 class="card-title">김 관 현<h6>(Kim Gwan-hyeon)</h6> </h4>
              <p class="card-text">한국교통대학교<br/>컴퓨터정보공학과</p>
              <a href="https://github.com/kgh940525/" class="btn btn-danger">Github</a>
            </div>
            </div>
            <div class="card shadow-lg" style={{height: 'auto',width: '18rem', marginTop: '1rem'}}>
            <img src={jun} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">이 준 석<h6>(Lee Jun-seok)</h6></h5>
              <p class="card-text">한국교통대학교<br/>컴퓨터정보공학과</p>
              <a href="https://github.com/jun971006" class="btn btn-danger">Github</a>
            </div>
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '18rem', marginTop: '1rem'}}>
            <img src={so} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">김 소 의<h6>(Kim So-ui)</h6></h5>
              <p class="card-text">한국교통대학교<br/>컴퓨터정보공학과</p>
              <a href="https://github.com/so2ming" class="btn btn-danger">Github</a>
            </div>
            </div>
            <div class="card shadow-lg" style={{width: '18rem', marginTop: '1rem'}}>
            <img src={ji} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">이 지 현<h6>(Lee Ji-hyeon)</h6></h5>
              <p class="card-text">한국교통대학교<br/>컴퓨터정보공학과</p>
              <a href="https://github.com/easy0319/" class="btn btn-danger">Github</a>
            </div>
            </div>
        
          </div>
        )        
    }
}

export default About;
