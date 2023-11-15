// Create a file at the specified path, e.g., 'path-to-your-web-preview-component.js'
import React from 'react';

const WebPreviewComponent = () => {
  // Add your web preview content, iframe, or any other elements here
  return (
    <div>
      <iframe src="https://your-website-url.com" title="Web Preview" width="100%" height="500px" />
    </div>
  );
};

export default WebPreviewComponent;
