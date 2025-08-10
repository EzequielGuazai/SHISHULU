import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles(() => ({
    controls: {
        transition: "opacity 150ms ease",
        opacity: 0,
    },

    root: {
        "&:hover .controls": {
            opacity: 1,
        },
    },
}));
