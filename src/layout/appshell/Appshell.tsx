import { AppShell } from '@mantine/core';
import CustomHeader from '../header/CustomHeader';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';

export default function Appshell() {

  return (
    <AppShell
      layout="alt"
      header={{ height: 75 }}
      footer={{ height: 30 }}
      padding="md"
      styles={{
        main: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <AppShell.Header>
        <CustomHeader />
      </AppShell.Header>
      <AppShell.Main>
        <>
          <Notifications />
          <Outlet />
        </>
      </AppShell.Main>
    </AppShell>
  );
}
