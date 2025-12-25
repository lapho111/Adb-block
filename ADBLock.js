#!name=AdBlock Pro
#!desc=Tối ưu Safari, Terabox, TikTok, Facebook , X, Game (Garena)
#!Unlock by Lạp Hộ

[Rule]
# ===== CORE WHITELIST (ƯU TIÊN ĐĂNG NHẬP & GAME) =====
DOMAIN-SUFFIX,google.com,DIRECT
DOMAIN-SUFFIX,googleapis.com,DIRECT
DOMAIN-SUFFIX,gstatic.com,DIRECT
DOMAIN-KEYWORD,garena,DIRECT
DOMAIN-SUFFIX,kgvn.garena.vn,DIRECT
DOMAIN-SUFFIX,cdn.garenanow.com,DIRECT

# Facebook core (để app hoạt động)
DOMAIN-SUFFIX,facebook.com,DIRECT
DOMAIN-SUFFIX,facebook.net,DIRECT
DOMAIN-SUFFIX,fbcdn.net,DIRECT
DOMAIN-SUFFIX,graph.facebook.com,DIRECT

# ===== CHẶN ADS WEB & POPUP =====
DOMAIN-SUFFIX,propellerads.com,REJECT
DOMAIN-SUFFIX,popads.net,REJECT
DOMAIN-SUFFIX,pushnami.com,REJECT
DOMAIN-SUFFIX,adsterra.com,REJECT

# ===== CHẶN ADS GOOGLE =====
DOMAIN-SUFFIX,doubleclick.net,REJECT
DOMAIN-SUFFIX,googlesyndication.com,REJECT
DOMAIN-SUFFIX,googleadservices.com,REJECT

# ===== CHẶN ADS APP / GAME =====
DOMAIN-SUFFIX,applovin.com,REJECT
DOMAIN-SUFFIX,applvn.com,REJECT
DOMAIN-SUFFIX,unityads.unity3d.com,REJECT
DOMAIN-SUFFIX,ironsrc.com,REJECT
DOMAIN-SUFFIX,vungle.com,REJECT
DOMAIN-SUFFIX,inmobi.com,REJECT
DOMAIN-SUFFIX,pangle.io,REJECT

# ===== CHẶN ADS TIKTOK =====
DOMAIN-SUFFIX,ads.tiktok.com,REJECT
DOMAIN-SUFFIX,ads-api.tiktok.com,REJECT
DOMAIN-SUFFIX,analytics.tiktok.com,REJECT

# ===== CHẶN ADS FACEBOOK =====
DOMAIN-SUFFIX,ads.facebook.com,REJECT
DOMAIN-SUFFIX,an.facebook.com,REJECT
DOMAIN-SUFFIX,static.ads.facebook.com,REJECT

# ===== X (Twitter) =====
DOMAIN-SUFFIX,x.com,DIRECT
DOMAIN-SUFFIX,twitter.com,DIRECT
DOMAIN-SUFFIX,twimg.com,DIRECT

DOMAIN-SUFFIX,ads-twitter.com,REJECT
DOMAIN-SUFFIX,ads-api.twitter.com,REJECT
DOMAIN-SUFFIX,static.ads-twitter.com,REJECT

DOMAIN-SUFFIX,analytics.twitter.com,REJECT
DOMAIN-SUFFIX,scribe.twitter.com,REJECT
DOMAIN-SUFFIX,log.twitter.com,REJECT


[URL Rewrite]
# Popup / tracking chung
^https?:\/\/.*\/(popup|popunder|push|adsrv|adserver)\/.* reject
^https?:\/\/app\.adjust\.com\/.* reject

# Facebook ads / audience network
^https?:\/\/.*facebook\.com\/.*\/ads\/.* reject
^https?:\/\/.*\/adnw\/.* reject
^https?:\/\/.*\/audience_network\/.* reject
^https?:\/\/.*\/impression\/.* reject
^https?:\/\/.*facebook\.com\/api\/graphql\/.*sponsored.* reject
^https?:\/\/.*facebook\.com\/api\/graphql\/.*ads_metadata.* reject


# X / Twitter – promoted & tracking
^https?:\/\/.*twitter\.com\/i\/api\/.*\/ads.* reject
^https?:\/\/.*twitter\.com\/i\/api\/.*\/promoted.* reject
^https?:\/\/.*twitter\.com\/i\/api\/.*\/scribe.* reject
^https?:\/\/.*twitter\.com\/i\/api\/.*\/impression.* reject


[MITM]
enable = true
hostname =
*.doubleclick.net,
*.googlesyndication.com,
*.googleadservices.com,
*.applovin.com,
*.applvn.com,
*.unityads.unity3d.com,
*.ironsrc.com,
*.vungle.com,
*.inmobi.com,
*.pangle.io,
*.amazon-adsystem.com,
ads.tiktok.com,
ads-api.tiktok.com,
analytics.tiktok.com,
ads.facebook.com,
an.facebook.com,
static.ads.facebook.com,
ads-twitter.com,
ads-api.twitter.com,
analytics.twitter.com
