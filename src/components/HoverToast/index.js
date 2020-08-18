import React, { useEffect } from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './index.scss'


const HoverToastWidget = ({ msg, duration = 2000, visible, children, onCancel }) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        onCancel();
      }, duration);
    }
  }, [visible]);

  return(
    <div className="hover-taost">
      { children }
      <div className={cx('hidden', {'nomarl': visible })}>
        <CSSTransition
          in={visible}
          classNames="toast-notice-hover notice"
          timeout={300}
        >
          <div className="toast-notice">{ msg }</div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default HoverToastWidget;
