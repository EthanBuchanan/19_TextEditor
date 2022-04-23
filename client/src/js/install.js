const butInstall = document.getElementById('buttonInstall');


let prompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {prompt = event});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {prompt.prompt()});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
