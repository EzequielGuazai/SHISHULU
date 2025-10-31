import { rem } from "@mantine/core";
import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#1a2332",
  },

  heroSection: {
    textAlign: "center",
    paddingTop: rem(40),
    paddingBottom: rem(20),
  },

  mainTitle: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 900,
    color: "#FCC01D",
    marginBottom: rem(24),
    background: "linear-gradient(135deg, #FCC01D 0%, #FFD700 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  leadText: {
    color: "rgba(255, 255, 255, 0.9)",
    maxWidth: rem(700),
    margin: "0 auto",
    lineHeight: 1.6,
  },

  card: {
    backgroundColor: "#20364B",
    border: "1px solid rgba(252, 192, 29, 0.1)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 50px rgba(252, 192, 29, 0.2)",
    },
  },

  activityCard: {
    backgroundColor: "#20364B",
    border: "1px solid rgba(252, 192, 29, 0.1)",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-5px)",
      borderColor: "#FCC01D",
      boxShadow: "0 10px 30px rgba(252, 192, 29, 0.2)",
    },
  },

  ctaSection: {
    backgroundColor: "rgba(252, 192, 29, 0.05)",
    padding: rem(60),
    borderRadius: rem(16),
    border: "2px solid rgba(252, 192, 29, 0.2)",
  },
}));
