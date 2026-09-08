const greet = (name = "Guest") => {
    const msg = `Hi ${name}, welcome back`;
    return msg ;
};

console.log(greet()) ;
console.log(greet("Chuttiyaporn")) ;

const buildSettings = (opts = {}) => {
    const theme = opts?.theme ?? "light" ;
    const { fontSize = 16 } = opts ;
    const plugins = [...(opts.plugins ?? []), "core"] ;

    return {
        theme,
        fontSize,
        plugins
    };
};

console.log(buildSettings()) ;
console.log(buildSettings({ theme: "dark", plugins: ["md"] })) ;