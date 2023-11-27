// store/index.js
export const state = () => ({
    meta: [],
    metaemails: [],
    // year: [],
  });
  
  export const mutations = {
    setMeta(state, data) {
      state.meta = data;
    },
    setMetaEmails(state, data) {
      state.metaemails = data;
    },
    // setYear(state, data) {
    //   state.year = data;
    // },
  };
  