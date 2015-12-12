const initialState = [
    {
        clicked: 0
    }
]

export default function main(state = initialState, action) {
    switch (action.type) {
        case ADD_CLICK:
            return [
                {
                    clicked: state.clicked + 1,
                },
                ...state
            ];

        default:
            return state
    }
}