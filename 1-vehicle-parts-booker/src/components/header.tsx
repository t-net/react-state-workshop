import React from 'react';
import {
  GroupuiActionArea,
  GroupuiActionAreaPopoverItem,
  GroupuiHeader,
  GroupuiHeadline,
  GroupuiIcon,
} from "@group-ui/group-ui-react";
import styled from "styled-components";
import Cart from "@/components/cart";

const FlexGroupuiHeader = styled(GroupuiHeader)`
  display: flex;
  justify-content: center;
`;

const AppTitle = styled(GroupuiHeadline)`
  flex: 1;
  color: var(--groupui-vwag-color-white);
`;

const Header = () => (
  <FlexGroupuiHeader>
    <AppTitle heading="h5">Vehicle Parts Booker</AppTitle>
    <GroupuiActionArea>
      <GroupuiActionAreaPopoverItem>
        <span slot="parent"><GroupuiIcon name="shopping-cart-32" /></span>
        <div slot="content">
          <Cart />
        </div>
      </GroupuiActionAreaPopoverItem>
    </GroupuiActionArea>
  </FlexGroupuiHeader>
);

export default Header;
