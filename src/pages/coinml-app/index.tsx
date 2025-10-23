import { Box, Container } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageHeader } from '../../components/PageHeader';

export const Route = createFileRoute('/coinml-app/')({
  component: CoInMLApp,
});

function CoInMLApp() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <PageHeader
        pageTitle="CoInML Application"
        description="Interactive COLTRIMS data analysis with machine learning"
      />
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          boxShadow: 3,
        }}
      >
        <iframe
          src="http://127.0.0.1:9000"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="CoInML Application"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Box>
    </Container>
  );
}
