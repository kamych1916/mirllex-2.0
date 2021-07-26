export const state = () => ({
  showMenuModal: false,
})

export const mutations = {
  toggleMenuModal( state ) {
      state.showMenuModal = ! state.showMenuModal;
  },

  closeMenuModal( state ) {
      state.showMenuModal = false;
  },

  variablesNull( state ) {
      state.showMenuModal   = false;
      state.showSearchModal = false;
  }
}

export const getters = {
 showMenuModal: state => state.showMenuModal,
}
