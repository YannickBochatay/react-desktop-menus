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
      this.handleMouseOut = this.handleMouseOut.bind(this)

      this.state = {
        checked : false,
        active : false
      }

    }

    handleAction(e) {

      e.preventDefault()

      if (this.props.disabled) return

      if (this.props.action) this.props.action(e)

      this.setState({
        active : true,
        checked : !this.state.checked
      })

    }

    handleKeyPress(e) {

      if (e.key === this.props.shortcut) this.handleAction(e)

    }

    handleMouseOver() {

      this.setState({ active : true })

    }

    handleMouseOut() {

      this.setState({ active : false })

    }

    componentWillMount() {

      this.setState({
        checked : this.props.defaultChecked,
        active : this.props.defaultActive
      })

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

      if (this.state.active) stateStyle = { ...stateStyle, ...styles.active }

      if (this.props.disabled) stateStyle = { ...stateStyle, ...styles.disabled }

      return stateStyle

    }

    createLabel() {

      const { children : label, shortcut } = this.props

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

    render() {

      const { checkbox, submenu, style, icon, ...rest } = this.props

      const { checked } = this.state

      delete rest.disabled
      delete rest.action
      delete rest.defaultChecked
      delete rest.defaultActive
      delete rest.disabled
      delete rest.children
      delete rest.shortcut

      return (
        <li style={ { ...styles.li, ...style } } { ...rest } >
          <a
            href="#"
            onClick={ this.handleAction }
            onMouseOver={ this.handleMouseOver }
            onMouseOut={ this.handleMouseOut }
            style={ this.getStyle() }
          >
            { submenu ? <span style={ styles.arrow }/> : "" }

            <span style={ styles.icon }>
              { (typeof icon === "string") ? <i className={ icon }/> : icon }
            </span>

            { checkbox ? <span style={ styles.checkbox }>{ checked ? "☑" : "☐" }</span> : "" }

            { this.createLabel() }
          </a>
        </li>
      )

    }
  }

  const PropTypes = React.PropTypes

  MenuItem.propTypes = {
    icon : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    style : PropTypes.object,
    children : PropTypes.node,
    submenu : PropTypes.node,
    defaultActive : PropTypes.bool,
    defaultChecked : PropTypes.bool,
    disabled : PropTypes.bool,
    action : PropTypes.func.isRequired,
    keepMenu : PropTypes.bool,
    checkbox : PropTypes.bool,
    shortcut : PropTypes.string
  }

  MenuItem.defaultProps = {
    defaultActive : false,
    defaultChecked : false,
    disabled : false
  }

  class Menu extends React.Component {

    render() {

      return <ul style={ styles.ul } { ...this.props }>{ this.props.children }</ul>

    }

  }

  Menu.propTypes = {
    children : PropTypes.node
  }

  window.ReactMenu = Menu

  Menu.Item = MenuItem

})()
