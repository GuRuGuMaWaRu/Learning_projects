import React from "react";
import PropTypes from "prop-types";
import SideMenuItem from "../side-menu-item/side-menu-item";

class SideMenu extends React.Component {
  componentDidMount() {
    this.props.getShopNames();
  }

  render() {
    const { shopNames } = this.props;
    const shopList = shopNames.map((shopName, i) => (
      <SideMenuItem key={`${shopName}-${i}`} shopName={shopName} />
    ));

    return <div>{shopList}</div>;
  }
}

SideMenu.propTypes = {
  shopNames: PropTypes.arrayOf(PropTypes.string),
  getShopNames: PropTypes.func.isRequired
};

export default SideMenu;
