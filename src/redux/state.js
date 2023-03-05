const IS_LOADING = "IS_LOADING";
const IS_LOADED = "IS_LOADED";
const PAGE_LOADED = "PAGE_LOADED";
const SET_PAGE_DATA = "SET_PAGE_DATA";

const POPUP_LOGIN = "POPUP_LOGIN";
const POPUP_REGISTRATION = "POPUP_REGISTRATION";
const POPUP_SUPPORT = "POPUP_SUPPORT";
const POPUP_CLOSE = "POPUP_CLOSE";

let store = {
  _state: {
    basePath:
      window.location.origin === "https://tests.bambus.com.ua"
        ? "/kryla/"
        : "/",
    headerInverted: true,
    logIn: false,
    registration: false,
    support: false,
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  logIn() {
    this._state.logIn = this._state.logIn ? false : true;
    this._state.logIn && (this._state.registration = false);
    this._callSubscriber(this.getState());
  },
  registration() {
    this._state.registration = this._state.registration ? false : true;
    this._state.registration && (this._state.logIn = false);

    this._callSubscriber(this.getState());
  },
  support() {
    this._state.support = this._state.support ? false : true;
    this._callSubscriber(this.getState());
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  togglePopUps(action) {
    switch (action.type) {
      case POPUP_LOGIN:
        this._state.logIn = true;
        this._state.registration = false;
        this._callSubscriber(this.getState());
        break;
      case POPUP_REGISTRATION:
        this._state.logIn = false;
        this._state.registration = true;
        this._callSubscriber(this.getState());
        break;
      case POPUP_SUPPORT:
        this._state.support = true;
        this._callSubscriber(this.getState());
        break;
      case POPUP_CLOSE:
        this._state.logIn = false;
        this._state.support = false;
        this._state.registration = false;
        this._callSubscriber(this.getState());
        break;
      default:
        break;
    }
  },
  dispatch(action) {
    switch (action.type) {
      case IS_LOADED:
        this._state.isLoaded = action.bool;
        this._callSubscriber(this.getState());
        break;
      case PAGE_LOADED:
        this._state.pageLoaded = action.bool;
        this._callSubscriber(this.getState());
        break;
      case IS_LOADING:
        this._state.isLoading = action.bool;
        this._callSubscriber(this.getState());
        break;
      case SET_PAGE_DATA:
        this._state.page = action.data;
        this._callSubscriber(this.getState());
        break;
      default:
        break;
    }
  },
};

export const closePopUps = () => ({ type: POPUP_CLOSE });
export const openReg = () => ({ type: POPUP_REGISTRATION });
export const openLogIn = () => ({ type: POPUP_LOGIN });
export const openSupport = () => ({ type: POPUP_SUPPORT });

export default store;
