let btn;

getElemenById('lang').addEventListener('click', () => {
    import('./lang.js').then(lang => {
        lang.default();
    });
    });