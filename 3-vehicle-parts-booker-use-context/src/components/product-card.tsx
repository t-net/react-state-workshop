import { GroupuiButton, GroupuiCard, GroupuiHeadline, GroupuiIcon, GroupuiText } from "@group-ui/group-ui-react";
import React, { useState } from "react";
import styled from "styled-components";
import Container from "@/components/styled/container";
import Flexbox from "@/components/styled/flexbox";
import Product from "@/types/product";
import useCartContext from "@/hooks/use-cart-context";

const GridCard = styled(GroupuiCard)`
  flex: 1;
  min-width: 300px;
`;

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCartContext();
  const [count, setCount] = useState(1);

  const onMinus = () => setCount((prevCount) => Math.max(1, prevCount - 1));
  const onPlus = () => setCount((prevCount) => prevCount + 1);

  return (
    <GridCard>
      <Container $marginBottom={7}>
        <GroupuiHeadline heading="h3">{product.name}</GroupuiHeadline>
        <GroupuiText>{product.description}</GroupuiText>
      </Container>
      <Flexbox $gap={4} $justifyContent="flex-start">
        <Flexbox $gap={5} $background="var(--groupui-vwag-color-grey-100)">
          <GroupuiButton
            variant="secondary"
            type="button"
            title={`Add less ${product.name}`}
            onClick={onMinus}
            disabled={count <= 1}
          >
            <GroupuiIcon name="minus-24" />
          </GroupuiButton>
          <GroupuiText>{count}</GroupuiText>
          <GroupuiButton
            variant="secondary"
            type="button"
            title={`Add more ${product.name}`}
            onClick={onPlus}
          >
            <GroupuiIcon name="plus-24" />
          </GroupuiButton>
        </Flexbox>
        <GroupuiButton
          type="button"
          title={`Add ${product.name} to cart`}
          onClick={() => addToCart(product, count)}
        >
          Add to cart
        </GroupuiButton>
      </Flexbox>
    </GridCard>
  );
};

export default ProductCard;
