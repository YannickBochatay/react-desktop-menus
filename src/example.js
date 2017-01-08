import React, { Component, PropTypes } from "react"
import ReactDOM from "react-dom"
import ContextMenu from "./ContextMenu"
import Divider from "./Divider"
import Menu from "./Menu"
import Menubar from "./Menubar"
import Item from "./MenuItem"

class MenuExample extends Component {

  constructor(props) {

    super(props)

    this.state = { frozen : false }

    this.onClick = this.onClick.bind(this)

  }

  onClick() {

    console.log("hello world")

  }

  componentDidMount() {

    window.addEventListener("scroll", () => this.setState({ frozen : window.scrollY > 100 }))

  }

  render() {

    const action = this.onClick

    return (
      <Menu frozen={ this.state.frozen }>
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

class MenubarExample extends Component {

  constructor(props) {

    super(props)

    this.onClick = this.onClick.bind(this)

  }

  onClick() {

    console.log("hello world")

    this.menubar.close()

  }

  render() {

    const action = this.onClick

    return (
      <Menubar ref={ elmt => this.menubar = elmt } style={ { border : "1px solid #eee" } }>
        <Menu label="File">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            </Menu>
          </Item>
        </Menu>
        <Menu label="Edit">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            </Menu>
          </Item>
        </Menu>
        <Menu label="View">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            </Menu>
          </Item>
        </Menu>
      </Menubar>
    )

  }

}

class ContextMenuExample extends Component {

  constructor(props) {

    super(props)

    this.onClick = this.onClick.bind(this)

  }

  onClick() {

    console.log("hello world")

    this.contextmenu.close()

  }

  render() {

    const style = {
      height : 300,
      backgroundColor : "#eee",
      display : "flex",
      alignItems : "center",
      justifyContent : "center"
    }

    const action = this.onClick

    return (
      <ContextMenu ref={ elmt => this.contextmenu = elmt }>
        <div style={ style }>
          Click right to see context menu
        </div>
        <Menu label="File">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
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

Section.propTypes = {
  title : PropTypes.string,
  children : PropTypes.node
}

ReactDOM.render(
  <article>
    <Section title="Static menu">
      <MenuExample action={ () => console.log("hello") }/>
    </Section>
    <Section title="Menu bar">
      <MenubarExample/>
    </Section>
    <Section title="Context menu">
      <ContextMenuExample/>
    </Section>
  </article>,
  document.getElementById("content")
)
