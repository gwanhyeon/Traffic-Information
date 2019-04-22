import React, { Component } from 'react';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import TransItem from './TransItem'
import {Table} from 'react-bootstrap'
class TransInfo extends Component {


    state ={
        data: [],
    }

    componentDidMount(){
        const url = 'http://swopenAPI.seoul.go.kr/api/subway/6a7644634e6b67683739434e557a61/xml/realtimeStationArrival'
        let location = "의왕";
        const subway_id='1';
        const stain_id = '52';
        const attribute_length = 22;
        let row_length = null;
        location = encodeURIComponent(location); //인코딩한 값 넣어주기

        // ,{responseType : 'xml'}
        axios.get(`${url}/${subway_id}/${stain_id}/${location}`)
        .then(res =>{
            var parser = new DOMParser(),
            xmlDoc = parser.parseFromString(res.data,'text/xml');
            // html DOM -> xml DOM을 사용한다.
            // firstnode를 나타내는것 ('row')[0];
            console.log('1 =>',xmlDoc.getElementsByTagName('row')[1]); // row로 묶인 태그가 순서대로 들어가게 된다 .
            console.log('row[2]) =>',xmlDoc.getElementsByTagName('row')[2]); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('row[2].firstChild =>',xmlDoc.getElementsByTagName('row')[2].firstChild); // row로 묶인 태그가 순서대로 들어가게 된다 .
            // console.log('row[2].firstnextsibling =>',xmlDoc.getElementsByTagName('row')[2].nextSibling); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('row[2].firstChild.firstChild.value =>',xmlDoc.getElementsByTagName('row')[2].firstChild.firstChild.value); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('row[2].value',xmlDoc.getElementsByTagName('row')[2].value); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('row[2].value',xmlDoc.getElementsByTagName('row')[2].getAttributeNames('rowNum')); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('3 =>',xmlDoc.getElementsByTagName('row')[3].getAttribute('rowNum')); // row로 묶인 태그가 순서대로 들어가게 된다 .
            
            console.log('length=>',xmlDoc.getElementsByTagName('row').length); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('nextSibling=>',xmlDoc.getElementsByTagName('row')[0].innerHTML.nextSibling); // row로 묶인 태그가 순서대로 들어가게 된다 .
            //console.log('nextSibling=>',xmlDoc.getElementsByTagName('row')[0].innerHTML.nextSibling); // row로 묶인 태그가 순서대로 들어가게 된다 .
            // console.log('getAttribue=>',xmlDoc.getElementsByTagName('row')[1].innerHTML.getAttribute('rowNum')); // row로 묶인 태그가 순서대로 들어가게 된다 .
            // row[0] rownum = 1, row[1] = rownum = 2
            //console.log("",xmlDoc.getElementsByTagName('row')[0]
            //.childNodes[0].childNodes[0]);
            //console.log("hello xml",xmlDoc.getElementsByTagName('row')[0]
            //.childNodes[0].childNodes[0])
            //console.log("hello xml",xmlDoc.getElementsByTagName('row')[0]
            //.childNodes[1].childNodes[0]);
            //todo node
            //console.log("hello xml",xmlDoc.getElementsByTagName('row')[0]
            //.childNodes[0].childNodes[0])
            row_length = xmlDoc.getElementsByTagName('row').length;
            // console.log("row 개수 ", xmlDoc.getElementsByTagName('row')[0].getAttribute.length);
            

            // let parsing_data = [];
            const parsing_data = new Array();

            // //여기 
            // for(var i=0; i<row_length; i++){
            //     for(var j=0; j<attribute_length; j++){
            //         parsing_data.push(xmlDoc.getElementsByTagName('row')[i].childNodes[j].childNodes[0])
            //     }
            // }
           

            for(var i=0; i< row_length; i++){
                var sub = new Array();
                for(var j=0; j<attribute_length; j++){
                     sub.push(xmlDoc.getElementsByTagName('row')[i]
                    .childNodes[j].childNodes[0])
                // console.log("hello xml",xmlDoc.getElementsByTagName('row')[i]
                // .childNodes[j].childNodes[0])
                }
                parsing_data.push(sub);
            console.log("여기잠시대기")
            }
            for(let i=0; i< parsing_data.length; i++){
                for(let j=0; j <parsing_data[i].length; j++){            
                    console.log(parsing_data[i][j]);
                }
                console.log("어떻게찍히는지")
            }

            this.setState({
                data : parsing_data
            })
            console.log(this.state.data);
            // parsing_data.forEach(function(value,idx){
            //     console.log(value);
            //     console.log(idx);
            // })
            
            // console.log(hello);


            //todo firstChild -> 해당 태그를 가져온다.
            //todo
            })
    }    
    render() {
        const {data} = this.state;
        return (
            <div>
            
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>내용</th>
                <th>이름</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
             
              {data.map((data, i) => {
                console.log("key=>",data[0]);
                console.log("key=>",data[1]);
                console.log("key=>",data[2]);
                console.log("key=>",data[3]);

                
                return (
                    <TransItem 
                    board_id={data[1].data}
                    board_title={data[2].data} 
                    board_contents={data[3].data} 
                    board_user_name ={data[4].data} 
                    board_date ={data[5].data}
                    key={i}/>);
                })}
              
         
            </tbody>
          </Table>
            
            </div>
        );
    }
}

export default TransInfo;