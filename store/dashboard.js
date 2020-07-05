const defaultState = () =>{
    return {
        showMenu: false
    }
};

export const state = () => defaultState();

export const mutations = {
    toggleMenu(state){
    state.showMenu = !state.showMenu
    }
}