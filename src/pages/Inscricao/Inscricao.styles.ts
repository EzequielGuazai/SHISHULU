import { rem } from "@mantine/core";
import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#1a2332",
  },

  headerSection: {
    textAlign: "center",
    paddingTop: rem(40),
  },

  mainTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 900,
    color: "#FCC01D",
    marginBottom: rem(16),
  },

  subtitle: {
    color: "rgba(255, 255, 255, 0.8)",
    maxWidth: rem(600),
    margin: "0 auto",
  },

  formPaper: {
    backgroundColor: "#20364B",
    border: "1px solid rgba(252, 192, 29, 0.1)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",

    "& label": {
      color: "#fff",
      fontWeight: 500,
    },

    "& input, & textarea, & [role='combobox']": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      color: "#fff",

      "&:focus": {
        borderColor: "#FCC01D",
      },

      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.4)",
      },
    },
  },

  reviewSection: {
    backgroundColor: "rgba(252, 192, 29, 0.05)",
    padding: rem(20),
    borderRadius: rem(8),
    border: "1px solid rgba(252, 192, 29, 0.2)",
  },

  documentList: {
    color: "rgba(255, 255, 255, 0.8)",
    paddingLeft: rem(20),

    "& li": {
      marginBottom: rem(8),
    },
  },

  completedSection: {
    textAlign: "center",
    padding: `${rem(60)} ${rem(20)}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
