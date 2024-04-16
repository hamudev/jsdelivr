(function (_0x55907b, _0x19117b) {
  var _0x2c0c12 = _0x55907b();
  while (true) {
    try {
      var _0x1834d6 = parseInt(_0x1ffa(3395, "32XG")) / 1 + parseInt(_0x1ffa(3068, "p%8k")) / 2 + -parseInt(_0x1ffa(1976, "#8)O")) / 3 * (-parseInt(_0x1ffa(1978, "]chU")) / 4) + parseInt(_0x1ffa(4962, "AZEO")) / 5 + -parseInt(_0x1ffa(1828, "iyXL")) / 6 * (-parseInt(_0x1ffa(1243, ")GfZ")) / 7) + parseInt(_0x1ffa(2519, "Es4I")) / 8 * (-parseInt(_0x1ffa(5849, "!loO")) / 9) + -parseInt(_0x1ffa(4876, "xnm@")) / 10;
      if (_0x1834d6 === _0x19117b) {
        break;
      } else {
        _0x2c0c12.push(_0x2c0c12.shift());
      }
    } catch (_0x294c86) {
      _0x2c0c12.push(_0x2c0c12.shift());
    }
  }
})(_0x36a2, 140796);
var _0x3cd00d = function () {
  var _0x5ed142 = true;
  return function (_0x5ccdd6, _0x50371e) {
    var _0x2a93b6 = _0x5ed142 ? function () {
      if (_0x50371e) {
        var _0x1d7f8e = _0x50371e.apply(_0x5ccdd6, arguments);
        _0x50371e = null;
        return _0x1d7f8e;
      }
    } : function () {};
    _0x5ed142 = false;
    return _0x2a93b6;
  };
}();
var _0x53953a = _0x3cd00d(this, function () {
  return _0x53953a.toString().search("(((.+)+)+)+$").toString().constructor(_0x53953a).search("(((.+)+)+)+$");
});
function _0x42e6de(_0x3a9458, _0x1291a1, _0x8e61af, _0x5ef407) {
  return _0x1ffa(_0x8e61af - 0x293, _0x5ef407);
}
_0x53953a();
var _0xe3d3f3 = function () {
  var _0x14aa09 = true;
  return function (_0x1de00d, _0x81cda1) {
    var _0x523a76 = _0x14aa09 ? function () {
      if (_0x81cda1) {
        var _0x1982d4 = _0x81cda1.apply(_0x1de00d, arguments);
        _0x81cda1 = null;
        return _0x1982d4;
      }
    } : function () {};
    _0x14aa09 = false;
    return _0x523a76;
  };
}();
var _0xe954a9 = _0xe3d3f3(this, function () {
  var _0x56cbff;
  try {
    var _0x5f2976 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x56cbff = _0x5f2976();
  } catch (_0x139835) {
    _0x56cbff = window;
  }
  var _0x3f4aaf = _0x56cbff.console = _0x56cbff.console || {};
  var _0x4195dd = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var _0x37f948 = 0; _0x37f948 < _0x4195dd.length; _0x37f948++) {
    var _0x149431 = _0xe3d3f3.constructor.prototype.bind(_0xe3d3f3);
    var _0x4935a9 = _0x4195dd[_0x37f948];
    var _0x45b068 = _0x3f4aaf[_0x4935a9] || _0x149431;
    _0x149431.__proto__ = _0xe3d3f3.bind(_0xe3d3f3);
    _0x149431.toString = _0x45b068.toString.bind(_0x45b068);
    _0x3f4aaf[_0x4935a9] = _0x149431;
  }
});
_0xe954a9();
function waktu() {
  var _0x4afc09 = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = _0x4afc09.getHours();
  document.getElementById("menit").innerHTML = _0x4afc09.getMinutes();
  document.getElementById("detik").innerHTML = _0x4afc09.getSeconds();
}
window.setTimeout("waktu()", 1000);
function hari() {
  var _0x4fd5c2 = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
  var _0x4e0260 = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
  var _0x3aa058 = new Date();
  setTimeout("hari()", 0);
  document.getElementById("hasil").innerHTML = _0x4fd5c2[_0x3aa058.getDay()] + ", " + _0x3aa058.getDate() + " " + _0x4e0260[_0x3aa058.getMonth()] + " " + _0x3aa058.getFullYear();
}
window.setTimeout("hari()", 0);
function angkaToRp(_0x18cbba) {
  var _0x5cce88 = '';
  var _0x5385ca = _0x18cbba.toString().split('').reverse().join('');
  for (var _0x1836f0 = 0; _0x1836f0 < _0x5385ca.length; _0x1836f0++) {
    if (_0x1836f0 % 3 == 0) {
      _0x5cce88 += _0x5385ca.substr(_0x1836f0, 3) + ".";
    }
  }
  return "Rp" + _0x5cce88.split('', _0x5cce88.length - 1).reverse().join('');
}
;
function formatBerat(_0x4920bb) {
  if (_0x4920bb <= 0) {
    return "-";
  } else {
    if (_0x4920bb < 1000) {
      return _0x4920bb + " gr";
    } else {
      return _0x4920bb / 1000 + " Kg";
    }
  }
}
;
function formatNama(_0x35ae67) {
  var _0x5ca17a = _0x35ae67.split(" ").join("-");
  _0x5ca17a = _0x5ca17a.toLowerCase();
  return _0x5ca17a;
}
function backNama(_0x1de727) {
  var _0x469c60 = _0x1de727.split("-").join(" ");
  return _0x469c60.replace(/\w\S*/g, function (_0xa4e2fb) {
    return _0xa4e2fb.charAt(0).toUpperCase() + _0xa4e2fb.substr(1).toLowerCase();
  });
}
function shuffle(_0x5563fd) {
  var _0x352e64 = _0x5563fd.length;
  var _0x18a2c8;
  var _0x3c9227;
  while (0 !== _0x352e64) {
    _0x3c9227 = Math.floor(Math.random() * _0x352e64);
    _0x352e64 -= 1;
    _0x18a2c8 = _0x5563fd[_0x352e64];
    _0x5563fd[_0x352e64] = _0x5563fd[_0x3c9227];
    _0x5563fd[_0x3c9227] = _0x18a2c8;
  }
  return _0x5563fd;
}
function formatVariable(_0x563a63) {
  var _0x3324bb = window.location.search.substring(1);
  var _0x33c84e = _0x3324bb.split("&");
  for (var _0x497a12 = 0; _0x497a12 < _0x33c84e.length; _0x497a12++) {
    var _0xadad08 = _0x33c84e[_0x497a12].split(":");
    if (_0xadad08[0] == _0x563a63) {
      return _0xadad08[1];
    }
  }
  return false;
}
function rotatorWA(_0x5c1483) {
  return _0x5c1483[Math.floor(Math.random() * _0x5c1483.length)];
}
;
$(".keranjang-kosong").text("keranjang Anda masih kosong!");
function _0x1ffa(_0x489c83, _0x209b97) {
  var _0x3d92c9 = _0x36a2();
  _0x1ffa = function (_0x458b8c, _0x3037bc) {
    _0x458b8c = _0x458b8c - 316;
    var _0x55314b = _0x3d92c9[_0x458b8c];
    if (_0x1ffa.eLgoEm === undefined) {
      var _0x141cc2 = function (_0x236113) {
        var _0x255e70 = '';
        var _0x330463 = '';
        var _0xef7f64 = _0x255e70 + _0x141cc2;
        var _0x47140e = 0;
        var _0xe8ac96;
        var _0x18067f;
        for (var _0x38b44c = 0; _0x18067f = _0x236113.charAt(_0x38b44c++); ~_0x18067f && (_0xe8ac96 = _0x47140e % 4 ? _0xe8ac96 * 64 + _0x18067f : _0x18067f, _0x47140e++ % 4) ? _0x255e70 += _0xef7f64.charCodeAt(_0x38b44c + 10) - 10 !== 0 ? String.fromCharCode(255 & _0xe8ac96 >> (-2 * _0x47140e & 6)) : _0x47140e : 0) {
          _0x18067f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x18067f);
        }
        var _0x3baf4c = 0;
        for (var _0x407244 = _0x255e70.length; _0x3baf4c < _0x407244; _0x3baf4c++) {
          _0x330463 += "%" + ("00" + _0x255e70.charCodeAt(_0x3baf4c).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x330463);
      };
      var _0x4df17a = function (_0xb9f05f, _0x2d31a1) {
        var _0x31e944 = [];
        var _0x5165d5 = 0;
        var _0x49eeb6;
        var _0x4db786 = '';
        _0xb9f05f = _0x141cc2(_0xb9f05f);
        var _0x2e685e;
        for (_0x2e685e = 0; _0x2e685e < 256; _0x2e685e++) {
          _0x31e944[_0x2e685e] = _0x2e685e;
        }
        for (_0x2e685e = 0; _0x2e685e < 256; _0x2e685e++) {
          _0x5165d5 = (_0x5165d5 + _0x31e944[_0x2e685e] + _0x2d31a1.charCodeAt(_0x2e685e % _0x2d31a1.length)) % 256;
          _0x49eeb6 = _0x31e944[_0x2e685e];
          _0x31e944[_0x2e685e] = _0x31e944[_0x5165d5];
          _0x31e944[_0x5165d5] = _0x49eeb6;
        }
        _0x2e685e = 0;
        _0x5165d5 = 0;
        for (var _0x4ff19c = 0; _0x4ff19c < _0xb9f05f.length; _0x4ff19c++) {
          _0x2e685e = (_0x2e685e + 1) % 256;
          _0x5165d5 = (_0x5165d5 + _0x31e944[_0x2e685e]) % 256;
          _0x49eeb6 = _0x31e944[_0x2e685e];
          _0x31e944[_0x2e685e] = _0x31e944[_0x5165d5];
          _0x31e944[_0x5165d5] = _0x49eeb6;
          _0x4db786 += String.fromCharCode(_0xb9f05f.charCodeAt(_0x4ff19c) ^ _0x31e944[(_0x31e944[_0x2e685e] + _0x31e944[_0x5165d5]) % 256]);
        }
        return _0x4db786;
      };
      _0x1ffa.BbELsk = _0x4df17a;
      _0x489c83 = arguments;
      _0x1ffa.eLgoEm = true;
    }
    var _0x2b213c = _0x3d92c9[0];
    var _0x1447c8 = _0x458b8c + _0x2b213c;
    var _0x32f81e = _0x489c83[_0x1447c8];
    if (!_0x32f81e) {
      if (_0x1ffa.HmmrdX === undefined) {
        var _0x5e04b9 = function (_0x362b) {
          this.LsATeb = _0x362b;
          this.ypfLau = [1, 0, 0];
          this.raECui = function () {
            return "newState";
          };
          this.EJcKFJ = "\\w+ *\\(\\) *{\\w+ *";
          this.OBItfk = "['|\"].+['|\"];? *}";
        };
        _0x5e04b9.prototype.dnmpfD = function () {
          var _0x5d760a = new RegExp(this.EJcKFJ + this.OBItfk);
          var _0x56dc12 = _0x5d760a.test(this.raECui.toString()) ? --this.ypfLau[1] : --this.ypfLau[0];
          return this.XNKJQc(_0x56dc12);
        };
        _0x5e04b9.prototype.XNKJQc = function (_0x35179b) {
          if (!Boolean(~_0x35179b)) {
            return _0x35179b;
          }
          return this.auacVx(this.LsATeb);
        };
        _0x5e04b9.prototype.auacVx = function (_0x19e911) {
          var _0xc4d9c = 0;
          for (var _0x5dbf3f = this.ypfLau.length; _0xc4d9c < _0x5dbf3f; _0xc4d9c++) {
            this.ypfLau.push(Math.round(Math.random()));
            _0x5dbf3f = this.ypfLau.length;
          }
          return _0x19e911(this.ypfLau[0]);
        };
        new _0x5e04b9(_0x1ffa).dnmpfD();
        _0x1ffa.HmmrdX = true;
      }
      _0x55314b = _0x1ffa.BbELsk(_0x55314b, _0x3037bc);
      _0x489c83[_0x1447c8] = _0x55314b;
    } else {
      _0x55314b = _0x32f81e;
    }
    return _0x55314b;
  };
  return _0x1ffa(_0x489c83, _0x209b97);
}

(function (_0x51ea45, _0x1fa924) {
  var _0x276c9c = typeof function () {};
  var _0x298d07 = function (_0x5cbe10) {
    var _0x12230f = {
      "jQuery": "*"
    };
    var _0x19cf88 = 0;
    var _0x36b6a0 = {};
    var _0xb222eb = _0x5cbe10 || "simpleCart";
    var _0x20a4d6 = {};
    var _0x30f2b8 = {};
    var _0x42ab6e = {};
    var _0x3e45fa = _0x51ea45.localStorage;
    var _0x285c16 = _0x51ea45.console || {
      "msgs": [],
      "log": function (_0x4e03df) {
        _0x285c16.msgs.push(_0x4e03df);
      }
    };
    var _0x5e3b17 = {
      "IDR": {
        "code": "IDR",
        "symbol": "Rp",
        "name": "Rupiah Indonesia"
      }
    };
    var _0xe0ec05 = {
      "currency": "IDR",
      "language": "Indonesia",
      "cartStyle": "div",
      "cartColumns": [],
      "excludeFromCheckout": ["thumb"],
      "shippingFlatRate": 0x0,
      "shippingQuantityRate": 0x0,
      "shippingTotalRate": 0x0,
      "shippingCustom": null,
      "taxRate": 0x0,
      "taxShipping": false,
      "data": {}
    };
    var _0x13a602 = function (_0x130127) {
      if (typeof _0x130127 === _0x276c9c) {
        return _0x13a602.ready(_0x130127);
      }
      if (typeof _0x130127 === "object") {
        return _0x13a602.extend(_0xe0ec05, _0x130127);
      }
    };
    var _0x23d63d;
    var _0x1ad04c;
    _0x13a602.extend = function (_0x11fec5, _0x3859e2) {
      var _0x23b4fc;
      if (typeof _0x3859e2 === "undefined") {
        _0x3859e2 = _0x11fec5;
        _0x11fec5 = _0x13a602;
      }
      for (_0x23b4fc in _0x3859e2) {
        if (Object.prototype.hasOwnProperty.call(_0x3859e2, _0x23b4fc)) {
          _0x11fec5[_0x23b4fc] = _0x3859e2[_0x23b4fc];
        }
      }
      return _0x11fec5;
    };
    _0x13a602.extend({
      "copy": function (_0x1e8518) {
        var _0x5a66d1 = _0x298d07(_0x1e8518);
        _0x5a66d1.init();
        return _0x5a66d1;
      }
    });
    _0x13a602.extend({
      "isReady": false,
      "add": function (_0x19465f, _0x8c733d) {
        var _0x5ec5b3 = _0x19465f || {};
        var _0x1efb21 = new _0x13a602.Item(_0x5ec5b3);
        var _0x4fd8ae = true;
        var _0x98bb57 = _0x8c733d === true ? _0x8c733d : false;
        var _0xade8cb;
        if (!_0x98bb57) {
          _0x4fd8ae = _0x13a602.trigger("beforeAdd", [_0x1efb21]);
          if (_0x4fd8ae === false) {
            return false;
          }
        }
        _0xade8cb = _0x13a602.has(_0x1efb21);
        if (_0xade8cb) {
          _0xade8cb.increment(_0x1efb21.quantity());
          _0x1efb21 = _0xade8cb;
        } else {
          _0x36b6a0[_0x1efb21.id()] = _0x1efb21;
        }
        _0x13a602.update();
        if (!_0x98bb57) {
          _0x13a602.trigger("afterAdd", [_0x1efb21, typeof _0xade8cb === "undefined"]);
        }
        return _0x1efb21;
      },
      "each": function (_0xcdb8c9, _0x1c9dc1) {
        var _0x55936d;
        var _0x83778c = 0;
        var _0x2750cb;
        var _0x40ee84;
        var _0x5b0e5d;
        if (typeof _0xcdb8c9 === _0x276c9c) {
          _0x40ee84 = _0xcdb8c9;
          _0x5b0e5d = _0x36b6a0;
        } else {
          if (typeof _0x1c9dc1 === _0x276c9c) {
            _0x40ee84 = _0x1c9dc1;
            _0x5b0e5d = _0xcdb8c9;
          } else {
            return;
          }
        }
        for (_0x55936d in _0x5b0e5d) {
          if (Object.prototype.hasOwnProperty.call(_0x5b0e5d, _0x55936d)) {
            _0x2750cb = _0x40ee84.call(_0x13a602, _0x5b0e5d[_0x55936d], _0x83778c, _0x55936d);
            if (_0x2750cb === false) {
              return;
            }
            _0x83778c += 1;
          }
        }
      },
      "find": function (_0x3f336b) {
        var _0x597f7b = [];
        if (typeof _0x36b6a0[_0x3f336b] === "object") {
          return _0x36b6a0[_0x3f336b];
        }
        if (typeof _0x3f336b === "object") {
          _0x13a602.each(function (_0x11e820) {
            var _0xb9f322 = true;
            _0x13a602.each(_0x3f336b, function (_0x4193bf, _0x1fdfef, _0x1d2dfd) {
              if (typeof _0x4193bf === "string") {
                if (_0x4193bf.match(/<=.*/)) {
                  _0x4193bf = parseFloat(_0x4193bf.replace("<=", ''));
                  if (!(_0x11e820.get(_0x1d2dfd) && parseFloat(_0x11e820.get(_0x1d2dfd)) <= _0x4193bf)) {
                    _0xb9f322 = false;
                  }
                } else {
                  if (_0x4193bf.match(/</)) {
                    _0x4193bf = parseFloat(_0x4193bf.replace("<", ''));
                    if (!(_0x11e820.get(_0x1d2dfd) && parseFloat(_0x11e820.get(_0x1d2dfd)) < _0x4193bf)) {
                      _0xb9f322 = false;
                    }
                  } else {
                    if (_0x4193bf.match(/>=/)) {
                      _0x4193bf = parseFloat(_0x4193bf.replace(">=", ''));
                      if (!(_0x11e820.get(_0x1d2dfd) && parseFloat(_0x11e820.get(_0x1d2dfd)) >= _0x4193bf)) {
                        _0xb9f322 = false;
                      }
                    } else {
                      if (_0x4193bf.match(/>/)) {
                        _0x4193bf = parseFloat(_0x4193bf.replace(">", ''));
                        if (!(_0x11e820.get(_0x1d2dfd) && parseFloat(_0x11e820.get(_0x1d2dfd)) > _0x4193bf)) {
                          _0xb9f322 = false;
                        }
                      } else if (!(_0x11e820.get(_0x1d2dfd) && _0x11e820.get(_0x1d2dfd) === _0x4193bf)) {
                        _0xb9f322 = false;
                      }
                    }
                  }
                }
              } else if (!(_0x11e820.get(_0x1d2dfd) && _0x11e820.get(_0x1d2dfd) === _0x4193bf)) {
                _0xb9f322 = false;
              }
              return _0xb9f322;
            });
            if (_0xb9f322) {
              _0x597f7b.push(_0x11e820);
            }
          });
          return _0x597f7b;
        }
        if (typeof _0x3f336b === "undefined") {
          _0x13a602.each(function (_0x2b8184) {
            _0x597f7b.push(_0x2b8184);
          });
          return _0x597f7b;
        }
        return _0x597f7b;
      },
      "items": function () {
        return this.find();
      },
      "has": function (_0x53f10a) {
        var _0x2b7bac = false;
        _0x13a602.each(function (_0x24d141) {
          if (_0x24d141.equals(_0x53f10a)) {
            _0x2b7bac = _0x24d141;
          }
        });
        return _0x2b7bac;
      },
      "empty": function () {
        var _0x1b6903 = {};
        _0x13a602.each(function (_0x87c6a1) {
          if (_0x87c6a1.remove(true) === false) {
            _0x1b6903[_0x87c6a1.id()] = _0x87c6a1;
          }
        });
        _0x36b6a0 = _0x1b6903;
        _0x13a602.update();
      },
      "quantity": function () {
        var _0xa4bf85 = 0;
        _0x13a602.each(function (_0x487b1a) {
          _0xa4bf85 += _0x487b1a.quantity();
        });
        return _0xa4bf85;
      },
      "totalberat": function () {
        var _0x249ff8 = 0;
        _0x13a602.each(function (_0x178393) {
          _0x249ff8 += _0x178393.totalberat();
        });
        return _0x249ff8;
      },
      "total": function () {
        var _0x5b18a8 = 0;
        _0x13a602.each(function (_0x53e32e) {
          _0x5b18a8 += _0x53e32e.total();
        });
        return _0x5b18a8;
      },
      "grandTotal": function () {
        return _0x13a602.total() + _0x13a602.tax() + _0x13a602.shipping();
      },
      "update": function () {
        _0x13a602.save();
        _0x13a602.trigger("update");
      },
      "init": function () {
        _0x13a602.load();
        _0x13a602.update();
        _0x13a602.ready();
      },
      "$": function (_0x270cba) {
        return new _0x13a602.ELEMENT(_0x270cba);
      },
      "$create": function (_0x5a815a) {
        return _0x13a602.$(_0x1fa924.createElement(_0x5a815a));
      },
      "setupViewTool": function () {
        var _0x7901f5;
        var _0x303c89;
        var _0x4e7ec4 = _0x51ea45;
        var _0x19c122;
        for (_0x19c122 in _0x12230f) {
          if (Object.prototype.hasOwnProperty.call(_0x12230f, _0x19c122) && _0x51ea45[_0x19c122]) {
            _0x7901f5 = _0x12230f[_0x19c122].replace("*", _0x19c122).split(".");
            _0x303c89 = _0x7901f5.shift();
            if (_0x303c89) {
              _0x4e7ec4 = _0x4e7ec4[_0x303c89];
            }
            if (typeof _0x4e7ec4 === "function") {
              _0x23d63d = _0x4e7ec4;
              _0x13a602.extend(_0x13a602.ELEMENT._, _0x20a4d6[_0x19c122]);
              return;
            }
          }
        }
      },
      "ids": function () {
        var _0x58e3d6 = [];
        _0x13a602.each(function (_0x536f5e) {
          _0x58e3d6.push(_0x536f5e.id());
        });
        return _0x58e3d6;
      },
      "save": function () {
        _0x13a602.trigger("beforeSave");
        var _0x494b34 = {};
        _0x13a602.each(function (_0x1c4e50) {
          _0x494b34[_0x1c4e50.id()] = _0x13a602.extend(_0x1c4e50.fields(), _0x1c4e50.options());
        });
        _0x3e45fa.setItem(_0xb222eb + "_items", JSON.stringify(_0x494b34));
        _0x13a602.trigger("afterSave");
      },
      "load": function () {
        _0x36b6a0 = {};
        var _0x2250df = _0x3e45fa.getItem(_0xb222eb + "_items");
        if (!_0x2250df) {
          return;
        }
        try {
          _0x13a602.each(JSON.parse(_0x2250df), function (_0x4752b5) {
            _0x13a602.add(_0x4752b5, true);
          });
        } catch (_0x5c394a) {
          _0x13a602.error("Error Loading data: " + _0x5c394a);
        }
        _0x13a602.trigger("load");
      },
      "ready": function (_0x458277) {
        if (typeof _0x458277 === _0x276c9c) {
          if (_0x13a602.isReady) {
            _0x458277.call(_0x13a602);
          } else {
            _0x13a602.bind("ready", _0x458277);
          }
        } else if (typeof _0x458277 === "undefined" && !_0x13a602.isReady) {
          _0x13a602.trigger("ready");
          _0x13a602.isReady = true;
        }
      },
      "error": function (_0x558b6b) {
        var _0x48a577 = '';
        if (typeof _0x558b6b === "string") {
          _0x48a577 = _0x558b6b;
        } else {
          if (typeof _0x558b6b === "object" && typeof _0x558b6b.message === "string") {
            _0x48a577 = _0x558b6b.message;
          }
        }
        try {
          _0x285c16.log("simpleCart(js) Error: " + _0x48a577);
        } catch (_0x1b6542) {}
        _0x13a602.trigger("error", [_0x558b6b]);
      }
    });
    _0x13a602.extend({
      "tax": function () {
        var _0x3e449e = _0x13a602.total();
        var _0x1c37d5 = _0x13a602.taxRate() * _0x3e449e;
        _0x13a602.each(function (_0xf3634d) {
          if (_0xf3634d.get("tax")) {
            _0x1c37d5 += _0xf3634d.get("tax");
          } else if (_0xf3634d.get("taxRate")) {
            _0x1c37d5 += _0xf3634d.get("taxRate") * _0xf3634d.total();
          }
        });
        return parseFloat(_0x1c37d5);
      },
      "taxRate": function () {
        return 0x0 || 0;
      },
      "shipping": function (_0x44b2b4) {
        if (typeof _0x44b2b4 === _0x276c9c) {
          var _0x4cab55 = {
            shippingCustom: _0x44b2b4
          };
          _0x13a602(_0x4cab55);
          return;
        }
        var _0x4674ba = 0x0 * _0x13a602.quantity() + 0x0 * _0x13a602.total() + 0x0;
        if ("object" === _0x276c9c) {
          _0x4674ba += null.call(_0x13a602);
        }
        _0x13a602.each(function (_0x4263bb) {
          _0x4674ba += parseFloat(_0x4263bb.get("shipping") || 0);
        });
        return parseFloat(_0x4674ba);
      }
    });
    _0x1ad04c = {
      "attr": function (_0x186055, _0x572fc4) {
        return _0x186055.get(_0x572fc4.attr) || '';
      },
      "harga": function (_0x4a4e15, _0x5c691c) {
        return [_0x13a602.toCurrency(_0x4a4e15.get(_0x5c691c.attr) || 0)];
      },
      "currency": function (_0x2238bf, _0x5c93e4) {
        return ["<span class='sub-total'>Sub Total </span> " + _0x13a602.toCurrency(_0x2238bf.get(_0x5c93e4.attr) || 0)];
      },
      "jumlah": function (_0x466762, _0x2ffe23) {
        return [_0x466762.get(_0x2ffe23.attr)];
      },
      "ukuran": function (_0x153feb, _0x30c9b2) {
        return [_0x153feb.get(_0x30c9b2.attr)];
      },
      "link": function (_0x1a46aa, _0x2e2b36) {
        return [_0x1a46aa.get(_0x2e2b36.attr)];
      },
      "linkproduk": function (_0x3b5487, _0x44ff7e) {
        return [_0x3b5487.get(_0x44ff7e.attr)];
      },
      "decrement": function (_0x528842, _0x12e775) {
        return ["<a href='javascript:;' class='" + _0xb222eb + "_decrement'>" + "<svg width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M19,13H5V11H19V13Z\"></path></svg>" + "</a>"];
      },
      "increment": function (_0x327db5, _0xb35abd) {
        return ["<a href='javascript:;' class='" + _0xb222eb + "_increment'>" + "<svg width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\"></path></svg>" + "</a>"];
      },
      "image": function (_0xb2e07d, _0x534e94) {
        return ["<a href='" + _0xb2e07d.get(_0x534e94.attr) + "'><img src='" + _0xb2e07d.get(_0x534e94.attr) + "'/></a>"];
      },
      "name": function (_0x474558, _0x2054ff) {
        return "<a href='" + _0x474558.get(_0x2054ff.attr) + "'>" + _0x2054ff.text + "</a>";
      },
      "input": function (_0x21740a, _0x2ece0c) {
        return ["<input type='text' value='" + _0x21740a.get(_0x2ece0c.attr) + "' class='" + _0xb222eb + "_input'/>"];
      },
      "berat": function (_0x284842, _0x274851) {
        return [_0x284842.get(_0x274851.attr)];
      },
      "totalberat": function (_0x59b86f, _0x45583a) {
        return "<span class='total-berat' data-berat='" + _0x59b86f.get(_0x45583a.attr) + "'>" + "berat " + formatBerat(_0x59b86f.get(_0x45583a.attr)) + "</span>";
      },
      "catatan": function (_0x1be368, _0x25faea) {
        return [_0x1be368.get(_0x25faea.attr)];
      },
      "remove": function (_0x49cfb5, _0x5399c6) {
        return ["<a href='javascript:;' class='" + _0xb222eb + "_remove'>" + "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M21.03,3L18,20.31C17.83,21.27 17,22 16,22H8C7,22 6.17,21.27 6,20.31L2.97,3H21.03M5.36,5L8,20H16L18.64,5H5.36M9,18V14H13V18H9M13,13.18L9.82,10L13,6.82L16.18,10L13,13.18Z\"></path></svg>" + "</a>"];
      }
    };
    function _0x4b93f1(_0x20a3bf) {
      var _0x3eb5fb = _0x20a3bf || {};
      var _0x17f1a5 = {
        attr: '',
        label: '',
        view: "attr",
        text: '',
        className: '',
        hide: false
      };
      return _0x13a602.extend(_0x17f1a5, _0x3eb5fb);
    }
    function _0x546d23(_0x9190ac, _0x33a1e7) {
      var _0x4d4f69 = typeof _0x33a1e7.view === _0x276c9c ? _0x33a1e7.view : typeof _0x33a1e7.view === "string" && typeof _0x1ad04c[_0x33a1e7.view] === _0x276c9c ? _0x1ad04c[_0x33a1e7.view] : _0x1ad04c.attr;
      return _0x4d4f69.call(_0x13a602, _0x9190ac, _0x33a1e7);
    }
    _0x13a602.extend({
      "writeCart": function (_0x2f351e) {
        var _0x3aa67f = "div".toLowerCase();
        var _0x30ce97 = _0x3aa67f === "table";
        var _0x59b63d = _0x30ce97 ? "tr" : "div";
        var _0x59cbd3 = _0x30ce97 ? "th" : "div";
        var _0x426821 = _0x30ce97 ? "td" : "div";
        var _0x4000d5 = _0x30ce97 ? "thead" : "div";
        var _0x21dc80 = _0x13a602.$create(_0x3aa67f);
        var _0x1e405d = _0x13a602.$create(_0x4000d5);
        var _0x3f6882 = _0x13a602.$create(_0x59b63d).addClass("headerRow");
        var _0x54864e = _0x13a602.$(_0x2f351e);
        var _0x118f4a;
        var _0x2a99c9;
        var _0x37665f;
        var _0x23c74b;
        var _0x48683c;
        $(".ck-btn,.harga-total,#total-harga").hide();
        $(".keranjang-kosong").show();
        _0x54864e.html(" ").append(_0x21dc80);
        _0x21dc80.append("<div class=\"empty-cart\"><svg fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z\"></svg><span class=\"center\">Keranjang Anda masih kosong</span></div>");
        _0x1e405d.append(_0x3f6882);
        _0x23c74b = 0;
        for (_0x48683c = _0xe0ec05.cartColumns.length; _0x23c74b < _0x48683c; _0x23c74b += 1) {
          _0x118f4a = _0x4b93f1(_0xe0ec05.cartColumns[_0x23c74b]);
          _0x2a99c9 = "item-" + (_0x118f4a.attr || _0x118f4a.view || _0x118f4a.label || _0x118f4a.text || "cell") + " " + _0x118f4a.className;
          _0x37665f = _0x118f4a.label || '';
          _0x3f6882.append(_0x13a602.$create(_0x59cbd3).addClass(_0x2a99c9).html(_0x37665f));
        }
        _0x13a602.each(function (_0x1f895e, _0x187440) {
          _0x13a602.createCartRow(_0x1f895e, _0x187440, _0x59b63d, _0x426821, _0x21dc80);
        });
        return _0x21dc80;
      },
      "createCartRow": function (_0x312651, _0x29347a, _0x5bc9fa, _0x250b2b, _0x3bcd57) {
        var _0x15882f = _0x13a602.$create(_0x5bc9fa).addClass("itemRow row-" + _0x29347a + " " + (_0x29347a % 2 ? "even" : "odd")).attr("id", "cartItem_" + _0x312651.id());
        var _0x1bdab7;
        var _0x90fd66;
        var _0x8b4533;
        var _0x375745;
        var _0x21ae64;
        var _0x27bf33;
        $(".empty-cart,.keranjang-kosong").hide();
        $(".ck-btn,.harga-total,#total-harga").show();
        _0x3bcd57.append(_0x15882f);
        _0x1bdab7 = 0;
        for (_0x90fd66 = _0xe0ec05.cartColumns.length; _0x1bdab7 < _0x90fd66; _0x1bdab7 += 1) {
          _0x8b4533 = _0x4b93f1(_0xe0ec05.cartColumns[_0x1bdab7]);
          _0x375745 = "item-" + (_0x8b4533.attr || (typeof _0x8b4533.view === "string" ? _0x8b4533.view : _0x8b4533.label || _0x8b4533.text || "cell")) + " " + _0x8b4533.className;
          _0x21ae64 = _0x546d23(_0x312651, _0x8b4533);
          _0x27bf33 = _0x13a602.$create(_0x250b2b).addClass(_0x375745).html(_0x21ae64);
          _0x15882f.append(_0x27bf33);
          $(".item-size").each(function () {
            var _0x11b24d = $(this).text();
            if (_0x11b24d == '') {
              $(this).parents(".itemRow").find(".item-size").remove();
            }
          });
        }
        return _0x15882f;
      }
    });
    _0x13a602.Item = function (_0x6534f7) {
      var _0x144ad5 = {};
      var _0x3c9b47 = this;
      if (typeof _0x6534f7 === "object") {
        _0x13a602.extend(_0x144ad5, _0x6534f7);
      }
      _0x19cf88 += 1;
      _0x144ad5.id = _0x144ad5.id || "SCI-" + _0x19cf88;
      while (!(typeof _0x36b6a0[_0x144ad5.id] === "undefined")) {
        _0x19cf88 += 1;
        _0x144ad5.id = "SCI-" + _0x19cf88;
      }
      function _0x3d9daf() {
        if (typeof _0x144ad5.price === "string") {
          _0x144ad5.price = parseFloat(_0x144ad5.price.replace(_0x13a602.currency().decimal, ".").replace(/[^0-9]/g, ''));
        }
        if (isNaN(_0x144ad5.price)) {
          _0x144ad5.price = 0;
        }
        if (_0x144ad5.price < 0) {
          _0x144ad5.price = 0;
        }
        if (typeof _0x144ad5.quantity === "string") {
          _0x144ad5.quantity = parseInt(_0x144ad5.quantity.replace(_0x13a602.currency().delimiter, ''), 10);
        }
        if (isNaN(_0x144ad5.quantity)) {
          _0x144ad5.quantity = 1;
        }
        if (_0x144ad5.quantity <= 0) {
          _0x3c9b47.remove();
        }
      }
      _0x3c9b47.get = function (_0x5ca1d0, _0xd1f918) {
        var _0x565c53 = !_0xd1f918;
        if (typeof _0x5ca1d0 === "undefined") {
          return _0x5ca1d0;
        }
        return typeof _0x144ad5[_0x5ca1d0] === _0x276c9c ? _0x144ad5[_0x5ca1d0].call(_0x3c9b47) : !(typeof _0x144ad5[_0x5ca1d0] === "undefined") ? _0x144ad5[_0x5ca1d0] : typeof _0x3c9b47[_0x5ca1d0] === _0x276c9c && _0x565c53 ? _0x3c9b47[_0x5ca1d0].call(_0x3c9b47) : !(typeof _0x3c9b47[_0x5ca1d0] === "undefined") && _0x565c53 ? _0x3c9b47[_0x5ca1d0] : _0x144ad5[_0x5ca1d0];
      };
      _0x3c9b47.set = function (_0x2e6c7d, _0xe1fc4a) {
        if (!(typeof _0x2e6c7d === "undefined")) {
          _0x144ad5[_0x2e6c7d.toLowerCase()] = _0xe1fc4a;
          if (_0x2e6c7d.toLowerCase() === "price" || _0x2e6c7d.toLowerCase() === "quantity") {
            _0x3d9daf();
          }
        }
        return _0x3c9b47;
      };
      _0x3c9b47.equals = function (_0x12fed7) {
        for (var _0xaef2df in _0x144ad5) {
          if (Object.prototype.hasOwnProperty.call(_0x144ad5, _0xaef2df)) {
            if (_0xaef2df !== "quantity" && _0xaef2df !== "id") {
              if (_0x12fed7.get(_0xaef2df) !== _0x144ad5[_0xaef2df]) {
                return false;
              }
            }
          }
        }
        return true;
      };
      _0x3c9b47.options = function () {
        var _0x13c13b = {};
        _0x13a602.each(_0x144ad5, function (_0xcfbad1, _0x3a20fb, _0x4ba0e1) {
          var _0x475b03 = true;
          _0x13a602.each(_0x3c9b47.reservedFields(), function (_0x49f463) {
            if (_0x49f463 === _0x4ba0e1) {
              _0x475b03 = false;
            }
            return _0x475b03;
          });
          if (_0x475b03) {
            _0x13c13b[_0x4ba0e1] = _0x3c9b47.get(_0x4ba0e1);
          }
        });
        return _0x13c13b;
      };
      _0x3d9daf();
    };
    _0x13a602.Item._ = _0x13a602.Item.prototype = {
      "increment": function (_0x3ead38) {
        var _0x39877f = _0x3ead38 || 1;
        _0x39877f = parseInt(_0x39877f, 10);
        this.quantity(this.quantity() + _0x39877f);
        if (this.quantity() < 1) {
          this.remove();
          return null;
        }
        return this;
      },
      "decrement": function (_0x32bbfb) {
        var _0x5fdaab = _0x32bbfb || 1;
        return this.increment(-parseInt(_0x5fdaab, 10));
      },
      "remove": function (_0x354992) {
        var _0x557a1a = _0x13a602.trigger("beforeRemove", [_0x36b6a0[this.id()]]);
        if (_0x557a1a === false) {
          return false;
        }
        delete _0x36b6a0[this.id()];
        if (!_0x354992) {
          _0x13a602.update();
        }
        return null;
      },
      "reservedFields": function () {
        return ["quantity", "id", "item_number", "price", "name", "shipping", "tax", "taxRate"];
      },
      "fields": function () {
        var _0xb3632b = {};
        var _0x377143 = this;
        _0x13a602.each(_0x377143.reservedFields(), function (_0x5a2b6c) {
          if (_0x377143.get(_0x5a2b6c)) {
            _0xb3632b[_0x5a2b6c] = _0x377143.get(_0x5a2b6c);
          }
        });
        return _0xb3632b;
      },
      "quantity": function (_0x391f56) {
        return typeof _0x391f56 === "undefined" ? parseInt(this.get("quantity", true) || 1, 10) : this.set("quantity", _0x391f56);
      },
      "price": function (_0x3b4462) {
        return typeof _0x3b4462 === "undefined" ? parseFloat(this.get("price", true).toString().replace(_0x13a602.currency().symbol, '').replace(_0x13a602.currency().delimiter, '') || 1) : this.set("price", parseFloat(_0x3b4462.toString().replace(_0x13a602.currency().symbol, '').replace(_0x13a602.currency().delimiter, '')));
      },
      "id": function () {
        return this.get("id", false);
      },
      "berat": function (_0x5ef462) {
        return typeof _0x5ef462 === "undefined" ? parseInt(this.get("berat", true) || 1, 10) : this.set("berat", _0x5ef462);
      },
      "totalberat": function () {
        return this.quantity() * this.berat();
      },
      "total": function () {
        return this.quantity() * this.price();
      }
    };
    _0x13a602.extend({
      "checkout": function (_0x14a386) {
        if (!_0x14a386.url) {
          return _0x13a602.error("URL required for SendForm Checkout");
        }
        var _0x5d1ff2 = {
          "shipping": _0x13a602.shipping(),
          "totalBerat": _0x13a602.totalberat(),
          "grandTotal": _0x13a602.grandTotal(),
          "total": _0x13a602.total(),
          "itemCount": _0x13a602.find({}).length
        };
        var _0x4c1c27 = _0x14a386.url;
        var _0x3581d4 = _0x14a386.method === "GET" ? "GET" : "POST";
        _0x13a602.each(function (_0x34303b, _0x372234) {
          var _0x3cc066 = _0x372234 + 1;
          var _0x36036f = [];
          var _0x1859d5;
          _0x5d1ff2["item_thumb_" + _0x3cc066] = _0x34303b.get("thumb");
          _0x5d1ff2["item_name_" + _0x3cc066] = _0x34303b.get("name");
          _0x5d1ff2["item_quantity_" + _0x3cc066] = _0x34303b.quantity();
          _0x5d1ff2["item_price_" + _0x3cc066] = _0x34303b.price();
          _0x5d1ff2["item_berat_" + _0x3cc066] = _0x34303b.berat();
          _0x13a602.each(_0x34303b.options(), function (_0x472433, _0xf39bc2, _0x45f00d) {
            _0x1859d5 = true;
            _0x13a602.each(_0xe0ec05.excludeFromCheckout, function (_0x4e6355) {
              if (_0x4e6355 === _0x45f00d) {
                _0x1859d5 = false;
              }
            });
            if (_0x1859d5) {
              _0x36036f.push(_0x45f00d + ": " + _0x472433);
            }
          });
          _0x5d1ff2["item_options_" + _0x3cc066] = _0x36036f.join(", ");
        });
        if (_0x14a386.success) {
          _0x5d1ff2["return"] = _0x14a386.success;
        }
        if (_0x14a386.cancel) {
          _0x5d1ff2.cancel_return = _0x14a386.cancel;
        }
        if (_0x14a386.extra_data) {
          _0x5d1ff2 = _0x13a602.extend(_0x5d1ff2, _0x14a386.extra_data);
        }
        var _0x5ac3bf = {
          type: _0x3581d4,
          url: _0x4c1c27
        };
        _0x5ac3bf.dataType = "json";
        _0x5ac3bf.data = _0x5d1ff2;
        _0x5ac3bf.success = function (_0x6e56d7) {};
        $.ajax(_0x5ac3bf);
      }
    });
    _0x30f2b8 = {
      "bind": function (_0x3686da, _0x3768af) {
        if (!(typeof _0x3768af === _0x276c9c)) {
          return this;
        }
        if (!this._events) {
          this._events = {};
        }
        var _0x3a451a = _0x3686da.split(/ +/);
        _0x13a602.each(_0x3a451a, function (_0x44a469) {
          if (this._events[_0x44a469] === true) {
            _0x3768af.apply(this);
          } else if (!(typeof this._events[_0x44a469] === "undefined")) {
            this._events[_0x44a469].push(_0x3768af);
          } else {
            this._events[_0x44a469] = [_0x3768af];
          }
        });
        return this;
      },
      "trigger": function (_0x4c006b, _0x29c2cb) {
        var _0xd6796a = {
          bZgxf: function (_0x2fb48f, _0xa833b) {
            return _0x2fb48f / _0xa833b;
          }
        };
        _0xd6796a.YZfvC = function (_0x18c1f0, _0x1551d2) {
          return _0x18c1f0 * _0x1551d2;
        };
        var _0x4bd62d = true;
        var _0x282847;
        var _0x13222e;
        if (!this._events) {
          this._events = {};
        }
        if (!(typeof this._events[_0x4c006b] === "undefined") && typeof this._events[_0x4c006b][0] === _0x276c9c) {
          _0x282847 = 0;
          for (_0x13222e = this._events[_0x4c006b].length; _0x282847 < _0x13222e; _0x282847 += 1) {
            _0x4bd62d = this._events[_0x4c006b][_0x282847].apply(this, _0x29c2cb || []);
          }
        }
        if (_0x4bd62d === false) {
          return false;
        }
        return true;
      }
    };
    _0x30f2b8.on = _0x30f2b8.bind;
    _0x13a602.extend(_0x30f2b8);
    _0x13a602.extend(_0x13a602.Item._, _0x30f2b8);
    var _0xfe9f55 = {
      beforeAdd: null,
      afterAdd: null,
      load: null,
      beforeSave: null,
      afterSave: null,
      update: null,
      ready: null,
      checkoutSuccess: null,
      checkoutFail: null,
      beforeCheckout: null,
      beforeRemove: null
    };
    _0x42ab6e = _0xfe9f55;
    _0x13a602(_0x42ab6e);
    _0x13a602.each(_0x42ab6e, function (_0x337e97, _0x58dcd5, _0x357b07) {
      _0x13a602.bind(_0x357b07, function () {
        if (typeof _0xe0ec05[_0x357b07] === _0x276c9c) {
          _0xe0ec05[_0x357b07].apply(this, arguments);
        }
      });
    });
    _0x13a602.bind("beforeAdd", function (_0x31d99a) {
      var _0x376675 = {
        ojUgj: "undefined"
      };
      _0x376675.zpDxE = function (_0x44b367, _0x17c5e1) {
        return _0x44b367 + _0x17c5e1;
      };
      if (_0x13a602.has(_0x31d99a)) {
        $(".info-write").text("Produk ini sudah tersedia di keranjang Anda");
        $("#informasi").show();
        $(".info-button-ok").click(function () {
          $("#informasi").hide();
          return false;
        });
        return false;
      } else {
        $(".notif-tambah-product").html("Produk berhasil ditambahkan").fadeIn("fast").delay(1000).fadeOut(1000);
      }
    });
    _0x13a602.extend({
      "toCurrency": function (_0x3a6b40, _0x57e3a8) {
        var _0x500938 = {
          symbol: "Rp",
          decimal: '',
          delimiter: ".",
          accuracy: 0x0,
          after: false
        };
        var _0x1a67de = parseFloat(_0x3a6b40);
        var _0x3d3566 = _0x57e3a8 || {};
        var _0x3b42a5 = _0x13a602.extend(_0x13a602.extend(_0x500938, _0x13a602.currency()), _0x3d3566);
        var _0x54dcca = _0x1a67de.toFixed(_0x3b42a5.accuracy).split(".");
        var _0x4b02f6 = _0x54dcca[1];
        var _0x1685af = _0x54dcca[0];
        _0x1685af = _0x13a602.chunk(_0x1685af.reverse(), 3).join(_0x3b42a5.delimiter.reverse()).reverse();
        return (!_0x3b42a5.after ? _0x3b42a5.symbol : '') + _0x1685af + (_0x4b02f6 ? _0x3b42a5.decimal + _0x4b02f6 : '') + (_0x3b42a5.after ? _0x3b42a5.symbol : '');
      },
      "chunk": function (_0x2ba4e3, _0x113785) {
        if (typeof _0x113785 === "undefined") {
          _0x113785 = 2;
        }
        var _0x35214c = _0x2ba4e3.match(new RegExp(".{1," + _0x113785 + "}", "g"));
        return _0x35214c || [];
      }
    });
    String.prototype.reverse = function () {
      return this.split('').reverse().join('');
    };
    _0x13a602.extend({
      "currency": function (_0x426eee) {
        if (typeof _0x426eee === "string" && !(typeof _0x5e3b17[_0x426eee] === "undefined")) {
          _0xe0ec05.currency = _0x426eee;
        } else {
          if (typeof _0x426eee === "object") {
            _0x5e3b17[_0x426eee.code] = _0x426eee;
            _0xe0ec05.currency = _0x426eee.code;
          } else {
            return _0x5e3b17.IDR;
          }
        }
      }
    });
    _0x13a602.extend({
      "bindOutlets": function (_0x4c5f18) {
        _0x13a602.each(_0x4c5f18, function (_0x4724ef, _0x4ae082, _0x4469dc) {
          _0x13a602.bind("update", function () {
            _0x13a602.setOutlet("." + _0xb222eb + "_" + _0x4469dc, _0x4724ef);
          });
        });
      },
      "setOutlet": function (_0x113ce1, _0x30dc97) {
        var _0x202365 = _0x30dc97.call(_0x13a602, _0x113ce1);
        if (typeof _0x202365 === "object" && _0x202365.el) {
          _0x13a602.$(_0x113ce1).html(" ").append(_0x202365);
        } else if (!(typeof _0x202365 === "undefined")) {
          _0x13a602.$(_0x113ce1).html(_0x202365);
        }
      },
      "bindInputs": function (_0x236e11) {
        _0x13a602.each(_0x236e11, function (_0x540efb) {
          _0x13a602.setInput("." + _0xb222eb + "_" + _0x540efb.selector, _0x540efb.event, _0x540efb.callback);
        });
      },
      "setInput": function (_0x5c3c51, _0x4b8c39, _0x5ecc11) {
        _0x13a602.$(_0x5c3c51).live(_0x4b8c39, _0x5ecc11);
      }
    });
    _0x13a602.ELEMENT = function (_0x3e7878) {
      this.create(_0x3e7878);
      this.selector = _0x3e7878 || null;
    };
    _0x13a602.extend(_0x20a4d6, {
      "jQuery": {
        "passthrough": function (_0x36a130, _0x53c89f) {
          if (typeof _0x53c89f === "undefined") {
            return this.el[_0x36a130]();
          }
          this.el[_0x36a130](_0x53c89f);
          return this;
        },
        "text": function (_0x16071d) {
          return this.passthrough("text", _0x16071d);
        },
        "html": function (_0x3d192a) {
          return this.passthrough("html", _0x3d192a);
        },
        "val": function (_0x39da17) {
          return this.passthrough("val", _0x39da17);
        },
        "append": function (_0x47afa0) {
          var _0x40b9a7 = _0x47afa0.el || _0x47afa0;
          this.el.append(_0x40b9a7);
          return this;
        },
        "attr": function (_0x23be6b, _0x4e8874) {
          if (typeof _0x4e8874 === "undefined") {
            return this.el.attr(_0x23be6b);
          }
          this.el.attr(_0x23be6b, _0x4e8874);
          return this;
        },
        "remove": function () {
          this.el.remove();
          return this;
        },
        "addClass": function (_0xce8299) {
          this.el.addClass(_0xce8299);
          return this;
        },
        "removeClass": function (_0x921b0e) {
          this.el.removeClass(_0x921b0e);
          return this;
        },
        "each": function (_0x373122) {
          return this.passthrough("each", _0x373122);
        },
        "click": function (_0x105bf0) {
          return this.passthrough("click", _0x105bf0);
        },
        "live": function (_0x15c09e, _0x469905) {
          _0x23d63d(_0x1fa924).delegate(this.selector, _0x15c09e, _0x469905);
          return this;
        },
        "parent": function () {
          return _0x13a602.$(this.el.parent());
        },
        "find": function (_0x2a9bbc) {
          return _0x13a602.$(this.el.find(_0x2a9bbc));
        },
        "closest": function (_0x1658d9) {
          return _0x13a602.$(this.el.closest(_0x1658d9));
        },
        "tag": function () {
          return this.el[0].tagName;
        },
        "descendants": function () {
          return _0x13a602.$(this.el.find("*"));
        },
        "submit": function () {
          return this.el.submit();
        },
        "create": function (_0x5d1b36) {
          this.el = _0x23d63d(_0x5d1b36);
        }
      }
    });
    _0x13a602.ELEMENT._ = _0x13a602.ELEMENT.prototype;
    _0x13a602.ready(_0x13a602.setupViewTool);
    _0x13a602.ready(function () {
      _0x13a602.bindOutlets({
        "total": function () {
          return "<span id='totalharga' data-harga='" + _0x13a602.total() + "'>" + _0x13a602.toCurrency(_0x13a602.total()) + "</span>";
        },
        "totalberat": function () {
          return "<span id='total-berat' data-berat='" + _0x13a602.totalberat() + "'>" + formatBerat(_0x13a602.totalberat()) + "</span>";
        },
        "quantity": function () {
          return _0x13a602.quantity();
        },
        "items": function (_0x45dcf5) {
          _0x13a602.writeCart(_0x45dcf5);
        },
        "tax": function () {
          return _0x13a602.toCurrency(_0x13a602.tax());
        },
        "taxRate": function () {
          return _0x13a602.taxRate().toFixed();
        },
        "shipping": function () {
          return _0x13a602.toCurrency(_0x13a602.shipping());
        },
        "grandTotal": function () {
          return ["<span id='totalpembayaran' class='totalpembayaran' data-normal-total='" + _0x13a602.grandTotal() + "' data-total='" + _0x13a602.grandTotal() + "'>" + _0x13a602.toCurrency(_0x13a602.grandTotal()) + "</span"];
        }
      });
      _0x13a602.bindInputs([{
        "selector": "checkout",
        "event": "click",
        "callback": function () {
          _0x13a602.checkout();
        }
      }, {
        "selector": "empty",
        "event": "click",
        "callback": function () {
          _0x13a602.empty();
        }
      }, {
        "selector": "increment",
        "event": "click",
        "callback": function () {
          _0x13a602.find(_0x13a602.$(this).closest(".itemRow").attr("id").split("_")[1]).increment();
          _0x13a602.update();
        }
      }, {
        "selector": "decrement",
        "event": "click",
        "callback": function () {
          _0x13a602.find(_0x13a602.$(this).closest(".itemRow").attr("id").split("_")[1]).decrement();
          _0x13a602.update();
        }
      }, {
        "selector": "remove",
        "event": "click",
        "callback": function () {
          _0x13a602.find(_0x13a602.$(this).closest(".itemRow").attr("id").split("_")[1]).remove();
        }
      }, {
        "selector": "input",
        "event": "change",
        "callback": function () {
          var _0x3fd659 = _0x13a602.$(this);
          var _0x2d83f9 = _0x3fd659.parent();
          var _0x1e2ef0 = _0x2d83f9.attr("class").split(" ");
          _0x13a602.each(_0x1e2ef0, function (_0x7bd332) {
            if (_0x7bd332.match(/item-.+/i)) {
              var _0x4b9fcf = _0x7bd332.split("-")[1];
              _0x13a602.find(_0x2d83f9.closest(".itemRow").attr("id").split("_")[1]).set(_0x4b9fcf, _0x3fd659.val());
              _0x13a602.update();
              return;
            }
          });
        }
      }, {
        "selector": "shelfItem .item_add",
        "event": "click",
        "callback": function () {
          var _0xfa2653 = _0x13a602.$(this);
          var _0x28011d = {};
          _0xfa2653.closest("." + _0xb222eb + "_shelfItem").descendants().each(function (_0x436fff, _0x5a64fe) {
            var _0x555824 = _0x13a602.$(_0x5a64fe);
            if (_0x555824.attr("class") && _0x555824.attr("class").match(/item_.+/) && !_0x555824.attr("class").match(/item_add/)) {
              _0x13a602.each(_0x555824.attr("class").split(" "), function (_0x2b2987) {
                var _0x3ab351;
                var _0x3cc867;
                var _0x24a0a4;
                if (_0x2b2987.match(/item_.+/)) {
                  _0x3ab351 = _0x2b2987.split("_")[1];
                  _0x3cc867 = '';
                  switch (_0x555824.tag().toLowerCase()) {
                    case "input":
                    case "textarea":
                    case "select":
                      _0x24a0a4 = _0x555824.attr("type");
                      if (!_0x24a0a4 || (_0x24a0a4.toLowerCase() === "checkbox" || _0x24a0a4.toLowerCase() === "radio") && _0x555824.attr("checked") || _0x24a0a4.toLowerCase() === "text" || _0x24a0a4.toLowerCase() === "number") {
                        _0x3cc867 = _0x555824.val();
                      }
                      break;
                    case "img":
                      _0x3cc867 = _0x555824.attr("src");
                      break;
                    default:
                      _0x3cc867 = _0x555824.text();
                      break;
                  }
                  if (_0x3cc867 !== null && _0x3cc867 !== '') {
                    _0x28011d[_0x3ab351.toLowerCase()] = _0x28011d[_0x3ab351.toLowerCase()] ? _0x28011d[_0x3ab351.toLowerCase()] + ", " + _0x3cc867 : _0x3cc867;
                  }
                }
              });
            }
          });
          _0x13a602.add(_0x28011d);
        }
      }]);
    });
    if (_0x1fa924.addEventListener) {
      _0x51ea45.DOMContentLoaded = function () {
        _0x1fa924.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
        _0x13a602.init();
      };
    } else if (_0x1fa924.attachEvent) {
      _0x51ea45.DOMContentLoaded = function () {
        if (_0x1fa924.readyState === "complete") {
          _0x1fa924.detachEvent("onreadystatechange", DOMContentLoaded);
          _0x13a602.init();
        }
      };
    }
    function _0x4587cb() {
      if (_0x13a602.isReady) {
        return;
      }
      try {
        _0x1fa924.documentElement.doScroll("left");
      } catch (_0x390423) {
        setTimeout(_0x4587cb, 1);
        return;
      }
      _0x13a602.init();
    }
    function _0x29ba30() {
      if (_0x1fa924.readyState === "complete") {
        return setTimeout(_0x13a602.init, 1);
      }
      if (_0x1fa924.addEventListener) {
        _0x1fa924.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
        _0x51ea45.addEventListener("load", _0x13a602.init, false);
      } else {
        if (_0x1fa924.attachEvent) {
          _0x1fa924.attachEvent("onreadystatechange", DOMContentLoaded);
          _0x51ea45.attachEvent("onload", _0x13a602.init);
          var _0x388976 = false;
          try {
            _0x388976 = _0x51ea45.frameElement === null;
          } catch (_0x20564c) {}
          if (_0x1fa924.documentElement.doScroll && _0x388976) {
            _0x4587cb();
          }
        }
      }
    }
    _0x29ba30();
    return _0x13a602;
  };
  _0x51ea45.simpleCart = _0x298d07();
})(window, document);
var JSON;
if (!JSON) {
  JSON = {};
}
(function () {
  function _0x44e9a1(_0x4e4abe) {
    /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.lastIndex = 0;
    return /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.test(_0x4e4abe) ? "\"" + _0x4e4abe.replace(/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, function (_0x22e4a3) {
      var _0x3807dd = _0x3fe613[_0x22e4a3];
      return typeof _0x3807dd === "string" ? _0x3807dd : "\\u" + ("0000" + _0x22e4a3.charCodeAt(0).toString(16)).slice(-4);
    }) + "\"" : "\"" + _0x4e4abe + "\"";
  }
  function _0x434f3d(_0x2a125c, _0x5e9466) {
    var _0x3a02e7;
    var _0x2eda78;
    var _0x60cc6a;
    var _0x346732;
    var _0x389d72 = _0x5a2251;
    var _0x5d1e4d;
    var _0x5907be = _0x5e9466[_0x2a125c];
    if (_0x5907be && typeof _0x5907be === "object" && typeof _0x5907be.toJSON === "function") {
      _0x5907be = _0x5907be.toJSON(_0x2a125c);
    }
    if (typeof _0x17aede === "function") {
      _0x5907be = _0x17aede.call(_0x5e9466, _0x2a125c, _0x5907be);
    }
    switch (typeof _0x5907be) {
      case "string":
        return _0x44e9a1(_0x5907be);
      case "number":
        return isFinite(_0x5907be) ? String(_0x5907be) : "null";
      case "boolean":
      case "null":
        return String(_0x5907be);
      case "object":
        if (!_0x5907be) {
          return "null";
        }
        _0x5a2251 += _0x348c43;
        _0x5d1e4d = [];
        if (Object.prototype.toString.apply(_0x5907be) === "[object Array]") {
          _0x346732 = _0x5907be.length;
          for (_0x3a02e7 = 0; _0x3a02e7 < _0x346732; _0x3a02e7 += 1) {
            _0x5d1e4d[_0x3a02e7] = _0x434f3d(_0x3a02e7, _0x5907be) || "null";
          }
          _0x60cc6a = _0x5d1e4d.length === 0 ? "[]" : _0x5a2251 ? "[\n" + _0x5a2251 + _0x5d1e4d.join(",\n" + _0x5a2251) + "\n" + _0x389d72 + "]" : "[" + _0x5d1e4d.join(",") + "]";
          _0x5a2251 = _0x389d72;
          return _0x60cc6a;
        }
        if (_0x17aede && typeof _0x17aede === "object") {
          _0x346732 = _0x17aede.length;
          for (_0x3a02e7 = 0; _0x3a02e7 < _0x346732; _0x3a02e7 += 1) {
            if (typeof _0x17aede[_0x3a02e7] === "string") {
              _0x2eda78 = _0x17aede[_0x3a02e7];
              if (_0x60cc6a = _0x434f3d(_0x2eda78, _0x5907be)) {
                _0x5d1e4d.push(_0x44e9a1(_0x2eda78) + (_0x5a2251 ? ": " : ":") + _0x60cc6a);
              }
            }
          }
        } else {
          for (_0x2eda78 in _0x5907be) if (Object.prototype.hasOwnProperty.call(_0x5907be, _0x2eda78) && (_0x60cc6a = _0x434f3d(_0x2eda78, _0x5907be))) {
            _0x5d1e4d.push(_0x44e9a1(_0x2eda78) + (_0x5a2251 ? ": " : ":") + _0x60cc6a);
          }
        }
        _0x60cc6a = _0x5d1e4d.length === 0 ? "{}" : _0x5a2251 ? "{\n" + _0x5a2251 + _0x5d1e4d.join(",\n" + _0x5a2251) + "\n" + _0x389d72 + "}" : "{" + _0x5d1e4d.join(",") + "}";
        _0x5a2251 = _0x389d72;
        return _0x60cc6a;
    }
  }
  if (typeof Date.prototype.toJSON !== "function") {
    Date.prototype.toJSON = function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + (this.getUTCMonth() + 1 < 10 ? "0" + (this.getUTCMonth() + 1) : this.getUTCMonth() + 1) + "-" + (this.getUTCDate() < 10 ? "0" + this.getUTCDate() : this.getUTCDate()) + "T" + (this.getUTCHours() < 10 ? "0" + this.getUTCHours() : this.getUTCHours()) + ":" + (this.getUTCMinutes() < 10 ? "0" + this.getUTCMinutes() : this.getUTCMinutes()) + ":" + (this.getUTCSeconds() < 10 ? "0" + this.getUTCSeconds() : this.getUTCSeconds()) + "Z" : null;
    };
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
      return this.valueOf();
    };
  }
  var _0x3fe613 = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f"
  };
  _0x3fe613["\r"] = "\\r";
  _0x3fe613["\""] = "\\\"";
  _0x3fe613["\\"] = "\\\\";
  var _0x5a2251;
  var _0x348c43;
  var _0x17aede;
  if (typeof JSON.stringify !== "function") {
    JSON.stringify = function (_0x33e1c3, _0x117187, _0x32d151) {
      var _0x43d8be;
      _0x348c43 = _0x5a2251 = '';
      if (typeof _0x32d151 === "number") {
        for (_0x43d8be = 0; _0x43d8be < _0x32d151; _0x43d8be += 1) {
          _0x348c43 += " ";
        }
      } else if (typeof _0x32d151 === "string") {
        _0x348c43 = _0x32d151;
      }
      if ((_0x17aede = _0x117187) && typeof _0x117187 !== "function" && (typeof _0x117187 !== "object" || typeof _0x117187.length !== "number")) {
        throw Error("JSON.stringify");
      }
      var _0x4fce28 = {
        '': _0x33e1c3
      };
      return _0x434f3d('', _0x4fce28);
    };
  }
  if (typeof JSON.parse !== "function") {
    JSON.parse = function (_0x295af1, _0x39783e) {
      function _0xd35681(_0x30e58b, _0x128a9a) {
        var _0x1393ff;
        var _0x31ddae;
        var _0x50041b = _0x30e58b[_0x128a9a];
        if (_0x50041b && typeof _0x50041b === "object") {
          for (_0x1393ff in _0x50041b) if (Object.prototype.hasOwnProperty.call(_0x50041b, _0x1393ff)) {
            _0x31ddae = _0xd35681(_0x50041b, _0x1393ff);
            if (_0x31ddae !== undefined) {
              _0x50041b[_0x1393ff] = _0x31ddae;
            } else {
              delete _0x50041b[_0x1393ff];
            }
          }
        }
        return _0x39783e.call(_0x30e58b, _0x128a9a, _0x50041b);
      }
      var _0x41b51d;
      var _0x295af1 = String(_0x295af1);
      /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.lastIndex = 0;
      if (/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.test(_0x295af1)) {
        _0x295af1 = _0x295af1.replace(/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, function (_0x4f5d0e) {
          return "\\u" + ("0000" + _0x4f5d0e.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if (/^[\],:{}\s]*$/.test(_0x295af1.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        _0x41b51d = eval("(" + _0x295af1 + ")");
        return typeof _0x39783e === "function" ? _0xd35681({
          '': _0x41b51d
        }, '') : _0x41b51d;
      }
      throw new SyntaxError("JSON.parse");
    };
  }
})();
(function () {
  if (!this.localStorage) {
    if (this.globalStorage) {
      try {
        this.localStorage = this.globalStorage;
      } catch (_0x154bd4) {}
    } else {
      var _0x3e5c56 = document.createElement("div");
      _0x3e5c56.style.display = "none";
      document.getElementsByTagName("head")[0].appendChild(_0x3e5c56);
      if (_0x3e5c56.addBehavior) {
        _0x3e5c56.addBehavior("#default#userdata");
        var _0xb801c = this.localStorage = {
          "length": 0x0,
          "setItem": function (_0x16e44e, _0x2e8f94) {
            _0x3e5c56.load("localStorage");
            _0x16e44e = _0x16e44e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            if (!_0x3e5c56.getAttribute(_0x16e44e)) {
              this.length++;
            }
            _0x3e5c56.setAttribute(_0x16e44e, _0x2e8f94);
            _0x3e5c56.save("localStorage");
          },
          "getItem": function (_0x2bcec0) {
            _0x3e5c56.load("localStorage");
            _0x2bcec0 = _0x2bcec0.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            return _0x3e5c56.getAttribute(_0x2bcec0);
          },
          "removeItem": function (_0x238892) {
            _0x3e5c56.load("localStorage");
            _0x238892 = _0x238892.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            _0x3e5c56.removeAttribute(_0x238892);
            _0x3e5c56.save("localStorage");
            this.length = 0;
          },
          "clear": function () {
            _0x3e5c56.load("localStorage");
            for (var _0x7e32b1 = 0; attr = _0x3e5c56.XMLDocument.documentElement.attributes[_0x7e32b1++];) {
              _0x3e5c56.removeAttribute(attr.name);
            }
            _0x3e5c56.save("localStorage");
            this.length = 0;
          },
          "key": function (_0x47695e) {
            _0x3e5c56.load("localStorage");
            return _0x3e5c56.XMLDocument.documentElement.attributes[_0x47695e];
          }
        };
        _0x3e5c56.load("localStorage");
        _0xb801c.length = _0x3e5c56.XMLDocument.documentElement.attributes.length;
      }
    }
  }
})();
function _0x18343d(_0x3ccd3f, _0x5b264c, _0x596960, _0x189c37) {
  return _0x1ffa(_0x596960 + 0x22c, _0x5b264c);
}
var _0x17c73e = {};
function _0x36a2() {
  var _0x6b0390 = ["CSoOWQe", "WRnRWOBcGG", "k8onF2e1", "W7lcJhXCeG", "pv9nW6LiW4vBWQ1PAG", "lvNcHJvF", "cqtcP28", "hCornK3dGmkDWQ93W7BdIq", "cCo/DMKx", "c8k0i3DN", "DCkYimk2WO0", "nxJcVq5N", "cSo7cXK", "mmoZhJj0WPVcVSoE", "oCoZW5VdKSoTomomW4dcQ8kX", "dx9IhSkpW5S", "tdpdQv8B", "W5xcO1uQ", "WOJdG8k9WO3dTG", "WOSLWQzmWP0", "WPtdLsddT8ok", "phBcGrnu", "WQxdG1vBWQq", "pmoppYvu", "lSopgZ9T", "uIPZWPz1WRO", "W4NdPxWKW7O", "lKHuW7m", "WR0dWOHzWRC", "rKmhWQe8", "W63cNwyMdq", "pmoLocLq", "WRiBWOzFWQu", "rq7cLHnYeq", "csv2WQZdN8kPD8okWPZcSa", "dCkLW4tcL0G", "W4RdK8ozW4JdUq", "WR3cSeCtWQi", "l8kDfgG", "ew5JW7jc", "Dmo0W4BcN8oScmomW4tdU8kX", "W6uSWRJcMH4", "WRu1W4i", "WOxcQ8o7WPrYWOldTmoSCbu", "cHZdHWj9gauCWP3cTq", "WQpdMCo7hui", "WPFcNJPLW58", "WPVdS8o+mKW", "c8otnd8UESoDk8kjW48", "WRvHWOhcI8kwWOy", "W5ZdG8kVW7aO", "WPZdKf9NW4u", "W4pdN8oqW7q", "fSoqWQddRSoj", "W54hFSop", "irSIcIHZ", "nCkIrW", "E8oSzhaQWRX1", "W5lcNNf/ma", "gSktg8o4WR5EW7jPw2W", "uSoTWOxcM8or", "iCokW63dSSkcW53cOLNcN8oA", "W5SdWPFcMW", "WPGhW5WpWOn6kWW", "WPmqW48OWOm", "WOVcGYTPW7y", "WQK7W5ClW5JcVsG", "cqtcSJdcTeaRjYr8", "W40gWOmUWRr4eHBcMIK", "p0z+l8k2", "teZcQCkcgG", "WQ5sWOZcOmku", "cSkky8ohWPS", "m8kmDSoqWQxcISooCdRdHq", "oSkbs8obWPC", "xtxdTe4", "mmoXDN0l", "mSkdzCo2gW", "CKZcGmk/pq", "FNrwdSkuWOf0W5Tj", "WOStW5WyWOHGoW", "WOpdUCkxWP3dOa", "m8kEC8oMWRdcNCojDalcLG", "BWVdOvC7", "W43cO0aVfKldKtyQW6u", "A3jye8kxW5HVW45apa", "mJlcHLNcHq", "ftONkqm", "cH7cSNtcQa", "fhuYW7BcM8oUkmotW4JdRa", "WRu/WO1EWPJdUgVdTSkseq", "ESkVzZFdINX/gWyR", "WRZdImkHWO7dQq9Rt8kQqW", "WRqiW6GDW54", "WPVdKCk/WPpdRq", "mmo7Bwmv", "qCkcxIVdHG", "bd7cGuJcLG", "FK5EW6jnW6vr", "hqdcT3ZcSfC", "WOLuWPFcMSkY", "nCknzG", "nCkJWPJdI8kWmmko", "W6K0W5/dNmooW5VdOCoeo8kB", "hSkNuSo4gW", "cwPfngW", "tsS9rCotWO5EW6WwkW", "m1LjW6PF", "itxcQM7cGa", "c8kyyCkiWOBdHvrEW5BcPa", "WPFdRCoLi28", "emkVW7RcSuZdO8kAWRRcIIq", "WQddImkJWOZcO1a", "o8ofqtuDW7S9WOfOcq", "CdzuWRjk", "W7pdHSoeW6bsWRKRjCkf", "W5BcQeeLxr4", "h2TAb2O", "ESk4zW4", "qcXxWQe", "fMupW7qAW5NdS0tdKSkQ", "WRKMWOviWOC", "WQtcIeuNW7O", "z2X7Ad/cHJjqWRu", "xSkbCx4UkSkdBmohWOO", "sHb0WOddJW", "W4JdJmoNW6/dIW", "p8oRW4r3WQdcImkHgNBdHa", "W5ddSuapW70", "W5uAW48pWOf1", "qSo2baLBCCo3W4OcWPa", "AvtcQCkKWRW", "F8keWPdcRG", "umo6W7nXWOC", "W4OkvSo3W6q", "sCoxW4LhWPu", "mCk5W5VcUua", "ANBcTCkGWQS", "W5VdKmkXW4WK", "nCo7bbrG", "W4VcVeCjoa", "WR7dUSo8eq", "BWzTWOHD", "W5mFWPtcNqldLa", "y3zCfSkpWPPMW4qcpa", "WQtcP21ll8kfWO3cISoxgG", "W4qrWPVcNGtdJCoyv8k4WOC", "kxDhW7fR", "WPKxW4GsWPrXgHdcUaq", "f8kUr8oXWRO", "y8oPWPNcSCoeWORcNcVdISkf", "f8kgW5RcPv4", "zSonqcqtW7WWW4C2tW", "WRNcLwKiWRi", "xSknjmknWQVdK1SzWPq", "CCk+BWFdPq", "WPOgW5Op", "fCkVW7ZcOfNdOSkBWRy", "WPZcNeOpWQu", "AaNdHN0r", "WRhdGmotW6rlWO8LlW", "hCkxjg1i", "zSoip8kNW6hdJ8knn0lcJa", "WPqaW4CAWO96", "WPhdTgnNW47cLSkR", "W6ldHgusW5Kymq", "j8oen1BdTW", "WOFdLJddOComWRFcMaqzya", "nSkYWOBdH8kQ", "e8kueSoU", "WQ/dGN8mW5aklvFcOKu", "tuRcHLvgt1moWOtdOq", "aCk8AmoqeW", "zCo2WP/cMCoI", "cay3fW", "W43cVK1wmW", "qmk2wMu5W4JdQSkmWOXO", "zNBcKSkVWRCliCkQ", "umodsCkRW64xWRWQhs4", "WRtdHCkFWRFdQW", "W4ddIviuW68", "WOiNW4S4WPq", "FCkKWOFcVmk2", "Amk4rCoonWhcT8opWP/dTW", "W4RdIwGuW4Wkmr/cVbG", "W7/cTLfGnW", "yf5jW6TjW7jaWRXS", "WOWKWPLB", "sbZcSNtcQG", "W5JdGvHfWR8rwSocW6pdUq", "ESonW5XgWOa", "gHFcSG", "W4VdTNHVW43cHSkYWPpcTaS", "CmkwBrRdRq", "DSkzFaBdPq", "wSoYdcn4W5tcS8onW483", "ywO/WPuPW5G", "mCkoE8otWPy", "z8kfWPhcSmkquCoFis3dIa", "h3LboSky", "mSk1xmoi", "W5iTBCokW5S", "jsufhI8", "WRdcUvysWRu", "g8kJW4/cIKS", "WRFdPr5lW4yoWRFcGmkDWQ0", "WR8cW7OCWQS", "W4/cRvG", "F8k2E3GiWP9wW6FdO8ok", "CSkDa3ncWQL2", "W5uyWPZcMq", "qMPAWQbrWQVcQHpcGSoR", "E8oCW7PVWQm", "pKHkW6zzW71a", "WQ/dMgusW4HgjHxcVem", "W5hcR2C6oW", "v8kEWRFcNmkl", "FmkeWOddTmoOg3FdHG0L", "ygFcKSkv", "sZPNWQldJ8k1C8kj", "W5ldV3iwW68", "lYNcPNxcLa", "WRtdSCoTihfVACoJWRup", "vmkeyrVcHSopWRiNWQZcMq", "uw4HWOazW5z3q1JcNW", "WRvXWORdKCoaWORcTCkqDmoE", "yCo/gSkaFWhcPa", "WOWiW6LoW4tcRcRcS8oluW", "bfrXdqi", "W4P+W4OEW4hcMsuFW7dcHG", "W63cUHHhW5SxWQFcRmkDWQ0", "Fh5je8k9", "WQ/dJCkKWOtdQG", "iCk1ua", "WRNcId5bWO5DDLRdVWy", "ce1XdLS", "kColiHzw", "c8oxjJ92DCog", "WPldIujcW70quSopW7xdSW", "pCo9o03dKG", "frarpIC", "WQFdSmoKcNfV", "WQ3cQrbl", "cLhcIqPN", "hCoIcdPgWORcSSowW5G", "ySoCWRZcT8o3", "W6uRWOdcNmkwWOFcV8kykW", "vMBcHmk1WRi", "cCkAm8oKWQHbW7Hjth0", "hSkHce1G", "WPxcLgS", "omkibvHhWQu", "WOpdKgDSW60", "DmkLzay", "WRxcNc1VW5G", "vSkeWO3cTCk0", "iSkrW4ZcUCouamkjmMy", "WQW5W5KxWOq", "AbFdH3mv", "W77dN8ozW6LwWO4Rl8omaq", "W5GpDCkg", "WRZdOCoScfHRy8oZW55g", "WQ7dHvvzWPK", "jSkYWQNdR8kdWPpdNHtcK8kk", "pdtcJSkgWQOzmSo0Ad4", "c8kkn8khW5tdLLSgWOBcJa", "tsPx", "CmoVWRpcPW", "W7tdMg4aW4Go", "W5VcTrPUcuNdMtqUW70", "D010qsC", "qCkdyq3cG8oiWRiKWQNcNq", "WPutW4my", "tMnescG", "pMXAW719", "hmotmuRdGmoFWQjGW7ddMq", "zLOjWRy3", "kSoSpvpcQZv9tqDh", "FIzsWOXQ", "WO8aW5azW50", "jSkTWPNdMG", "rszCWRzj", "nCoJENWJ", "E8kmWOZcOSkf", "WOVdTa1UsXxcGwr/WQC", "kSkKWOW", "W44CDmovW5xcN8kZeqaj", "ehpcSHXiW4m4mdRdHG", "rKvGkCkJ", "rCkCmCkmWPxdG1C", "WRNcLfWGWR4", "WQ/dOg1KW7S", "W6/dGCooW5hdRa", "l3RcKSkcWRuSpmkU", "WQ/cVfOuW6qiWQ7cMSkqW6e", "WRxdHSouW6a", "WQNcP3DilCkOWOlcJSoweG", "A8oPW7POWOm", "smobi0ldNCoyW6f4W7JdNG", "v8k1rr5wpCoGW5bmW5W", "d8koawTj", "WPq6W6uiWP4", "xSovWPZcUCoR", "z8o6W4DXWRe", "uvSShJL+fNhcQW", "DebDxcm", "zCo0W61TWQZdGmkM", "d29wnmki", "wSoBj0BdNSkQW61J", "WOVdMIJcRCkZWQZcJL8", "qmojW59LWPO", "hmoynY5G", "hHeXgcr0ha", "are0hXG", "y8o0WRJcSSo5", "dSkhha", "k8kicwG", "cSoejtb3", "W73cGSkiWRqgW4zNDSorcG", "W4BdV8k2W4O3W5m", "WO1gWPBcLmkA", "WQBcSbndW7S", "WOybA8olW7/dMSkIcI8p", "WQxdK8oJWPFdQr4", "W4BdR2rMW4BcGCk0W5/cSWC", "B8kFiCkLW6pdGSoin0BcNa", "isSw", "oCoyWP3dRmo2", "W4ODWPtcMJy", "vmkFyHBcH8oyWQ8GWQhcJq", "hmoanKu", "y8oPWQhcV8oF", "dSk1tmoZbW", "nCkAC8o7WRFcU8opCbFdGa", "eSkvDCoUmG", "DmosW5LpWPO", "tvb4k8kZ", "WRNcKMWOWPy", "j8k0qmo/pahdQCoy", "WQddP8oN", "r8oqW7fxWQW", "W5JdIvHeWRScgSohW7NdOW", "kmkxlmoUWRq", "CCkcxIVdHG", "a8o4r3GO", "WOiOW7SuWOa", "WOZdSdq", "tgb7Ba", "WOZdMuveWPu", "WQ/cRrnnW4aj", "y2nxe8kp", "uvVcHG", "dKX1e1X0WPpdLIy", "uetcPmkdfq", "W44dWPtcJWVdG8o8rmkLWOy", "f8oNCe0w", "W5uVWO3cUqi", "WQddP8kQWPddLq", "iCoNWPL4W6ddMCoZcsS", "emoHWQZdLmon", "amo5hW", "w8k0qcVdHW", "x20gWPmV", "febRW51n", "DdNdLuqp", "q3RcPmkkWPO", "bmoBp0RdM8kzW6W5W7hdJa", "WRJdGSoLW6Lj", "gmoyWOxdTSoi", "h8oZhZz3WPpcUSocW5PW", "eNWMWPa7W5e7qLdcGW", "sIS9rmobWO9kWRSpna", "WPpdP2z1W4W", "EmkCWPRcOSkx", "W77dOmoKW4ZdPG", "mrddLduMn19oW6BdOa", "o0vUW4f1", "W58WWP7cHWe", "n8kdtmoDgG", "W6pdJwzmW58ekW7cS14", "i8oGy2S", "cCkCemoLW6e", "W6lcUNrc", "WPhdGCoHW7DO", "WR9OWOdcG8kq", "W44hDCoC", "tmkiWOJcOmkkcmoo", "W5JdM8orW7hdMW", "W5ZdRSk2W4K", "WP7cU10wWRS", "l8kxm2zW", "WO3dSJaWWPlcN8k8W5JcTfq", "n0H6lg0", "E2qGWPes", "tK96b0rvWOe", "fCkiuCoQkq", "hHhcV2JcOx0I", "t09TCWC", "q8koWPxcOSkp", "fmkHpgXh", "WOOQWOy", "WO7cQrXmWPq", "W4pcI1vOma", "WQtcRqLUW5uvWQC", "WPbBW43dIuFcKSkke8o3W58", "yhFcGSkIWQ4BpCkTvcu", "WRlcKsr7W6W", "smkOwWZdRq", "jmkMWO7dRCkYjCkoWOC", "eJhdR08kW4bQAhJcGa", "gH7dS2NcRfS3yxG/", "W5tcKhiXW6W", "W6FdKSkWW4ir", "WRbWWORcGCk9WOhcOmkcFmoe", "avmKkXddKcTdWQrh", "dCoGlITZ", "EwD0qqW", "WRBdKmoakf0", "n8kNWPRdGSk/j8ky", "tfnRh8kY", "bSopB8ovW4ZdRanqW5/dVW", "WR7dICkBWRldIa", "WP7dOmoMW6Ll", "n8ofWOe", "k8k4vCo7aa", "W7VdQ8kpW4Wo", "a8kFndf3EmoE", "WO/dGSoBW5bQ", "hKH9ef9tWPZdNadcKW", "vsRdLwSi", "s1VcKa", "rWP9WOjm", "zmkaWRZcVmkL", "pCoeW5e", "a8obCa", "WRfLWOhdGCotW4ldSmoyESoB", "wCo3W41qWR0", "zSoGbmkryvlcRCklW4lcPa", "W5XLWPLgWP3cK2KxW67dKa", "h0v1bfy", "d1jnm1W", "WQpdT8kfWPpdQW", "zSoHeSkkCe3cQmkzW4tcPa", "tIzVWQZdLCo7iSoBW4FcPG", "eCkgW7VcVKO", "WQFdTmk/WPxdQG", "lmkeWQ7dHSkN", "qhhcH8k+WP4", "rabtWQnt", "duFcUgFcOwChiInc", "WOhdPCk/WOldUa", "W5pdImo2W6VdIa", "tvnHbe5sW5ldKYlcHa", "hwT0W61c", "WQToWQRcH8kV", "WOGcW4iuWPi", "hmkfd8oUWRfaW4LIrgi", "utz1WQtdJq", "WQRcV34rWRK", "nSkLW5tcG1m", "eSoqkNBdTq", "vmkCifFdGCkrW6LX", "EwH1gCkw", "D8kTAqO", "WRxdJSodW6Xt", "WQldMeXhWPS", "WOtdISotW6rZ", "amk4W6VcKuZdSSkRWRlcMIu", "WPZcO3eJWQi", "W5GcW5WsWOjHi1JcVqO", "fwXOW6nJ", "nCkfASoqWQu", "W6pdUKKiWOPDWRlcKSkmWQK", "gX0Mgq", "W5ddTCk4W5aSW5pcUSk1beG", "brhcOW", "BxlcLCktWPeqn8k8ya", "rmomrSkYW6yFW7PLxMC", "hgLbW5fA", "omo8fX1u", "W7JcVeyNfG", "WPmTWOW", "WPFdHmoJdLu", "WPtcMheL", "CmoJWQhcI8oNWQZcVq3dImkz", "yJXZWRrl", "WQBcSbHj", "eMfHW6nL", "wCkkyg8XkSksC8owWOK", "BLb0ssK", "WOZdQL1HW4S", "aq03hYC", "rmkwFXxdOa", "W4S+WQNcUGS", "W6KPWOFdMmoAW57dVCkyomoa", "A8keW5VcSSoibYtcI0Kg", "A2DAeG", "p0boW6ji", "vmkVkCklWR0", "fSk+y8oqeW", "fCo1gab1", "DNSGWPa4", "zNidsSoaWPLOW41yBW", "WPHok8kyW7xdGCoKq3ng", "W6hdJCksW6Ke", "WPNcP1S9fu7dK2u", "WPdcMheL", "zSo9W4nXWP8", "WORdISk5WOddOW", "WPddI2zdW6O", "WQhdISkgWRhdRW", "WRpdHmoyW6Ln", "WOldKYpdKSoB", "W4Ttoq", "WOhdK3ZdSmoGWRBcIaq2ya", "WOVcHSklWRJcNSo/uSkodae", "W4tdR8kOW40", "lmkdW6/cNNO", "wuiCWP4B", "W7OxxSosW5G", "meLPoCkd", "WO/dSCo7lhC", "WP0TWP5kWOi", "h8kGu8odWRS", "dSkwdCoIWQ9qWRb8qMC", "W5pcL3Hllq", "u8oUWR/cTCoR", "oND+eKC", "WRJcPNiLWP8", "oCkeh3G", "W6pdKSk7WOdcPK5Zc8kNvq", "igjydSkAW5HVW45Ena", "WPxdP3HLW4FcH8kQ", "xmkIWQNcJCkp", "WRavW7exW5u", "WPecW5WHW6y", "oComdZb/", "W5FcMSkiW6tcM8k3q8ksqqC", "WPPwo8kjWQpdJ8oYuhbg", "cxfycLW", "zSkHWR/cSmkR", "WP3cK3uKWRqA", "WPVdPvPhWQe", "ESkXbmouiGxdVmkwW5hdRG", "WRhcRq5pW4yxWQFcL8k+WQG", "EhhcO8kFWRa", "ALrbuXG", "bCo6BwSd", "WPaUW5CiWRlcHMKBW6tcIG", "vcbuWQPmWPhcGHRcGmo5", "W6FdQCk9gtz2nmoRW4K", "WPnEWOdcRCkW", "zCo+W5nW", "ee/cIWzHnZOWW7W", "WQNdGu9nW7e", "bmkfCCkCW4BdNamFW4u", "WPnVWRVcI8kw", "WQFdHLrhWOq", "hCo4aZjRWRhcJ8oHW7e", "WRpcNYOnWPfAD0ldSHO", "aSkpWOldPCku", "i07cHdz8", "qWbiWP9V", "B2n3nmkC", "W6pdPuWzWOjxW6ldGSoyW6W", "WR/dUmo/luW", "W4uptmokW7S", "WPKQWOLh", "zSkLzqZcSx4Lb1ad", "sc7dIM8XWQm", "W7K2W5JdNmocW4pdPmoflCkl", "aCkXr8o/WRK", "iCovnCo+WRBcM8ofDHFdGG", "WOWQW70cW7O", "WPBdJ8kMWRpdGG", "W7eBWPlcKWW", "x8oUuGelimkRW59hWOC", "WQTRWPRcGSkg", "j8kqrSo0WOy", "c0XgiCka", "jSkTWOFcGCk7kCkFWPhcS8kV", "cbO3", "lCoSr0Wv", "WOJdINBcRCoFWRhcKaGWna", "cCobitno", "kshcTw3cPq", "WQxdLCkOWORcRa", "de/cKq", "W5RcHKqSeG", "C8opW6DmWRy", "W5GsWPZcNa", "W4xdRCo0W53dHG", "smowoLxcK8kBW651W6RdNG", "WPFdMYpdPCoMWRVcMq", "W5JcL8ksW7dcM8o1tSota0C", "WOHpWOKuWPjXjsRcTW4", "vSkspuldNSkDWR82", "lCkLW6ZcOKe", "fSktmmoeWPy", "cc0QhHG", "nSoXB20", "j8oWbfFdPa", "DeDzW6PaW7bCW7r4Da", "mLLbW6S", "kKXEW6jcW6u", "k8oOntPY", "WOW5WOvBWP/cL3WcWQy", "dqJcT0RcLG", "lCkcph9N", "W5ZcLx41WRzdsSksWPJcLW", "FhpcJCkLfG", "hb/cO3hcPuT5CG", "WR7dJSoCW6K", "tLJcQmkhmW", "W7pdHSoeW6bsW4S5kmkBvG", "u8kotSkN", "W5ZdQmk+W4m", "FmoXW5LrWO4", "W7SfEmoaW6i", "bmoGkXPi", "gv/dGSkFbMnOAr4", "W5WEWO3cJq", "WOJdTM9SW53cNmkYW5hdRGC", "WQRdGmkPWOldJHTX", "rJDHWQ/cLSkRBSkgWPJdTW", "yCk4EqNdUG", "WPdcOG1IW6W", "WOmXW68QWQu", "b8krc8oIWOS", "FmkVWQ7cH8kQ", "rGdcVg7cSb8Nld9J", "iCkzW4dcO1m", "WQ0/W50A", "WPpdGSoAW5v6", "W5WbWQNcPqK", "D19IvYm", "nNpcGJTJ", "zCoPW4jJWRpdGmkW", "nmk8rCooorpcT8oiWPNdQG", "lmk2WO/dG8kT", "b8kxzSo+hW", "cSkSW7ZcKvxdSG", "rh4NWQa+", "W4ZcQw5jea", "r3xcImkXlq", "WQiRW5KtWPC", "CsddOvPE", "xM4GWODNWPTPu1BcLa", "tNvBqsi", "fM10AI3cKW", "W5iIWP5kWP3dJNyBWRNdKq", "WPFdO2TKW5a", "WRZdG8oCW6PiWOa/lCknqa", "B2Gh", "imkhz8o7WRC", "gCo4bI1p", "tXbHWOLE", "WRaEW4O/W5u", "eCkpESorWPS", "qSkCkCksWRm", "BConxc4rW6q9W5GWtW", "AZPUWQddMa", "emk+gvzV", "rCkfWPBcOSkt", "W4RdNCoCW6VdJmk5g8otsqO", "zCkIWORcLmk+", "jCoKq3Sx", "WPiTW7i+W5O", "WOlcMq1tW7C", "WPRdOmognx8", "p8oalZP2CSkspmkcW4K", "W44EWPJcMaldTSoEqCkZWPS", "rmknAqpdRW", "WQxdMt3dQSo6", "W4FdKtj1W6vof8onW4pdNG", "h290nmknW50nW7W", "E8oVW6/cUmoAWP3cNrW", "E3XComkz", "xZpdPvKq", "hgzNFsVcHNa", "WP7dQ8o4W41B", "W7xdR3SoW4O", "W7K+WPHmW7VdSxxdS8kBdq", "nSkEw8oDWQu", "x8kfemo4WQSjW75Jwwi", "WRJdPxvNWOy", "W6ZcJ8kKWONdPWeOfCkWsW", "WQ3dS19oW44", "WOBdP3H0W6RcNmk1W4VcRqa", "jmo9Ex0", "WOxdR8oTlhC", "WR9tWP7cNSkn", "WRG5WQLNWQq", "amoNcsLz", "EmoZW4PQW7NdGCk3fa", "z2D1fCk4", "hXS5fcO", "WRJdGxncWPW", "sIPyWQe", "uSkbiSkmWOhdHfCLWOpcOq", "W7C1W5uDW5/dPcVcR8oosa", "qf/cGCkF", "lSk5z2SBWOvF", "WQ7dN8oCW6Xl", "oCkxfSoKWRa", "W7eWW5zhWPBcJcNcTmonuW", "WPmXW6m2WOq", "qZDtWPldNG", "tNtcImkrWRq", "oCkaW6JcIv4", "cMrda8ktW5uqW6G", "ir3cShNcHW", "WQxdUvDVWRe", "ECoVW4zO", "cSkCeCoTWRazWROSthS", "WQhdP8oGaMbVDq", "pHy2dYy", "pmkbzCoXka", "oSocoq18", "WP/dH8kFWPddMa", "ogxcQa1W", "oSolWOVdPSolq2a", "thCHc8ovW4boW7mC", "nSoxisW", "x0ddSZddTGjKl3WL", "WOlcKg0KWRKAsq", "e8kBFCoVWRG", "n8kqD8o2", "WR7dJSocW7f8WOKMnmkmxq", "wYtdTa", "WP1yW43dNvNcMSoprmkJWPO", "WRBdR8k1WOxdHW", "W63cOXHEW5etWQpcNCkFWQa", "W6BcPYnik8kOWPZcMW", "AtzqWQ/dSG", "WOXCW5CsWPnGprFcSeu", "W7VcNLu9dW", "bSkNW5RcNLO", "xSkEtWVdRq", "sMZcSSkWla", "gwHAW7uuW6SfWPHjrW", "F8kcWPK", "m8onWQldP8o2", "i8oHy3ycWOPBW7e", "sNrtd8k3", "WPhcKhmT", "hufMbufoWOe", "W7KWWRpcJXC", "rYSHt8ouWPXtWR0ykW", "WOqpWRbeWRS", "W67dIMaeW58F", "WOVdH8oCW7hdGq", "emk+W7ZcMvBdSa", "l0XQW5jO", "CxlcLmkcWRykia", "uIrmWOfP", "p1nbkvC", "W6pcGx4dfW", "awBdT11tWOrQAhJdKW", "EIHAfCkwW5OGW5HGga", "dComugm4", "vKRcKCkCbq", "bJi1aGe", "zSoZWRdcRmokWRZcIWtdJSkv", "WR5XWO3cLCkb", "W4ulF8orW7FdK8kMcZyl", "fSoFwu4v", "WPTol8klWRBdMSoQq3bE", "iSkAE8o2WRy", "WOtcQHzOW64", "W4RdLJddOCoOWRNdKquXzW", "c8kHl8ooWRm", "WRXLWOZcHa", "s3b3AZ7cGa", "WQJcPXm", "oCointvE", "bJSenZ4", "g1tcVYzv", "kCkTWO0", "WQ7cKcHaW6m", "W4ddJSoE", "WRddP8o9ha", "zCoVW5VcNCoOCSoDW4xdT8kT", "gCknkmkuWPJdHr8tWPJcOG", "WQ3dRZtdKmol", "lev7W6LO", "lCk2WOFdGG", "WRZdGmk/WOldRXP2", "W5HkWPdcIWldI8oGs8k2WP8", "W63dKf8lW6K", "W4FdO8k2W4CUW5O", "W48pWONcKWBdHCoA", "rmk5wYFdUW", "WRBdHmo6W4PC", "F8kjtd5RW60OW5S1ta", "xSoOW77cN0VdO8ofWQdcNtW", "WOKXWQXBWPe", "E2W5WOaF", "DmoPWRVcQSowWOhcMG", "W5ldUf0pW5C", "WRjRWOe", "W5/dG8ojW4VdNq", "xCkbEx4YimkhFSokWO8", "eSkFlSooWQK", "iXFcSM/cHW", "CmoUW49hWQy", "D8oYW4vG", "BmkAW4RcUmoWu2ZdK1iR", "WP8FWQvcWPi", "W5uDW54oWO85obZcUqi", "aSkBESoxWOC", "fSoxpW7dKmkxW6XGW7JdHa", "AeDGimkP", "WPZdT8kKWQRdRq", "twTTAdS", "W5ldQmk6W4GKW5tcU8kZjue", "dub8W4XD", "WO5DWRZcLCkw", "ewxcOWD1", "W5hdISkjW7Wa", "WQVdHeLfW5W", "WQOUW4aaW5pcUW", "W7JcHvDjbW", "WQW6WRHFWRK", "WO0zW50eWRm", "hCoaoxxdMW", "WRBcHdTtW7btA0/dQXS", "dmomnqfj", "BSonqYSqW7WWW4yYsq", "lmkUWR3dJ8k8", "ftiNlwRdNYrjWR4x", "W6pdQCk9W7Wo", "rcbvW6HzWPVcRWlcGmoJ", "WRq1W5K8WQDvcHNdPtK", "bSkRW63cMa", "g2BcQZLN", "WO3dK8o5k3q", "WRpcQq9zW5e", "eJBdQvGzWOH9kN7cLq", "W7ZdISo4W43dHG", "gSocjd93Fa", "j8kNWOBcG8k9k8ktWOdcTSoP", "vmkveSksWOm", "W6ldH2qvW5Kfmq", "fCkbeSoN", "kCknfmotWRW", "WRigWOXoWPm", "q8kuFW3dIG", "aSoCatTU", "wSoIbcn1WPZdTSoCW5q8", "WQPDWQBcNSkx", "WOG/W6aNWQK", "W4hdNmkJW6GX", "lCkiaxbhWR94", "W7iLA8o5W7m", "ySkyWP/cQ8kqfCojnW", "fSoDn1O", "vmkwlmopWOldIr0", "vg0QWQeC", "WOZdImo8W79D", "wmkpcmkQWRa", "WRRcS3edWPi", "hmohiI13AW", "c8kRW7ZcMrdcVG", "DSkmWQBcOmkW", "W5/dHmoOW6JdN8kUamoGxem", "imkSWP4", "c8kkn8khW5tdK0yAWP3cQW", "nw9DW4H5", "EmoCW790WOW", "W6/dJxG", "WQezW6q5W7u", "uwaGWOa", "D8keWOG", "W57cVLuGhNtdMZaQW70", "WPFdN2XpWOG", "WQhcNComWRqnWPP8", "WPmtW4O4W7G", "gM9doCkR", "W4FcKa8dW71qamkwWRddVa", "pxOabSooWOK/", "k8oNFhyCW4eeWRtcRCoD", "lCoIgMJdOG", "CSk/WQ3cKmkL", "dCkYW57cKM0", "WOHDlSkbWRBcM8oIq3bv", "W54gWPdcNaW", "jmkDq8oDgq", "WPFdHKjkWQqAzCocW6tdTq", "nmkbFmoX", "fwrMd8kh", "W47cRv86dWJcNq", "lCo1WRdcSSowWOZcMG3dJW", "wXxdHL8/", "h8kCda", "E8kXdSkrWPi", "dcxcPetcQW", "rmkAWPpcKmkW", "o8oaB3CI", "t3j4FrS", "W6tcQMO", "W5FdTCkOW5e", "r2rXemkE", "W4JdKCoyW7hdGW", "WPFdMYxdNmo6WQZcKaqS", "eCotmeS", "BLJcQmkFWPi", "WOBcLgC1", "zrfJWQDl", "WRDLWOlcIq", "n8ouoIPs", "qSoMdaLwoCk+W5myWPC", "gCoHmwtdHq", "iCkyFSo8WQC", "vhVcLmkLWPC", "wIJdRLG", "eSk/W6/cNKZdVSkCWQO", "c07cKmkyehnLEvddHW", "W77cLxm7ea", "W4qaW4SrW5SKBGBcVqq", "uSkSWR/cHmkQl8oOjHdcSq", "WOZdUK5uWRO", "ygnl", "xxDUW5zQWPKRfGFdHq", "z2bJFstcHMy", "bbyhbYG", "WRdcRrLdW5vbWQBcMSoyWQO", "WPpcKLOSWRy", "zW9CW6HFW6uzWQPMBW", "lSkcWOZcRmkdfCoteW", "WPtdNYpdOmoQ", "W5WbB8ozW7O", "hmkuWPVdV8kU", "cSkcyCovnG", "WOKkW54uWQa", "vIrlWQbuWOdcSG", "WR/dISkcWOhdHa", "WRPVWQVcMCkL", "WOBcQmo7WPDXWOBdTmoSDby", "zmojW4PVWRe", "qSoIcG5oCCoXW4WvWOi", "W6JdHMmv", "z8kNAXBdVMW5dW", "WO/dTvXbW64", "pCoaWO7dUW", "v1VcJ8kyaMm", "WPG5W4ejW64", "AwFcI8kl", "k0PyW49L", "nCk7WRldMCkP", "g8orjXXv", "W5i7WPHaWPtcLM5FWRFdKq", "W5hdR8kbW5W4", "DSkBk8kNWPO", "tgrnDsK", "nCkGsmovja", "W48BECobW7u", "W4VcQuqIg0pdKq", "d8k5bSoLWQy", "W7lcUwbIaq", "WRS/W4LdW5xcPJxcSSodsa", "buryW6jbW6i", "W5dcGxaYWQndtSksWOdcKG", "hmkKqCosWPy", "dSkKWOxdTmk0", "WPFdImo1W5rq", "keHnW6nvW4jaWRH8yW", "iSoicWrp", "EtBdTg0X", "fmkGaxbn", "WOKxW54rWOD3lq", "t0ZcQmk+hq", "WRbWWORcGCk9WP3cUCkmCa", "veVcG8kzag96lq", "DsldILeT", "WQNdI8o4W696", "WP4aW48jW4e0lbtcOqO", "nKHcW6byW7K", "bmotiuBdNCkmW7e", "W4/dV0WOW7S", "WQ3dKCk9WOldRWO", "rgusWQm7", "hSkyD8o2WPu", "x8oOqKmgC8oJW4ifWPm", "iZubsSoBW5G0WP4mEa", "jSkHnuvQ", "WPVdGmk+WQJdJa", "ECksgmkxWR4", "DCoOWRtcT8oFW43dKa", "iSk/sSoz", "ESo/v8ommq7cPmkxW5NdOa", "d8kshSkMWQ9wW6vUwgu", "WOhdVL9oWOK", "W5JcR3eJgW", "g19bW6nJ", "W6/cIuPkkq", "u8obmd9ToCormSkgW4G", "u8k2ctzTWPJdTSoyW5iK", "iSkjymoWWR3cM8ot", "WP7dGmoNeh4", "W7e3BmowW6C", "WPhdJui", "W47cLff6bW", "xSoTW7RcN1xdTCkhWR/dHtu", "A8kMWOVdMSk/g8knWOBcUmoK", "dSklW7FcP1S", "WRpcKaDgW4W", "WP3cL3K", "WRxdM8knWQCnW5jOyCkhwG", "WOhcMxa2", "W4NdJ2ikW4u", "DMXqEqy", "uYDTWQtdNmk5BG", "WONdS0DuW6C", "W7tcUhi4fG", "WRNdKSkOWOS", "aatcVNe", "ECo6W4uPWRddKmkJ", "rHNcP3JcQwaRna", "W5xdO8k6W5CGW5G", "ECkMWOpdMmo+j8krWPxcPmoZ", "aSk/W6RcS0O", "oSk5z8oLWRa", "WQdcHg8OWRyggSkYWPRcMG", "nCkIfw5O", "W5tcJ1WRguVdMZe/", "d0LEb8kw", "W5ldPNGvW50", "ntiHfc4", "ymkDWPlcRmkq", "x0zJxh0NwtlcOmkx", "Emkqe8kxWRS", "WQ1LWO3cGmkh", "WPZdRshdNSoj", "W7tdMmovW73dG8kTo8oxwf0", "pSkEvSoBfq", "imkTWOC1W6BdQCoZrttcGq", "WPpdNmokW4Tj", "oJBcVfpcIq", "reJcG8kef3rNje3cKW", "WO3dScxdHmoO", "ngzkW6fn", "lmk2WO/dG8kbn8kuWO7cSG", "gexcGszLgGajW7ZcUa", "b8ogieJdGG", "WOldKspdVSkYW7/cIbm5EG", "W5NdOMn2WONcKmk1W5/cSX0", "aCkJW70", "WQNcPwXCk8kO", "d0dcIq", "W4VdMdtdTSoRWQVdKXe3zW", "vL0fWPyJ", "dCkVW6NcO30", "mCkDymoNWRBcGCodFq", "WPapWQXCWOC", "yhlcTmk2eW", "Dmo1W58", "w8kyi8kfWPG", "xvnAEGa", "fSkUWQddOSku", "amoAk1pdLq", "aCkKxSoVWPu", "e8kXwCoDWRG", "t8k2fmkqWR8", "cxPyWQLoW4NcQWxcJSoK", "vf0wWRG5", "kSkmpCofWPW", "emkgW7tcG3a", "gCkrimksWPpdGq", "zwKzWRaP", "W7q2W5VdJmopW5/dPCocnCkg", "chvKW4fH", "WQxdTmo7agL+", "WR5HWPS", "W7dcIf4pcW", "WOJcSayYtLZcHdH4", "j8oNcarm", "WQRcVx0cWPy", "pIymt8oBW4y/WOSDyG", "Amk7qCoomq7dSmokWPJdOW", "dmkejSoSWPK", "ASk/ubRdJW", "hgDalNK", "qeDGoCk4", "WP/dISkUWP/dTq", "W5ObBSowW7i", "WQBdOmoRfNn4", "gSoxiq", "WRtdUSoQjhi", "kmolWOJdJCoLw3e", "jCoMDNCwWRjvW7ZdO8oc", "W57dJxWeW5iFnG", "kSkLvmorWPC", "kCkpW6pcKxi", "zNjufG", "fYK1WR/cImkGlSkBW5W", "WQdcGsr5W4m", "zCoKemkiAWpdTCohWPNdTG", "dfrGauXsWRFdJsBcIa", "vmkkEZddUW", "WPigW4SqWPu", "WP3cPSo0W4OXW4lcVCkUlXO", "A1ZcLmkriG", "jmo5kc9R", "j8kbtmosoG", "W5NdJSonW7tdJSkOfW", "nSkDW6pcSvS", "cwnHW4bw", "zmoRW49LWQddGa", "C3BcLCkxWRCqimk8", "pmkJWPRdMCkM", "D0lcGmk9WQi", "CSk0isHsW4SiWRRcSCko", "WR0lW50oWPi", "WRpdIGddPSod", "WQ3dLmk5WOJdSqjKg8kktq", "aCk8W7NcMMe", "zSo+v8oiiGNdSCoo", "nsipotG", "yCkmWOFcMa", "m8o4dc1Q", "j8o6yW", "xYRdH0Ox", "nSozotvH", "WR3dLmkOWPxdUd1GdSkNqq", "cSoObdnX", "W7VcOu9PjG", "F8odaNLwWR1VWPr1eG", "omkjFW", "WR1LWPVcJCkrWOVcPa", "WOeoWPdcIuFdHCotrmkKWOe", "lNLwfmk3", "DdbOWQldImk9", "W7pdJwCoW4Oo", "W6BdRCkTW7eo", "WQ7dN0fTWQq", "WRmdWOT2WP0", "lmkSWO3cLmoSDmknWOZdRmoM", "WOddRmkBWOldOG", "aJVcIK7cSG", "WR47WPHj", "WP0VWO5SWPZcGNyb", "WRBdVCoOf0z+", "oCoeWPS", "WP7dIuvSWQCnz8orW7/dOa", "k8oAjHbO", "f8otp0/dKCkzW6f/", "WQ/cOqTp", "WOGfDmolW7NcMCk1", "uIP1WQPnWPhcSZxcGmo5", "ya1DWOfP", "WQVdHmk5", "kCoqWQNdT8oL", "amkib3LiWQHU", "WQtdOeDwWRS", "WRhcOdjlW7W", "m1hcJcfA", "jgfteMG", "jGirpaK", "WOThWQJcTSkL", "WOddQh4", "kSoDDLqO", "imkJWONdHG", "W57cRwPNnq", "W5agAmoQW5K", "fSo1kcHI", "j8kuf0Lx", "eN8YsCkXW5usW6zhoq", "WO7dGc89W6zCrSokWOJdIa", "W5NdRSoBW5ddGq", "gmo3bHvBmSo0W4y", "tKTHeKzi", "W6ZcG8khWQSlW5CgCmovhW", "lSkFd8odWOC", "smo/aYDSWO3dU8oyW4qG", "WQxdV2btWRy", "WOGxW5O8WPjGoHZcTX4", "WPFdNejr", "W4BdV8kRW4KGW5xcSq", "BmoMCNOxWOHoWQxdRSop", "c3jNb30", "t8oxWRZcPSoC", "WRNdJKjNWOe", "jSk8jZbjW4eAW7ZdQ8oA", "WPdcNWvDW6C", "W78tWRdcMW", "W5KpWPxcLGRdJ8olqmkL", "dSkMW6NcTLi", "WOdcKgT8W7a", "WPtdJd7dP8oGWQZcHre9", "xItdON8B", "WP85WO9kWP4", "WPddKqldP8o9WRhcKGy", "F8oYWQhcRSoaW5xdGuFdGSkB", "cc1yWRDDWPu", "W7KPW57dMCowW47dVCoclCkl", "WQS/W4GbW4dcRbJcQSoduG", "lmk8W4LHWRJdJmoVaMRdKq", "mCkjW5NcNwG", "cCk6mLbR", "zfDTfmkw", "j8oxpuRdNq", "BCkOWPNcH8o+aCkpWOBcUmoY", "h8oNbW5olG", "WQqUWQXiWR8", "wLWGhbO", "g0rQW5be", "WPtdJd7dPCoqWRhcMfW", "WR/dMmkhWQhdHq", "WRBdTCoFW4XD", "yCoCiG", "ldaVjau", "lmoHnLNdO8kAW65AW5ddGq", "q8o4WRRdKaRcR8oiW6hdN3e", "c0vkbmk1", "ytj0WPddJq", "fCoci0BdNCkC", "WPmsWPThWPO", "WRBdU8oEbMy", "b8kKh0vN", "sYSGv8orWPXnWR4pEG", "WRPMWP7cUmkP", "W6iNDmoUW5G", "CJr6WPvl", "q0jlh8kc", "W7L8WOlcGmkmWP3dRCorFCoF", "kSoGENu", "W7WMWQhcPsm", "gSo4y2mC", "FGrvWPri", "WQBcQmkRbgLTBmo2W5qc", "y8oPWRlcUCoFWORcRqtdISkf", "k3xcVdvC", "xL7dPIxcNHbRFw04", "WQVdRKrKW7e", "WORdOgW", "kSkpuCoKWQC", "tNehWOrzWOdcQadcGmo+", "WPBdLSkOWOxdIq", "WOpcHujgWR0tw8ocW6tdTq", "WO3dPSofW7jt", "kmo1hXXt", "WP10WRBcMmkp", "uvNcJSk0aa", "W4FdJt3dUSoRWR3cJHe3zW", "WP02W60KWRa", "W7xdH34aW5aBibFcSfy", "WQhcS0G1WOa", "q1FcJmkt", "W7JdOCoSchDMzSoJWPXe", "lSoKu2Gb", "faRdKCoxwtm6DaVcMa", "waBdHLau", "Ar4mW6qzWRefW6O5jG", "W4ZdJtaGW6K", "dCkwd8ogWPu", "WQJdS8kdWQZdIa", "m8o3eXHukmoG", "WO/dGf1QWPu", "WPDJWQlcMCkg", "n8oIWRtcQSosW4lcGaFdMCkB", "dSovjq", "DXruWOPC", "WRZdOCoScfHOySoLWPGs", "dSo/laPQ", "WP9FkCkaWQFcMCkvdHSuWQW", "WPFdIJddP8o6WQS", "WOtdTNPLW4FcLW", "WP7dLt/dTSof", "WQJcUMOwWQ8", "W7pdI18JW74", "hLr1b0PQWPpdNYFcJW", "cSktnmo4WQG", "WPhdV8o6leq", "fmkMW6JcUx8", "hmo+mKJdKa", "WRhdO2D0WQy", "WRNdVSoGbLy", "WOBcUhKoWPO", "WPtdNYpdTSoHWQZcJW", "W4dcH1nklG", "bSoxpKZdHCkD", "W7BdVSo8f254", "WP3dJmkIWQpdLq", "n8o1WQdcUSosWOFdJGddISku", "p0XpW68", "eCkagSk2W70", "c8kRW6ddNqNcU8oiW73cHYe", "amkLW73cHeS", "lSoXEx4gWO4", "ohfvaSky", "WOhcG3SVWOm", "abeNbYWZdxFdOmoi", "WRy8W4m", "i2DBW4ba", "WPtdISkDWQBdTG", "vh08WPKzW5f6rhBcNG", "xSkAeCoSWRrlW7K", "W7JdUSoCW5tdJG", "W60AAmowW7W", "uIbbWRe", "jSoWftLq", "jSk+rSoMWPC", "WQ/dICkSWPxdGbO", "WPddPhn1W6y", "yCk4WPJcI8kH", "n8kHWR/dRmkC", "f8ouhq92", "vNlcO8kYWRe", "DSo+W58", "W4ddQmkYW4iMW5pcPG", "W4W4AmonW6q", "W5ldICo4W6ddHW", "b8kRW7RcKrxdP8kbWR/cGtK", "e8oZgq", "ySo+W58", "W5/dHmo/W5xdL8oYhSo2v3K", "WQOVW4CdW5/cVq", "wSkzWPVcQa", "WRT9W4hdJmkrWOFcVCkgCmoh", "g8oxja", "W4hdOmkDW5eG", "hfpcKrO", "kmoqWRNdQ8oO", "gSo/r1Gf", "uhRcTmkZda", "cqdcO3JcQLyhkZH7", "Bmo/CMStWOHqW6NdRmoj", "WQNdTCkDWRFdLq", "DcVdIeSX", "pZtcPNxcIq", "W5alWOK", "tJfuWQK", "kCk7igPJ", "dhLcW4f6", "cCkCc8oNWRO", "dXxcP1ZcSey2kJnI", "W5/dGcT1W7DFcmopW5tdKW", "WOhdRMXsWPi", "WQJdRwbAW6e", "kmkRW6pcMuS", "FxJcHCkUiq", "W6BdO8k2W6S0", "bbxcVxRcSfO", "ymoXWRJcU8oI", "rI9VWONdNa", "WR7cULWwWP4", "c8oqueWN", "mSoHpvRcQZv+tqjh", "FSk7DIC", "iSk+W6ldVSkEW53dL13cI8oh", "WQhdUSo7", "hKK5eezwWPVdKYlcIa", "v8k6WOFcGmk3", "W6yDyCo2W6a", "Br4mWQOFWQGdW7KLmq", "rYfDWOzwWPxcSGu", "WRpdVmoNaq", "WR/dNfno", "mh51h8km", "k8o6ExWaWQ5UW4xdJG", "WRBdVCoOf0rLy8oYWRGs", "l8ksW5VcVhi", "bH/cT3JcILmPjG", "c3LammkT", "W6NcVhXpnSk/", "W63dH0qSW54", "WOBdJCoyp0e", "DmkpzYxdPa", "iCo8DMSXWOLEW63dG8oA", "FSk4rZhdVq", "W4FcPMTSW53dJSo7", "mSotdGft", "WO3dT8o4n08", "WP0BW4az", "oSkQn01d", "sJNdQ10t", "nCoxjXnq", "W43dGSotW7W", "f8kZW77cLq", "pxldHSkeWRqFimkQjwS", "W4JcLbLqWQacwCkD", "nmkZCCo+eG", "j8k0WQVdVmku", "W63cOGHhW5GaWQRdNSkiWRm", "kCkFmM1w", "qZbNWRhdNSkXECkjWPW", "WPBcONuwWQy", "nJ4vt8ovW4bbWPOBEW", "WRhdPfnLW58", "WPhdOenuW6S", "W67dGL8gW5y", "qSoQW4P1WRK", "rNBdK8k7eebFg0dcNW", "Cen/vsW", "C8k4A0/dU2OJg0am", "W5JdV8kSW5qu", "zdjrWONdLa", "ubpcLSksgxzInu3dJa", "amkNzSoiaa", "fSkhWPddJCk/", "cCkqb8o/", "oSklF8oaWPlcI8ktyexdOa", "rSk2qg85W4VdU8kDWP19", "WRldP8o7W7bh", "pbWeit4", "WOddQ29UW50", "W5/dGSkkW6Gr", "WP3dOuLXW50", "sCokW4j8WRS", "W6FdNKaZW64", "i8k+ua", "x8kUW6FcHHJdTmkeWRlcMYi", "pCoDnW", "WQddR8opewy", "WRddUfbeWOi", "ogrelgK", "WRNdHSog", "WPOaW4qIW70", "qb1mWPldGq", "W43dMmokW47dIa", "xCogsCk8W78jWRG+hY4", "wWZdUvqe", "BKZcPmk1pa", "W4CJwSomW54", "WOVdMHBdV8oA", "jCk1W7xdRCkgW5VdJLRcK8ow", "WRBdJf9hW5K", "dbhcP3ZdQvWRmtX2", "e8oxj3BdP8k7W4P7W6ZdNW", "bSoZadHVWPW", "WRJdL8ovW6y", "CmkHobddIx8kch0w", "xCkQkmkKWR4", "cvhcGbCXxWOCW4tcSa", "hSkadCo5WRPkW6LZ", "W4hcR3rhmq", "WPmBW4Oy", "W4ddS8k0W4T/", "WP/dHmk9WPpdPanNb8kW", "pMT5jNW", "yKrXiSki", "fmkBeCoUWQ1SW55hyq", "hSo9ebnE", "WP4CW50uW4zvjHhcTeS", "uhf4Da", "W4ScESolW6u", "W4eFv8ozW54", "D8orW4LQWPS", "hmoIgsDQW4pdTmkdW445", "dmoqkZbn", "WR/dV8oLahq", "WRNdVmoNdG", "hmkbv8o0WP8", "W5BdM8kOW6qn", "dutcNrC", "q3lcK8kalG", "mZpdI8owW6LEFSoQlxu", "lmoMt28d", "E8k+aSkeWPS", "lmkXW4BcJSk2jCkpWPxcP8kG", "C8oWf8koCe3cRmkCW5BcTq", "WPdcLhKUWQulECktWPhcNq", "fCkudmoeWQHkW5P4qN4", "W6tcOx1ldmk7WOlcIG", "W73cQuiRfK/dHceVWRe", "dCkTWOVdPCkB", "W4qbESoC", "W4NcPx5VW53cKSk1WPpcQa8", "CxhcKCkpWPq", "ymooWOBdTCkKvxJdHGW5", "crZdRJO", "tH0TccjLfh7dPSom", "WQX0WOVcJCkwWOS", "u8k4n8kAWQu", "tHHMWOldNa", "W57dTCkYW4S", "W44tWPtcNqJdIG", "urvJbJ9YhYlcSSop", "W7ZcIMeQeW", "mSkuWOpdG8kh", "cfj9dL4", "evxcIa8", "W4ddHc1HW6rEgSkxW5NdJW", "cxL5a8keW78FW71B", "r8kCnq", "W7ldULmAWOrrW7ldG8oiW6e", "bSo0kcDt", "W57dMM8mW5mDif3dRa", "WPCaW4CcW48", "z8kcWPNcOSkigCo+iJtcLW", "E8kgWQJcHmka", "W78MtSoqW7S", "fmoIWONdHmoG", "u3xcNSkjWPe", "WRRdGmkH", "lmkDhxvs", "DmoYW4XSWQdcMmoGqsJcGa", "bmo3hIrTWPhcQCodW4G3", "hxrCgvW", "xCkpWOJcO8kY", "zhvwfa", "vgy9WPa", "qgO+WPSSW5W", "p8kfqCo5iG", "tmoPWRFcTmowWOZcMKJdQSke", "jCkJBSozoG", "cSoCncX6", "W5GFxSo6W5q", "nCkEW4NcLea", "fmorjcP5", "WPhdJd0", "mSoznhldIW", "f2nXgComWO4", "i8odx34i", "h8kCeCoV", "WP4tW40v", "W5pcU2HzkW", "tvL7x3q3vcJcPCkC", "WRO2W6mtWOu", "sZNdRNii", "WOKxW4msWPbXcXNcTbG", "p8oybbz/", "WPrPWPbAWOxdQwNdSSkrfa", "aSkKWRa", "q3OYWPOUW5bVtW", "WQZdKMDYW4S", "xq/dHMOZ", "WOxdOCorW497", "WRKqW4OOWRW", "WOxdSgfQWP4", "DmoPWRhcUW", "srCXcYXJha", "vK7cJSkEaa", "lSoaoXVdSCkWW6fGW5hdJa", "zs5EWQLE", "W63cUbjzW4bmWQ3cHSkmWQq", "CSoOWQhdS8orWOdcLG", "kvD0W5bw", "t0RcKCkFWOe", "WONdSSkNWOddTG", "ogHUoN8", "FCo+W4vJWQddJq", "W7KPW5ZdJmopW53dPmocnCkg", "WQNdL1jSW4e", "nCoEWORdRSoBrx3dNrO", "rrXCWRD7", "WRDGWPW", "w2v8mSkS", "WRFcPZffW4meWRdcSmkzWRi", "WPiGW6eBWQ0", "c0tcHaDQ", "W6hcL09MbG", "WQtdJuvKW5G", "WRVdGCoBpee", "WRxdM8oDW6K", "cCoQerHuoa", "tuRcJ8kB", "hSo1ab9d", "W5ddTCkIW6in", "DmkFwHldIG", "W7S8WRhcIsi", "W5RcI0n9ja", "WORdVXqTtWdcHxD6WRe", "W7z3WOO", "W5iJWOTDWPFcGIGwWQRdHW", "vSkgWR/cP8k+", "g0LXfW", "d8kck0LQ", "b8k/W4tcUMW", "a8otjhVdGq", "WPFdS8k1W4mUW4tcUCkGmK0", "b3bYfSkcW5CzW71aBa", "zhlcHCkp", "dsu4lNZdKIzhWRmx", "zSoDuteqW649W4e3tq", "zCkmWPi", "BtJdRgWz", "l8kma3LiWQHU", "tGr0WOXm", "WP/dJKrcWR0g", "W6NcVhXpnSk/WQRcG8oafG", "ztfvWQba", "WPldQMXjW64", "WRJcIh4hWQi", "WQPXWO3cN8kwWPZcUCkyCG", "huJcKbaPtL4nW4JcRa", "h8o3etXokmoHW4OtWO4", "ECkwn8kfWPNdGLCr", "qSosWPJcUmoI", "W5i5WO9mWPxcJxfFWQ/dLq", "FSo1W6NdSCosW5e", "FM5IBsa", "WOddQM5Z", "fSkgo8oFWRe", "W6lcHtLbWPfAD0RdSHO", "zCo0W6HXWQBdL8kNg3VdIq", "iSkCymoYoa", "C8kOBIhdP3K/da", "W7ldGguw", "WPZdHCkmWQ/dTq", "gCokggJdUq", "ywqkWPmo", "b8kGDmo4cG", "WOxdNerkWR4e", "DGnbWOVdIG", "qmkRWR/cTSkU", "WPpdP1HeWPS", "mSk/t8otFGNdVG", "ttPTWQ0", "cufGaqjkWPVdLYRcJG", "FmkTzWC", "DmoPWQBcQG", "uhZcJSkFWPO", "WOpdMYxdHSoBWPVcSqG2yq", "dmkUW6VcSvO", "W6OMWPCsWOlcTwVcUSkt", "w8kRWP/cHmk0", "W47dN8oz", "ogdcPcDGlIWrW6pcOG", "W6usWPlcQt0", "FgnjfSkAWPzO", "WOFdKt/dP8oQWRBcIa", "WO9RWPnkWOtdJtLDWRpcIG", "cSoJw1Sr", "xmkQrvaiASkRWOnCW4O", "f8o3aZr8WPu", "WOldGmkd", "FmkhW5FcO8oObYxcLe9Q", "WRBdUCoMfMj5CW", "W6VcUM1C", "WQ/dISoDW6PjWOm", "zSkJFGpdPW", "q8kZkCkTWOa", "Fmkgeh5tWQX8WOfKeW", "WOxdJaddNSo2", "W5GoWOJcRsa", "iCoqpfxdOG", "uwnNEsFcLW", "iSkqcCoUWRfqW7K", "qCoyntnVEmoAC8kxW4K", "grhcG8ojscLMyaC", "WRRdK8k9WPtdJa", "fCoGocLP", "qsDLWQ7dNSk+C8kvWOZcSa", "W6ZdKSk4WOpdOayLcSkJqa", "WOGKWQb8WR/cRq", "W4CiFq", "W7pdLCknW48J", "uSkbjmkd", "EmooWP7cQ8ol", "g8omWQ3dGmoG", "lKjCW6TnW6GjW6G", "wctdO04BWObSAwi", "vCkHWRJcQ8kX", "lmo0havr", "oCoSWQdcS8oFWO7cHKxdM8ke", "WQ01W6yBW4tcUZ7cQmobwa", "nSkdeM5dWRf4WPT1", "o11CW6jcW7u", "W7ClBCoDW7JcG8kH", "rmk2xgCGW5NdTSkDWO1O", "jmkvtSoAoq", "WPmkW7OpWQG", "ac7dSeGxWOjNj2dcLq", "W45sWP9oW5i0E0BdTvO", "WPtdUaXUvXhcJhzRWRW", "nSkNWOBdI8k9mmksWOy", "qSkeygSYoCkFz8ohWO4", "ESouW6nwWRG", "yCkKzru", "W4ZcVfaVdKu", "W6NcONHDmq", "oxXnW6Xy", "W4vYW5mwW4NdMhuDWRddNq", "hrtcSx7cQW", "WRNdVmoNdIu0", "xgbMEY/cNheEW6vd", "WOvFkmkpWQddL8o/wNjg", "WOFdSgn1WP4", "i8oWC1WeWOnuW7ZdJSoh", "W5ugW4CjWOPXzqxcVaC", "W4ZdGwqgW5SE", "WR5HWPVcUmklWOpcTq", "W7pdHmovW7fAWPqRl8kguG", "WRBdU8oTcw8", "W7ddVSkuW7iK", "b3D9f0O", "WQZcRaHb", "kSkWWO7dI8kSjSkeW4NcP8o1", "W6pdHgmsW5qoivZcV1y", "W4tdU8kPW4aVW4i", "Dmo6W4HS", "zCo0W7HWWQBdJmkSeG", "W7dcSLOuWOHoWRlcKSkmWQK", "gmo5dJz1WQRcR8odW48X", "EwPrAcy", "cudcLWz9cX0", "W6JdM3OnW50sFXtcVvK", "WPtdG8k8WRxdIq", "W7BdR8kFW5iq", "WOldLgn4W6W", "tg7cQ8kKmq", "wwfXwYBcK2ym", "rmkvimkuWPhcIajnW4hdVG", "vaT1WRzO", "WRvtWQtcTSkU", "bXBcTq", "W4ddISoFWQu", "gHxcO3hcPveH", "hmoMnXzq", "sdBdT0Gv", "WOldH2vcW5K", "fLxcSabk", "W50EF8ozW6lcKG", "d8kqd8oNWR5hW68", "WP/dMXOdWRGcrCocW6dcSa", "h0fKrXe", "W4FdKtj3W6focCodW4ZdNG", "pmk8zrhdVZuVefSt", "WPRcHxiT", "g07cIG92hGa", "DarLWQBdQW", "CmouWQdcHSoR", "WPGBW68QW78", "z2HqdG", "f8kqmCo6WQC", "w2L8EYe", "z8kUcmkAWRW", "W6tdMMmpW5SkmrVcVbC", "WQ9YWQ3cUSky", "WPFcRHnOW4C", "fCkCg8oU", "W606WOhcItC", "W5/dHYDHW6nBgSowW4BdJG", "zmoCW6rkWPK", "WQ7dJufRWP0", "cLpcKcXC", "iSk7ymozWPC", "g8kbW43cUNm", "WRtdSCoTjMTRDmoK", "WRBcUHe", "ACoVW45gWPO", "gSokcbb2", "WQWvW7GqWP4", "vdpdPvO", "rduxWQDwWPVcPGxcKCoL", "WPBdGSkxWPhdJW", "WO/dVGX7trdcH3f/WQe", "Bd5wWPhdIW", "w8kCFmohWRNdGvmfW53dRG", "FhG6WPiQ", "WPn2WPZcISkH", "a8k6A8ohWPu", "D8o0W4RcN8oTCSoDW43dPSkG", "DmoUWRtcRmoYWPS", "t0f7omk0", "WOGmWQvDWOa", "WPtdGgzLW54", "vSksifFdISkuW6CPWRVdIq", "d2HCgLu", "vsXuWRvwWPhcGHFcK8o+", "W6BcQ3DjnSkY", "W5VdKSkqW5a5", "W4xcSJ4YWONdNSoQWOJdOfW", "WOXMWOdcMSkZ", "W6OMWPCsWOlcTwRcUSks", "W4VcM1HVeq", "umoRW5LTWRG", "h8oUdJzH", "eSoBpuC", "hwnXbCkIW5mAW6PUBq", "hqySgIjJag/dSa", "qNxcGCkunq", "cXSXa3aWdw3dTmol", "CwFcSmkCnq", "vdpdPvPdW4PJzMdcLq", "rNZcK8kEmG", "W4HhWO3cMGRdLSotrmkJWPC", "zSkmj8kJWP4", "i8kJWO7dI8kxkG", "W7vRWPqIWOFdSxxdSCkAdq", "W5VcUKmKiW", "cMrfb8krW5KmW4XoAG", "W5xcO1CVfNpdGcS5W7a", "hmoxnaPQDmoxmCksW48", "wqZdLfiZsv5DWP3dOW", "tZKIv8omWOTpWQ8cka", "vWXEWQDy", "WPqCW5PqWOb1jrZcUri", "WOxdOSkAWOldRG", "vuCcWPKQ", "o8krWO3dOSo3uYlcK1mJ", "mCkaW7/cH3K", "W4ldLCkPW7iz", "xraKub8tW5ldIcdcHW", "m8o5WOxdGmox", "W4JdVmokW6JdNW", "fSkJsmo1gG", "WPldNZ3dPSoQ", "WOhcHwyTWRi", "nqWPjI4", "vCkOWR3cVCkE", "FGtdTvC8", "mCkhFmoHWRBcGCou", "WRfWWOlcGa", "ewHaeCkM", "WPFdJfjGWRWcrmoq", "WOFdI8oAW4L1", "hebkW6TQ", "bCkJW6dcLa", "BmouusGxWQy9WPGZsq", "WPGQWP5oWQtcMNux", "fmkql8kgWPVdKL8cWOlcPW", "WPFcNh0KWRm", "fCoHotvo", "h8oJoLhdTq", "gmkhdCoKWQ0", "wmkFjW", "n8kMmmofW7fxW754rga", "jmkuymoika", "eConqNmy", "WPRcMmknWRJcGSo+uSkscqq", "p8ofWOhdT8oHwga", "WOGBWPncWOO", "CWldQNOR", "j8owpX5+", "W5ldU8k/W4aoW4pcOa", "WOldQXNdO8oI", "xSkkBCoaWPZdGuacWOhdRG", "vWrQWP9/", "crOsdqu", "W6b6WOHFWOpdUxVdS8kwaq", "WP5gWRxcHCkS", "dSogncXQE8ohkSkcW4G", "ugGzWReC", "FJbZWO9+", "WRFdQxDblmk/W4JdKCkzcW", "jCoXy10tWPjF", "ct5HWRFdNSkUFCkjWO/cTa", "nMtcSsPD", "n8kzhha", "vrGTwr0dW4ldKclcJ3D2uG", "nLT2W4r8", "gmoZaZbTWPe", "FqDqWOxdRG", "v8oCW61mWPS", "W4LZWRanW5/dNtLDWRddGG", "zSkTWOtdICk1k8ko", "wmkpo8kAWRS", "fa3dMSkUlxnmlxG", "DCkacmke", "W6hdSCo6W43dGq", "EMvlfSkW", "WQBcVbXdW5HmWQdcLSkuWQG", "aMLGW4PM", "vMWKWRat", "bCoqeX9f", "vSosWQ3cN8ol", "u3SNWOy", "WOhdVL1uWOG", "WOtdQN5LW5VcNCk4W4RcPq", "WQFcMtfaW4C", "WP1rWRJcVCke", "Aw9OWRr2W7z3WPi8ra", "lbNcThtcSfmO", "m8oeWPVcRSoIv3NdJHmZ", "mmksx8ocWQK", "ih9wd8kpWObVW44", "nCk7k8ogWOS", "WRtdVSo9dge", "DW3dJuWF", "wYJdH2qp", "cNLkW51y", "WPbWWORcGq", "A8kqyCo8WOVcTCoV", "vCkGrG7dIa", "cLxcHar2lW8zW5tcUa", "WQ/cQr9pW5G", "WRldGCkDW6Pu", "iSkPWP4KW6hcNmoWvtxcIa", "W5hdT8koW4K3", "gv9wfmkG", "A1yKWPOR", "W5RdNSoyW6RdLSkyf8opwfm", "WOFdRCkaWPFdOa", "E8kzuI7dRW", "WO8jWPn7WPhcHeStWQ7dKq", "WQ/dISoaW6LEWOuV", "vs/dS1vqWP1HDW", "jCkXvSoiaXtdO8ohWPm", "W4VdR35LW4tcRmk7W5VcSG8", "eCkCcCoU", "WRmrW6e9W64", "cM5OaW", "W4FdPmo6W7/dRa", "WPxcHh04WRq", "d3H8luO", "WPxdPaddMmoC", "W6JcU3Djk8o6WQ7cI8oieG", "gSo6WONdPmow", "o8kerCo0WRe", "D8o6W7fWWPK", "cvKQxaboWPpdMs/cGW", "WOJcQfuZWOq", "EmottxvlWRS9WOzZhG", "ihjqdSkxWPaGW5Tfoq", "lmoXpInw", "bmktWPNdImky", "hguMWPK2W5HZg0xcGW", "xSknjmknWQVdLfOwWPZcRa", "uvzYBJS", "dmkdW77cM00", "smoLhtz3W5NcUmoaW5WJ", "AhRcQSkGWO4", "lw7cHZTD", "qIrXsq", "WQxdOmoLW7v0", "daZcKqz+dWiCW4tcTa", "rtbOW67dMmkZCSktWONcVa", "zwPqi8k8", "WPOEW4isWPfYprNcUrG", "bJ/cO2RcOq", "uYeNWPS3W5T0wHJcKW", "W60LWQRcQW", "W7ieDSoFW6e", "WPtdH1jA", "WQ5WWP3cNmkG", "eCkIrSo0gq", "W53cJxughq", "WOxdMfPkWQq", "k8kebxbd", "i8o/orj7", "qHr1WQ9j", "WP4fW6WsWP4PAKxdTvS", "W73cMCkbW5BcTeaXu8oUeW", "qmk9WQNcQ8kp", "gbNcLCkwww9To1FcJG", "iSkwFCofmW", "WP/dOmoNda", "tq57f0mxWPhdMJhcIq", "nSkibL5jWQqGW5CXxq", "yCkiWORdRSo0qM3cIHWR", "sdTWWQldKSkYECkvW4JcPG", "sXXGWQnr", "drBdISozxY8LFrlcGa", "nSoumHrw", "b8oVadv2WPu", "vuzfFc4", "aCkYr8oJWP8", "W5pdIwGu", "FXfJWRtdOW", "WPVdIujaWRG", "gHtcHLZcIW", "r2pcLmk+WOe", "bqldJCkvsG", "uwa9WOa/W5DV", "WQFdNN9AW4m", "d8kSWQ7dISkO", "WRFcRqvE", "pdezfSowW4q/WPmmEa", "k8oyWOFdGmof", "EmkvaSkSWOu", "kv1aW65y", "dxT8hSkv", "nmk1sCotjGu", "WRPLWP3cMmkHWOhcVmkdEmof", "jmkSWOpdPSkx", "WP4QWOicWOdcKwOwWRBdLW", "W4NcRvPUe0tcIwyPW7a", "qftcPmkLWPC", "wq/cJa11eemkW4lcUa", "A2Dkkmkc", "haeIadL+dwy", "wmo6W6roWOq", "bmo3hZj3WO3cQa", "rfldN8oq", "aH8SqcrZwtFdGSoK", "D1VcSCk7iW", "WQVdNgHSW5a", "WOtcJsK", "shD6BcxcHMWpW64", "E8kEzW/dJq", "W77dK8k0W7mp", "ag7dR0WkWOrMAsG", "z8kiWO3cSq", "n2DFW4fi", "lCoEFxax", "vJBdR2GD", "D8o+W45G", "kCoFjJjf", "zCkhAq/dJW", "W6/cN0mekG", "mSkCuSo1na", "o1LyW7u", "WRG9W4a", "WRpdJmoeW6XqWOHIAmob", "CsNdSKui", "umk/W7tcMu3dO8kP", "y8oWWO/cUSog", "cZzNW4rSWO1yC3RcPfhdHW", "t8oPW7RcN0ZdTSkeW77cGda", "aSoZcbW", "emkqdmo4WR5dW68", "omkAEmoxWQS", "xSkCeCoTWRbwW6DRxMC", "pCopuxHhWQH8W5HYdW", "WRxdOmkNWOpdLa", "g0/cTrrz", "W7xcU8oGc2fLkSoGWOSp", "W6VcVMLllmk+", "WPddGwzmW58", "hCoNitzr", "x8kyl8onW4BcGf4k", "qgD3", "W5NdTxXNWONcHmkWW5RcTay", "lmoJjYji", "f391gSk+W48xW7vk", "W7ldKSopW4hdGq", "W5VdISopW73dGCk/aq", "w2rNBaNcNxKkW6zz", "osyiq8oiW5u8WPSADq", "WPRdSSk6W5CMW5FdUCkLkfC", "k8oIWRZcQmktWOZcGGNdMmkf", "FSk7fCkQWRy", "z8oiiCkNW7pdGSkwm1BcNq", "WQblWQhcU8kV", "eaNdKmoxwtmUzqVcNa", "a8oDjW", "yHvTWO9j", "t3vsCa0", "xMrMBa", "W44EWOVcLGNdGCowq8kU", "tCkUW6/cHfNcUSkaWRlcMJy", "a8ohjwmH", "WQOBWP9bWR0", "f3usW6Oh", "o8oAmbvx", "emoDmfBdNSkDW6XGW5ZdGq", "WQ3cNc9ZW7i", "W7NdP8oYW5tdHG", "WRhdKZZdVCoH", "DCoJWRNdS8oqWOdcGbZdISkF", "i2JcGIzg", "dJeK", "WOddQcldPSo9", "gvDXj2m", "uSozfCkfWPNdKf4cWOxcQW", "W4FdOCo/W4/dGW", "g8kIxmoGWOu", "W58aWQRcNHq", "fCoymLS", "CmoyW4bEWRi", "WQFdUCoOf255kSo0WPyi", "WPpcGN4T", "aCoRhNpdOq", "cMrGg8kaW4vdWR4", "bmkpWOtdTSkj", "g8oWib9p", "mCkjFSo5", "c0L6ba", "WOWCW6iEWOS", "wSoznLFdLSkkW6n6W77dJa", "r8kbESkiWPhdIvulWOxdTa", "gmohnH7cKq", "WPqkWOvGWQO", "kSk5hSoAorldQCoF", "WQldRYhdUSoN", "iCkCD8o7WRBcNq", "CfuaWOmD", "W6pcOCk4", "WO9PWRZcN8k6", "eKPeW6Xv", "eeNcHa0+gXSC", "mmkXsa", "gmo1kavR", "WQJcJSkUWOldQJfUb8kHqW", "y8oVW6zHWP0", "hfNcGaa", "W6ldJ1awW5G", "ohVcOcz3", "j8kkWO3dT8kz", "WOJdHmk7WOldRqf1b8kMaG", "WP0vW6GTW5NcPY/cO8omvq", "q2DyhmoB", "jCovvLGZWR97W4NdG8oV", "tYTDWQbcWRVcPW", "WQOOW6qpWRa", "wxfHAG", "gSkCjv9e", "W4/dGCoPW7VdQG", "ESkRn8kVWRW", "pCo2ldzd", "WPFdJJ3dUSo7", "lfjybmkd", "rSoZW79QWQ4", "gCoIarXooq", "CmkcWO3cSCkx", "W6OjWOZcNd0", "lL9fW6blW7rg", "WO4UWPPdWPhcGga", "o8o0nITF", "vMifWOuZ", "iu3cHHr1", "W4RdU8oiW5FdTW", "vv/cKmksgNj9", "cmoRw0evkmoYW4eDWP4", "WQ3dMmkSWPxdOaa", "WOFcMJ8OWRKhgSkiWOhcMG", "zGrIWRpdMG", "ywKQWPSx", "DCkjbmkoWPy", "sYVdUwqo", "n8oClIrn", "WQZdOf9mW70", "WQRdPenXW4O", "eSkwl8oTWPG", "WRNdG8olcwi", "WQ1LWOG", "e2PKfmkj", "p1vjW6q", "m15CW6TnW6GoWRDNAa", "WOxdIIxdOq", "smk5hID4WPFdPq", "WQJdUmo5W7zD", "WRhcQmkUfxvLy8oIWPjl", "wCknBmkmWPxdGLCpW5ZcRq", "W7pdIK8rW7y", "W6ddNh4t", "g8oFWPRdRmo+", "W688W4/dGCotW5VdOCowomkz", "ufyQaYO6dxFdOmoi", "igrMbvy", "WQtdGv9iWRC", "gmkDj8opWPW", "WRJdUCo8bdreBCooWQeK", "sIrBWQbw", "WOFdSaxdMSoc", "WOZdS0DKW7e", "WPFdIJtdVCoQWQO", "jmocdZ9/", "WR3dMNbHWPG", "C8oWfmkCyeZcQSklW4hcQG", "WPFdPSoFW5nX", "W7/dUSoNW5tdJq", "CSofjSkLW7pdGSkrm0BcJa", "f8kMnCoiWP0", "WQRcTvmmWP0", "bSoDhKddSG", "EItdOK4lWOX7BG", "W5ZcGxaYWQndwCkuWPRcIG", "vmkljmkbWOddHxecWOpcUG", "W5WnFmo6W4a", "wSktm8k1WQ4", "WRpdJu53W5O", "lCo7iYPs", "qgOJWPG7W5P+", "uZDUWQVdNG", "aCoDmJnIDq", "WQG6WQL/WOe", "A8kYWOxdNCkQACkEWPVcUCo0", "cmk8g8oiWQy", "CZDHWOBdKa", "rCkUiwySW5FdR8kDWPfH", "W7dcJSkPWO7dT1a", "W5VdVmk9", "WRRcPZTKW7y", "E8oJWRVcUCohWOC", "zSk8rCovpG", "b8o1zfmc", "cSkEASoaWRi", "rdLTWQddKa", "WPe0W4CzWO0", "uh3cS8k5bq", "dCk1Amo2jW", "iMnEW6bP", "q8oNWRZdGrJcOSoFW7pdHwq", "wtNdTe4FWRjTzMlcLq", "guvNfa", "umkAsWVdKufNbufq", "gCkBW4pcL0i", "vYDRWRFdLmkOzCkxWO0", "kCoemrTc", "W5epWPFcMbpdJG", "W7xdPhWOW5G", "gK3cJab4", "yNxcS8kGaG", "WPeTW50FW4u", "WO/dILveWPq", "DGLvWOXv", "jSkTWO7dIW", "W6BcOf9OjG", "W7r0WOdcN8kwWOFcTmolnW", "rcNdS24X", "WPxdIZddMCoE", "qsvUWOVdMq", "gmo5dJzTWPdcTmoc", "amoWnZ9o", "W7pdSSosW5ddNW", "t8o1WQFcL8o8", "hCodgID6", "W7egumowW6i", "WQddPmk1WOVdRq", "E8owW4b9WQW", "zmoWv8oziHBdS8oiWPpcUq", "W54pD8onW7m", "qCoajt1MD8ogC8klW5O", "WQxcOXTUW5i", "omoNCgOK", "g8ounq", "kCoeWOxdHmoV", "qCkylq", "iSo9umoomq7dQCoBWPFdTG", "g8kFCCo+WPO", "WPFcV10JcKZdKqCQW6m", "fmonrfib", "WORdIIJdHCo5", "W7VcRv0kma", "WQOUW5ChW5JcRG", "y8k5AWZdV3e4bG", "WPCpD8omWQVcNCkHdc1a", "yhbFuG4", "WQtcO3Xan8o3WPVcGmoigq", "g8kNoKv+", "w8ocWR/cI8od", "W7ddNw8tW4u4ibBcT1q", "u8kCc8oUWRj7W6HVx28", "nCoEWPBdNa", "W7JcOLaVwK3dLtCIW7K", "E0FcTCkuWO0", "DSo4W7fwWRa", "nCo4W5LHWRxdKCkN", "lmo1yq", "nCoFcI9y", "asiYiqO", "amozaWzw", "WRVdOmoLcq", "uMP8DG", "W4BdV8k6W4e4", "ymkGAXddOMTHhfOj", "WO7dHCoaW41N", "omoTWRxdLCoq", "gCkDimkuWPxcJvagWOpcRW", "nmkDjxbO", "uwZcISkTaG", "FmkPEa", "imo/mhRdOa", "nK52W7b4", "DttdHSkdWRKkmSo0EIK", "oCkxd8oHWQG", "W58VWO9jWPhcLMKgW6ddGq", "W7OiWRpcIt0", "W6ifESoqW6u", "l8kAW5VcH10", "W7RcR2TllmkUWPW", "eSo3t1ey", "hWa6e0zxWOldNI/dIW", "eM5+emkvW5q", "tLrZqJa", "vtr0W6tcHq", "r8kym8kfWPRdLee", "W7hcNSkfW4ykW4P7DCopbq", "uKf4fbjqWOhdLc3dGa", "m8k2CSomeW", "F8kcWP/cOq", "WO3dUCozW4Ht", "W4BdR8kkW6WX", "vCkre8kiWOa", "zCoJWRJcSCofWORcRXZdN8ke", "hSkAdmo/", "W67dKvWKW5O", "imkkv8oLWPK", "cCk3bgTn", "AhBcO8kHha", "c1FcLSksgvL+jLddIG", "bCoacbb8", "W5G4WR3cJaO", "uvSWhIX5rYpdPSov", "xYNdOu4/WPK", "xmk+se0uBCkJWPnbW4S", "WQeGW6mVWRa", "WQ9TWQFcR8k4", "BcrFWO5Z", "WOxdICoCW7VdHmkSamomsf4", "WPpcKsrTW6a", "WPGDW4ajWOn6pa", "oCoIWRtcQSosW4lcJa3dMCkx", "W44gW50dW4hdM0raW6/cHG", "WQxcOrno", "W6JcLeeHoW", "bCkXjCoGWPq", "WPNcQgKrWRq", "WQNdH8knWQClW5z6y8obwW", "W7dcL1nCeq", "WRKlW6Cz", "zmoHW61WWRu", "nYyus8ooW4uTWP4yDq", "AgFcG8kkWQS", "WQpdR3LPW4i", "umoriuBdKSkmW6C", "dSo0pxpdPG", "B3zjfSkc", "DtDdWRxdMG", "WQFdQCkCWOpdKW", "W6JdR8orW6NdTq", "WPFcPvOOfq3dLJe/W6u", "tCksmYXGjmkqoSkgW48", "yY9ZWQtdIG", "EdxdI3Sr", "WPOxW6S4WOu", "WOW7W5e4W5S", "W4Pmo8oCW7FcG8kZtJau", "wSo9ccn8WOVcUSocW5OX", "ua7dIMGA", "rMaaWOaOW5b1uq", "W6iLsCo/W4a", "uSokWPdcK8o2WQhcUG", "WROAW4uuWQDvcttcLaC", "gtbYfSksW5LiWRSdCa", "rCoex8k+W78jWRWQgJG", "s1O2WReO", "WPhdLmoNmfe", "W5JdTSkUW6qS", "CSofWP/dSmoTg2tdJHmJ", "WRJdK8kKWOddPGT3", "WONdP3L0W6dcNCk9W5VcUa", "xSkaCx4ZoCorC8oEWO4", "lSkNWR7dRCkV", "W57cQMPTfq", "C8koW5lcGSoVDSkXW4xdO8kS", "jSokiwZdMa", "W5pcJ2pcQ8k+WRBcUWWazSor", "oCo3dde5", "lCo2qwm/", "mCkaC8oNWPlcMW", "WRioW7qaW58", "WRFcVvOmWPiGBG", "W57dPmoyW6RdMq", "WOhcHuKwWPy", "WQ7dN8ogW5br", "WOhdMhvXWOC", "tmocktjQCCotmmokWOK", "W5ulWORcSbddImoVv8k4WOi", "imkrWPddNmk8", "WPiIWO5gWRm", "kXeHhdH2c3y", "y2VcGSkIWRq", "ufmNcZL2ehpcUmos", "WQ/dTdRdKSoi", "pCorgLRdOq", "WRtdJd7dT8o6WRpdNam9zG", "iCovnCo9WRlcNCohzvVdIa", "mmkgWP/cP8krdmoCoJdcIG", "t1JcRmkZWOe", "veldIbfKua", "W6tdKg8c", "t1RcJSkajG", "uc7dO10kWOrMAq", "uvVcMSkd", "W6ZcRMCReq", "W4TFW41qWPrJ", "vCo/WPZcUG", "emkbwCoZWPa", "k8ovoJ9Q", "CHpdJfOm", "FbbqWQb1", "b8oVjXfD", "rrVcVg7cQ1WJ", "W6SVWPhcSde", "WPddVeX0W4G", "WOhdJdGPWRyCxCkAW5NcMG", "l8kum8oVWRu", "W4alESoCW7pcHCkaddq", "cef3ca", "zGjdW7DyW7HBWRC2", "rdLLWRddImksFCkkWO0", "hSken0To", "lqnvW6HzW6vbWRTTka", "lbyInWS", "zuT2emk6", "WOeEWPJcNqVdG8kbgCkJWPa", "h0f+aubuWPxdKcRcLa", "ELKlWR8J", "qCoQW73cLuRdOCkbWRdcJwW", "WPBdMYhdV8oUWRVcMq", "l2pcICkuWQXtmmk2DJG", "WQZdSM9T", "C2yvWQmY", "WQlcVaLy", "cSkoCSoqW4tcJvPqW4hdVG", "WRpdG8oKcum", "dSkek3fT", "WQddJSkUWOBdTqDQda", "gCkofK1I", "iCknzSoCWQFcISon", "mSo1zxWCWPi", "WOxcGbLNW78", "sCkjtCo3W65yWRL2hq", "xvddVINdTHjPDwy3", "W5BcHLLuWRXovmocW6ldVW", "bSkXCmozWQlcKqe5W5pdSa", "Dhz0eSkp", "WQxdOCobW49k", "WRbQWOVcICkAWQhcTG", "WPrOWOpcRSkw", "qZDlWQPi", "hmkbc8o5", "W5imWP8", "WRhdMSorp1m", "W6hdOSkDW7Cf", "e8oxj2ldH8kmW7b9W7VdMa", "imknySo5WRlcJmof", "oSk5zxWbWPnwW7ZdSCkt", "W6NcOxDAj8k0WPS", "WQJcJSkUWOldQJfUa8kGvW", "WPHaWQlcGSkb", "W6TRWOTEWOxcHg7dQmkrfW", "BeDSydi", "ySkTEaFdPwW/", "W7hdJx4", "fudcHWz/", "W6pcV2uLfW", "DCo+W4HTWRNdHmkU", "vMyL", "iCk+W7xdQSkaW5RdJKxcNSoh", "fCoNo27dTa", "i8krW4RcUCowamkimMtcMa", "f8oxlSkxWPJcJvecWOpcOq", "ECkVWQ3cOmkM", "h8owntrb", "W4FdLtddSCo6WQJcNru9EG", "c8owlCkjW4O", "zSkEyWNdHa", "W6eNBCoAW6W", "W63dQSk6W6y4", "W7pcL8kcWQKoW5ygCmoshW", "D8kmWORcPmkxgCoj", "euHZgSkN", "xwSMWP8", "WPS/W5WuW6a", "a01cmxW", "WQW3W5KiWRW", "W7pcOv9Gaa", "lSo7DN0", "eMrXeW", "sKL0oCkuWPT5W45ciq", "EmkiwIJdUa", "W6xcVh1lmmk4WPBdKSovdG", "xdblWQXx", "wSoAmLhdLmkz", "WONdO2rNW53cMW", "WQGIW5mTW70", "W44pWO0", "fCogj1e", "g8oDcG1mvW", "rCovuSk+W64eWQC7gtW", "hmo/cti", "bSkYW6VcKW", "x3jpn8kb", "WPtdJvOoWRmmwCoxW7hdUq", "W53dISkQW6yL", "D0LbwIS", "WR1tWO7cNCkR", "WPOIWOrl", "CgyBWPS4", "WPRcO1OPeu/dHW", "WRXcWOpcQmkq", "c1xcH8kdexrVoL7dIa", "WQVcVbbg", "ed/cHM3cJW", "WRxdTL12W4q", "WOFdUZldKSog", "D0xcJ8kvWOK", "zb5dWO/dGq", "CmoGWPJcRSou", "W6qJWO3cICkoWOFdVCkgECoE", "iSo4fGHn", "uvnXtH4", "sHj9WObn", "f8ouoMxdTG", "WOJdGSotW77dGmk5h8octLK", "jSo7DgWFWOnuW7ZdH8oc", "xfddOsVdPb93y2iJ", "D8kFCbddQq", "cCkMmSo7WR4", "W7xdNCkzW6Co", "g8kjW4/cP3S", "WRdcMZi4W6uEbWpcKW", "WRhdISoEW6jlWO4", "ue3cH8kB", "WQ3dNCoFW7fqWPiZmCke", "vJjWWOVdSG", "ASozmSkGW7pdGSkwjehcMG", "uCkyWRRcSSk1", "WR83W507W54", "WRddR8oSmMe", "l8k+sSoziIJdJSoMWRO", "DSkFWORcVa", "W6/cV0XdfW", "WR5HWPVcQCkoWOVcVCktE8oF", "W5JdV8k1W4i1W54", "WQldG14", "jHVcIMRcJG", "dfhcGqjNgG", "fNujW7u", "WO7dJSk1W5RcO14LuSoIea", "aSoBnLq", "FLvYtqa", "f2v5aW", "BLreFtK", "omkDvSo8WRK", "eIRdPuGBWP9OAxhcLq", "bmkbBmogeW", "jCo6W6BcOSkdWPpdMHtcMG", "w05bsZ0", "nKjdW7C", "lmogygKf", "y8kBgmkfWOi", "WPCiW7C3W6y", "W6BcM0bSaa", "WRJcLLOqWRG", "DmoRWOZcNmod", "WOddMSoiig4", "WQhdQJ7dM8oU", "i8o8aHztlSkVWOWEWOS", "dmkSWO7dGCkWiCkoWP3cTG", "ccfyWRfBW5NcPr/cKSoH", "iCknWRldTmkk", "WPqiW5mHW74", "W4L8W5GpW53dLIvdW7hcGq", "lSoyEIalWRWpW77dT8o+", "WOldJ25nWOO", "c8kWW7VcO1e", "bCoNfc9a", "WOhdJcxdQG", "w8kwiSkbWPJdS0ymWOpcRW", "WPynWOnlWPS", "l8kwd8oiWR0", "WPtdSb7dOmol", "WO/dRgLbW4O", "emo3gty0WONcQCofW541", "W73cK8o9W5pcUv49l8kQAMuwWOi", "WRZdNSooaN0", "W58gWPdcJa/dG8oBa8k6WPm", "WRbkWPZcQmkO", "oCoBoqru", "stHsWPldQa", "nSo3hMRdTq", "W7m/WONcTcK", "WORdRgXkW6C", "WOKXWO9TWPi", "WPddGvHh", "jSoMftLV", "A8kTEHxdSW", "gCobWR/dHSoM", "f8kLW53cHeRdVSkgWRq", "pwdcKSkEWRqBBCk7DYG", "W7xcU0mlia", "WO8DW4usW4H9la", "W4qlDCoFW6lcNW", "dSoYgany", "bCkClSotWRq", "shXnBZ0", "vdX+WQBcGCoUlmkxWPdcQa", "qCoclY13nmormCkjW48", "tCkYemkOWQa", "yCo6W5H3WQddJCkWgM3dLW", "l8oCiGDJ", "W63cOrnmW5TmWQdcHSkmWRu", "zNpcR8kYfG", "DCkFWPhcQmkNfmoCpbBcIW", "W4LRW5SFW4xdGZvsW7lcHa", "kSkNWOldL8kA", "W6pdKCoKW77dJG", "yL3cSSkUWPu", "W5WAWONcMGNdGG", "kSk1sSoBjaG", "WRGvW5qxWOO", "WPu4WRHkWPhcH3W", "vSkpimktWPFdKLStWOxdTa", "W6KMWPCsWOFcTwpcUSkwxq", "t2BcVG", "WPGDW4nsWOn5kHdcSuq", "itpcHhJcQW", "y8ocaMXhWRi", "WOVdO3G", "gZfTWRxcM8k/CmkgWPVcPG", "ofxcSWXz", "lSkXvmoji0FcPa", "du7cKqj/hqSpW5hcPq", "mmo3qLSW", "grSpatPYc1ZdTmow", "nSoXn3aCWO8AW6tdO8oj", "WQBdTSkUWQpdPa", "WPFdMezgWR4hDmolW7NdVa", "W7/cRbrCWPqcWQ7cKSklWRi", "WQHxWPxcR8kr", "D8o2WPRdLSo8zmklWP3cSSo3", "bmk/W6ZcIvS", "WOFdVCo9W5DP", "bSoCksO", "l2pcICkuWQXtmCk2Fdu", "WPxcUvCqWQ0", "jmkYWPRdI8kWia", "qSkaWRFcJCkj", "pCkEefrL", "WQVdHmk5WQldRqTOb8kSvG", "W43cQuW6", "W4/dNCo0W5ddMq", "rCkpWQFcI8kX", "W6HRW5LwW4RdVsFdSCoEeW", "WRBdGCo/iwO", "WOGmW6K6W7i", "WRTHWP3cJCkw", "aSk7s8o2eW", "BHztWQBdLa", "W5ZdNmoqW73dVG", "eCkCxCo/WRa", "jmoIWOpdSSog", "W5OlA8ouW7FcLmk3", "zSosWR/cNCo5", "rvfdnCkq", "W4ddR8kzW7mO", "WPq/WODd", "u2Pywsm", "C8oOFSkEF17cPSkeWOxdSG", "W6ldHgmcW5C", "WRddU8o9", "mmopWOhdPmoWxG", "fMP+wSksW50kW7O", "DSk0oI1sW4SlWRRcUSko", "W7i4WQRcTqm", "fhmzW7ylW4tdOu7dKSkQ", "WQWWW4y+W4m", "o8oVot1T", "tCkJW6dcLLFdPCkfWRlcMZG", "xmk/qXJdMW", "wCo1WPZcPmoJ", "sJK8rSouW7rpWRz5ka", "W4FdSSk0W5i", "xCoVW4LsWOe", "W5dcOL06", "BwFcJCk2WOK", "W7ZdISonW6JdRG", "WPhdQx5HW4u", "lSopWP/dR8oLvxe", "dmoDlIPMD8og", "WQO5W5S6WRu", "zCo0W750WQtdGmkWnNNdGW", "AmkPWOxdNCkXkSkA", "WP/dNfnoWO8qxSozW7u", "zL5yW75aW7qkWRTNyG", "uSoBF8oCWPxcGfOrWPtcQa", "WPtcG3aSWPqgw8kjWRFcKq", "WRNdSmk0qKvVA8o+W55y", "emkuc8oOWRC", "W6pdUf0BWOrsW6ldG8oyW7e", "W5VdOw0KW6K", "b1LjdCkz", "tConWOZcKSoa", "nmkPW5NcHhq", "W58dWPFcMW", "q0ulWROn", "FSo7z20BWOLuWQJdTmop", "nMRcTZD1", "oCosWPVdPSoQuG", "qbruWQHt", "WPldJubQW6u", "W4KkF8o7W7RcLSkHea", "ssftWOXZ", "rIfWWRe", "WO8FW6imW7S", "d8oGabXooq", "vaXjWQDj", "zmkzWOVcOSkO", "ktGfe8kwWPiTW5HEnG", "aun4mu0", "p3NcJqvg", "W4VdG2SjW48", "uZrGWQjy", "W6BdReGqW70", "W7GRqCoRW7a", "eCoUWP3dPSo9", "lxzCcmksWPTQW4Pyna", "wxvLDdm", "hLb4cvS", "WQdcPbXzW4CVWQpcNSkD", "lCo2FxWrWPi", "WRiOW68fWQ4", "CCkDa3ncWQL2W5H1ga", "ig5ycmkCWPqGW49fjG", "gwD/fCkaW5aTW7TaAW", "E8kzWORcTCkxrSksyslcKW", "qNOGWPW", "WOldOx5XW44", "WRRcIrDoW6e", "WQOIWPLdWQy", "WPiDW4RdJ1FcI8oxfSoNW4i", "WOtdVfL1W4u", "u1/cJG", "WQRdSx56W5S", "DCkPFG", "g8oSufeh", "xMrXFqpcNa", "d8oaBCosW4BcGanwW53dVa", "iJVcQNlcPW", "lGNcMvNcRW", "WOBdLZ/dTW", "W5TaWPPDW5qSAeFdOKS", "Ev1fW6TfW7LvWRCLnW", "wmobW7PEWQi", "WPFdLJtdV8oPWPhcIaq1nG", "rCkCn8kfWOBdK1C", "WR4iWQT2WRhcOKq2W7RdJq", "FMDaFqm", "WP9IWQFcNCkS", "amo3fqv4WO3cVG", "qCoFWOBcLCoa", "itOWlsm", "W6RdIwHC", "dfrGeG", "FvdcQmkEea", "W5JdS8oHW4mOW4tcP8k1", "WQVcUHHmWOLgWQJcKSkoWQa", "bCo8daK", "wcddTf1tWOnMDxVcLq", "kKXEW6jcW6vh", "ycvdWO7dJq", "W5Wly8om", "vqddRg81", "sb9fWPNdOG", "kYmBgrq", "lduckJ5go3pdHSow", "xSkQdSkIWRC", "WR3dHmkQWQxdJG", "jCkXsmoq", "t8kgDgWJnmkbAmohWOK", "zCoPW4rQWRpcMW", "pKpcIHvH", "Ag9xhG", "k8ohCg8d", "amoZfGLZmSo3W4yj", "WPyKWOnb", "emk6W6lcMuW", "uHddL28j", "Ec3dMhOq", "mgPE", "hmkPhw18", "l0T6W7DV", "lCkRW5FcKxu", "DSo+W59qWR3dImkN", "WQpdH8kuWQ/dQa", "qwVcLmktgG", "f8oLh1hdVW", "g8oHWR7dLmoY", "W6tdIwKj", "oSoCE2GW", "oSoklsrQ", "k8oQWRZdOa", "WOBcNKW1WQuhvmkC", "yvXIDJS", "DG5XWOry", "gmo9nGLinCo9W4q", "qXyIdszWc3ddOmol", "WORdTfjdW4G", "mmoYkIfw", "fCo6rum1", "WQ/dOufuWRW", "W7hdJ8oSW7BdIq", "W5iQWOriWPVcGIGwWQRdHW", "aSkdWPNdT8kwi8osWOpdO8k4", "j8kij3ve", "cCogns1U", "x0XEp8kn", "i8o/jLpcUdz9r3LE", "WR10WQRcU8ks", "Bc3dGMql", "CSo0W5HW", "bSkNW6VcNKW", "kmoAWPBdQSox", "dSoqjtiUBSoap8kxWPK", "gSowAqdcG8oiWRjPWRRdNq", "W4y2DConW70", "W6ypvq", "CCoVWRVcUG", "emk7e0TZ", "WQRcIxujWRq", "fSkPWONdLSkQ", "W40lWO3cMGNcImoptCkN", "eSotn0BdUSkw", "WP8UWOzd", "wSo0cdTWW5tcRmoEW5WG", "k11uW4PC", "WQGVW4qaW4lcOc/cVW", "DZHkWONdVG", "FN9GDcW", "W6SxqSo1W5u", "o8opWPS", "eMvUW4XL", "W4lcOuXucq", "WPJdUCoId0e", "WORdQSoMW5b9", "eSkzfw1Y", "WR4OW4qaW5lcNttcSSodtq", "CMpcISkoWQW", "WQSOW70mW74", "W4FcNg9HcG", "wLSFWOmD", "W4ddQCo0W4eKW5dcTCk0lva", "fCo3qg0+", "W5ZcULeG", "tdmPv8oqWOLlWQ8BlW", "cmo3crrxnCoNW4yd", "WOpdKLnHWRi", "bMGbW6vwW4xdSexdKCkQ", "WQpdKCk5WO7dRGb2", "v1pcGab2erPqW4dcVG", "W4xdS2r0W5ZcMmo5W5ZcQr0", "umo9fqLtm8o9WOmhWPO", "cCkPfurm", "tYfPWQ8", "ewHOg8kU", "y8oUWQdcS8or", "W4JcO3SAna", "WOlcG3yIWRi", "WQWaWQjUWPi", "n8kCcu1+", "W60IWPJcSGW", "EmojWP3dPSoLqNe", "WPNcM8kDWRxcMmoRq8kuhr0", "dCo2atHmoCo9W5C9WPi", "g8otoa", "WOJdTw1Z", "WP/dM2rgWRehtG", "xgfVBXi", "W7ddJSk9WPpdQafRqSk0qW", "W4ldH8oQW7NdJq", "nCoeWOBdTW", "aLD4i05iWP3dJJdcGW", "a8kMoYTsW5yAWRJcRSkF", "iSobW4NdQ8oqtCoXF2hdIa", "cHe3kYfYfhRdU8or", "tJfnWRvjW47dRLNcKSoJ", "nticcZq", "vZvbWOHk", "WQRdLmkuWOVdIG", "WQ3dRej3W6y", "WRJdNSofW6rtWPu", "oColWOZdQW", "m0ncW6jEW5LGWPre", "cIu4ixJdKIDjWQSA", "eCkVW6pcN07dSSkTWQxcJt8", "reZcHCkwwxjHifJdHq", "r8oQxsSRWOxdR8oqWOW", "EwlcNmknWRa", "uCo+WRNdKaRcO8oDW7pdHwi", "xSkBnmkuWPe", "W5ldS8k1W4e", "scXDWQX5", "WOhcLgSaWQmAsmksWPBcIW", "W5OpWO0", "WRdcIfyL", "FmogWO7dQSoQ", "W5WbB8ozW7RcN8kZesqh", "m0vnW6KbW7vbWRG", "W6ZdGSkHWOBdSH04qmkHrW", "u8kPlmkqWQm", "sLK6WOau", "jsqPlaG", "FSkLmatdOMO/cW", "W6pdIx4aW49gmHVcUum", "xwSMWP99WOC", "WQFcRSoRbgrHymoLWPyt", "Cb9vWO/dQa", "xt8Kq8oAW58rW6naAW", "vebTDcy", "EY/dUK4p", "mCkPW53cMxe", "i8o/oKlcPI1StGft", "yCkTFaC", "eSk9nmo+WQC", "DJ3cN8kiWQ0kjSk7Fwi", "lCoFWO7dRCoWx2ddNG", "DCk0W5XfWPxdPmkdn1ddVG", "v1nXdePzWOBdNIC", "yN/cICkuWR0njW", "lmoyz1Sb", "fKVcJG5a", "WOHIWOhcJ8kT", "W7VdVmo9agPvD8oLWPaf", "jCk8s8opnrpdRG", "gmkcCW7cGSokWRm0WQJcNW", "kmkbC8oVjW", "W7y6WPBcSYi", "hCoDntbN", "WOhdGvHfWR9Eb8kfW7hdPq", "x8knlmkm", "WRdcOYPJW6q", "AY7dTeqS", "WOddQ2HLW40", "WR8ZW4Sk", "WO4QWOrlWP/cJG", "yMnxhCkpWP0", "WO0jW4eDW5q", "ASk9CaJdOW", "aCohldi", "WPhdQxPSW4JcISoKWO8", "W4NcH3vxda", "p2jwimkj", "yqbT", "ECkZkvetWOrtW7VcVSkb", "W5/dT8kcW7ao", "uXFdIeGu", "omo1WRhcUSowWONcJX3dH8kc", "ccuGlwRdGsDFWROa", "WOedWPtcMeFdHCotrmkKWOe", "WRiqW4i1WOm", "aCkdCCoTWQC", "WQS5W7aSW7q", "sWFdMK08", "omk3c3fI", "W5lcGhHKbG", "fCoIbxD9W4tdVmoHWO9G", "WPa9W6K+WP4", "qmonW65mWQu", "WQJdUrtdNSox", "WQP1WPJcGmk1", "qCk8yWVdNa", "WOpdV15XWPG", "WRi0W6m0WRW", "bSoxpKZdHCkDW4f4W7JdNG", "aSotpW", "WQBdMCoZfK8", "W6pdTmkcW48d", "bmkVW7RcTvtdSSkfWRBcHIu", "WR0lW6q5WO0", "W4uPWRJcQcq", "WQdcPXLp", "ltZcHvZcOW", "y8o0WRZcUCouWORcNa", "W6BdVeqOW48", "WRNcPrHtW7G", "jCkavSo2WOm", "pKdcGdze", "WR7cNKuPWRW", "WPFdNmoAW5zD", "ASkosaRdRa", "W4KpWOhcIW", "Dmk9WRJcQmk1", "WP03W4OKWOK", "W7u1W5ZcPmotW53cHSohlmoJ", "WPeyWQLRWRe", "W4hcR3TBmSk7WPVcISolva", "WOHzi8kyWRVdHSoJq3js", "m8oscIv9", "cCkVdCoHWPy", "WQGxW54jWOn5kHdcPW", "WQ3dUGm", "he/cKq", "vSkra8kMWQ0", "W7ldJxGxW5uiia", "hmogpK8", "dwfZp8kJ", "yYHnWO9t", "sYT9WQrC", "bK96", "ECkBn8kgWQi", "m8kGqmoDjau", "tSk1o8k6WP8", "yJfYWOjv", "W5aSFSokW4y", "W4TLW54EWRZdKJvEW7xdUa", "nSkaqSo5eW", "k8oFq24B", "bSoEmLhdMSklWQ93W7BdGW", "edJcHuNcLq", "wg9kfSkT", "jmk2WP7dNa", "W4KAB8ok", "x8k+AcBdNq", "dXSNfW", "bCkAqSo+oG", "W6qBWPpcRHi", "rMaHWRu2W5u", "WOhcRWr8W54", "wCkKwMa5W4VdO8kmWPbJ", "sgrNFstcHMy", "W7SbDConW7e", "W5VcUhbTla", "mexcTJb8", "W4SWWP/cKda", "DCoJWQFcV8oh", "CSooWO7dT8oLg2FdKX4+", "l8kmW57cRCkwgCoBC3lcJG", "b8kgFH9GBCoBkmkgW48", "rmkbWO/cRCki", "W4hcU0yMpW", "wCkblCkkWRK", "m8ktWOZdTmkK", "WRFcRrK", "cMrwhSkzW5KA", "vcXoWOxdVW", "WO4pW4CuW5u", "dhL1gCkvW78rW6naAW", "auf2bum", "W6/cIgjvW4CnkHtcPHO", "W6iyBSo3W6e", "WQ0WW6eVWPeKaZlcSGq", "n8kNWOFdGCkOiq", "CmkcWPdcSCkbeSoj", "gmoZhs9Bkmo2", "WRWWW5ifW5K", "yXHSWRFdIW", "WQRdMaNdMSo1", "f8oDpvddH8kkW7D3W63dGG", "ow98W6fh", "WQRdImkJWOm", "e8kCkKZdHSkmW7D2W7ZcGW", "WRtdOmoTjNu", "FmkJBGFdN2e8gG", "WRPRWOldG8kuWOFdVW", "vsJdHLet", "sMVcTSkZbG", "pSoCW4RdS8oesmkiEhxdIq", "DH5hWRVdVG", "hwrJaW", "WQFcKtrbW4W", "jSkWor7cVwr0", "CSo+WRBcSSogWOVcIY7dMCkz", "dSkqc8ocWRfuW79+", "W7Wav8ojW6q", "W4TcWP5n", "WQBdSmoLagr+AmoL", "kK5UeL4", "WR47W7W6W54", "AaH6WOfS", "WPVcOeyfWQq", "WO7dJCo4W5jy", "WQJdHmkUWOJdPqS", "WQBdMIBdOSoQ", "fSkfWPpdRCku", "E8keWPRcOa", "t8kvBwVdKSkAW6TNWQxcGG", "WPSUWP4", "dCktA8ojpG", "g8oWcW", "WRRdSCo8dIDJACoNWOWs", "W6BcVLeJfvBdKwn1", "hg5IfSkv", "WPGEW4CEWO0", "bvRdN8ovotC7EG3cMa", "tSkSjmkLWOy", "ymoUW4PQWQddJmk2da", "WP4MW74TWRi", "p8kHqSoQbG", "vapcPxRdPeqTjIzv", "CmoRW5THWRRdGCkbhxhdNa", "WOBcLfuqWPm", "f8oJoIjA", "h8oIcrro", "W77cQ2fA", "W6/dHvmxW6W", "Bc9qWRhdQW", "iCoygajx", "jCkMifrY", "dMPIeSkpW4Gn", "W53dTmk1W4aZW77cGmkmdq", "WPVdS8oAafC", "WOdcLhiUWQel", "WPuEW50wWRy", "CrpdTNm2", "WO/dUmk0W5CLW5pcPSoSm0u", "lSogctLa", "WP/dTgDfW44", "cLv2guW", "W6ZcRmk9vte+rmosWRyZCe4", "seddVZ3dTb5KC38U", "jCk/sSoinq7dRG", "WPpdKfna", "z8oNWQFcU8oDWPVcNq", "l8kFgh9d", "W7ldGmoaW7fwWOKKFW", "kCk+DmoRna", "hKtcOGb5", "WR/cLcugWOjxAGNcPfa", "W63cQ21On8k2WOpcTSoagG", "WPxdON9QW6S", "WRyyWRTvWP8", "WOdcLg8TWRynxW", "tqhdIfaZtfPjWPddVa", "jSoCW4RdTCottSorbcdcNdHy", "W4boFCorW7RcM8oVqsat", "WQFcIvWiWR0", "W6ldGg8cW5Coiq", "b8kTWOldJ8kk", "l8ocWP/dUW", "ySo3W4jNWRe", "WRldICow", "FMDlh8kvWOf+", "o8k8pxzv", "WOyCFSoBW7pcMCkMtI8h", "B33cKmkVoq", "Bu5Mqb0", "eCk7umoWWPS", "WRtdQ0zbWPu", "qM4HWPe0W41O", "W652WPrwW7FdU3FdTmkceq", "iSkqW4/cK1e", "ESk0tCokCapdTSokWOxdTW", "cgj1aa", "mSk/D8oiiGNdTmom", "ACo3W45+WP8", "W6dcUXfdW5aeWRdcG8kxWRi", "pSkPqSoPiq", "WOJdKty", "puLXl8ke", "WRn3WRNcRCkL", "i8okngJdKG", "kSo8jd9q", "oCoIWRtcQSosW4lcIGhdMmkD", "WOldH3PmWQCgrCoGW7hdOW", "W4hdOmoKW4VdMq", "oSo4zuma", "lrxcI3JcSG", "W4tdTCkOW5e", "WOpdMYu", "WOGNWPP7WRC", "dw7cTqjN", "hNrAfKq", "WP/cI8kkWQRcJ8o6q8kddaG", "W4upAW", "lSoGmcCIWO9wW6hdQSko", "W5GBW4aBWOLMjrtcPGi", "WQP0WOpcHCkw", "f8keohfN", "kmolWPC", "FmkyFCoMWQFdGSotAH/dNa", "n8kgzG", "WRdcPbroW5e1WQ3cLmkFWQ0", "qgnqEJ8", "B8kkm8kPWRS", "W4pdN8ojW6JdNmoXxCkmvf0", "WRNdOCkRw1DJA8o+WPfg", "sf/cLSkuha", "ofrVW5D0", "jCo4EhStWOPPW7ZdRCoC", "dXRcSNRcOq", "WOJcG1uhWQq", "W5hcUea+crRcM2S8W6y", "lCo9Df8I", "CCkKAXddIMW", "FmkhW48", "g8kCeCoV", "WPeyW5CKWOW", "z2xcRmk1WOO", "umo1W5TnWPW", "W4PsWPTrW5qKc0ddUvO", "fMCQW7pcI8oSlmoxW5JdTq", "mSorWPxcRSoTwhddGGDW", "i8kPWOZdQSk4", "dmkMuCoZjW", "gSoCnafn", "WRvXWORdKCoa", "W7/dUmojW6JdVq", "gCoBkant", "xqbMWOxdQq", "du7cSbnJgHW+W5hcOG", "FgLlwSk3WPPSW49foW", "hCo/CMaHWPji", "ruhdOcNdTbjPCMCI", "WPRcKhfSWRmBwW", "xCkGvf0kFmoWWO5iW44", "WQBcSaLpW5Of", "sv/cGmksga", "F8o+W5K", "vd1RWRq", "DCoxW69kWRW", "WR/cUfG5WPy", "g8oybKtdMq", "vGC0a0nBWOhdIh7dGq", "gmohhNFdVq", "j8kdW7tcSvu", "bX7dRq", "nmo1EW", "W6XUWOvdWO/dUxVdTmkqaq", "W4nbWOjmW5ryEuddU18", "W53dMCo+W6NdNW", "rtblWRDFWPRcOG8", "iSkNDmoYfq", "men1nSkv", "WORcMe4zWRW", "W4FdRSkPW4WVW5e", "WOddNYxdSSo8WR3cIa", "qSkjjCkbWOddHq", "WRlcMtHAW5a", "ugrMvZ3cNeunW6rh", "WOWQWPHkWP7cL3y", "FmkaC8oNWRtcJSknyb/dNW", "FSo4W5nOWPS", "W7KfyCooW54", "gmkOoLPq", "qsDRWQ7dUmk0FCkvWQVcUG", "tYTEW6vEWPxcTrFdM8kQ", "lCoOW51JW7tdHSkUfgVdGW", "WR9TWOhcIa", "AurywIi", "W6NcR3vc", "B3jnca", "cmoHENGg", "WQO/W5e", "WPFdGSoydeK", "hh1kW6b+", "nKerWQvpW6rgWQTTAa", "WR/dKCkHWO7dTq", "WOJdLunbW6G", "b3GYW7RcJ8o8mCouW5ZdPq", "dSoguNau", "vKGjWQio", "W6/dMmolW4NdVW", "ot3dNSoEW7HlFCoHiwa", "W5/cVLSJouJdLtyiW74", "cSk1t8oYkq", "yhFcGSkKWRqFimkQ", "W7hdImkSW5Cp", "WPNcV1uGWPq", "WRSrWRb1WOa", "CwBcLCkp", "vfNcLSk/pq", "W5uVWPRcUIG", "d8kqdmo+WRnqW7K", "vJDwWRntWPRcOHpcVSoJ", "pmkIqSojgIZdLCoHWQpdKG", "nLHjWROoW7vrWR9PCW", "rLVcJmkdwxzHj00", "WRZdVCoJW5b+", "F8kcWP3cPmkil8ojisFcHq", "uZDv", "qSoCl3nTBmkFlmkqWPq", "W4tdNxZcOSk3W7JdJLnQna", "mmkRW4lcNuS", "A8kRWP7dI8kZfSksWOm", "WRBdR2LkW6e", "C8kClmkIWPy", "vmkbzrtcK8ovWRaGWQVcJq", "W7FcHSoTWOtdRq92eCo/bq", "ErPjWRDvWOdcRINcVG", "WRddGCodjMy", "WRddTmoQdq", "W5RcPfu8ou/dKcekW6u", "W5xdRSkZWOuLWOVdS8kmCXq", "W5isW4tdNvFcHSkpbCoLW4y", "yfjRi8k9", "WPuLWO1oWOtcGMTqW73cIa", "gCoOad9y", "ewPiW7bB", "FCoJWPpcSSoW", "g8oDnd9Vnmoqo8kvW5O", "WOGnW6WGW5q", "FspdKNi6", "DehcI8kuWQa", "WPtdRhjxWQG", "h8otmJTTBCob", "pSknFmoYWQFcHW", "wSo1W4vjWQ4", "wGxdJLOr", "oXWRctO", "fSoJggtdVa", "dSolabLo", "nSoWmGDB", "WRJdNCocW6Pn", "bSogjtnCACoan8keW54", "WQldRu95W7K", "xezJq38Hws7cO8kv", "WOGKWO1iWPZcHKyEWQldHW", "vSktimky", "mILve8of", "WOhdNZldUW", "s8onx8k/W6WrWQONgd8", "d8kqhSoVWQy", "W4RcPrK+e0ZdNsWQW78", "bmkVW7RcVvFdUCkCWRS", "aCkfW4RcOMa", "BmkrrwauWQaSWOKX", "W5KpWOhcVrq", "cMf7iL8", "W4OiWRdcUcS", "W7aPC8oaW78", "WRRdOmkdWOxdPq", "W7pdIx5gWOjxAGNcOLy", "fM10AI3cKZGBW6je", "cbuGbG", "WPmbWPZcIWldLmoEs8kWWPm", "ba3cUbjlW5qLnIddMG", "W7SVWPRcQs0", "vKRcJCkA", "BSohWPJcRSor", "awNcSZDc", "pSolWPVdOSo3g2pdHHq+", "W7NdM8k/W4OB", "WRddRgbLW74", "WOtdPSoTW5LZW4RdP8k9CfG", "kSo5W4r2WRddGmkWwgRdKq", "vgyGWP0X", "jCoWddDi", "W48gWPJcJq7dLCksrSk4WPW", "l8kcWO7cSCkne8otBIpcHq", "mSktW4tcNNK", "h0XFW41C", "oSkhW6hcOLO", "g8ozEeSq", "FSo0WP3cNCoB", "Cen0wrO", "WOldNZtdN8ok", "l3FcH8ktWRLtoCk8DIu", "eCkvWRldPSk8", "j8kIW7BcUMS", "nKj/W5vd", "xxnyxdK", "l8kcsCorfG", "B2jDp8knWPbJW59Gpa", "m8keWORcOmkji8ojjIdcIq", "eCo3E2OW", "kCo6kGro", "WRZdNezNWOu", "r8owgCoTWRKFW7PRswO", "W6ldICkSWPxdPG8ObSkRuq", "aSk6W77cLvBdSW", "w8kIFapdP3eOx3eg", "FYjYWOFdSa", "iCo8yNCz", "W7JcRwW7kq", "W6xdUKqQW7u", "zeNcQCkriW", "i31pW6HC", "wKjyomkZ", "xGNdP2u5", "ySk+yWhdRG", "ACkKWOZcNmkb", "WOxcLbLlW6rDc8otWQ7dHq", "nSkdfN1sWR1ZW5C/qq", "WRJdL8oeW6brWOi", "eMiQeCkiW44nW7S", "WQhdUSoAexvJACoW", "hKL5eenFWRhdMJhcKG", "xCo+WO3cMCoC", "qZrWWQlcLSk+ECkvWONcOq", "h8oBeXXO", "ubjcWOddLq", "W6xdJwyeW5Skmr8", "bbOLaq", "WQ01W5epW5O", "WQTHWP/cGmkdWO3cTq", "vcfHWQ3dNSkU", "tYTxWQbiWRZcLtVcRq", "W7mhWPpcRYi", "hCoCpuBdGCkWW5zzW5u", "lwLLfSkk", "WRWSW6GQW4u", "WQJdGmk5WOBcRaPSeCkHtq", "WQ4WW6GNWRi", "WOBdQrFdLmoJ", "W68wWP1cWOFdUXFdT8kwdq", "W6/cOg0aiCk1WOldGmomfG", "WQqGWRPUWOC", "eCk4W5JcVu8", "WOlcHgWP", "W6FdM2SmW7e", "gCkmqCk3W7bqW6TOqwS", "W5S6wCo2W6e", "WPNdU8kIWOxdIW", "W5WbWPZcQqu", "pmo2pZzc", "vdxdRva", "fCkffSo7WQS", "jmkMW5tcKN8", "dmkYD8oojq", "WQKMW7CRWQK", "DSoYWQhcRa", "adldSf0qW41QA3FcHW", "WRZdM8oeW7C", "WRZdI8ouW4ztWOC5mG", "qsDvWQD+", "W7i+F8owW48", "BxBcImkaWQWw", "W5xdRSkZWOuLWOVdTSkmCb0", "yCoKzxyeWO9uW7VdQW", "j8o8fbnx", "pmkfehjbWRK", "msdcMLBcLq", "W4GoWPZcRIG", "W6FdNmovW6LAWOu+jmkf", "WPO5WOvcWRpcI2qaWOddMW", "W47cOfihpq", "fmooyM4z", "keHCW6TnW7jr", "DCo6W59LW7NdI8kTb3xdKq", "jConW4VdSSoeuCkmDM3dHa", "fmknlSkuWPxdJeigWPZcRa", "oMX7eCku", "dH0bjsW", "WORcGNuQWOu", "l8oAWOpdQSoW", "WRyNW5KsWOG", "sdfXWQJcM8k1CSkxWP3cOq", "W4VcP195kG", "mmkruCofWOS", "hmoIadS", "W4aADSou", "at0ngX8", "qCotlJLOEmkFoSkoW4G", "pmkHcCogWRO", "W4ddMfK3W4u", "ntiZid4", "W7SVWPZcNIa", "W7pcRvO7g1ldNq", "WOFdKL1fWOC", "WOBcKh0TWRi", "AXqBWRiAWQHzWRDfvsJcIa", "FsDJWO/dRa", "mYBdLmohW6ToC8k1nx0", "WPeCW58uW7a", "mSkpehrnWR1Z", "W7PVWO7cJSkxWP7cSCkcCmof", "W5Wbv8oxW6hcKSkGiciv", "W6xdIColW77dUq", "p8olWOpdRW", "WR7dG8orW7zm", "WPibW4usWOG2DKNdUHG", "WP4YW4qpWOpcIMGcWQBdMa", "WRRcU1ClWPm", "x8kymG", "BNxcP8kcba", "WO3cRaXFW5m", "xM5NFc4", "uYddK0S2", "W4ldK8kwW68J", "DmkHWRFcTCkd", "W7WeWP3cNKFdI8oEvSk+WPO", "aCkPW5NcKuG", "W6ZdMhadW6G", "WRtdOCo9fW", "cmoZENW1", "cvpcIHvmfGPa", "b8oglti", "WOZdUrr/tbdcLgL6WQy", "WQPOWOBcJ8kh", "h2LKaLW", "qNHGfSkpWPWDW6noAG", "fCkqhSoV", "WRGrWRLxWQq", "tq0Gua8xW4pcJhpdHG", "EuqwWQ4J", "ig5/lgi", "WRldSmo9", "BSk7m8k5WQW", "ASoneJeuW60VW5uSsW", "cKdcKWy", "emkVW7ZcLfNdO8kj", "ugrGbmkiWPeoW6zdCa", "W7hdVeOkWOzvW7FdK8ovW7i", "imoSj1RcQYPStHvk", "n8o5WOJdJ8k9l8kAWOBcUmo1", "WPxdH1HxWRunqW", "eg5I", "iNRcImkbWRCmpSk4AYu", "cSoZlszj", "b8osqN0B", "WOdcGwWgWPu", "C3BcLSklWRKDnG", "WPldLZtdPa", "W5lcH1mAmq", "WQPSWOBcNmksWOFcVSkrrmoE", "Cmo9W59HWQy", "WPmjWPTGWQu", "WPfvWQ3cMSkh", "lmo0i23dGa", "j8otb2JdTG", "W7ddOeCsW58", "WQldJSk/WOldQG", "k1f/fCkR", "W5xdRSkVW5C", "F8kTFGpdPty8f0u", "W7VdVmo9agPyAmoG", "kKraW65eWRfnWRHMyq", "g8oxocO", "cmkJBCogaa", "W6JcMNegcW", "gv/cKmkdhwvImrNdIG", "WQlcRbLPW5GaWRhcGa", "W57dGcWjW6i4c8okWRZdJW", "fCoNhqvu", "ymkzWPVcQ8kbdG", "WQS/W5ucW5FcQJ4", "B8kyW5RcO8kXdYBcH1jY", "W67cGCk+WPxdOLmNbSkJvG", "ihP2b0K", "a8oDeWXS", "WOrAW5NdJvdcKmkFcmoMW4q", "WP7dUCkCWQJdQa", "k1vkW4LR", "o8oepH19", "nmkXWRddGmkW", "cmo1kIPk", "vxOXWO05", "A8kYWOxdNCkQACkoWPRcVSoW", "WRqKWQjcWRS", "hmoZfXHukmoG", "cdSvpt0", "i0b9W4jU", "rmo3W6fxWPK", "WQBcPr9pW5a", "WQhcOrnoW7SuWRBcN8kDWRu", "omkdcmomWQC", "vYb3WQS", "cmkmo8oMWPi", "WPtcT8oTWPX1WPBdUCoYDrq", "dxTMiSkp", "k8kExM9tWRfWWPrZba", "W6VcUM1piCkYWQRcMCoafq", "W7xcH3CzmW", "a8knWRVdP8kN", "hCo4bcm", "pComWPVdPSo2zxxdKrO", "nev1eG", "cKJcQXPu", "WPddQLn0W5O", "W7pdJCovW6LwW4S9m8kaqW", "W5K6sSoPW5e", "W4/dMCosW6JdI8kKbCon", "ySk5EqO", "Dv8eWOqR", "uCk/WQJcI8kY", "wSoKcdr8WPFcR8kbW5eX", "CSo6W4DO", "W4JdMKuBW50", "jZuzkX4", "WOJdG0LhW60", "W5JcOwmDia", "mCkZkq", "W5XLWOnbWPBcJcGfWRhdNq", "WPFdHmonW6ZdHSkKhmkds1e", "WPRdICkCWOJdIq", "W5OpWO3cQJpdPCoYsSk5WOy", "W77dO3Ppmmk1WPRcNmoafW", "A1hcLmksgwrRjG", "j8oLmqddPgOOgKDD", "Dgi1WPGC", "W43cVL0PhuxdHG", "duJcKq92", "WRddJSocW7WsWPe4imkreq", "uSkxnCksWO0", "bM1Kkue", "b8o+bcDPWPdcTColW6K/", "bmk5xSohWP4", "WPigW4SqWRLLprtcUX8", "WRFdN09ZWPm", "WOldKSoTWOTWWOlcMmo5BXe", "W6iBtSoGW5C", "pfP6hmkZ", "hSkkahvj", "WPtdUCo2WPz5WOBdTmoSDX0", "mSkXxa", "WQRcPq1gW5eIWQpcGCkmWP4", "oeHkW6HEW7r1WR1S", "aCkhE8o5WPS", "W4NcRuyRfftdHW", "h8k6zmoAWPS", "z8kiWOBcSq", "imoZprL+", "uWddKK4A", "pCoWWRZdSSol", "tI7dTviA", "CSozjmk5W6hdNCoOpdxcMW", "dCkHW6/cPuK", "WQ/dGgStW5SkAb7cU0q", "EMLng8kxWPDOW5Lniq", "n8oxjGLO", "FCk7dCkjWR8", "aSk6v8o1eW", "WOldLMLLW6W", "vCkCj8kpWOBdHxmhWPu", "DSkCFbBdMa", "kSo9C3W", "W4BdISon", "W6SdWO/cMXe", "W5xcTJOWWPNdMSo5W43cOW8", "WOxdMCoyW7VdISkLbSkouve", "eCkLW7VcNLW", "fSoJeKhdPW", "abS0bsC", "W4NdVLWiW6K", "W5uEWPtcKW", "dSofw18t", "mComWQNdL8oh", "WRu1W4qk", "dSomWPFdRCon", "cSoCna", "sgrNFstcHG", "W4y9yCoaW4m", "Amonxc0wW7WSW4q5ra", "AfVcIW", "BhRcKCkEWP0", "wx7cHCkDWPe", "EmkcWPa", "gcyIbsG", "WPKvW6q4WQa", "A35nh8kvWPe", "xCoEWOBcL8o4", "W7hdGwyiW5rlpbVcVfa", "ArddMu87", "cN/cO8k2nuDpfxJdOq", "sWxdI1qW", "amkIW6/cGNNdOW", "WOG5WOjRWOG", "W4KAW4pdKeJdKCoiuSo5WOu", "WOlcKgSPW7Ckb8ozWRNdJW", "bmkFFmoMWPS", "cSoanrDT", "WRNdSmoNaNnI", "CCo0WRtcS8owWO3cGrRdJ8kt", "zSo9fSknCfxcRCklW5VcSq", "rmk1o8ktWRW", "c35xm8kX", "W4NcIwpcS8kIW6ZdHvz4jq", "WRFdHL5nWPO", "rGlcTN7cOvWWBJ12", "W4CbW54CWOG0kXNcTbG", "gbSKgGS", "ssfmWQ4", "obu3oca", "WPFdG8o/W71T", "gmozWR7dJ8ow", "W40lWOVcMGNdKSom", "W5edWPFcLa", "W5ZdUmo7W7tdLCkkm8oICKG", "DbrDWOja", "W5JdJSotW7W", "nSkYWOVdGmkLiSksWPRcO8kT", "gSo7ms1a", "c8kbWQldMCkl", "aCkLW6RcIq", "WPhcNNiXWRSltSkE", "g8otgdnG", "WPddSmorahe", "e3dcJsPC", "CSkuWQFcLmkN", "WQ/dTCovW7jL", "u8ogsCogW6yiWRSYEZ8", "BmkkW5ZcSCkKbYBcL197", "imkgDSowWRq", "ygKRWPOt", "iCovnCo9WRlcNCohzvBdHq", "WQldSuj7WPK", "WRddKxfSWPS", "uwm6WPCX", "cCkSbLn/", "W5FcHeWBeW", "oCosWORdOa", "W5ZcOvyRhG", "gCoBjsK", "xYNdPv8vWO9MFW", "B3FcI8kUWOS", "gquBdaG", "amkLW6dcHf3dUCkC", "hCoLpZj4WP3cOG", "t29/lCkt", "WQFdJ1fiWPy", "W6hdI8ozW7mFWOuMimksqa", "c8o5vviF", "aSo/ogRdUa", "ucjPWQBdQG", "WO3dP3LPW4u", "aCoScbv7", "rxv3oCkx", "W5SjWR7cNJa", "bSkNW5hcGeRdVSklWRy", "zgLqfa", "jCoOavldKa", "qCk1m8kyWRe", "WQVdT2rLW4e", "WPRdMCkeWQZdRq", "wYtdTgKQWQ5AyNxcMW", "W6/dRNbAj8k3WRdcGCoefG", "uGXFWOP3", "rIiWWPuOW5zUrvdcNq", "aqeMu2PZhhNdTmoq", "jSo/pZXr", "WRq+WR9HWPC", "gmo6f1Lom8oNW4iD", "neKwW7vlW7nvW7e4kG", "W5NdJmoC", "qCktnmkMWRu", "m8kmDSowWR/cJSotDW", "WRHJWOO", "WPGoW50VW44", "WPWxW5O", "W6dcOrnmW5StWQ/cKSklWQG", "c0tcIaXLgG", "CmoWW59XW7tdLCkNg3/dLW", "W5alWO3cNa8", "oMnEiSki", "DMrzDd4", "W6dcVhnSoG", "W6VcN3faka", "W5ZcNf0zmq", "dGqRksC", "DmoQWRZcVCoy", "A01lamkV", "tZrQW67dImk9Amks", "mwBcLrLw", "WQ45W443W4y", "WQldVmoNa2G3n8kXWPGt", "WRKEW6yFWQC", "gwLaduC", "WQRcOrnnW4m", "aCoRlbLB", "BxRcJSkgWRztyG", "dColBN5WCmoFlSkcW5C", "W5/dOCovW5xdMW", "nmoLWPJdJSov", "WR0IW4GAWRq", "o8opWPVdLSoqDvNdJHe/", "fNv6AZ7dN3yqW6vd", "WPFdV8ogb0O", "WOdcMc1eW7m", "eCocpqDn", "EmomWPtcHmoQ", "eL5jnCkJ", "mCk1WOJdG8kS", "eIjKW4f6WO0IdXxdNa", "gcy2pGe", "vdbWWRBdI8kkDCkcWP/cGq", "WOiCW4W/WQC", "jCo/nsvV", "WRddGhXOWQO", "s3f0FY/cONqBW69E", "wWBdKuSl", "cKNcIHq", "WORdSmo/agL+Da", "f8kLW5VcGeJdSSkAWPdcIsi", "WOtdPwXxW6a", "j8oDW57dQmovs8knBMFdLa", "lmkfhMS", "WQxdLCkOWORdSG", "WPFdQCkYW4GXW5RcSCoSm0e", "W5FcVe0ChW", "aCkSW7/cNfa", "WRlcMIPuWPjzCvBdOWm", "q1b7e1SxWOhdLsRcLG", "kSoAdZD4", "fe/cOqj1", "lmk8W4nLWQBdGSkJwgJdGG", "q0f6b0rBW5/dNYRcLq", "dezGW6b1", "DeryW6jbW4nBWQ4", "WPCmWPbDWPy", "WPJcHCosW6RdImoKqmktdqa", "WRBcOwLAk8k1WOhdJ8otgG", "uqC1cw1HehRdOSoN", "DcXbWQfl", "aSoypcTU", "WPtdGvHh", "W6ldKCkIWPtdTunNdCkMwW", "scddUa", "WPBdVMflW5O", "bmohieS", "hqVdGSodqZ44DfRcHa", "W6qMWPZcHCkpWP7cVmktomop", "urSZgIr4fZ/dO8oe", "amoCbrPT", "WOXEWOdcJSkO", "o8oxjGPu", "dSkbdCoIWRfdW6nSva", "WOGYWRP6WQq", "WP0wW6axW5W", "daa3ha", "uwC2WPCXW5zUqMBcHa", "r8oWW6HTWPu", "WR4/W5e", "fIK2WR/cImkGkmkBW5G", "WRFcOa8oW4aoWRBcKSku", "mCoXDMSrWO4", "W5NdGSohW5NdJa", "oSkVj8o/WOy", "kmoyWOBdPmoJu2y", "W7xdH0yoW4SonZNcS0q", "WRBdUCoGbMW", "DdXNWONdSW", "emoYB3C7", "pXFcMLdcIG", "W5BcLbLbW64", "gSkHoCoOWP4", "pmoXcxm", "o8kmbx0lWQ94WPLKhG", "WQtdLCkGWOS", "lWbyW6jbW6fyWRH8yW", "z25WyrNcHMC", "FSk8tHpdUa", "emosEfC/", "BHnjWORdOq", "EMnD", "uqCZdYm3ehVcQmkc", "W5ddI0ChW64", "W7FdIwy", "DdbSWR1y", "v3CNWPe0W50", "xY7dRrmiWOqM", "dt/cVxRcJW", "j8o+dqPM", "W4xdUN8uW7e", "jSkNWOBdGG", "CW/dP1O0", "vCkgwZtdOW", "F8kkaW", "WPhdHbFdP8oU", "AhjBhSkb", "WOldH3vwWQiruSonW7pdQq", "feZcSXnC", "aSocjtj3DSozmCojW5i", "dqxcG1FcOq", "rZfnWRC", "WPRcPvOOfvldMsu4W7G", "WPCxW4aAWPj8", "kSo1Etrd", "lIdcTxRcLG", "WRNdU8kHWR3dIa", "a8oFoZTC", "scruWQa", "W4RdLYxdTSoIWORcKXy", "WPNdMejkWR8nra", "DSkiWOJcV8kU", "W5VcRvriea", "fxjeee0", "uxzhFsVcLMW", "sg0FWQa3", "WQhcRrTfW4yeWOpcL8kC", "lCoflJrx", "aatcP23cTWHRBczG", "rsLUWRb+", "z8k/BW7cRcy", "dK96fePuWOy", "W5e4F8oDW5q", "nmk1vmoqmqpdVW", "WP0OWP5gWOBcHG", "W63cQ21RlSk/WOlcISoldW", "W6NcGCkcWQhdHW", "ccfyWRfBW5NcQrFcK8oT", "bmoUWQpdJSoo", "hSoIlIzi", "WO9vWRJcOCkl", "W6CaFmotW7/cHCoUtcWw", "W6ddNgTmW4WzkH7cP1W", "mmolgvldGG", "WOddHeLoW5G", "W7BdPCoGcw5IzSo5W5ru", "jmoIp1RdKtPJqqLi", "lSk/FaxcQ24LgKiL", "cayIacD2f3JcTCoK", "bJK6Exq", "ESoNWQhcVCoB", "wLr2wx83sYJcOSkf", "b8oeo3xdIW", "mCoKE3ag", "qwC6WOqQW5b1uxBcHa", "W4NdJSorWRxdJmkKhmoxxfK", "W4OBqCo9W5a", "vJbxWQZdQa", "tYuIqmobWO1jWQmDkW", "mConWP3cQCkfd8ooC3FcLa", "WO/dRGBdOmog", "zwnad8kl", "gCkbpgTE", "iCkaFCoI", "ssCHrCkTWOrqWROwnq", "WOldLIe", "nYVdHSokW6LlySo5nx4", "gCo/kXDi", "WRtdTCoJW415", "W4O2t8owW50", "kKtcKXjx", "f0xcHa", "c1v6a1TtWP3dLq", "l0DTnKu", "WRdcVbXnW5eXWQpcL8kCWQG", "F0bb", "jSkUWOxdNCk7n8kj", "b8ogiuRdNCkFW6TYW6a", "WQqBW4aEWPrXjrdcUX8", "WPyqW4iZWQi", "WPBcHZXVW50", "lmkSWOtdI8kSdmkPWRNcMW", "jmkqWOZdLSkl", "W5JcQfanfKhdHZC", "W6JdUmoRW4NdPSkim8oeDfy", "fwr+", "WPu/WO9cWQ/cJxaFWQhdKq", "vZrQW70", "dxNdJa1lW4m9nJRdHq", "WPGDW6CSW7K", "BYj8WRldIa", "WPJdHwbYWOm", "W6ZcR1rdfq", "WRdcVa9dW5Og", "W4ldHCouW6W", "amo3aWK", "tJTNWRhdNSkXECkjWPW", "W4CwW4ClW4z3jbtcPHG", "W5JcG3ajda", "ECo+W4PGWRhdL8kqgM8", "bWmhnZW", "sMVcO8kVoa", "WOVdMdC", "gcGMogFdGsflWQSA", "WP7dQ3TOWRi", "umk2WR/cJaJdQ8oCWQ/dMG", "v1BcRCkwpa", "W5SgDmop", "wW7dO1C2", "WOBdTg9HW53cLSkCW5lcPqm", "qZbOWQRdLSk1AmkcWPO", "emoZat50WPdcR8ojW48", "b2zCevK", "hSoWeHbZ", "WOldVwjnWPy", "cmoxnbTVFmoFo8kjW48", "WRqFW5uTW4i", "WRJdHmk1WPm", "WOWIW6yXWRW", "WRhdTCoIW6r1", "W7xdMdboWPmCmG3dVea", "dezCe0e", "A8kLWPlcTmkM", "WQ3dJSk3WPpdJq", "oIyjiZC", "smoLgZa5WO7cSSoiW4K4", "kSkQkZybWPbDWRy", "qg98g8k3", "dmkOW5JcINu", "W6eRySolW5i", "qX42aYf2etldPCox", "W5/dMCouW7/dImkUaa", "dX0W", "W4qFWPpcUGu", "abu3dsu", "b8ognK3dLSkk", "y8oVWRRcSmkjWONcHXddJSks", "ptZcH8oz", "W4/dGNGSW74", "W4ldJgSPW7q", "jX7cThBcRub4Bd5N", "W5pdV8kV", "WRtdNmkCWQvxWOC4imkreW", "mMrnW4P2", "eJZcGfNcKG", "gvnJcIXJgdldT8oa", "WRO7W4Kc", "ECoAW6znWQi", "WPddMYNdPW", "xSk2fCkzWPC", "gmo2fHX3", "WPldQaddPCok", "WPBcNH5LW7y", "FmkjqcpdVq", "tdXCqSopWO5pWQmBuq", "W4KcWPZcNGm", "pSo8WRBdICoO", "WOm3W6y/W6y", "W5ldOmkSW6CG", "a8oMf23dLq", "zNBcKG", "zmkRWRtcSSk+", "hbJdRJ/dSaj0yxf/", "EwPzxGG", "FSkJBq", "nNTyfCk5", "BwZcMSkDiq", "iCkKwmo6WRu", "WPtdUCkiWP/dLW", "qSoozL/cHmkeWRe", "ucrv", "wmkiWP3cPmkjhCojlZVdMa", "eCkHW53cN34", "mCkvBSo4ka", "WPe2W743WPu", "swXWe8kZ", "WOZdT0vtW4i", "pSkzbw4", "W6FdISkqW6yj", "emk8W6NdJG", "WOddV0zoWQi", "W6BdVSknW6GB", "WORdON9RWONdNCk0W5FcRG", "z8o6W6HnWRO", "WPRcK8oNWRRcKCo3xCotxeq", "WRVdSCkZrJC6n8oQW5Ow", "W5WoWP3cVaVdH8omvG", "C8oPWRBcQ8oEWORcGbZdRSkA", "WOBdOxL8WQqftCojW7FcPG", "WRvEWOhcNCkX", "ANdcHCkrpG", "g2PZhW", "W4KyWPhcUX8", "W4RdJ8ozW5VdG8kQaCoq", "umk9arrmyG", "WQhdGx4eW5e0mrlcP1O", "WORcHhuIWPa", "zmo2WRNcT8oh", "pCoAWP/dR8o9", "WQxdJ8kJWOldSYzrl8ko", "ratdGxSzW4bLwexcLG", "e8oMfuddSG", "ECo6W4uPW6y", "oSo7WOldRSoT", "W7xdJxiv", "W5u5WPdcUt4", "WPdcTvS1WQ8", "WRmDW7qfW4e", "WOKNWOHTWOK", "rCoTWOxcTSoy", "W7a/uCooW5W", "z2ZcG8keaq", "WRddOSolcN83jCkNW5Lw", "W5VdISopW73dGCk/", "WOxcQf04wKpdMcu4W6i", "o8kciN9uWRnXWPK", "pKXyW6ybW7vDWQPRAq", "otespc8", "b8kYrCoLfG", "F8kiW5BdTCoktCknFMxdLa", "CmoVW4m6W6JcISkXa3/cJG", "W4hcRuiicG", "WPxcUtjKW7G", "et/cGfdcGq", "W7NdMxalW5q", "W7xcUvmOea", "WQ7dGe1OW40", "W55RWOTdWOtdNIC", "svFcHCkztMvRoK3dJa", "EmoVWRBcMmoJ", "zSoIemkEBLZdQSokWOldRa", "evxcKrnGrufsWOhdVW", "W7BdImk6W5y0", "W4uQt8o2W54", "a8oxk0BdMa", "aSk+W7RcGG", "uw11eSkfW49rW79aAG", "gSoIgdW5WPtcVSocW5KX", "derWi0nBWOhdIa", "WQhcMcPqWOXyzuRdSGC", "f8kTWP0", "W5NdISoeW4u", "Bc9nWQTp", "WPRcKh0OWQrjbmkZWPxcNa", "WRFcPW9RW5Gn", "W6ZcR31ldCkVWPS", "keHnW6nv", "WP8QWOrmWPxcJW", "DMOLWPe2W5zRu1hdKq", "W5pdVfm3W7m", "CfZcO8krba", "W5SED8orW6i", "zSkAf8kWWRy", "jSkaWR7dRCkK", "W6lcR3CdCa", "u8kfdCoKWRTrW6eNwwS", "gmopWO7dJSox", "WPpcHwSZ", "ewr8", "ggj+eW", "W6BdMCoeW43dRq", "zbfmWOVdNW", "q8odW6ncWPK", "WPXiWQRcOCkNWQdcHa", "rcPwWQLFWPxcRW", "W5nkWORcLGRdLSoAsCkJWP0", "WPpdHCodW7bi", "CmoVW592", "twxcI8kYWQi", "WQ/dPM5wWPW", "eeJcIWrK", "WRWEW6GcW78", "nmooWQldI8op", "m8oHDNCgWO9oW7e", "WP3dTSkiWRxdLtDqk8knCG", "WPJdUCkxWQpdHW", "bapcMgxcKG", "qI1HWQa", "A8kGvSotnbxdSq", "bI4opdC", "WO7dT8oHW595", "ECoaWQFcUCok", "WPBcLhmOWROhtSkEWOy", "nSk0D8oKaa", "WQ1RWQZcMCkqWPZcTCkyDSos", "WRHYWO7cN8kbWPZcUCkgyCkr", "W47dK8oyW7S", "h8kkD8oLoW", "yCoNWRK", "CCoNWRhcU8o6WOe", "nmkFs8oBpa", "iCk7WPG2W7tcLmoWrtJcGq", "WP9PWONcGmkK", "WP0RW60iWQG", "gCo6gdyQWRFcSCo1W6us", "W5efWP4", "bmkTESoAWOu", "e8k0WP3dH8ks", "x8kmWPFcQ8kkbCoC", "m013oCkV", "E8kKAWZcPIO", "W6hcIvfliW", "WOJcKYhdOCoMWRVcMq", "q0LGbuixWOhdKJNcGW", "vMONWP0X", "WP02W6aBWOK", "p8oXW55PWRJdHmkQwgJdGG", "tuflp8kk", "nCoWrg0d", "W5ZcOveGdG", "nSkjzSo0WQdcISou", "yCkiWO7cQCkfh8oy", "WQFdOh1tWRq", "gbhcOxJcQKy3", "vcvOWQRdJW", "W6VcQN1TlSk7WPZcNa", "BhtcICkjWP8", "W5JcQfaldexdMJahW7G", "mMCzg8kjWPbSWOzana", "WOldS2fVW6i", "n1Hzemk5", "emkekSoEWPG", "sctdSW", "ugb1bCkaW5iuW65bFG", "W5hdQmkVW5W", "W4BdKSo0W7ZdJG", "WOtdJuzpWReauG", "uCkid8ksWQa", "WRNcUIXgW6m", "sc7dK0GmWOrNya", "rSkbemo7W6uuWRf4rgK", "lCocWQ3dQmo9", "x2CCWRiv", "aLf/bxK", "h0JcIWC", "AXDpWOPY", "tZr3WOZdJmkYtmkvWOFcPq", "AdLhWO/dIG", "ySk6FNCuWOKxW7/dSmoh", "bgq1CdJcL3ncWQW", "aX/cVq", "WRFcIcDwWO5yzu/dPXC", "imkiW63cTwK", "dSklWQ/dPSkB", "gCoyixBdQq", "su53EX4", "EmkJyWW", "W6pdVCktW7ii", "xSozkCkbWOBdGujdWPNcUW", "swNcPSkYaW", "WRtcRXfRW4q", "WPhdO2r0", "fmkZW77cU1u", "guvSfa", "nCo4WOldRSoc", "v0xcHbDYuGOuW4pcUG", "WQ3dJSocW6brWPi5", "t25RcCkV", "WQxdLXFdHmoN", "tSkYa8kuWOW", "zLlcICkLWQG", "keBcQrLX", "n8kWW6BcS0G", "W6hcOxC", "isuBaIu", "uvhcLSkwga", "WOFcUHDFW7G", "WRBdRSogW51v", "pfHcW6ryW7HBWRC", "WPhcIqX6W6a", "rZfnWRDtWPBcTalcHmo5", "W4RdJf9vW7aaw8ocW6pdOW", "hmkmcmoiWQW", "j8kgEmosWRG", "wKzcEYa", "bbOZgZK", "u8oDmcPQDSoCFSkrW5O", "gmkkn8khW5pcGeqkWPtcUq", "W7xdKSk5W5mg", "WP0Vk8kwWQtdGSo+u21u", "WQtcS1atWQbECCk8WPpcKq", "WORdON9RWONcMSk3W47cTrO", "WRlcIcDvWO9lD0ldSLq", "e8o+wfOX", "W6OFDSoWW6e", "W4RcVfGNdG", "nKfhgCkq", "WQlcVbukW5bCW6dcVSojW7G", "WPhcNx4YWQq", "ySozW652WOi", "ogz2g8kN", "y8oJWQ3cQG", "FXjSWRVdKG", "jmkoW4tcT2S", "W68LsSoDW4m", "nCoCi2RdUW", "W6iHtmorW4C", "W7JcVMPPaa", "WPhcQIrRW4ZcGCk4W5dcQG8", "mmk4WO/dRmk8", "xNBcKmkcWRykia", "ymkiWPlcOmkhcmospa", "faqHiWC", "nCoAoeRdSSk5W4nvW5JdGq", "qCklaSkrWOq", "gcGNigRdNYnpWQSA", "WPldIujcW70txSopW7NdUa", "W7NcPmk/sZiYs8kMW4Li", "amo5gtz1", "WPK/WO4", "m8ooWPRdQa", "vCobjtjMESogo8kd", "qXyIgIXKvh3dUSoD", "r8oYW5HOWOi", "ACoHWP7dGCkQjCkrW5NcV8oH", "pCkQy8oAWOy", "yITjcmksWPzO", "WOxdPSoLle0", "vcbuWQPmWPe", "gSkqc8oEWOTNW45RwwS", "W58pWPxdKGtdICoruCk2WPS", "uCkcWOBdUmodtmkDFNxdKq", "i8kRWOtdIG", "W5JdQSoxW57dMa", "WOVcM8kDWQJcG8o6uSkAeqi", "WO4nWPX+WOC", "WQi/W6OyWOa", "W6xdLmk7stuQn8k3W4Lk", "BmoKzxywWPnrWQxdTSol", "fmkjkmkmWP3dIfmnW5ZdVW", "nSkVEaFdQMWP", "W5m4WPXiW47dN3ycWQldMG", "csDHWQddNSkYAmokWOtcTa", "WQNdGmoxW6jtWOmjlCkaqa", "psHwcmkCW5O/WPSCzq", "W4VcQvG", "W6ulCG", "mCkJWPldVmk/mmky", "f3ekW6uxW4hdTvBdK8k7", "t1RcOmkyoW", "rehdQ1ddTr52c2u5", "fCogj0ldKmkqW4DIW7ZdGW", "DSkPAq3dR30", "W5hdU8k4W40", "cvXUW5D4", "eSkrcSoGW79nW6r6whO", "x8osWOBcRSoc", "D8oDW5fYWRe", "hSovgwFdKq", "W6FdGwqf", "dCozcLhdKq", "W5WKC8o1W6i", "dCkme2K", "oSoGnrvc", "WPSmW6qhW6ZcKhdcVmowfG", "hbCtaq4", "lgrHW41o", "b8oKdG", "hrNcQxlcOG", "gmkvb3nQ", "zSoqmSk4W6ldL8kzjfVcMq", "WOldJu5x", "nfXgmmky", "WPpdJeLvW44", "WOVdTCofW7ju", "vCkClCoDW5y", "WRukWQ1DWRC", "W4JcVxuOma", "Fw0PWR0I", "WRldUIldVCoe", "mCo/WPyMWPNcLmo3wYZcGq", "ygDuhW", "Cmkytc3dQq", "W6NdISouW5ZdPq", "W7VdSCoOewyNzCoYWOSh", "cCoBlJO", "jCkjqCooeq", "iCofFx0q", "Ev3cGSkGWPy", "qrtdHvCKr1HDW5pdVa", "WQ/dG28vW5KzjbtcTvy", "W4FdKCoiW4RdLW", "CqddMh0R", "W4ZcVfjScW", "WOdcLgW0WRSAsq", "WQGBW403WQ4", "WRldLIxdV8oI", "dMxcRGTD", "acxdQuPEWO5LzMxcHW", "sYbDWQXBW5dcTr7cLmoN", "umkVbSkiWQe", "WRFdU8ofW4Hi", "WQVdT8kmWRFdKa", "WRpdK31dW4W", "n8oGWOpdR8o3", "fryMlqC", "o8kCD8o4WQa", "pI8EwSkiWOf/W4rhma", "yX9pWPRdOW", "t8kwoCkNWOC", "WR/dGCoGW7j1", "W6ddRmosW5ddVa", "W4LgWPTDW4SGCvxdUf8", "uSkdWO7cJmkS", "WQRdOhbajmk1W4lcMmoxeG", "WPvmkCkmWRtdL8k6bIOb", "jSkrz8o8WRZcN8omBXZdHa", "i8oKz3WCWOi", "WQVdTxboW58", "WPxcPgOVWO8", "f0ldKSklqhO9kaG", "F8k8BW7dV3CNebSo", "eCoQnNRdMW", "m1BcTaDx", "zSkPCHy", "ktK6aIy", "iepcGqbx", "c8kxgv9w", "lmk0bCohWPK", "ffP4pSkU", "n1JcScbs", "DxBcNSkt", "wSoyjK7dN8kzW6O5W6NdNW", "DXKFWRCmWRWfW6e9jG", "q8kcWQtcKmkO", "eSobdIvH", "tWXkWQ9m", "WQ/dMgusW4HgjXxcTK4", "W5ePt8o+W58", "cmoxna", "WO0tW4i", "qSo2baLBCCo7W4idWPW", "W7xdJhKaW7e", "hudcKqi+daSrW5xcSG", "WRBdUSoNewjKCW", "eg9GW65N", "W44BvCoWW5u", "n8oafbHr", "WPNcRCoPWOvSWOldRCo2yru", "W5RcMvPubG", "WQ7cNIrGW5S", "W4tdU8kPW4aVW4lcPW", "WOxcLrfkWQqgwSo8W7ldTq", "mhjgimk2", "W54yWPZcMGK", "ECkRWOFdICo+j8krWPxcPmoZ", "W4/cN3yOcG", "qCkrfSo9W79hW6zRxN0", "q0VcJmkuag9HoG", "pHBcH3RcJW", "WOJdK8kNWPldJq", "ECoTWP7dNmoGEmosWOdcTCoV", "WPVdV8owW6jT", "WRhcRq1gW5ucWQC", "WQ/dGmo9W6z+", "W7ldMgyiW4G", "W5ZcMx4ZWRap", "nSk7WQddQmkA", "mSott3W2", "d8k6vSoMbG", "WQZdIsNdOSo8", "nmkoWONdG8k0", "k8kID8o1ha", "l8oUEqVdPMGGgHGd", "WQNdJLHyW78", "wGFdUKOB", "fmkOWRldJmkg", "WOpdVCotcwe", "m8o5aNtdHq", "kCkTWONdJ8kYf8kjWPVcPCoH", "W4CAWPPDWOv4kqBcPLy", "uY/dPu8xWOW", "zCkBWRZcK8kE", "yZb3WQBdLSk+ECkv", "bHST", "W7ldJwStW58d", "zCoJWRJcSCofWOO", "WOhcOdPGW7G", "A2jIDHa", "WRSZW4Sk", "i8kDC8o7WQFcHSouFq", "nSo1jcz6", "ymkJCbJdRa", "bmoBfWDx", "c8kXzCo7WQi", "rmkjlCkjWOa", "uSkxnq", "W5JcPhHLW4RcLSk3W4RdRqi", "uInWWPf4", "dbhcP3ZcT1CW", "cSoGWQNdR8oP", "W6ddNx4jW5mz", "iCkkfSkkd1BdNSoKWRpdGW", "W4ZcRx5/bG", "W5SlWP3cMI7dIa", "WP3cGMTSWRSpwmkEWPJdKW", "hSkue8oNWR1fW6LH", "F3BcLCk/ia", "FuNcLCk5aa", "WOtdJvO", "cNKHzhZcJIqdWRTl", "fSoMbJf7", "cCo1zwW0", "wM4HWP1YWPa", "WPRdUCkWWOGJW4lcUSoTB0W", "WRu/W5iFW6m", "rKCOwCouWOvsWR4znW", "WOBdKSkhWOZdGG", "iConW5pdTmovrCkDy2tdLG", "lCkUW4FcUKG", "hCoRWQ7dKmoryfVdTtr/", "d8kVW6dcL0ZdVW", "mCkhyCoH", "WROOW4apW4lcRb7cQSohta", "WR/dGCo9cgy", "W6tdQmk0W4e0W53dTmkOl00", "WQxcVaXWW5S", "kmo2BuOA", "rmknjmkoWPhdKG", "WOGxW4iyWOvGjWC", "z8ooWQlcNmoh", "DmotWPRcICo0", "WQ3cVrbiW5et", "hSkXFCoSbW", "WRHWWPVcNG", "h0vKde5zWPC", "W44yWPO", "vZbCWRDdWQFcPbRcHmoP", "t8owFxXoiCkCA8oEWPC", "l8kmaM9sWRrVWPP0gG", "zmkvb8kgWO0", "DqFdJxuK", "W7FcTCoNbgPVoSk1", "dHJcGftcVG", "tWbPWQ9j", "mmklW6/cNxu", "W5a4wCo6W78", "WOZcQCo3WPrZW7RdPCo0BXa", "WP4zW5yhWQu", "bmolCSoaW4dcMajdW4ldUW", "DeLnW7nnWRXCWRH6yq", "vmkrimksWRFdJ1ygWRdcUG", "Bw5ztIC", "k05viKu", "lSopWPZdPSo2qhhdGZKJ", "Fxzve8kp", "WPldNxXPWOq", "W7ddJmkDW7Di", "CvyAWR1NWPS7qvZcLq", "WPpdQdRdPmox", "zmoWqmkbCI3cQmkAW5JcTa", "cCo7aHvoyCkXWPDbW4S", "eCkttmoBaa", "W55BWPlcIcBdR8o+ACkJWRm", "m8ofuMKw", "WReUW4Gc", "WR8cWOzwWR4", "FSo1n3eaWOnCWRxcOa", "WQBdVCoGfxDJACoW", "W47cHfj3gG", "WPtdRmkbWQpdRG1Wd8kNta", "WRJdPCo5W41t", "WPNdOqn7wHtcJx1RWRW", "WQNdGmo6W5zWWQG", "WR7dRCoGW6nu", "DCk6amk5WRxdOxmNW4JcTW", "vtvvWQXo", "WRVcIJ9cW5m", "W5NcQwvWW53cMSk2W5ddVG", "W5BcHqadW6fxf8koWQhcOq", "WQVdJSoC", "WOOwW4ZcG1tdMSkh", "rY9yWR0", "gunMdgq", "WQddHmkJWOddTqy", "WPCXW7WzW7W", "WQNdJ8k5", "mmkbxh5dWRb0", "b8oiiGP+", "WRVdSmo7", "i8kdEha1lCkEA8kVWO4", "tez6DcxcGdDFW71E", "emo5pJrRWPBcT8oa", "q1b2kmkV", "WRhdLSoQpg8", "WRhcV1G7WO4", "umokW5T9WPC", "mCoGzxaCWOe", "qJrNWQS", "WQW3W6alWQu", "WOtcGYX9W4i", "ugrM", "FSo8iZKrWOPBW7VdSCkt", "W4iixCoQW5K", "W5SlB8o5W6lcG8kGcIet", "mCk6W57cVwO", "WO3dMmofiwHPCSo6WPWi", "n8ketSo/gG", "l8kgW6ZcTL4", "WQddJCoin1q", "tmoBlJHSA8oFp8kuW5i", "W7ieWP7cLa7dLmkdcSk4WOi", "nCkLr8oFnrpdQq", "xKb3", "ALDVmSkJ", "l8ocWOBdS8o0x3RdGdW/", "WQ1RWQpcG8kvWOVcOSk1Dmoy", "g8oYotnW", "jmoyltD+", "thrmuaa", "WP7cHhP8W7ukx8kDWPxcIW", "qCkMya/dHa", "oSkjySoGWQddImkE", "vKldOYhdQ0e0iJ8P", "WQS4W6aEW7W", "EwTLuqi", "WOBdIurgWR4xra", "uCo8WQ7dGWNcP8oiW6VdM3e", "FJLfWQ3dNa", "jmkjFG", "WRRdRSk5WRBdMW", "hfNcKqz9gW", "nu3cKWvH", "W605WOdcRIe", "W7CQW4ODW4ldPdJcQComvq", "WP7dHd3dGmoo", "f8ogpfhcM8oAW7bXW63dMa", "fepcSarM", "FCkSWRJcLCkw", "DCo+W59LWRFdJCkha33dNG", "W5ldGmotW7xdGW", "W5GeWO0", "zmkfWQNcJmkG", "EHWBWQSEWQn3W6G9ka", "h3TGeSkpW5G", "eCoUgtj3WP0", "W7JcMh1+nG", "Bq0zWRaEWRegW64/jG", "cX0TcG", "dG0NqailW4dcI2pdIW", "cqdcO3JcQLy", "uYpdLKyZ", "fCkhWRddVCk4", "gfpcGGi+cWejW5hcVq", "WQtdPXWfW7u3WRtcQ8klWOq", "W67dOmorW4RdLG", "q1b7e1SxWPhdLc3cKG", "zCkRWPpcPmkc", "Cmk6FqJdKG", "c8k+W6pcNa", "nZafbqK", "uCkCjmke", "WP3dUgfqWPK", "W6mPF8opW6e", "cfHGbufE", "y8oNW7JcRSobWOdcIH3dGa", "hmk6bCobWRm", "yCoWqmoDjahcT8oFWPNdSa", "omohntTX", "WOHpWOKoWPn2zqhcUH8", "FCk/WONcTCkt", "ws/dTbeCWOjX", "WQ1HWPFcMa", "WPa+WO8sW5i", "WRaXW7CeW6a", "FSkmWORcPSkm", "WPuJWOTbW53cKgqgWRy", "kmoWfrDn", "bLhcJmkqh2L9", "W7Ocq8owW54", "C8oXWOZcN8oqW5JcRvhdJCk6", "WRxdJSoEWQGo", "BmoWDM0tW4TjW7ZdO8oA", "W63dMCkXsZiZk8kMW49i", "W5ZdM8o+W4RdUa", "qCkUtwqOW5NdQCkAWP1O", "mSkiymo3mq", "FCosWQdcK8oe", "W63cLuawmW", "vJldR1i", "B0hcL8kuWR8", "WR3cH3KrW50fEW", "ctbPWRpdJ8kLmCkeWONcPW", "WPpdPH7dOCob", "nh59fSkv", "imoCj3RdQG", "W5FdTCk1W5yUW5RcSq", "euFcQcDq", "WQ7dKSkSWQ/dGG", "wI/dUeGw", "WOBdM8osW6VdM8kIfSkEhW", "WRhcRrXoW40", "kSkWWOldGCk4", "WOBcNM0", "W4ldHuyvW4K", "svVcJmkqag4", "E8kOdCkMWPu", "WPurWRLNWRy", "aqeooGm", "xKyDWOei", "rhZcHCkMoG", "mSo1zxWCWPjj", "WQ/dQZ/dPSo2", "wdFdIxqi", "WQddGmkVWOldRq", "WOtdSLHHW53cLG", "W6RcLeq7pa", "oeLHW4HE", "WQpdH0byW7K", "W4tcRu1ccW", "WPRdSSk6W5CMW5C", "WQ1LWOBcGmofW5a", "lmolWP3dPSoQqMC", "zCoYW59OWRe", "dqJcP3JcQLy", "j8kgrmo6WRy", "xMbWFa", "zK9rlSkp", "W77dN8ovW6HDWOCZimktuG", "uhT9WQZdJSkOACkfWO3dUW", "fCoIgsu", "WPZdNd3dTSoE", "eNhcKrL4", "mmobCvC3", "wI3dR1mm", "A3FcISkqWOO", "BtbxWPVdRW", "WRClW4WoWQK", "vCkgWRBdNaNcPCkKW6ldNh0", "W4RdHZ7dPSo7WQ3cNGq", "AglcQSkgWPa", "W68BvSoWW7C", "WOJcSaCYtLZcHJH7", "dCkhemoVWQPpWQOKrhO", "bmoMcbe", "rSkuucBdJq", "mmoMncn0", "pmkya25dWRj+WOW", "qmkkg8kNWO0", "W4xdNYTWWPTFcSoxW4lcSG", "jmoxmJ9TC8otmmkaWPS", "kSolWOpdTSoH", "WPldJCoDlLa", "dHNcVxK", "ymkiWORcKCkneCoyisdcKa", "WOPGWQ7cO8kB", "stzLWRtdJq", "uXiKxabjWOldMI3dMa", "aCkWWOddM8ks", "W6VdH2mp", "C8ocWPlcKCow", "xcTZg8kaW48nWRinAq", "mCkNW4/cNxS", "zSo+WPJcLmo5", "iCoMCNGgWOn/W6tdP8od", "W6NdKMazW7a", "WOldS8oAm2i", "WRZdRIWzySo3W57dL8kDwW", "WRVdTIaoB8oPW5JdMSkffW", "cdzqWQHkWPJcPdxcGmo4", "buTciuS", "W7dcN30PiG", "fNrUW6fU", "f21ho8kO", "WPBcICouW7xdImoMbSolsf0", "vKJcHCoj", "W4ddV8kJW5e", "W5hcUea+crRcM2S4W7G", "scGaW70nW4ldTeldKSk4", "vuZcI8kueq", "mmoXz3utWOvF", "rHJcSM/cO1m", "WP9rWQRcLmkZ", "WR/dTI4oB8oOW5BdMSkfsG", "W4VcHuqScq", "bmoKaIfWWPFcUmoj", "xSkkFCopWPxcNG", "WRa4W7OmWRC", "g8kEdCoVWRS", "a8oLksLH", "WOW3W5GeWP4", "hh88WOCUWPr4wvVcHq", "iCoTWONdI8k1g8knWOBcUmo2", "ymkiWP/cT8khfa", "o8kaC8o7W77cNmobCam", "W4BdJ8kpW705", "WQeIW4OtWR8", "WRtdNmoBW6PrW4r0FCooqa", "emkTgCoHWPS", "WRG+W4eRW4dcRdxcSSoUsa", "W7pdJxKrW5mfnHpcPfi", "nmoEWOldRW", "WRKNW7WyWQ8", "wNS+WPG", "a8kJWOtdQCkK", "cmk/W7ZcMuO", "W4hdVSk5W4yU", "W67dVxOjW5C", "uSkeWRJcKSkm", "W4ddHmo/W43dIq", "W4/dN0yrW7S", "xY7dRrmBWObRyNldMW", "hSounWrx", "zmkKWQJcQCkH", "WQNdHCkvWRhdTa", "WQpdScddSmo1", "n8kefxK", "h39Kbq", "W7ldMSotW6/dHa", "WOxdMJu", "ouffW6rh", "bmo0nJjp", "dmkSg2zI", "W5BcQeeLwG7dHcG+W6i", "z23cPCkopa", "q3ZcJSkgWOW", "k8oIn3awW5SyW7JdP8oC", "WRKTWQ1eWQi", "W43dNSotW7VdM8kIhCon", "tajQWPbl", "mCk5EmoXWRe", "uZPrWRpdI8k5BSkKWONcPG", "WP/dMXeDW6Xmu8okW6BcRG", "WQTHWPNcICkqWP3cTq", "peFcOGHb", "fmkzW4JcNeldLSkPWPlcPYK", "aYnKW5PUWOHxbWhdNq", "l8kXWRZdR8kz", "WPFdNLDqWRmrxSotW6tcQG", "cru3d2bNehpdVmon", "q8kwjSkhWPJdHxepWPdcVq", "W7xdJwqv", "A8kzW4/cRSk3dYpcH1j9", "ofToW41B", "Du7cI8k5gG", "uq97efTtWP3dLx0", "WQpdHCk4WOZcOqDReSk3vG", "AHD8WQXC", "W5FcSIOTWPVdHCo5W53dRvO", "nCkPBSo6fa", "WQtdK8kOWOe", "l1DjW4vo", "WOKvW49qWPzMjXhcOaa", "W4ldNZZdO8k0", "W44AWPxcLHm", "bmoCF38h", "s0dcQCkPW7yomSkRAYK", "aJSpjXW", "fSkiB8oFna", "m8kceN1sWRvYWPS", "bmkVW7O", "f8kDW7JcH1e", "fCkTrG", "CCkVcCkwWRe", "gXZcUN7cOq", "WQpdQNb5WOq", "gMPDWQXmW4O", "WOhdVZxdI8ok", "DCo1WRtcLSoW", "w8kPlmkNWP8", "WQ7dTSo5W7Dk", "mhXBW4nh", "pvfgegy", "vs1wWRi", "WP07WPPdWOK", "fwCXW6pcLSoOpmokW5VdOq", "bruWbYe3hxBdOCoe", "dSkqc8okWQTqW7HJt3S", "W5WtWPJcJqBdIa", "sCkXat5XWPJcR8kbW5K1", "W5KlWO3cNHtdG8ol", "p8oRW4r3WQdcImkXg3hdGa", "W7tdMMy", "suZcLduRcsmRW5ldQa", "fCorjNtdNW", "WRldP3TGWR8nq8ogW77dPa", "ef97W7ni", "DCk0jIbbW4ylWRJcTmko", "WPK6W74BWPW", "h8oakt1M", "uwT8Ba", "fSkvFSoVnG", "W5JdTCk6W4e", "W5VdJdtdV8kYW6JdMHiWEW", "WQBcUqHlW5Gs", "W6hdQa5EW40nWQFdJSoAWQu", "W6W4WOdcRse", "EGNdPhe1", "pCo2aq", "aCoynYrn", "W4mpDCkyW6lcKSk/eY8h", "WOZdNZ/cVSk+W7JcKaG", "WP/dImkUWQ3dIq", "sMPGDI4", "hKpcIqfx", "gw5K", "DKiQWPGX", "WRu/W4SjW4lcOq", "owrnW51i", "WORcJJbJW64", "WPmoWPJcIWBcI8oBtmkKWPK", "C3NcLmkjWOG", "W7K2wSo6W5u", "lXm6ocC", "cCkWWQxdImkj", "WRJdJSkbWOJdTGT3iCkJuq", "emoatK89", "fCoKbbfW", "WOBdGmosW69AWOu+yCkGqq", "W55RWOjDWPxcHtHq", "W5uyW5SqWOP1ifJcPrK", "cre3dY5/pgNdSmol", "W5/cMNaYWRGaxq", "WR7dSmoDjNy", "g8oLcbHR", "Ahrwf8k4WP1SW5LVoG", "imonW4JdSmoetSkjENxdNq", "WPpcLxScWRSpsCki", "cCkFmNbZ", "WOHdkCkoWQ7dL8o/uxng", "W7RdS8oSagn5kmoNWPyv", "mCoXE3WrWPjvW7O", "dbxcV3ZcVq", "s1hcJmks", "WQZcUGH5W7u", "gCktmCkh", "DSoRtmozoqFdSSoFW4ZcTq", "WQBcPr9lW40aWRdcKSkwW6y", "qSkRimklWPe", "WO1MWORcQCkj", "WRRdI8kuW6XsWOCTja", "WQLXWPZcHa", "kSoLgtPf", "WPDNWPBcMmkj", "WQ4OW4eFWQW", "WPNcL2ORWOm", "eSo/aZm", "tCk4W6VcK13dUCkCW77cHda", "W4mbnCorW7ldL8o6najg", "q0L6bKaxWPddJJFcKG", "aY9KW5HOWOTyaXVdIq", "vSk5uW", "bCoKgLddQq", "qSo2baLBCCoXW4ydWPO", "W49NW5SEW57dMJiXW7lcGG", "W5xcQ29llmkUWPW", "p19eW6vV", "WOtdPwL1W5VcKSk6W4C", "w8k6xcVdVW", "mcldHSokW69hC8oOkh8", "CmosWPpcVCoY", "W63cJ8kbWRugW4zNCmorcW", "qx8/WP0U", "tCk+W6FcHftdSSofWQpcGt0", "W6L3WPJdMSkSWOZcM8kgrmkw", "WOpdPSoFbeq", "CMBcHCkeWR0nia", "WRJcJCko", "C3ZcK8kjWRW", "omkLo8ojWRe", "W6xdJwKoW5Go", "w2b5Da", "percW6m", "W6hcIg9cdG", "rmkyn8kf", "a8ooWORdOmo2u3NdGHe+", "DmoWcCkfyKdcQmkDW5BcQq", "qSkdb8kuWPu", "tdNdUf0j", "WQ/dISorW6fg", "W63cR1K/eW", "W6ZdJmkUW5en", "WO7dHfnzWPS", "WPmfWONcJa7cI8optmk7WPS", "oaRcT1tcTa", "hmkbc8oQWRXmW498sga", "hSkue8oN", "WQxdTmo7agL+Da", "gwXanuK", "vSobWPFcNmo8", "DmkHWQRcOCkU", "gSoLpc53", "W6NdPSo5bgKQzmo7WPGv", "W4FdJSotW7/dM8kJ", "Ea7dJx8rWOn9yNJcGa", "hCoxmdjIESox", "WQZdMSorW6TlWO8+oa", "z3uvwSktWPr/W4PCDq", "uK3cUmkWdq", "vuX6v38UsxtdTmomzbFcGG", "WOtcOW5bW5G", "s2eCWPiz", "WONcSaaYsfZcHtH4", "ySkDamknWQ0", "WPFdPfDfWPe", "BhVcL8kGWOG", "WOddIvPwWRu", "WPqQWPHiWPe", "mmkJWPJdNSky", "DmkBArddSW", "vCoRW79LWPK", "WOOUW5WTW7a", "W7/dO21ll8kQWOpcJSorhG", "paimktu", "uSkui8kfWPa", "fMWHWPe7W41+", "W48lBW", "WQldHCo3WPxdPGXKsSoYdG", "W7rRWPzzWOddQxBdV8ktaq", "WQqcWOr2WRe", "cYixpWy", "W7tcRvuOwG", "iYJcHwtcPW", "mKr1W5nO", "vmkvFHzIE8oBlCoBWPq", "WQFdOfrUWRy", "ENrqhCkCWPb/", "WQFcIvKtWPm", "WQ0AWP4OW5qTjrhcNq8", "lCoOW5TLWRRcM8kmgJJdGG", "q8ooz1/cI8keWRmHW6xcNq", "hXhcUgNcSrPT", "hSoXmd94", "pCkmbx1vW7fQWPrQcq", "WQ0BW5GzWPa", "xSknuatdSG", "CSkjWPRcHSkihCoopq", "WRhdLdVdTSoy", "FN4sWRaY", "WRJdM8ou", "lCkihhnqWRLEWPLGdG", "k15DW5jJ", "WPtdVGn5wHlcJgrMWQi", "WQGtW4WjWPm", "dCkBbvvk", "jCkeuSo4pq", "c3bVCt/cHLq", "mmkBW5ZcSmkKaZtcKL97", "tavtWRddSG", "C8o8W6fbWPi", "smk5ct5VW4C", "dmohmIXMD8orjW", "WQBcUG9fW4y", "W5hdH1a0W7a", "CmkKvIHEW5CAWRJcOSkE", "tYuIqmobWOPsWR0FnW", "E8oVWOBcLmoB", "mColWP3dUSkPqwBdHG9O", "mCkeE8o2WRG", "vI7dQvi", "WPxdHfDqWQmTvSooW7u", "lCoEkqTV", "eSkxfCoUWRXq", "q8kRtIhdPa", "WOxdMJxdKmoJWRNcJXi", "mCk+igHf", "W6ldJ8kIWPpdQaGOfSkJtW", "WP3dRKbpWPW", "WRxcHWPOW4q", "hqeHaIrKexRdSq", "uSoqWOhcUmol", "WORdJ29dW4W", "W5/cVLuJh2xdMceMW7q", "BhlcKSkeWRa", "CCkeWPdcOq", "sehdPsVdPb92Cwm3", "WRpdLf5lW6O", "W6ZdP1GBW5O", "qdbW", "W7NcJCo4W4NcSLOLumoYda", "a8ofyhy+", "cSk6wSoeWRi", "kmopWPFdTW", "vsbnWOroWOdcSX/cG8o/", "WRdcShmPWRa", "WOXyW4JdHL7cNSkpx8kVWPNdL0eo", "W6qbESoCW7pcKW", "n8oRcIrS", "W5hcUfKI", "W6BdIwrgWOjxAGNcOLy", "lSoIlbTa", "W6vGWOBcMSocWO3cVmkxzSoy", "pmkbgh9n", "B8k7jSk3WR8", "F8kmWORcOmoecmoyiJtcJa", "W4pdMCoyW74", "W7/cTvyglW", "wKb/FIm", "WO7dQCk+W4KKW5xcOmkKjq", "WO3dICkFWPtdLq", "WRZdSmo8W40sWPuqiSk3yW", "W7dcJSk9WOBdTqy7xSoTuq", "WRTQWR/cM8kO", "WR3dUSotmu4", "DKaEWRC1W5DVu1VcHq", "WQfhWQ7cU8kH", "bmoDlG", "ymkPEG7dQNSP", "v1BcJaD0gHPqW5JcSa", "oSkZW4/cLve", "xMX7Fa", "gmoEmsHC", "omoIoNFdIq", "jYmvktq", "uCkql8ke", "c8kwmCkuWP3dJ1XdWOFcRW", "WR7dG8ozW6zu", "WOZdSM9TW5O", "W4OJWP3cUaG", "W6ZcH1Kkma", "WR/dLCkOWONdPbW", "cSotiZy", "WOZdSurgW6u", "oCknrSowWQi", "s8kzEYxdMW", "nSkXvSozpHtdQq", "umogr8k7W78jWRm/dsm", "WPVcN3y1", "zCoxW4j3WQddGmkSegO", "u8oFW69XWOq", "svXJimkl", "f8otivFdOmkmW7T4W7W", "yuuPWPKz", "qmkHW6VcK1NdUSkjWQFcIt8", "CmoZW6LcWO0", "WORcULm3WQa", "DgRcOSkkWPu", "WRq7W5u", "oCoACaSXimoFoSkVW58", "yt5ZWRBdKq", "WQtdH0beW6a", "WRFdKt/dPSoO", "CH51WO7dOq", "WPldNZ3dPSoQWPFcMG", "WRO2W4WnW50", "nmoqWOxdU8oi", "W47dS8kpW4ie", "WR1cWOdcNSkpW47cK8kECmoi", "WPddSubNW4O", "dGeXhcH5gMy", "e8oKfeddPa", "WOtdQ11tW7m", "W4xdR8k6W4S1W5/cOmk4", "W4ZdJSoj", "WP7cMhCGWQm", "nqe3pqK", "tYuHv8oqWOLsWR0FwG", "CCksnSkvWP4", "eXddMSofodC4EGJcKq", "eSkGmhzC", "WO/dJaldGSoG", "E8kzWPpcQq", "cmocbYzk", "dCoJp03dIW", "w210AGNcNxeAW4Pd", "W5hcRvyNcqFcIGWQW7m", "gfxcKre", "vmkvimktWOFdRLmoWPq", "WR7dHmk+WPldRrP2", "lKjGW6HBW7rgWPPPDq", "W4SgFSoBW73cMmkNfW", "eg9rbCkX", "uYLnWO5U", "WO3dScldL8of", "qSoKdbHnCCoWW4idWO8", "mSk/umoDpa", "W5pdV8kVW6m0W5RcUmkyjeu", "emodi2ddKa", "tYCNwCovWO0YWR4Bnq", "W7NdQCkpW78K", "W6lcR3CdjSkVWO4", "c8kDkmkwW5tdG14cWOlcVq", "bmoapfFdNmkmW7TKW7W", "g29HlSkK", "W73dV8otW57dUq", "qLhcLmksWQS", "W5xdIxGyW7O", "CSoWcCkoyKdcT8kyW4lcPa", "krJcP17cJa", "hCk6qCoFWRC", "W7hdIxGeW5iFnG", "EmkUCdhdOW", "aXaI", "W4FdQSk3W4W1", "ndpdI8owW6ToC8o0kNS", "WQpdHCk4WOW", "yvX7l8kz", "WP7dNfTp", "bJzmWQfBWPZdOr7cGmoO", "WQHXWO7cGSkwWOFcPmkp", "cCkhfSoSWRHbW7G", "qSoQW45xWOe", "W4pdLazFW6fqs8ksWQxdRa", "cCobhW9y", "bSkYWQpdImkS", "WOtcPdfgW7C", "W7BdVuukWOzzW7tdK8ooW7G", "vCkql8keWR3dJKiwWOxcVq", "p8o5gtyLW5BcTmoCW4K5", "WQJcQXPaW5W", "fdmxkaq", "p8o9WPJdS8o0", "W7tdJSolW73dGCk/aq", "aCkQrCoHWOq", "WO3dUmoKlgS", "e8oVobHb", "BSkylmoBWRZdJ8oqAWxdMa", "fColmLhdKSkw", "dmoEis1Wv8otm8kc", "a8o/lHD5", "WQPOWOBcImkhWRRcV8krCSoh", "W7DTWPVcICkpWRZcV8kb", "WPxdG3n5W48", "jSo+q3O3", "WQ1LWOpcVSkdWPRcTq", "WReNWRTiWQK", "WQ5HWONcR8kV", "fCkmF8oWWRK", "aGpcHvZcGW", "n8kTWP/dGmk6", "WRykWRbQWQm", "WQBdRdddOmo6", "WPmpWOvQWQm", "WRyDWPTjWRG", "qWqShtK6gNddU8or", "W6tdKh4eW5ip", "t2VcPCkxWO0", "cSkHD8oooW", "WPtcNfeuWQi", "WR3dP8oSaW", "WQG9W7yhW6W", "BxRdNmkbWRemimkT", "WP5OWQpcGmkH", "WPNdMv1gWOy", "CCkiWQBcNmkY", "uSk+imkxWRi", "DKLgxW8", "qCkBAehdNmkkW6zXW6VcLW", "dg5Gg8kaW58B", "WOZdIJZdVW", "BbLjWRpdMG", "dCo5kHHA", "WPddOCoBp1C", "nCkcghi", "WOngWRRcQmkJ", "fN99gW", "z3RcImkd", "omonWORdT8kPuNhdKX4J", "tL3cRmkxWPu", "vSknnCks", "yx4ewmolW5u9WOSEyq", "W4ddN8kVW68K", "ufyVdZDUfxddTmob", "bKngi8kW", "k8kciMHuWRvZWPi", "W4VdOMT0W4JdNSkPW5FcRaC", "WRBdKmkpWQRdQa", "o8oAfY9n", "cmkUWOBdRmkQ", "W7GCDmoCW6pcNmoYcI0p", "fW4qcbu", "bSkZWOVdRmkB", "hgZcSGrEW4a/nZBdMq", "WRS7W5epW4xdPcZcP8ojvq", "WQBdP3v5WOm", "WOhdGgzzW4i", "CbXQWO5j", "j8kyDSo0WQFcIG", "CSkzWORcTW", "W7hcMSkEWRqiW4z4CCopcG", "WP7dKCkDWQRdKW", "k0TGb00", "crRcSMu", "W4dcGL0dka", "W6pdRmonW6ldQG", "qtr3WRC", "WQ3cMrzjW64", "mmkVxmopWQC", "W6RcJ8kDWRqpW4z7CmozcG", "W44isSoCW4u", "c8k/W73cKNO", "W63cOqLpW5LmWRhcMSkcWQq", "vhb0ut8", "W4SlWPu", "hwD/bmkeW48k", "ctrQWQtdKmk9mCkdWOhcPG", "fvLYnv4", "WRBdMcNdVCog", "WQRdICkEWQ7dUW", "kuvdW7a", "WQxcNxaXWRO", "WRKgWPHRWQO", "W6BcQuiRfftdHW", "vtfCWQTFWOy", "A05ttXO", "WP4fWPFcMaZdICom", "WRRcLhCoWOa", "CmoZW57cNSoPDSkrWR7cOSo4WP93", "e8kRW7ZcLvBdOW", "CWddLf4Z", "j8kbCSoEoW", "W4RdMJddP8oUW7xcJaG0Fq", "W7VdOSoGawbVC8k6WPeh", "WR3dOCoKcq", "W4KdWO3cKWi", "W5CnWRpcUWu", "W7VdImkiW68L", "W60fs8o9W7q", "udJdTe0u", "dte1nxpdGJvnWRKx", "dSowjb1VEmoblq", "q8kwkSkpW5RdIvy", "WQP2WOW", "WOhcGxmOWQm", "e8k4W6hcHfFdO8krWQpcJq", "WRpdSZVdLmob", "W4ddTCkiW5eZW5/cUSkM", "W4DDW5OpW5GOzWhcTWq", "WPddNYNdGCoUWQZcMq", "WOxdPSoRW5LZW4RdP8k9Dq", "WPhdSmo/agTLD8oYWP1g", "W5ddS8kT", "W7xdH0KuW44zibtcSu4", "WOpdHhPPW6q", "cJFcUvdcTq", "h8kWmmo/WQK", "W4dcMvGxlW", "WR3dH3OvW5uek1RcPfy", "g8kIW5NcK1e", "nhDBW4LB", "u8kOf8kOWQW", "teRcH8kAk2DQmb7cIq", "c0vcW7DB", "kCkAgmoOWRC", "jCkmfSoXWRq", "Emonfx1sWR0WWP1GdW", "ESkTEaxdQG", "n8kae8oI", "W6JdHgzCWP4imaJcOfi", "dw5K", "W4XbEmoDW73cQmk9dsqn", "imkHySo3WQa", "W49sW4jnW4yLEKxdTuy", "qIrnWQqxWPRcRGtcJmoR", "W4NcOvzajq", "qtXQWQC", "iCk1umo5paxdT8ooWPJdSa", "WQRcM1CtWPS", "WOddIvO", "WRldHSotW4nV", "WQBcPrHeW4a", "mMCzgCkxWPr+W5GrCG", "lMnFW4b0", "oSodWOhdPW", "emkJfNPS", "zCkFWRJcGSkv", "W7FcTCoHf2jSoSk1", "ySkwW4ddSmo0v3RcMq", "c0fNfa", "amoZfsm", "f8kVW7BcHa", "W4RdN8ojW6O", "fePHW7ji", "WRJdQ35uWOu", "lCkmbtXoWR1TWObYwG", "nsVdHSokW6LgASo5nxK", "o05pW7jEW7bxWQa", "W6egqCo8W6m", "WOhcGx4VWQWivCkvWOddKW", "C8oFWPFcM8oX", "W6eOFSoAW7q", "WRFdKmoJa24", "ChVcSmk6bq", "W63cN8kvWR5lWOmYnComuG", "WR8aW601WRi", "yCo6W5LHWRRdKCkX", "f8kAfSoL", "W4JdISorW7q", "kSo1EtrdW4zwW6e", "WQKGW6CuW6a", "n8oFtK86", "e8kRW7ZcLvBdO8kB", "W77cP3zaFa", "WQ1OWORdJmomWPRcUCkcECoo", "WRaSWOuhW5ldThNcTSohuW", "guDee8kR", "WOFcMSknW5tcNSo4xSksdH4", "W5aJxCo8W5i", "dmomWQFdOCoZ", "WQ3dJSodW7zlWO44lSkuva", "WPjNWPRcPCkv", "sxvSW7FdGmk6C8kjWPZdUa", "mSk1r8oumq7dVCoo", "FuLdws0", "WOFcGNOT", "xwr2Ca", "sdlcR1GBWOTOCNRcGa", "mCozfNVdKG", "vapcO3ZcQHiNlZbK", "W47dNMSZW6LsfCkpWPBcKq", "W7JdQCoQW6ZdUa", "e8kvA8okbq", "WOddRWFdM8ox", "WRZdI8ou", "aHpcLfVcQW", "W4BdO1S2W4O", "o3TKimkY", "wmkknConWPJdGvagWP3dOW", "Bfn9uWG", "cfHXaW", "CuOcWR41", "jSoNcXq", "WPRdKxjRWQu", "C8k4FHa", "WPGCWOnNWOG", "gmo3hqK", "oSoXg1tdPG", "pCoAWP/dPSoQuLFdJXyM", "WPtcGN4SWPO", "nCkWWOpdJCk7", "WOZdPh90W4W", "sXriWQ9/", "W7JcQ29lmmkPWOO", "cmkYe8ohWQK", "iCkLW4/cSxNdLSk4WOdcVqm", "WP7cNNWGWQmhvCkv", "sbFdI1a/tL1DWOhdPa", "WRGUW5eC", "W6VcUM1Ck8k4WPRcM8oaca", "s2T3pSk+", "WP1okSklWQldL8oHugnx", "k8ofCfiF", "b8oAoLpdG8krW6XZ", "wmkHWRpcTCkf", "fSohmhVdKG", "W7L0W4ClW5RcOdNcO8oosa", "d8oGabXooCowW48uWPy", "bmo/WP7dOCoi", "rY17WOnJ", "W7ddQSkxW6an", "W5WgFSozW7i", "od8AoGq", "W5FdSSk6W4SMW5m", "WOFcRGXjW5u", "WQVdNmorW7j3", "WP7cI8kqWQNcNmo7uSkodWC", "DmkiWOO", "hmo3bbLK", "BG3dH34F", "qJTWWRhdGG", "kCkGBmorjq", "v1VcKSkBfwvR", "uCkeWRBcQSkg", "FSoYWRdcS8oSWOhcJWxdJSkP", "W6q8xSorW7a", "EMnbdSkAWODOW4O", "ySkPomkYWQm", "W4aQW4PhWOlcHMnpW6tdNG", "WOddKaddSmoh", "WOpdHLXKWRS", "bmknW6RcVx4", "W67dSCoTW6VdUq", "WOxdMLu", "WR3dTmoNsgn/zG", "nSo5fwO+W4NdU8kCWP1L", "BatdMM8y", "WQTHWOlcG8kuWOS", "omoDaNVdSa", "jSoJabHB", "jSknASoH", "WONdSI0+W7NcMSk1W5FcQe4", "WPBdNZVdSSoGWRBcMWOXzG", "dCoMeq8", "W4RdJdtdSmoQWRBcIeW0Dq", "AmkqnCkfWPNdKX5nWOBcPW", "CCkCFCoHWRlcG8oqyrVdJG", "W5BcNW4dW71sbSkdWQhcPa", "WPqeW5qhWQK", "i8oujZf9", "W4JdKComW53dMa", "WRu1W5ZdN8ocW5VdSmodnCkA", "W7ddHCkKWPhcOq1Pa8kXuq", "aSkYvmowjW", "amoHatnA", "WRJdJSk5WOBdRq", "aSo+fdvL", "WOBdQwr0W4ZcNCkT", "WR3dTNbeW58", "W6GKW53dM8ouW47dVCofjSkF", "CCkIwcNdKW", "amoWoXPl", "W4BcNJ/dSSoIWR3dGum", "WOWnW6GBW5u", "emkgWP7dQmkt", "jSo4WRFdQSot", "uhH5gSkrW5aBWQjlEa", "vK9xi8k6", "WPNdMfnn", "n8oLW7JdRCklW5/dJKxcNCop", "WQxdLCkOWORdNGbWd8kGrW", "bmoKaIn2WO3cOSoCW5G", "rNRcPmkrjq", "W4ZcOLaRheNdMIeV", "WPBdRSo2W656", "p8oiWQtdGCoP", "iSkFFmoMba", "uw10DMFcGxqlW74", "WQdcPXnEW5epWRy", "qmo0W4n8WPy", "WQ7dJ8kSWO7dRq", "tZhdRfuk", "g8oDddf0FmoahCkgW4G", "WOerW4WQWOq", "WQddT8oWeeG", "WPFcIxOI", "WOypDCoFW73cLSo/bYOv", "w8kwimke", "WQtcRqLVW5GeWQ/cLSkwWRu", "WQLLWP3cICkmWPRcOW", "ymkGeSkzWOa", "C8oNWQhcV8kEWPZcIWtdJSkv", "imodveeX", "cMrtaSktW44BW6fmya", "caWMdq", "W5RdG8oRW47dTW", "v3K3WPOD", "vv4CWPe9", "bxvHWRFdN8oHpG", "ELv9imk9", "sapcPNNcPvPKnZrL", "rSkTemkXWRm", "xsvaWRVdVG", "WR/dLhjZW5S", "WPBdLCk6WOldGa", "WO87WOzgWOq", "oSobgLNdOW", "zNjncSkiW48IWOrFpa", "WQ3dJSocW7zA", "v1XFdmk4", "u2S3WRC2W5HOrq", "vL/cLmks", "lmo5WOldQCoQ", "uui0a0nBWOhdIh7dGq", "FCkmWOJcKCkbbmoj", "bvr5da", "afpcQqbM", "helcOGDN", "v3j5wYVcGhOkW7Hs", "dYGNWPS3W5T0wHJcLq", "WQOPW5uEW7C", "uMVcKmkLWPm", "gSo5ctjnWOdcQ8oj", "lCkRWO7dIW", "EtpdSLmmW41fAhFcKa", "CmkbWPFcPSkp", "C8kcyXJdIa", "sJbRWRBdJW", "WRddTvPdW4aeWQ/cRmkAWQq", "WPVdTCkxWO/dGG", "W4tdU8kPW5yK", "WRFdTKrHW6C", "q8o5W6XYWRu", "cZrwkx3dNc1mWQCf", "WOG4W4vlWPxcHwqhWQ/dGa", "kuHyW4zyW6vgWRbQCW", "W4xdHmoqW7NdImkUv8krFXu", "aSo3asj8WRBcVq", "W53cTJO", "lrPwW6rNW7TFWRvdCa", "WQaDW7eOW78", "kmofWQpdRmoZu2BdPb45", "WRpcQq9pW5OvWRe", "q1jXa0PuWOBcLI/cHW", "m8kizCoUaW", "jmkYWPRdGSkN", "u1vcAWm", "nSo7y3GEWOrFW7RdO8oA", "WOWIWOzgWPJdG3WtWQ3dKW", "WRezWQbGWQe", "WRBdVCoSbMXLCSoJ", "bmk6lmogWPO", "W4eAFSovW4NcHmk7gsy", "kSkuCmovmq", "umk9fG1BmSkT", "WPGEW6GaW5u", "WQVdUsBdKSooWPNcVG1OrG", "Cmo9W59HWQBdPmkMeq", "wZpdOviAWRLMC3FcMa", "msddK8otW7fcFmkPjNa", "W7pdP8owW4ldIG", "W4ldU3aaW6O", "pmkch29sWQ5OWPz1eG", "W64pDCo/W6W", "WQBdSmkfWOddPa", "CWzvWQzR", "WRldJ0DjWPq", "q2RcR8kd", "W5RdS8klW6eq", "WO/dNejlW6bxymkBWR/dIa", "dSkjWQ/dTmkN", "cSokjt0", "fhxcScbB", "WR1cWPZcRCks", "AKNcQ8k1WQi", "CmkmWPlcQq", "iCknzSouWQFcM8osBrtdMq", "jmktWQ7dJCk4", "FSo4W7TIWPm", "jMztceS", "W77cUxvkaq", "e8oxjW", "WOy5WRTdWQC", "WRmkWQ5lWR8", "cmkljmkmW4NcKbqqWPNcOq", "b8knW4lcUve", "dSo5ouFdVq", "qCkEqapdJG", "WRhdLSoHW6Ho", "cYuTkdu", "Aw9FaW", "BSkFgCkpWOZdOumhW5ZdTW", "WOtdRSo0W5D9", "l8oeuvei", "uCkPfSkWWRG", "W6ddJg4IW5aknGK", "CJffWQ7dOG", "kvjddSkv", "W6/cVMqMaG", "bCkZuSovbW", "W7JdNSoFWRJdU8kKbSocura", "DCkeWPdcOq", "hSohjsX6sSoxmSkcW5G", "gKdcIq8", "W4FdJJtdOCoMWRBcMWaSDq", "lmoqvNDdWQH4WODGeW", "yc5oWRbq", "fxBcJsrX", "WO7dKGBdU8o4", "zJjbWO/dSq", "mhPwa8kj", "W6xdShOOW4G", "n8kLjM1i", "W5KlWO3cNKRdHmoAv8k2WOy", "z8kUWPhcQCkldSkFBIpcJq", "W5JdG1nxWRurvSonW7FdSq", "WQJdOmk7WP3dKa", "rmknlSkn", "W6/cJ3GlpG", "WQRdH8kCWOpdKG", "CuXJEJa", "eNNcTc5d", "WPK6WP9oWPZcKa", "zCo+W4vWW7tcI8kXhhxdGa", "WRBcHvqgWRG", "hSkzemo4WRPxW74", "oSkCF8o5", "WOtdJvTmWQyg", "bNuzW6GjW5tdRexdLCk+", "uCoLWRlcJ8o3", "WRpcMJ9bWPfFzvFdOqm", "WQ1RWQxcV8kTWQa", "f8kVW4hcLxu", "xxG/WRC7W4T0q0BcLa", "WPTRWQ7cRCkJWQ/cGmkLqmo5", "zLhcRCkzeW", "CmkcWPRcOa", "tr1OWOHQ", "p8ogWO7dSmo3", "W6ddI8kdW6WP", "WRuaW7uDW5K", "rsriWOhdVW", "wCorFLhdHmox", "dSkfe8oIWQS", "ugnXbCkgW50", "W6NcQNWSdq", "DxZcQSkiWQ8BiCkAEt8", "CSojWOtcRSoMqNRcI1eI", "WRRcI2SpWPu", "WPibWPjsWOCQ", "iCohhavY", "WQxcQtbhW6m", "WQNdGujgWR0q", "WOSZW4WfW5e", "WOxdGf9tWQakwCoeW5pdPq", "W5aPWPhcMGtdJCoqumkJ", "W4BdV8k2W4O3W5pcL8kTifC", "bmoHjIv4", "W5VdTmkVW4qOW5JcSCkZyvC", "y8oqmSkIW7/dNSkysuFcMG", "W7tdPeWyW7HzW6ZdHSobW60", "uCoqWOpcQSok", "hmkrg8oiWRnfW7L5", "W5KNWQ7cUqu", "WPRdTCkRW5yOWPVcPmkOlu0", "WOBdRXRdLmoa", "W5FdMLOjW4q", "DSorxNnwWQH0WPPVqW", "bmkqW4lcOvS", "j8o1Dhe", "WQBdUdZdGSo6", "m0bl", "WQeZW6quW4u", "zhdcJmkumW", "h8ofWOhdT8oLx3RdGG1Q", "WO7dJYVdLCoe", "evDkW79w", "W5SgWPBcKbu", "W4S8yCo0W5i", "fmkqWP7dJ8kq", "FSkJAqpdP0S4eeCg", "cseHpaq", "FCkijmkfWPu", "W6BdNwGyW58", "WR/dRIWaCSoJW4pdNSkrvq", "xMnRcSkX", "lCoYCq", "bSoZhtT4WPRcVG", "CmokWOhcUSo5", "WPqCW5WyWODWmqBcOqO", "W44cWPZcKWhdR8olqmk6W5a", "hbhcOddcSuiGiIvY", "WQNdJmk9WPpdUa", "hLxcVbPK", "lJqosSoBW5G5WPGuDq", "WRtdPCo5agLU", "W6uRWO7dKSoEW4hcUmockW", "vtXZWOn+", "b8kyWP7dNSkk", "dCkLagLn", "Awnn", "WQOQW4KhW4i", "zSkIWPNcPSk0", "W40yWPBcIWJdKSogvCkY", "hHeNbYW3hxBcTCoo", "vCkqmSkbW5tdJvCnWPBcPG", "ce5G", "WQ/dPmo9jfy", "W4LuCSovW7FcKmk3tdmi", "DhNcRmkxWRW", "ihzlfCkFWObMWOzfoW", "DmoHWO/cQCox", "pCkdiwTS", "y3BcGmkiWQOBamk4BIK", "lSo0mMRdGa", "pCooWOVdGmoOv2FdLa", "gHuXaa", "luDAnmkv", "oHBcQ3pcJq", "cSkHW4VcGxm", "W4FcP8o8W5eUW4lcTCkTBey", "WQydWR9jWRq", "jHS3d3e4fM/dOCom", "zCkFoCkoWR0", "rCkwnmkoWPa", "s216BW", "WPpdKfT2W6W", "W5JdJSoWW5ldOa", "t8ouWRtcL8oM", "WRxdJSoEWQHmWOC+na", "W5ddRmksW603", "f8oGWR3dU8oj", "oSkvbxLiWRG", "WOJdK05eW7O", "amoKbdb+WPZcQq", "W4eaDCoDW6tcV8kglG8", "tZXGWQy", "WRhcU1WYWOm", "WQZcRbHRW5y", "W58/WOvBWPhcJ3uxWQ7dLG", "W6BcU1r6da", "nmo4ls92", "DCo1W4LqWO0", "WOxdGSotW77dGmoMemowsuq", "A8oKf8kmCe3cQ8ktW4pcPa", "e8oxj2BdN8kDW69XW7FdMq", "WP3cMmkeWRJcN8oRx8kvdGK", "cd59FspcLx0lWReg", "W4xcMhf0dq", "tgZcRCkrpW", "jMbanSkw", "rfJcLSksbKDQma", "W5/cPvOQ", "yabAWPnW", "imkrFCoMaG", "WQqxW5GyWOHGoW", "W6ZcP3Dk", "umo2daSAp8o/W4icWOG", "WPGDW4mnWOPXpba", "lmoFWPZdQW", "gSk+sSoEWQO", "pmkVWPmKW7NcLmo6rZJcNq", "m2pcKXT6", "dCkTeCo+WO4", "d8o6bbnDoq", "pmozltXy", "bSoKtM0F", "CSoAWP3dRmoGq3/cIGSV", "krFcLLhcJG", "WPmgW4mr", "p2XEgey", "FvGGWP0O", "smo3tt9RWPZcVCkrWPO6", "WOGUWPjB", "WRi7W7aJW5C", "ueL7vGe", "W6/dH8o4W7ddMa", "amkbW5RcO08", "amoxk1C", "ar0RdYm6sW", "rSkozHldPq", "bCoJcdLM", "CSorW57cRW", "bCoeWR7dGCol", "nu15kum", "ndWTaq4", "guHGm10", "f8ohivhdLSkwW6fT", "WP8+WPHDWPxcJwyl", "WPLFtCkjWQxcV8oNnxjx", "hSo3frfBp8o2", "Cc7dOvGBWOK", "dKX9a0q", "qZ1nWQbuWPa", "pgjumSkK", "W7NdL8kyW4il", "WQ4+W40xW6y", "sLdcOhJcTKqTidqQ", "FSkJwtddPa", "W77cGNbDnSk/WOhcISox", "W6BdJx4", "WRy+W4aVW5q", "gCkuc8oQW7jxW69Msg0", "jZ0jcIe", "WPiFW54rWOnxkqFcOtq", "WQNdISoiW7e", "rs7dHNi8", "W6hdVmo+W77dIG", "a8oxlJL3Cq", "W6pcGXO", "i8oKz3ul", "xSkrimkoW5NdK1mxWOq", "W7pdUx4IW5q", "WOFdPSoPW5LWW4RdPmk9Dq", "FmkYbmk6WO0", "xwSMWP96W5b1rKdcHq", "sb7dS1qxWP15BNJcKW", "m8osW5lcOCk0fItcH01+", "hqeWbG", "dCo2at5wpCoGW5a", "W5ToWOeFW5G", "W5JdRfKRfeFdKZeLW7a", "gevPW4XF", "W5xdTSk3W4O2W5dcOCkTlvC", "lmoopWDq", "WOtcG3CdWQe", "vSoYWQ7dGWNcT8oAW6xdIgK", "stVdPx4C", "W64lq8onW5m", "WPGAWOX8WOm", "u8kCeCoTWRajW6H/wxO", "dIa3WP0SWOC", "iCkJWP7dJ8oZmmksWOdcTSoS", "p0jyawq", "e8kOACo2aW", "xaLlWOnJ", "AmkzrbhdVG", "W5/dHmop", "W4FdJmoUW5hdHCkyi8oUzeu", "zLZcHSkKgG", "u8klscddHa", "W5hdUSo+W7ddGW", "nSoedcrS", "nSo6lJfa", "f39uW7j2", "lSk2W7xdRmkeW5NdJKxcMSoa", "z8owW4bnWP8", "WR7dHmk9WOVdOa1G", "aCkbDmogWOu", "pmkGpSokWOW", "WRTcWP7cJCku", "qwm6WPa/W610uvlcNq", "DK/cG8kggq", "vZbyWQToWP3cTq8", "W7L3WPDAWPBdU2VdS8kcda", "xwr+emkkW5mn", "W5JcUea8", "AwBcLCkfWPO", "o3zbwSkiWPPHW4jiDq", "s13dLH8Ia1ObWOa", "FG9IWRxdUa", "WRbQWOhcICkqWQBcHmk7wq", "tCovt8kRWRWsWRWQhs4", "WR0SW6WMW4a", "BY1rWRVdIG", "W4hdPxHLW4JcH8k8", "WOpdR2rK", "W7NcVNvhnG", "W6BcTCkKutqQnCkVW5Kf", "eqFcHetcPW", "xSk2emkLWP0", "p8oIocHt", "W7NdJ8oxW7/dMa", "EmkSWOJcNCko", "pCoHetPF", "BLrFyse"];
  _0x36a2 = function () {
    return _0x6b0390;
  };
  return _0x36a2();
}
_0x17c73e.shippingCustom = function () {
  return;
};
simpleCart(_0x17c73e);
$("#ongkos").on("change", function () {
  simpleCart.update();
});
simpleCart({
  "shippingCustom": function () {
    return $("#ongkos").find(":selected").val() / 1;
  }
});
$(function () {
  var _0x4055fb = {
    prov_id: ''
  };
  $.get("https://simpeltoko.id/cek_provinsi.php", _0x4055fb).done(function (_0x1c607a) {
    var _0x543af7 = JSON.parse(_0x1c607a);
    $.each(_0x543af7.rajaongkir.results, function () {
      $("#provinsi").append("<option value=\"" + this.province_id + "\">" + this.province + "</option>");
    });
  });
  $("#kabupaten").change(function () {
    var _0x3bf91a = $("#kabupaten").find(":selected").val();
    $.ajax({
      "type": "GET",
      "url": "https://simpeltoko.id/cek_kecamatan.php",
      "data": "kab=" + _0x3bf91a,
      "success": function (_0x328924) {
        $("#kecamatan").html("<option value=\"default\">Pilih Kecamatan</option>" + _0x328924);
      }
    });
  });
  $("#provinsi").change(function () {
    var _0x2705e0 = $("#provinsi").find(":selected").val();
    $.ajax({
      "type": "GET",
      "url": "https://simpeltoko.id/cek_kabupaten.php",
      "data": "prov_id=" + _0x2705e0,
      "success": function (_0x584a38) {
        $("#kabupaten").html("<option value=\"default\">Pilih Kabupaten/Kota</option>" + _0x584a38);
      }
    });
  });
  $("#kurir").change(function () {
    var _0x52159e = $("input[name=origin]").val();
    var _0x50796c = $("#kecamatan").find(":selected").val();
    var _0xbad734 = $("#total-berat").attr("data-berat");
    var _0x59bb26 = [];
    $("#ongkos").html("<option value='default'>Pilih Ongkir</option>");
    if ($("#kurir").val() == "cod") {
      var _0x416e09;
      var _0x512a9e = "<option value='default'>Pilih Ongkir</option>";
      for (_0x416e09 = 0; _0x416e09 < ongkirCOD.length; _0x416e09++) {
        _0x512a9e += "<option value=\"" + ongkirCOD[_0x416e09].harga + "\" name=\"" + ongkirCOD[_0x416e09].nama + "\">" + angkaToRp(ongkirCOD[_0x416e09].harga) + " (" + ongkirCOD[_0x416e09].nama + ")</option>";
      }
      $("#ongkos").html(_0x512a9e);
    } else {
      function _0x236b91(_0x5433bc) {
        var _0x50a0e9 = {
          kec: _0x50796c
        };
        _0x50a0e9.kurir = _0x5433bc;
        _0x50a0e9.asal = _0x52159e;
        _0x50a0e9.berat = _0xbad734;
        $.ajax({
          "type": "POST",
          "url": "https://simpeltoko.id/cek_ongkir.php",
          "data": _0x50a0e9,
          "success": function (_0x2e66e0) {
            json = JSON.parse(_0x2e66e0);
            results = json.rajaongkir.results;
            test = [];
            results.map((_0x87a50a, _0x8d48fb) => {
              _0x87a50a.costs.map((_0xcd69c3, _0x49414b) => {
                let _0x15f512 = _0xcd69c3.cost[0].value;
                let _0x369ccc = _0x87a50a.name.replace(/&/g, "N");
                let _0x125b43 = _0x87a50a.code.toUpperCase();
                let _0x4bfaa5 = angkaToRp(_0xcd69c3.cost[0].value) + " (" + _0x125b43 + " " + _0xcd69c3.service + ")";
                let _0xb940a8 = _0xcd69c3.service;
                let _0x1140cb = _0xcd69c3.cost[0].etd;
                $("#ongkos").append("<option value=\"" + _0x15f512 + "\" etd=\"" + _0x1140cb + "\" service=\"" + _0xb940a8 + "\" name=\"" + _0x369ccc + "\">" + _0x4bfaa5 + "</option>");
              });
            });
            simpleCart.update();
            simpleCart({
              "shippingCustom": function () {
                return $("#ongkos").find(":selected").val() / 1;
              }
            });
          }
        });
      }
      _0x59bb26.forEach(_0x4474bd => {
        _0x236b91(_0x4474bd);
      });
    }
    ;
  });
});
function simpleHarga() {
  $(".post-outer .simpel-data-produk").each(function () {
    var _0x4cdc16 = $(this).find(".data-harga").text();
    var _0x25c2e3 = $(this).find(".data-diskon").text();
    var _0x28f1d6 = $(this).find(".data-status").text();
    var _0xf6a824 = $(this).find(".title-pilihan-satu").text();
    var _0x270246 = $(this).find(".title-pilihan-dua").text();
    var _0x23016f = $(this).find(".data-pilihan-satu").text();
    var _0x175310 = $(this).find(".data-pilihan-dua").text();
    var _0x4c066b = $(this).find(".data-berat").text();
    if (formatNama(_0x28f1d6) == "off") {
      $(this).parents(".post-content").find(".beli-wrap").html("<a href='javascript:;' class='habis'>Habis</a>");
    }
    if (_0x4cdc16 === '') {} else {
      var _0x527a67 = Math.round(0 + _0x25c2e3);
      if (_0x527a67 < 100) {
        var _0x2a18e4 = Math.round(_0x4cdc16 * _0x527a67 / 100);
      } else {
        if (_0x527a67 > 101) {
          var _0x2a18e4 = _0x527a67;
        }
      }
      var _0x50f3c4 = _0x4cdc16 - _0x2a18e4;
      if (_0x527a67 != null && _0x527a67 != 0) {
        if (_0x527a67 < 100) {
          $(this).parents(".post-content").find(".harga").html(angkaToRp(_0x50f3c4));
          $(this).parents(".post-content").find(".harga-diskon").html(angkaToRp(_0x4cdc16));
          $(this).parents(".post-content").find(".angka-diskon").html(_0x527a67 + "%").parent().addClass("show");
        } else if (_0x527a67 > 101) {
          $(this).parents(".post-content").find(".harga").html(angkaToRp(_0x50f3c4));
          $(this).parents(".post-content").find(".harga-diskon").html(angkaToRp(_0x4cdc16));
          $(this).parents(".post-content").find(".angka-diskon").hide();
        }
      } else {
        $(this).parents(".post-content").find(".harga").html(angkaToRp(_0x50f3c4));
      }
    }
    if (_0x23016f == "off" && _0x175310 == "off") {
      $(this).parents(".post-content").find(".keterangan").html('');
    } else {
      if (_0x23016f == "off") {
        var _0x23c736 = _0x175310.split(", ");
        var _0x41b20c = _0x23c736[0];
        $(this).parents(".post-content").find(".keterangan").html(_0x270246 + " " + _0x41b20c).addClass("item_size");
      } else {
        if (_0x175310 == "off") {
          var _0x23c736 = _0x23016f.split(", ");
          var _0x41b20c = _0x23c736[0];
          $(this).parents(".post-content").find(".keterangan").html(_0xf6a824 + " " + _0x41b20c).addClass("item_size");
        } else {
          var _0x539df0 = _0x23016f.split(", ");
          var _0x4448d5 = _0x539df0[0];
          var _0x44b041 = _0x175310.split(", ");
          var _0x4e8c93 = _0x44b041[0];
          $(this).parents(".post-content").find(".keterangan").html(_0xf6a824 + " " + _0x4448d5 + ", " + _0x270246 + " " + _0x4e8c93).addClass("item_size");
        }
      }
    }
    $(this).parents(".post-content").find(".item_berat").html(_0x4c066b).hide();
    $(this).remove();
  });
}
$(".produk-terlaris-content .simpel-data-produk").each(function () {
  var _0x56eb59 = $(this).find(".data-harga").text();
  var _0x159d82 = $(this).find(".data-diskon").text();
  var _0x5b90ad = $(this).find(".data-status").text();
  var _0x126d13 = $(this).find(".title-pilihan-satu").text();
  var _0x170021 = $(this).find(".title-pilihan-dua").text();
  var _0x286409 = $(this).find(".data-pilihan-satu").text();
  var _0x3187ce = $(this).find(".data-pilihan-dua").text();
  var _0x2e6544 = $(this).find(".data-berat").text();
  if (formatNama(_0x5b90ad) == "off") {
    $(this).parents(".produk-terlaris-snippet").find(".beli-wrap").html("<a href='javascript:;' class='habis'>Habis</a>");
  }
  if (_0x56eb59 === '') {} else {
    var _0x121309 = Math.round(0 + _0x159d82);
    if (_0x121309 < 100) {
      var _0x5d62fb = Math.round(_0x56eb59 * _0x121309 / 100);
    } else {
      if (_0x121309 > 101) {
        var _0x5d62fb = _0x121309;
      }
    }
    var _0x18dc0a = _0x56eb59 - _0x5d62fb;
    if (_0x121309 != null && _0x121309 != 0) {
      if (_0x121309 < 100) {
        $(this).parents(".produk-terlaris-content").find(".harga").html(angkaToRp(_0x18dc0a));
        $(this).parents(".produk-terlaris-content").find(".harga-diskon").html(angkaToRp(_0x56eb59));
        $(this).parents(".produk-terlaris-content").find(".angka-diskon").html(_0x121309 + "%").parent().addClass("show");
      } else if (_0x121309 > 101) {
        $(this).parents(".produk-terlaris-content").find(".harga").html(angkaToRp(_0x18dc0a));
        $(this).parents(".produk-terlaris-content").find(".harga-diskon").html(angkaToRp(_0x56eb59));
        $(this).parents(".produk-terlaris-content").find(".angka-diskon").hide();
      }
    } else {
      $(this).parents(".produk-terlaris-content").find(".harga").html(angkaToRp(_0x18dc0a));
    }
  }
  if (_0x286409 == "off" && _0x3187ce == "off") {
    $(this).parents(".produk-terlaris-content").find(".keterangan").html('');
  } else {
    if (_0x286409 == "off") {
      var _0xa7a75a = _0x3187ce.split(", ");
      var _0x420db8 = _0xa7a75a[0];
      $(this).parents(".produk-terlaris-content").find(".keterangan").html(_0x170021 + " " + _0x420db8).addClass("item_size");
    } else {
      if (_0x3187ce == "off") {
        var _0xa7a75a = _0x286409.split(", ");
        var _0x420db8 = _0xa7a75a[0];
        $(this).parents(".produk-terlaris-content").find(".keterangan").html(_0x126d13 + " " + _0x420db8).addClass("item_size");
      } else {
        var _0x40fbfd = _0x286409.split(", ");
        var _0x3abd6e = _0x40fbfd[0];
        var _0x4fdf49 = _0x3187ce.split(", ");
        var _0x427eca = _0x4fdf49[0];
        $(this).parents(".produk-terlaris-content").find(".keterangan").html(_0x126d13 + " " + _0x3abd6e + ", " + _0x170021 + " " + _0x427eca).addClass("item_size");
      }
    }
  }
  $(this).parents(".produk-terlaris-content").find(".item_berat").html(_0x2e6544).hide();
  $(this).remove();
});
$(".post-content .post-body").each(function () {
  $(this).find(".remove_element").remove();
  $(this).find(".data_produk").hide();
  var _0x55852f = $(this).find(".data-status").text();
  if (formatNama(_0x55852f) == "off") {
    $(".menu-tombol-beli").append("<div class='stock' id='produk-habis' title='Maaf, produk ini sudah habis'></div>");
    $("#produk-habis").click(function () {
      $("#informasi").fadeIn();
      $("#informasi .info-write").text("Maaf, Produk ini sudah habis");
      return false;
    });
    $(".info-button").click(function () {
      $("#informasi").fadeOut();
      $("#informasi .info-write").text('');
      return false;
    });
  }
  $("#kotak-harga .harga-produk .item_price").each(function () {
    var _0x1131b6 = $(this).parents(".post-content").find(".data-harga").text();
    var _0x39e196 = $(this).parents(".post-content").find(".data-diskon").text();
    var _0x15bdc3 = Math.round(0 + _0x39e196);
    if (_0x15bdc3 < 100) {
      var _0x16bd23 = Math.round(_0x1131b6 * _0x39e196 / 100);
    } else {
      if (_0x15bdc3 >= 101) {
        var _0x16bd23 = _0x39e196;
      }
    }
    var _0x44cba0 = Math.round(_0x1131b6 - _0x16bd23);
    var _0x3960e5 = angkaToRp(_0x44cba0);
    var _0x475972 = angkaToRp(_0x1131b6);
    $(this).attr("data-normal-price", _0x1131b6);
    $(this).attr("data-discount", _0x15bdc3);
    $(this).attr("data-price", _0x44cba0);
    $(this).text(_0x3960e5);
    if (_0x15bdc3 != null && _0x15bdc3 != 0) {
      if (_0x15bdc3 < 100) {
        $(this).parents(".post-content").find(".harga-diskon").html(_0x475972).addClass("show");
        $(this).parents(".post-content").find(".angka-diskon").html(_0x15bdc3 + "%").parent().addClass("show");
      } else {
        if (_0x15bdc3 >= 101) {
          $(this).parents(".post-content").find(".harga-diskon").html(_0x475972).addClass("show");
          $(this).parents(".post-content").find(".harga-diskon").html(_0x475972).addClass("show");
        }
      }
    }
  });
  $(".simple-widget-detail").each(function () {
    var _0x20f56b = $(this).parents(".post-content").find(".title-pilihan-satu").text();
    var _0x3d432d = $(this).parents(".post-content").find(".data-pilihan-satu").text();
    if (formatNama(_0x3d432d) == "off") {
      $("#pilihan-1").remove();
    } else {
      var _0x103f81 = _0x3d432d.split(", ");
      var _0x3606b5 = '';
      for (a = 0; a < _0x103f81.length; a++) {
        _0x3606b5 += "<li>" + _0x103f81[a] + "</li>";
      }
      $(this).find("#pilihan-1 .title-pilihan-1").text(_0x20f56b);
      $(this).find(".opsi-pilihan-1").html(_0x3606b5);
    }
    var _0x584131 = $(this).parents(".post-content").find(".title-pilihan-dua").text();
    var _0x1259bc = $(this).parents(".post-content").find(".data-pilihan-dua").text();
    if (formatNama(_0x1259bc) == "off") {
      $("#pilihan-2").remove();
    } else {
      var _0x103f81 = _0x1259bc.split(", ");
      var _0x21c5db = '';
      for (a = 0; a < _0x103f81.length; a++) {
        _0x21c5db += "<li>" + _0x103f81[a] + "</li>";
      }
      $(this).find("#pilihan-2 .title-pilihan-2").text(_0x584131);
      $(this).find(".opsi-pilihan-2").html(_0x21c5db);
    }
  });
  $(".opsi-pilihan-1 li").each(function (_0x5d0746) {
    var _0x28460b = $(this).parents("#pilihan-1").find(".title-pilihan-1").text();
    var _0x1710f1 = $(this).html();
    var _0x2f5953 = _0x1710f1.split(":");
    if (_0x2f5953[1] == undefined) {
      var _0x3a3625 = $(this).parents(".post-content").find("#kotak-harga .harga-produk .item_price").attr("data-normal-price");
      var _0x4308dc = $(this).parents(".post-content").find(".data-berat").text();
    } else {
      if (_0x2f5953[1] == "off") {
        var _0x3a3625 = $(this).parents(".post-content").find("#kotak-harga .harga-produk .item_price").attr("data-normal-price");
        var _0x4308dc = $(this).parents(".post-content").find(".data-berat").text();
        $(this).attr("class", "pilihan-habis");
        $(this).attr("data-pilihan", _0x2f5953[1]);
        $(this).attr("title", "Maaf " + _0x28460b + " " + _0x2f5953[0] + " sudah habis, harap pilih yang lain");
      } else {
        if (_0x2f5953[1] != undefined && _0x2f5953[1] != "off") {
          var _0x3a3625 = _0x2f5953[1];
        }
      }
    }
    $(this).attr("data-normal-price", _0x3a3625);
    if (_0x2f5953[2] != undefined && formatNama(_0x2f5953[2]) == "off") {
      var _0x4308dc = $(this).parents(".post-content").find(".data-berat").text();
      $(this).attr("class", "pilihan-habis");
      $(this).attr("data-pilihan", _0x2f5953[2]);
      $(this).attr("title", "Maaf " + _0x28460b + " " + _0x2f5953[0] + " sudah habis, harap pilih yang lain");
    } else {
      if (_0x2f5953[2] != undefined && _0x2f5953[2] != "off") {
        var _0x4308dc = _0x2f5953[2];
      } else {
        if (_0x2f5953[2] == undefined) {
          var _0x4308dc = $(this).parents(".post-content").find(".data-berat").text();
        }
      }
    }
    $(this).attr("data-berat", _0x4308dc);
    $(this).html("<b class='hapus'>" + _0x28460b + " </b>" + _0x2f5953[0]);
  });
  $(".opsi-pilihan-2 li").each(function (_0x31e941) {
    var _0x54b8fd = $(this).parents("#pilihan-2").find(".title-pilihan-2").text();
    var _0x9db01c = $(this).html();
    var _0x4219f9 = _0x9db01c.split(":");
    if (_0x4219f9[1] == "off") {
      $(this).attr("class", "pilihan-habis");
      $(this).attr("data-pilihan", _0x4219f9[1]);
      $(this).attr("title", "Maaf " + _0x54b8fd + " " + _0x4219f9[0] + " sudah habis, harap pilih yang lain");
    }
    $(this).html("<b class='hapus'>" + _0x54b8fd + " </b>" + _0x4219f9[0]);
  });
  $(".opsi-pilihan-1 li").on("click", function () {
    var _0x54d690 = $(this).text();
    var _0x274e03 = $(this).attr("data-normal-price");
    var _0x165bea = $(this).attr("data-berat");
    $(this).parents(".opsi-pilihan-1").find("li").removeClass("item_size");
    $(this).addClass("item_size");
    $(".berat-inpost").html("<span class='item_berat hapus'>" + _0x165bea + "</span><span>" + formatBerat(_0x165bea) + "</span>");
    var _0x32b7f3 = $(this).parents(".post-body").find(".item_price").attr("data-discount");
    if (_0x274e03 != null && _0x274e03 != 0) {
      if (_0x32b7f3 != null && _0x32b7f3 != 0) {
        if (_0x32b7f3 < 100) {
          var _0xb87612 = Math.round(_0x274e03 - _0x274e03 * _0x32b7f3 / 100);
          $(this).parents(".post-body").find(".widget-harga-produk .belibeli-discount").html(_0x32b7f3 + "% OFF");
        } else {
          if (_0x32b7f3 >= 101) {
            var _0xb87612 = _0x274e03 - _0x32b7f3;
          }
        }
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x274e03);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0xb87612);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0xb87612));
        $(this).parents(".post-body").find(".widget-harga-produk .strike").text(angkaToRp(_0x274e03));
      } else {
        $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x274e03);
        $(this).parents(".post-body").find(".item_price").attr("data-price", _0x274e03);
        $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x274e03));
      }
    } else {
      $(this).parents(".post-body").find(".item_price").attr("data-normal-price", _0x274e03);
      $(this).parents(".post-body").find(".item_price").attr("data-price", _0x274e03);
      $(this).parents(".post-body").find(".item_price").text(angkaToRp(_0x274e03));
    }
    if ($(this).attr("data-pilihan") == "off") {
      $(this).removeClass("item_size");
      if ($(this).parents(".opsi-pilihan-1").find("li:first").attr("data-pilihan") != "off") {
        $(this).parents(".opsi-pilihan-1").find("li:first").trigger("click");
      }
      $("#informasi .info-write").text("Maaf " + _0x54d690 + " sudah habis, harap pilih yang lain");
      $("#informasi").fadeIn();
      $(".info-button").click(function () {
        $("#informasi").fadeOut();
        $("#informasi .info-write").text('');
        return false;
      });
    }
  });
  $(".opsi-pilihan-2 li").on("click", function () {
    var _0x39cfd2 = $(this).text();
    $(this).parents(".opsi-pilihan-2").find("li").removeClass("item_size");
    $(this).addClass("item_size");
    if ($(this).attr("data-pilihan") == "off") {
      $(this).removeClass("item_size");
      if ($(this).parents(".opsi-pilihan-2").find("li:first").attr("data-pilihan") != "off") {
        $(this).parents(".opsi-pilihan-2").find("li:first").trigger("click");
      }
      $("#informasi .info-write").text("Maaf " + _0x39cfd2 + " sudah habis, harap pilih yang lain");
      $("#informasi").fadeIn();
      $(".info-button").click(function () {
        $("#informasi").fadeOut();
        $("#informasi .info-write").text('');
        return false;
      });
    }
  });
  var _0x3ff591 = $(this).find(".data-berat").text();
  $(".berat-inpost").html("<span class='item_berat hapus'>" + _0x3ff591 + "</span><span>" + formatBerat(_0x3ff591) + "</span>");
  var _0x1c6fe7 = $(this).find(".data-jenis-produk").text();
  var _0x678ebe = formatNama(_0x1c6fe7);
  if (_0x678ebe == "digital") {
    $(".informasi-produk").find(".produk-inpost").text("Digital");
  } else if (_0x678ebe == "fisik") {
    $(".informasi-produk").find(".produk-inpost").text("Fisik");
  } else {
    $(".informasi-produk").find(".produk-inpost").text("Lainnya");
  }
});
$(document).ready(function () {
  $(".opsi-pilihan-1, .opsi-pilihan-2").each(function () {
    if ($(this).find("li:first").attr("data-pilihan") != "off") {
      $(this).find("li:first").trigger("click");
    }
  });
});
$(document).ready(function () {
  $(".menu-buka").click(function () {
    $(".kategori-dropdown").toggleClass("active");
  });
  $("a.tombol-bukatutup").click(function () {
    $(".background-transparent-box").slideToggle("fast");
    $(this).toggleClass("active");
    $("#kurir").val("default");
    $("#ongkos").html("<option value='default'>Pilih Ongkir</option>");
    $(".simpleCart_shipping").html("RpNaN");
    $("#totalpembayaran").html("RpNaN");
    $("#totalpembayaran").attr("data-normal-total", "NaN");
    $("#totalpembayaran").attr("data-total", "NaN");
    return false;
  });
  $(".view-cart").click(function () {
    $("#belanja,.simpleCart_items,.without-box,.batas-box").slideToggle("normal");
    $(this).toggleClass("active");
    $("#kurir").val("default");
    $("#ongkos").html("<option value='default'>Pilih Ongkir</option>");
    $(".simpleCart_shipping").html("RpNaN");
    $("#totalpembayaran").html("RpNaN");
    $("#totalpembayaran").attr("data-normal-total", "NaN");
    $("#totalpembayaran").attr("data-total", "NaN");
    return false;
  });
});
jQuery.fn.extend({
  "recentPost": function (_0x20c12d, _0x2809cf) {
    var _0x2a9bf4 = window.location.href;
    var _0x472b12 = new URL(_0x2a9bf4);
    var _0x28cf17 = _0x472b12.origin;
    return this.each(function () {
      var _0x182c0c = $(this);
      if (_0x20c12d == '') {
        var _0x4fbb3f = _0x28cf17 + "/feeds/posts/default?alt=json&orderby=published&max-results=20";
      } else {
        var _0x22ae36 = _0x20c12d.replace("&amp;", "&");
        var _0x4fbb3f = _0x28cf17 + "/feeds/posts/default/-/" + encodeURI(_0x22ae36) + "?alt=json&orderby=published&max-results=20";
      }
      $.ajax({
        "url": _0x4fbb3f,
        "type": "get",
        "dataType": "jsonp",
        "success": function (_0x2c4a36) {
          var _0x5cb418;
          var _0xcae9d0;
          var _0x582725;
          var _0x4d6f82;
          var _0x169bb8;
          var _0x5ac7b1 = '';
          var _0x1ec12a = _0x2c4a36.feed.entry;
          if (_0x1ec12a !== undefined) {
            var _0x57f4d9 = shuffle(_0x2c4a36.feed.entry);
            for (var _0x1fb103 = 0; _0x1fb103 < _0x2809cf; _0x1fb103++) {
              if (_0x57f4d9[_0x1fb103] != undefined) {
                var _0x2cbea5 = _0x57f4d9[_0x1fb103];
                var _0x4e13ac = _0x2cbea5.published.$t;
                var _0x439e61 = _0x2cbea5.thr$total ? +_0x2cbea5.thr$total.$t : 0;
                var _0x902627 = _0x2cbea5.media$thumbnail ? _0x2cbea5.media$thumbnail.url : "https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w480-h480-n-k-no-nu-rw/nomage%2B%25281%2529.png";
                var _0x1ed717 = _0x4e13ac.split("T")[0].split("-");
                var _0x4e13ac = _0x1ed717;
                var _0x9414eb = _0x2cbea5.author[0];
                var _0x156584 = _0x9414eb.gd$image.src;
                var _0x163683 = _0x9414eb.name.$t;
                var _0x53f5fb = _0x20c12d.replace("&amp;", "&");
                _0x902627 = (_0x902627 = _0x2cbea5.content && _0x902627 == "https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w480-h480-n-k-no-nu-rw/nomage%2B%25281%2529.png" ? (_0x1ed717 = /<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(_0x2cbea5.content.$t)) && _0x1ed717[3] ? _0x1ed717[3] : "https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w480-h480-n-k-no-nu-rw/nomage%2B%25281%2529.png" : _0x902627).replace(/.*?:\/\//g, "//").replace(/\/[w,s][0-9][0-9].*\//g, "/w300-h300-c-rw/").replace(/=s72-[w,c].*/g, "=w300-h300-c-rw");
                for (var _0x5e9e5b = 0; _0x5e9e5b < _0x57f4d9[_0x1fb103].link.length; _0x5e9e5b++) {
                  if (_0x57f4d9[_0x1fb103].link[_0x5e9e5b].rel == "alternate") {
                    _0x5cb418 = _0x57f4d9[_0x1fb103].link[_0x5e9e5b].href;
                    break;
                  }
                }
                _0xcae9d0 = _0x57f4d9[_0x1fb103].title.$t;
                if ("content" in _0x57f4d9[_0x1fb103]) {
                  _0x582725 = _0x57f4d9[_0x1fb103].content.$t;
                  var _0x447490 = /<td.class=.data-harga.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                  if (_0x447490 != null) {
                    _0x447490 = _0x447490[0].replace(/.*?:\/\//g, "//");
                    var _0x2fce57 = /<td.class=.data-diskon.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x2fce57 = _0x2fce57[0].replace(/.*?:\/\//g, "//");
                    var _0x3b0553 = /<td.class=.data-status.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x3b0553 = _0x3b0553[0].replace(/.*?:\/\//g, "//");
                    var _0x40d887 = /<td.class=.data-berat.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x40d887 = _0x40d887[0].replace(/.*?:\/\//g, "//");
                    var _0x41a0b2 = /<td.class=.title-pilihan-satu.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x41a0b2 = _0x41a0b2[0].replace(/.*?:\/\//g, "//");
                    var _0x110dae = /<td.class=.title-pilihan-dua.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x110dae = _0x110dae[0].replace(/.*?:\/\//g, "//");
                    var _0x201351 = /<td.class=.data-pilihan-satu.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x201351 = _0x201351[0].replace(/.*?:\/\//g, "//");
                    var _0x11c258 = /<td.class=.data-pilihan-dua.[\s\S]*?<\/td>/g.exec(_0x57f4d9[_0x1fb103].content.$t);
                    _0x11c258 = _0x11c258[0].replace(/.*?:\/\//g, "//");
                    _0x582725 = "<table><tbody><tr>" + _0x3b0553 + _0x447490 + _0x2fce57 + _0x40d887 + _0x41a0b2 + _0x201351 + _0x110dae + _0x11c258 + "</tr></tbody></table>";
                  } else {
                    _0x582725 = '';
                  }
                } else {
                  _0x582725 = '';
                }
                _0x4d6f82 = _0x57f4d9[_0x1fb103].id.$t.split("-");
                _0x169bb8 = _0x4d6f82[2];
                _0x5ac7b1 += "<article class=\"recent-label-container simpleCart_shelfItem\">";
                _0x5ac7b1 += "<div class=\"recent-label-wrap\">";
                _0x5ac7b1 += "<div class=\"img-thumbnail\">";
                _0x5ac7b1 += "<span class=\"angka-diskon\"></span>";
                _0x5ac7b1 += "<a area-label=\"" + _0xcae9d0.replace(/["']/g, "'") + "\" href=\"" + _0x5cb418 + "\" class=\"post-label-link\">";
                _0x5ac7b1 += "<img class=\"lazyload item_thumb\" data-src=\"" + _0x902627 + "\" alt=\"" + _0xcae9d0.replace(/["']/g, "'") + "\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAPSURBVAiZY+zt7c1kwAIALtACEvr8z1AAAAAASUVORK5CYII=\" width=\"400\" height=\"400\"/>";
                _0x5ac7b1 += "</a>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "<div class=\"post-summary-wrap\">";
                _0x5ac7b1 += "<h4 class=\"post-title item_name\"><a href=\"" + _0x5cb418 + "\">" + _0xcae9d0 + "</a></h4>";
                _0x5ac7b1 += "<div class=\"post-snippet\" data-postid=\"" + _0x169bb8 + "\">";
                _0x5ac7b1 += "<div class='harga-produk'>";
                _0x5ac7b1 += "<span class='harga-diskon'></span>";
                _0x5ac7b1 += "<span class='harga item_price'></span>";
                _0x5ac7b1 += "<span class='keterangan'></span>";
                _0x5ac7b1 += "<span class='item_berat'></span>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "<div class='tombol-detail-beli'>";
                _0x5ac7b1 += "<div class='lihat-detail'>";
                _0x5ac7b1 += "<div class='detail-wrap'>";
                _0x5ac7b1 += "<a href=\"" + _0x5cb418 + "\">Detail</a>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "<div class='beli-plus'>";
                _0x5ac7b1 += "<div class='beli-wrap'>";
                _0x5ac7b1 += "<a class='item_add' href='javascript:void(0);' title='Beli'><svg class='wa-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.000000 512.000000'><g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' stroke='none'><path d='M2085 4786 c-245 -49 -448 -189 -573 -397 -72 -119 -122 -278 -122 -388 l0 -48 -182 -5 c-212 -6 -268 -20 -380 -95 -103 -68 -168 -151 -208 -268 -15 -42 -67 -430 -185 -1376 -91 -725 -165 -1340 -165 -1366 1 -239 195 -468 435 -513 43 -8 387 -10 1189 -8 l1130 3 -43 28 c-68 45 -209 185 -272 270 -438 587 -295 1415 314 1826 136 91 289 155 467 193 106 23 354 28 445 10 27 -6 51 -9 52 -8 2 1 -22 200 -52 442 -36 290 -62 460 -75 499 -55 160 -171 276 -334 333 -63 22 -92 26 -252 30 l-181 5 -6 76 c-18 222 -146 456 -325 592 -80 61 -223 131 -312 154 -90 22 -277 28 -365 11z m323 -222 c92 -24 205 -90 276 -160 109 -108 166 -222 189 -375 l11 -79 103 0 103 0 0 -335 c0 -225 -4 -342 -11 -359 -28 -60 -122 -71 -170 -20 l-24 26 -3 344 -3 344 -639 0 -639 0 -3 -344 -3 -344 -24 -26 c-48 -51 -142 -40 -170 20 -7 17 -11 134 -11 359 l0 335 105 0 105 0 0 31 c0 55 32 173 65 244 90 186 275 323 480 354 72 11 188 4 263 -15z'></path><path d='M3543 2435 c-380 -69 -694 -340 -819 -709 -78 -227 -72 -497 16 -723 55 -144 124 -247 245 -368 123 -123 220 -187 367 -242 143 -54 215 -66 388 -66 136 0 167 3 255 26 310 83 558 286 697 572 277 572 -5 1251 -610 1469 -150 54 -375 71 -539 41z m240 -636 c46 -21 57 -56 57 -188 l0 -121 120 0 c66 0 130 -5 144 -11 60 -28 71 -122 20 -170 -24 -22 -34 -24 -154 -27 l-128 -4 -4 -128 c-3 -120 -5 -130 -27 -154 -48 -51 -142 -40 -170 20 -6 14 -11 78 -11 144 l0 120 -121 0 c-95 0 -127 4 -149 17 -55 32 -67 112 -26 160 24 28 27 28 158 33 l133 5 5 133 c5 131 5 134 33 158 31 26 80 32 120 13z'></path></g></svg></a>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "<div class=\"simple-data-produk\" style=\"display:none\">" + _0x582725 + "</div>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "</div>";
                _0x5ac7b1 += "</article>";
              }
            }
            _0x182c0c.html(_0x5ac7b1);
            _0x182c0c.find(".simple-data-produk").each(function () {
              var _0x48a1c4 = $(this).find(".data-harga").text();
              var _0x7f72be = $(this).find(".data-diskon").text();
              var _0x3f039e = $(this).find(".data-status").text();
              var _0x485f83 = $(this).find(".title-pilihan-satu").text();
              var _0x435833 = $(this).find(".title-pilihan-dua").text();
              var _0x11355a = $(this).find(".data-pilihan-satu").text();
              var _0x4a5b56 = $(this).find(".data-pilihan-dua").text();
              var _0x1e6995 = $(this).find(".data-berat").text();
              if (formatNama(_0x3f039e) == "off") {
                $(this).parents(".recent-label-container").find(".beli-wrap").html("<a href='javascript:;'>Habis</a>");
              }
              if (_0x48a1c4 === '') {
                $(this).parents(".recent-label-container").find(".post-snippet").remove();
              } else {
                var _0xc6a8d6 = Math.round(0 + _0x7f72be);
                if (_0xc6a8d6 < 100) {
                  var _0xd1dea8 = Math.round(_0x48a1c4 * _0xc6a8d6 / 100);
                } else {
                  if (_0xc6a8d6 > 101) {
                    var _0xd1dea8 = _0xc6a8d6;
                  }
                }
                var _0x55eef8 = _0x48a1c4 - _0xd1dea8;
                if (_0xc6a8d6 != null && _0xc6a8d6 != 0) {
                  if (_0xc6a8d6 < 100) {
                    $(this).parents(".recent-label-container").find(".harga").html(angkaToRp(_0x55eef8));
                    $(this).parents(".recent-label-container").find(".harga-diskon").html(angkaToRp(_0x48a1c4)).addClass("show");
                    $(this).parents(".recent-label-container").find(".angka-diskon").html(_0xc6a8d6 + "%").parent().addClass("show");
                  } else {
                    if (_0xc6a8d6 > 101) {
                      $(this).parents(".recent-label-container").find(".harga").html(angkaToRp(_0x55eef8));
                      $(this).parents(".recent-label-container").find(".harga-diskon").html(angkaToRp(_0x48a1c4)).addClass("show");
                    }
                  }
                } else {
                  $(this).parents(".recent-label-container").find(".harga").html(angkaToRp(_0x55eef8));
                }
                if (_0x11355a == "off" && _0x4a5b56 == "off") {
                  $(this).parents(".recent-label-container").find(".keterangan").html('');
                } else {
                  if (_0x11355a == "off") {
                    var _0x3192cf = _0x4a5b56.split(", ");
                    var _0x10d86a = _0x3192cf[0];
                    $(this).parents(".recent-label-container").find(".keterangan").html(_0x435833 + " " + _0x10d86a).addClass("item_size");
                  } else {
                    if (_0x4a5b56 == "off") {
                      var _0x3192cf = _0x11355a.split(", ");
                      var _0x10d86a = _0x3192cf[0];
                      $(this).parents(".recent-label-container").find(".keterangan").html(_0x485f83 + " " + _0x10d86a).addClass("item_size");
                    } else {
                      var _0x28e20d = _0x11355a.split(", ");
                      var _0x5619c0 = _0x28e20d[0];
                      var _0x3777bf = _0x4a5b56.split(", ");
                      var _0x390d4c = _0x3777bf[0];
                      $(this).parents(".recent-label-container").find(".keterangan").html(_0x485f83 + " " + _0x5619c0 + ", " + _0x435833 + " " + _0x390d4c).addClass("item_size");
                    }
                  }
                }
                $(this).parents(".recent-label-container").find(".item_berat").html(_0x1e6995).hide();
              }
              $(this).remove();
            });
            var _0x311cde = {
              items: 0x1,
              stagePadding: 0x0
            };
            var _0x3560b4 = {
              items: 0x2
            };
            var _0xa45c3c = {
              "items": 0x3
            };
            var _0x5de028 = {
              items: 0x4
            };
            var _0x17b7aa = {
              "0": _0x311cde,
              "340": _0x3560b4,
              "641": _0xa45c3c,
              "800": _0x5de028
            };
            var _0x5cd8bb = {
              stagePadding: 0x0,
              loop: false,
              autoplayHoverPause: false,
              autoplay: false,
              autoplayTimeout: 0xbb8,
              margin: 0x0,
              nav: true,
              navText: ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
              responsive: _0x17b7aa
            };
            _0x182c0c.owlCarousel(_0x5cd8bb);
          } else {
            _0x182c0c.html("<span>No result!</span>");
          }
        },
        "error": function () {
          _0x182c0c.html("<strong>Error Loading Feed!</strong>");
        }
      });
    });
  }
});
!function () {
  var _0x19b384 = window.location.href;
  var _0x1ffc56 = new URL(_0x19b384);
  var _0x5e06ed = _0x1ffc56.origin;
  if (null != document.querySelector("#simple-recent-post")) {
    var _0x176ff8 = document.querySelector("#simple-recent-post").querySelectorAll(".recent-post");
    for (i = 0; i < _0x176ff8.length; i++) {
      var _0x1516b4 = _0x176ff8[i].querySelector(".recent-title .title");
      var _0x4784fb = _0x1516b4;
      var _0x30ab45 = _0x1516b4.getAttribute("data-count");
      if (_0x1516b4) {
        _0x1516b4 = (_0x1516b4 = 0 < _0x1516b4.innerHTML.length ? "/-/" + _0x1516b4.innerHTML : '').replace("&amp;", "&");
        _0x1516b4 = _0x5e06ed.replace(/.*?:\/\//g, "//") + "/feeds/posts/default" + encodeURI(_0x1516b4) + "?alt=json&orderby=published&max-results=" + _0x30ab45;
        (r = new XMLHttpRequest()).x = i;
        r.open("GET", _0x1516b4, true);
        r.responseType = "json";
        r.onload = function () {
          var _0x410bce = this.x;
          if (200 === this.status) {
            var _0x4219be;
            var _0x3748e7;
            var _0x3a13ca = this.response;
            var _0x424adb = "#recent-item-content" + _0x410bce;
            var _0x309f89 = '';
            var _0x3a13ca = _0x3a13ca.feed;
            if (_0x424adb = document.querySelector(_0x424adb)) {
              if (_0x3a13ca.entry && 0 !== _0x3a13ca.entry.length) {
                var _0x4fe1a5 = _0x3a13ca.entry;
                for (var _0x5803fe = 0; _0x5803fe < _0x4fe1a5.length; ++_0x5803fe) {
                  var _0x30cec2;
                  var _0x100f10 = _0x4fe1a5[_0x5803fe];
                  var _0x2963d5 = false;
                  var _0x8b671e = _0x100f10.media$thumbnail ? _0x100f10.media$thumbnail.url : "https://blogger.googleusercontent.com/img/a/AVvXsEgZ26_6DOEGZrh8BHctHaEhdt49Y0b3YfXoxAqd-9TXrmxHZ7fNcH1LdFQOy66t-SRlZcOBgIZVLTs7upXSezPblNIlzrfuJLOJUVa_LH-sZcVPlgSIjSQMYuPKYZFtUzPiGZ1OWy7DXNdwYAc7C9fLxEAGg-l_SbBKWewKg_9vbm2rBgFwHq4kc6U0=s400-c-rw";
                  var _0x15bba5 = _0x100f10.title.$t;
                  var _0x2f214d = 0;
                  for (var _0x145956 = _0x100f10.link.length; _0x2f214d < _0x145956; ++_0x2f214d) {
                    if ("alternate" == (_0x4219be = _0x100f10.link[_0x2f214d]).rel) {
                      _0x2963d5 = _0x4219be.href;
                    }
                  }
                  if ("content" in _0x100f10) {
                    _0x3748e7 = _0x100f10.content.$t;
                    var _0x51daac = /<td.class=.data-harga.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                    if (_0x51daac != null) {
                      _0x51daac = _0x51daac[0].replace(/.*?:\/\//g, "//");
                      var _0x192ab4 = /<td.class=.data-diskon.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x192ab4 = _0x192ab4[0].replace(/.*?:\/\//g, "//");
                      var _0x35282a = /<td.class=.data-status.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x35282a = _0x35282a[0].replace(/.*?:\/\//g, "//");
                      var _0x3fac83 = /<td.class=.data-berat.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x3fac83 = _0x3fac83[0].replace(/.*?:\/\//g, "//");
                      var _0x460788 = /<td.class=.title-pilihan-satu.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x460788 = _0x460788[0].replace(/.*?:\/\//g, "//");
                      var _0x5d7df1 = /<td.class=.title-pilihan-dua.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x5d7df1 = _0x5d7df1[0].replace(/.*?:\/\//g, "//");
                      var _0x44f7e0 = /<td.class=.data-pilihan-satu.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x44f7e0 = _0x44f7e0[0].replace(/.*?:\/\//g, "//");
                      var _0x2403cc = /<td.class=.data-pilihan-dua.[\s\S]*?<\/td>/g.exec(_0x100f10.content.$t);
                      _0x2403cc = _0x2403cc[0].replace(/.*?:\/\//g, "//");
                      _0x3748e7 = "<table><tbody><tr>" + _0x35282a + _0x51daac + _0x192ab4 + _0x3fac83 + _0x460788 + _0x44f7e0 + _0x5d7df1 + _0x2403cc + "</tr></tbody></table>";
                    } else {
                      _0x3748e7 = '';
                    }
                    x = _0x100f10.id.$t;
                    x = x.split("-");
                    x = x[2];
                    _0x8b671e = /<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(_0x100f10.content.$t);
                    _0x8b671e = _0x8b671e[3].replace(/.*?:\/\//g, "//");
                    _0x8b671e = _0x8b671e.replace(/\/[w,s][0-9][0-9].*\//g, "/w300-h300-c-rw/");
                    _0x8b671e = _0x8b671e.replace(/=s72-[w,c].*/g, "=w300-h300-c-rw");
                  } else {
                    _0x3748e7 = '';
                    _0x8b671e = "https://blogger.googleusercontent.com/img/a/AVvXsEgZ26_6DOEGZrh8BHctHaEhdt49Y0b3YfXoxAqd-9TXrmxHZ7fNcH1LdFQOy66t-SRlZcOBgIZVLTs7upXSezPblNIlzrfuJLOJUVa_LH-sZcVPlgSIjSQMYuPKYZFtUzPiGZ1OWy7DXNdwYAc7C9fLxEAGg-l_SbBKWewKg_9vbm2rBgFwHq4kc6U0=s400-c-rw";
                  }
                  _0x309f89 += "<article class=\"recent-label-container simpleCart_shelfItem\">";
                  _0x309f89 += "<div class=\"recent-label-wrap\">";
                  _0x309f89 += "<div class=\"img-thumbnail\">";
                  _0x309f89 += "<span class=\"angka-diskon\"></span>";
                  _0x309f89 += "<a area-label=\"" + _0x15bba5.replace(/["']/g, "'") + "\" href=\"" + _0x2963d5 + "\" class=\"post-label-link\">";
                  _0x309f89 += "<img class=\"lazyload item_thumb\" data-src=\"" + _0x8b671e + "\" alt=\"" + _0x15bba5.replace(/["']/g, "'") + "\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAPSURBVAiZY+zt7c1kwAIALtACEvr8z1AAAAAASUVORK5CYII=\" width=\"400\" height=\"400\"/>";
                  _0x309f89 += "</a>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "<div class=\"post-summary-wrap\">";
                  _0x309f89 += "<h4 class=\"post-title item_name\"><a href=\"" + _0x2963d5 + "\">" + _0x15bba5 + "</a></h4>";
                  _0x309f89 += "<div class=\"post-snippet\" data-postid=\"" + x + "\">";
                  _0x309f89 += "<div class='harga-produk'>";
                  _0x309f89 += "<span class='harga-diskon'></span>";
                  _0x309f89 += "<span class='harga item_price'></span>";
                  _0x309f89 += "<span class='keterangan'></span>";
                  _0x309f89 += "<span class='item_berat'></span>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "<div class='tombol-detail-beli'>";
                  _0x309f89 += "<div class='lihat-detail'>";
                  _0x309f89 += "<div class='detail-wrap'>";
                  _0x309f89 += "<a href=\"" + _0x2963d5 + "\">Detail</a>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "<div class='beli-plus'>";
                  _0x309f89 += "<div class='beli-wrap'>";
                  _0x309f89 += "<a class='item_add' href='javascript:void(0);' title='Beli'><svg class='wa-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.000000 512.000000'><g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' stroke='none'><path d='M2085 4786 c-245 -49 -448 -189 -573 -397 -72 -119 -122 -278 -122 -388 l0 -48 -182 -5 c-212 -6 -268 -20 -380 -95 -103 -68 -168 -151 -208 -268 -15 -42 -67 -430 -185 -1376 -91 -725 -165 -1340 -165 -1366 1 -239 195 -468 435 -513 43 -8 387 -10 1189 -8 l1130 3 -43 28 c-68 45 -209 185 -272 270 -438 587 -295 1415 314 1826 136 91 289 155 467 193 106 23 354 28 445 10 27 -6 51 -9 52 -8 2 1 -22 200 -52 442 -36 290 -62 460 -75 499 -55 160 -171 276 -334 333 -63 22 -92 26 -252 30 l-181 5 -6 76 c-18 222 -146 456 -325 592 -80 61 -223 131 -312 154 -90 22 -277 28 -365 11z m323 -222 c92 -24 205 -90 276 -160 109 -108 166 -222 189 -375 l11 -79 103 0 103 0 0 -335 c0 -225 -4 -342 -11 -359 -28 -60 -122 -71 -170 -20 l-24 26 -3 344 -3 344 -639 0 -639 0 -3 -344 -3 -344 -24 -26 c-48 -51 -142 -40 -170 20 -7 17 -11 134 -11 359 l0 335 105 0 105 0 0 31 c0 55 32 173 65 244 90 186 275 323 480 354 72 11 188 4 263 -15z'></path><path d='M3543 2435 c-380 -69 -694 -340 -819 -709 -78 -227 -72 -497 16 -723 55 -144 124 -247 245 -368 123 -123 220 -187 367 -242 143 -54 215 -66 388 -66 136 0 167 3 255 26 310 83 558 286 697 572 277 572 -5 1251 -610 1469 -150 54 -375 71 -539 41z m240 -636 c46 -21 57 -56 57 -188 l0 -121 120 0 c66 0 130 -5 144 -11 60 -28 71 -122 20 -170 -24 -22 -34 -24 -154 -27 l-128 -4 -4 -128 c-3 -120 -5 -130 -27 -154 -48 -51 -142 -40 -170 20 -6 14 -11 78 -11 144 l0 120 -121 0 c-95 0 -127 4 -149 17 -55 32 -67 112 -26 160 24 28 27 28 158 33 l133 5 5 133 c5 131 5 134 33 158 31 26 80 32 120 13z'></path></g></svg></a>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "<div class=\"simple-data-produk\" style=\"display:none\">" + _0x3748e7 + "</div>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "</div>";
                  _0x309f89 += "</article>";
                }
                _0x424adb.innerHTML = "<div class='owl-carousel'>" + _0x309f89 + "</div>";
              } else {
                _0x424adb.innerHTML = "<p>No posts yet.</p>";
              }
            } else {
              console.log("Container not found.");
            }
            jQuery("#recent-item-content" + _0x410bce + " .simple-data-produk").each(function () {
              var _0x1c0c41 = jQuery(this).find(".data-harga").text();
              var _0x7fe8df = jQuery(this).find(".data-diskon").text();
              var _0x5c6d4d = jQuery(this).find(".data-status").text();
              var _0x3a9dc7 = jQuery(this).find(".title-pilihan-satu").text();
              var _0x279c3f = jQuery(this).find(".title-pilihan-dua").text();
              var _0x5673c4 = jQuery(this).find(".data-pilihan-satu").text();
              var _0x522eb1 = jQuery(this).find(".data-pilihan-dua").text();
              var _0x5a276c = jQuery(this).find(".data-berat").text();
              if (formatNama(_0x5c6d4d) == "off") {
                jQuery(this).parents(".recent-label-container").find(".beli-wrap").html("<a href='javascript:;'>Habis</a>");
              }
              if (_0x1c0c41 === '') {
                jQuery(this).parents(".recent-label-container").find(".post-snippet").remove();
              } else {
                var _0x21ff79 = Math.round(0 + _0x7fe8df);
                if (_0x21ff79 < 100) {
                  var _0x52d61e = Math.round(_0x1c0c41 * _0x21ff79 / 100);
                } else {
                  if (_0x21ff79 > 101) {
                    var _0x52d61e = _0x21ff79;
                  }
                }
                var _0x54ba2f = _0x1c0c41 - _0x52d61e;
                if (_0x21ff79 != null && _0x21ff79 != 0) {
                  if (_0x21ff79 < 100) {
                    jQuery(this).parents(".recent-label-container").find(".harga").html(angkaToRp(_0x54ba2f));
                    jQuery(this).parents(".recent-label-container").find(".harga-diskon").html(angkaToRp(_0x1c0c41)).addClass("show");
                    jQuery(this).parents(".recent-label-container").find(".angka-diskon").html(_0x21ff79 + "%").parent().addClass("show");
                  } else if (_0x21ff79 > 101) {
                    jQuery(this).parents(".recent-label-container").find(".harga").html(angkaToRp(_0x54ba2f));
                    jQuery(this).parents(".recent-label-container").find(".harga-diskon").html(angkaToRp(_0x1c0c41)).addClass("show");
                  }
                } else {
                  jQuery(this).parents(".recent-label-container").find(".harga").html(angkaToRp(_0x54ba2f));
                }
                if (_0x5673c4 == "off" && _0x522eb1 == "off") {
                  jQuery(this).parents(".recent-label-container").find(".keterangan").html('');
                } else {
                  if (_0x5673c4 == "off") {
                    var _0x50bc47 = _0x522eb1.split(", ");
                    var _0x4a1fbd = _0x50bc47[0];
                    jQuery(this).parents(".recent-label-container").find(".keterangan").html(_0x279c3f + " " + _0x4a1fbd).addClass("item_size");
                  } else {
                    if (_0x522eb1 == "off") {
                      var _0x50bc47 = _0x5673c4.split(", ");
                      var _0x4a1fbd = _0x50bc47[0];
                      jQuery(this).parents(".recent-label-container").find(".keterangan").html(_0x3a9dc7 + " " + _0x4a1fbd).addClass("item_size");
                    } else {
                      var _0x5f0c65 = _0x5673c4.split(", ");
                      var _0x497bb4 = _0x5f0c65[0];
                      var _0x97bd35 = _0x522eb1.split(", ");
                      var _0x269c90 = _0x97bd35[0];
                      jQuery(this).parents(".recent-label-container").find(".keterangan").html(_0x3a9dc7 + " " + _0x497bb4 + ", " + _0x279c3f + " " + _0x269c90).addClass("item_size");
                    }
                  }
                }
                jQuery(this).parents(".recent-label-container").find(".item_berat").html(_0x5a276c).hide();
              }
              jQuery(this).remove();
            });
            var _0x5b5eea = {
              items: 0x1,
              stagePadding: 0x0
            };
            var _0x231c9d = {
              items: 0x2
            };
            var _0xedac7 = {
              items: 0x3
            };
            var _0x403174 = {
              items: 0x4
            };
            var _0x3bcf25 = {
              items: 0x5
            };
            var _0x13c66a = {
              "0": _0x5b5eea,
              "361": _0x231c9d,
              "481": _0xedac7,
              "641": _0x403174,
              "901": _0x3bcf25
            };
            jQuery("#recent-item-content" + _0x410bce + " .owl-carousel").owlCarousel({
              "stagePadding": 0x0,
              "loop": false,
              "autoplayHoverPause": false,
              "autoplay": false,
              "autoplayTimeout": 0xbb8,
              "margin": 0x0,
              "nav": true,
              "navText": ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
              "responsive": _0x13c66a
            });
          }
        };
        r.send();
      }
    }
  }
}();
var a;
var rekening = '';
for (a = 0; a < bank.length; a++) {
  rekening += "<option value=\"" + bank[a].name + " - " + bank[a].norek + "\">" + bank[a].name + "</option>";
}
$("#pembayaran").append(rekening);
$(document).ready(function () {
  $(".buka-share").click(function () {
    $(".produk-share-icon").toggleClass("aktif");
  });
});
$(".post-body .separator").appendTo("#sliderpost-carousel .owl-carousel");
$(window).on("load", function () {
  var _0x42c28a = {
    items: 0x1,
    stagePadding: 0x0
  };
  var _0x30898b = {
    "0": _0x42c28a
  };
  $("#sliderpost-carousel .owl-carousel").owlCarousel({
    "stagePadding": 0x0,
    "loop": 0x1,
    "autoplayHoverPause": true,
    "autoplay": true,
    "autoplayTimeout": 0xbb8,
    "margin": 0xc,
    "nav": true,
    "navText": ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
    "responsive": _0x30898b
  });
});
$(".jumlah-produk input").on("keyup", function () {
  var _0x86e5cc = parseInt($(".jumlah-produk input").val());
  if (1 >= _0x86e5cc) {
    $(".jumlah-produk input").val(1);
    totalPrice(1);
  }
  $(this).parents(".jumlah-produk").attr("data-selected", _0x86e5cc);
});
$(".jumlah-produk .min").on("click", function () {
  var _0x32647b = parseInt($(".jumlah-produk input").val()) - 1;
  if (1 >= _0x32647b) {
    $(".jumlah-produk input").val(1);
    $(this).parents(".jumlah-produk").attr("data-selected", 1);
  } else {
    $(".jumlah-produk input").val(_0x32647b);
    $(this).parents(".jumlah-produk").attr("data-selected", _0x32647b);
  }
});
$(".jumlah-produk .plus").on("click", function () {
  var _0x4a2953 = parseInt($(".jumlah-produk input").val()) + 1;
  $(".jumlah-produk input").val(_0x4a2953);
  $(this).parents(".jumlah-produk").attr("data-selected", _0x4a2953);
});
!function () {
  var _0x280891 = document.querySelectorAll(".youtube");
  for (var _0x1fefb5 = 0; _0x1fefb5 < _0x280891.length; _0x1fefb5++) {
    var _0x5c54ad = "https://img.youtube.com/vi/" + _0x280891[_0x1fefb5].dataset.embed + "/sddefault.jpg";
    var _0x59138d = new Image();
    _0x59138d.src = _0x5c54ad;
    _0x59138d.addEventListener("load", void _0x280891[_0x1fefb5].appendChild(_0x59138d));
    _0x280891[_0x1fefb5].addEventListener("click", function () {
      var _0x1adf30 = document.createElement("iframe");
      _0x1adf30.setAttribute("frameborder", "0");
      _0x1adf30.setAttribute("allowfullscreen", '');
      _0x1adf30.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
      this.innerHTML = '';
      this.appendChild(_0x1adf30);
    });
  }
}();
