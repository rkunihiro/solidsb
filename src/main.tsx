import { render } from "solid-js/web";
import {
    //
    createSignal,
    onCleanup,
    onError,
    onMount,
    For,
} from "solid-js";

interface ItemProps {
    value: string;
}

function Item({ value }: ItemProps) {
    onMount(() => {
        console.log("Flag#onMount");
    });

    onCleanup(() => {
        console.log("Flag#onCleanup");
    });

    onError((err) => {
        console.error(err);
    });

    console.log("Flag#render");
    return <div>{value}</div>;
}

function App() {
    const [getValue, setValue] = createSignal<string[]>([]);

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
        setValue((prev) => [...prev, item]);
    };

    console.log("App#render");
    return (
        <>
            <div>Hello,World!</div>
            <div>
                <button onClick={() => addItem(new Date().toISOString())}>add</button>
                <button onClick={() => setValue([])}>clear</button>
            </div>
            <For each={getValue()} fallback={null}>
                {(value) => <Item value={value} />}
            </For>
        </>
    );
}

const container = document.getElementById("container");
if (container) {
    render(() => <App />, container);
}
