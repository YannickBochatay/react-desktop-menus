import React, { PropTypes, Component } from "react"
import MenuItem from "./MenuItem"
import Divider from "./Divider"

const baseStyle = {
  position : "absolute",
  backgroundColor : "white",
  border : "1px solid gray",
  borderRadius : 2,
  boxShadow : "2px 1px 1px gray",
  listStyle : "none",
  padding : "3px 0px",
  margin : 0,
  lineHeight : "normal"
}


class Menu extends Component {

  constructor(props) {

    super(props)

    this.state = { itemActive : null, submenuDisplay : false }

    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.items = []

  }

  handleMouseOver(i) {

    if (i !== this.state.itemActive) {

      if (this.delay) window.clearTimeout(this.delay)

      this.setState({ itemActive : i, submenuDisplay : false })

      if (this.items[i] && this.items[i].hasSubmenu && this.items[i].hasSubmenu()) {

        this.delay = window.setTimeout(() => this.setState({ submenuDisplay : true }), 300)

      }

    }

  }

  handleKeyDown(e) {

    if (!this.props.display) return

    const length = React.Children.count(this.props.children)
    const current = this.state.itemActive
    const { submenuDisplay } = this.state
    const currentElmt = this.items[current]
    const hasSubmenu = currentElmt && currentElmt.hasSubmenu && currentElmt.hasSubmenu()

    let newValue = null

    switch (e.code) {

    case "ArrowDown" :

      if (submenuDisplay) return

      if (current === null || current + 1 >= length) newValue = 0
      else newValue = current + 1
      break

    case "ArrowUp" :

      if (submenuDisplay) return

      if (current === null || current - 1 < 0) newValue = length - 1
      else newValue = current - 1
      break

    case "ArrowLeft" :

      if (submenuDisplay) this.setState({ submenuDisplay : false })
      break

    case "ArrowRight" :

      if (hasSubmenu) this.setState({ submenuDisplay : true })
      break

    case "Enter" :

      if (!submenuDisplay && currentElmt.handleAction) currentElmt.handleAction(e)
      break

    default :

      break
    }

    if (newValue !== null) this.setState({ itemActive : newValue })

  }

  renderChildren() {

    let index = -1

    return React.Children.map(this.props.children, child => {

      if (child.type === Divider) return child

      index++

      return React.cloneElement(
        child,
        {
          onMouseOver : this.handleMouseOver.bind(this, index),
          display : this.props.display,
          active : index === this.state.itemActive,
          ref : elmt => this.items[index] = elmt,
          submenuDisplay : index === this.state.itemActive && this.state.submenuDisplay
        }
      )

    })

  }

  componentDidMount() {

    document.addEventListener("keydown", this.handleKeyDown)

  }

  componentWillUnmount() {

    document.removeEventListener("keydown", this.handleKeyDown)

  }

  render() {

    const { display, style, ...rest } = this.props

    delete rest.children

    return (
      <ul
        style={ { ...baseStyle, ...style, visibility : display ? "visible" : "hidden" } }
        { ...rest }
      >
        { this.renderChildren() }
      </ul>
    )

  }

}

Menu.propTypes = {
  children : PropTypes.node,
  display : PropTypes.bool,
  style : PropTypes.object
}

Menu.defaultProps = { display : true }

export default Menu
