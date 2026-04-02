import "./App.css";
import { Button } from "flowbite-react";

function App() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-slate-800">
                    Tailwind + Flowbite OK
                </h1>
                <Button color="purple">Flowbite Button</Button>
            </div>
        </main>
    );
}

export default App;