/* globals React, ReactDOM */
(() => {

  "use strict"

  const styles = {

    ul : {
      position : "absolute",
      backgroundColor : "white",
      border : "1px solid gray",
      borderRadius : 2,
      boxShadow : "2px 1px 1px gray",
      listStyle : "none",
      padding : "3px 0px",
      margin : 0,
      lineHeight : "normal"
    },

    li : {
      margin : 0,
      whiteSpace : "nowrap",
      lineHeight : "140%"
    },

    divider : {
      borderBottom : "1px solid #ccc",
      width : "100%"
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
    },

    disabledInput : { cursor : "not-allowed" }
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
        display : this.props.display && this.props.active,
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
          onMouseOut={ this.handleMouseOut }
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

  const PropTypes = React.PropTypes

  MenuItem.propTypes = {
    icon : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    style : PropTypes.object,
    label : PropTypes.string,
    children : PropTypes.node,
    defaultActive : PropTypes.bool,
    defaultChecked : PropTypes.bool,
    disabled : PropTypes.bool,
    action : PropTypes.func,
    keepMenu : PropTypes.bool,
    checkbox : PropTypes.bool,
    shortcut : PropTypes.string,
    active : PropTypes.bool,
    onMouseOver : PropTypes.func,
    onMouseOut : PropTypes.func,
    display : PropTypes.bool
  }

  MenuItem.defaultProps = {
    defaultActive : false,
    defaultChecked : false,
    disabled : false,
    display : true
  }

  const Divider = ({ style, ...rest }) => {

    delete rest.active

    return <li style={ { ...styles.divider, ...style } } { ...rest } />

  }

  Divider.propTypes = { style : PropTypes.object }


  class Menu extends React.Component {

    constructor(props) {

      super(props)

      this.state = { itemActive : null }

      this.handleKeyDown = this.handleKeyDown.bind(this)

    }

    handleMouseOver(i) {

      this.setState({ itemActive : i })

    }

    handleKeyDown(e) {

      if (!this.props.display) return

      const length = React.Children.count(this.props.children)
      const current = this.state.itemActive

      let newValue = null

      switch (e.code) {

      case "ArrowDown" :

        if (current === null || current + 1 >= length) newValue = 0
        else newValue = current + 1
        break

      case "ArrowUp" :

        if (current === null || current - 1 < 0) newValue = length - 1
        else newValue = current - 1
        break

      case "Enter" :

        break

      default :

        break
      }

      if (newValue !== null) this.setState({ itemActive : newValue })

    }

    renderChildren() {

      return React.Children.map(this.props.children, (child, i) => (
        React.cloneElement(
          child,
          {
            onMouseOver : this.handleMouseOver.bind(this, i),
            display : this.props.display,
            active : i === this.state.itemActive
          })
      ))

    }

    componentDidMount() {

      document.addEventListener("keydown", this.handleKeyDown)

    }

    componentWilluount() {

      document.removeEventListener("keydown", this.handleKeyDown)

    }

    render() {

      const { display, style, ...rest } = this.props

      delete rest.children

      return (
        <ul
          style={ { ...styles.ul, ...style, visibility : display ? "visible" : "hidden" } }
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

  window.ReactMenu = Menu

  Menu.Item = MenuItem
  Menu.Divider = Divider

})()
