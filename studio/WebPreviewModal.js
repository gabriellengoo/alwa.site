// WebPreviewModal.js
import React from 'react';
import Modal from 'react-modal';

const WebPreviewModal = ({ isOpen, onClose }) => {
  return React.createElement(Modal, { isOpen: isOpen, onRequestClose: onClose },
    React.createElement('div', null,
      React.createElement('iframe', { src: 'https://www.alwaproduction.co.uk', title: 'Web Preview', width: '100%', height: '500px' })
    ),
    React.createElement('button', { onClick: onClose }, 'Close')
  );
};

export default WebPreviewModal;
