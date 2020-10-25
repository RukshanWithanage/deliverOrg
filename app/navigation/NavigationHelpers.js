import NavigationService from './NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('CustomerQueue', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToLastView(params) {
    NavigationService.navigate('LastVC', params);
}