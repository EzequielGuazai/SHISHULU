import { Grid, Title, Text, Button, Space, Container, Box } from "@mantine/core";
import bg from '../../assets/bg2.png';
import { useStyles } from "./HomeStyles";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { classes } = useStyles();
    const navigate = useNavigate();

return (
    <Container size="xl" className={classes.container}>
        <Grid gutter={{ base: 'md', md: 'xl' }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Box className={classes.contentWrapper}>
                    <Title
                        className={classes.mainTitle}
                        order={1}
                    >
                        <span className={classes.highlight}>BEM-VINDO À SHISHULU!</span>
                    </Title>

                    <Title
                        className={classes.subtitle}
                        order={2}
                    >
                        O povo e a cultura
                    </Title>

                    <Space h="xl" />

                    <Text className={classes.description}>
                        <strong>Shishulu</strong> é mais do que uma plataforma, é um
                        movimento que preserva e celebra as tradições de Cabo Delgado.
                        Aqui, a música, a dança, a gastronomia, a arte e a história
                        encontram-se para dar vida às nossas raízes e inspirar novas
                        gerações. Valorizamos cada som, cada cor e cada sabor da nossa
                        terra, criando pontes entre passado e futuro, tradição e inovação.
                    </Text>

                    <Space h="xl" />

                    <Box className={classes.ctaWrapper}>
                        <Button
                            size="lg"
                            className={classes.ctaButton}
                            onClick={() => navigate("/inscricao")}
                        >
                            Inscrever-se
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className={classes.secondaryButton}
                            onClick={() => navigate("/sobre")}
                        >
                            Saber Mais
                        </Button>
                    </Box>
                </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
                <Box className={classes.imageWrapper}>
                    <img
                        src={bg}
                        className={classes.heroImage}
                        alt="Shishulu - Cultura de Cabo Delgado"
                        loading="lazy"
                    />
                    <Box className={classes.imageOverlay} />
                </Box>
            </Grid.Col>
        </Grid>
    </Container>
);
}