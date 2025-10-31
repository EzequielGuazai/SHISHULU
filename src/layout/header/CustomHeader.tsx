import { Group, Text, Switch, Burger, Box, Container, Drawer, Stack } from '@mantine/core';
import { Moon, Sun } from 'lucide-react';
import { useStyles } from './customHeader.style';
import { useState } from 'react';
import { theme } from '../../theme';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';

const mainLinks = [
    { link: '/home', label: 'Inicio' },
    { link: '/sobre', label: 'Sobre' },
    { link: '/inscricao', label: 'Inscreva-se' },
    { link: '/contacto', label: 'Contacto' },
];

export default function CustomHeader() {
    const { classes } = useStyles();
    const [checked, setChecked] = useState(false);
    const [opened, { toggle, close }] = useDisclosure(false);
    const location = useLocation();

    const handleLinkClick = () => {
        close(); // Fecha o drawer quando clicar num link
    };

    const mainItems = mainLinks.map((item) => (
        <Link
            to={item.link}
            key={item.label}
            className={classes.mainLink}
            data-active={location.pathname === item.link || (item.link === '/home' && location.pathname === '/')}
            onClick={handleLinkClick}
        >
            {item.label}
        </Link>
    ));

    const mobileItems = mainLinks.map((item) => (
        <Link
            to={item.link}
            key={item.label}
            className={classes.mobileLink}
            data-active={location.pathname === item.link || (item.link === '/home' && location.pathname === '/')}
            onClick={handleLinkClick}
        >
            {item.label}
        </Link>
    ));

    return (
        <>
            <header className={classes.header}>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Text fw={900} c="#FCC01D" style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>
                        SHISHULU
                    </Text>
                </Link>

                <Container>
                    <Box visibleFrom="sm">
                        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                            {mainItems}
                        </Group>
                    </Box>
                </Container>

                <Group gap="xl">
                    <Switch
                        visibleFrom="sm"
                        className={classes.switch}
                        checked={checked}
                        onChange={(event) => setChecked(event.currentTarget.checked)}
                        color={theme.colors.tertiary[0]}
                        size="lg"
                        thumbIcon={
                            checked ? (
                                <Moon
                                    style={{ width: 14, height: 14 }}
                                    color={theme.colors.tertiary[6]}
                                    strokeWidth={3}
                                />
                            ) : (
                                <Sun
                                    style={{ width: 14, height: 14 }}
                                    color={theme.colors.primaryGray[5]}
                                    strokeWidth={3}
                                />
                            )
                        }
                    />
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        color="#FCC01D"
                        size="sm"
                        hiddenFrom="sm"
                    />
                </Group>
            </header>

            {/* Drawer para mobile */}
            <Drawer
                opened={opened}
                onClose={close}
                size="75%"
                position="right"
                title={
                    <Text fw={900} c="#FCC01D" size="xl">
                        SHISHULU
                    </Text>
                }
                overlayProps={{ opacity: 0.5, blur: 4 }}
                styles={{
                    content: {
                        backgroundColor: "#20364B",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    },
                    header: {
                        backgroundColor: "#20364B",
                        borderBottom: "1px solid rgba(252, 192, 29, 0.2)",
                    },
                    body: {
                        backgroundColor: "#20364B",
                        padding: 0,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    },
                    title: {
                        width: "100%",
                    },
                    close: {
                        color: "#FCC01D",
                        "&:hover": {
                            backgroundColor: "rgba(252, 192, 29, 0.1)",
                        },
                    },
                }}
            >
                <Stack gap={0} className={classes.mobileMenu}>
                    {mobileItems}

                    <Box className={classes.mobileThemeSwitch}>
                        <Text c="#fff" size="sm" fw={500}>
                            Tema {checked ? 'Escuro' : 'Claro'}
                        </Text>
                        <Switch
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                            color={theme.colors.tertiary[0]}
                            size="md"
                            thumbIcon={
                                checked ? (
                                    <Moon
                                        style={{ width: 12, height: 12 }}
                                        color={theme.colors.tertiary[6]}
                                        strokeWidth={3}
                                    />
                                ) : (
                                    <Sun
                                        style={{ width: 12, height: 12 }}
                                        color={theme.colors.primaryGray[5]}
                                        strokeWidth={3}
                                    />
                                )
                            }
                        />
                    </Box>
                </Stack>
            </Drawer>
        </>
    );
}