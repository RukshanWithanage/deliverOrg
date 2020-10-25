import { NavigationActions } from 'react-navigation';
let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params, key) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
            key
        })
    );
}

function goBack(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}

export default {
    navigate,
    goBack,
    setTopLevelNavigator
};
