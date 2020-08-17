import React from 'react';
import Notice from '../Notice';
require('./index.scss');

class Toast extends React.Component {

  normal = () => {
    Notice.info('普通的提示～');
  }

  success = () => {
    Notice.success('成功的提示～');
  }

  warning = () => {
    Notice.warning('警告的提示～');
  }

  error = () => {
    Notice.error('警告的提示～');
  }

  render() {
    return (
      <div className="toast-warp-content">
        <button type="button" onClick={() => this.normal()}>普通提示</button>
        <button type="button" onClick={() => this.success()}>成功提示</button>
        <button type="button" onClick={() => this.warning()}>警告提示</button>
        <button type="button" onClick={() => this.error()}>错误提示</button>
      </div>
    );
  }
}

export default Toast;
