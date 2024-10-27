
const meChannels = [
    {
        id:     "",
        name:   "Select Channel",
        link:   "#",
    },
    {
        id:     "ch1",
        name:   "DW Español",
        link:   "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8",
    },
    {
        id:     "ch2",
        name:   "Anhqv",
        link:   "https://fast-channels.atresmedia.com/648ef3951756b0e425af83cc/648ef3951756b0e425af83cc.m3u8",
    },
    {
        id:     "ch3",
        name:   "Investigación",
        link:   "https://fast-channels.atresmedia.com/648ef5551756b0e429af83cc/648ef5551756b0e429af83cc.m3u8",
    },
    {
        id:     "ch4",
        name:   "Smithsonian",
        link:   "https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/63a084934734f30007457b2c/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true",
    },
    {
        id:     "ch5",
        name:   "Geek",
        link:   "https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6051201a0aa8a70007c24a2a/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=5812301a-61bc-11ef-afe4-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=5e713048-84ce-4fab-b243-4a7e7b903425&userId=&serverSideAds=true",
    },
    {
        id:     "ch6",
        name:   "Millan",
        link:   "http://200.115.120.1:8000/play/ca047/index.m3u8",
    },
    {
        id:     "ch7",
        name:   "SharkTank",
        link:   "https://spt-sonyonesharktank-1-mx.xiaomi.wurl.tv/playlist.m3u8",
    },
    {
        id:     "ch8",
        name:   "Adrenalina",
        link:   "https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5d8d164d92e97a5e107638d2/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=58121a1c-61bc-11ef-aa8e-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=da3f56bc-cd4e-4068-a55c-d5a4b476af0f&userId=&serverSideAds=true",
    },
    {
        id:     "ch9",
        name:   "PopCorn",
        link:   "https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/60fb2f47c133270007327375/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=5812194a-61bc-11ef-bae2-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=a3729dd5-675a-4cf4-9ac3-4d76fb16d2b5&userId=&serverSideAds=true",
    },
    {
        id:     "ch10",
        name:   "SonyCine",
        link:   "https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/cine_720p/playlist.m3u8",
    },
    {
        id:     "ch11",
        name:   "FX",
        link:   "http://200.115.120.1:8000/play/ca017/index.m3u8",
    },
    {
        id:     "ch12",
        name:   "Warner",
        link:   "http://200.115.120.1:8000/play/ca047/index.m3u8",
    },

]/*
        <option value="ch20">Ciencia</option>
        <option value="ch19">Brightside Español</option>
        <option value="ch10">ZAZ</option>
        <option value="ch8">MacGyver</option>
        <option value="ch17">PowerNation</option>
        <option value="ch21">Ultratumba</option>
        <option value="ch12">AMC</option>
        <option value="ch14">Premiere</option>
        <option value="ch24">CineCanal HD</option>
        <option value="ch2">Canal Uno</option>
        <option value="ch18">France24</option>

        ch12
        'https://amc-amcespanol-1-us.plex.wurl.tv/playlist.m3u8';
        
        ch10
        'https://cloud.fastchannel.es/mic/manifiest/hls/zaztv/zaztv.m3u8';
        
        ch8"
        'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/63eb95baa99571000898a078/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        
        ch2"
        'https://mdstrm.com/live-stream-playlist/5a5e1c2568b1910913db5fe2.m3u8';
        
        ch14
        'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cf968040ab7d8f181e6a68b/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=5812179c-61bc-11ef-afe6-0faa828064d3&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=87d0c898-0a70-4d39-9887-d53430f887f5&userId=&serverSideAds=true';
        
        ch17
        'https://amg01258-raycomsports-powernationspanish-canelatv-5h8dc.amagi.tv/playlist/amg01258-raycomsports-powernationspanish-canelatv/playlist.m3u8';
        
        ch18
        'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live2/france24sp_720p/chunks.m3u8';
        
        ch19
        'https://amg02051-soulpublishing-amg02051c16-lg-co-563.playouts.now.amagi.tv/playlist/amg02051-admecyltd-brightsidespanish-lgco/playlist.m3u8';
        
        ch20
        'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5dd8364ea1d6780009929902/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        
        ch21
        'https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f4d3696d938c900072679fd/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=0a5bc850-66f7-11ef-990f-c236ff993484&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=dadb5ed1-9bf3-46f6-a2b7-01e9b9abb5c4&userId=&serverSideAds=true';
        
        ch24
        'http://200.115.120.1:8000/play/ca032/index.m3u8';
        
*/