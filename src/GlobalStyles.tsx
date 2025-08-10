import { Global } from '@mantine/emotion';

export function GlobalStyles() {
    return (
        <Global
            styles={(theme) => ({
                body: {
                    backgroundColor: theme.colors.mainColor[0],
                },
            })}
        />
    );
}
