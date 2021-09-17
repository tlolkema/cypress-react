import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.name }))
      .catch(err => this.setState({ hasError: true }))
  }

  callBackendAPI = async () => {
    const response = await fetch('/name');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    if (this.state.hasError) {
      return <Alert severity="error">GET /name failed</Alert>
    }

    if (this.state.data === 'admin') {
      return <h1 id="Welcome" >Welcome, {this.state.data}</h1>;
    }
    return <h1 id="Welcome">Hi, {this.state.data}</h1>;  
  }
}
