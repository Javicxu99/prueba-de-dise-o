import { Carrusel } from "./Carrusel";
import  Precios  from "./Precios";
import { Header } from "./Header";
import { Footer } from "./Footer";
export default Home;




export function Home() {  
    return <div>
        <Header></Header>
        <Carrusel></Carrusel>
        <Precios></Precios>
        <Footer></Footer>
    </div>

}