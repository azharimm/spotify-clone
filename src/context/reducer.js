export const initialState = {
    user: null,
    token: 'BQD_xJ0gzxI10UOuldDW5CBOvaGI_xxDdZi9Hw-rD_AYa7m9qoxwCggOrEG4PLkmx5sRwYzH39okHJt0qGBjBsCZ2-BxcB1_BpL_dXrMQ1d--KrhCTdKEDZ43cihNDyi3O9BQUkrJ3ZK4_dTQXgQYZCqpYCdPwaq8Ghe7MyTtzo6Ljou',
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;