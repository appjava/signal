console.log("Welcome You!")

const guide = document.getElementById('guide');

const one = document.getElementById('one');
const two = document.getElementById('two');
const plus = document.getElementById('plus');
const extreme = document.getElementById('extreme');
const family = document.getElementById('family');
const signature = document.getElementById('signature');
const mundi = document.getElementById('mundi');
const pop = document.getElementById('pop');
const cx = document.getElementById('cx');

const ch = '';

const live = document.getElementById('live');

const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');
const ch4 = document.getElementById('ch4');

const ch5 = document.getElementById('ch5');
const ch6 = document.getElementById('ch6');
const ch7 = document.getElementById('ch7');
const ch8 = document.getElementById('ch8');

const ch9 = document.getElementById('ch9');
const ch10 = document.getElementById('ch10');
const ch11 = document.getElementById('ch11');
const ch12 = document.getElementById('ch12');

const ch13 = document.getElementById('ch13');
const ch14 = document.getElementById('ch14');
const ch15 = document.getElementById('ch15');
const ch16 = document.getElementById('ch16');

function changeCH(ch){
    if(Hls.isSupported()) {
		var video = document.getElementById('video');
		var hls = new Hls();

        if(ch == "ch12"){
            ch = 'https://linear-362.frequency.stream/mt/studio/362/hls/master/playlist.m3u8';
        }
        else if(ch == "ch11"){
            ch = 'https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8';
        }
        else if(ch == "ch10"){
            ch = 'https://linear-411.frequency.stream/dist/vix/411/hls/master/playlist.m3u8';
        }
        else if(ch == "ch9"){
            ch = 'https://linear-407.frequency.stream/mt/studio/407/hls/master/playlist.m3u8';
        }
        else if(ch == "ch8"){
            ch = 'https://linear-410.frequency.stream/mt/studio/410/hls/master/playlist.m3u8';
        }
        else if(ch == "ch7"){
            ch = 'https://linear-409.frequency.stream/mt/studio/409/hls/master/playlist.m3u8';
        }
        else if(ch == "ch6"){
            ch = 'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/cine_720p/playlist.m3u8';
        }
        else if(ch == "ch5"){
            ch = 'https://fast-channels.atresmedia.com/648ef3951756b0e425af83cc/648ef3951756b0e425af83cc.m3u8';
        }
        else if(ch == "ch4"){
            ch = 'https://fast-channels.atresmedia.com/648ef5551756b0e429af83cc/648ef5551756b0e429af83cc.m3u8';
        }
        else if(ch == "ch3"){
            ch = 'https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8';
        }
        else if(ch == "ch2"){
            ch = 'https://mdstrm.com/live-stream-playlist/5a5e1c2568b1910913db5fe2.m3u8';
        }
        else if(ch == "ch1"){
            ch = 'http://eagle.rfdte99.com:8080/play/live.php?mac=00:1A:79:40:09:29&stream=29452&extension=ts';
        }
        
		hls.loadSource(ch);
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED,function() {
		video.play();
	});
	}
	else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = ch;
		video.addEventListener('canplay',function() {
		video.play();
		});
	}
}

ch1?.addEventListener('click', () => {
    const ch = 'ch1';
    changeCH(ch);
    live.innerHTML="CH1"
});
ch2?.addEventListener('click', () => {
    const ch = 'ch2';
    changeCH(ch);
    live.innerHTML="CH2"
});
ch3?.addEventListener('click', () => {
    const ch = 'ch3';
    changeCH(ch);
    live.innerHTML="CH3"
});
ch4?.addEventListener('click', () => {
    const ch = 'ch4';
    changeCH(ch);
    live.innerHTML="CH4"
});
ch5?.addEventListener('click', () => {
    const ch = "ch5";
    changeCH(ch);
    live.innerHTML="CH5"
});
ch6?.addEventListener('click', () => {
    const ch = "ch6";
    changeCH(ch);
    live.innerHTML="CH6"
});
ch7?.addEventListener('click', () => {
    const ch = 'ch7';
    changeCH(ch);
    live.innerHTML="CH7"
});
ch8?.addEventListener('click', () => {
    const ch = 'ch8';
    changeCH(ch);
    live.innerHTML="CH8"
});

ch9?.addEventListener('click', () => {
    const ch = 'ch9';
    changeCH(ch);
    live.innerHTML="CH9"
});
ch10?.addEventListener('click', () => {
    const ch = 'ch10';
    changeCH(ch);
    live.innerHTML="CH10"
});
ch11?.addEventListener('click', () => {
    const ch = 'ch11';
    changeCH(ch);
    live.innerHTML="CH11"
});
ch12?.addEventListener('click', () => {
    const ch = 'ch12';
    changeCH(ch);
    live.innerHTML="CH12"
});


//Show guide
one?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>ONE</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
two?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>TWO</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_2_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
plus?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>PLUS</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_plus"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
extreme?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>EXTREME</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_xtreme"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
family?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>FAMILY</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_family_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
signature?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>SIGNATURE</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_signature_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
mundi?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>MUNDI</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_mundi"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
pop?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>POP</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_pop"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
cx?.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>CX</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/cinemax_colombia"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});


// Hide guide
guide?.addEventListener('click', () => {
    guide.style.display = 'none';
    guide.innerHTML=``;

  });
