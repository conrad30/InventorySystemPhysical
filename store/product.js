const defaultState = () => {
    return {
    bean: '',
    roastLevel: '',
    roastLevelList: ['Light Roast', 'Medium Roast', 'Dark Roast'],
    weightPerPack: '',
    weightBeforeRoast: '',
    weightAfterRoast: '',
    profile: '',
    selectedStock: {
    price: 500,
    purchasedStock: 15
    }
    }
    };
    export const state = () => defaultState();

    export const mutations = {
        resetStore: (state) => {
        Object.assign(state, defaultState());
        },
        setBean: (state, bean) =>{
        state.bean = bean
        },
        setRoastLevel: (state, roastLevel) =>{
        state.roastLevel = roastLevel
        },
        setWeightPerPack: (state, weightPerPack) =>{
        state.weightPerPack = weightPerPack
        },
        setWeightBeforeRoast: (state, weightBeforeRoast) =>{
        state.weightBeforeRoast = weightBeforeRoast
        },
        setWeightAfterRoast: (state, weightAfterRoast) =>{
        state.weightAfterRoast = weightAfterRoast
        },
        setProfile: (state, profile) =>{

            state.profile = profile
        },

    }