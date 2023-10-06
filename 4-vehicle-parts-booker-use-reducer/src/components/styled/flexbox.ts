import styled from 'styled-components';

interface Props {
  $background?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $wrap?: string;
  $gap?: number;
  $direction?: string;
}

const Flexbox = styled.div<Props>`
  background: ${({ $background }) => $background || 'none'};
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'space-between'};
  gap: ${({ $gap }) => ($gap ? `var(--groupui-spacing-${$gap})` : '0')};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  flex-direction: ${({ $direction }) => $direction || 'row'};
`;

export default Flexbox;
