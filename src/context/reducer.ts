import React from 'react';

export interface State {
    isMobileMenuOpen: boolean;
};

export interface Action {
    type: 'TOGGLE_MOBILE_MENU';
    payload?: any;
}

export const initialState : State = {
    isMobileMenuOpen: false,
}

export default function reducer(state: State, action: Action): State {
    const { type, payload } = action
    switch (type) {
        case 'TOGGLE_MOBILE_MENU': {
            return {
                ...state,
                isMobileMenuOpen: !state.isMobileMenuOpen
            }
        }

        default: {
            throw new Error(`No case for type ${type} found in shopReducer.`);
        }

    }
};