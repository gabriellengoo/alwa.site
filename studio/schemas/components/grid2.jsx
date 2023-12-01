// import React from "react";

// import { RiNumber0 } from "react-icons/Ri";
// import { RiNumber1 } from "react-icons/Ri";
// import { RiNumber2 } from "react-icons/Ri";
// import { RiNumber3 } from "react-icons/Ri";
// import { RiNumber4 } from "react-icons/Ri";
// import { RiNumber5 } from "react-icons/Ri";
// import { RiNumber6 } from "react-icons/Ri";
// import { RiNumber7 } from "react-icons/Ri";
// import CustomThumbnailTimeInput from "./CustomThumbnailTimeInput";

import React from "react";

// Define the custom input component
const CustomThumbnailTimeInput = ({ type, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  // Render a button element
  return (
    <div>
      <label>Thumbnail Time:</label>
      <input type={type} value={value} onChange={handleChange} />
      <button onClick={() => onChange(15)}>Set Thumbnail Time</button>
    </div>
  );
};

export default {
  
  name: "grid2",
  title: "Grid",
  type: "array",
  // liveEdit: true,
  options: {
    layout: "grid",
  },
  of: [
    
    // {
    //   name: 'listImage',
    //   title: 'List Main Image',
    //   type: 'url',
    // },
    {
      name: "item",
      title: "Item",
      type: "object",
      fields: [
        {
          name: "draft",
          title: "Draft",
          type: "boolean",
          description: "Mark this item as a draft",
        },
    
        {
          name: "imageWidth",
          title: "Image Width",
          type: "number",
          description: "Set the width of the image in viewport width",
          validation: (Rule) => Rule.min(0),
        },
      
        {
          name: "image",
          title: "Image",
          type: "image",
          hidden: ({ parent, value }) =>
            (!value && parent?.spacer) || (!value && parent?.video),
        },
        {
          name: "video",
          title: "Video",
          type: "mux.video",
          hidden: ({ parent, value }) =>
            (!value && parent?.spacer) || (!value && parent?.image),
        },
        {
          name: "thumbnailTime",
          title: "Thumbnail Time",
          type: "number",
          description: "Time in seconds for the selected thumbnail frame",
          validation: (Rule) => Rule.min(0),
          // inputComponent: CustomThumbnailTimeInput,
        },
      
        {
          name: "reference",
          title: "Reference",
          type: "reference",
          to: {
            type: "project",
          },
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.link),
        },
      
        {
          name: "title",
          title: "Title",
          type: "string",
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "photographer",
          title: "Photographer",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "styleing",
          title: "info",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "hair",
          title: "info",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "makeup",
          title: "info",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "dop",
          title: "info",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "set",
          title: "info",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        // { 
        //   name: "year",
        //   title: "Alwa Role",
        //   description: " This is the footer on project pages",
        //   type: "string",
        //   hidden: ({ parent, value }) =>
        //   !value && (parent?.spacer || parent?.reference),
        // },
        {
          name: "production",
          title: "Production or Casting",
          description: " This is what will show on the list",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "location",
          title: "Location",
          description: " This is what will show on the list",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },

      ],
      preview: {
        select: {
          spacer: "spacer",
          image: "image",
          video: "video.asset.playbackId",
          thumbnailTime: "thumbnailTime",
        },
        prepare(selection) {
          const { image, spacer, video, thumbnailTime } = selection;
          // const thumbnailTime = 15;
          let media;
          if (video) {
            media = (
              <img
              src={`https://image.mux.com/${video}/animated.gif?start=${thumbnailTime || 0}`}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
            );
          } else if (image) {
            media = image;
          }
          return {
            media: video
              ? media
              : image
              ? media
              : spacer,
          };
        },
      },
    },
  ],
};

