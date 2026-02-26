const ARTICLES_DATA = [
    {
        title: "DevNews — новый сайт для разработчиков",
        desc: "Новости, статьи и гайды для тех, кто пишет код или только начинает путь в разработке.",
        link: "articles/all/devnews-about.html",
        date: "27.01.2026",
        tag: "DevNews",
        dataTags: "devnews site developers guides articles"
    },
    {
        title: "Стоит ли учить PHP в 2026 году?",
        desc: "PHP — один из старейших языков веба. Его хоронят уже лет пятнадцать, но он никуда не уходит.",
        link: "articles/coding/php-or-not.html",
        date: "25.02.2026",
        tag: "Coding",
        dataTags: "coding news"
    },
    {
        title: "Google представила Chrome 126 с упором на безопасность и ИИ",
        desc: "Новая версия Chrome получила усиленную защиту и обновлённые инструменты для разработчиков.",
        link: "articles/news/chrome-126-security.html",
        date: "22.01.2026",
        tag: "News",
        dataTags: "news browsers security ai"
    },
    {
        title: "Rust vs C++",
        desc: "Какой же из языков программирования лучше использовать в 2026 году?",
        link: "articles/coding/rust-vs-cpp.html",
        date: "24.02.2026",
        tag: "Coding",
        dataTags: "coding rust and cpp"
    },
    {
        title: "WebAssembly в 2026: Почему JS больше не монополист",
        desc: "Разбираемся, как технология WASM изменила архитектуру веба и почему пора присматриваться к Rust и Zig.",
        link: "articles/coding/wasm-the-new-standard.html",
        date: "30.01.2026",
        tag: "Coding",
        dataTags: "coding wasm js"
    },
    {
        title: "Госуслугам 16 лет!",
        desc: "Ключевой цифровой платформе России исполнилось 16 лет!",
        link: "articles/news/gosuslugi-16-yo.html",
        date: "15.12.2025",
        tag: "News",
        dataTags: "news sites"
    },
    {
        title: "Лучший редактор кода для Python",
        desc: "VS Code, PyCharm и другие популярные инструменты для разработки на Python.",
        link: "articles/coding/best-python-code-editor.html",
        date: "15.12.2025",
        tag: "Coding",
        dataTags: "coding python"
    },
    {
        title: "Сравнение дистрибутивов Linux",
        desc: "Ubuntu, Fedora, Arch — какой дистрибутив выбрать новичку и профи в 2026 году.",
        link: "articles/all/linux-distros-comparison.html",
        date: "14.12.2025",
        tag: "Linux",
        dataTags: "linux coding"
    },
    {
        title: "Как выбрать язык программирования",
        desc: "Python, JS, Java, C++: подробный гайд по выбору первого языка для обучения.",
        link: "articles/coding/how-to-choose-programming-language.html",
        date: "15.12.2025",
        tag: "Coding",
        dataTags: "coding"
    },
    {
        title: "История Яндекса — как развивался продукт",
        desc: "Путь от поисковой строки до огромной экосистемы сервисов в России.",
        link: "articles/all/yandex-history.html",
        date: "13.12.2025",
        tag: "News",
        dataTags: "news sites"
    },
    {
        title: "Лучший браузер 2025",
        desc: "Chrome, Firefox, Edge — детальный тест скорости и приватности браузеров.",
        link: "articles/all/best-browser.html",
        date: "15.12.2025",
        tag: "Browsers",
        dataTags: "browsers sites"
    },
    {
        title: "Как залить сайт в интернет",
        desc: "GitHub Pages, хостинг и домены. Пошаговая инструкция по деплою.",
        link: "articles/all/how-to-publish-site.html",
        date: "15.12.2025",
        tag: "Sites",
        dataTags: "sites coding"
    },
    {
        title: "Знакомство с DevNews",
        desc: "О чём наш сайт, для кого мы пишем и как стать автором контента.",
        link: "articles/all/devnews-intro.html",
        date: "15.12.2025",
        tag: "DevNews",
        dataTags: "devnews news"
    },
    {
        title: "Лучшие плагины для VS Code",
        desc: "Подборка расширений, которые сделают вашу разработку в разы быстрее.",
        link: "articles/coding/vscode-plugins.html",
        date: "15.12.2025",
        tag: "Coding",
        dataTags: "coding"
    },
    {
        title: "Почему именно DevNews?",
        desc: "Зачем мы создали этот ресурс и в чем его главное отличие от других IT-порталов.",
        link: "articles/all/why-devnews.html",
        date: "15.12.2025",
        tag: "DevNews",
        dataTags: "devnews news"
    },
    {
        title: "Расширения перехватывали переписки с ИИ",
        desc: "Популярные плагины Chrome могли передавать ваши диалоги с ChatGPT третьим лицам.",
        link: "articles/news/extensions-and-gpt.html",
        date: "16.12.2025",
        tag: "News",
        dataTags: "news browsers security ai"
    },
    {
        title: "OpenAI представила GPT-5 для девелоперов",
        desc: "GPT-5 получил продвинутое понимание кода, новый API и сниженное количество галлюцинаций.",
        link: "articles/news/gpt5-for-devs.html",
        date: "10.01.2026",
        tag: "News",
        dataTags: "news ai coding"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('newsGrid');
    const searchInput = document.getElementById('searchInput');
    const artCountLabel = document.getElementById('artCount');
    const filterBtns = document.querySelectorAll('.tag-filter button');
    
    let activeTags = new Set();

    function render() {
        if (!grid) return;
        
        const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";
        grid.innerHTML = '';

        const filtered = ARTICLES_DATA.filter(art => {
            // 1. Поиск по тексту
            const content = (art.title + " " + art.desc).toLowerCase();
            const matchText = content.includes(searchText);

            // 2. СТРОГАЯ ФИЛЬТРАЦИЯ (И)
            const artTagsArray = art.dataTags.toLowerCase().split(' ');
            // Статья проходит, если КАЖДЫЙ выбранный тег есть в списке тегов статьи
            const matchTags = activeTags.size === 0 || 
                             [...activeTags].every(selectedTag => artTagsArray.includes(selectedTag.toLowerCase()));

            return matchText && matchTags;
        });

        // Создание карточек
        filtered.forEach((art, i) => {
            const card = document.createElement('a');
            card.className = 'news-card';
            card.href = art.link;
            card.style.animationDelay = `${(i % 9 * 40)}ms`;
            card.innerHTML = `
                <div>
                    <h3>${art.title}</h3>
                    <p>${art.desc}</p>
                </div>
                <div class="news-meta">
                    <span>${art.date}</span>
                    <span class="news-tag">${art.tag}</span>
                </div>
            `;
            grid.appendChild(card);
        });

        if (artCountLabel) artCountLabel.textContent = filtered.length;
    }

    // Слушатели кнопок (ОДИН РАЗ!)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.dataset.tag;

            if (tag === 'all') {
                activeTags.clear();
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                const allBtn = document.querySelector('[data-tag="all"]');
                if (allBtn) allBtn.classList.remove('active');

                btn.classList.toggle('active');

                if (btn.classList.contains('active')) {
                    activeTags.add(tag);
                } else {
                    activeTags.delete(tag);
                }

                if (activeTags.size === 0 && allBtn) {
                    allBtn.classList.add('active');
                }
            }
            render();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', render);
    }

    // Возраст сайта
    const launchDate = new Date(2026, 0, 27);
    const diffDays = Math.max(0, Math.floor((new Date() - launchDate) / 86400000));
    const ageText = diffDays + ' дн.';
    
    const ageEl = document.getElementById('siteAge');
    const ageFootEl = document.getElementById('siteAgeFoot');
    if (ageEl) ageEl.textContent = ageText;
    if (ageFootEl) ageFootEl.textContent = ageText;

    render();
});

