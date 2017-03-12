import React from 'react';
import { observer } from 'mobx-react';

function SignUpForm({ store }) {
  
  return (
    <div>
      <p>Sign up form</p>
    </div>
  );
}

SignUpForm.propTypes = {
  store: React.PropTypes.object,
};

export default observer(SignUpForm);
