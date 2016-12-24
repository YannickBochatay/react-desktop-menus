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
  liHover : { backgroundColor : "#e5ecff" },
  menu : { marginLeft : "-0.5em" }
}

function isChildOf(elmt, parent) {

  let testElmt = elmt

  while (testElmt) {

    if (testElmt === parent) return true
    testElmt = testElmt.parentNode

  }

  return false

}

class Menubar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      showMenus : false,
      menuActive : null
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickDoc = this.handleClickDoc.bind(this)

  }

  handleClick() {

    this.setState({ showMenus : true })

  }

  handleMouseOver(i) {

    if (i !== this.state.menuActive) {

      this.setState({ menuActive : i })

    }

  }

  handleClickDoc(e) {

    if (!isChildOf(e.target, this.ul)) this.setState({ showMenus : false })

  }

  componentDidMount() {

    document.addEventListener("click", this.handleClickDoc)

  }

  componentWillUnmount() {

    document.removeEventListener("click", this.handleClickDoc)

  }

  renderChildren() {

    return React.Children.map(this.props.children, (child, i) => {

      if (child.type === Menu) {

        const active = this.state.menuActive === i

        const menu = React.cloneElement(
          child,
          {
            display : this.state.showMenus && active,
            style : { ...styles.menu, ...child.props.style }
          }
        )

        const style = { ...styles.li, ...(active ? styles.liHover : null) }

        return (
          <li style={ style } onMouseOver={ this.handleMouseOver.bind(this, i) }>
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

    return (
      <ul
        { ...rest }
        style={ { ...styles.ul, ...style } }
        onClick={ this.handleClick }
        ref={ node => this.ul = node }
      >
        { this.renderChildren() }
      </ul>
    )

  }

}

Menubar.propTypes = {
  children : PropTypes.node,
  style : PropTypes.object
}

export default Menubar
