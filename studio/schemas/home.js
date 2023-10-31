import { A11yEmoji } from 'a11y-react-emoji';

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // {
    //   name: 'grid',
    //   type: 'grid',
    // }, 
    // {
    //   name: "listImage",
    //   title: "List main image",
    //   type: "image",
    //   hidden: ({ parent, value }) =>
    //     (!value && parent?.spacer) || (!value && parent?.video),
    // },
    {
      name: 'listImage',
      title: 'List Main Image',
      type: 'url',
    },
    {
      name: 'grid2',
      title: 'Home grid',
      type: 'grid2',
    },
    // {
    //   name: "sections",
    //   title: "Grid Sections",
    //   type: "array",
      // options: {
      //   layout: "grid",
      // },
      // of: [
      //   {
      //     name: "section",
      //     title: "Add grid",
      //     type: "object",
      //     options: {
      //       layout: "grid",
      //     },
      //     fields: [
      //       {
      //         name: "title",
      //         title: "Title",
      //         type: "string",
      //       },
      //       {
      //         name: 'grid',
      //         title: "Row landscape based",
      //         type: 'grid',
      //       },
      //       {
      //         name: 'grid2',
      //         title: "Row portrait based",
      //         type: 'grid2',
      //       },
      //     ],
      //     preview: {
      //       select: {
      //         title: 'title',
      //       },
      //     },        
      //   },
      // ],
    // },
  ],
  preview: {
    select: {
      title: 'title',
    },
    // prepare(selection) {
    //   const { title } = selection;
    //   return {
    //     title: `📽️ ${title}`,
    //   };
    // },
  },
};
