import { BrowserRouter as Router } from "react-router-dom";
import { MainLayout } from "./modules/common/components/layout/MainLayout";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./modules/auth";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
