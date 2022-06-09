import { onCleanup, onError, onMount } from "solid-js";

interface Props {
    value: string;
}

export function Item({ value }: Props) {
    onMount(() => {
        console.log("Item#onMount");
    });

    onCleanup(() => {
        console.log("Item#onCleanup");
    });

    onError((err) => {
        console.error(err);
    });

    console.log("Item#render");
    return <div>{value}</div>;
}
