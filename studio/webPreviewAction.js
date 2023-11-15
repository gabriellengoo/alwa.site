// webPreviewAction.js
import React from 'react';
import ReactDOM from 'react-dom';
import WebPreviewModal from './WebPreviewModal.js';

const openWebPreview = () => {
  const modalRoot = document.getElementById('sanity');
  const modalContainer = document.createElement('div');
  modalRoot.appendChild(modalContainer);

  const onClose = () => {
    ReactDOM.unmountComponentAtNode(modalContainer);
    modalRoot.removeChild(modalContainer);
  };

  const modalContent = document.createElement('div');
  modalContainer.appendChild(modalContent);

  import('./WebPreviewModal.js').then((module) => {
    const WebPreviewModal = module.default;
    ReactDOM.render(
      React.createElement(React.Suspense, { fallback: React.createElement('div', null, 'Loading...') },
        React.createElement(WebPreviewModal, { isOpen: true, onClose: onClose })
      ),
      modalContent
    );
  });
};

export default openWebPreview;
