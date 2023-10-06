import styled from 'styled-components';

interface ContainerProps {
  $background?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $textAlign?: string;
  $marginY?: number;
  $marginX?: number | 'auto';
  $marginTop?: number;
  $marginRight?: number | 'auto';
  $marginBottom?: number;
  $marginLeft?: number | 'auto';
  $padding?: number;
  $paddingY?: number;
  $paddingX?: number;
  $paddingTop?: number;
  $paddingRight?: number;
  $paddingBottom?: number;
  $paddingLeft?: number;
}

export const groupuiSpacing = (spacing: number | string | undefined) => {
  if (!spacing) return 0;
  if (spacing === 'auto') return 'auto';
  if (typeof spacing === 'number' && spacing > 0 && spacing <= 13) return `var(--groupui-spacing-${spacing})`;
  return `${spacing}px`;
};

const Container = styled.div<ContainerProps>`
  background: ${({ $background }) => $background || 'none'};
  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
  min-width: ${({ $minWidth }) => $minWidth || '0'};
  text-align: ${({ $textAlign }) => $textAlign || 'inherit'};
  margin: ${props => `
    ${groupuiSpacing(props.$marginTop || props.$marginY)} 
    ${groupuiSpacing(props.$marginRight || props.$marginX)} 
    ${groupuiSpacing(props.$marginBottom || props.$marginY)} 
    ${groupuiSpacing(props.$marginLeft || props.$marginX)}
  `};
  padding: ${props => `
    ${groupuiSpacing(props.$paddingTop || props.$paddingY || props.$padding)} 
    ${groupuiSpacing(props.$paddingRight || props.$paddingX || props.$padding)} 
    ${groupuiSpacing(props.$paddingBottom || props.$paddingY || props.$padding)} 
    ${groupuiSpacing(props.$paddingLeft || props.$paddingX || props.$padding)}
  `};
`;

export default Container;
