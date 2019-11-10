import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuView from "./view/menu.view";
import MenuItemView from "./view/menu_item.view";
import {ROUTES} from "../../constants/routes";

class MenuController extends Component {
    render() {
        return (
            <MenuView>
                <MenuItemView link={"/"} name={"Home"}/>
                <MenuItemView link={ROUTES.DEFFIBRILATORS.H} name={"Defibrillators"}/>
                <MenuItemView link={ROUTES.FARMACIES.H} name={"Farmacies"}/>
                <MenuItemView link={ROUTES.ACTUALL.H} name={"Actuall"}/>
            </MenuView>
        );
    }
}

MenuController.propTypes = {};

export default MenuController;
