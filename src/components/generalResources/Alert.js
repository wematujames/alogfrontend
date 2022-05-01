import React from 'react'
import {InfoOutlineIcon } from "@chakra-ui/icons";
import { Text, Flex} from "@chakra-ui/react";

function ErrorDisplay({alert}) {
  return (
    <Flex alignItems="center" justifyContent={"center"}>
        <InfoOutlineIcon color="red.500" size="20px" mr="0.5rem" />
        <Text fontSize="sm" color="red.500">{alert}</Text>
	  </Flex>
  )
}

export default ErrorDisplay