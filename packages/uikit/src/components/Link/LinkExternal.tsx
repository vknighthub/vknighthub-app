import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";
import {Text} from "../Text";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      <Text color="primaryDark">{children}</Text>
      <OpenNewIcon color={props.color ? props.color : "primaryDark"} ml="4px" />
    </Link>
  );
};

export default LinkExternal;
