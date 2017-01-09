import React, { Component } from "react"
import ReactDOM from "react-dom"
import Menu from "./Menu"
import ContextMenu from "./ContextMenu"
import Menubar from "./Menubar"

class Examples extends Component {

  constructor(props) {

    super(props)

    this.state = { active : 0 }

    this.examples = []

  }

  componentDidMount() {

    const ticks = this.examples.map(example => {

      const node = ReactDOM.findDOMNode(example)
      const rect = node.getBoundingClientRect()

      return rect.top

    })

    window.addEventListener("scroll", () => {

      ticks.forEach((tick, i) => {

        if (tick - 200 < window.scrollY) this.setState({ active : i })

      })

    })

  }

  render() {

    const style = { active : {} }

    return (
      <article>{
        [Menu, Menubar, ContextMenu].map((Example, i) => (
          <section
            key={ "section" + i }
            style={ { marginTop : 200, ...(this.state.active === i ? style.active : null) } }
            ref={ elmt => this.examples[i] = elmt }
          >
            <h3>{ Example.name }</h3>
            <Example/>
          </section>
        ))
      }
      </article>
    )

  }
}

ReactDOM.render(<Examples/>, document.getElementById("content"))
