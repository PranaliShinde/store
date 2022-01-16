import logo from './logo.svg';
import {HomePage} from './Components/HomePage'
import { Fruit } from './Components/category/fruits';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import { HeaderComp } from './Components/category/header';
import { FoodgrainOilMasala } from './Components/category/foodgrainsoilmasala';
import { Vegetables } from './Components/category/vegetables';
import { Bakery } from './Components/category/bakerycakes';
import { Beverages } from './Components/category/beverages';
import { BeautyCare } from './Components/category/beautycare';
import { Meat } from './Components/category/eggsmeatfish';
import { BabyCare } from './Components/category/babycare';
import { AdminOptions } from './Components/adminoptions';
import { AddProduct } from './Components/addPage';
import { UpdateProduct } from './Components/updatePage';
import { DeleteProduct } from './Components/deletePage';
import App1 from './Components/App1';
import { AfterLogin } from './Components/afterLogin';
import Hero from './Components/Hero';
import fire from './Components/fire';
import App2 from './Components/App2';
import Cart from './Components/Cart';
import Logged1 from './Components/logged';
function App() {


  return (
    <BrowserRouter>
      <nav>
          <Link to="/"></Link>
        </nav>
        <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route exact path="/fruits" element={<Fruit/>}/>
            <Route exact path="/masala" element={<FoodgrainOilMasala/>}/>
            <Route exact path="/vegetables" element={<Vegetables/>}/>
            <Route exact path="/meat" element={<Meat/>}/>
            <Route exact path="/bakery" element={<Bakery/>}/>
            <Route exact path="/beverages" element={<Beverages/>}/>
            <Route exact path="/beautycare" element={<BeautyCare/>}/>
            <Route exact path="/babycare" element={<BabyCare/>}/>
            <Route exact path="/admin" element={<AdminOptions/>}/>
            <Route exact path="/add" element={<AddProduct/>}/>
            <Route exact path="/update" element={<UpdateProduct/>}/>
            <Route exact path="/delete" element={<DeleteProduct/>}/>
            <Route path="/login/*" element={<App1/>}/>
            {/* <Route path="/login/success" element={<AfterLogin/>}/> */}
            <Route path="/login/logout" element={<App2/>}/>
            <Route path="/login/cart" element={<Cart/>}/>
            <Route exact path="/checkout" element={<Logged1/>}/>


        </Routes>
    </BrowserRouter>
     //<Fruit/>
     //<FoodgrainOilMasala/>
     //<Vegetables/>
     //<Bakery/>
     //<Beverages/>
     //<BeautyCare/>
    );
}

export default App;
