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
    fontSize: theme.fontSizes.md, // maior que xs
    color: theme.colors.gray[4],
    padding: `7px ${theme.spacing.md}`,
    fontWeight: 600,
    borderBottom: "3px solid transparent",
    transition: "border-color 150ms ease, color 150ms ease",
    textDecoration: "none",

    "&[data-active='true']": {
      color: "#FCC01D",
      borderBottomColor: "#FCC01D", // barra amarela ativa
    },

    "&:hover": {
      color: "#FCC01D",
    },

    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: theme.fontSizes.sm,
      padding: `5px ${theme.spacing.sm}`,
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
