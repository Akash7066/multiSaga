export const getData = (data) => {
	return {
		type: 'GET_DATA',
		payload: data,
		check:1
	};
};

export const doneData = (data) => {
	return {
		type: 'GET_DATA_DONE',
		payload: data,
		check:0
	};
};
export const loadFail = (e) => {
	return {
		type: 'GET_POST_FAILURE',
		payload: e
	};
};

export const getServiesData = (data) => {
	return {
		type: 'GET_SERVIES_DATA',
		payload: data,
		check:1
	};
};

export const doneServiesData = (data) => {
	return {
		type: 'GET_SERVIES_DATA_DONE',
		payload: data,
		check:0
	};
};
// 

export const getSideInfoData = (data) => {
	return {
		type: 'GET_SITE_INFO_DATA',
		payload: data,
		check:1
	};
};

export const doneSideInfoData = (data) => {
	return {
		type: 'GET_SITE_INFO_DATA_DONE',
		payload: data,
		check:0
	};
};
// 

export const getContactData = (data) => {
	return {
		type: 'GET_CONTACT_DATA',
		payload: data,
		check:1
	};
};

export const doneContactData = (data) => {
	return {
		type: 'GET_CONTACT_DATA_DONE',
		payload: data,
		check:0
	};
};
// 

export const getSitePageData = (data) => {
	return {
		type: 'GET_SITE_PAGE_DATA',
		payload: data,
		check:1
	};
};

export const doneSitePageData = (data) => {
	return {
		type: 'GET_SITE_PAGE_DATA_DONE',
		payload: data,
		check:0
	};
};
// 

export const getUserQuriesData = (data) => {
	return {
		type: 'GET_USER_QURIES_DATA',
		payload: data,
		check:1
	};
};

export const doneUserQuriesData = (data) => {
	return {
		type: 'GET_USER_QURIES_DONE',
		payload: data,
		check:0
	};
};

// 

export const getServiesQuriesData = (data) => {
	return {
		type: 'GET_SERVIES_QURIES_DATA',
		payload: data,
		check:1
	};
};

export const doneServiesQuriesData = (data) => {
	return {
		type: 'GET_SERVIES_QURIES_DONE',
		payload: data,
		check:0
	};
};