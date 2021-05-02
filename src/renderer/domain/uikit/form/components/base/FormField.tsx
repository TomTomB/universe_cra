import { LabelStyles } from '../Label';
import styled from 'styled-components';

export const FormField = styled.div`
  position: relative;
  ${LabelStyles.Label} {
    margin-bottom: 2px;
  }

  & + & {
    margin-top: 2px;
  }
`;
