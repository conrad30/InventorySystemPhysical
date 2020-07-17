const defaultState = () =>{
    return {
      showMenu: false,
      profileMenu: false

    }
};

export const state = () => defaultState();

export const mutations = {
    toggleMenu(state){
    state.showMenu = !state.showMenu
  },
  toggleProfileMenu = !state.profileMenu

}
