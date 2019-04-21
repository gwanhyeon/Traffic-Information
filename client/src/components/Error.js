import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div>
                <p>현재 지하철, 버스 서비스가 종료 되었습니다.</p>
                <p>운행시간에만 데이터가 로딩됩니다.</p>
            </div>
        );
    }
}

export default Error;