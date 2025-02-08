console.log("Welcome to plus page!");

var frame = document.querySelector("iframe");
        var meframe = document.getElementById('meframe');
        meframe.src = "";
        let id;
        function selectFrame(id){
            frame.style.background = "none";
            if (id == "tnt"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/tnt.html";
            } else if (id == "space"){
                meframe.src = "https://clarovideo.sdfgnksbounce.com/space.php";
            } else if (id == "cinecanal"){
                meframe.src = "https://clarovideo.sdfgnksbounce.com/cinecanal.php";
            } else if (id == "axn"){
                meframe.src = "https://clarovideo.sdfgnksbounce.com/axn.php";
            } else if (id == "warner"){
                meframe.src = "https://clarovideo.sdfgnksbounce.com/warnerbrostv.php";
            }  else if (id == "espn"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/espn.html";
            } else if (id == "espn2"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/espn2.html";
            } else if (id == "paramount"){
                meframe.src = "https://streamplayweb.com/tv/paramount.php";
            } else if (id == "hbo"){
                meframe.src = "https://streamplayweb.com/tv/hbo.php";
            } else if (id == "hbo2"){
                meframe.src = "https://streamplayweb.com/tv/hbo2.php";
            } else if (id == "hbo+"){
                meframe.src = "https://streamplayweb.com/tv/hboplus.php";
            } else if (id == "dsport"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/directvsports.html";
            } else if (id == "dsport2"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/directvsports2.html";
            } else if (id == "wmas"){
                meframe.src = "https://tucanaldeportivo.org/winmas.php";
            } else if (id == "cinemax"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/cinemax.html";
            } else if (id == "star"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/starchannel.html";
            } 
        }