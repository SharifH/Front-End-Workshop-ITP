import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {},
    "header": {},
    "h1": {},
    "containter": {},
    "navigation": {},
    "section-1": {},
    "section-2": {},
    "header-title": {},
    "nav-item": {},
    "boxes": {}
});