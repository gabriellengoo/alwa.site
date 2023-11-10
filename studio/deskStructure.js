import React from "react";

const url = "https://alwaproduction.co.uk/";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  const targetURL = url + "?preview=true";

  if (displayed._type === "home" || displayed._type === "project") {
    const iframe = document.createElement("iframe");
    iframe.src = targetURL;
    iframe.frameBorder = 0;
    iframe.width = "1280px";
    iframe.height = "100%";

    return iframe;
  }

  return null;
};

export default () => ({
  name: 'Content',
  items: [
    {
      name: 'Home',
      child: {
        documentId: 'home',
        schemaType: 'home',
        views: [
          {
            name: 'form',
          },
          {
            name: 'Web Preview',
            component: WebPreview,
            title: 'Web Preview',
          },
        ],
      },
    },
    {
      name: 'Project',
      child: {
        documentId: 'project',
        schemaType: 'project',
        views: [
          {
            name: 'form',
          },
          {
            name: 'Web Preview',
            component: WebPreview,
            title: 'Web Preview',
          },
        ],
      },
    },
    // Add other document type items here...
  ],
});

export const getDefaultDocumentNode = ({ schemaType }) => {
  return {
    views: [
      {
        name: 'form',
      },
      {
        name: 'Web Preview',
        component: WebPreview,
        title: 'Web Preview',
      },
    ],
  };
};
