import React from 'react';
import infoIcon from '../../images/warning.svg';
import warningIcon from '../../images/info.svg';
import successIcon from '../../images/success.svg';
import errorIcon from '../../images/error.svg'; 

const Content = props => {
  const { content, type } = props;
  const icon = {
    'info': infoIcon,
    'success': successIcon,
    'error': errorIcon,
    'warning': warningIcon
  }[type];

  return(
    <div className={`toast-notice ${type}`}>
      <img src={icon} alt="logo" className="toast-icon" />
      <span>{content}</span>
    </div>
  );
};

export default Content;
