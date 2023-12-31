import { createSignal, onMount } from 'solid-js'
import solidLogo from './assets/solid.svg'
import './App.css'

function App() {
    const [count, setCount] = createSignal(0)
    const [hello, setHello] = createSignal('');

    console.log('RENDER APP');

    onMount(() => {
        fetch('http://localhost:5173/api')
            .then((res) => res.json())
            .then((data) => setHello(data.hello));
    });

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                </a>
                <a href="https://solidjs.com" target="_blank">
                <img src={solidLogo} class="logo solid" alt="Solid logo" />
                </a>
            </div>
            <h1>Vite + Solid</h1>
            <div class="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count()}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <div>
                    From Fastify: {hello()}
                </div>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Solid logos to learn more
            </p>
        </>
    )
}

export default App
