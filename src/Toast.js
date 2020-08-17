import React from 'react';
import Notice from './components/Notice';

class Toast extends React.Component {
  render() {
    return (
      <div>
        <div onClick={() => Notice.info('成功的提示')}>info提示</div>
      </div>
    );
  }
}

export default Toast;
