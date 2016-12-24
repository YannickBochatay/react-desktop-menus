import React, { PropTypes } from "react"

const Divider = ({ style, ...rest }) => (
  <li style={ { borderBottom : "1px solid #ccc", width : "100%", ...style } } { ...rest } />
)

Divider.propTypes = { style : PropTypes.object }

export default Divider
