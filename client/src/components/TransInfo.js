import React, { Component,Fragment} from 'react';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import TransSubwayItem from './TransSubwayItem'
import {Table} from 'react-bootstrap'
import { callbackify } from 'util';
import Error from './Error';
import TransUiwangBusItem from './TransUiwangBusItem';
import TransKnutBusItem from './TransKnutBusItem';
import '../main.css';

class TransInfo extends Component {
    state ={
        subway_data: [],
        uiwang_bus_data: [],
        knut_bus_data: []
        
    }

    subway_call(){
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
        this.lookupInterval_subway = setInterval(() => {
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
                subway_data : parsing_data
            })
            // console.log("test =>",this.state.data);
            //todo firstChild -> 해당 태그를 가져온다.
            //todo
            })
            .catch( err =>{
                console.log(err);
            })

        }, 1000);

    }
    knut_station_bus_call(){
        // #1 static Variable
        const serviceKey ='a5mSPyGouPCZhF2pi%2F%2Fciz%2FAokup9JJaIsQYgLHPEYE6Wct2ANSuspDzQTxakihNLNyfD%2FKxDxDunVk2lnY5jQ%3D%3D'  // Service Key
        const bus_url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station?';      //bus Url
        const knut_stationId = '226000103'          // 한국교통대학교
        const bus_attribute_length =14;
        // serviceKey =encodeURIComponent(serviceKey); //인코딩한 값 넣어주기
        // # 2위치 - 교통대
        let knut_msgBody_data = null;

         this.lookupInterval_knut_station = setInterval(() => {axios.get(`${bus_url}serviceKey=${serviceKey}&stationId=${knut_stationId}`)
        .then(res => {

            console.log("res=>",res);
            var knut_parser = new DOMParser(),
            xmlDoc = knut_parser.parseFromString(res.data, 'text/xml');
            console.log(xmlDoc);
            knut_msgBody_data = xmlDoc.getElementsByTagName('busArrivalList').length;
            console.log(knut_msgBody_data);
            const parsing_data2 = new Array();
            for(let i=0; i<knut_msgBody_data; i++){
                let sub2 = new Array();
                for(let j=0; j<bus_attribute_length; j++){
                    sub2.push(xmlDoc.getElementsByTagName('busArrivalList')[i]
                    .childNodes[j].childNodes[0])
                } 
                parsing_data2.push(sub2);
            }
            for(let i=0; i<parsing_data2.length; i++){
                for(let j=0; j<parsing_data2[i].length; j++){
                    console.log("parsing_data => " ,parsing_data2[i][j]);
                }
                console.log("check2");
            }
            this.setState({
                knut_bus_data : parsing_data2
            })
            console.log(this.state.knut_bus_data);
        }).catch( err => {
            console.log(err);
        });
    },1000);

    
    }

    uiwang_station_bus_call(){
        // #1 static Variable
        const serviceKey ='a5mSPyGouPCZhF2pi%2F%2Fciz%2FAokup9JJaIsQYgLHPEYE6Wct2ANSuspDzQTxakihNLNyfD%2FKxDxDunVk2lnY5jQ%3D%3D'  // Service Key
        const bus_url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station?';      //bus Url
        const uiwang_stationId = '226000099';       // 의왕역
        const bus_attribute_length =14;
        let uiwang_msgBody_data = null;
        // # 2위치 - 교통대
        
        // 의왕역 버스 데이터 request , serviceKey =encodeURIComponent(serviceKey); //인코딩한 값 넣어주기
        this.lookupInterval_uiwang_station = setInterval(() => {axios.get(`${bus_url}serviceKey=${serviceKey}&stationId=${uiwang_stationId}`)
        .then(res =>{
                var parser = new DOMParser(),
                xmlDoc = parser.parseFromString(res.data,'text/xml');
                uiwang_msgBody_data = xmlDoc.getElementsByTagName('busArrivalList').length;
                // console.log(uiwang_msgBody_data);
                const parsing_data1 = new Array();
                for(let i =0; i < uiwang_msgBody_data; i++){
                    let sub = new Array();
                    for(let j=0; j<bus_attribute_length; j++){
                        sub.push(xmlDoc.getElementsByTagName('busArrivalList')[i]
                       .childNodes[j].childNodes[0])
                   }
                    parsing_data1.push(sub);
                }
                for(let i=0; i< parsing_data1.length; i++){
                    for(let j=0; j <parsing_data1[i].length; j++){            
                        // console.log(parsing_data1[i][j]);
                    }
                    // console.log("check");
                }
                this.setState({
                    uiwang_bus_data : parsing_data1
                })
            

            }).catch( err =>{
                console.log(err);
            })
        },1000);
    }

    componentDidMount(){
        this.subway_call();
        this.uiwang_station_bus_call();
        this.knut_station_bus_call();

        
    }    
    componentWillUnmount(){
         clearInterval(this.this.lookupInterval_subway)
         clearInterval(this.lookupInterval_knut_station)
        clearInterval(this.lookupInterval_uiwang_station)
    }
    render() {
        const {subway_data,uiwang_bus_data,knut_bus_data} = this.state;
        // console.log("data.lengh => ",data.length)   
        const ErrorPage = <Error></Error>

        
        return (

            
            <Fragment>
            <div class='left-box'>
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>
                <th>#</th>
                <th>제목</th>
                <th>열차정보</th>
                <th>현재역</th>
                <th>시간</th>
              </tr>
            </thead>
            <tbody>
            {subway_data.map((data, i) => {
            //   console.log("key=>",data[0]);
            //   console.log("key=>",data[1]);
            //   console.log("key=>",data[2]);
            //   console.log("key=>",data[3]);
            //   console.log("key8=>",data[15]);
            //   console.log("key9=>",data[14].data);
              if(data[14].data === "급행"){
                // console.log("급행확인");
                  return(
                      <TransSubwayItem
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
                    <TransSubwayItem 
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

            <div class='right-box'>
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '20px'}}>
                <th>운행 버스</th>
                <th>남은 정거장 버스1</th>
                <th>운행 번호1</th>
                <th>도착 예상 시간 버스 1</th>
                <th>남은 정거장 버스2</th>
                <th>운행 번호2</th>
                <th>도착 예상 시간 버스 2</th>
                
              </tr>
            </thead>
            <tbody>
            {uiwang_bus_data.map((data, i) => {

            //   console.log("bus_data_all", uiwang_bus_data);
                
                // if(data[2] === undefined
                // || data[6] === undefined
                // || data[8] === undefined){
                    
                //     data[2] = "배차 정보가 없습니다."
                //     data[6] = "배차 정보가 없습니다."
                //     data[8] = "배차 정보가 없습니다."
                // }
                console.log(typeof(data[11]));
                if(data[11].data==="208000021"){
                    data[11].data= "1-2번"
                }else if(data[11].data=== "208000016"){
                    data[11].data= "5번"
                }else if(data[11].data === "208000015"){
                    data[11].data = "5-2번"
                }else if(data[11].data=== "208000035"){
                    data[11].data= "52-1번"
                }else if(data[11].data === "225000004"){
                    data[11].data= "100번"
                }else if(data[11].data==="225000005"){
                    data[11].data= "100-1번"
                }
                
//     <routeId>208000021</routeId>
//    <routeName>1-2</routeName>
// <routeId>208000016</routeId>
// <routeName>5</routeName>
// <routeId>208000015</routeId>
// <routeName>5-2</routeName>
// <routeId>208000035</routeId>
// <routeName>52-1</routeName>
// <routeId>225000004</routeId>
// <routeName>100</routeName>
// <routeId>225000005</routeId>
// <routeName>100-1</routeName>
            //     console.log("bus.data[0]=>",data[0].data);
            //   console.log("bus.data[1]",data[1]);
            //   console.log("bus.data[2]",data[2]);
            //   console.log("bus.data[3]",data[3]);
            //   console.log("bus.data[4]",data[4]);
            //   console.log("bus.data[5]",data[5]);
            //   console.log("bus.data[6]",data[6]);
            //   console.log("bus.data[7]",data[7]);
            //   console.log("bus.data[8]",data[8]);
            //   console.log("bus.data[9]",data[9]);
            //   console.log("bus.data[10]",data[10]);
            //   console.log("bus.data[11]",data[11]);
            //   console.log("bus.data[12]",data[12]);
            //   console.log("bus.data[13]",data[13]);
            //     // console.log("급행확인");
             
                  return(
                      <TransUiwangBusItem
                      bus_state={data[11].data}
                      bus_location1={data[1].data} 
                       bus_location2={data[2] === undefined? "배차 정보가 없습니다." : data[2].data } 
                      bus_plate1={data[5].data} 
                       bus_plate2 ={data[6] === undefined? "배차 정보가 없습니다." :data[6].data}
                      bus_time1 ={data[7].data}
                       bus_time2 ={data[8] === undefined? "배차 정보가 없습니다." : data[8].data}

                      key={i}/>
                  )
                }
              )
            }
            </tbody>
          </Table>
          <div></div>
          <Table responsive>
            <thead>
              <tr style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '20px'}}>
                <th>운행 버스</th>
                <th>남은 정거장 버스1</th>
                <th>운행 번호1</th>
                <th>도착 예상 시간 버스 1</th>
                <th>남은 정거장 버스2</th>
                <th>운행 번호2</th>
                <th>도착 예상 시간 버스 2</th>
                
              </tr>
            </thead>
            <tbody>
            {knut_bus_data.map((data, i) => {
                console.log(typeof(data[11]));
                if(data[11].data==="208000021"){
                    data[11].data= "1-2번"
                }else if(data[11].data=== "208000016"){
                    data[11].data= "5번"
                }else if(data[11].data === "208000015"){
                    data[11].data = "5-2번"
                }else if(data[11].data=== "208000035"){
                    data[11].data= "52-1번"
                }else if(data[11].data === "225000004"){
                    data[11].data= "100번"
                }else if(data[11].data==="225000005"){
                    data[11].data= "100-1번"
                }else if(data[11].data==="208000024"){
                    data[11].data= "2번"
                }
                else if(data[11].data==="208000036"){
                    data[11].data= "1-5번"
                }
                
                  return(
                      <TransKnutBusItem
                      bus_state={data[11].data}
                      bus_location1={data[1].data} 
                       bus_location2={data[2] === undefined? "배차 정보가 없습니다." : data[2].data } 
                      bus_plate1={data[5].data} 
                       bus_plate2 ={data[6] === undefined? "배차 정보가 없습니다." :data[6].data}
                      bus_time1 ={data[7].data}
                       bus_time2 ={data[8] === undefined? "배차 정보가 없습니다." : data[8].data}
                      key={i}/>
                  )
                }
              )
            }
            </tbody>
          </Table>
        </div>

            </Fragment>
        );
    }
}

export default TransInfo;