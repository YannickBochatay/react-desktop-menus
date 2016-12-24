import React, { PropTypes, Component } from "react"
import MenuItem from "./MenuItem"

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

      const currentElmt = this.items[i]

      if (currentElmt && currentElmt.hasSubmenu && currentElmt.hasSubmenu()) {

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
    const submenu = currentElmt && currentElmt.submenu

    let newValue = null

    switch (e.key) {

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

    case "ArrowLeft" : case "Escape" :

      if (submenuDisplay && (!submenu || !submenu.state.submenuDisplay)) {

        window.setTimeout(() => this.setState({ submenuDisplay : false }), 0)

      }
      break

    case "ArrowRight" :

      if (submenu && !submenuDisplay) this.setState({ submenuDisplay : true })
      else if (!submenuDisplay && current === -1) newValue = 0
      break

    case "Enter" :

      if (!submenuDisplay) {

        if (submenu) this.setState({ submenuDisplay : true })
        else if (currentElmt && currentElmt.handleAction) currentElmt.handleAction(e)

      }
      break

    default :

      if (!submenuDisplay) {

        const index = this.items.findIndex(item => item.props.shortcut === e.key)

        if (index !== -1) {

          newValue = index
          if (this.items[index].handleAction) this.items[index].handleAction(e)

        }

      }

      break
    }

    if (newValue !== null) this.setState({ itemActive : newValue })

  }

  setRef(i, elmt) {

    this.items[i] = elmt

  }

  renderChildren() {

    let index = -1

    return React.Children.map(this.props.children, child => {

      if (child.type === MenuItem) {

        index++

        return React.cloneElement(
          child,
          {
            onMouseOver : this.handleMouseOver.bind(this, index),
            active : index === this.state.itemActive,
            ref : this.setRef.bind(this, index),
            submenuDisplay : index === this.state.itemActive && this.state.submenuDisplay
          }
        )

      } else return child

    })

  }

  componentDidMount() {

    document.addEventListener("keydown", this.handleKeyDown)

  }

  componentWillUnmount() {

    document.removeEventListener("keydown", this.handleKeyDown)

  }

  componentWillUpdate(nextProps) {

    if (!this.props.display && nextProps.display) this.setState({ itemActive : -1 })

  }

  render() {

    const { display, style, ...rest } = this.props

    delete rest.children

    if (!display) return null

    return (
      <ul
        { ...rest }
        style={ { ...baseStyle, ...style } }
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
