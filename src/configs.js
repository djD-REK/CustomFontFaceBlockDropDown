import { ElementPropTypes } from "@volusion/element-proptypes";

export const configSchema = {
  text: {
    label: "Text content",
    type: ElementPropTypes.string,
  },
  fontFamily: {
    label: "Dropdown",
    type: ElementPropTypes.oneOf(["News", "Photos"]),
  },
};

export const defaultConfig = {
  text: "Element Starter Block",
};
