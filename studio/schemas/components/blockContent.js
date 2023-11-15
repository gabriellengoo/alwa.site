/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";

import { GoFileSymlinkFile } from "react-icons/go";
import { AiOutlineHighlight } from "react-icons/ai";
// import { FaHeading } from "react-icons/fa";
// import { AiOutlineAlignCenter } from "react-icons/Ai";

// const groupRender = (props) => (
//   <span style={{ background: "yellow" }}>{props.children}</span>
// );
// const headingRender = (props) => (
//   <span style={{ fontSize: "20px", display: "block" }}>{props.children}</span>
// );
// const centerRender = (props) => (
//   <span style={{ textAlign: "center" }}>{props.children}</span>
// );

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  // liveEdit: true,
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [],
        // Annotations can be any object structure – e.g. a link or a footnote.

        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "reference",
            to: [{ type: "project" }],
            icon: GoFileSymlinkFile,
          },
        ],
      },
    },
  ],
};
