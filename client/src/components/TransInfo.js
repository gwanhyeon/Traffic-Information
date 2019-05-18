import React, { Component } from 'react';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import TransItem from './TransItem'
import {Table} from 'react-bootstrap'
import { callbackify } from 'util';
import Error from './Error';
class TransInfo extends Component {
    state ={
        data: [],
    }

    subway_call () {
        const url = 'http://swopenAPI.seoul.go.kr/api/subway/6a7644634e6b67683739434e557a61/xml/realtimeStationArrival'
        let location = "의왕";
        const subway_id='1';
        const stain_id = '52';
        const attribute_length = 22;
        let row_length = null;
        location = encodeURIComponent(location); //인코딩한 값 넣어주기
        // ,{responseType : 'xml'}
        const sub_url = `${url}/${subway_id}/${stain_id}/${location}`;
        console.log(sub_url);
        this.lookupInterval = setInterval(() => {
        axios.get(`${url}/${subway_id}/${stain_id}/${location}`)
        .then(res =>{
            var parser = new DOMParser(),
            xmlDoc = parser.parseFromString(res.data,'text/xml');
            row_length = xmlDoc.getElementsByTagName('row').length;
            // console.log(row_length)
            const parsing_data = new Array();
            for(var i=0; i< row_length; i++){
                var sub = new Array();
                for(var j=0; j<attribute_length; j++){
                     sub.push(xmlDoc.getElementsByTagName('row')[i]
                    .childNodes[j].childNodes[0])
                }
                parsing_data.push(sub);
            // console.log("여기잠시대기")
            }
            for(let i=0; i< parsing_data.length; i++){
                for(let j=0; j <parsing_data[i].length; j++){            
                    // console.log(parsing_data[i][j]);
                }
                // console.log("어떻게찍히는지")
            }
            this.setState({
                data : parsing_data
            })
            // console.log("test =>",this.state.data);
            //todo firstChild -> 해당 태그를 가져온다.
            //todo
            })
            .catch( err =>{
                console.log(err);
            })
        }, 10000);

    }

    bus_call(){
        let serviceKey='a5mSPyGouPCZhF2pi%2F%2Fciz%2FAokup9JJaIsQYgLHPEYE6Wct2ANSuspDzQTxakihNLNyfD%2FKxDxDunVk2lnY5jQ%3D%3D'
        const bus_url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station';
        const stationId = 'stationId=226000160';
        // serviceKey =encodeURIComponent(serviceKey); //인코딩한 값 넣어주기
        axios.get(`${bus_url}/${serviceKey}/${stationId}`)
            .then(res =>{
                console.log(res);
                var parser = new DOMParser(),
                xmlDoc = parser.parseFromString(res.data,'text/xml');
                const bus_length = xmlDoc.getElementsByTagName('row').length;
                console.log(bus_length)

            })
            .catch((err)=>{
                

            }
        )


    }

    componentDidMount(){
        // this.subway_call();
        this.bus_call();
        
    }    
    componentWillUnmount(){
        // clearInterval(this.lookupInterval)
    }
    render() {
        const {data} = this.state;
        // console.log("data.lengh => ",data.length)   
        const ErrorPage = <Error></Error>
        return (
            <div style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>열차정보</th>
                <th>현재역</th>
                <th>시간</th>
              </tr>
            </thead>
            <tbody>
            {data.map((data, i) => {
              console.log("key=>",data[0]);
              console.log("key=>",data[1]);
              console.log("key=>",data[2]);
              console.log("key=>",data[3]);
              console.log("key8=>",data[15]);
              console.log("key9=>",data[14].data);
              if(data[14].data === "급행"){
                // console.log("급행확인");
                  return(
                      <TransItem
                      board_id={data[4].data}
                      board_title={data[5].data} 
                      board_contents={data[20].data} 
                      board_user_name ={data[21].data} 
                      board_date ={data[19].data}
                      key={i}/>
                  )
              }
              else{
                return (
                    <TransItem 
                    // 4 상행
                    // 5 방면
                    //
                    // 19 도착지
                    // 
                    board_id={data[4].data}
                    board_title={data[5].data} 
                    board_contents={data[19].data} 
                    board_user_name ={data[20].data} 
                    board_date ={data[18].data}
                    
                    key={i}/>
                );
                }
              })
            }
            </tbody>
          </Table>
            
            </div>
        );
    }
}

export default TransInfo;