import { rem } from "@mantine/core";
import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#1a2332",
  },

  headerSection: {
    textAlign: "center",
    paddingTop: rem(40),

    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      paddingTop: rem(20),
    },
  },

  mainTitle: {
    fontSize: "clamp(1.8rem, 5vw, 3rem)",
    fontWeight: 900,
    color: "#FCC01D",
    marginBottom: rem(16),
  },

  subtitle: {
    color: "rgba(255, 255, 255, 0.8)",
    maxWidth: rem(600),
    margin: "0 auto",
    padding: "0 1rem",
    fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
  },

  formPaper: {
    backgroundColor: "#20364B",
    border: "1px solid rgba(252, 192, 29, 0.1)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",

    "& label": {
      color: "#fff",
      fontWeight: 500,
      fontSize: "clamp(0.875rem, 2vw, 1rem)",
    },

    "& input, & textarea, & [role='combobox']": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      color: "#fff",
      fontSize: "clamp(0.875rem, 2vw, 1rem)",

      "&:focus": {
        borderColor: "#FCC01D",
      },

      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.4)",
      },
    },

    // Estilos para Radio buttons
    "& .mantine-Radio-label": {
      color: "#fff",
      fontSize: "clamp(0.875rem, 2vw, 1rem)",
    },

    "& .mantine-Radio-radio": {
      borderColor: "rgba(255, 255, 255, 0.3)",
      backgroundColor: "transparent",

      "&:checked": {
        borderColor: "#FCC01D",
        backgroundColor: "#FCC01D",
      },
    },

    // Checkbox styles
    "& .mantine-Checkbox-input": {
      borderColor: "rgba(255, 255, 255, 0.3)",
      backgroundColor: "transparent",

      "&:checked": {
        borderColor: "#FCC01D",
        backgroundColor: "#FCC01D",
      },
    },
  },

  // Mobile Progress Indicator
  mobileProgress: {
    marginBottom: rem(24),
    padding: rem(16),
    backgroundColor: "rgba(252, 192, 29, 0.05)",
    borderRadius: rem(8),
    border: "1px solid rgba(252, 192, 29, 0.2)",
  },

  mobileIconWrapper: {
    width: rem(40),
    height: rem(40),
    borderRadius: "50%",
    backgroundColor: "#FCC01D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },

  // Desktop Stepper Styles
  stepLabel: {
    color: "#fff !important",
    fontWeight: 600,
    fontSize: rem(14),

    "&[data-progress]": {
      color: "#FCC01D !important",
    },

    "&[data-completed]": {
      color: "#FCC01D !important",
    },

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      fontSize: rem(12),
    },
  },

  stepDescription: {
    color: "rgba(255, 255, 255, 0.6) !important",
    fontSize: rem(12),

    "&[data-progress]": {
      color: "rgba(252, 192, 29, 0.8) !important",
    },

    "&[data-completed]": {
      color: "rgba(252, 192, 29, 0.8) !important",
    },

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      fontSize: rem(10),
    },
  },

  separator: {
    backgroundColor: "rgba(255, 255, 255, 0.2) !important",

    "&[data-active]": {
      backgroundColor: "#FCC01D !important",
    },
  },

  reviewSection: {
    backgroundColor: "rgba(252, 192, 29, 0.05)",
    padding: rem(20),
    borderRadius: rem(8),
    border: "1px solid rgba(252, 192, 29, 0.2)",

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      padding: rem(16),
    },
  },

  documentList: {
    color: "rgba(255, 255, 255, 0.8)",
    paddingLeft: rem(20),
    fontSize: "clamp(0.875rem, 2vw, 1rem)",

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

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      padding: `${rem(40)} ${rem(16)}`,
    },
  },
}));
