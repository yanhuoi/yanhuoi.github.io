 const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true, //自动播放
    listFolded: true, //播放列表默认折叠
    listMaxHeight: 90, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
    preload: 'none', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.3, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [
	{
        name: '天空之外',
        artist: '解语花',
        lrc: '/downloads/lrc/天空之外-解语花.lrc',
        cover: 'http://d.musicapp.migu.cn/prod/file-service/file-down/b1899d500dda5db2da11df3efc89cba6/b2c133ce36177395a520776c29125ff5/c6a125f4f442a9dabc6f7723e08e967a',
        url: 'https://sharefs.yun.kugou.com/202102162304/b3e975605fec34f2ad586504105c140d/KGTX/CLTX001/db98817b4a1295984d5a3ed90cb017cc.mp3'
      },
	{
        name: '天空之城',
        artist: '蒋敦豪',
        lrc: '/downloads/lrc/天空之城(Live)-选择导师：汪峰-蒋敦豪.lrc',
        cover: 'https://app.onenine.cc/m/api/cover/yqb/id/d233u2use_rfctqYBW1Nnh0lisMYfvNWwkyZQa8XAKF3TDSYSqo',
        url: 'https://sharefs.yun.kugou.com/202102162305/906c81ebccc04cc4d20d2c5a408cfa3d/G072/M01/04/09/iA0DAFeIm-aAfLf-ADu0idGSHtI908.mp3'
      },
	{
        name: '经济舱 (Live)',
        artist: 'Kafe.Hu',
        lrc: '/downloads/lrc/经济舱 (Live)-Kafe.Hu.lrc',
        cover: 'https://p4.music.126.net/iXfcMxrGisgh5Dxkc3HTFQ==/109951165393530790.jpg',
        url: 'http://music.163.com/song/media/outer/url?id=1487528112.mp3'
      },
	{
        name: '沐白',
        artist: '四季音色',
        lrc: '/downloads/lrc/沐白-四季音色.lrc',
        cover: 'https://p4.music.126.net/FI7UL7uAIWI8BsN5Muo8Nw==/109951163130601845.jpg',
        url: 'http://music.163.com/song/media/outer/url?id=535331509.mp3'
      },
	{
        name: '飘向北方 (Live)',
        artist: '那吾克热-NW,尤长靖',
        lrc: '/downloads/lrc/飘向北方 (Live)-那吾克热-NW,尤长靖.lrc',
        cover: 'https://p4.music.126.net/D-mpVLLwMrA-hPu0QPYUNQ==/109951163551410648.jpg',
        url: 'http://music.163.com/song/media/outer/url?id=1308818967.mp3'
      },
	{
        name: '飞',
        artist: '王恩信Est,二胖u（王訫）',
        lrc: '/downloads/lrc/飞-王恩信Est,二胖u（王訫）.lrc',
        cover: 'https://p4.music.126.net/_5I2VNMes4k4lh5RyKI50A==/109951164532205791.jpg',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3'
      },
    ]
  });

  //实现切换音频时，根据音频的封面图片自适应主题色
  const colorThief = new ColorThief();
  const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
      colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
        ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
      });
    }
  };
  setTheme(ap.list.index);
  ap.on('listswitch', (data) => {
    setTheme(data.index);
  });