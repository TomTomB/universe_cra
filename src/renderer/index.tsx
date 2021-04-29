import * as Styles from '@universe/renderer/style';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
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
          <h1>Universe</h1>
          {/* <RootView /> */}
        </ThemeProvider>
      </>
    </StyleSheetManager>
  </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
