import {
    Container,
    Title,
    Text,
    Grid,
    Paper,
    Box,
    List,
    ThemeIcon,
    Stack,
} from "@mantine/core";
import {
    IconMusic,
    IconChefHat,
    IconPalette,
    IconBook,
    IconUsers,
    IconHeart,
    IconTarget,
    IconStar,
} from "@tabler/icons-react";
import { useStyles } from "./Sobre.styles";

const actividades = [
    {
        icon: IconMusic,
        title: "Música e Dança Tradicional",
        description: "Realização de eventos culturais com música tradicional e ligeira, danças e jogos típicos que celebram a identidade de Cabo Delgado.",
    },
    {
        icon: IconUsers,
        title: "Intercâmbios Culturais",
        description: "Promovemos intercâmbios com outras regiões do país para fortalecer a coesão nacional e partilhar experiências culturais.",
    },
    {
        icon: IconBook,
        title: "Património Cultural",
        description: "Mapeamento e divulgação do património cultural oral, material e imaterial da província de Cabo Delgado.",
    },
    {
        icon: IconChefHat,
        title: "Gastronomia Local",
        description: "Workshops e concursos de gastronomia local, promovendo os sabores e saberes tradicionais da nossa terra.",
    },
    {
        icon: IconPalette,
        title: "Iniciação Artística",
        description: "Programas de iniciação artística para crianças e jovens em diversas expressões como jogos, danças tradicionais e artes visuais.",
    },
    {
        icon: IconStar,
        title: "Revitalização Urbana",
        description: "Pintura de murais, revitalização de parques, praças e monumentos históricos para embelezar e valorizar os espaços públicos.",
    },
];

export default function Sobre() {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Container size="lg" py={60}>
                {/* Hero Section */}
                <Box className={classes.heroSection}>
                    <Title className={classes.mainTitle} order={1}>
                        Sobre a Shishulu
                    </Title>
                    <Text className={classes.leadText} size="xl">
                        Um movimento pela preservação da cultura e identidade de Cabo Delgado
                    </Text>
                </Box>

                {/* Missão e Visão */}
                <Grid gutter="xl" mt={60}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Paper className={classes.card} p="xl" radius="md">
                            <ThemeIcon size={60} radius="md" color="#FCC01D" mb="md">
                                <IconHeart size={32} color="#000" />
                            </ThemeIcon>
                            <Title order={3} c="#FCC01D" mb="md">
                                Nossa Missão
                            </Title>
                            <Text c="rgba(255, 255, 255, 0.9)" size="md" style={{ lineHeight: 1.7 }}>
                                Preservar e celebrar as tradições de Cabo Delgado através da música, dança,
                                gastronomia, arte e história. Criamos pontes entre passado e futuro, tradição
                                e inovação, valorizando cada som, cada cor e cada sabor da nossa terra.
                            </Text>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Paper className={classes.card} p="xl" radius="md">
                            <ThemeIcon size={60} radius="md" color="#FCC01D" mb="md">
                                <IconTarget size={32} color="#000" />
                            </ThemeIcon>
                            <Title order={3} c="#FCC01D" mb="md">
                                Nossos Objectivos
                            </Title>
                            <List spacing="sm" c="rgba(255, 255, 255, 0.9)" size="md">
                                <List.Item>Valorizar as tradições locais de Cabo Delgado</List.Item>
                                <List.Item>Envolver activamente as comunidades</List.Item>
                                <List.Item>Impulsionar o turismo cultural sustentável</List.Item>
                                <List.Item>
                                    Criar oportunidades de expressão e rendimento para crianças, adolescentes e
                                    jovens
                                </List.Item>
                            </List>
                        </Paper>
                    </Grid.Col>
                </Grid>

                {/* Quem Somos */}
                <Box mt={80}>
                    <Title order={2} c="#FCC01D" mb="xl" ta="center">
                        Quem Somos
                    </Title>
                    <Paper className={classes.card} p="xl" radius="md">
                        <Text c="rgba(255, 255, 255, 0.9)" size="lg" style={{ lineHeight: 1.8 }}>
                            <strong style={{ color: "#FCC01D" }}>Shishulu</strong> é uma plataforma dedicada à
                            promoção de eventos culturais e artísticos em toda a província de Cabo Delgado.
                            Nascemos da necessidade de preservar e fortalecer a nossa identidade cultural,
                            criando espaços onde a música, a dança, a gastronomia e as artes tradicionais possam
                            florescer.
                        </Text>
                        <Text c="rgba(255, 255, 255, 0.9)" size="lg" mt="md" style={{ lineHeight: 1.8 }}>
                            Acreditamos que a cultura não é apenas algo a ser lembrado, mas vivido todos os dias.
                            Por isso, trabalhamos com artistas, grupos culturais, artesãos e comunidades locais
                            para criar experiências autênticas que honram o nosso passado enquanto inspiram as
                            novas gerações.
                        </Text>
                    </Paper>
                </Box>

                {/* Nossas Actividades */}
                <Box mt={80}>
                    <Title order={2} c="#FCC01D" mb="xl" ta="center">
                        Nossas Actividades
                    </Title>
                    <Grid gutter="lg">
                        {actividades.map((actividade, index) => (
                            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                                <Paper className={classes.activityCard} p="lg" radius="md" h="100%">
                                    <ThemeIcon
                                        size={50}
                                        radius="md"
                                        variant="light"
                                        color="#FCC01D"
                                        mb="md"
                                    >
                                        <actividade.icon size={28} />
                                    </ThemeIcon>
                                    <Title order={4} c="#fff" mb="sm">
                                        {actividade.title}
                                    </Title>
                                    <Text size="sm" c="rgba(255, 255, 255, 0.8)" style={{ lineHeight: 1.6 }}>
                                        {actividade.description}
                                    </Text>
                                </Paper>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Box>

                {/* Junte-se a Nós */}
                <Box className={classes.ctaSection} mt={80}>
                    <Stack align="center" gap="md">
                        <Title order={2} c="#FCC01D" ta="center">
                            Junte-se ao Movimento
                        </Title>
                        <Text size="lg" c="rgba(255, 255, 255, 0.9)" ta="center" maw={700}>
                            Se você é artista, artesão, músico, dançarino ou simplesmente alguém apaixonado pela
                            cultura de Cabo Delgado, a Shishulu é o seu espaço. Juntos, podemos preservar e
                            celebrar as nossas tradições!
                        </Text>
                    </Stack>
                </Box>
            </Container>
        </div>
    );
}