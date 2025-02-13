console.log("Welcome You!!");

var video = document.getElementById('video');
var channels = [];
var localCHs = JSON.parse(localStorage.getItem('localCHs')) || [{
    id:     "",
    name:   "Load Something",
    link:   "#",
}];

function checkLocal(){

if(localCHs.length < 2){
    document.getElementById('btnUpMovs').style.display = "block";
    document.getElementById('btnUpChs').style.display = "block";
    document.getElementById('btnUp').style.display = "none";
    document.getElementById('btnDown').style.display = "none";

    channels = localCHs;
 }else{
    channels = JSON.parse(localStorage.getItem('localCHs'));
    document.getElementById('btnDown').style.display = "block";
    document.getElementById('btnUpMovs').style.display = "block";
    document.getElementById('btnUpChs').style.display = "block";
    document.getElementById('btnUp').style.display = "none";
    
 }
}

checkLocal();

function downCHs() {
    
    const originalData = channels;
    
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
        type: "text/plain"
    }));
    
    if (channels[0].name == "Select Channel"){
        console.log("Save Channels");
        a.setAttribute("download", "chs.txt");
    }else if (channels[0].name == "Select Movie"){
        console.log("Save Movies");
        a.setAttribute("download", "movs.txt");
    }else{
        console.log("Save Data File")
        a.setAttribute("download", "data.txt");
    }

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log("Downloaded File");
    document.getElementById('labelTest').innerHTML = "";
}

function upMovs(){
    document.getElementById('labelTop').innerHTML = "Movies Added";
    fetch("https://appjava.github.io/signal/meTV/movs.txt")
    .then((res) => res.text())
    .then((text) => {
        localStorage.setItem('localCHs', text);
        channels = JSON.parse(localStorage.getItem('localCHs'));
        selectCH();
        document.getElementById('btnDown').style.display = "block";
        document.getElementById('labelTest').innerHTML = "";
    }).catch((e) => console.error(e));
}

function upChs(){
    document.getElementById('labelTop').innerHTML = "Channels Added";
    fetch("https://appjava.github.io/signal/meTV/chs.txt")
    .then((res) => res.text())
    .then((text) => {
        localStorage.setItem('localCHs', text);
        channels = JSON.parse(localStorage.getItem('localCHs'));
        selectCH();
        document.getElementById('btnDown').style.display = "block";
        document.getElementById('labelTest').innerHTML = "";
    }).catch((e) => console.error(e));
}

function upSomething(){
    console.log("Loading Something ....");
}

let select = document.getElementById("channel-select");
var ch = '';

let selectCH = () => {
    document.getElementById('btnDel').style.display = "none";
    return (select.innerHTML = channels
      .map((x) => {
        let { id, name} = x;
        return `
        <option value="${id}">${name}</option>
        `;
    })
    .join(""));
}

function played(){
    const channelSelected = document.getElementById('channel-select').value;
    const ch = channelSelected;
    if (channelSelected != ""){
        changeCH(ch);
        document.getElementById('btnDel').style.display = "block";
    }else{
        document.getElementById('btnDel').style.display = "none";
        playCH(ch);
        //alert("Please select a channel")  
    }
}

selectCH();

function delCH(){
    let search = channels.find((x) => x.id === ch);
    channels.splice(channels.indexOf(search), 1);
    document.getElementById('labelTop').innerHTML = search.name.toUpperCase() +" "+ "Deleted";
    selectCH();
    ch = "";
    playCH(ch);
    localStorage.setItem('localCHs', JSON.stringify(channels));
    let localCurrent = JSON.parse(localStorage.getItem('localCHs'));
    if (localCurrent.length < 2){
        document.getElementById('btnDown').style.display = "none";
        localCHs = [{
            id:     "",
            name:   "Load Something",
            link:   "#",
        }];
        channels = localCHs;
        localStorage.setItem('localCHs', JSON.stringify(channels));
        selectCH();
    }
    
}

function addCH(){
    var lonChannels = channels.length;
    let chAdd = "ch" + (lonChannels);
    let chName = document.getElementById("nameCh").value;
    let linkCH = document.getElementById("inCh").value;
    var chToAdd = {
        id:     chAdd,
        name:   chName,
        link:   linkCH,
    };
    channels.push(chToAdd);
    document.getElementById("nameCh").value = "";
    document.getElementById('inCh').value = "";
    
    document.getElementById('btnDown').style.display = "block";
    selectCH();
    ch = "";
    //playCH(ch);
    document.getElementById('labelTest').innerHTML = chName + " " + "Added";
    document.getElementById('labelTop').innerHTML = "";
    localStorage.setItem('localCHs', JSON.stringify(channels));
}

function testCH(){
    document.getElementById('labelTest').innerHTML = "Testing ...";
    document.getElementById('labelTop').innerHTML = "";
    ch = document.getElementById('inCh').value;
    playCH(ch);
    selectCH();
}

function changeCH(){
    document.getElementById('inCh').value = "";
    document.getElementById('labelTest').innerHTML = "";
    document.getElementById('labelTop').innerHTML = "";
    ch = document.getElementById('channel-select').value;
    let search = channels.find((x) => x.id === ch)
    playCH(search.link);
}

function playCH(ch){
    //document.getElementById('labelTest').innerHTML = ch;
    if (ch.includes("mp4")){
        video.src = ch;
        video.play();
    }else {
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = ch;
            video.play();
          } else if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(ch);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
                video.play();
            });
          }
    }

}

// Show TIME
document.getElementById("time").innerHTML = showTime();

    function showTime() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        //return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+hours+':'+minutes;
    }

