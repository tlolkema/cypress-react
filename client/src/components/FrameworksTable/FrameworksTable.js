import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { JsonToTable } from "react-json-to-table";

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ frameworks: res.frameworks }))
      .catch(err => this.setState({ hasError: true }))
  }

  callBackendAPI = async () => {
    const response = await fetch('/frameworks');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    if (this.state.hasError) {
      return <Alert severity="error">GET /frameworks failed</Alert>
    }

    return (
        <div className="App">
          <JsonToTable json={this.state.frameworks} />
        </div>
      );
  }
}
