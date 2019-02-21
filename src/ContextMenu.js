import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

class ContextMenu extends Component {

  constructor(props) {

    super(props)

    this.state = { display : false, position : { x : 0, y : 0 } }

    this.handleBlurWindow = this.handleBlurWindow.bind(this)
    this.handleClickDoc = this.handleClickDoc.bind(this)
    this.handleContextMenu = this.handleContextMenu.bind(this)

    this.menu = React.createRef()
  }

  close() { this.setState({ display : false }) }

  handleBlurWindow() { this.close() }

  handleClickDoc(e) {

    if (!this.menu.current) return

    const { current } = this.menu

    if (current && !current.contains(e.target)) this.close()
  }

  handleContextMenu(e) {

    e.preventDefault()
    e.persist()

    this.setState({ display : true }, () => this.setPosition(e))

    if (this.props.onContextMenu) this.props.onContextMenu(e)
  }

  setPosition(e) {

    if (!this.menu) return

    const { current } = this.menu

    if (!current) return

    let x = e.clientX
    let y = e.clientY

    if (e.clientX + current.offsetWidth > window.innerWidth) {

      x -= current.offsetWidth
      if (x < 0) x = window.innerWidth - current.offsetWidth

    }

    if (e.clientY + current.offsetHeight > window.innerHeight) {

      y -= current.offsetHeight
      if (y < 0) y = window.innerHeight - current.offsetHeight

    }

    this.setState({ position : { x, y } })

  }

  addEventListeners() {
    document.addEventListener("mouseup", this.handleClickDoc)
    window.addEventListener("blur", this.handleBlurWindow)
  }

  removeEventListeners() {
    document.removeEventListener("mouseup", this.handleClickDoc)
    window.removeEventListener("blur", this.handleBlurWindow)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.display && !prevState.display) {
      this.addEventListeners()
    } else if (!this.state.display && prevState.display) {
      this.removeEventListeners()
    }
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {

    const { children, menu, ...rest } = this.props

    const content = React.Children.only(children)

    const container = React.cloneElement(content, {
      key : "container",
      onContextMenu : this.handleContextMenu,
      ...rest
    })

    if (this.state.display) {

      const contextMenu = ReactDOM.createPortal((
        <div
          key="contextMenu"
          ref={ this.menu }
          style={ {
            position : "fixed",
            left : this.state.position.x,
            top : this.state.position.y
          } }
        >
          { menu }
        </div>
      ), document.body)

      return [container, contextMenu]

    } else return container

  }

}

ContextMenu.propTypes = {
  children : PropTypes.node,
  menu : PropTypes.node
}

export default ContextMenu
