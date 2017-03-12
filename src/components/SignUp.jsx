import React from 'react';
import { observer } from 'mobx-react';
import SignUpForm from './SignUpForm';
import WelcomeSlider from './WelcomeSlider';

function Signup({ store }) {

  return (
    <div>
      <h1>Sign up page</h1>
      <WelcomeSlider store={this.store} />
      <SignUpForm store={this.store} />
    </div>
  );
}

Signup.propTypes = {
  store: React.PropTypes.object,
};

export default observer(Signup);
