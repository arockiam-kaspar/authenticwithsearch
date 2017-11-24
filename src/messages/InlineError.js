import React from "react";
import PropTypes from "prop-types";

const InlineError =({text}) => <p style={{color:"#ae5856", margin:0}}>{text}</p>

InlineError.propTypes={
	text: PropTypes.string.isRequired
}

export default InlineError;