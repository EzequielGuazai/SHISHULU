import { Group, Text, Switch, Burger, Box, Container } from '@mantine/core';
import { Moon, Sun } from 'lucide-react';
import { useStyles } from './customHeader.style';
import { useState } from 'react';
import { theme } from '../../theme';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';

const mainLinks = [
    { link: '/home', label: 'Inicio' },
    { link: '#', label: 'Sobre' },
    { link: '#', label: 'Inscreva-se' },
    { link: '#', label: 'Contacto' },
];

export default function CustomHeader() {
    const { classes } = useStyles();
    const [checked, setChecked] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);
    const [, setActive] = useState(0);

    const location = useLocation();

    const mainItems = mainLinks.map((item, index) => (
        <Link
            to={item.link}
            key={item.label}
            className={classes.mainLink}
            data-active={location.pathname === item.link}
            onClick={() => setActive(index)}
        >
            {item.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Text fw={900} c="#FCC01D" style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>SHISHULU</Text>

            <Container>
                <Box visibleFrom="sm">
                    <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </Box>
            </Container>

            <Group gap="xl" >
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
                    // className={classes.burger}
                    size="sm"
                    hiddenFrom="sm"
                />
            </Group>
        </header>
    );
}
