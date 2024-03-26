import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put,
    select
} from 'redux-saga/effects';

export const fetch_enquiry_list = function* (action) {
    yield put({
        type: API.CONTACT_US.ENQUIRY_LIST.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.ENQUIRY_LIST.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.CONTACT_US.ENQUIRY_LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.ENQUIRY_LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_customer_complains = function* (action) {
    yield put({
        type: API.CONTACT_US.CUSTOMER_COMPLAINS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.CUSTOMER_COMPLAINS.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.CONTACT_US.CUSTOMER_COMPLAINS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.CUSTOMER_COMPLAINS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_customer_complain_details = function* (action) {
    yield put({
        type: API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_customer_feedbacks = function* (action) {
    yield put({
        type: API.CONTACT_US.CUSTOMER_FEEDBACKS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.CUSTOMER_FEEDBACKS.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.CONTACT_US.CUSTOMER_FEEDBACKS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.CUSTOMER_FEEDBACKS.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_customer_feedback_details = function* (action) {
    yield put({
        type: API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_meta_details = function* (action) {
    yield put({
        type: API.CONTACT_US.META_DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.META_DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.CONTACT_US.META_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.META_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_meta_update = function* (action) {
    yield put({
        type: API.CONTACT_US.META_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        formData.append("id", action.payload.id);
        formData.append("title", action.payload.title);
        formData.append("slug", action.payload.slug);
        formData.append("meta_title", action.payload.meta_title);
        formData.append("meta_description", action.payload.meta_description);
        formData.append("meta_keywords", action.payload.meta_keywords);
        formData.append("status", action.payload.status);

        if (action.payload.bannerFile) {
            formData.append("banner", action.payload.bannerFile);
        }
        if (action.payload.thumbnailFile) {
            formData.append("thumbnail", action.payload.thumbnailFile);
        }

        let response = yield reqToAPI({
            url: `${API.CONTACT_US.META_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        yield put({
            type: API.CONTACT_US.META_UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONTACT_US.META_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};
