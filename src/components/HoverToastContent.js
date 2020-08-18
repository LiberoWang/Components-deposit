import React from 'react';
import HoverToast from './HoverToast';

class HoverToastContent extends React.PureComponent {
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState({ visible: true });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    return (
      <HoverToast msg="这是一个测试的msg" visible={visible} onCancel={this.onCancel}>
        <button onClick={this.handleClick}>点击Hover 悬框提示, 2s之后消失</button>
      </HoverToast>
    );
  }
}

export default HoverToastContent;
