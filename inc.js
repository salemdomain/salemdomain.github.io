var _0 = ["11v-ehcac-niamodmelas", "split", "", "reverse", "join", "/", "smret/", "ycavirp/", "noos-gnimoc/", "pbew.nocivaf/", "gnp.nocivaf/", "gpj.egami-go/", "addEventListener", "llatsni", "waitUntil", "open", "then", "addAll", "skipWaiting", "etavitca", "keys", "all", "filter", "map", "delete", "clients", "claim", "hctef", "method", "TEG", "url", "origin", "location", "_3", "mode", "etagivan", "headers", "get", "tpecca", "includes", "lmth/txet", "respondWith", "_4", "clone", "put", "catch", "match"];
var _ = function (s, h) {
  return s + h;
}(172791 ^ 172799, 565863 ^ 565871);
const CACHE_NAME = _0[0][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]);
_ = (511344 ^ 511346) + (175916 ^ 175913);
var _2 = function (s, h) {
  return s ^ h;
}(160915, 160919);
const CORE_ASSETS = [_0[5], _0[6][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), _0[7][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), _0[8][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), _0[9][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), _0[10][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), _0[11][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2])];
_2 = (570968 ^ 570972) + (251017 ^ 251022);
self[_0[12]](_0[13][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), event => {
  event[_0[14]](caches[_0[15]](CACHE_NAME)[_0[16]](cache => cache[_0[17]](CORE_ASSETS))[_0[16]](() => self[_0[18]]()));
});
self[_0[12]](_0[19][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), event => {
  event[_0[14]](caches[_0[20]]()[_0[16]](names => Promise[_0[21]](names[_0[22]](name => name !== CACHE_NAME)[_0[23]](name => caches[_0[24]](name))))[_0[16]](() => self[_0[25]][_0[26]]()));
});
self[_0[12]](_0[27][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]), event => {
  const {
    request
  } = event;
  if (request[_0[28]] !== _0[29][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]) || new URL(request[_0[30]])[_0[31]] !== self[_0[32]][_0[31]]) {
    return;
  }
  var _3 = _0[33];
  const _1 = request[_0[34]] === _0[35][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]) || (request[_0[36]][_0[37]](_0[38][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2])) || _0[2])[_0[39]](_0[40][_0[1]](_0[2])[_0[3]]()[_0[4]](_0[2]));
  _3 = function () {
    return 360681 ^ 360685;
  }();
  if (_1) {
    event[_0[41]](fetch(request)[_0[16]](response => {
      var _4 = _0[42];
      const _6 = response[_0[43]]();
      _4 = function () {
        return _0[42];
      }();
      caches[_0[15]](CACHE_NAME)[_0[16]](cache => cache[_0[44]](request, _6));
      return response;
    })[_0[45]](() => caches[_0[46]](request)[_0[16]](cached => cached || caches[_0[46]](_0[5]))));
    return;
  }
  event[_0[41]](caches[_0[46]](request)[_0[16]](cached => {
    if (cached) return cached;
    return fetch(request)[_0[16]](response => {
      var _5 = function (s, h) {
        return s ^ h;
      }(342446, 342445);
      const _7 = response[_0[43]]();
      _5 = function () {
        return 518642 ^ 518647;
      }();
      caches[_0[15]](CACHE_NAME)[_0[16]](cache => cache[_0[44]](request, _7));
      return response;
    })[_0[45]](() => cached);
  }));
});
