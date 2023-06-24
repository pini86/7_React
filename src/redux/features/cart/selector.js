export const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => {
    return selectCartModule(state)[id] || 0;
};
