import API from "../../constants/API_Constants";
import * as APP_CONSTANTS from "../../constants/Constants";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const initialState = {
    processing: false,
    error: false,
    errors: [],
    message: '',
    list: [],
    details: {},
    metaDetails: {},
    page: 1,
    total: 0,
    totalPages: 0,
    redirectTo: null
};

export const Accreditations_Reducers = (state = initialState, action) => {
    switch (action.type) {
        case API.ACCREDITATIONS.LIST.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.list = [];
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.LIST.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.total = action.payload.totalFound;
            state.totalPages = action.payload.totalPages;
            state.list = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.LIST.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.list = [];
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.ACCREDITATIONS.ADD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.ADD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = '/admin/accreditations/list';
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.ACCREDITATIONS.ADD.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.ACCREDITATIONS.DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.details = {};
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.details = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.DETAILS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.details = {};
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };

        case API.ACCREDITATIONS.UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = "/admin/accreditations/list";
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.ACCREDITATIONS.UPDATE.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.ACCREDITATIONS.STATUS_UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.ACCREDITATIONS.STATUS_UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = null;
            state.list = state.list.map((row)=>{
                return row.id === action.payload.updateRecord.id ?action.payload.updateRecord : row;
            });
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.ACCREDITATIONS.STATUS_UPDATE.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        default:
            return { ...state };
    }
};
