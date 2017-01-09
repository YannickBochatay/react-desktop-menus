import React, { PropTypes, Component } from "react"
import Menu from "./Menu"

const styles = {

  ul : {
    listStyle : "none",
    margin : 0,
    padding : 0
  },
  li : {
    display : "inline-block",
    padding : "0.2em 0.5em",
    cursor : "default",
    margin : 0
  },
  menu : {
    position : "absolute",
    marginLeft : "-0.5em"
  }
}

class Menubar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      showMenus : false,
      menuActive : null
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleClickDoc = this.handleClickDoc.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)

    this.items = []

  }

  close() {

    this.setState({ showMenus : false, menuActive : null })

  }

  handleMouseDown() {

    if (this.props.frozen) return

    this.setState({ showMenus : true })

  }

  handleMouseOver(i) {

    if (this.props.frozen) return

    if (i !== this.state.menuActive) {

      this.setState({ menuActive : i })

    }

  }

  handleMouseOut() {

    if (!this.state.showMenus) this.setState({ menuActive : null })

  }

  handleClickDoc(e) {

    if (this.ul && !this.ul.contains(e.target)) this.close()

  }

  handleKeyDown(e) {

    if (this.props.frozen) return

    const length = React.Children.count(this.props.children)
    const current = this.state.menuActive
    const currentElmt = this.items[current]
    const submenuDisplay = currentElmt && currentElmt.state.submenuDisplay

    let newValue = null

    switch (e.key) {

    case "Escape" :

      if (!submenuDisplay) this.setState({ showMenus : false, menuActive : null })
      break

    case "ArrowLeft" :

      if (submenuDisplay || !this.state.showMenus) return

      if (current === null || current - 1 < 0) newValue = length - 1
      else newValue = current - 1
      break

    case "ArrowRight" :

      if (submenuDisplay || !this.state.showMenus) return

      if (current === null || current + 1 >= length) newValue = 0
      else newValue = current + 1
      break

    default :

      break

    }

    if (newValue !== null) this.setState({ menuActive : newValue })

  }

  componentDidMount() {

    document.addEventListener("click", this.handleClickDoc)
    document.addEventListener("keydown", this.handleKeyDown)

  }

  componentWillUnmount() {

    document.removeEventListener("click", this.handleClickDoc)
    document.removeEventListener("keydown", this.handleKeyDown)

  }

  setRef(i, elmt) {

    this.items[i] = elmt

  }

  renderChildren() {

    let index = -1

    return React.Children.map(this.props.children, (child, i) => {

      if (child.type === Menu) {

        index++

        const active = this.state.menuActive === i

        const menu = React.cloneElement(
          child,
          {
            display : this.state.showMenus && active,
            ref : this.setRef.bind(this, index),
            style : { ...styles.menu, ...child.props.style }
          }
        )

        const style = { ...styles.li }

        if (active) style.backgroundColor = this.props.itemHoverColor

        return (
          <li
            style={ style }
            onMouseOver={ this.handleMouseOver.bind(this, index) }
          >
            { child.props.label }
            <br/>
            { menu }
          </li>
        )

      } else return child

    })

  }

  render() {

    const { style, ...rest } = this.props

    delete rest.children
    delete rest.itemHoverColor
    delete rest.frozen

    return (
      <ul
        { ...rest }
        style={ { ...styles.ul, ...style } }
        onMouseDown={ this.handleMouseDown }
        onMouseOut={ this.handleMouseOut }
        ref={ node => this.ul = node }
      >
        { this.renderChildren() }
      </ul>
    )

  }

}

Menubar.propTypes = {
  children : PropTypes.node,
  style : PropTypes.object,
  itemHoverColor : PropTypes.string,
  frozen : PropTypes.bool
}

Menubar.defaultProps = {
  itemHoverColor : "#e5ecff",
  frozen : false
}

export default Menubar