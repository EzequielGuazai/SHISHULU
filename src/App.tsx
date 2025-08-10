import '@mantine/core/styles.css';

import { MantineProvider, Title } from '@mantine/core';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import { theme } from './theme';
import { DatesProvider } from "@mantine/dates";
import { Provider } from "react-redux";
import store from './store';
import { ModalsProvider } from "@mantine/modals";
import { GlobalStyles } from './GlobalStyles';
import { CircleAlert } from 'lucide-react';
import { showNotification } from '@mantine/notifications';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mantine/carousel/styles.css';
import { RoutesComponent } from './routes/Routesomponent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: (error: any) => {
      const message = error?.response?.data.message || [error.message];
      showNotification({
        color: "red",
        autoClose: false,
        icon: <CircleAlert />,
        title: (
          <Title c="red.6" order={6}>
            Erro!
          </Title>
        ),
        message: message.join(", "),
      });
    },
  }),
});

const App: React.FC = () => {

  return (
    <MantineProvider stylesTransform={emotionTransform} theme={theme}>
      <MantineEmotionProvider>
        <DatesProvider settings={{ locale: 'pt' }}>
          <Provider store={store}>
            <ModalsProvider>
              <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <RoutesComponent/>
              </QueryClientProvider>
            </ModalsProvider>
          </Provider>
        </DatesProvider>
      </MantineEmotionProvider>
    </MantineProvider>
  )
}

export default App;
