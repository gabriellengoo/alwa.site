// store/index.js
export const state = () => ({
    meta: [],
    metaemails: [],
  });
  
  export const mutations = {
    setMeta(state, data) {
      state.meta = data;
    },
    setMetaEmails(state, data) {
      state.metaemails = data;
    },
  };
  