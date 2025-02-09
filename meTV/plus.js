console.log("Welcome to plus page!");

var frame = document.querySelector("iframe");
        var meframe = document.getElementById('meframe');
        meframe.src = "";
        let id;
        function selectFrame(id){
            console.log("Enter Function Selec");
            frame.style.background = "none";
            //frame.style.border = "none";

            if (id == "tnt"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/tnt.html";
            } else if (id == "space"){
                //meframe.src = "https://clarovideo.sdfgnksbounce.com/space.php";
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/space.html";
            } else if (id == "cinecanal"){
                //meframe.src = "https://clarovideo.sdfgnksbounce.com/cinecanal.php";
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/cinecanal.html";
            } else if (id == "axn"){
                //meframe.src = "https://clarovideo.sdfgnksbounce.com/axn.php";
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/axn.html";
            } else if (id == "warner"){
                //meframe.src = "https://clarovideo.sdfgnksbounce.com/warnerbrostv.php";
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/warnerchannel.html";
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
            } else if (id == "win"){
                meframe.src = "https://la12hd.com/vivo/canal.php?stream=winsports";
            } else if (id == "wmas"){
                //meframe.src = "https://tucanaldeportivo.org/winmas.php";
                //meframe.src = "https://streamtp2.com/global1.php?stream=winplus";
                meframe.src = "https://la12hd.com/vivo/canal.php?stream=winsportsplus";       
                //meframe.src = "https://la12hd.com/vivo/canal.php?stream=winsports2";
            } else if (id == "cinemax"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/cinemax.html";
            } else if (id == "star"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/starchannel.html";
            } else if (id == "studio"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/studiouniversal.html";
            } else if (id == "history"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/history.html";
            } else if (id == "history2"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/history2.html";
            } else if (id == "science"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/discoveryscience.html";
            } else if (id == "world"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/discoveryworld.html";
            } else if (id == "theater"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/discoverytheater.html";
            } else if (id == "amc"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/amc.html";
            } else if (id == "caracol"){
                meframe.src = "https://embed.sdfgnksbounce.com/embed2/caracol.html";
                //meframe.src = "https://la12hd.com/vivo/canal.php?stream=caracol";
            } else{
                meframe.src = "";
                frame.style.borderRadius = "12px";
                frame.style.border = "1px solid gray";
            }
            
        }