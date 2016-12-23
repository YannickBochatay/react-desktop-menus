import React, { PropTypes } from "react"
import ReactDOM from "react-dom"

const styles = {

  li : {
    margin : 0,
    whiteSpace : "nowrap",
    lineHeight : "140%"
  },

  a : {
    color : "#333",
    textDecoration : "none",
    display : "block",
    padding : "2px 5px",
    backgroundPosition : "5px 50%",
    backgroundSize : "16px 16px",
    backgroundRepeat : "no-repeat",
    position : "relative",
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
    this.handleKeyPress = this.handleKeyPress.bind(this)
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

  handleKeyPress(e) {

    if (e.key === this.props.shortcut) this.handleAction(e)

  }

  handleMouseOver(e) {

    if (this.props.onMouseOver) this.props.onMouseOver(e)

  }

  componentWillMount() {

    this.setState({ checked : this.props.defaultChecked })

  }

  componentDidMount() {

    if (this.props.shortcut) {

      document.addEventListener("keypress", this.handleKeyPress)

    }

  }

  componentWillUnmount() {

    document.removeEventListener("keypress", this.handleKeyPress)

  }

  getStyle() {

    let stateStyle = { ...styles.a }

    if (this.props.active) stateStyle = { ...stateStyle, ...styles.active }

    if (this.props.disabled) stateStyle = { ...stateStyle, ...styles.disabled }

    return stateStyle

  }

  createLabel() {

    const { shortcut, children } = this.props
    let { label } = this.props

    if (typeof children === "string") label = children

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

    } else {

      return (
        <span style={ styles.icon }>
          { (typeof icon === "string") ? <i className={ icon }/> : icon }
        </span>
      )

    }

  }

  createSubmenu() {

    return React.cloneElement(this.props.children, {
      display : this.props.display && this.props.submenuDisplay,
      style : { position : "absolute", ...this.state.submenuPosition },
      ref : node => this.submenu = node
    })

  }

  hasSubmenu() {

    const { children } = this.props

    return children && typeof children !== "string"

  }

  componentDidUpdate(prevProps) {

    if (this.props.active && !prevProps.active && this.hasSubmenu()) {

      this.setSubmenuPosition()

    }

  }

  setSubmenuPosition() {

    const li = ReactDOM.findDOMNode(this)
    const dim = li.getBoundingClientRect()
    const sub = ReactDOM.findDOMNode(this.submenu)

    let left = li.offsetWidth
    let top = li.offsetTop

    if (dim.right + sub.offsetWidth > window.innerWidth) left = -sub.offsetWidth

    if (dim.bottom + sub.offsetHeight > window.innerHeight) top = li.offsetTop + li.offsetHeight - sub.offsetHeight

    this.setState({ submenuPosition : { left, top } })

  }

  render() {

    const { style, action, ...rest } = this.props

    const submenu = this.hasSubmenu()

    delete rest.disabled
    delete rest.action
    delete rest.defaultChecked
    delete rest.defaultActive
    delete rest.disabled
    delete rest.shortcut
    delete rest.checkbox
    delete rest.icon
    delete rest.children
    delete rest.active
    delete rest.display

    return (
      <li
        { ...rest }
        style={ { ...styles.li, ...style } }
        onMouseOver={ this.handleMouseOver }
      >
        <a
          href="#"
          onClick={ !submenu && action ? this.handleAction : null }
          style={ this.getStyle() }
        >
          { submenu ? <span style={ styles.arrow }>▶</span> : "" }
          { this.createIcon() }
          { this.createLabel() }
        </a>
        { submenu ? this.createSubmenu() : null }
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
  submenuDisplay : PropTypes.bool
}

MenuItem.defaultProps = {
  defaultActive : false,
  defaultChecked : false,
  disabled : false,
  display : true,
  submenuDisplay : false
}

export default MenuItem
