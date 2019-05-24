import React from "react";
import PropTypes from "prop-types";
import SideMenuItem from "../side-menu-item/side-menu-item";

class SideMenu extends React.Component {
  componentDidMount() {
    this.props.getShopNames();
  }

  handleSelectShop = shopId => {
    const { selectShop, highlightShop } = this.props;
    selectShop(shopId);
    highlightShop(shopId);
  };

  render() {
    const { shopNames, highlighted, selectShop } = this.props;

    const shopList = shopNames.map(shop => (
      <SideMenuItem
        key={shop._id}
        shopName={shop.name}
        highlighted={highlighted === shop._id}
        onSelectShop={() => this.handleSelectShop(shop._id)}
      />
    ));

    return <div>{shopList}</div>;
  }
}

SideMenu.propTypes = {
  shopNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  highlighted: PropTypes.string.isRequired,
  getShopNames: PropTypes.func.isRequired,
  selectShop: PropTypes.func.isRequired,
  highlightShop: PropTypes.func.isRequired
};

export default SideMenu;
