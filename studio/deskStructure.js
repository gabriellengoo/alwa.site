import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import Emoji from "a11y-react-emoji";
const Home = () => <Emoji style={{ fontSize: "2rem" }} symbol="🏠" />;


const url = "https://alwa.co.uk/";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  if (displayed._type === "home") {
    const targetURL = url + "?preview=true";
    return (
      <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
    );
  } else {
    const targetURL = url + `?preview=true`;
    return (
      <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
    );
  }
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .icon(Home)
        .child(
          S.document()
            .schemaType("home")
            .documentId("home")
            .title("Home")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
        ),
      ...S.documentTypeListItems()
        .filter((listItem) => !["home"].includes(listItem.getId())),
    ]);
export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web Preview"),
  ]);
};
