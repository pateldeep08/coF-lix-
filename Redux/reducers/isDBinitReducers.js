const isDBinitReducer = (state = true, action) => {
    switch (action.type) {
        case 'DB_INIT':
            return false 
        default:
            return state
    }

}

export default isDBinitReducer