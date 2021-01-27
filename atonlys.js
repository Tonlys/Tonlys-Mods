global.client = client;

//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma

client.config = {

  token : "", //Bot Token
  prefix : "!", //Bot Prefix
  guildid : "78080651575836732", //Sunucu ID
  sahip : "737370716680224851", //Sahip ID
  footer : "Moderasyon ❤️ Tonlys", //Bot Bio
  status : "dnd", //online //çevrim içi || idle // boşta || dnd //rahatsız etmeeyin || invisible /görünmez
  botses : "", //Botun gireceği ses kanal id si  

  owner : "", //Sunucu Genel Kurucusu
  cezapuan : "", //Ceza Puan Log Kanalı
  booster : "", //Booster Rol


  taglar : {
    tag : "", //Tag 1
    TagVarYok : false, //False ise sadece tagı alır kayıtlarda eğer true ise 2. tagı aktif eder tag rolü olmayana tag2 verir
    tag2 : "", //Tag 2
    tagrol : "", //Tag Rolü
  },

  SadeceTaglı : false, //False ise herkes kullana bilir //True ise sadece taglı ve booster kullana bilir

  chatmute : {
    yetkili : "", //Chat Mute Yetkili
    log : "", //Chat Mute
    rol : "", //Chat Mute Rolü
  },
  
  voicemute : { 
    yetkili : "", //Voice Mute Yetkili
    log : "", //Voice Mute
    rol : "", //Voice Mute Rolü
  },

  meeting : {
    log : "", //Meeting Ses Kanalı
  },

  jail : {
    yetkili : "", //Jail Yetkili
    rol : "", //Jailli Rol
    log : "", //Jail Log
  },

  ban : {
    forceban : "", //Force Ban Yetkili
    banyetkili : "", //Normal Ban Yetkilisi
    log : "", //Logu
    banlimit : 3, //Ban Limitin Kaç olacağını yazınız Örnek (3 : yetkili 3 kere ban attıktan sonra yetkisini çeker)
  },

  allmute : {
    yetkili : "", //All Mute Yetkili
  },

  karaliste : {
    yetkili : "", //Kara Liste Yetkili 
    log : "", //Kara liste Log
  },
  cezabilgi : {
    yetkili : "", //Ceza Bilgi Yetkili
  },
  
  yetkilisay : {
    yetkili : "", //Komutu Kullanacak Yetkili
    altyetkili : "", //En Alt Yetkili
  },

  kilit : {
    yetkili : "", //Kanal Kilit Yetkili
  },

  guildMemberAdd : {
    guvenli : "", //7 Gün Önce Açılmış Hesap Log
    forceban : "", //Kalıcı Ban log (Kalıcı ban yemiş üyenin banı açılmıştır ve sunucuya tekrar girese ban atar bunu logu)
    jail : "", //Jailli üye çık gir yaparsa
  },

  trasport: {
    yetkili : "", //Çek Yetkili
  },

  register : {
    erkek : ["","",""], //Erkek Rollerini Sırayla Giriniz
    kız : ["","",""], //Kız Rollerini Tek Tek Giriniz
    kayıtsız : "", //Kayıtsız Rol ID
    yetkili : "", //Register Yetkili
  },

  emoji : {

    sıfır : "0", //0 Emoji Örnek : <a:sıfır:1234567891011>
    bir : "1", //1 Emoji Örnek : <a:bir:1234567891011>
    iki : "2", //2 Emoji Örnek : <a:iki:1234567891011>
    üç : "3", //3 Emoji Örnek : <a:üç:1234567891011> 
    dört : "4", //4 Emoji Örnek : <a:dört:1234567891011>
    beş : "5" , //5 Emoji Örnek : <a:beş:1234567891011>
    altı : "6", //6 Emoji Örnek : <a:altı:1234567891011>
    yedi : "7", //7 Emoji Örnek : <a:yedi:1234567891011>
    sekiz : "8", //8 Emoji Örnek : <a:sekiz:1234567891011>
    dokuz : "9", //9 Emoji Örnek : <a:dokuz:1234567891011>

    onay : "✅", //Onay Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
    red : "❌", //Red Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
  },

}
