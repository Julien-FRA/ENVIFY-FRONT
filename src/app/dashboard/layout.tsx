import { Navbar } from '@/components/Nav/Sidebar';
import { createStyles } from '@mantine/core';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { classes } = useStyles();
  return (
    <section className={classes.flex}>
      <Navbar />
      {children}
    </section>
  );
}

const useStyles = createStyles(() => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));
