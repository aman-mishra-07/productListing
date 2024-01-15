const ACTION = {
    'Add': 'addToCart',
    'Remove': 'removeFromCart',
    'Increase': 'increaseQty',
    'Decrease': 'decreaseQty',
}

const cartReducer = (cart, action) => {
    switch (action.type) {
        case ACTION.Add: {
            return [...cart, { ...action.payload, qty: 1 }];
        }
        case ACTION.Remove: {
            return cart.filter(product => product.id !== action.payload.id)
        }
        case ACTION.Increase: {
            return cart.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        qty: product.qty + 1
                    }
                }
                else {
                    return product;
                }
            })
        }
        case ACTION.Decrease: {
            return cart.map((product) => {
                if (product.id === action.payload.id && product.qty > 1) {
                    return {
                        ...product,
                        qty: product.qty - 1
                    }
                }
                else {
                    return product;
                }
            })
        }
    }
    throw Error("Unknown action: " + action.type);
};

export { cartReducer, ACTION }