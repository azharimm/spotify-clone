export const initialState = {
    user: null,
    token: null,
    // token: 'BQDuSGdJX6sGMVhzy8YwIE8WV34150K0UBgpjPUBYD6PxcTk2_9-tKGs2wiL2VAF6-8T_uP8Gniak-UUOtMiAOoTMGqInojvs1Ra9BJiCnOLQFe3GakrQjZfFd6tb93KDJ3y0r8X32lsUIQgkV1EeVq5dZU0kvrRP0Evh0sRTC6KVQj2',
    playlists: [],
    playing: false,
    discover_weekly: null,
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
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;