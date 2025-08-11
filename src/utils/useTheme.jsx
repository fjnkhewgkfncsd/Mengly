import {useContext} from 'react'
import { ThemeContext } from './themeContext.jsx';

const useTheme = () => {
    return useContext(ThemeContext);
}
export default useTheme;
