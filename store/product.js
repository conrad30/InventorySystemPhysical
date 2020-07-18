const defaultState = () => {
    return {
        bean: '',
        roastLevel: '',
        roastLevelList: ['Light Roast', 'Medium Roast', 'Dark Roast'],
        weightPerpack: '',
        weightBeforeRoast: '',
        weightAfterRoast: '',
        profile: '',
        selectedStock: {
            price: 500,
            purchasedStock: 15
        },
        existProduct: []
    }
};
export const state = () => defaultState();

export const mutations = {
    resetStore: (state) => {
        Object.assign(state, defaultState());
    },
    setBean: (state, bean) => {
        state.bean = bean
    },
    setRoastLevel: (state, roastLevel) => {
        state.roastLevel = roastLevel
    },
    setweightPerpack: (state, weightPerpack) => {
        state.weightPerpack = weightPerpack
    },
    setweightBeforeRoast: (state, weightBeforeRoast) => {
        state.weightBeforeRoast = weightBeforeRoast
    },
    setweightAfterRoast: (state, weightAfterRoast) => {
        state.weightAfterRoast = weightAfterRoast
    },
    setProfile: (state, profile) => {

        // state.profile = profile
    },
    setExistProduct: (state, existProduct) => {
        state.existProduct = existProduct['products']
    }

}

export const actions = {
    async createProduct({ state, commit }) {

        await this.$apis.product.new(state)
        commit("resetStore") // Reset the State
        this.$router.push("/products") // Move back to product page
    },
    async getProduct({ commit }) {
        await this.$apis.product.all()
            .then(res => commit("setExistProduct", res))

    }



}