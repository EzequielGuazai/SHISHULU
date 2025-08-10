import { Grid, Title, Text, Button, Space } from "@mantine/core";
import bg from '../../assets/bg2.png';

export default function Home() {

    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                minHeight: "100%",
            }}
        >
            <Grid>
                <Grid.Col span={{ base: 12, md: 5 }}>

                    <Title
                        c="#FCC01D"
                        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
                        fw={900}
                    >
                        BEM-VINDO À SHISHULU!
                    </Title>
                    <Title c="#fff"
                        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
                        fw={900}
                    >
                        O povo e a cultura
                    </Title>

                    <Space h="xl" />
                    <Text
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.4rem)",
                            lineHeight: "1.6"
                        }}
                        c="#fff"
                    >
                        O <strong>Shishulu</strong> é mais do que uma plataforma — é um movimento que preserva e celebra as tradições de Cabo Delgado. Aqui, a música, a dança, a gastronomia, a arte e a história encontram-se para dar vida às nossas raízes e inspirar novas gerações. Valorizamos cada som, cada cor e cada sabor da nossa terra, criando pontes entre passado e futuro, tradição e inovação. Junte-se a nós nesta jornada de orgulho e identidade, onde a cultura não é apenas lembrada, mas vivida todos os dias.
                    </Text>

                    <Space h="xl" />
                    <Button bg="#FCC01D" c="#000" size="md">Iscrever-se</Button>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }}>
                    <img
                        src={bg}
                        style={{
                            width: "100%",
                            height: "auto", // mantém proporção
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                        alt="Shishulu Cultura"
                    />
                </Grid.Col>
            </Grid>
        </div>
    )
}