import React, { Component } from "react"
import Divider from "../src/Divider"
import Menu from "../src/Menu"
import Item from "../src/MenuItem"

export default class MenuExample extends Component {

  constructor(props) {

    super(props)

    this.onClick = this.onClick.bind(this)

  }

  onClick() {

    console.log("hello world")

  }

  render() {

    const action = this.onClick

    return (
      <Menu { ...this.props }>
        <Item action={ action } label="Simple item"/>
        <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
        <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
        <Item
          action={ action }
          disabled
          label="Item disabled"
          icon={ <i className="glyphicon glyphicon-headphones"/> }
        />
        <Divider/>
        <Item action={ action } label="Custom hover color" activeColor="pink"/>
        <Item action={ action } checkbox> Item as a checkbox </Item>
        <Item action={ action } checkbox defaultChecked> Item as a checkbox checked </Item>
        <Item
          action={ action }
          icon={ <i className="fa fa-modx"/> }
          shortcut="s"
          label="Item with shortcut"
        />
        <Item
          action={ action }
          icon={ <i className="glyphicon glyphicon-print"/> }
          info="Info"
          label="Item with info"
        />
        <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu">
          <Menu>
            <Item action={ action } label="Simple item"/>
            <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
            <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            <Item
              action={ action }
              disabled
              label="Item disabled"
              icon={ <i className="glyphicon glyphicon-headphones"/> }
            />
            <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
              <Menu>
                <Item action={ action } label="Simple item"/>
                <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
                <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
                <Item
                  action={ action }
                  disabled
                  label="Item disabled"
                  icon={ <i className="glyphicon glyphicon-headphones"/> }
                />
              </Menu>
            </Item>
          </Menu>
        </Item>
      </Menu>
    )

  }

}
