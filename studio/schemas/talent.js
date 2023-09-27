import React from "react";
import Emoji from "a11y-react-emoji";

// const Artist = () => <Emoji style={{ fontSize: "2rem" }} symbol="🎨" />;


export default {
  name: "talent",
  title: "Artists",
  type: "document",
  // icon: Artist,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "leadProject",
      title: "Lead Project",
      type: "reference",
      to: [
        {
          type: "project",
        },
      ],
      options: {
        filter: ({ document }) => {
          return {
            filter: "talent._ref == $id",
            params: {
              id: document._id,
            },
          };
        },
      },
    },
    {
      name: "hidden",
      title: "Hidden",
      type: "boolean",
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "blockContent",
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          name: "section",
          title: "Section",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "blockContent",
            },
          ],
        },
      ],
    },
    {
      name: "grid",
      type: "grid",
    },
    {
      name: "footer",
      title: "Footer",
      type: "array",
      of: [
        {
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
};
