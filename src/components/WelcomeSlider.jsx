import React from 'react';
import { observer } from 'mobx-react';

function WelcomeSlider({ store }) {

  return (
    <div>
      <p>Welcome</p>
    </div>
  );
}

WelcomeSlider.propTypes = {
  store: React.PropTypes.object,
};

export default observer(WelcomeSlider);
