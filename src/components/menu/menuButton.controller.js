import React, {Component} from 'react';

class MenuButtonController extends Component {

    handleClick() {
        console.log("FUCK YOU REACT");

        const wrapper = document.getElementById("menu");
        const overlay = document.getElementById("overlay");
        wrapper.classList.toggle('open');
        overlay.classList.toggle('open');
    }

    render() {
        return (
            <div className="options float_right" onClick={() => this.handleClick()}>
                <div className="trigger">
                    <div className="inner">
                        <span className="icon-bar top"/>
                        <span className="icon-bar middle"/>
                        <span className="icon-bar bottom"/>
                    </div>
                </div>
            </div>
        )
    }
}

MenuButtonController.propTypes = {};

export default MenuButtonController;