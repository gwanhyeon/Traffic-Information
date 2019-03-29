import React, { Component } from 'react';

class App extends Component {
  state = {
    user_id: '',
    user_password: '',
    user_name: '',
    user_age: null,
    user_git_id: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: this.state.user_id }),
    });
    const body = await response.json();
    // if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
         user_id: this.state.user_id,
         user_password: this.state.user_password,
         user_name: this.state.user_name,
         user_age : this.state.user_age,
         user_git_id : this.state.user_git_id
         }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>회원가입 페이지</strong>
          </p>
          <h1>아이디</h1>
          <input
            type="text"
            value={this.state.user_id}
            onChange={e => this.setState({ user_id: e.target.value })}
          />
          
          <h1>패스워드</h1>
          <input
            type="text"
            value={this.state.user_password}
            onChange={e => this.setState({ user_password: e.target.value })}
          />
          
          <h1>이름</h1>
          <input
            type="text"
            value={this.state.user_name}
            onChange={e => this.setState({ user_name: e.target.value })}
          />
           
          <h1>나이</h1>
          <input
            type="text"
            value={this.state.user_age}
            onChange={e => this.setState({ user_age: e.target.value })}
          />
          
          <h1>깃 허브 아이디</h1>
          <input
            type="text"
            value={this.state.user_git_id}
            onChange={e => this.setState({ user_git_id: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default App;