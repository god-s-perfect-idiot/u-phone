//@ts-nocheck
import {writable} from 'svelte/store'

export const pallete = {
    // mains
    mango: "#FFEEC3",
    strawberry: "#ffeef3",
    moo: "#ffffff",
    latte: "#edded8",
    mocha: "#d9cfce",
    kiwi : "#d9f0d9",
    tomato: "#ffcccc",
    curacao: "#d9f0ff",
    // accents
    kavi: "#c47171",
    choco: "#6f4e37",
    jalapeno: "#c4c471",
    peach : "#F6A192",
    lime: "#71c471",
    blueberry: "#7171c4",
    grape: "#8858b2",
    apple : "#aa381e",
}

export const theme = writable({
    main: "mango",
    accent: "kavi"
});

export const setTheme = (source, val) => {
    // const currentTheme = localStorage.getItem('uos_theme');
    // if (currentTheme) {
    //     currentTheme[source] = val
    //     localStorage.setItem('uos_theme', currentTheme);
    // } else {
    //     localStorage.setItem('uos_theme', JSON.stringify({ [source]: val }));
    // }
    theme.update(n => {
        n[source] = val;
        return n;
    }) 
    document.querySelector('html').style.setProperty(`--${source}`, pallete[val]);
}

export const getHex = (source) => {
    return pallete[source];
}

export const getTheme = (source) => {
    // const currentTheme = localStorage.getItem('uos_theme');
    // if (currentTheme) {
    //     return currentTheme[source]
    // }
    // return null;
    let currentTheme = null;
    theme.subscribe(n => {
        currentTheme = n[source];
    })
    return currentTheme;
}

export const initTheme = () => {
    document.querySelector('html').style.setProperty('--main', pallete[getTheme('main')]);
    document.querySelector('html').style.setProperty('--accent', pallete[getTheme('accent')]);
}