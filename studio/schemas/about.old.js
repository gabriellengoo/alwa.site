export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
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
      name: "contactDetails",
      title: "Contact Details",
      type: "array",
      of: [
        {
          name: "Contact",
          title: "contact",
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
