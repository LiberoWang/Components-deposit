import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Content from './Content';

class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      notices: []
    };
    this.transitionTime = 300;
    this.removeNotice = this.removeNotice.bind(this);
  }

  getNoticeKey() {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice) {
    const { notices } = this.state;
    notice.key = this.getNoticeKey();
    if (notices.every(item => item.key !== notice.key)) {
      notices.push(notice);
      this.setState({ notices });

      setTimeout(() => {
        this.removeNotice(notice.key);
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
      <TransitionGroup className="toast-notification">
        { notices.map(notice => (
          <CSSTransition
            key={notice.key}
            classNames="toast-notice-wrapper notice"
            timeout={this.transitionTime}
          >
            <Content {...notice} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

export default Notification;
