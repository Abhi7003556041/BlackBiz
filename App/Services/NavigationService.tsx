import { StackActions, DrawerActions, CommonActions, NavigationContainerRef } from '@react-navigation/native'

let _navigator: NavigationContainerRef<ReactNavigation.RootParamList>

function setTopLevelNavigator(r: NavigationContainerRef<ReactNavigation.RootParamList> | null) {
    if (r) _navigator = r
}

function navigate(routeName: string, params?: object) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params
        })
    )
}

function replace(routeName: string, params?: object) {
    _navigator.dispatch(
        StackActions.replace(routeName, params)
    )
}

function openDrawer() {
    _navigator.dispatch(DrawerActions.openDrawer())
}
function closeDrawer() {
    _navigator.dispatch(DrawerActions.closeDrawer())
}

function back() {
    _navigator.dispatch(CommonActions.goBack())
}

const NavigationService = {
    navigate,
    setTopLevelNavigator,
    openDrawer,
    closeDrawer,
    back,
    replace
}

export default NavigationService