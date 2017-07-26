import React, { PropTypes, Component } from "react"
import Menu from "./Menu"

function getOffsetDim(elmt) {

  let parent = elmt

  const offset = {
    left : 0,
    top : 0
  }

  while (parent) {

    offset.left += parent.offsetLeft
    offset.top += parent.offsetTop
    parent = parent.offsetParent

  }

  return offset

}

class ContextMenu extends Component {

  constructor(props) {

    super(props)

    this.state = { display : false, position : { x : 0, y : 0 } }

    this.handleBlurWindow = this.handleBlurWindow.bind(this)
    this.handleClickDoc = this.handleClickDoc.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  close() {

    this.setState({ display : false })

  }

  handleBlurWindow() {

    this.close()

  }

  handleClickDoc(e) {

    if (!this.menu) return

    const { node } = this.menu

    if (node && !node.contains(e.target)) this.close()

  }

  handleClick(e) {

    if (e.which !== 3) return

    e.stopPropagation()

    this.setState({ display : true })

    this.setPosition(e)

  }

  preventDefault(e) {

    e.preventDefault()

  }

  setPosition(e) {

    if (!this.menu) return

    const { node } = this.menu

    if (!node) return

    const parent = node && node.offsetParent
    const dimParent = getOffsetDim(parent)

    let x = e.pageX - dimParent.left
    let y = e.pageY - dimParent.top

    if (e.clientX + node.offsetWidth > window.innerWidth) {

      x -= node.offsetWidth
      if (x < 0) x = window.innerWidth - node.offsetWidth

    }

    if (e.clientY + node.offsetHeight > window.innerHeight) {

      y -= node.offsetHeight
      if (y < 0) y = window.innerHeight - node.offsetHeight

    }

    this.setState({ position : { x, y } })

  }

  componentDidMount() {

    this.container.addEventListener("mouseup", this.handleClick)
    this.container.addEventListener("contextmenu", this.preventDefault)
    document.addEventListener("mouseup", this.handleClickDoc)
    window.addEventListener("blur", this.handleBlurWindow)

  }

  componentWillUnmount() {

    this.container.removeEventListener("mouseup", this.handleClick)
    this.container.removeEventListener("contextmenu", this.preventDefault)
    document.removeEventListener("mouseup", this.handleClickDoc)
    window.removeEventListener("blur", this.handleBlurWindow)

  }

  render() {

    const { children, menu, ...rest } = this.props

    const content = React.Children.only(children)

    let menuElmt

    if (this.state.display) {

      menuElmt = React.cloneElement(menu, {
        ref : elmt => this.menu = elmt,
        style : {
          ...menu.props.style,
          position : "absolute",
          left : this.state.position.x,
          top : this.state.position.y
        },
        key : "contextMenu"
      })
    }

    return React.cloneElement(content, {
      ref : elmt => this.container = elmt,
      ...rest
    }, menuElmt)

  }

}

ContextMenu.propTypes = {
  children : PropTypes.node,
  menu : PropTypes.node
}

export default ContextMenu
