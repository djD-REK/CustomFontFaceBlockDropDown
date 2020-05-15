import React, { useEffect } from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // React's Effect Hook (useEffect) runs a function when the Block is rendered
  useEffect(() =>
    // Add a link to the font stylesheet
    {
      // The addLink utility is a helper function to add a stylesheet to the <head> element
      props.utils.addLink(
        "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
      )
      props.utils.addLink(
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap "
      )
    }, [])
  // The second parameter is an empty array, [], to make useEffect run just once

  const classes = StyleSheet.create(getStyles(props))
  return <h1 className={css(classes.example)}>{props.text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
