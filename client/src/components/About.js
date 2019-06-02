
import React, { Component } from 'react'
import gwan from './images/gwan.jpg'
import image1 from './images/photo.png'
import jun from './images/jun.jpg';
import so from './images/so.jpg';
import ji from './images/ji.jpg';
import { Link } from 'react-router-dom';
import AboutInfo from './AboutInfo';
class About extends Component{
    render(){
        return(
          <div style={{display:'table',marginRight:'auto',marginLeft:'auto', maxWidth:'1400px', paddingTop:'70px'}}>
            <div className="title" style={{marginTop:'-40px'}}>
                        <h3>개발자</h3>
                        <span>서비스를 개발한 영웅들입니다.</span>
                    </div>
            <div class="card shadow-lg" style={{ height: 'auto', width: '300px', marginTop: '1rem', marginRight:'20px', textAlign:'center', float:'left'}}>
            <img src={gwan} class="card-img-top " alt="..." style={{height: '240px', width:'240px', borderRadius:'50%', margin:'30px'}} />
            <div class="card-body" >
              <h2 >김 관 현<h6>Kim Gwan-hyeon</h6> </h2> <br/>
              <p style={{fontSize:'1rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
              </div>

              <div style={{padding:'0px 20px 20px 20px'}}>
              <Link to="/AboutInfo/gwan" type="button" class="btn btn-primary" style={{width:'50%', fontSize:'0.7rem', fontWeight: '400',float:'left'}} >자세히보기</Link>
              <a href="https://github.com/kgh940525" class="btn btn-danger" style={{width:'50%', fontSize:'0.7rem', float:'left'}}>Github</a>

              </div>
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '300px', marginTop: '1rem',  marginRight:'20px', textAlign:'center', float:'left'}}>
            <img src={jun} class="card-img-top" alt="..." style={{height: '240px', width:'240px', borderRadius:'50%', margin:'30px'}} />
            <div class="card-body" >
              <h2>이 준 석<h6>Lee Jun-seok</h6></h2><br/>
              <p style={{fontSize:'1rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
              </div>
              <div style={{padding:'0px 20px 20px 20px'}}>
              <Link to="/AboutInfo/jun" type="button" class="btn btn-primary" style={{width:'50%', fontSize:'0.7rem', fontWeight: '400',float:'left'}} >자세히보기</Link>
              <a href="https://github.com/jun971006" class="btn btn-danger" style={{width:'50%', fontSize:'0.7rem', float:'left'}}>Github</a>
              </div>
            
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '300px', marginTop: '1rem',  marginRight:'20px', textAlign:'center', float:'left'}}>
            <img src={so} class="card-img-top" alt="..."  style={{height: '240px', width:'240px', borderRadius:'50%', margin:'30px'}}/>
            <div class="card-body">
              <h2>김 소 의<h6>Kim So-ui</h6></h2><br/>
              <p style={{fontSize:'1rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
            </div>
              <div style={{padding:'0px 20px 20px 20px'}}>
              <Link to="/AboutInfo/so" type="button" class="btn btn-primary" style={{width:'50%', fontSize:'0.7rem', fontWeight: '400',float:'left'}} >자세히보기</Link>
              <a href="https://github.com/so2ming" class="btn btn-danger" style={{width:'50%', fontSize:'0.7rem', float:'left'}}>Github</a>
              </div>
            </div>
            <div class="card shadow-lg" style={{height: 'auto', width: '300px', marginTop: '1rem',  marginRight:'20px', textAlign:'center', float:'left'}}>
            <img src={ji} class="card-img-top" alt="..." style={{height: '240px', width:'240px', borderRadius:'50%', margin:'30px'}}/>
            <div class="card-body">
              <h2 >이 지 현<h6>Lee Ji-hyeon</h6></h2><br/>
              <p style={{fontSize:'1rem'}}>한국교통대학교<br/>컴퓨터정보공학과</p>
              </div>
              <div style={{padding:'0px 20px 20px 20px'}}>
              <Link to="/AboutInfo/ji" type="button" class="btn btn-primary" style={{width:'50%', fontSize:'0.7rem', fontWeight: '400',float:'left'}} >자세히보기</Link>
              <a href="https://github.com/easy0319" class="btn btn-danger" style={{width:'50%', fontSize:'0.7rem', float:'left'}}>Github</a>
              </div>
            
            </div>
        
        </div>
        )        
    }
}

export default About;
