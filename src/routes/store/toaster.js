//@ts-nocheck
import { writable } from "svelte/store";

export const message = writable({
    text: "",
    type: ""
});

export const toast = (text, type) => {
    message.set({ text, type });
    setTimeout(() => {
        message.set({ text: "", type: "" });
    }, 1000);
}