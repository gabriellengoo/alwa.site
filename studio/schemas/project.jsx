import React from "react";
import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;

export default {
  name: "project",
  title: "Projects",
  type: "document",
  // liveEdit: true,
  // icon: Project,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    // {
    //   name: "metadis",
    //   title: "About Text",
    //   type: "array",
    //   options: {
    //    modal: "popover",
    //   },
    //   of: [
    //     {
    //       name: "meta",
    //       title: "Meta", 
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           title: "Title",
    //           type: "string",
    //         },
    //         {
    //           name: "content",
    //           title: "Content",
    //           type: "string",
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: "content",
    //           subtitle: "title",
    //         },
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: "metaemails",
    //   title: "About emails",
    //   type: "array",
    //   options: {
    //     modal: "popover",
    //   },
    //   of: [
    //     {
    //       name: "meta",
    //       title: "Meta",
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           title: "Title",
    //           type: "string",
    //         },
    //         {
    //           name: "content",
    //           title: "Content",
    //           type: "string",
    //         },
    //         {
    //           name: "link",
    //           title: "Link",
    //           type: "url",
    //           validation: (Rule) =>
    //             Rule.uri({
    //               scheme: ["http", "https", "mailto", "tel"],
    //             }),
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: "content",
    //           subtitle: "title",
    //         },
    //       },
    //     },
    //   ],
    // },
    {
      name: "meta",
      title: "Meta",
      type: "array",
      options: {
        modal: "popover",
      },
      of: [
        {
          name: "meta",
          title: "Meta",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "content",
              subtitle: "title",
            },
          },
        },
      ], 
    },
    {
      name: "production",
      title: "Project footer",
      description: " This is the footer on project pages",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "slider",
      title: "Slider",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          name: "slide",
          title: "Slide",
          type: "object",
          fields: [
            // {
            //   name: "fullWidth",
            //   title: "Full Width",
            //   type: "boolean",
            //   description: "Make full width on mobile",
            // },
            {
              name: "images",
              title: "Images",
              type: "array",
              options: {
                layout: "grid",
              },
              of: [
                {
                  name: "imageObject",
                  title: "Image",
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
                      name: "imageWidth",
                      title: "Image Width",
                      type: "number",
                      description: "Set the width of the image in viewporth width",
                      validation: (Rule) => Rule.min(0),
                    },
                    {
                      name: "overlayimageWidth",
                      title: "Overlay Image Width",
                      type: "number",
                      description: "Set the width of the image in viewporth width",
                      validation: (Rule) => Rule.min(0),
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

                    // {
                    //   name: "padding",
                    //   title: "Padding",
                    //   type: "string",
                    //   options: {
                    //     list: [
                    //       { title: "Large", value: "large" },
                    //       { title: "Medium", value: "medium" },
                    //       { title: "Small", value: "small" },
                    //     ],
                    //     layout: "dropdown",
                    //   },
                    // },
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
            },
          ],
          preview: {
            select: {
              image: "images.0.image",
              video: "images.0.video.asset.playbackId",
              thumbnailTime: "images.0.thumbnailTime",
            },
            prepare(selection) {
              const { image, video, thumbnailTime } = selection;
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
                // media = document.createElement("img");
                // media.src = `https://image.mux.com/${video}/animated.gif`;
                // media.style.objectFit = "cover";
                // media.style.height = "100%";
                // media.style.width = "100%";
              } else if (image) {
                media = image;
              }
              return {
                media: media,
              };
            },
          },
        },
      ],
    },

  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client.0.label",
      image: "slider.0.images.0.image",
      video: "slider.0.images.0.video.asset.playbackId",
      thumbnailTime: "slider.0.images.0.thumbnailTime",
    },
    prepare(selection) {
      const { image, title, video, subtitle, thumbnailTime } = selection;
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
        // media = document.createElement("img");
        // media.src = `https://image.mux.com/${video}/animated.gif`;
        // media.style.objectFit = "cover";
        // media.style.height = "100%";
        // media.style.width = "100%";
      } else if (image) {
        media = image;
      }
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};
