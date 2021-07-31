const conReducer = (state = '', action) => {
	switch (action.type) {
		case 'GET_DATA':
			state = {
				...state,
				loading: true,
				data: action.payload,				
			};
			return state;
			break;
		case 'GET_DATA_DONE':
			state = {
				...state,
				loading: false,
				data: action.payload,
			};
			return state;
		case 'GET_POST_FAILURE':
			state = {
				...state,
				loading: false,
				errors: action.payload
			};
			return state;
		
		default:
			return state;
	}
};
export default conReducer;
