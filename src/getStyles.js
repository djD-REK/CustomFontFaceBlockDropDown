export const getStyles = (blockConfig) => {
  const { fontFamily, fontWeight } = blockConfig
  const fontDancingScript = {
    fontFamily: "Dancing Script",
    src: `url(https://fonts.gstatic.com/s/dancingscript/v14/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7B1i03Sup8.woff2) format('woff2')`,
  }
  const fontFiraCode = {
    fontFamily: "Fira Code",
    src: `url(https://fonts.gstatic.com/s/firacode/v8/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprJVD7Ng.woff2) format('woff2')`,
  }

  // Add backup fonts to prevent invisible text on network errors
  let fontFaceCSS
  if (fontFamily.match("Dancing Script")) {
    fontFaceCSS = [fontDancingScript, "cursive"]
  }
  if (fontFamily.match("Fira Code")) {
    fontFaceCSS = [fontFiraCode, "monospace"]
  }

  return {
    example: {
      fontFamily: fontFaceCSS,
      fontWeight: fontWeight,
      // The following are other defaults from Google Fonts:
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  }
}
