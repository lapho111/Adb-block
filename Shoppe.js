#!name=Shopee
#!desc= Unlock by Lạp Hộ

[Rule]
# ===== SHOPEE CORE (GIỮ HOẠT ĐỘNG CHÍNH) =====
DOMAIN-SUFFIX,shopee.vn,DIRECT
DOMAIN-SUFFIX,shopee.co.id,DIRECT
DOMAIN-SUFFIX,shopee.sg,DIRECT
DOMAIN-SUFFIX,shopee.tw,DIRECT
DOMAIN-SUFFIX,shopeemobile.com,DIRECT
DOMAIN-SUFFIX,shp.ee,DIRECT
DOMAIN-SUFFIX,shopeeusercontent.com,DIRECT
DOMAIN-SUFFIX,shopeeusercontent.com.my,DIRECT
DOMAIN-SUFFIX,shopeeusercontent.com.vn,DIRECT
DOMAIN-SUFFIX,shopeeusercontent.com.sg,DIRECT

# CDN / IMAGE / VIDEO (KHÔNG ĐỤNG)
DOMAIN-SUFFIX,akamaihd.net,DIRECT
DOMAIN-SUFFIX,akamaized.net,DIRECT
DOMAIN-SUFFIX,cloudfront.net,DIRECT

# ===== CHẶN ADS & TRACKING (MỨC 1) =====
DOMAIN-SUFFIX,ads.shopee.vn,REJECT
DOMAIN-SUFFIX,ads.shopee.sg,REJECT
DOMAIN-SUFFIX,ads.shopee.co.id,REJECT
DOMAIN-SUFFIX,adservice.shopee.vn,REJECT
DOMAIN-SUFFIX,marketing.shopee.vn,REJECT

DOMAIN-SUFFIX,adjust.com,REJECT
DOMAIN-SUFFIX,app-measurement.com,REJECT
DOMAIN-SUFFIX,google-analytics.com,REJECT
DOMAIN-SUFFIX,googletagmanager.com,REJECT
DOMAIN-SUFFIX,facebook-analytics.com,REJECT

# ===== CHẶN SDK QUẢNG CÁO NGOÀI =====
DOMAIN-SUFFIX,applovin.com,REJECT
DOMAIN-SUFFIX,applvn.com,REJECT
DOMAIN-SUFFIX,unityads.unity3d.com,REJECT
DOMAIN-SUFFIX,ironsrc.com,REJECT
DOMAIN-SUFFIX,vungle.com,REJECT
DOMAIN-SUFFIX,inmobi.com,REJECT
DOMAIN-SUFFIX,pangle.io,REJECT

[URL Rewrite]
# Popup / banner / impression
^https?:\/\/.*\/(ads|ad|banner|popup|impression|tracking)\/.* reject
^https?:\/\/app\.adjust\.com\/.* reject

[MITM]
enable = true
hostname =
ads.shopee.vn,
ads.shopee.sg,
ads.shopee.co.id,
adservice.shopee.vn,
marketing.shopee.vn,
app.adjust.com
