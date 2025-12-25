#!name = Youtobe
#!desx = Unlock By Lạp Hộ

 

[Rule]
RULE-SET, https://raw.githubusercontent.com/lapho111/Shadowrocket/refs/heads/main/YouTube3.js,REJECT
RULE-SET, https://raw.githubusercontent.com/lapho111/Shadowrocket/refs/heads/main/YouTube4.js,DIRECT
DOMAIN-SUFFIX,googlevideo.com,DIRECT
DOMAIN-SUFFIX,youtubei.googleapis.com,DIRECT
DOMAIN-SUFFIX,ytimg.com,DIRECT
DOMAIN-SUFFIX,doubleclick.net,REJECT

[URL Rewrite]
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302 
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad reject 
^https?:\/\/(www|s)\.youtube\.com\/(api\/stats\/ads|pagead|ptracking)
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext reject 
^https?:\/\/[\w-]+\.googlevideo\.com\/initplayback.+&oad reject 
^https?:\/\/.+\.googlevideo\.com\/ptracking\?pltype=adhost reject 
^https?:\/\/.+\.youtube\.com\/api\/stats\/.+adformat reject
^https?:\/\/m\.youtube\.com\/_get_ads reject
^https?:\/\/pagead2\.googlesyndication\.com\/pagead\/ reject  
^https?:\/\/s\.youtube\.com\/api\/stats\/watchtime\?adformat reject
^https?:\/\/youtubei\.googleapis\.com\/.+ad_break reject  # Thay reject header
^https?:\/\/(www)?\.doubleclick\.net\/ reject
[MITM]   
hostname = %APPEND% *.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com,doubleclick.net,ytimg.com
