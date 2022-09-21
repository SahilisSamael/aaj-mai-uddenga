function toggleScanlines()
{
        document.styleSheets[1].disabled = !(document.styleSheets[1].disabled);
        document.cookie = "scanLines=" + document.styleSheets[1].disabled + "; expires=Sat, 22 Jul 2023 12:00:00 UTC; path=/";
}

function readCookies()
{
    let cookieSplit = document.cookie.split('=');
    document.styleSheets[1].disabled = cookieSplit[1] === 'true';
    console.log(cookieSplit[1]);
}

