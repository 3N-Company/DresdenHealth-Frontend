import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuView from "./view/menu.view";
import MenuItemView from "./view/menu_item.view";

class MenuController extends Component {
    render() {
        return (
            <MenuView>
                <MenuItemView/>
                <MenuItemView/>
            </MenuView>
        );
    }
}

MenuController.propTypes = {};

export default MenuController;
