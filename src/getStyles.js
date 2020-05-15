export const getStyles = (blockConfig) => {
  const { fontFamily, fontWeight } = blockConfig
  return {
    example: {
      fontSize: "2rem",
      fontFamily: fontFamily,
      fontWeight: fontWeight,
    },
  }
}
