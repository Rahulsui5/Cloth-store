import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AllCloth from "./pages/AllCloth";
import RootLayout from "./layout/RootLayout";
import MenClothsLayout from "./layout/MenClothsLayout";
import WomenClothsLayout from "./layout/WomenClothsLayout";
import MenCloths from "./Component/MenCloths";
import WomenCloths from "./Component/WomenCloths";
import Error from "./Component/Error";
import About from "./pages/About";
import ClothDetails from "./Component/ClothDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path=":id" element={<ClothDetails/>}   errorElement={<Error/>}/>
        <Route index element={<AllCloth/>}  errorElement={<Error/>}/>
        <Route path="men" element={<MenClothsLayout/> }>
          <Route index element={<MenCloths />}  errorElement={<Error/>}/>
          <Route path=":id" element={<ClothDetails/>}  errorElement={<Error/>} />
        </Route>
        <Route path="women" element={<WomenClothsLayout/>}>
          <Route index element={<WomenCloths />}  errorElement={<Error/>}/>
          <Route path=":id" element={<ClothDetails/>}  errorElement={<Error/>} />
        </Route>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p className="text-center mt-10">Loading...</p>}
    />
  );
}
export default App;