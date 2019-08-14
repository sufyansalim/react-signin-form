import React, {useContext} from 'react'
import {ThemeContext} from './contexts/ThemeContext';

export default function PageContent(props){
        const {isDarkMode} = useContext(ThemeContext);
        const styles={
            backgroundColor: isDarkMode ? "#2c3e50" : '#ecf0f1',
            height: "100vh",
            width: "100vw"
        }
        return(
            <div style={styles}>
                {props.children}
            </div>
        );
    }
