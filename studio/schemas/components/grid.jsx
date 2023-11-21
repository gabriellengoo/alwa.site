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
  name: "grid",
  title: "Grid",
  type: "array",
  liveEdit: true,
  options: {
    layout: "grid",
  },
  of: [
    {
      name: "item",
      title: "Item",
      type: "object",
      fields: [
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
        // {
        //   name: "spacer",
        //   title: "Spacer",
        //   type: "string",
        //   options: {
        //     list: ["0", "1", "2", "3", "4", "5", "6", "7"],
        //     layout: "dropdown",
        //   },
        //   hidden: ({ parent, value }) =>
        //     (!value && parent?.image) || (!value && parent?.video),
        // },
        // {
        //   name: "double",
        //   title: "Double",
        //   type: "boolean",
        // },
        // {
        //   name: "position",
        //   title: "Position",
        //   type: "string",
        //   hidden: ({ parent, value }) => !value && parent?.spacer,
        //   options: {
        //     list: [
        //       { title: "Left", value: "left" },
        //       { title: "Center", value: "center" },
        //       { title: "Right", value: "right" },
        //     ],
        //     layout: "dropdown",
        //   },
        // },
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
          title: "Styleing",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "hair",
          title: "Hair",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "year",
          title: "Alwa Role",
          description: " this is the footer",
          type: "string",
          hidden: ({ parent, value }) =>
          !value && (parent?.spacer || parent?.reference),
        },
        {
          name: "production",
          title: "Production or Casting",
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
            media = (
              <img
                src={`https://image.mux.com/${video}/animated.gif`}
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
