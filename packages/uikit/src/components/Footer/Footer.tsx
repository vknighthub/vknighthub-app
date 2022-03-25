import React from "react";
import { Colors } from "../..";
import { baseColors, darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import LangSelector from "../LangSelector/LangSelector";
import { Link } from "../Link";
import { LogoWithTextIcon, AppStoreIcon, CHPlayIcon } from "../Svg";
import { Text } from "../Text";
import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem, StyledSocialLinks, StyledText, StyledToolsContainer
} from "./styles";
import { FooterProps } from "./types";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <Flex my="8px">
              <LogoWithTextIcon isDark width="160px" />
            </Flex>
            <Flex my="32px">
              <Link external href="https://www.apple.com/app-store/">
                <AppStoreIcon width="163px" />
              </Link>
            </Flex>
            <Flex my="32px">
              <Link external href="https://play.google.com/store/">
                <CHPlayIcon width="163px" />
              </Link>
            </Flex>
          </Box>
        </Flex>
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <Text color={darkColors.textSubtle as keyof Colors}>Copyright © vKnightHub 2022</Text>
            </Box>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
