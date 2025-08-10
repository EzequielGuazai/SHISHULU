import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles((theme) => ({
  header: {
    height: 75,
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
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[4],
    padding: `7px ${theme.spacing.sm}`,
    fontWeight: 500,
    borderBottom: "2px solid transparent",
    transition: "border-color 100ms ease, color 100ms ease",
    textDecoration: "none",

    "&:hover": {
      color: "#FCC01D",
      textDecoration: "none",
    },
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
