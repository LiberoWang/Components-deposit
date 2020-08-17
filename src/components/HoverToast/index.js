import React from 'react';
import ToastContent from './ToastContent';
import './index.scss'


const HoverToastWidget = ({ msg, duration = 2000, visible, children, onCancel }) => {
  const notice = { content: msg, duration };
  return(
    <div className="hover-taost">
      { children }
      { visible &&
        <ToastContent notice={notice} onCancel={onCancel}/>
      }
    </div>
  );
};

export default HoverToastWidget;
