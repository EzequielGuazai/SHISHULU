import { rem } from "@mantine/core";
import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles((theme) => ({
  header: {
    height: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    background: "#20364B",
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[4],
    padding: `7px ${theme.spacing.md}`,
    fontWeight: 600,
    borderBottom: "3px solid transparent",
    transition: "border-color 150ms ease, color 150ms ease",
    textDecoration: "none",
    display: "inline-block",

    "&[data-active='true']": {
      color: "#FCC01D",
      borderBottomColor: "#FCC01D",
    },

    "&:hover": {
      color: "#FCC01D",
    },

    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: theme.fontSizes.sm,
      padding: `5px ${theme.spacing.sm}`,
    },
  },

  mobileMenu: {
    padding: `${rem(8)} 0`,
  },

  mobileLink: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.lg,
    color: theme.colors.gray[4],
    padding: `${rem(16)} ${rem(24)}`,
    fontWeight: 600,
    textDecoration: "none",
    display: "block",
    borderLeft: "4px solid transparent",
    transition: "all 200ms ease",
    position: "relative",

    "&[data-active='true']": {
      color: "#FCC01D",
      backgroundColor: "rgba(252, 192, 29, 0.1)",
      borderLeftColor: "#FCC01D",
    },

    "&:hover": {
      color: "#FCC01D",
      backgroundColor: "rgba(252, 192, 29, 0.05)",
      paddingLeft: rem(28),
    },

    "&:active": {
      backgroundColor: "rgba(252, 192, 29, 0.15)",
    },
  },

  mobileThemeSwitch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${rem(16)} ${rem(24)}`,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    margin: `${rem(8)} ${rem(16)}`,
    borderRadius: rem(8),
  },

  switch: {
    "@media (max-width: 736px)": {
      display: "none",
    },
  },

  indicator: {
    "@media (max-width: 736px)": {
      display: "none",
    },
  },

  actioButton: {
    backgroundColor: theme.colors.primaryGray?.[0] || "#f1f1f1",
    color: theme.colors.textPrimary?.[6] || "#333",

    "@media (max-width: 736px)": {
      display: "none",
    },
  },

  userInfoContainer: {
    display: "flex",
    alignItems: "center",

    "@media (max-width: 582px)": {
      display: "none",
    },
  },

  userInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  userName: {
    marginRight: 10,
  },

  userRole: {
    marginRight: 10,
  },

  chevronIcon: {
    marginLeft: theme.spacing.xs,

    "@media (max-width: 480px)": {
      display: "none",
    },
  },
}));