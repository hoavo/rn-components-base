import React from "react";
import { View, StyleSheet } from "react-native";
import StatusBar from "../StatusBar/StatusBar";
import Text from "../Text/Text";
import Device from "../Utils/Device";
import renderNode from "../Utils/RenderNode";

const headerHeight = Device.getHeaderHeight();
/**
 *
 * @param {import("rn-components-base").HeaderProps} props
 */
const Header = props => {
  const {
    style,
    headerStyle,
    title = "",
    statusBarProps,
    statusBarVisible,
    LeftComponent,
    RightComponent,
    backgroundColor,
    titleContainerStyle,
    titleStyle,
    leftContainerStyle,
    rightContainerStyle,
    children
  } = props;

  /**
   * @typedef {import("react-native").ViewStyle} ViewStyle
   * @typedef {import("react-native").TextStyle} TextStyle
   */

  /**
   * @type {ViewStyle}
   */
  const defaultStyle = {
    backgroundColor: "transparent",
    height: headerHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  };

  /**
   * @type {TextStyle}
   */
  const textStyle = {
    fontSize: 18,
    color: "white"
  };

  /**
   * @type {ViewStyle}
   */
  const titleContainer = {
    flex: 3,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  };

  /**
   * @type {ViewStyle}
   */
  const buttonCornor = {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center"
  };

  return (
    <View style={[{ backgroundColor }, style]}>
      {statusBarVisible && <StatusBar {...statusBarProps} />}
      <View style={[defaultStyle, headerStyle]}>
        {renderNode(View, LeftComponent, {
          style: StyleSheet.flatten([buttonCornor, { paddingLeft: 5 }, leftContainerStyle])
        })}

        <View style={[titleContainer, titleContainerStyle]}>
          <Text style={[textStyle, titleStyle]} text={title} />
        </View>
        {renderNode(View, RightComponent, {
          style: StyleSheet.flatten([buttonCornor, { paddingRight: 5 }, rightContainerStyle])
        })}
      </View>
      {children}
    </View>
  );
};

Header.defaultProps = {
  statusBarVisible: true,
  statusBarColor: "transparent",
  statusBarStyle: "light-content",
  backgroundColor: "#007aff"
};

export default Header;
