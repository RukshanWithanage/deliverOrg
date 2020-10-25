import { StyleSheet, Platform } from "react-native";
import { theme } from "../../constants/Theme";

export default StyleSheet.create({
  accessory: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  triangle: {
    width: 8,
    height: 8,
    transform: [
      {
        translateY: -4,
      },
      {
        rotate: "45deg",
      },
    ],
  },
  triangleContainer: {
    width: 12,
    height: 6,
    overflow: "hidden",
    alignItems: "center",

    backgroundColor: "transparent",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  picker: {
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 2,
    position: "absolute",
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: theme.textSubtitle,
        shadowOpacity: 0.8,
        shadowOffset: { width: 4, height: 6 },
      },

      android: {
        elevation: 6,
      },
    }),
  },
  item: {
    textAlign: "left",
  },
  scroll: {
    flex: 1,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.primary,
  },
  separator: {
    height: 1,
    backgroundColor: theme.divider,
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 6,
    height: 41,
    justifyContent: "center",
  },
  listFooter: {
    height: 16.7,
    borderTopWidth: 1,
    borderTopColor: theme.divider,
  },
  listHeader: {
    height: 41.8,
    justifyContent: "center",
    paddingTop: 0,
    backgroundColor: theme.backgroundPrimary,
    borderBottomWidth: 1,
    borderBottomColor: theme.primary,
  },
  listItemText: {
    justifyContent: "center",
    color: theme.listItem,
    flex: 1.2,
    textAlignVertical: 'center'
  },
  noData: {
    color: theme.divider,
  },
  listHeaderText: {
    color: theme.textSubtitle,
  },
  rightContent: {
    display: "flex",
    paddingLeft: 8,
    flex: 1,
    height: 40
  },
  rightContentItem: {
    color: theme.divider,
    textDecorationStyle: "solid",
    textDecorationColor: theme.divider,
    flex: 0.7,
    textAlignVertical: 'center',
    marginTop: 5
  },
  flag: {
    flex: 1
  },
  flagContent: {
    width: 30,
    height: 20,
    justifyContent: "flex-end",
    marginRight: 5,
    marginTop: 5
  }
});
