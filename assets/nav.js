document.body.addEventListener('keyup', ev => {
    if (ev.ctrlKey && ev.key == 'g') {
        const url = prompt('URL?');
        const m = /\b([0-9A-F]{8}\b-[0-9A-F]{4}\b-[0-9A-F]{4}\b-[0-9A-F]{4}\b-[0-9A-F]{12})\b/i.exec(url);
        if (m && m[1]) {
            document.location.pathname = document.location.pathname.replace(/\/[^/]+$/, `/${m[1]}`);
        } 
    }
});