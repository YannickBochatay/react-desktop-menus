import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import StaticMenu from "./StaticMenu"
import ContextMenu from "./ContextMenu"
import Menubar from "./Menubar"

const Section = ({ title, children, ...rest }) => (
  <section
    { ...rest }
    style={ { marginBottom : 80 } }
  >
    <h3>{ title }</h3>
    { children }
  </section>
)

Section.propTypes = {
  title : PropTypes.string,
  active : PropTypes.bool,
  children : PropTypes.node
}

ReactDOM.render(
  <article>
    <Section title="Static menu example">
      <StaticMenu keyboard={ false }/>
    </Section>
    <Section title="Menu bar example">
      <Menubar/>
    </Section>
    <Section title="Context menu example">
      <ContextMenu/>
    </Section>
  </article>,

  document.getElementById("content")
)
