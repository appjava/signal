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


function changeCH(ch){
    if(Hls.isSupported()) {
		var video = document.getElementById('video');
		var hls = new Hls();

        if(ch == "ch12"){
            ch = 'https://amc-amcespanol-1-us.plex.wurl.tv/playlist.m3u8';
        }
        else if(ch == "ch11"){
            ch = 'https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8';
        }
        else if(ch == "ch10"){
            ch = 'https://cloud.fastchannel.es/mic/manifiest/hls/zaztv/zaztv.m3u8';
        }
        else if(ch == "ch9"){
            ch = 'https://www.dailymotion.com/cdn/live/video/x7vyv0z.m3u8?sec=OTnALKFwF2reHKZpLM7ojzW9wUFHQ6kWEvSXtPFimqkvDQlJZ7wFC_FPID_IXK-9&dmTs=818994&dmV1st=8029dba7-f296-4c88-af6f-f4aa6ad4ef7e';
        }
        else if(ch == "ch8"){
            ch = 'https://olympusamagi.pc.cdn.bitgravity.com/Horrify-roku/master_4.m3u8';
        }
        else if(ch == "ch7"){
            ch = 'https://olympusamagi.pc.cdn.bitgravity.com/TopCine-roku/master_4.m3u8';
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
            ch = 'https://acuag5o4.pradoi.com/hls2/01/03975/9e1zs73inazg_,n,h,.urlset/master.m3u8?t=HF8sTxhwo90olDbscKjtyQcg2wCiuArXmRcAUKp0yn4&s=1726091399&e=129600&f=19879056&srv=kjxhos3xxdb25&i=0.0&sp=500&p1=kjxhos3xxdb25&p2=kjxhos3xxdb25&asn=52468';
        }
        else if(ch == "ch13"){
            ch = 'https://yhqd4yg264.pradoi.com/hls2/01/02203/cvjub0hxg65c_,n,h,.urlset/master.m3u8?t=VQvCB0bhu1kUZRfVczwis0A63Wi7oVz10PB3wen3FVo&s=1726088981&e=129600&f=11015005&srv=p1yiis79s8azw&i=0.0&sp=500&p1=p1yiis79s8azw&p2=p1yiis79s8azw&asn=52468';
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
function played(){
    const channelSelected = document.getElementById('channel-select').value;
    const ch = channelSelected;
    if (channelSelected){
        changeCH(ch);
    }else{
      alert("Please select a channel")  
    }
}


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
