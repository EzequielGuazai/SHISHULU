import { createStyles } from "@mantine/emotion";
import { rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        paddingTop: rem(60),
        display: "flex",
        alignItems: "center",

        [`@media (max-width: ${theme.breakpoints.md})`]: {
            paddingTop: rem(40),
        },
    },

    contentWrapper: {
        position: "relative",
        zIndex: 2,
    },

    badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: rem(8),
        padding: `${rem(8)} ${rem(16)}`,
        backgroundColor: "rgba(252, 192, 29, 0.1)",
        border: "1px solid rgba(252, 192, 29, 0.3)",
        borderRadius: rem(20),
        color: "#FCC01D",
        marginBottom: rem(24),
        animation: "fadeInUp 0.6s ease-out",

        "@keyframes fadeInUp": {
            from: {
                opacity: 0,
                transform: "translateY(20px)",
            },
            to: {
                opacity: 1,
                transform: "translateY(0)",
            },
        },
    },

    mainTitle: {
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        fontWeight: 900,
        lineHeight: 1.1,
        color: "#fff",
        marginBottom: rem(16),
        animation: "fadeInUp 0.6s ease-out 0.2s both",
    },

    highlight: {
        color: "#FCC01D",
        background: "linear-gradient(135deg, #FCC01D 0%, #FFD700 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
    },

    subtitle: {
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        fontWeight: 700,
        color: "#fff",
        marginBottom: 0,
        animation: "fadeInUp 0.6s ease-out 0.3s both",
    },

    description: {
        fontSize: "clamp(1rem, 2vw, 1.25rem)",
        lineHeight: 1.7,
        color: "rgba(255, 255, 255, 0.9)",
        maxWidth: rem(600),
        animation: "fadeInUp 0.6s ease-out 0.4s both",

        "& strong": {
            color: "#FCC01D",
            fontWeight: 700,
        },
    },

    ctaWrapper: {
        display: "flex",
        gap: rem(16),
        flexWrap: "wrap",
        animation: "fadeInUp 0.6s ease-out 0.5s both",
    },

    ctaButton: {
        backgroundColor: "#FCC01D",
        color: "#000",
        fontWeight: 700,
        fontSize: rem(16),
        height: rem(50),
        paddingLeft: rem(32),
        paddingRight: rem(32),
        borderRadius: rem(8),
        transition: "all 0.3s ease",

        "&:hover": {
            backgroundColor: "#FFD700",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(252, 192, 29, 0.3)",
        },

        "&:active": {
            transform: "translateY(0)",
        },
    },

    secondaryButton: {
        borderColor: "#FCC01D",
        color: "#FCC01D",
        fontWeight: 600,
        fontSize: rem(16),
        height: rem(50),
        paddingLeft: rem(32),
        paddingRight: rem(32),
        borderRadius: rem(8),
        transition: "all 0.3s ease",

        "&:hover": {
            backgroundColor: "rgba(252, 192, 29, 0.1)",
            borderColor: "#FFD700",
            transform: "translateY(-2px)",
        },
    },

    imageWrapper: {
        position: "relative",
        borderRadius: rem(16),
        overflow: "hidden",
        animation: "fadeInRight 0.8s ease-out 0.3s both",

        "@keyframes fadeInRight": {
            from: {
                opacity: 0,
                transform: "translateX(30px)",
            },
            to: {
                opacity: 1,
                transform: "translateX(0)",
            },
        },

        "&:hover": {
            "& .heroImage": {
                transform: "scale(1.05)",
            },
            "& .imageOverlay": {
                opacity: 0.2,
            },
        },
    },

    heroImage: {
        width: "100%",
        height: "auto",
        minHeight: rem(400),
        objectFit: "cover",
        display: "block",
        transition: "transform 0.6s ease",
    },

    imageOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
       
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
    },
}));