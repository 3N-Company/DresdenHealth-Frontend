import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuView from "./view/menu.view";
import MenuItemView from "./view/menu_item.view";

class MenuController extends Component {
    render() {
        return (
            <MenuView>
                <MenuItemView link={"/"} name={"Home"}/>
                <MenuItemView link={"/deff"} name={"Defib"}/>
                <MenuItemView link={"/sfsdfs"} name={"test23"}/>
            </MenuView>
        );
    }
}

MenuController.propTypes = {};

export default MenuController;
