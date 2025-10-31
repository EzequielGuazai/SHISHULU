import {
    Container,
    Title,
    Text,
    Paper,
    TextInput,
    Textarea,
    Select,
    NumberInput,
    Button,
    Grid,
    Group,
    Stack,
    Radio,
    MultiSelect,
    FileInput,
    Checkbox,
    Box,
    Stepper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconUpload, IconCheck, IconUser, IconUsers } from "@tabler/icons-react";
import { useState } from "react";
import { useStyles } from "./Inscricao.styles";

const tiposArte = [
    { value: "musica", label: "Música Tradicional" },
    { value: "danca", label: "Dança" },
    { value: "gastronomia", label: "Gastronomia" },
    { value: "olaria", label: "Olaria" },
    { value: "escultura", label: "Escultura" },
    { value: "artes-plasticas", label: "Artes Plásticas" },
    { value: "artesanato", label: "Artesanato" },
    { value: "teatro", label: "Teatro" },
    { value: "literatura", label: "Literatura Oral" },
    { value: "jogos-tradicionais", label: "Jogos Tradicionais" },
];

const distritos = [
    "Pemba",
    "Metuge",
    "Ancuabe",
    "Chiúre",
    "Montepuez",
    "Balama",
    "Namuno",
    "Mueda",
    "Muidumbe",
    "Nangade",
    "Palma",
    "Mocímboa da Praia",
    "Macomia",
    "Quissanga",
    "Ibo",
    "Meluco",
];

export default function Inscricao() {
    const { classes } = useStyles();
    const [active, setActive] = useState(0);
    const [tipoInscricao, setTipoInscricao] = useState<"individual" | "grupo">("individual");

    const form = useForm({
        initialValues: {
            // Dados Pessoais
            nomeCompleto: "",
            dataNascimento: "",
            naturalidade: "",
            nomePai: "",
            nomeMae: "",
            bi: "",
            dataEmissaoBi: "",
            localEmissaoBi: "",
            bairro: "",
            distrito: "",
            telefone: "",
            email: "",

            // Dados do Grupo (se aplicável)
            nomeGrupo: "",
            numeroMembros: 1,
            nomesMembros: "",

            // Actividade Artística
            tipoInscricao: "individual",
            areasAtuacao: [] as string[],
            descricaoActividade: "",
            experiencia: "",
            objectivos: "",

            // Documentos
            aceitaTermos: false,
        },

        validate: (values) => {
            if (active === 0) {
                return {
                    nomeCompleto: values.nomeCompleto.length < 3 ? "Nome completo obrigatório" : null,
                    dataNascimento: !values.dataNascimento ? "Data de nascimento obrigatória" : null,
                    bi: values.bi.length < 10 ? "Número de B.I. inválido" : null,
                    telefone: values.telefone.length < 9 ? "Telefone inválido" : null,
                    distrito: !values.distrito ? "Distrito obrigatório" : null,
                };
            }

            if (active === 1 && tipoInscricao === "grupo") {
                return {
                    nomeGrupo: values.nomeGrupo.length < 3 ? "Nome do grupo obrigatório" : null,
                    numeroMembros: values.numeroMembros < 2 ? "Grupo deve ter pelo menos 2 membros" : null,
                };
            }

            if (active === 2) {
                return {
                    areasAtuacao: values.areasAtuacao.length === 0 ? "Selecione pelo menos uma área" : null,
                    descricaoActividade: values.descricaoActividade.length < 50 ? "Descreva sua actividade (mínimo 50 caracteres)" : null,
                    objectivos: values.objectivos.length < 30 ? "Descreva seus objectivos (mínimo 30 caracteres)" : null,
                };
            }

            if (active === 3) {
                return {
                    aceitaTermos: !values.aceitaTermos ? "Deve aceitar os termos" : null,
                };
            }

            return {};
        },
    });

    const nextStep = () => {
        const validation = form.validate();
        if (!validation.hasErrors) {
            setActive((current) => (current < 3 ? current + 1 : current));
        }
    };

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleSubmit = (values: typeof form.values) => {
        console.log("Formulário enviado:", values);
        notifications.show({
            title: "Inscrição Enviada!",
            message: "A sua candidatura foi recebida e será analisada em breve.",
            color: "yellow",
            icon: <IconCheck size={18} />,
        });
    };

    return (
        <div className={classes.wrapper}>
            <Container size="lg" py={60}>
                <Box className={classes.headerSection}>
                    <Title className={classes.mainTitle} order={1}>
                        Inscreva-se na Shishulu
                    </Title>
                    <Text className={classes.subtitle} size="lg">
                        Junte-se a nós na preservação e celebração da cultura de Cabo Delgado
                    </Text>
                </Box>

                <Paper className={classes.formPaper} radius="md" p={40} mt={40}>
                    <Stepper active={active} onStepClick={setActive} color="#FCC01D">
                        <Stepper.Step label="Dados Pessoais" description="Informações básicas" icon={<IconUser size={18} />}>
                            <Stack gap="md" mt="xl">
                                <TextInput
                                    label="Nome Completo"
                                    placeholder="Seu nome completo"
                                    required
                                    {...form.getInputProps("nomeCompleto")}
                                />

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Data de Nascimento"
                                            placeholder="DD/MM/AAAA"
                                            required
                                            {...form.getInputProps("dataNascimento")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Naturalidade"
                                            placeholder="Cidade de nascimento"
                                            required
                                            {...form.getInputProps("naturalidade")}
                                        />
                                    </Grid.Col>
                                </Grid>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Nome do Pai"
                                            placeholder="Nome completo do pai"
                                            {...form.getInputProps("nomePai")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Nome da Mãe"
                                            placeholder="Nome completo da mãe"
                                            {...form.getInputProps("nomeMae")}
                                        />
                                    </Grid.Col>
                                </Grid>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Número do B.I."
                                            placeholder="000000000000A"
                                            required
                                            {...form.getInputProps("bi")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Data de Emissão do B.I."
                                            placeholder="DD/MM/AAAA"
                                            {...form.getInputProps("dataEmissaoBi")}
                                        />
                                    </Grid.Col>
                                </Grid>

                                <TextInput
                                    label="Local de Emissão do B.I."
                                    placeholder="Ex: Arquivo de Identificação Civil de Pemba"
                                    {...form.getInputProps("localEmissaoBi")}
                                />

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Bairro"
                                            placeholder="Seu bairro"
                                            required
                                            {...form.getInputProps("bairro")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <Select
                                            label="Distrito"
                                            placeholder="Selecione o distrito"
                                            data={distritos}
                                            required
                                            searchable
                                            {...form.getInputProps("distrito")}
                                        />
                                    </Grid.Col>
                                </Grid>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Telefone"
                                            placeholder="+258 XX XXX XXXX"
                                            required
                                            {...form.getInputProps("telefone")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                        <TextInput
                                            label="Email (opcional)"
                                            placeholder="seu@email.com"
                                            type="email"
                                            {...form.getInputProps("email")}
                                        />
                                    </Grid.Col>
                                </Grid>
                            </Stack>
                        </Stepper.Step>

                        <Stepper.Step label="Tipo de Inscrição" description="Individual ou grupo" icon={<IconUsers size={18} />}>
                            <Stack gap="md" mt="xl">
                                <Radio.Group
                                    value={tipoInscricao}
                                    onChange={(value) => {
                                        setTipoInscricao(value as "individual" | "grupo");
                                        form.setFieldValue("tipoInscricao", value);
                                    }}
                                    label="Como deseja se inscrever?"
                                    required
                                >
                                    <Group mt="xs">
                                        <Radio value="individual" label="Individual" />
                                        <Radio value="grupo" label="Grupo/Colectivo" />
                                    </Group>
                                </Radio.Group>

                                {tipoInscricao === "grupo" && (
                                    <>
                                        <TextInput
                                            label="Nome do Grupo/Colectivo"
                                            placeholder="Nome artístico do grupo"
                                            required
                                            {...form.getInputProps("nomeGrupo")}
                                        />

                                        <NumberInput
                                            label="Número de Membros"
                                            placeholder="Quantos membros tem o grupo?"
                                            min={2}
                                            max={100}
                                            required
                                            {...form.getInputProps("numeroMembros")}
                                        />

                                        <Textarea
                                            label="Nomes dos Membros"
                                            placeholder="Liste os nomes dos membros do grupo (um por linha)"
                                            minRows={4}
                                            {...form.getInputProps("nomesMembros")}
                                        />
                                    </>
                                )}
                            </Stack>
                        </Stepper.Step>

                        <Stepper.Step label="Actividade Artística" description="Áreas de actuação" >
                            <Stack gap="md" mt="xl">
                                <MultiSelect
                                    label="Áreas de Actuação"
                                    placeholder="Selecione suas áreas artísticas"
                                    data={tiposArte}
                                    required
                                    searchable
                                    {...form.getInputProps("areasAtuacao")}
                                />

                                <Textarea
                                    label="Descrição da Actividade"
                                    placeholder="Descreva detalhadamente as actividades que pretende realizar (música, dança, artesanato, etc.)"
                                    minRows={4}
                                    required
                                    {...form.getInputProps("descricaoActividade")}
                                />

                                <Textarea
                                    label="Experiência Anterior"
                                    placeholder="Conte-nos sobre sua experiência artística e cultural"
                                    minRows={3}
                                    {...form.getInputProps("experiencia")}
                                />

                                <Textarea
                                    label="Objectivos"
                                    placeholder="Quais são seus objectivos ao juntar-se à Shishulu? Como pretende contribuir para a preservação cultural?"
                                    minRows={4}
                                    required
                                    {...form.getInputProps("objectivos")}
                                />
                            </Stack>
                        </Stepper.Step>

                        <Stepper.Step label="Revisão" description="Confirme os dados">
                            <Stack gap="md" mt="xl">
                                <Box className={classes.reviewSection}>
                                    <Title order={4} c="#FCC01D" mb="sm">
                                        Documentos Necessários
                                    </Title>
                                    <Text size="sm" c="dimmed" mb="md">
                                        Após aprovação da candidatura, será solicitado o envio de:
                                    </Text>
                                    <ul className={classes.documentList}>
                                        <li>Cópia do Bilhete de Identidade</li>
                                        <li>Curriculum Vitae ou portfólio artístico</li>
                                        <li>Carta de motivação (opcional)</li>
                                        <li>Fotos ou vídeos de trabalhos anteriores (se disponível)</li>
                                    </ul>
                                </Box>

                                <FileInput
                                    label="Anexar Documentos (Opcional)"
                                    placeholder="Arraste ficheiros aqui ou clique para selecionar"
                                    leftSection={<IconUpload size={16} />}
                                    multiple
                                    accept="image/*,application/pdf,.doc,.docx"
                                />

                                <Checkbox
                                    label={
                                        <Text size="sm">
                                            Declaro que as informações fornecidas são verdadeiras e estou ciente de que
                                            a Shishulu visa preservar e promover a cultura de Cabo Delgado de forma
                                            autêntica e respeitosa.
                                        </Text>
                                    }
                                    required
                                    {...form.getInputProps("aceitaTermos", { type: "checkbox" })}
                                />
                            </Stack>
                        </Stepper.Step>

                        <Stepper.Completed>
                            <Box className={classes.completedSection}>
                                <IconCheck size={60} color="#FCC01D" />
                                <Title order={3} c="#FCC01D" mt="md">
                                    Candidatura Enviada!
                                </Title>
                                <Text c="dimmed" ta="center" mt="sm">
                                    A sua inscrição foi recebida com sucesso. Entraremos em contacto em breve.
                                </Text>
                            </Box>
                        </Stepper.Completed>
                    </Stepper>

                    <Group justify="space-between" mt="xl">
                        <Button variant="default" onClick={prevStep} disabled={active === 0}>
                            Voltar
                        </Button>
                        {active < 3 ? (
                            <Button onClick={nextStep} bg="#FCC01D" c="#000">
                                Próximo
                            </Button>
                        ) : (
                            <Button onClick={() => form.onSubmit(handleSubmit)()} bg="#FCC01D" c="#000">
                                Enviar Candidatura
                            </Button>
                        )}
                    </Group>
                </Paper>
            </Container>
        </div>
    );
}