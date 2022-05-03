import { extendTheme } from "@chakra-ui/react";

//styles overrides
import colors from "./styles/colors";
import typography from "./styles/typography";
import breakpoints from "./styles/breakpoint";
import container from "./styles/sizes";

const overrides = {
	colors,
	typography,
	breakpoints
	// sizes: {
	// 	container
	// }
};

export default extendTheme(overrides);
