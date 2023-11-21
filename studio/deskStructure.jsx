import { MdSettings, MdColorLens, MdMenu, MdHome } from 'react-icons/md'; // Import icons from react-icons library

export const deskStructure = (S) =>
  S.list()
    .title('ALWA 💫 ') 
    .items([
      // S.listItem()
      //   .title('Home')
      //   .icon(() => <MdHome />)
      //   .child(
      //     S.editor()
      //       .id('homePage') // Make sure this ID is unique
      //       .schemaType('homePage')
      //       .documentId('homePage')
      //   ),
      // S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['homePage'].includes(listItem.getId())
      ),
    ]);
