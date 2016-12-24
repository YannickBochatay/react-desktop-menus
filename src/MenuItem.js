import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import Menu from "./Menu"

const styles = {

  li : {
    margin : 0,
    whiteSpace : "nowrap",
    lineHeight : "140%",
    padding : "2px 5px",
    cursor : "default"
  },

  icon : {
    display : "inline-block",
    width : 16,
    verticalAlign : "middle"
  },

  checkbox : {
    display : "inline-block",
    width : 16,
    verticalAlign : "middle",
    color : "black"
  },

  active : { backgroundColor : "#e5ecff" },

  disabled : {
    color : "gray",
    fontStyle : "italic",
    cursor : "not-allowed"
  },

  disabledActive : { backgroundColor : "#eee" },

  globalShortcut : {
    color : "gray",
    display : "inline-block",
    float : "right"
  },

  label : { marginRight : 15 },

  arrow : {
    display : "inline-block",
    float : "right",
    fontSize : 9
  }
}


class MenuItem extends React.Component {

  constructor(props) {

    super(props)

    this.handleAction = this.handleAction.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)

    this.state = {
      checked : false,
      submenuPosition : { left : 0, top : 0 }
    }

  }

  handleAction(e) {

    e.preventDefault()

    if (this.props.disabled) return

    if (this.props.action) this.props.action(e, !this.state.checked)

    this.setState({ checked : !this.state.checked })

  }

  handleMouseOver(e) {

    if (this.props.onMouseOver) this.props.onMouseOver(e)

  }

  getStyle() {

    const { active, disabled, style } = this.props

    let stateStyle = { ...styles.li }

    if (active) {

      if (disabled) stateStyle = { ...stateStyle, ...styles.disabled, ...styles.disabledActive }
      else stateStyle = { ...stateStyle, ...styles.active }

    } else if (disabled) stateStyle = { ...stateStyle, ...styles.disabled }

    return { ...stateStyle, ...style }

  }

  createLabel() {

    const { shortcut, label } = this.props

    if (!label) return null

    if (shortcut) {

      const index = label.toLowerCase().indexOf(shortcut.toLowerCase())

      return (
        <span style={ styles.label }>
          { label.slice(0, index) }
          <u>{ label.slice(index, index + 1) }</u>
          { label.slice(index + 1) }
        </span>
      )

    } else {

      return <span style={ styles.label }>{ label }</span>

    }

  }

  createIcon() {

    const { icon, checkbox } = this.props
    const { checked } = this.state

    if (checkbox) {

      return (
        <span style={ styles.checkbox }>
          { checked ? "☑" : "☐" }
        </span>
      )

    } else if (typeof icon === "string") {

      return <i className={ icon }/>

    } else if (React.isValidElement(icon)) {

      return React.cloneElement(icon, { style : { ...styles.icon, ...icon.props.style } })

    } else {

      return <span style={ styles.icon }/>

    }

  }

  createSubmenu(child) {

    return React.cloneElement(child, {
      display : this.props.display && this.props.submenuDisplay,
      style : { position : "absolute", ...this.state.submenuPosition },
      ref : node => this.submenu = node
    })

  }

  hasSubmenu() {

    return React.Children
      .toArray(this.props.children)
      .some(child => child.type === Menu)

  }

  componentDidUpdate(prevProps) {

    if (this.props.submenuDisplay && !prevProps.submenuDisplay) {

      this.setSubmenuPosition()

    }

  }

  componentWillMount() {

    this.setState({ checked : this.props.defaultChecked })

  }

  setSubmenuPosition() {

    const li = ReactDOM.findDOMNode(this)
    const dim = li.getBoundingClientRect()
    const sub = ReactDOM.findDOMNode(this.submenu)

    if (!sub) return

    let left = li.offsetWidth
    let top = li.offsetTop

    if (dim.right + sub.offsetWidth > window.innerWidth) left = -sub.offsetWidth

    if (dim.bottom + sub.offsetHeight > window.innerHeight) top = li.offsetTop + li.offsetHeight - sub.offsetHeight

    this.setState({ submenuPosition : { left, top } })

  }

  renderChildren() {

    return React.Children.map(this.props.children, child => {

      if (child.type === Menu) return this.createSubmenu(child)
      else return child

    })

  }

  render() {

    const { action, ...rest } = this.props

    const submenu = this.hasSubmenu()

    for (const n in this.constructor.propTypes) delete rest[n]

    return (
      <li
        { ...rest }
        style={ this.getStyle() }
        onMouseOver={ this.handleMouseOver }
        onClick={ !submenu && action ? this.handleAction : null }
      >
        { submenu ? <span style={ styles.arrow }>▶</span> : "" }
        { this.createIcon() }
        { this.createLabel() }
        { this.renderChildren() }
      </li>
    )

  }
}

MenuItem.propTypes = {
  icon : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  style : PropTypes.object,
  label : PropTypes.string,
  children : PropTypes.node,
  disabled : PropTypes.bool,
  action : PropTypes.func,
  keepMenu : PropTypes.bool,
  checkbox : PropTypes.bool,
  shortcut : PropTypes.string,
  onMouseOver : PropTypes.func,
  onMouseOut : PropTypes.func,
  display : PropTypes.bool,
  active : PropTypes.bool,
  submenuDisplay : PropTypes.bool,
  defaultChecked : PropTypes.bool
}

MenuItem.defaultProps = {
  disabled : false,
  display : true,
  submenuDisplay : false
}

export default MenuItem
