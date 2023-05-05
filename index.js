const appListEl = document.getElementById("app-list");

const APPS = [
	{
		APP_NAME: "Income Tax Calculator",
		APP_PATH: "/income_tax",
	},
    {
        APP_NAME: "empty app",
        APP_PATH: "/empty_app"
    }
];

function setAppList() {
    appListEl.innerHTML = ""
    for (let app of APPS) {
        appListEl.innerHTML += `
        <button onclick="loadApp('${app.APP_PATH}')">${app.APP_NAME}</button>
        `
    }
}

function loadApp(APP_PATH) {
	const appUrl = window.location.origin + APP_PATH;
	window.location.href = appUrl;
}

setAppList()