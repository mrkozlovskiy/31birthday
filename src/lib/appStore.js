export const appStore = {
    login: false,
    happyBirthday: false,
    step1: false,
    step2: false
}

export const setAppStore = (value = appStore) => {
    localStorage.setItem('appStore', JSON.stringify(value));
}

export const setAppStoreItem = (name, value) => {
    let _appStore = getAppStore();
    _appStore[name] = value;
    setAppStore(_appStore);
}

export const getAppStore = () => {
    return JSON.parse(localStorage.getItem('appStore'));
}