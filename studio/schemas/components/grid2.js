import React from "react";

import { RiNumber0 } from "react-icons/Ri";
import { RiNumber1 } from "react-icons/Ri";
import { RiNumber2 } from "react-icons/Ri";
import { RiNumber3 } from "react-icons/Ri";
import { RiNumber4 } from "react-icons/Ri";
import { RiNumber5 } from "react-icons/Ri";
import { RiNumber6 } from "react-icons/Ri";
import { RiNumber7 } from "react-icons/Ri";

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
        // {
        //   name: "imageWidth",
        //   title: "Image Width",
        //   type: "number",
        //   description: "Set the width of the image in viewporth width",
        //   validation: (Rule) => Rule.min(0).integer(),
        // },
        {
          name: "imageWidth",
          title: "Image Width",
          type: "number",
          description: "Set the width of the image in viewport width",
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'listImage',
          title: 'List Main Image',
          description: "This will be the image you see first on the list, only set the first grid image url",
          type: 'url',
        },
        // {
        //   name: "imageWidth",
        //   title: "Image Width",
        //   type: "string",
        //   hidden: ({ parent, value }) =>
        //   !value && (parent?.spacer || parent?.link),
        //   description: "Set the width of the image in pixels",
        // },
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
          name: "reference",
          title: "Reference",
          type: "reference",
          to: {
            type: "project",
          },
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.link),
        },
        // {
        //   name: "link",
        //   title: "Link",
        //   type: "url",
        //   hidden: ({ parent, value }) =>
        //     !value && (parent?.spacer || parent?.reference),
        // },
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
        {
          name: "year",
          title: "Alwa Role",
          description: " This is the footer on project pages",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
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
        },
        prepare(selection) {
          const { image, spacer, video } = selection;
          let media;
          if (video) {
            // media = (
            //   <img
            //     src={`https://image.mux.com/${video}/animated.gif`}
            //     style={{
            //       objectFit: "cover",
            //       height: "100%",
            //       width: "100%",
            //     }}/>
            // );
          media = document.createElement("img");
          media.src = `https://image.mux.com/${video}/animated.gif`;
          media.style.objectFit = "cover";
          media.style.height = "100%";
          media.style.width = "100%";
          } else if (image) {
            media = image;
          }
          return {
            media: video
              ? media
              : image
              ? media
              : spacer == "1"
              ? RiNumber1
              : spacer == "2"
              ? RiNumber2
              : spacer == "3"
              ? RiNumber3
              : spacer == "4"
              ? RiNumber4
              : spacer == "5"
              ? RiNumber5
              : spacer == "6"
              ? RiNumber6
              : spacer == "7"
              ? RiNumber7
              : RiNumber0,
          };
        },
      },
    },
  ],
};
