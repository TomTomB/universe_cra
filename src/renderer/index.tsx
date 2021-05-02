import * as Styles from '@universe/renderer/style';
import styled, { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import React from 'react';
// import RootView from './modules/Shell/views/Root';
// import UpdaterIPC from '@core/components/UpdaterIPC';
import { render } from 'react-dom';
import store from '@universe/renderer/store';

const RedHeading = styled.h2`
  color: ${(props) => props.theme.colors.grey[1]};
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.1em;
  -webkit-font-smoothing: subpixel-antialiased;
  transition: 300ms color ${(props) => props.theme.easing.soft};

  &.is-invalid {
    color: ${(props) => props.theme.colors.mage[2]};
  }
`;

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
          <RedHeading>I am red</RedHeading>
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
