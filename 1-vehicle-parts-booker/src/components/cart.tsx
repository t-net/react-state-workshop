import React, { Fragment } from 'react';
import { GroupuiDivider, GroupuiText } from "@group-ui/group-ui-react";
import CartItem from "@/types/cart-item";
import Container from "@/components/styled/container";
import Flexbox from "@/components/styled/flexbox";
import { BlueHeadline } from "@/components/styled/blue-text";

// replace these with the items from the state
const cartItems: CartItem[] = [];

const Cart = () => (
  <div data-testid="cart">
    {!cartItems.length
      ? (
        <Container $minWidth="300px" $paddingX={6} $paddingY={4}>
          <GroupuiText size="body-2">No items have been added to your cart</GroupuiText>
        </Container>
      )
      : (
        <>
          {cartItems.map((item) => (
            <Fragment key={item.product.id}>
              <Container $minWidth="300px">
                <Flexbox $background="var(--groupui-vwag-color-grey-100)">
                  <Container $paddingX={6} $paddingY={4} $background="var(--groupui-vwag-color-white)">
                    <GroupuiText weight="bold">{item.product.name}</GroupuiText>
                    <GroupuiText size="label">{item.product.description}</GroupuiText>
                  </Container>
                  <Container $minWidth="70px" $textAlign="center">
                    <BlueHeadline heading="h5">{item.quantity}</BlueHeadline>
                  </Container>
                </Flexbox>
              </Container>
              <GroupuiDivider />
            </Fragment>
          ))}
        </>
      )}
  </div>
);
export default Cart;
