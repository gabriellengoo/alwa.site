export default {
  name: "about",
  title: "About",
  type: "document",
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
};
