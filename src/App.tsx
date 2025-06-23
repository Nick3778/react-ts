import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <>
            <div className="bg-hero">
                <Header />
                <Hero />
            </div>
        </>
    );
}

export default App;
