import { loginReducer } from 'app/features/login/reducers';
import { loaderReducer } from '../components/CustomIndicator/redux/reducers';
import { languageReducer } from '../config/languageProvider/redux/LanguageReducer';
import NetworkStateReducer from '../Network/reducer';

export {
    loginReducer,
    languageReducer,
    loaderReducer,
    NetworkStateReducer,
};
