import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AllCloth, { allClothsLoader } from "./pages/AllCloth";
import RootLayout from "./layout/RootLayout";
import MenClothsLayout from "./layout/MenClothsLayout";
import WomenClothsLayout from "./layout/WomenClothsLayout";
import MenCloths, { menClothLoader } from "./Component/MenCloths";
import WomenCloths, { womenClothLoader } from "./Component/WomenCloths";
import Error from "./Component/Error";
import About from "./pages/About";
import ClothDetails, { clothsDetailsLoader } from "./Component/ClothDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path=":id" element={<ClothDetails/>}  loader={clothsDetailsLoader} errorElement={<Error/>}/>
        <Route index element={<AllCloth/>} loader={allClothsLoader} errorElement={<Error/>}/>
        <Route path="men" element={<MenClothsLayout/> }>
          <Route index element={<MenCloths />} loader={menClothLoader} errorElement={<Error/>}/>
          <Route path=":id" element={<ClothDetails/>} loader={clothsDetailsLoader} errorElement={<Error/>} />
        </Route>
        <Route path="women" element={<WomenClothsLayout/>}>
          <Route index element={<WomenCloths />} loader={womenClothLoader} errorElement={<Error/>}/>
          <Route path=":id" element={<ClothDetails/>} loader={clothsDetailsLoader} errorElement={<Error/>} />
        </Route>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} fallbackElement={<p className="text-center mt-10">Loading...</p>}/>;
}

export default App;
