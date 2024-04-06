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

function changeCH(ch){
    if(Hls.isSupported()) {
		var video = document.getElementById('video');
		var hls = new Hls();
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
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-030/playlist.m3u8';
    changeCH(ch);
});
ch2?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-057/playlist.m3u8';
    changeCH(ch);
});
ch3?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-003/playlist.m3u8';
    changeCH(ch);
});
ch4?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-004/playlist.m3u8';
    changeCH(ch);
});
ch5?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-006/playlist.m3u8';
    changeCH(ch);
});
ch6?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-091/playlist.m3u8';
    changeCH(ch);
});
ch7?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-109/playlist.m3u8';
    changeCH(ch);
});
ch8?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-157/playlist.m3u8';
    changeCH(ch);
});
ch9?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-035/playlist.m3u8';
    changeCH(ch);
});
ch10?.addEventListener('click', () => {
    const ch = 'https://linear-411.frequency.stream/dist/vix/411/hls/master/playlist.m3u8';
    changeCH(ch);
});
ch11?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-026/playlist.m3u8';
    changeCH(ch);
});
ch12?.addEventListener('click', () => {
    const ch = 'http://stream.flynetwifi.com:1935/live/mobile-016/playlist.m3u8';
    changeCH(ch);
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
