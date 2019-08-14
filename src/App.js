import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider} from './contexts/ThemeContext';
import {LanguageProvider} from './contexts/LanguageContext';

    const muiTheme = createMuiTheme({
      palette: {
        primary: {
          main: '#16a085',
        },
        secondary: {
          main: '#3498db',
        },
    
      },
    });


    export default function App(){
      return (
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider>
              <PageContent>
                  <LanguageProvider>
                      <Navbar/>
                          <Form/>
                  </LanguageProvider>
                </PageContent>
          </ThemeProvider>
        </MuiThemeProvider>
      );
    }

