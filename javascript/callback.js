function loadScript(src) {
    return new Promise((res, rej) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            setTimeout(() => {
                res(script);
            }, 3000);
        };
        script.onerror = () => rej('Lỗi rồi');
        document.head.append(script);
    });
}
loadScript("https://javascript.info/callbacks")
    .then((script) => console.log(`${script.src}ahihihi`))
    .catch((error) => console.log(error));