/*eslint-disable*/

import React from "react"
import ReactDOM from "react-dom"
import Menubar from "./Menubar"
import Menu from "./Menu"
import ContextMenu from "./ContextMenu"
import Item from "./MenuItem"
import Divider from "./Divider"

class MenubarExample extends React.Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {

    console.log("hello world")

    this.menubar.close()

  }

  render() {

    const action = this.handleClick

    return (
      <Menubar ref={ elmt => this.menubar = elmt } style={ { border : "1px solid #eee" } }>
        <Menu label="File">
          <Item action={ action } > Hello world </Item>
          <Item action={ action } disabled> Disabled </Item>
          <Item action={ action } icon="glyphicon glyphicon-th-list"> Fa Icon </Item>
          <Item action={ action } icon={ <img src="build/icon.svg"/> }> Custom Icon </Item>
          <Item
            action={ action }
            icon={ <i className="fa fa-modx"/> }
            shortcut="s"
            label="exemple with shortcut"
            info="ctrl+S"
          />
          <Item icon="fa fa-bar-chart" label="submenu again" shortcut="a">
            <Menu>
              <Item action={ action }> Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-road" label="submenu again">
                <Menu>
                  <Item action={ action }> Hello world </Item>
                  <Item action={ action } disabled> Disabled </Item>
                  <Item action={ action } icon="glyphicon glyphicon-headphones"> Fa Icon </Item>
                </Menu>
              </Item>
            </Menu>
          </Item>
          <Divider/>
          <Item action={ action } checkbox shortcut="c"> checkbox </Item>
          <Item action={ action } checkbox defaultChecked> checkbox checked </Item>
          <Item key={ 8 } label="sub-menu" shortcut="m">
            <Menu>
              <Item action={ action } checkbox shortcut="h"> Hello world </Item>
              <Item action={ action } icon="glyphicon glyphicon-print" label="another submenu">
                <Menu>
                  <Item action={ action }> Hello world </Item>
                  <Item action={ action } disabled> Disabled </Item>
                  <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
                    <Menu>
                      <Item action={ action } > Hello world </Item>
                      <Item action={ action } disabled> Disabled </Item>
                      <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
                    </Menu>
                  </Item>
                </Menu>
              </Item>
            </Menu>
          </Item>
        </Menu>
        <Menu label="Edit">
          <Item action={ action } checkbox shortcut="h"> Hello world </Item>
          <Item action={ action } icon="glyphicon glyphicon-print" label="another submenu">
            <Menu>
              <Item action={ action }> Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
                <Menu>
                  <Item action={ action } > Hello world </Item>
                  <Item action={ action } disabled> Disabled </Item>
                  <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
                </Menu>
              </Item>
            </Menu>
          </Item>
        </Menu>
        <Menu label="View">
          <Item action={ action } checkbox shortcut="h"> Hello world </Item>
          <Item action={ action } icon="glyphicon glyphicon-print" label="another submenu">
            <Menu>
              <Item action={ action } > Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
                <Menu>
                  <Item action={ action } > Hello world </Item>
                  <Item action={ action } disabled> Disabled </Item>
                  <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
                </Menu>
              </Item>
            </Menu>
          </Item>
        </Menu>
      </Menubar>
    )
  }
}

class ContextMenuExample extends React.Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {

    console.log("hello world")

    this.contextmenu.close()

  }

  render() {

    const action = this.handleClick

    const style = {
      height : 300,
      backgroundColor : "#eee",
      display : "flex",
      alignItems : "center",
      justifyContent : "center"
    }

    return (
      <ContextMenu ref={ elmt => this.contextmenu = elmt }>
        <div style={ style }>
          Click right to see context menu
        </div>
        <Menu>
          <Item action={ action } > Hello world </Item>
          <Item action={ action } disabled> Disabled </Item>
          <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
            <Menu>
              <Item action={ action }> Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
            </Menu>
          </Item>
        </Menu>
      </ContextMenu>
    )

  }
}

const Section = ({ title, children }) => (
  <section>
    <h3>{ title }</h3>
    { children }
  </section>
)

ReactDOM.render(
  <article>
    <Section title="Menu bar">
      <MenubarExample/>
    </Section>
    <Section title="Context menu">
      <ContextMenuExample/>
    </Section>
  </article>,
  document.getElementById("content")
)
