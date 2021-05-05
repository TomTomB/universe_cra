import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import contentGradientMaskBothHorizontal from './assets/images/content-gradient-mask-both-horizontal-no-scrollbar.png';
import contentGradientMaskBothVertical from './assets/images/content-gradient-mask-both-no-scrollbar.png';
import contentGradientMaskBottom from './assets/images/content-gradient-mask-bottom-no-scrollbar.png';
import contentGradientMaskLeft from './assets/images/content-gradient-mask-left-no-scrollbar.png';
import contentGradientMaskRight from './assets/images/content-gradient-mask-right-no-scrollbar.png';
import contentGradientMaskTop from './assets/images/content-gradient-mask-top-no-scrollbar.png';
import styled from 'styled-components';

export const StyledScrollContainer = styled(OverlayScrollbarsComponent)`
  &.with-overflow-masks {
    &.vertical {
      &[data-scrolled-top='false'][data-scrolled-bottom='true'] {
        -webkit-mask-box-image-source: url(${contentGradientMaskTop});
        -webkit-mask-box-image-slice: 18 8 0 0 fill;
      }
      &[data-scrolled-top='true'][data-scrolled-bottom='false'] {
        -webkit-mask-box-image-source: url(${contentGradientMaskBottom});
        -webkit-mask-box-image-slice: 0 8 18 0 fill;
      }
      &[data-scrolled-top='false'][data-scrolled-bottom='false'] {
        -webkit-mask-box-image-source: url(${contentGradientMaskBothVertical});
        -webkit-mask-box-image-slice: 18 8 18 0 fill;
      }
    }
    &.horizontal {
      &[data-scrolled-left='false'][data-scrolled-right='true'] {
        -webkit-mask-box-image-source: url(${contentGradientMaskLeft});
        -webkit-mask-box-image-slice: 0 18 8 0 fill;
      }
      &[data-scrolled-left='true'][data-scrolled-right='false'] {
        -webkit-mask-box-image-source: url(${contentGradientMaskRight});
        -webkit-mask-box-image-slice: 0 0 8 18 fill;
      }
      &[data-scrolled-left='false'][data-scrolled-right='false'] {
        -webkit-mask-box-image-source: url(${contentGradientMaskBothHorizontal});
        -webkit-mask-box-image-slice: 0 18 8 18 fill;
      }
    }
  }

  .os-scrollbar {
    .os-scrollbar-handle {
      background-color: ${(props) => props.theme.colors.gold[5]} !important;
    }
    &:hover {
      .os-scrollbar-handle {
        background-color: ${(props) => props.theme.colors.gold[3]} !important;
      }
    }
    &.active {
      .os-scrollbar-handle {
        background-color: ${(props) => props.theme.colors.gold[6]} !important;
      }
    }
  }
`;

export const ScrollPoint = styled.div`
  position: absolute;
`;

export const ScrollPointTop = styled(ScrollPoint)`
  top: 0;
  left: 0;
`;

export const ScrollPointBottom = styled(ScrollPoint)`
  bottom: 0;
  left: 0;
`;

export const ScrollPointLeft = styled(ScrollPoint)`
  left: 0;
  top: 0;
`;

export const ScrollPointRight = styled(ScrollPoint)`
  right: 0;
  top: 0;
`;

export const InnerScrollContainer = styled.div`
  position: relative;
`;
