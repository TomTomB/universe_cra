import * as Styles from '@universe/renderer/style';
import { Provider } from 'react-redux';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import React from 'react';
// import RootView from './modules/Shell/views/Root';
// import UpdaterIPC from '@core/components/UpdaterIPC';
import { render } from 'react-dom';
import store from '@universe/renderer/store';

render(
  <Provider store={store}>
    <StyleSheetManager disableVendorPrefixes>
      <>
        <Styles.Reset />
        <Styles.FontFaces />

        {/* <UpdaterIPC /> */}
        <ThemeProvider theme={Styles.theme}>
          <Styles.Scrollbar />
          <Styles.BodyTypography />
          <Styles.HeadingTypography />
          <h1
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
            }}
          >
            Universe
          </h1>
          {/* <RootView /> */}
        </ThemeProvider>
      </>
    </StyleSheetManager>
  </Provider>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
