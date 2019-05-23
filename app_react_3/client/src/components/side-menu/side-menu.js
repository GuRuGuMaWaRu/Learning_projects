import React from "react";
import PropTypes from "prop-types";
import SideMenuItem from "../side-menu-item/side-menu-item";

class SideMenu extends React.Component {
  componentDidMount() {
    this.props.getShopNames();
  }

  render() {
    const { shopNames, selectShop } = this.props;

    const shopList = shopNames.map(shop => (
      <SideMenuItem
        key={shop._id}
        shopName={shop.name}
        onSelectShop={() => selectShop(shop._id)}
      />
    ));

    return <div>{shopList}</div>;
  }
}

SideMenu.propTypes = {
  shopNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  getShopNames: PropTypes.func.isRequired,
  selectShop: PropTypes.func.isRequired
};

export default SideMenu;
