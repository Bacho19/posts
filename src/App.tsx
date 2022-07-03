import { PageWrapper, theme } from './themes';
import { Box } from '@mui/system';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <PageWrapper theme={ theme }>
      <Box>
        <LoginPage />
      </Box>
    </PageWrapper>
  );
};

export default App;
