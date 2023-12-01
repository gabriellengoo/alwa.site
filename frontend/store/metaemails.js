// store/index.js
export const state = () => ({
    meta: [],
    metaemails: [],
    // thumbnailTime,
    // year: [],
  });
  
  export const mutations = {
    setMeta(state, data) {
      state.meta = data;
    },
    setMetaEmails(state, data) {
      state.metaemails = data;
    },

    // setThumbnailTime(state, data){
    //   state.thumbnailTime = data;
    // }
    // setYear(state, data) {
    //   state.year = data;
    // },
  };
  