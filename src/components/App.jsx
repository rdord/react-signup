import React from 'react';
import { observer } from 'mobx-react';
import MyComponent from './MyComponent';
import SignUp from './SignUp';

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div>
        <SignUp store={this.store} />
        <hr />
        <h2>Welcome to the {this.store.name} project.</h2>
        <h3>This project is {this.store.description}.</h3>
        <MyComponent store={this.store} />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;
