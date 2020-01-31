export default options => ({
  namespaced: true,
  state: () => ({
    options,
    selector: undefined,
    editSidebar: false,
    editSidebarType: undefined,
    richTextWatcher: 0,
  }),
  actions: {
    selectComponent({ commit }, actionType) {
      this.$whppt.clearSelected();
      this.$whppt.clearSelectedContentsFormatting();
      this.$whppt.clearEditingElementFormatting();
      commit('componentSelected', actionType);
    },
  },
  mutations: {
    componentSelected(state, actionType) {
      state.editSidebar = false;
      if (state.selector === actionType) {
        state.selector = undefined;
        return;
      }
      state.selector = actionType;
    },
    editInSidebar(state, { type, data }) {
      state.editSidebar = true;
      state.editSidebarType = type;
      state.richTextWatcher = state.richTextWatcher + 1;
    },
    closeSidebar(state) {
      state.editSidebar = false;
      state.editSidebarType = undefined;
    },
  },
  getters: {},
});
