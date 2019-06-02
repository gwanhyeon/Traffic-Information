
import React, { Component } from 'react'
import gwan from './images/gwan.jpg'
import image1 from './images/photo.png'
import jun from './images/jun.jpeg'
import so from './images/so.jpg'
import ji from './images/ji.jpg'
import { Link } from 'react-router-dom';
import AboutInfo from './AboutInfo';
class About extends Component{
    render(){
        return(
            <div className = 'container-fluid row justify-content-around ' style={{color:'black'}}>
            <div class="card shadow-lg" style={{height: 'auto', width: '18rem', marginTop: '1rem', textAlign:'center'}}>
            <img src={gwan} class="card-img-top" alt="..." style={{height: '360px', width:'auto'}} />
            <div class="card-body" >
              <h2 class="card-title">김 관 현<h5>(Kim Gwan-hyeon)</h5> </h2>
              <p class="card-text" style={{fontSize:'1.8rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
              </div>
              <div class="card-footer">
              <Link to="/AboutInfo/gwan" type="button" class="btn btn-primary" style={{width:'100%', fontSize:'0.9rem'}} >자세히보기</Link>
              <a href="https://github.com/kgh940525" class="btn btn-danger" style={{width:'100%', fontSize:'1rem'}}>Github</a>
              </div>
            
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '18rem', marginTop: '1rem', textAlign:'center'}}>
            <img src={jun} class="card-img-top" alt="..." style={{height: '360px', width:'auto'}} />
            <div class="card-body">
              <h2 class="card-title">이 준 석<h5>(Lee Jun-seok)</h5></h2>
              <p class="card-text" style={{fontSize:'1.8rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
              </div>
              <div class="card-footer">
              <Link to="/AboutInfo/jun" type="button" class="btn btn-primary" style={{width:'100%', fontSize:'0.9rem'}} >자세히보기</Link>
              <a href="https://github.com/jun971006" class="btn btn-danger" style={{width:'100%', fontSize:'1rem'}}>Github</a>
              </div>
            
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '18rem', marginTop: '1rem', textAlign:'center'}}>
            <img src={so} class="card-img-top" alt="..." style={{height: '360px', width:'auto'}}/>
            <div class="card-body">
              <h2 class="card-title">김 소 의<h5>(Kim So-ui)</h5></h2>
              <p class="card-text" style={{fontSize:'1.8rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
            </div>
              <div class="card-footer">
              <Link to="/AboutInfo/so" type="button" class="btn btn-primary" style={{width:'100%', fontSize:'0.9rem'}} >자세히보기</Link>
              <a href="https://github.com/so2ming" class="btn btn-danger" style={{width:'100%', fontSize:'1rem'}}>Github</a>
              </div>
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '18rem', marginTop: '1rem', textAlign:'center'}}>
            <img src={ji} class="card-img-top" alt="..." style={{height: '360px', width:'auto'}}/>
            <div class="card-body">
              <h2 class="card-title">이 지 현<h5>(Lee Ji-hyeon)</h5></h2>
              <p class="card-text" style={{fontSize:'1.8rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
              </div>
              <div class="card-footer">
              <Link to="/AboutInfo/so" type="button" class="btn btn-primary" style={{width:'100%', fontSize:'0.9rem'}} >자세히보기</Link>
              <a href="https://github.com/easy0319" class="btn btn-danger" style={{width:'100%', fontSize:'1rem', bottom:'fixed'}}>Github</a>
              </div>
            
            </div>
        
          </div>
        )        
    }
}

export default About;
