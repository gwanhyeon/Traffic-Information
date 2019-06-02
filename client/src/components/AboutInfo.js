import React, { Component, Fragment } from 'react';
import jun from './images/jun.jpeg'
import so from './images/so.jpg'
import ji from './images/ji.jpg'
import gwan from './images/gwan.jpg'


        const AboutInfo = ({match}) => {
            console.log("넌 무야", match.params.name);

            if((match.params.name)==="gwan"){
                return(
                <Fragment>
                    <div className="w3-content w3-margin-top" style={{width:"2000px "}}>        
                    <div className="w3-row-padding">
                        <div className="w3-third">
                        <div className="w3-white w3-text-grey w3-card-4">
                            <div className="w3-display-container">
                            <img src={gwan} style={{width:"100%"}} alt="Avatar"/>
                            <div className="w3-display-bottomleft w3-container w3-text-black">
                                <h2>김관현</h2>
                            </div>
                            </div>
                            <div className="w3-container">
                            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>gwangmyeongsi, gyeong-gi</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>wnstjrdlrj@gmail.com</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                            <hr/>

                            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                            <p>Adobe Photoshop</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"90%"}}>90%</div>
                            </div>
                            <p>Photography</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>
                                <div className="w3-center w3-text-white">80%</div>
                                </div>
                            </div>
                            <p>Illustrator</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>75%</div>
                            </div>
                            <p>Media</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"50%"}}>50%</div>
                            </div>
                            <br/>

                            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                            <p>English</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-teal" style={{height:"24px",width:"100%"}}></div>
                            </div>
                            <p>Spanish</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-teal" style={{height:"24px", width:"55%"}}></div>
                            </div>
                            <p>German</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-teal" style={{height:"24px", width:"25%"}}></div>
                            </div>
                            <br/>
                            </div>
                        </div><br/>
                        </div>

                        
                        <div className="w3-twothird">
                        
                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br/>
                            </div>
                        </div>

                        <div className="w3-container w3-card w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                            <p>Web Development! All I need to know in one place</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>London Business School</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                            <p>Master Degree</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>School of Coding</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
                            <p>Bachelor Degree</p><br/>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </Fragment>
                );
            }
            else if((match.params.name) === "jun"){
                return(
                    <Fragment>
                    <div className="w3-content w3-margin-top" style={{width:"2000px "}}>        
                    <div className="w3-row-padding">
                        <div className="w3-third">
                        <div className="w3-white w3-text-grey w3-card-4">
                            <div className="w3-display-container">
                            <img src={jun} style={{width:"100%"}} alt="Avatar"/>
                            <div className="w3-display-bottomleft w3-container w3-text-black">
                                <h2>이준석</h2>
                            </div>
                            </div>
                            <div className="w3-container">
                            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>gwangmyeongsi, gyeong-gi</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>wnstjrdlrj@gmail.com</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                            <hr/>

                            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                            <p>Adobe Photoshop</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"90%"}}>90%</div>
                            </div>
                            <p>Photography</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>
                                <div className="w3-center w3-text-white">80%</div>
                                </div>
                            </div>
                            <p>Illustrator</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>75%</div>
                            </div>
                            <p>Media</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"50%"}}>50%</div>
                            </div>
                            <br/>

                            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                            <p>English</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-teal" style={{height:"24px",width:"100%"}}></div>
                            </div>
                            <p>Spanish</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-teal" style={{height:"24px", width:"55%"}}></div>
                            </div>
                            <p>German</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-teal" style={{height:"24px", width:"25%"}}></div>
                            </div>
                            <br/>
                            </div>
                        </div><br/>
                        </div>

                        
                        <div className="w3-twothird">
                        
                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br/>
                            </div>
                        </div>

                        <div className="w3-container w3-card w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                            <p>Web Development! All I need to know in one place</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>London Business School</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                            <p>Master Degree</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>School of Coding</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
                            <p>Bachelor Degree</p><br/>
                            </div>
                        </div>

                        
                        </div>
                        
                    
                    </div>
                    
                    
                    </div>
                </Fragment>
                );
            }
            else if((match.params.name) === "so"){
                return(
                    <Fragment>
                    <div className="w3-content w3-margin-top" style={{width:"2000px "}}>        
                    <div className="w3-row-padding">
                        <div className="w3-third">
                        <div className="w3-white w3-text-grey w3-card-4">
                            <div className="w3-display-container">
                            <img src={so} style={{width:"100%"}} alt="Avatar"/>
                            <div className="w3-display-bottomleft w3-container w3-text-black"> 
                            </div>
                            </div>
                            <div className="w3-container">
                                <p/>
                            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Student</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>강서구, 서울특별시</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>so2_cloud@naver.com</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>010-2660-9386</p>
                            <hr/>

                            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"90%"}}>90%</div>
                            </div>
                            <p>Adobe Photoshop / Illustractor</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>
                                <div className="w3-center w3-text-white">80%</div>
                                </div>
                            </div>
                            <p>HTML / CSS / JavaScript</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>75%</div>
                            </div>
                            <p>JAVA / Android / mySQL</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"60%"}}>50%</div>
                            </div>
                            <p>React / nodeJS / mongoDB</p>
                            <br/>

                            <br/>
                            </div>
                        </div><br/>
                        </div>

                        
                        <div className="w3-twothird">
                        
                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Front End Developer</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>MAR 2019 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p> 게시판 설계, 게시판 리스트, 입력 폼, 수정 및 삭제 구현 (react) <br/> ABOUT, CONTACT, BOARD 등 컴포넌트 UI 디자인 (CSS) </p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Back End Developer</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>MAR 2019 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p> 게시판 - 서버 - DB 연동을 통해 조회, 삽입, 삭제, 수정 구현 (nodeJS, mongoDB) </p>
                            <hr/>
                            </div>
                        </div>

                        <div className="w3-container w3-card w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>한국교통대학교 의왕캠퍼스</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>MAR 2018 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p>재학중</p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>세종고등학교</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2012 - 2015</h6>
                            <p>졸업</p>
                            <hr/>
                            </div>
                        </div>

                        
                        </div>
                        
                    
                    </div>
                    
                    
                    </div>
{/* 
                    <footer className="w3-container w3-teal w3-center w3-margin-top">
                    <p>Find me on social media.</p>
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                    <p>Powered by <a href="https://github.com/so2ming" target="_blank">github</a></p>
                    </footer> */}
                </Fragment>
                );
            }
            else if((match.params.name) === "ji"){
                return(
                    <Fragment>
                    <div className="w3-content w3-margin-top" style={{width:"2000px "}}>        
                    <div className="w3-row-padding">
                        <div className="w3-third">
                        <div className="w3-white w3-text-grey w3-card-4">
                            <div className="w3-display-container">
                            <img src={ji} style={{width:"100%"}} alt="Avatar"/>
                            <div className="w3-display-bottomleft w3-container w3-text-black">
                            </div>
                            </div>
                            <div className="w3-container">
                                <p/>
                            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Student</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>용인시, 경기도</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>dlwl0319@gmail.com</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>(+82)10-2928-3284</p>
                            <hr/>

                            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                            
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"60%"}}>70%</div>
                            </div>
                            <p>C, Java</p>

                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>
                                <div className="w3-center w3-text-white">60%</div>
                                </div>
                            </div>
                            <p>Python, mongoDB</p>

                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"55%"}}>55%</div>
                            </div>
                            <p>React, HTML, Css</p>

                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"50%"}}>40%</div>
                            </div>
                            <p>JavaScript, LightRoom CC</p>
                            <br/>
                            <br/>
                            </div>
                        </div><br/>
                        </div>

                        
                        <div className="w3-twothird">
                        
                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Front End Developer</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2019 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p>
                                Signin, Signup, About, Mainpage, 전체적인 UI 폼 작업 
                            </p>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>Front End Developer</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2019 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p> Client의 Signin, Signup, BoardForm 설계</p>
                            <hr/>
                            </div>
                        </div>

                        <div className="w3-container w3-card w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>한국교통대학교 의왕캠퍼스</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2019 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <hr/>
                            </div>
                            <div className="w3-container">
                            <h5 className="w3-opacity"><b>용인 성지고등학교</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2012 - 2014</h6>
                            <p>졸업</p>
                            <hr/>
                            </div>
                        </div>

                        
                        </div>
                        
                    
                    </div>
                    
                    
                    </div>
                </Fragment>
                );
            }
        }
            
        
    
export default AboutInfo;