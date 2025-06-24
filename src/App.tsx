import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
function App() {
    return (
        <>
            <div className="bg-hero">
                <Header />
                <Hero />
            </div>
            <Services />
        </>
    );
}

export default App;
