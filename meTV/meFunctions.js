console.log("Welcome You!")
var video = document.getElementById('video');
var channels = [];
var localCHs = JSON.parse(localStorage.getItem('localCHs')) || [{
    id:     "",
    name:   "Channels",
    link:   "#",
}];
if(localCHs.length < 2){
    document.getElementById('btnLoad').style.display = "block";
    document.getElementById('btnDown').style.display = "none";
    channels = localCHs;
 }else{
    channels = JSON.parse(localStorage.getItem('localCHs'));
    document.getElementById('btnDown').style.display = "block";
 }

function downCHs() {
    
    const originalData = channels;
    
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
        type: "text/plain"
      }));
      a.setAttribute("download", "data.txt");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    console.log("Downloaded File");
}
 
function loadMeCHs(){
    localStorage.setItem('localCHs', JSON.stringify(meChannels));
    channels = JSON.parse(localStorage.getItem('localCHs'));
    document.getElementById('btnLoad').style.display = "none";
    document.getElementById('btnDown').style.display = "block";
    document.getElementById('labelTop').innerHTML = " Deafult Channels Added";
    selectCH(); 
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
        document.getElementById('btnLoad').style.display = "block";
        document.getElementById('btnDown').style.display = "none";
    }
}
function addCH(){
    var lonChannels = channels.length;
    let chAdd = "ch" + (lonChannels + 1);
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
    document.getElementById('btnLoad').style.display = "none";
    document.getElementById('btnDown').style.display = "block";
    selectCH();
    ch = "";
    playCH(ch);
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

