import { FormProvider } from "./context/Context";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <FormProvider>
      <MainRoutes />
    </FormProvider>
  )
}
export default App;
