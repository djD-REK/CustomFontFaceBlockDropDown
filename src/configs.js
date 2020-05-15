import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  text: {
    label: "Text content",
    type: ElementPropTypes.string,
  },
  fontFamily: {
    label: "Font family",
    type: ElementPropTypes.oneOf([
      `"Dancing Script",cursive`,
      `"Fira Code",monospace`,
    ]),
  },
  fontWeight: {
    label: "Font weight",
    type: ElementPropTypes.oneOf(["normal", "bold"]),
  },
}

export const defaultConfig = {
  text: "Element Starter Block",
  fontFamily: `"Fira Code",monospace`,
  fontWeight: "bold",
}
