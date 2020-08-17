import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ToastContent extends React.Component {
  constructor() {
    super();
    this.state = {
      notices: []
    };
    this.transitionTime = 300;
    this.removeNotice = this.removeNotice.bind(this);
  }

  componentDidMount() {
    const { notice } = this.props;
    this.addNotice(notice);
  }

  getNoticeKey() {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice) {
    const { onCancel } = this.props;
    const { notices } = this.state;
    notice.key = this.getNoticeKey();
    if (notices.every(item => item.key !== notice.key)) {
      notices.push(notice);
      this.setState({ notices });
      setTimeout(() => {
        this.removeNotice(notice.key);
        onCancel();
      }, notice.duration);
    }

    return () => this.removeNotice(notice.key);
  }

  removeNotice(key) {
    this.setState(preState => ({
      notices: preState.notices.filter(item => item.key !== key)
    }));
  }

  render() {
    const { notices } = this.state;
    return(
      <TransitionGroup>
        { notices.map(notice => (
            <CSSTransition
              key={notice.key}
              classNames="toast-notice-hover notice"
              timeout={this.transitionTime}
            >
              <div className="toast-notice">{notice.content}</div>
            </CSSTransition>
        ))}
      </TransitionGroup>
    )
  }
}

export default ToastContent;
