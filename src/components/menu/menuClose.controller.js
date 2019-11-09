import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuView from "./view/menu.view";
import MenuItemView from "./view/menu_item.view";

class MenuCloseController extends Component {
    close(){
        const wrapper = document.getElementById("menu");
        const overlay = document.getElementById("overlay");
        wrapper.classList.toggle('open');
        overlay.classList.toggle('open');
    }
    render() {
        return (
            <div className="close_nav" onClick={() => this.close()}/>
        );
    }
}

MenuCloseController.propTypes = {};

export default MenuCloseController;
