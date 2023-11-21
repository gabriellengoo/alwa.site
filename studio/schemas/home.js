import { A11yEmoji } from 'a11y-react-emoji';
import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;


export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  // icon: "🏠",
  // icon: '🏠',
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'grid2',
      title: 'Home grid',
      type: 'grid2',
    },
       {
      name: "meta",
      title: "About text first paragraph",
      description: "This will be the paragraph inline with the logo",
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
      name: "sections",
      title: "Rest of about text",
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
            // {
            //   name: "image",
            //   title: "Logo",
            //   type: "image",
            // },
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
      name: "metaemails",
      title: "Meta Emails",
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
          preview: {
            select: {
              title: "content",
              subtitle: "title",
            },
          },
        },
      ],
    },
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
