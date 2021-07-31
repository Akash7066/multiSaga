const conReducer = (state = '', action) => {
	switch (action.type) {
		
		case 'GET_SERVIES_DATA':
				state = {
					...state,
					loading: true,
					data: action.payload,				
				};
				return state;
				break;
		case 'GET_SERVIES_DATA_DONE':
				state = {
					...state,
					loading: false,
					data: action.payload,
				};
				return state;
		default:
			return state;
	}
};
export default conReducer;
