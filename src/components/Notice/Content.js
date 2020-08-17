import React from 'react';

const Content = props => {
  const { content, type } = props;
  const icons = {
    'info': 'info',
    'success': 'success',
    'error': 'error',
    'warning': 'warning'
  }[type];

  return(
    <div className={`toast-notice ${type}`}>
      <span>{icons}</span>
      <span>{content}</span>
    </div>
  );
};

export default Content;
