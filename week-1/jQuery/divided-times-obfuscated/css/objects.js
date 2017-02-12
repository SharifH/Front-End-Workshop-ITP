import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "page-header": {
        "textAlign": "center"
    },
    "page-header h1": {
        "fontFamily": "'Old Standard TT', serif",
        "fontWeight": "bold",
        "textTransform": "uppercase",
        "fontSize": 3.6,
        "lineHeight": 1,
        "marginTop": 0.5,
        "marginRight": 0.5,
        "marginBottom": 0.5,
        "marginLeft": 0.5,
        "wordSpacing": 0.2,
        "textShadow": "1px 1px 0 white, 2px 2px 0 rgba(0,0,0,.2)"
    },
    "page-header h1 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "page-header nav": {
        "borderTop": "2px solid black",
        "borderBottom": "1px solid black"
    },
    "page-header nav ul": {
        "float": "left"
    },
    "page-header nav ul li": {
        "float": "left"
    },
    "page-header nav ul li a": {
        "display": "block",
        "position": "relative",
        "zIndex": 1,
        "color": "inherit",
        "textDecoration": "none",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginRight": -1
    },
    "page-header nav ul li a span": {
        "borderRight": "1px solid #ddd",
        "paddingTop": 0,
        "paddingRight": 24,
        "paddingBottom": 0,
        "paddingLeft": 25
    },
    "page-header nav ul li:last-child a span": {
        "border": "none",
        "paddingRight": 25
    },
    "page-header nav ul li a:hover": {
        "background": "#f6f6f6"
    },
    "page-header nav ul li a:hover span": {
        "border": "none",
        "paddingRight": 25
    },
    "page-header nav ul liactive a": {
        "zIndex": 2,
        "background": "#666",
        "color": "#f6f666",
        "paddingBottom": 12,
        "marginBottom": -2
    },
    "page-header nav ul liactive a span": {
        "border": "none",
        "paddingRight": 25
    },
    "slide-down": {
        "display": "none",
        "overflow": "hidden",
        "background": "#666",
        "color": "white",
        "borderBottom": "1px solid black"
    },
    "drop": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "main": {
        "marginTop": 20
    },
    "user-nav": {
        "position": "relative",
        "fontSize": 0.75,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "background": "#EEE",
        "borderBottom": "1px solid #CCC"
    },
    "user-nav ul": {
        "float": "right"
    },
    "user-nav ul li": {
        "float": "left"
    },
    "user-nav ul li a": {
        "position": "relative",
        "zIndex": 1,
        "background": "#EEE",
        "display": "block",
        "color": "inherit",
        "textDecoration": "none",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "borderLeft": "1px solid #CCC",
        "borderRight": "1px solid #CCC",
        "marginLeft": -1
    },
    "user-nav badge": {
        "background": "#f6f666",
        "color": "#000",
        "fontWeight": "bold",
        "borderRadius": 5,
        "paddingTop": 2,
        "paddingRight": 7,
        "paddingBottom": 2,
        "paddingLeft": 7,
        "marginLeft": 5,
        "boxShadow": "inset 0  0 2px 0 rgba(0,0,0,.5)"
    },
    "user-nav ul liactive a": {
        "zIndex": 3,
        "background": "#fcfcfc",
        "paddingBottom": 11,
        "marginBottom": -1,
        "boxShadow": "0 -5px 5px rgba(0,0,0,.25)"
    },
    "user-nav ul li dropdown": {
        "display": "none",
        "position": "absolute",
        "zIndex": 2,
        "right": 20,
        "width": "33.33333%",
        "background": "#fcfcfc",
        "border": "1px solid #CCC",
        "boxShadow": "0 0 5px rgba(0,0,0,.25)"
    },
    "user-nav ul liactive dropdown": {
        "display": "block"
    },
    "article-thumbs": {
        "marginTop": 0,
        "marginRight": -5,
        "marginBottom": 0,
        "marginLeft": -5
    },
    "article-thumbs article": {
        "float": "left",
        "width": "16.66666%"
    },
    "article-thumbs article a": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "color": "inherit",
        "textDecoration": "none",
        "WebkitTransition": "background 300ms",
        "MozTransition": "background 300ms",
        "transition": "background 300ms"
    },
    "article-thumbs article a:hover": {
        "background": "rgba(255,255,255,.15)"
    },
    "article-thumbs article a figure": {
        "border": "1px solid black",
        "float": "left"
    },
    "article-thumbs article a figure img": {
        "display": "block"
    },
    "article-thumbs article a hgroup": {
        "clear": "left",
        "paddingTop": 8
    },
    "article-thumbs article a h4": {
        "color": "#f6f666",
        "fontSize": 0.75,
        "textTransform": "uppercase",
        "fontWeight": "bold",
        "letterSpacing": 0.1,
        "marginBottom": 2
    },
    "article-thumbs article a h2": {},
    "articlemain header h1": {
        "fontSize": 2.5
    }
});