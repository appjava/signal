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
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/63a084934734f30007457b2c/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        }
        else if(ch == "ch8"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/63eb95baa99571000898a078/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        }
        else if(ch == "ch7"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6051201a0aa8a70007c24a2a/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=5812301a-61bc-11ef-afe4-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=5e713048-84ce-4fab-b243-4a7e7b903425&userId=&serverSideAds=true';
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
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/61099f2b40d0640007fc5aa2/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        }
        else if(ch == "ch13"){
            ch = 'https://spt-sonyonesharktank-1-mx.xiaomi.wurl.tv/playlist.m3u8';
        }
        else if(ch == "ch14"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cf968040ab7d8f181e6a68b/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=5812179c-61bc-11ef-afe6-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=87d0c898-0a70-4d39-9887-d53430f887f5&userId=&serverSideAds=true';
        }
        else if(ch == "ch15"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5d8d164d92e97a5e107638d2/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=58121a1c-61bc-11ef-aa8e-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=da3f56bc-cd4e-4068-a55c-d5a4b476af0f&userId=&serverSideAds=true';
        }
        else if(ch == "ch16"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/60fb2f47c133270007327375/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=5812194a-61bc-11ef-bae2-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=a3729dd5-675a-4cf4-9ac3-4d76fb16d2b5&userId=&serverSideAds=true';
        }
        else if(ch == "ch17"){
            ch = 'https://amg01258-raycomsports-powernationspanish-canelatv-5h8dc.amagi.tv/playlist/amg01258-raycomsports-powernationspanish-canelatv/playlist.m3u8';
        }
        else if(ch == "ch18"){
            ch = 'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live2/france24sp_720p/chunks.m3u8';
        }
        else if(ch == "ch19"){
            ch = 'https://amg02051-soulpublishing-amg02051c16-lg-co-563.playouts.now.amagi.tv/playlist/amg02051-admecyltd-brightsidespanish-lgco/playlist.m3u8';
        }
        else if(ch == "ch20"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5dd8364ea1d6780009929902/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        }
        else if(ch == "ch21"){
            ch = 'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f4d3696d938c900072679fd/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        }
        else if(ch == "ch22"){
            ch = 'http://181.78.105.146:6060/play/a02y/index.m3u8';
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
