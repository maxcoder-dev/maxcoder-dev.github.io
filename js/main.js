document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector("link[rel*='icon']")) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        link.href = '/favicon.ico';
        document.head.appendChild(link);
        console.log("Favicon успешно добавлен через JS! [1.1]");
    }
});
