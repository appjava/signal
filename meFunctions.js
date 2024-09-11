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
            ch = 'https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1726114928/ei/EBjiZvSLHuS0qvAP-5fv4Q4/ip/181.143.225.154/id/630c030648110dbb/source/youtube/requiressl/yes/xpc/EgVo2aDSNQ%3D%3D/playback_host/rr1---sn-cvb7lne7.googlevideo.com/mh/0s/mm/31%2C26/mn/sn-cvb7lne7%2Csn-hp57kndd/ms/au%2Conr/mv/m/mvi/1/pl/18/hfr/1/demuxed/1/tts_caps/1/maudio/1/initcwndbps/1033750/vprv/1/go/1/rqh/5/mt/1726093043/fvip/3/nvgoi/1/short_key/1/ncsapi/1/keepalive/yes/dover/13/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Chfr%2Cdemuxed%2Ctts_caps%2Cmaudio%2Cvprv%2Cgo%2Crqh%2Citag%2Cplaylist_type/sig/AJfQdSswRQIgTGIBAVpw0CGNE-u6wbO3UAMD-vENAXCsGKrRAxV76PcCIQCUfS8H7Og07C3-rp5kRmS06XLIGN_CefnPUJiai6LfkA%3D%3D/lsparams/playback_host%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps/lsig/ABPmVW0wRQIhAJHIM8T7fQBBPgQmx-_VfUW1In_cra5wLfuwr5PFd65qAiBycHiMDE9qn7RUWPVQQjTW3T4ET2BFxng68vZQYWEtZg%3D%3D/file/index.m3u8';
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
