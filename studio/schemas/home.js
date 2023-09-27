
// import grid from './components/grid'

// schemas/pet.js
// export default {
//   name: 'home',
//   type: 'document',
// 	title: 'Home',
//   fields: [
//     {
//       name: "grid",
//       type: "grid",
//     },
//   ],
// }






export default {
  name: "home",
  title: "Home",
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
};
