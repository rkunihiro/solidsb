import { createSignal, For, onCleanup, onError, onMount } from "solid-js";

import { Item } from "./item";

export function App() {
    const [getItems, setItems] = createSignal<string[]>([]);

    onMount(() => {
        console.log("App#onMount");
    });

    onCleanup(() => {
        console.log("App#onCleanup");
    });

    onError((err) => {
        console.error(err);
    });

    const addItem = (item: string) => {
        setItems((prev) => [item, ...prev]);
    };

    console.log("App#render");
    return (
        <>
            <header>
                <h1>Solid.JS sandbox</h1>
                <div>
                    <a href={"https://www.solidjs.com/"}>https://www.solidjs.com/</a>
                </div>
            </header>
            <main>
                <div>
                    <button onClick={() => addItem(new Date().toISOString())}>add</button>
                    <button onClick={() => setItems([])}>clear</button>
                </div>
                <For each={getItems()} fallback={null}>
                    {(value) => <Item value={value} />}
                </For>
            </main>
        </>
    );
}
