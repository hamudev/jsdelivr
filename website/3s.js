(function (_0x1e97c3, _0x43ac5c) {
  var _0x2d24c2 = _0x1e97c3();
  while (true) {
    try {
      var _0x456044 = -parseInt(_0x5557(2440, "Bajy")) / 1 * (-parseInt(_0x5557(1870, "kjnH")) / 2) + -parseInt(_0x5557(499, "7%vV")) / 3 * (parseInt(_0x5557(473, "5ff]")) / 4) + -parseInt(_0x5557(3693, "@UTl")) / 5 + parseInt(_0x5557(2816, "z!Jg")) / 6 + -parseInt(_0x5557(1724, "kKPG")) / 7 + parseInt(_0x5557(3853, "SkF&")) / 8 * (parseInt(_0x5557(3048, "YKB7")) / 9) + -parseInt(_0x5557(3831, "YKB7")) / 10;
      if (_0x456044 === _0x43ac5c) {
        break;
      } else {
        _0x2d24c2.push(_0x2d24c2.shift());
      }
    } catch (_0x5802c2) {
      _0x2d24c2.push(_0x2d24c2.shift());
    }
  }
})(_0xd317, 912387);
function waktu() {
  var _0x497631 = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = _0x497631.getHours();
  document.getElementById("menit").innerHTML = _0x497631.getMinutes();
  document.getElementById("detik").innerHTML = _0x497631.getSeconds();
}
window.setTimeout("waktu()", 1000);
function hari() {
  var _0x27f19f = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
  var _0x5349eb = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
  var _0x1ab92a = new Date();
  setTimeout("hari()", 0);
  document.getElementById("hasil").innerHTML = _0x27f19f[_0x1ab92a.getDay()] + ", " + _0x1ab92a.getDate() + " " + _0x5349eb[_0x1ab92a.getMonth()] + " " + _0x1ab92a.getFullYear();
}
window.setTimeout("hari()", 0);
function angkaToRp(_0x346b04) {
  var _0x271eb2 = '';
  var _0x54bf69 = _0x346b04.toString().split('').reverse().join('');
  for (var _0x14faf7 = 0; _0x14faf7 < _0x54bf69.length; _0x14faf7++) {
    if (_0x14faf7 % 3 == 0) {
      _0x271eb2 += _0x54bf69.substr(_0x14faf7, 3) + ".";
    }
  }
  return "Rp" + _0x271eb2.split('', _0x271eb2.length - 1).reverse().join('');
}
;
function formatBerat(_0x2e2d90) {
  if (_0x2e2d90 <= 0) {
    return "-";
  } else {
    if (_0x2e2d90 < 1000) {
      return _0x2e2d90 + " gr";
    } else {
      return _0x2e2d90 / 1000 + " Kg";
    }
  }
}
function _0x5557(_0x55ba55, _0x126e84) {
  var _0x393781 = _0xd317();
  _0x5557 = function (_0x29e100, _0x31fd55) {
    _0x29e100 = _0x29e100 - 407;
    var _0x408643 = _0x393781[_0x29e100];
    if (_0x5557.EPEEuS === undefined) {
      var _0x50edf6 = function (_0x4fe453) {
        var _0x5be4bc = '';
        var _0xa274f0 = '';
        var _0x2bc16e = _0x5be4bc + _0x50edf6;
        var _0xdc7f68 = 0;
        var _0x3f0d81;
        var _0x5720b8;
        for (var _0x33472d = 0; _0x5720b8 = _0x4fe453.charAt(_0x33472d++); ~_0x5720b8 && (_0x3f0d81 = _0xdc7f68 % 4 ? _0x3f0d81 * 64 + _0x5720b8 : _0x5720b8, _0xdc7f68++ % 4) ? _0x5be4bc += _0x2bc16e.charCodeAt(_0x33472d + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x3f0d81 >> (-2 * _0xdc7f68 & 6)) : _0xdc7f68 : 0) {
          _0x5720b8 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x5720b8);
        }
        var _0x2de4bd = 0;
        for (var _0x3cbbfe = _0x5be4bc.length; _0x2de4bd < _0x3cbbfe; _0x2de4bd++) {
          _0xa274f0 += "%" + ("00" + _0x5be4bc.charCodeAt(_0x2de4bd).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0xa274f0);
      };
      var _0x35bc2e = function (_0x313209, _0xe5a385) {
        var _0x52db6e = [];
        var _0x1fd0b6 = 0;
        var _0x5c3b4a;
        var _0x3d6b69 = '';
        _0x313209 = _0x50edf6(_0x313209);
        var _0x5773e1;
        for (_0x5773e1 = 0; _0x5773e1 < 256; _0x5773e1++) {
          _0x52db6e[_0x5773e1] = _0x5773e1;
        }
        for (_0x5773e1 = 0; _0x5773e1 < 256; _0x5773e1++) {
          _0x1fd0b6 = (_0x1fd0b6 + _0x52db6e[_0x5773e1] + _0xe5a385.charCodeAt(_0x5773e1 % _0xe5a385.length)) % 256;
          _0x5c3b4a = _0x52db6e[_0x5773e1];
          _0x52db6e[_0x5773e1] = _0x52db6e[_0x1fd0b6];
          _0x52db6e[_0x1fd0b6] = _0x5c3b4a;
        }
        _0x5773e1 = 0;
        _0x1fd0b6 = 0;
        for (var _0x296140 = 0; _0x296140 < _0x313209.length; _0x296140++) {
          _0x5773e1 = (_0x5773e1 + 1) % 256;
          _0x1fd0b6 = (_0x1fd0b6 + _0x52db6e[_0x5773e1]) % 256;
          _0x5c3b4a = _0x52db6e[_0x5773e1];
          _0x52db6e[_0x5773e1] = _0x52db6e[_0x1fd0b6];
          _0x52db6e[_0x1fd0b6] = _0x5c3b4a;
          _0x3d6b69 += String.fromCharCode(_0x313209.charCodeAt(_0x296140) ^ _0x52db6e[(_0x52db6e[_0x5773e1] + _0x52db6e[_0x1fd0b6]) % 256]);
        }
        return _0x3d6b69;
      };
      _0x5557.bTdbMt = _0x35bc2e;
      _0x55ba55 = arguments;
      _0x5557.EPEEuS = true;
    }
    var _0xcc85fd = _0x393781[0];
    var _0x4058ae = _0x29e100 + _0xcc85fd;
    var _0x10888b = _0x55ba55[_0x4058ae];
    if (!_0x10888b) {
      if (_0x5557.lwbqbH === undefined) {
        var _0x49f5de = function (_0x5ae172) {
          this.fKUCRA = _0x5ae172;
          this.NWIUdm = [1, 0, 0];
          this.OHoHCs = function () {
            return "newState";
          };
          this.GcshxC = "\\w+ *\\(\\) *{\\w+ *";
          this.DGitTb = "['|\"].+['|\"];? *}";
        };
        _0x49f5de.prototype.xLthHz = function () {
          var _0x1da531 = new RegExp(this.GcshxC + this.DGitTb);
          var _0x3628d1 = _0x1da531.test(this.OHoHCs.toString()) ? --this.NWIUdm[1] : --this.NWIUdm[0];
          return this.EMhvQt(_0x3628d1);
        };
        _0x49f5de.prototype.EMhvQt = function (_0x3739e6) {
          if (!Boolean(~_0x3739e6)) {
            return _0x3739e6;
          }
          return this.RAOHwH(this.fKUCRA);
        };
        _0x49f5de.prototype.RAOHwH = function (_0x15594e) {
          var _0x4c7b32 = 0;
          for (var _0x4c2882 = this.NWIUdm.length; _0x4c7b32 < _0x4c2882; _0x4c7b32++) {
            this.NWIUdm.push(Math.round(Math.random()));
            _0x4c2882 = this.NWIUdm.length;
          }
          return _0x15594e(this.NWIUdm[0]);
        };
        new _0x49f5de(_0x5557).xLthHz();
        _0x5557.lwbqbH = true;
      }
      _0x408643 = _0x5557.bTdbMt(_0x408643, _0x31fd55);
      _0x55ba55[_0x4058ae] = _0x408643;
    } else {
      _0x408643 = _0x10888b;
    }
    return _0x408643;
  };
  return _0x5557(_0x55ba55, _0x126e84);
}
;
function _0x1124df(_0x44d514, _0xf18a52, _0x5c8998, _0x1e8aa1) {
  return _0x5557(_0x44d514 - 0x3c2, _0x5c8998);
}
$(".keranjang-kosong").text("keranjang Anda masih kosong!");
(function (_0x9eb04a, _0x1dc22e) {
  var _0x5e4533 = typeof function () {};
  var _0x109a11 = function (_0x51613f) {
    var _0x40c2fe = {
      jQuery: "*"
    };
    var _0x30f85a = 0;
    var _0x299d86 = {};
    var _0x5a4a5e = _0x51613f || "simpleCart";
    var _0x5e7ced = {};
    var _0x2eb1bd = {};
    var _0x447ce1 = {};
    var _0x55e626 = _0x9eb04a.localStorage;
    var _0x4113fd = _0x9eb04a.console || {
      "msgs": [],
      "log": function (_0x2ac55b) {
        _0x4113fd.msgs.push(_0x2ac55b);
      }
    };
    var _0x11828a = {
      "IDR": {
        "code": "IDR",
        "symbol": "Rp",
        "name": "Rupiah Indonesia"
      }
    };
    var _0x12c2b9 = {
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
    var _0x36bb2d = function (_0x1297a4) {
      var _0x7df94e = function () {
        var _0x123f08 = true;
        return function (_0x3cf9e2, _0x3fd0d6) {
          var _0x51fff7 = _0x123f08 ? function () {
            if (_0x3fd0d6) {
              var _0x19648b = _0x3fd0d6.apply(_0x3cf9e2, arguments);
              _0x3fd0d6 = null;
              return _0x19648b;
            }
          } : function () {};
          _0x123f08 = false;
          return _0x51fff7;
        };
      }();
      var _0x16ec16 = _0x7df94e(this, function () {
        return _0x16ec16.toString().search("(((.+)+)+)+$").toString().constructor(_0x16ec16).search("(((.+)+)+)+$");
      });
      _0x16ec16();
      if (typeof _0x1297a4 === _0x5e4533) {
        return _0x36bb2d.ready(_0x1297a4);
      }
      if (typeof _0x1297a4 === "object") {
        return _0x36bb2d.extend(_0x12c2b9, _0x1297a4);
      }
    };
    var _0x155b7a;
    var _0x135a04;
    _0x36bb2d.extend = function (_0x65a68f, _0x116c14) {
      var _0x43ee6f;
      if (typeof _0x116c14 === "undefined") {
        _0x116c14 = _0x65a68f;
        _0x65a68f = _0x36bb2d;
      }
      for (_0x43ee6f in _0x116c14) {
        if (Object.prototype.hasOwnProperty.call(_0x116c14, _0x43ee6f)) {
          _0x65a68f[_0x43ee6f] = _0x116c14[_0x43ee6f];
        }
      }
      return _0x65a68f;
    };
    _0x36bb2d.extend({
      "copy": function (_0x5ccfee) {
        var _0x4fe05d = _0x109a11(_0x5ccfee);
        _0x4fe05d.init();
        return _0x4fe05d;
      }
    });
    _0x36bb2d.extend({
      "isReady": false,
      "add": function (_0x1f557a, _0x317e16) {
        var _0x72dda1 = _0x1f557a || {};
        var _0x2735c7 = new _0x36bb2d.Item(_0x72dda1);
        var _0xa5b69c = true;
        var _0x13289e = _0x317e16 === true ? _0x317e16 : false;
        var _0xd7e6d3;
        if (!_0x13289e) {
          _0xa5b69c = _0x36bb2d.trigger("beforeAdd", [_0x2735c7]);
          if (_0xa5b69c === false) {
            return false;
          }
        }
        _0xd7e6d3 = _0x36bb2d.has(_0x2735c7);
        if (_0xd7e6d3) {
          _0xd7e6d3.increment(_0x2735c7.quantity());
          _0x2735c7 = _0xd7e6d3;
        } else {
          _0x299d86[_0x2735c7.id()] = _0x2735c7;
        }
        _0x36bb2d.update();
        if (!_0x13289e) {
          _0x36bb2d.trigger("afterAdd", [_0x2735c7, typeof _0xd7e6d3 === "undefined"]);
        }
        return _0x2735c7;
      },
      "each": function (_0x2c56ee, _0x468c99) {
        var _0x99ad51;
        var _0x1b92d6 = 0;
        var _0x5b9ee0;
        var _0x5b7d43;
        var _0x2bb466;
        if (typeof _0x2c56ee === _0x5e4533) {
          _0x5b7d43 = _0x2c56ee;
          _0x2bb466 = _0x299d86;
        } else {
          if (typeof _0x468c99 === _0x5e4533) {
            _0x5b7d43 = _0x468c99;
            _0x2bb466 = _0x2c56ee;
          } else {
            return;
          }
        }
        for (_0x99ad51 in _0x2bb466) {
          if (Object.prototype.hasOwnProperty.call(_0x2bb466, _0x99ad51)) {
            _0x5b9ee0 = _0x5b7d43.call(_0x36bb2d, _0x2bb466[_0x99ad51], _0x1b92d6, _0x99ad51);
            if (_0x5b9ee0 === false) {
              return;
            }
            _0x1b92d6 += 1;
          }
        }
      },
      "find": function (_0x31ad67) {
        var _0x5788af = [];
        if (typeof _0x299d86[_0x31ad67] === "object") {
          return _0x299d86[_0x31ad67];
        }
        if (typeof _0x31ad67 === "object") {
          _0x36bb2d.each(function (_0x2e0b47) {
            var _0x242eac = true;
            _0x36bb2d.each(_0x31ad67, function (_0x2943df, _0x31544e, _0x1dcd65) {
              if (typeof _0x2943df === "string") {
                if (_0x2943df.match(/<=.*/)) {
                  _0x2943df = parseFloat(_0x2943df.replace("<=", ''));
                  if (!(_0x2e0b47.get(_0x1dcd65) && parseFloat(_0x2e0b47.get(_0x1dcd65)) <= _0x2943df)) {
                    _0x242eac = false;
                  }
                } else {
                  if (_0x2943df.match(/</)) {
                    _0x2943df = parseFloat(_0x2943df.replace("<", ''));
                    if (!(_0x2e0b47.get(_0x1dcd65) && parseFloat(_0x2e0b47.get(_0x1dcd65)) < _0x2943df)) {
                      _0x242eac = false;
                    }
                  } else {
                    if (_0x2943df.match(/>=/)) {
                      _0x2943df = parseFloat(_0x2943df.replace(">=", ''));
                      if (!(_0x2e0b47.get(_0x1dcd65) && parseFloat(_0x2e0b47.get(_0x1dcd65)) >= _0x2943df)) {
                        _0x242eac = false;
                      }
                    } else {
                      if (_0x2943df.match(/>/)) {
                        _0x2943df = parseFloat(_0x2943df.replace(">", ''));
                        if (!(_0x2e0b47.get(_0x1dcd65) && parseFloat(_0x2e0b47.get(_0x1dcd65)) > _0x2943df)) {
                          _0x242eac = false;
                        }
                      } else if (!(_0x2e0b47.get(_0x1dcd65) && _0x2e0b47.get(_0x1dcd65) === _0x2943df)) {
                        _0x242eac = false;
                      }
                    }
                  }
                }
              } else if (!(_0x2e0b47.get(_0x1dcd65) && _0x2e0b47.get(_0x1dcd65) === _0x2943df)) {
                _0x242eac = false;
              }
              return _0x242eac;
            });
            if (_0x242eac) {
              _0x5788af.push(_0x2e0b47);
            }
          });
          return _0x5788af;
        }
        if (typeof _0x31ad67 === "undefined") {
          _0x36bb2d.each(function (_0x33f5c5) {
            _0x5788af.push(_0x33f5c5);
          });
          return _0x5788af;
        }
        return _0x5788af;
      },
      "items": function () {
        return this.find();
      },
      "has": function (_0x23b978) {
        var _0x430c2e = false;
        _0x36bb2d.each(function (_0xd43b9a) {
          if (_0xd43b9a.equals(_0x23b978)) {
            _0x430c2e = _0xd43b9a;
          }
        });
        return _0x430c2e;
      },
      "empty": function () {
        var _0x18defd = {};
        _0x36bb2d.each(function (_0x4cc553) {
          if (_0x4cc553.remove(true) === false) {
            _0x18defd[_0x4cc553.id()] = _0x4cc553;
          }
        });
        _0x299d86 = _0x18defd;
        _0x36bb2d.update();
      },
      "quantity": function () {
        var _0xd9f3e3 = 0;
        _0x36bb2d.each(function (_0xb94c0d) {
          _0xd9f3e3 += _0xb94c0d.quantity();
        });
        return _0xd9f3e3;
      },
      "totalberat": function () {
        var _0x93d630 = 0;
        _0x36bb2d.each(function (_0x586ec0) {
          _0x93d630 += _0x586ec0.totalberat();
        });
        return _0x93d630;
      },
      "total": function () {
        var _0x56814f = 0;
        _0x36bb2d.each(function (_0x17745b) {
          _0x56814f += _0x17745b.total();
        });
        return _0x56814f;
      },
      "grandTotal": function () {
        return _0x36bb2d.total() + _0x36bb2d.tax() + _0x36bb2d.shipping();
      },
      "update": function () {
        _0x36bb2d.save();
        _0x36bb2d.trigger("update");
      },
      "init": function () {
        _0x36bb2d.load();
        _0x36bb2d.update();
        _0x36bb2d.ready();
      },
      "$": function (_0x25ade9) {
        return new _0x36bb2d.ELEMENT(_0x25ade9);
      },
      "$create": function (_0x3e5e14) {
        return _0x36bb2d.$(_0x1dc22e.createElement(_0x3e5e14));
      },
      "setupViewTool": function () {
        var _0x35963e;
        var _0x412c6b;
        var _0x5977c1 = _0x9eb04a;
        var _0x8927b0;
        for (_0x8927b0 in _0x40c2fe) {
          if (Object.prototype.hasOwnProperty.call(_0x40c2fe, _0x8927b0) && _0x9eb04a[_0x8927b0]) {
            _0x35963e = _0x40c2fe[_0x8927b0].replace("*", _0x8927b0).split(".");
            _0x412c6b = _0x35963e.shift();
            if (_0x412c6b) {
              _0x5977c1 = _0x5977c1[_0x412c6b];
            }
            if (typeof _0x5977c1 === "function") {
              _0x155b7a = _0x5977c1;
              _0x36bb2d.extend(_0x36bb2d.ELEMENT._, _0x5e7ced[_0x8927b0]);
              return;
            }
          }
        }
      },
      "ids": function () {
        var _0xcd28b9 = [];
        _0x36bb2d.each(function (_0x525410) {
          _0xcd28b9.push(_0x525410.id());
        });
        return _0xcd28b9;
      },
      "save": function () {
        _0x36bb2d.trigger("beforeSave");
        var _0x4d9372 = {};
        _0x36bb2d.each(function (_0x20853a) {
          _0x4d9372[_0x20853a.id()] = _0x36bb2d.extend(_0x20853a.fields(), _0x20853a.options());
        });
        _0x55e626.setItem(_0x5a4a5e + "_items", JSON.stringify(_0x4d9372));
        _0x36bb2d.trigger("afterSave");
      },
      "load": function () {
        _0x299d86 = {};
        var _0x4b3599 = _0x55e626.getItem(_0x5a4a5e + "_items");
        if (!_0x4b3599) {
          return;
        }
        try {
          _0x36bb2d.each(JSON.parse(_0x4b3599), function (_0x3ed89c) {
            _0x36bb2d.add(_0x3ed89c, true);
          });
        } catch (_0x30d289) {
          _0x36bb2d.error("Error Loading data: " + _0x30d289);
        }
        _0x36bb2d.trigger("load");
      },
      "ready": function (_0x8b8b9f) {
        if (typeof _0x8b8b9f === _0x5e4533) {
          if (_0x36bb2d.isReady) {
            _0x8b8b9f.call(_0x36bb2d);
          } else {
            _0x36bb2d.bind("ready", _0x8b8b9f);
          }
        } else if (typeof _0x8b8b9f === "undefined" && !_0x36bb2d.isReady) {
          _0x36bb2d.trigger("ready");
          _0x36bb2d.isReady = true;
        }
      },
      "error": function (_0x11a008) {
        var _0x52e253 = '';
        if (typeof _0x11a008 === "string") {
          _0x52e253 = _0x11a008;
        } else if (typeof _0x11a008 === "object" && typeof _0x11a008.message === "string") {
          _0x52e253 = _0x11a008.message;
        }
        try {
          _0x4113fd.log("simpleCart(js) Error: " + _0x52e253);
        } catch (_0xada67a) {}
        _0x36bb2d.trigger("error", [_0x11a008]);
      }
    });
    _0x36bb2d.extend({
      "tax": function () {
        var _0xfc274f = {
          UaeWH: function (_0x3eec1d, _0x57e0f8) {
            return _0x3eec1d !== _0x57e0f8;
          },
          HjvOv: "NgvjD",
          OfyYj: "tax"
        };
        _0xfc274f.TXqkC = "taxRate";
        _0xfc274f.sQfLW = function (_0x1600cd, _0x23631d) {
          return _0x1600cd * _0x23631d;
        };
        var _0x58ffec = _0x36bb2d.total();
        var _0x2740e9 = _0x36bb2d.taxRate() * _0x58ffec;
        _0x36bb2d.each(function (_0xbef5da) {
          if (_0xbef5da.get("tax")) {
            _0x2740e9 += _0xbef5da.get("tax");
          } else if (_0xbef5da.get(_0xfc274f.TXqkC)) {
            _0x2740e9 += _0xfc274f.sQfLW(_0xbef5da.get(_0xfc274f.TXqkC), _0xbef5da.total());
          }
        });
        return parseFloat(_0x2740e9);
      },
      "taxRate": function () {
        return 0x0 || 0;
      },
      "shipping": function (_0x31fbd7) {
        if (typeof _0x31fbd7 === _0x5e4533) {
          var _0x11a47f = {
            shippingCustom: _0x31fbd7
          };
          _0x36bb2d(_0x11a47f);
          return;
        }
        var _0x5ed64c = 0x0 * _0x36bb2d.quantity() + 0x0 * _0x36bb2d.total() + 0x0;
        if ("object" === _0x5e4533) {
          _0x5ed64c += null.call(_0x36bb2d);
        }
        _0x36bb2d.each(function (_0x3dd5d8) {
          _0x5ed64c += parseFloat(_0x3dd5d8.get("shipping") || 0);
        });
        return parseFloat(_0x5ed64c);
      }
    });
    _0x135a04 = {
      "attr": function (_0xa36b0d, _0x2edd4f) {
        return _0xa36b0d.get(_0x2edd4f.attr) || '';
      },
      "harga": function (_0xa977fc, _0x5b75b6) {
        return [_0x36bb2d.toCurrency(_0xa977fc.get(_0x5b75b6.attr) || 0)];
      },
      "currency": function (_0xf18076, _0x388c37) {
        return ["<span class='sub-total'>Sub Total </span> " + _0x36bb2d.toCurrency(_0xf18076.get(_0x388c37.attr) || 0)];
      },
      "jumlah": function (_0x48a8b7, _0x3b81a) {
        return [_0x48a8b7.get(_0x3b81a.attr)];
      },
      "ukuran": function (_0x360a84, _0x2f059d) {
        return [_0x360a84.get(_0x2f059d.attr)];
      },
      "link": function (_0x409726, _0x84f4a8) {
        return [_0x409726.get(_0x84f4a8.attr)];
      },
      "linkproduk": function (_0x5eeef3, _0x379a8b) {
        return [_0x5eeef3.get(_0x379a8b.attr)];
      },
      "decrement": function (_0xbdd9c, _0x56135e) {
        return ["<a href='javascript:;' class='" + _0x5a4a5e + "_decrement'>" + "<svg width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M19,13H5V11H19V13Z\"></path></svg>" + "</a>"];
      },
      "increment": function (_0x2dd935, _0x15fa4a) {
        return ["<a href='javascript:;' class='" + _0x5a4a5e + "_increment'>" + "<svg width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\"></path></svg>" + "</a>"];
      },
      "image": function (_0x1bc047, _0x1cdf9b) {
        return ["<a href='" + _0x1bc047.get(_0x1cdf9b.attr) + "'><img src='" + _0x1bc047.get(_0x1cdf9b.attr) + "'/></a>"];
      },
      "name": function (_0x4b198e, _0x5578e1) {
        return "<a href='" + _0x4b198e.get(_0x5578e1.attr) + "'>" + _0x5578e1.text + "</a>";
      },
      "input": function (_0x25c365, _0x23f2bb) {
        return ["<input type='text' value='" + _0x25c365.get(_0x23f2bb.attr) + "' class='" + _0x5a4a5e + "_input'/>"];
      },
      "berat": function (_0x27f1d0, _0x28e0fd) {
        return [_0x27f1d0.get(_0x28e0fd.attr)];
      },
      "totalberat": function (_0x240f9e, _0x42df41) {
        return "<span class='total-berat' data-berat='" + _0x240f9e.get(_0x42df41.attr) + "'>" + "berat " + formatBerat(_0x240f9e.get(_0x42df41.attr)) + "</span>";
      },
      "catatan": function (_0x14f1ff, _0x54c021) {
        return [_0x14f1ff.get(_0x54c021.attr)];
      },
      "remove": function (_0x3ee1b0, _0x2d3a11) {
        return ["<a href='javascript:;' class='" + _0x5a4a5e + "_remove'>" + "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M21.03,3L18,20.31C17.83,21.27 17,22 16,22H8C7,22 6.17,21.27 6,20.31L2.97,3H21.03M5.36,5L8,20H16L18.64,5H5.36M9,18V14H13V18H9M13,13.18L9.82,10L13,6.82L16.18,10L13,13.18Z\"></path></svg>" + "</a>"];
      }
    };
    function _0x4c8d43(_0x2a6657) {
      var _0x19e100 = _0x2a6657 || {};
      var _0x137238 = {
        attr: '',
        label: '',
        view: "attr",
        text: '',
        className: '',
        hide: false
      };
      return _0x36bb2d.extend(_0x137238, _0x19e100);
    }
    function _0xe7f1c2(_0x4f6aa1, _0x53e5c6) {
      var _0x41a3f7 = typeof _0x53e5c6.view === _0x5e4533 ? _0x53e5c6.view : typeof _0x53e5c6.view === "string" && typeof _0x135a04[_0x53e5c6.view] === _0x5e4533 ? _0x135a04[_0x53e5c6.view] : _0x135a04.attr;
      return _0x41a3f7.call(_0x36bb2d, _0x4f6aa1, _0x53e5c6);
    }
    _0x36bb2d.extend({
      "writeCart": function (_0x4b01d0) {
        var _0x4ab68b = "div".toLowerCase();
        var _0x2b77cd = _0x4ab68b === "table";
        var _0x8ecaa1 = _0x2b77cd ? "tr" : "div";
        var _0x499c99 = _0x2b77cd ? "th" : "div";
        var _0x1aebcf = _0x2b77cd ? "td" : "div";
        var _0x4be919 = _0x2b77cd ? "thead" : "div";
        var _0x17a73c = _0x36bb2d.$create(_0x4ab68b);
        var _0x309478 = _0x36bb2d.$create(_0x4be919);
        var _0x4d782c = _0x36bb2d.$create(_0x8ecaa1).addClass("headerRow");
        var _0x26fdbf = _0x36bb2d.$(_0x4b01d0);
        var _0x2f3fa1;
        var _0x1fe87b;
        var _0x6f1e5a;
        var _0xd329b8;
        var _0x460bfb;
        $(".ck-btn,.harga-total,#total-harga").hide();
        $(".keranjang-kosong").show();
        _0x26fdbf.html(" ").append(_0x17a73c);
        _0x17a73c.append("<div class=\"empty-cart\"><svg fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z\"></svg><span class=\"center\">Keranjang Anda masih kosong</span></div>");
        _0x309478.append(_0x4d782c);
        _0xd329b8 = 0;
        for (_0x460bfb = _0x12c2b9.cartColumns.length; _0xd329b8 < _0x460bfb; _0xd329b8 += 1) {
          _0x2f3fa1 = _0x4c8d43(_0x12c2b9.cartColumns[_0xd329b8]);
          _0x1fe87b = "item-" + (_0x2f3fa1.attr || _0x2f3fa1.view || _0x2f3fa1.label || _0x2f3fa1.text || "cell") + " " + _0x2f3fa1.className;
          _0x6f1e5a = _0x2f3fa1.label || '';
          _0x4d782c.append(_0x36bb2d.$create(_0x499c99).addClass(_0x1fe87b).html(_0x6f1e5a));
        }
        _0x36bb2d.each(function (_0x104780, _0x275ae5) {
          _0x36bb2d.createCartRow(_0x104780, _0x275ae5, _0x8ecaa1, _0x1aebcf, _0x17a73c);
        });
        return _0x17a73c;
      },
      "createCartRow": function (_0x2b295b, _0x3fce1d, _0x59b366, _0x43d72a, _0x19f646) {
        var _0x549c3e = _0x36bb2d.$create(_0x59b366).addClass("itemRow row-" + _0x3fce1d + " " + (_0x3fce1d % 2 ? "even" : "odd")).attr("id", "cartItem_" + _0x2b295b.id());
        var _0x4c7450;
        var _0x43aa30;
        var _0x3338f9;
        var _0x18e1ee;
        var _0x5f4002;
        var _0x13a281;
        $(".empty-cart,.keranjang-kosong").hide();
        $(".ck-btn,.harga-total,#total-harga").show();
        _0x19f646.append(_0x549c3e);
        _0x4c7450 = 0;
        for (_0x43aa30 = _0x12c2b9.cartColumns.length; _0x4c7450 < _0x43aa30; _0x4c7450 += 1) {
          _0x3338f9 = _0x4c8d43(_0x12c2b9.cartColumns[_0x4c7450]);
          _0x18e1ee = "item-" + (_0x3338f9.attr || (typeof _0x3338f9.view === "string" ? _0x3338f9.view : _0x3338f9.label || _0x3338f9.text || "cell")) + " " + _0x3338f9.className;
          _0x5f4002 = _0xe7f1c2(_0x2b295b, _0x3338f9);
          _0x13a281 = _0x36bb2d.$create(_0x43d72a).addClass(_0x18e1ee).html(_0x5f4002);
          _0x549c3e.append(_0x13a281);
          $(".item-size").each(function () {
            var _0x195a54 = $(this).text();
            if (_0x195a54 == '') {
              $(this).parents(".itemRow").find(".item-size").remove();
            }
          });
        }
        return _0x549c3e;
      }
    });
    _0x36bb2d.Item = function (_0x57faa3) {
      var _0x2291ce = {};
      var _0x176ee4 = this;
      if (typeof _0x57faa3 === "object") {
        _0x36bb2d.extend(_0x2291ce, _0x57faa3);
      }
      _0x30f85a += 1;
      _0x2291ce.id = _0x2291ce.id || "SCI-" + _0x30f85a;
      while (!(typeof _0x299d86[_0x2291ce.id] === "undefined")) {
        _0x30f85a += 1;
        _0x2291ce.id = "SCI-" + _0x30f85a;
      }
      function _0x58b0af() {
        if (typeof _0x2291ce.price === "string") {
          _0x2291ce.price = parseFloat(_0x2291ce.price.replace(_0x36bb2d.currency().decimal, ".").replace(/[^0-9]/g, ''));
        }
        if (isNaN(_0x2291ce.price)) {
          _0x2291ce.price = 0;
        }
        if (_0x2291ce.price < 0) {
          _0x2291ce.price = 0;
        }
        if (typeof _0x2291ce.quantity === "string") {
          _0x2291ce.quantity = parseInt(_0x2291ce.quantity.replace(_0x36bb2d.currency().delimiter, ''), 10);
        }
        if (isNaN(_0x2291ce.quantity)) {
          _0x2291ce.quantity = 1;
        }
        if (_0x2291ce.quantity <= 0) {
          _0x176ee4.remove();
        }
      }
      _0x176ee4.get = function (_0x1e47ba, _0x150ea7) {
        var _0x5b0bdd = !_0x150ea7;
        if (typeof _0x1e47ba === "undefined") {
          return _0x1e47ba;
        }
        return typeof _0x2291ce[_0x1e47ba] === _0x5e4533 ? _0x2291ce[_0x1e47ba].call(_0x176ee4) : !(typeof _0x2291ce[_0x1e47ba] === "undefined") ? _0x2291ce[_0x1e47ba] : typeof _0x176ee4[_0x1e47ba] === _0x5e4533 && _0x5b0bdd ? _0x176ee4[_0x1e47ba].call(_0x176ee4) : !(typeof _0x176ee4[_0x1e47ba] === "undefined") && _0x5b0bdd ? _0x176ee4[_0x1e47ba] : _0x2291ce[_0x1e47ba];
      };
      _0x176ee4.set = function (_0x1ec49b, _0x38e73d) {
        if (!(typeof _0x1ec49b === "undefined")) {
          _0x2291ce[_0x1ec49b.toLowerCase()] = _0x38e73d;
          if (_0x1ec49b.toLowerCase() === "price" || _0x1ec49b.toLowerCase() === "quantity") {
            _0x58b0af();
          }
        }
        return _0x176ee4;
      };
      _0x176ee4.equals = function (_0x4c428f) {
        for (var _0x492de5 in _0x2291ce) {
          if (Object.prototype.hasOwnProperty.call(_0x2291ce, _0x492de5)) {
            if (_0x492de5 !== "quantity" && _0x492de5 !== "id") {
              if (_0x4c428f.get(_0x492de5) !== _0x2291ce[_0x492de5]) {
                return false;
              }
            }
          }
        }
        return true;
      };
      _0x176ee4.options = function () {
        var _0x25a8b7 = {};
        _0x36bb2d.each(_0x2291ce, function (_0x57bb73, _0x18902b, _0x4b4070) {
          var _0x1609d6 = true;
          _0x36bb2d.each(_0x176ee4.reservedFields(), function (_0x3becc0) {
            if (_0x3becc0 === _0x4b4070) {
              _0x1609d6 = false;
            }
            return _0x1609d6;
          });
          if (_0x1609d6) {
            _0x25a8b7[_0x4b4070] = _0x176ee4.get(_0x4b4070);
          }
        });
        return _0x25a8b7;
      };
      _0x58b0af();
    };
    _0x36bb2d.Item._ = _0x36bb2d.Item.prototype = {
      "increment": function (_0x56edf2) {
        var _0x55da1f = _0x56edf2 || 1;
        _0x55da1f = parseInt(_0x55da1f, 10);
        this.quantity(this.quantity() + _0x55da1f);
        if (this.quantity() < 1) {
          this.remove();
          return null;
        }
        return this;
      },
      "decrement": function (_0x2cba13) {
        var _0x404c71 = _0x2cba13 || 1;
        return this.increment(-parseInt(_0x404c71, 10));
      },
      "remove": function (_0x2a6f0f) {
        var _0x3f2c32 = _0x36bb2d.trigger("beforeRemove", [_0x299d86[this.id()]]);
        if (_0x3f2c32 === false) {
          return false;
        }
        delete _0x299d86[this.id()];
        if (!_0x2a6f0f) {
          _0x36bb2d.update();
        }
        return null;
      },
      "reservedFields": function () {
        return ["quantity", "id", "item_number", "price", "name", "shipping", "tax", "taxRate"];
      },
      "fields": function () {
        var _0x5a8664 = {};
        var _0x29697a = this;
        _0x36bb2d.each(_0x29697a.reservedFields(), function (_0x40b9cd) {
          if (_0x29697a.get(_0x40b9cd)) {
            _0x5a8664[_0x40b9cd] = _0x29697a.get(_0x40b9cd);
          }
        });
        return _0x5a8664;
      },
      "quantity": function (_0x23c279) {
        return typeof _0x23c279 === "undefined" ? parseInt(this.get("quantity", true) || 1, 10) : this.set("quantity", _0x23c279);
      },
      "price": function (_0x27be75) {
        return typeof _0x27be75 === "undefined" ? parseFloat(this.get("price", true).toString().replace(_0x36bb2d.currency().symbol, '').replace(_0x36bb2d.currency().delimiter, '') || 1) : this.set("price", parseFloat(_0x27be75.toString().replace(_0x36bb2d.currency().symbol, '').replace(_0x36bb2d.currency().delimiter, '')));
      },
      "id": function () {
        return this.get("id", false);
      },
      "berat": function (_0x421cce) {
        return typeof _0x421cce === "undefined" ? parseInt(this.get("berat", true) || 1, 10) : this.set("berat", _0x421cce);
      },
      "totalberat": function () {
        return this.quantity() * this.berat();
      },
      "total": function () {
        return this.quantity() * this.price();
      }
    };
    _0x36bb2d.extend({
      "checkout": function (_0x3d7c74) {
        if (!_0x3d7c74.url) {
          return _0x36bb2d.error("URL required for SendForm Checkout");
        }
        var _0x25f5c0 = {
          "shipping": _0x36bb2d.shipping(),
          "totalBerat": _0x36bb2d.totalberat(),
          "grandTotal": _0x36bb2d.grandTotal(),
          "total": _0x36bb2d.total(),
          "itemCount": _0x36bb2d.find({}).length
        };
        var _0x1f1966 = _0x3d7c74.url;
        var _0x4c4acc = _0x3d7c74.method === "GET" ? "GET" : "POST";
        _0x36bb2d.each(function (_0x2692fa, _0x3d5947) {
          var _0xf9de41 = _0x3d5947 + 1;
          var _0x45e558 = [];
          var _0x424376;
          _0x25f5c0["item_thumb_" + _0xf9de41] = _0x2692fa.get("thumb");
          _0x25f5c0["item_name_" + _0xf9de41] = _0x2692fa.get("name");
          _0x25f5c0["item_quantity_" + _0xf9de41] = _0x2692fa.quantity();
          _0x25f5c0["item_price_" + _0xf9de41] = _0x2692fa.price();
          _0x25f5c0["item_berat_" + _0xf9de41] = _0x2692fa.berat();
          _0x36bb2d.each(_0x2692fa.options(), function (_0x42c804, _0x142936, _0x204c70) {
            _0x424376 = true;
            _0x36bb2d.each(_0x12c2b9.excludeFromCheckout, function (_0x4505a0) {
              if (_0x4505a0 === _0x204c70) {
                _0x424376 = false;
              }
            });
            if (_0x424376) {
              _0x45e558.push(_0x204c70 + ": " + _0x42c804);
            }
          });
          _0x25f5c0["item_options_" + _0xf9de41] = _0x45e558.join(", ");
        });
        if (_0x3d7c74.success) {
          _0x25f5c0["return"] = _0x3d7c74.success;
        }
        if (_0x3d7c74.cancel) {
          _0x25f5c0.cancel_return = _0x3d7c74.cancel;
        }
        if (_0x3d7c74.extra_data) {
          _0x25f5c0 = _0x36bb2d.extend(_0x25f5c0, _0x3d7c74.extra_data);
        }
        var _0x4549e1 = {
          type: _0x4c4acc,
          url: _0x1f1966,
          dataType: "json",
          data: _0x25f5c0,
          success: function (_0x5f2fe1) {}
        };
        $.ajax(_0x4549e1);
      }
    });
    _0x2eb1bd = {
      "bind": function (_0x2d89f5, _0x174991) {
        if (!(typeof _0x174991 === _0x5e4533)) {
          return this;
        }
        if (!this._events) {
          this._events = {};
        }
        var _0x382966 = _0x2d89f5.split(/ +/);
        _0x36bb2d.each(_0x382966, function (_0x5a9b49) {
          if (this._events[_0x5a9b49] === true) {
            _0x174991.apply(this);
          } else if (!(typeof this._events[_0x5a9b49] === "undefined")) {
            this._events[_0x5a9b49].push(_0x174991);
          } else {
            this._events[_0x5a9b49] = [_0x174991];
          }
        });
        return this;
      },
      "trigger": function (_0x3a349b, _0x6bcf88) {
        var _0x20d2b6 = true;
        var _0x36f6b9;
        var _0x403205;
        if (!this._events) {
          this._events = {};
        }
        if (!(typeof this._events[_0x3a349b] === "undefined") && typeof this._events[_0x3a349b][0] === _0x5e4533) {
          _0x36f6b9 = 0;
          for (_0x403205 = this._events[_0x3a349b].length; _0x36f6b9 < _0x403205; _0x36f6b9 += 1) {
            _0x20d2b6 = this._events[_0x3a349b][_0x36f6b9].apply(this, _0x6bcf88 || []);
          }
        }
        if (_0x20d2b6 === false) {
          return false;
        }
        return true;
      }
    };
    _0x2eb1bd.on = _0x2eb1bd.bind;
    _0x36bb2d.extend(_0x2eb1bd);
    _0x36bb2d.extend(_0x36bb2d.Item._, _0x2eb1bd);
    var _0x272ed4 = {
      beforeAdd: null,
      afterAdd: null,
      load: null,
      beforeSave: null,
      afterSave: null,
      update: null,
      ready: null
    };
    _0x272ed4.checkoutSuccess = null;
    _0x272ed4.checkoutFail = null;
    _0x272ed4.beforeCheckout = null;
    _0x272ed4.beforeRemove = null;
    _0x447ce1 = _0x272ed4;
    _0x36bb2d(_0x447ce1);
    _0x36bb2d.each(_0x447ce1, function (_0x220f27, _0xca7a4, _0x8f1b60) {
      _0x36bb2d.bind(_0x8f1b60, function () {
        if (typeof _0x12c2b9[_0x8f1b60] === _0x5e4533) {
          _0x12c2b9[_0x8f1b60].apply(this, arguments);
        }
      });
    });
    _0x36bb2d.bind("beforeAdd", function (_0xa4e602) {
      if (_0x36bb2d.has(_0xa4e602)) {
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
    _0x36bb2d.extend({
      "toCurrency": function (_0x1b61d0, _0x37349f) {
        var _0x5c116e = {
          symbol: "Rp",
          decimal: '',
          delimiter: ".",
          accuracy: 0x0,
          after: false
        };
        var _0x47f91f = parseFloat(_0x1b61d0);
        var _0xb3c0e = _0x37349f || {};
        var _0x46d69e = _0x36bb2d.extend(_0x36bb2d.extend(_0x5c116e, _0x36bb2d.currency()), _0xb3c0e);
        var _0x2df330 = _0x47f91f.toFixed(_0x46d69e.accuracy).split(".");
        var _0x57742c = _0x2df330[1];
        var _0x48fd49 = _0x2df330[0];
        _0x48fd49 = _0x36bb2d.chunk(_0x48fd49.reverse(), 3).join(_0x46d69e.delimiter.reverse()).reverse();
        return (!_0x46d69e.after ? _0x46d69e.symbol : '') + _0x48fd49 + (_0x57742c ? _0x46d69e.decimal + _0x57742c : '') + (_0x46d69e.after ? _0x46d69e.symbol : '');
      },
      "chunk": function (_0x2060e0, _0x11ba9c) {
        if (typeof _0x11ba9c === "undefined") {
          _0x11ba9c = 2;
        }
        var _0x32a42b = _0x2060e0.match(new RegExp(".{1," + _0x11ba9c + "}", "g"));
        return _0x32a42b || [];
      }
    });
    String.prototype.reverse = function () {
      return this.split('').reverse().join('');
    };
    _0x36bb2d.extend({
      "currency": function (_0x37d406) {
        if (typeof _0x37d406 === "string" && !(typeof _0x11828a[_0x37d406] === "undefined")) {
          _0x12c2b9.currency = _0x37d406;
        } else {
          if (typeof _0x37d406 === "object") {
            _0x11828a[_0x37d406.code] = _0x37d406;
            _0x12c2b9.currency = _0x37d406.code;
          } else {
            return _0x11828a.IDR;
          }
        }
      }
    });
    _0x36bb2d.extend({
      "bindOutlets": function (_0x23808d) {
        _0x36bb2d.each(_0x23808d, function (_0x283d33, _0x9173a, _0x826eb) {
          _0x36bb2d.bind("update", function () {
            _0x36bb2d.setOutlet("." + _0x5a4a5e + "_" + _0x826eb, _0x283d33);
          });
        });
      },
      "setOutlet": function (_0x372a8c, _0x2dc28d) {
        var _0x290c6e = _0x2dc28d.call(_0x36bb2d, _0x372a8c);
        if (typeof _0x290c6e === "object" && _0x290c6e.el) {
          _0x36bb2d.$(_0x372a8c).html(" ").append(_0x290c6e);
        } else if (!(typeof _0x290c6e === "undefined")) {
          _0x36bb2d.$(_0x372a8c).html(_0x290c6e);
        }
      },
      "bindInputs": function (_0x1d2170) {
        _0x36bb2d.each(_0x1d2170, function (_0xdf2c22) {
          _0x36bb2d.setInput("." + _0x5a4a5e + "_" + _0xdf2c22.selector, _0xdf2c22.event, _0xdf2c22.callback);
        });
      },
      "setInput": function (_0x497439, _0x23fdc9, _0x36ff62) {
        _0x36bb2d.$(_0x497439).live(_0x23fdc9, _0x36ff62);
      }
    });
    _0x36bb2d.ELEMENT = function (_0xcb78ad) {
      this.create(_0xcb78ad);
      this.selector = _0xcb78ad || null;
    };
    _0x36bb2d.extend(_0x5e7ced, {
      "jQuery": {
        "passthrough": function (_0x5a6f94, _0x1d4d0c) {
          if (typeof _0x1d4d0c === "undefined") {
            return this.el[_0x5a6f94]();
          }
          this.el[_0x5a6f94](_0x1d4d0c);
          return this;
        },
        "text": function (_0x1dce7d) {
          return this.passthrough("text", _0x1dce7d);
        },
        "html": function (_0x11565b) {
          return this.passthrough("html", _0x11565b);
        },
        "val": function (_0x1d06cc) {
          return this.passthrough("val", _0x1d06cc);
        },
        "append": function (_0x2bc91b) {
          var _0x10bf39 = _0x2bc91b.el || _0x2bc91b;
          this.el.append(_0x10bf39);
          return this;
        },
        "attr": function (_0x34e28d, _0x47a7dd) {
          if (typeof _0x47a7dd === "undefined") {
            return this.el.attr(_0x34e28d);
          }
          this.el.attr(_0x34e28d, _0x47a7dd);
          return this;
        },
        "remove": function () {
          this.el.remove();
          return this;
        },
        "addClass": function (_0x4afe56) {
          this.el.addClass(_0x4afe56);
          return this;
        },
        "removeClass": function (_0x555326) {
          this.el.removeClass(_0x555326);
          return this;
        },
        "each": function (_0x363b19) {
          return this.passthrough("each", _0x363b19);
        },
        "click": function (_0x4e73e2) {
          return this.passthrough("click", _0x4e73e2);
        },
        "live": function (_0x3a4df5, _0x456eb8) {
          _0x155b7a(_0x1dc22e).delegate(this.selector, _0x3a4df5, _0x456eb8);
          return this;
        },
        "parent": function () {
          return _0x36bb2d.$(this.el.parent());
        },
        "find": function (_0x300be2) {
          return _0x36bb2d.$(this.el.find(_0x300be2));
        },
        "closest": function (_0x58c87d) {
          return _0x36bb2d.$(this.el.closest(_0x58c87d));
        },
        "tag": function () {
          return this.el[0].tagName;
        },
        "descendants": function () {
          return _0x36bb2d.$(this.el.find("*"));
        },
        "submit": function () {
          return this.el.submit();
        },
        "create": function (_0x47a3e9) {
          this.el = _0x155b7a(_0x47a3e9);
        }
      }
    });
    _0x36bb2d.ELEMENT._ = _0x36bb2d.ELEMENT.prototype;
    _0x36bb2d.ready(_0x36bb2d.setupViewTool);
    _0x36bb2d.ready(function () {
      _0x36bb2d.bindOutlets({
        "total": function () {
          return "<span id='totalharga' data-harga='" + _0x36bb2d.total() + "'>" + _0x36bb2d.toCurrency(_0x36bb2d.total()) + "</span>";
        },
        "totalberat": function () {
          return "<span id='total-berat' data-berat='" + _0x36bb2d.totalberat() + "'>" + formatBerat(_0x36bb2d.totalberat()) + "</span>";
        },
        "quantity": function () {
          return _0x36bb2d.quantity();
        },
        "items": function (_0x42e0dc) {
          _0x36bb2d.writeCart(_0x42e0dc);
        },
        "tax": function () {
          return _0x36bb2d.toCurrency(_0x36bb2d.tax());
        },
        "taxRate": function () {
          return _0x36bb2d.taxRate().toFixed();
        },
        "shipping": function () {
          return _0x36bb2d.toCurrency(_0x36bb2d.shipping());
        },
        "grandTotal": function () {
          return ["<span id='totalpembayaran' class='totalpembayaran' data-normal-total='" + _0x36bb2d.grandTotal() + "' data-total='" + _0x36bb2d.grandTotal() + "'>" + _0x36bb2d.toCurrency(_0x36bb2d.grandTotal()) + "</span"];
        }
      });
      _0x36bb2d.bindInputs([{
        "selector": "checkout",
        "event": "click",
        "callback": function () {
          _0x36bb2d.checkout();
        }
      }, {
        "selector": "empty",
        "event": "click",
        "callback": function () {
          _0x36bb2d.empty();
        }
      }, {
        "selector": "increment",
        "event": "click",
        "callback": function () {
          _0x36bb2d.find(_0x36bb2d.$(this).closest(".itemRow").attr("id").split("_")[1]).increment();
          _0x36bb2d.update();
        }
      }, {
        "selector": "decrement",
        "event": "click",
        "callback": function () {
          _0x36bb2d.find(_0x36bb2d.$(this).closest(".itemRow").attr("id").split("_")[1]).decrement();
          _0x36bb2d.update();
        }
      }, {
        "selector": "remove",
        "event": "click",
        "callback": function () {
          _0x36bb2d.find(_0x36bb2d.$(this).closest(".itemRow").attr("id").split("_")[1]).remove();
        }
      }, {
        "selector": "input",
        "event": "change",
        "callback": function () {
          var _0x3326aa = _0x36bb2d.$(this);
          var _0x5427fc = _0x3326aa.parent();
          var _0x15bd37 = _0x5427fc.attr("class").split(" ");
          _0x36bb2d.each(_0x15bd37, function (_0x50d82b) {
            if (_0x50d82b.match(/item-.+/i)) {
              var _0x156179 = _0x50d82b.split("-")[1];
              _0x36bb2d.find(_0x5427fc.closest(".itemRow").attr("id").split("_")[1]).set(_0x156179, _0x3326aa.val());
              _0x36bb2d.update();
              return;
            }
          });
        }
      }, {
        "selector": "shelfItem .item_add",
        "event": "click",
        "callback": function () {
          var _0x44945b = _0x36bb2d.$(this);
          var _0x1aea09 = {};
          _0x44945b.closest("." + _0x5a4a5e + "_shelfItem").descendants().each(function (_0xb07a50, _0x5272f0) {
            var _0x5f3286 = _0x36bb2d.$(_0x5272f0);
            if (_0x5f3286.attr("class") && _0x5f3286.attr("class").match(/item_.+/) && !_0x5f3286.attr("class").match(/item_add/)) {
              _0x36bb2d.each(_0x5f3286.attr("class").split(" "), function (_0x96b86b) {
                var _0x19cee2;
                var _0x693233;
                var _0x5e7f5c;
                if (_0x96b86b.match(/item_.+/)) {
                  _0x19cee2 = _0x96b86b.split("_")[1];
                  _0x693233 = '';
                  switch (_0x5f3286.tag().toLowerCase()) {
                    case "input":
                    case "textarea":
                    case "select":
                      _0x5e7f5c = _0x5f3286.attr("type");
                      if (!_0x5e7f5c || (_0x5e7f5c.toLowerCase() === "checkbox" || _0x5e7f5c.toLowerCase() === "radio") && _0x5f3286.attr("checked") || _0x5e7f5c.toLowerCase() === "text" || _0x5e7f5c.toLowerCase() === "number") {
                        _0x693233 = _0x5f3286.val();
                      }
                      break;
                    case "img":
                      _0x693233 = _0x5f3286.attr("src");
                      break;
                    default:
                      _0x693233 = _0x5f3286.text();
                      break;
                  }
                  if (_0x693233 !== null && _0x693233 !== '') {
                    _0x1aea09[_0x19cee2.toLowerCase()] = _0x1aea09[_0x19cee2.toLowerCase()] ? _0x1aea09[_0x19cee2.toLowerCase()] + ", " + _0x693233 : _0x693233;
                  }
                }
              });
            }
          });
          _0x36bb2d.add(_0x1aea09);
        }
      }]);
    });
    if (_0x1dc22e.addEventListener) {
      _0x9eb04a.DOMContentLoaded = function () {
        _0x1dc22e.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
        _0x36bb2d.init();
      };
    } else {
      if (_0x1dc22e.attachEvent) {
        _0x9eb04a.DOMContentLoaded = function () {
          if (_0x1dc22e.readyState === "complete") {
            _0x1dc22e.detachEvent("onreadystatechange", DOMContentLoaded);
            _0x36bb2d.init();
          }
        };
      }
    }
    function _0xd022e2() {
      if (_0x36bb2d.isReady) {
        return;
      }
      try {
        _0x1dc22e.documentElement.doScroll("left");
      } catch (_0x50c9aa) {
        setTimeout(_0xd022e2, 1);
        return;
      }
      _0x36bb2d.init();
    }
    function _0xf148e8() {
      if (_0x1dc22e.readyState === "complete") {
        return setTimeout(_0x36bb2d.init, 1);
      }
      if (_0x1dc22e.addEventListener) {
        _0x1dc22e.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
        _0x9eb04a.addEventListener("load", _0x36bb2d.init, false);
      } else {
        if (_0x1dc22e.attachEvent) {
          _0x1dc22e.attachEvent("onreadystatechange", DOMContentLoaded);
          _0x9eb04a.attachEvent("onload", _0x36bb2d.init);
          var _0x3e86d9 = false;
          try {
            _0x3e86d9 = _0x9eb04a.frameElement === null;
          } catch (_0x260f9b) {}
          if (_0x1dc22e.documentElement.doScroll && _0x3e86d9) {
            _0xd022e2();
          }
        }
      }
    }
    _0xf148e8();
    return _0x36bb2d;
  };
  _0x9eb04a.simpleCart = _0x109a11();
})(window, document);
var JSON;
if (!JSON) {
  JSON = {};
}
(function () {
  function _0x3ddb08(_0x28234c) {
    /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.lastIndex = 0;
    return /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.test(_0x28234c) ? "\"" + _0x28234c.replace(/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, function (_0x1b92db) {
      var _0x58d344 = _0x10fb85[_0x1b92db];
      return typeof _0x58d344 === "string" ? _0x58d344 : "\\u" + ("0000" + _0x1b92db.charCodeAt(0).toString(16)).slice(-4);
    }) + "\"" : "\"" + _0x28234c + "\"";
  }
  function _0x47f9cd(_0x377203, _0x217167) {
    var _0x10659a;
    var _0x205453;
    var _0x5a6439;
    var _0x2362d2;
    var _0x1e6ffd = _0x1dcdfb;
    var _0xe8da96;
    var _0x21e055 = _0x217167[_0x377203];
    if (_0x21e055 && typeof _0x21e055 === "object" && typeof _0x21e055.toJSON === "function") {
      _0x21e055 = _0x21e055.toJSON(_0x377203);
    }
    if (typeof _0x62f75f === "function") {
      _0x21e055 = _0x62f75f.call(_0x217167, _0x377203, _0x21e055);
    }
    switch (typeof _0x21e055) {
      case "string":
        return _0x3ddb08(_0x21e055);
      case "number":
        return isFinite(_0x21e055) ? String(_0x21e055) : "null";
      case "boolean":
      case "null":
        return String(_0x21e055);
      case "object":
        if (!_0x21e055) {
          return "null";
        }
        _0x1dcdfb += _0x44f672;
        _0xe8da96 = [];
        if (Object.prototype.toString.apply(_0x21e055) === "[object Array]") {
          _0x2362d2 = _0x21e055.length;
          for (_0x10659a = 0; _0x10659a < _0x2362d2; _0x10659a += 1) {
            _0xe8da96[_0x10659a] = _0x47f9cd(_0x10659a, _0x21e055) || "null";
          }
          _0x5a6439 = _0xe8da96.length === 0 ? "[]" : _0x1dcdfb ? "[\n" + _0x1dcdfb + _0xe8da96.join(",\n" + _0x1dcdfb) + "\n" + _0x1e6ffd + "]" : "[" + _0xe8da96.join(",") + "]";
          _0x1dcdfb = _0x1e6ffd;
          return _0x5a6439;
        }
        if (_0x62f75f && typeof _0x62f75f === "object") {
          _0x2362d2 = _0x62f75f.length;
          for (_0x10659a = 0; _0x10659a < _0x2362d2; _0x10659a += 1) {
            if (typeof _0x62f75f[_0x10659a] === "string") {
              _0x205453 = _0x62f75f[_0x10659a];
              if (_0x5a6439 = _0x47f9cd(_0x205453, _0x21e055)) {
                _0xe8da96.push(_0x3ddb08(_0x205453) + (_0x1dcdfb ? ": " : ":") + _0x5a6439);
              }
            }
          }
        } else {
          for (_0x205453 in _0x21e055) if (Object.prototype.hasOwnProperty.call(_0x21e055, _0x205453) && (_0x5a6439 = _0x47f9cd(_0x205453, _0x21e055))) {
            _0xe8da96.push(_0x3ddb08(_0x205453) + (_0x1dcdfb ? ": " : ":") + _0x5a6439);
          }
        }
        _0x5a6439 = _0xe8da96.length === 0 ? "{}" : _0x1dcdfb ? "{\n" + _0x1dcdfb + _0xe8da96.join(",\n" + _0x1dcdfb) + "\n" + _0x1e6ffd + "}" : "{" + _0xe8da96.join(",") + "}";
        _0x1dcdfb = _0x1e6ffd;
        return _0x5a6439;
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
  var _0x10fb85 = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "\"": "\\\"",
    "\\": "\\\\"
  };
  var _0x1dcdfb;
  var _0x44f672;
  var _0x62f75f;
  if (typeof JSON.stringify !== "function") {
    JSON.stringify = function (_0xf00da0, _0x44fa7b, _0x1f2156) {
      var _0x1ce855;
      _0x44f672 = _0x1dcdfb = '';
      if (typeof _0x1f2156 === "number") {
        for (_0x1ce855 = 0; _0x1ce855 < _0x1f2156; _0x1ce855 += 1) {
          _0x44f672 += " ";
        }
      } else if (typeof _0x1f2156 === "string") {
        _0x44f672 = _0x1f2156;
      }
      if ((_0x62f75f = _0x44fa7b) && typeof _0x44fa7b !== "function" && (typeof _0x44fa7b !== "object" || typeof _0x44fa7b.length !== "number")) {
        throw Error("JSON.stringify");
      }
      var _0x567a10 = {
        '': _0xf00da0
      };
      return _0x47f9cd('', _0x567a10);
    };
  }
  if (typeof JSON.parse !== "function") {
    JSON.parse = function (_0x2402d8, _0x75c4c1) {
      var _0x24730c = {
        dexOv: function (_0x33e53a, _0x2a6695) {
          return _0x33e53a === _0x2a6695;
        },
        HpSBl: "yvPKC",
        GmnUW: "yfZab"
      };
      _0x24730c.Dxbmj = "0000";
      function _0x530994(_0x2dffa3, _0x543618) {
        var _0x57b5e3;
        var _0xcf9047;
        var _0x1da672 = _0x2dffa3[_0x543618];
        if (_0x1da672 && typeof _0x1da672 === "object") {
          for (_0x57b5e3 in _0x1da672) if (Object.prototype.hasOwnProperty.call(_0x1da672, _0x57b5e3)) {
            _0xcf9047 = _0x530994(_0x1da672, _0x57b5e3);
            if (_0xcf9047 !== undefined) {
              _0x1da672[_0x57b5e3] = _0xcf9047;
            } else {
              delete _0x1da672[_0x57b5e3];
            }
          }
        }
        return _0x75c4c1.call(_0x2dffa3, _0x543618, _0x1da672);
      }
      var _0x37813d;
      var _0x2402d8 = String(_0x2402d8);
      /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.lastIndex = 0;
      if (/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.test(_0x2402d8)) {
        _0x2402d8 = _0x2402d8.replace(/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, function (_0x5f3e70) {
          return "\\u" + (_0x24730c.Dxbmj + _0x5f3e70.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if (/^[\],:{}\s]*$/.test(_0x2402d8.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        _0x37813d = eval("(" + _0x2402d8 + ")");
        return typeof _0x75c4c1 === "function" ? _0x530994({
          '': _0x37813d
        }, '') : _0x37813d;
      }
      throw new SyntaxError("JSON.parse");
    };
  }
})();
(function () {
  var _0x152576 = function () {
    var _0x4cacd5 = true;
    return function (_0x55565d, _0x594add) {
      var _0x1e561d = _0x4cacd5 ? function () {
        if (_0x594add) {
          var _0x1ec0fe = _0x594add.apply(_0x55565d, arguments);
          _0x594add = null;
          return _0x1ec0fe;
        }
      } : function () {};
      _0x4cacd5 = false;
      return _0x1e561d;
    };
  }();
  var _0x4564b9 = _0x152576(this, function () {
    var _0x5190ab = function () {
      var _0x8efacd;
      try {
        _0x8efacd = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x7899a7) {
        _0x8efacd = window;
      }
      return _0x8efacd;
    };
    var _0x552b60 = _0x5190ab();
    var _0x3ea78f = _0x552b60.console = _0x552b60.console || {};
    var _0x2462fd = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0xc0af2f = 0; _0xc0af2f < _0x2462fd.length; _0xc0af2f++) {
      var _0x55965f = _0x152576.constructor.prototype.bind(_0x152576);
      var _0x3513d7 = _0x2462fd[_0xc0af2f];
      var _0x5f2f8b = _0x3ea78f[_0x3513d7] || _0x55965f;
      _0x55965f.__proto__ = _0x152576.bind(_0x152576);
      _0x55965f.toString = _0x5f2f8b.toString.bind(_0x5f2f8b);
      _0x3ea78f[_0x3513d7] = _0x55965f;
    }
  });
  _0x4564b9();
  if (!this.localStorage) {
    if (this.globalStorage) {
      try {
        this.localStorage = this.globalStorage;
      } catch (_0x258aca) {}
    } else {
      var _0x43e9fc = document.createElement("div");
      _0x43e9fc.style.display = "none";
      document.getElementsByTagName("head")[0].appendChild(_0x43e9fc);
      if (_0x43e9fc.addBehavior) {
        _0x43e9fc.addBehavior("#default#userdata");
        var _0x22fb94 = this.localStorage = {
          "length": 0x0,
          "setItem": function (_0x3261c1, _0x4c0285) {
            _0x43e9fc.load("localStorage");
            _0x3261c1 = _0x3261c1.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            if (!_0x43e9fc.getAttribute(_0x3261c1)) {
              this.length++;
            }
            _0x43e9fc.setAttribute(_0x3261c1, _0x4c0285);
            _0x43e9fc.save("localStorage");
          },
          "getItem": function (_0xa9be8a) {
            _0x43e9fc.load("localStorage");
            _0xa9be8a = _0xa9be8a.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            return _0x43e9fc.getAttribute(_0xa9be8a);
          },
          "removeItem": function (_0x3eaeff) {
            _0x43e9fc.load("localStorage");
            _0x3eaeff = _0x3eaeff.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
            _0x43e9fc.removeAttribute(_0x3eaeff);
            _0x43e9fc.save("localStorage");
            this.length = 0;
          },
          "clear": function () {
            _0x43e9fc.load("localStorage");
            for (var _0x25d068 = 0; attr = _0x43e9fc.XMLDocument.documentElement.attributes[_0x25d068++];) {
              _0x43e9fc.removeAttribute(attr.name);
            }
            _0x43e9fc.save("localStorage");
            this.length = 0;
          },
          "key": function (_0x14f9b8) {
            _0x43e9fc.load("localStorage");
            return _0x43e9fc.XMLDocument.documentElement.attributes[_0x14f9b8];
          }
        };
        _0x43e9fc.load("localStorage");
        _0x22fb94.length = _0x43e9fc.XMLDocument.documentElement.attributes.length;
      }
    }
  }
})();
var _0x1f9055 = {};
function _0xd317() {
  var _0x29c486 = ["WRZcHSo6a0e", "gttdOvhdMW", "WOlcG8kT", "W41xWP0IfW", "W7ldSSoiWPVdR8kPyZzWsq", "WOFdH8otWQpcIW", "WOacW5ZdJmo8", "qtzKEdG", "WPtcV8kA", "WQRdG2RdSCk5", "DbSYWQpdI8kCb24raW", "xSoQr1ldSG", "lgyDWP3dGt9iW6XspG", "tSoPc8ohF8kBW4eZWOHS", "WR9UW5tcUSoyWOiMBdP2", "B10kWR3dU8k1bdy4ua", "WRG4WP8zca", "r8oBW77dQ8kU", "W5pcJSk2gxjiW5hcStLu", "nmkvp3u", "WPdcLSkPcdff", "WOaegCoeBSoboq", "WQjSvsBcJG", "WPnYW4hdR8kyWPiAE2b0", "mCkvjq", "n1f6WRdcGSkDhNShaW", "ECkUWPjZWQW", "WRRdL8oTWQVdGG", "r18lWOhdSa", "kYddLgxdVa", "FSk4W5NcN1O", "pSoSWQalW7S", "imo9WQuPW6rsW7S", "CNOFW5bK", "fdpcHtSd", "C8kWW7rgjwXTW5RdGaa", "xmoknSo9Eq", "DSoty0ddVa", "rSoseCoawG", "WP3cSdVcK8oxjSoxaq", "jmoDiCoDW4vi", "WRyioa", "zmkXW7ngbW", "WO7cUmogjertACkq", "WQFdSCoqWRm", "wCoLimoBBW", "y2KWW4X5", "WOSmW7hdPSoQ", "W6L3WPCdoq", "WParp8klfa", "BXmYW7foW63cO8kMW7RcHa", "pcOzWOBdNdfkW6fmpG", "vZj2W5WfbG", "WQ3cVSoecNi", "d2XVWOjzr2qRWQfi", "gqpdH1hdRCoDW77dRXPd", "WPDeW5tdJ8k5", "nHpcGqKI", "WPFcImoYp0m", "qmklWPDb", "WQNdIIJcJCo8", "m8kDjN7cTqJcJ8oGphC", "WPLRW5/dR8kN", "oSkqwmkwWQldVW", "WRvOW5BdO8kbW50Jya", "W4LUWRfYzgpdKSoym24", "mXNcNJSMW4ZcGCkr", "WRywWReXkW", "W7v0W5pcTSkS", "zGjOxmkxW43cSW", "W7vZW5NcVCkuWODV", "W7RdNmkmW6tcUWJcJfqmbG", "uCozmConCq", "W5XJWRKxW4q", "eNf6WRpcGG", "ewlcTq1uu8kHWOq", "WQBdLh7dOSkG", "bxBcTs9mvW", "wCkXW5Lwpq", "WPTLCapcKSoV", "W6pdIthcG8kGlCk+W5ldJ8kI", "oXSkWRe", "rmkxWOThW5G", "WRxcO8keW7RcO1NcK1ukbq", "FCoLFNRdMq", "W67dJbBcH8oJWOWmW6pdOcy", "u8oMW6FdNG", "jI/cQs4K", "WRW1lCk+nq", "fwJcPq", "FmooW4xdV8kp", "W7pdHdBcLCok", "WR5WgCoKlq", "WObsW4VdSSkG", "W6ldIIBcVYO", "xZi/W41aaKDUW7qi", "v8o2W4BdOSk1", "etVdGhJdUa", "W4NcOmkIW4aRWPhdIa", "qSoZy3FdMW", "nbuSWP3dMa", "WRXjW5FdJSoX", "W4TYWOqoka", "W7DdWR0IW6JdQav/", "wsBdNGpdMa", "qHPxrGa", "WQZcICojchO", "WOLLW4xdPCkeW4yL", "Btn1uGC", "y8klWOyjWRlcR8orW5xcKW8", "WR7cN8ogjva", "dGJcGYi", "WRVcSCk7pbO", "WRGkca", "W5BdQbRcMqK", "WRtdQhtdRSk6", "j8kdESk9WRS", "WPL7l8oOkW", "u8o9W6BdL8kcfb4XqMy", "uCobW6BdT8kR", "EaNcNSk3CG", "WO7dQCogWRtcIW", "yaNdHbFdMa", "W6Cvm8kSW4m", "agVcMcna", "ltRcLHGI", "ySk7W5BcN0W", "nGRcQb0S", "W5ldRYBcOCoM", "ncRdNfxdMW", "DrTWtmkCW6y", "WPFcLmk2abXjW4tcPHCB", "W5ldQHJcMGi", "oJOdWP/dGW", "wCoTda", "cGddUxFdJa", "W6pdHX4", "W5RdVq7cNbhcGehdVCknwW", "WRVcSmk+iJ0", "FGZcGCkrAG", "ng3cQqHD", "Eq3cHmkZBSkk", "rSkxWOfE", "WOxcICkkgs1iW4VcSW", "mSosgSo8W7y", "W43dTshcNaq", "xmkbW7lcSuW", "WRZdUSoZkG", "uZtdLZxdJmoc", "qCkCW5lcSM8", "wI3dGZu", "W5PJW5/dI8ofoKSHWOBdQG", "WRddIZpcMSoHdmkVW47dImkV", "BSoBrxpdIq", "BZlcJCkcDW", "WRacWRq2kW", "WP/cUYZcPa", "lmkCsCkDWQNdQq", "CCkfW43cSgy", "WRfgp8kGeCo0sIb4W4u", "AJLJF8kF", "FSkXW75Kj2e", "qIxdLtxdJmostG", "W5tdQ8oaWPRcStZcKJpcTau", "WODqW4ZdSSoq", "WQxcP8k2maG", "WO7cT8ofaW", "WRqzka", "vmktWO9WWOC", "WQn+W5y", "WRGkcmoUwmowjf3dSJu", "CKz8WQFcISkldG", "WOFcH8k1gdPUW4m", "tmo+FNFdMa", "WRvSW5ZdS8kpW4eI", "yCo0EmkdWPCsm8ofexK", "W63cKN7dJSk1e8oQWPlcLmo/", "W4BdRqVcMWtdJuhdRa", "W4hdJYdcNSoj", "lcBcQGCe", "W63dVmkSgH4JW7FdVdO", "asNcHZCK", "WQZcPmocW5tdOSkXyYXTbW", "FCkWW6vOC2bTW57dUr0", "vYyQW40aeW", "WO3dTf3dNmky", "xSovW4xdSSkc", "fgVcGHPn", "W4ldQa7cLatdGq", "WQHqW5xdO8oo", "a8o5WOCzW5K", "W4xdLSoOx2GxWPxcSa4eWRVcICoZ", "FmkZWRDzWPC", "W7BdVX/cHGtdKuy", "WPFcG8k8cq", "lWJcIYm", "W7ZdIbhcPmoPsCkVWPa5", "WQvtW7VdHCk9", "w8krWOO", "WQmyW7THW4hcT1yQWQFdNW", "WRCSl8oPsq", "W4ZcUmkJW5CHWRi", "W4D0W7lcPmkG", "zaZdQWRdKa", "WRfLW4FdHCkgW5C7Cw9K", "W5DzWOqPlq", "WRyopCk7wmkGtYHIW5C", "rCk7W6BcR29DW6vXrY4", "zaz8xq", "WPVcOWJcUCoF", "W6NcJwVcMCoIlCk/W4tdImo0", "pCoZaCodW6u", "WOhdGfpdSa", "WOLpl8owja", "tCk/W7v6ah1X", "zmk9W7v0", "WQtdHCofWORcRW", "W5v0W4NcKmki", "zmo4W5RdUCkQ", "W6DdWQ4laG", "i8krmv/dUq", "yrvkE8kz", "W7xcP8o+", "FH3cMmk9Aa", "C8kKW6bMpw0", "WQddMgJdOmkYWQDSWQRcRmox", "W6dcQCoyWOFdTCk1CdbRxq", "W7ySWORcHSkVyeaExYW", "WR50W57dRa", "WRRcPJtcNCob", "uCk2W7FcUhHQ", "ChGqW71M", "WQezkmk6dCoU", "n8kNrSkRWP0", "W6HEWRjdC8kPc8o3WRNcPq", "W7lcU8kYycT1r8kmd8kr", "WQZdI3FdV8kz", "W7pcRSobWP7dRq", "mGyAWRxdRSoJFw85vW", "qhmiW4rT", "fxFcPc9uqq", "WRNdKftdVmkB", "kmkbrmk4WR4", "vmo/W7NdN8kVga", "W69moSkJW73dKtVdPCo0AG", "mr3cIG", "W6pcNmozWPFdGW", "WQvWW5/dQCkE", "grq7WOldGq", "WPNcTtZcUa", "lmkaq8ke", "caRdNeC", "WQjDW5hdK8oU", "W6DWW5xcKCk3", "qsbGA8kk", "fwFcSIy", "WR7cUCoym3a", "DCkmWPzgWPtdOmoPW5VcNKS", "WQ7dNhtdVCkf", "W7myyCoTmSk4bxWVWPO", "W6dcIZtcKSo7yq", "qchdIZhdLSodwq", "WQiyWRyk", "W7bIW4VcRG", "W67dJx/dUCkbWQrHWQVcPmkB", "W6PdW6nbymo1h8o/WQhcPq", "W4yqlSkvW7G", "ycVdGJBdOa", "WRtcICkihtq", "CKOhW5b5", "WPFcKG7cLCoU", "vY48W4Kvou4", "j1ZcIdP9", "W4xdVrRcMrhdH1a", "WO8NdCoKwa", "tmkiW5NcQhC", "n8kgjMtdObRcN8oOpa", "WO/dMmoHWRddPa", "W6zuWQyMfW", "WQTztttcMq", "y8kcW5BcP08", "wsuS", "W48SfmkfW7NdOd/dSSo1Aa", "mdJcTcyf", "W6BdKGhcISoU", "xWv9Cmky", "WOG9mmoNzW", "WO3cTmojfea", "AJDvvY4", "BSkijSoyW4HzhSkK", "W77dLd/cImo5CSkVW4JdJSkI", "fSkCsCkE", "WO3dKdVcNCo8", "WQ0kgSkahW", "tmo9EwFdNern", "WQSog8oZxmoylG", "W7GtnCkVW6i", "WOhdSmovWOpdTq", "WQFdSeZdHCkt", "WO5UxHpcSCoaySou", "gG7dN1/dQCkwW7ZdOH1e", "WO5/tJ/cRConCmoE", "vhKDWOpdGG", "bCoGWRldVsC7WQWVeG4", "WPSUW4tdLCoFCG", "W4ddGtZcPmou", "WPGnhmoiiqBdOmkPW7pcMq", "WPVdPYFcImo9", "mSknsmkAWQ3cV8o2mfVcIq", "W5hcS3mjW5imW4Sn", "yXnOqmkg", "WOJcUY/cVmoApSkzqW", "ySkMW7LGnG", "WR8cW4NdUSog", "ihlcQq9Z", "usJdHIpdKCoOxmoyW4q", "hXddNeddUSkFW77dOa", "WRpcICk7lGC", "vxq1W4fa", "m8o4WPSNW6C", "W6fgWQSXW7NdOW", "yqFcPSk7BCkhWPhdJde5", "W4hcQ8oidLzqhwxcO8ob", "W6yva8kGW5u", "W53dGt7cSCoq", "WPlcVCkcpW4", "tCo4fmoDFW", "g0XIWORcMa", "WQ0bW5hdUSoq", "WRRdJmo7WQdcTW", "W4inl8kNW7RdPY/cT8oFFq", "W6lcQCosWQK", "W6agimkZW6y", "WO7dSSowWRFcGq", "WRmndSoVCq", "WQldSmkAW43cUCoVBXTtAsNcRq", "Au17WRzqW7xcRSkJW6hcLG", "uK4vW5zp", "WO8CW7RdUmoT", "WPxcTSkWdWCOW73dOa", "WOhdQSoxWO/cRdlcKJhdVfG", "mSk/W79WpgDKWO8", "WPS9W4ddMCohCW", "WQiyW7POW5FcPeK4WQ3cVa", "WOnLwZq", "WRBcTSk3lWyVW7xdT2RdSq", "WQmDlSkQeCo0wa", "DG4EW5ub", "W7DFW4xcNCkz", "wIxdLdNdJG", "us51W4mg", "fXxcJceX", "WPZcTCopf0rxwCkcW795", "W57cUCkFW7Kx", "WORcSCk2WPu9WRhdGSoSiwG", "WPBdQ0e2W6y", "W7ldSHZcGCow", "WR7cT8k2auOJW7BdONhdSq", "A8oCiCoArG", "wCoGW6RdM8kTlWSSC2G", "smo9uxpdMG", "jgxcPaPk", "zmk1W7W", "WQm1W4tdI8oM", "hCkTW6hdM8kZgX5SiYa", "WP3cOcVcOG", "W7DjWPFcHmohdK8xxMG", "WPTRwdZcUa", "vshdKW", "u8kDWQ9iWOi", "WQ7dOmkNohiVFmkwcmki", "nSomnmoD", "AfmrW5vZ", "WPddMg3dGSkw", "WP1VW4FdOCowWP05zhv5", "W4fdemoxDulcUSkYW7tcJq", "WOuEeCk3pG", "W6nZW5pcVCkvWO5/", "qbjBEqu", "WOJdPmovWPZdPq", "WOpcVmoajf5uhgy", "WPmtWRWWgW", "D8kIW7vTjW", "WOddRSoaWQtcIG", "WORdMN7dGCku", "n0dcSWn5", "W6/cOSo+vYjUw8oBvCoC", "W7Sck8k1W7m", "DXjiFsG", "hCoJdCogySkb", "pmo1WQqEW6y", "omkkymkcWRG", "WRtcQ8k3dWqU", "WPhdS0y0W4K", "W4JdT8ofWORcUtVdNgFcPXy", "WRfLW4FdK8kpW5e5EMvJ", "aaNcOZCF", "WQrRyZpcIW", "vmoVmCoFxa", "xmoIE33dHW", "WP4ogCkMhq", "ca7dMLpdUW", "w8o+qLxdNq", "zGdcMmkvDG", "W5JcV8oytGK", "W5JcMCkiW54F", "d8o/lSo2W7i", "qmo8oNVdMa", "W6xdJrxcNW", "ju1HWRu", "W71yWQS1W7xdIqa", "WOPwbSorkG", "vCk8W6BdSh9TW69Z", "WP/cRSolbe0", "xYL7xJO", "bSo6W7pcPtqUW7z0rZO", "jCk5sCkxWRu", "fSovWQG4W40", "sNK3W5H3", "W7zZW4S", "W7hcVmofEIe", "jMZcMI1A", "W7RdLGBcV8oJsSk5", "dCkMgftdPq", "W5NcOSkRW5C7", "WRldJhVdUSkfWQf0WQy", "WRORAmo/W4dcV3JdJCk5iG", "WQb2W6RdJ8kc", "WP5XW4RdMCoi", "dhCuWPLdrbK2WQeS", "xYxdLW", "wIuSW4ug", "wdCpW74V", "AGJcGYi3W5lcHCkeWRBdPa", "ySk1W6rOmMCJW4ldPrO", "W5pdMbRcLmoB", "WRpcP8ofWPpdQSkYCq", "WRJcPc/cUSor", "u2NcVYLtxCkH", "W6BdJHVcPSo8tCkKWPKoW6O", "yXfN", "vCkFW750fW", "W6NcJSorWRldLG", "FXS5c8ocWQldPCogW4FdKa", "W6/dLHZcIG", "WR9MW4hdOCkhW5C", "WOPwdmouoXRdS8kVW6JcJq", "xJ1msZ0", "WRvOW5ldSSkPW50YCubK", "WRJdLmoBWQBcGG", "kLBcUcXU", "WQFcN8kkia0", "vZzyCdG", "WPlcICk3hJbnW4a", "W5FcN8oLWQxdGa", "WPbyfSoj", "F8k4Ct7cULFdISkPBZ0", "E2zdWOddJhaoWPTLFW", "WOBdNqNcGSog", "mmoQWQaNW65EW73dJrK", "W5dcPCk7W55UW7ddNSoPmdS", "W7ZdOGFcPmof", "iGCpWRRdUCoItga", "E8kXW6Dbphe+WOZcVeK", "WPNdKLy0W4q", "WOxcMrhcVSoo", "n8kjx8k8WRVdTCoskKhcLa", "WORcVtRcPW", "WQ5ucSoJpq", "WQZdP8oEWPJcVW", "wCkqWODBWOpcRCoaW5RcIW", "y3KmWOFcIdLcW7egpq", "WQSkd8oj", "WRddKJRcNmoi", "wWzYsSkv", "WOXweW", "fry6WRxdHa", "qXrOymk8", "WOjzW5JdQmkb", "WPW3hspcQmodpmotW543", "WRldICoCWQVdIG", "FuXHrmkqW6FcSq", "WOVcOmkRkYG", "W7OyWQCyiSozdSo6WQS", "WRqopCkHg8ourd13W5O", "WPVdJSo+WORcTG", "W6WooCkJqSkWdtP+W5K", "mxz3WQVcMa", "W63dMtJcGaC", "WQtcMrpcLmoujmorhWW7", "W7XFWQS1", "i8otj8odW4u", "WPvtcSom", "WPtcTs3cUCktBG", "DSkZWO9UWOG", "W7vUWPamea", "W7NcKSkJW74O", "WOFdSCooWOFdGW", "caFdHW", "WRrRW5ZdOCo1", "jSoXnSomW7e", "jqOKWOtdJW", "WPxcO8ksidy", "F8kAjmogW5vlemkAcNC", "v0OAWPRdMa", "FmoHaCo5yq", "WP5shmooiHpdRq", "rcjvqmky", "WRldKhZdG8k1", "WRGeWRzaBq", "WPThd8ocirBdLCkV", "WQzDW5xdSmoA", "W7BdIqhcOG", "WRWhgCoEvSoApKC", "W6fxW73cRmkN", "FvSYW4f3W57cGSkUW6dcLa", "W7TsWQS", "WR/cICktoI4", "xCoKwxddMW", "W5VcGSkNW484", "W6dcUSocWPFdPa", "WP5kW5hdJCkF", "WQ/dKdhcNmoOd8k6W4xdNSkN", "ACkFjMtdRGxdI8oWoge", "jf7dHmoHiSkUW5lcVh57", "W7FdLWlcJG", "wmkkWPbzWPxdUSkkWPVcLKi", "Df8RW7e", "FY9bB8kO", "WRddSf3dK8kF", "W7j1WOG4W6a", "DYrPwmkF", "WPVcN8onc0DaomodW7TK", "W4pdQYpcTCoa", "WQtdICoJWP7cQq", "WQVdVSkuWRNdP1ZdKabwxa", "WO/cOc3cUCovimonfba", "WQxdJmowWQVcJa", "smoVoSoHCW", "WOP9Ed/cPCkCm8kxWPfZ", "W5L5W7pcTCkX", "hSkvWOTDWOFcQ8kiW5ZcNL0", "WRjLW5/dQCkhW5SICxm", "WQldRxtdSmkG", "bKnOWOFcHq", "xYSSW4ul", "WPnzd8osoW", "qSo+W7VdRSkW", "WONdSuubW60", "WQ/dLNVdSa", "WQddNhBdUa", "W7FdU8oREZzOqComq8kx", "WPmhWRetgG", "j8oRWRqBW4C", "qCoZENe", "WR0geSoz", "oJ8EWQZdIa", "WPdcUZlcLmoD", "WQf7W5pdNa", "WQRdSeieW48", "WR3dPZNcMmo0", "AL80W7fnW6NcVa", "uSk8W6lcShnSW69VrIG", "y3WpWPRdNci", "gSoulCo6W6u", "WOZdPCoeWO/dTsdcMx/cPWC", "WRfLWP7dRmkdW5W9nIf4", "W65VWP4UnG", "mSoviSokW4i", "jX0AWRxdOq", "vCk+W7pcUhHQW4n1sYe", "WO/dOCoe", "aCoyWPuOW4u", "dSkUxmk3WPW", "jqqRWOpdPq", "W6CmomkI", "h8oAoSocW48", "W41JWOtcJCoLjHHSW4ldIq", "iSoaWQicW7i", "pdq7WQFdLW", "WQacW7WzkSoGdSoRWQpdRW", "nuPJWRlcH8kAh2O", "WQ4IW5NdQmo4", "WOldO8k5W5WQWQRdHSk/D3W", "pYpdH0xdIG", "W7tcJmk3W4ii", "WP4OW5pdK8onCG", "gwJcUdO", "qSonW73dJ8kI", "WOBdT1xdVmkc", "W7BdHX7cUG", "jfhcQX9i", "W5ZdOuKAWQa", "W7TbW6BcKCkh", "rIXGu8kC", "W5DHWQ0fW4y", "WPtdQMyfW6yrW5W", "W4zZW73cJCkK", "sGxdIaldHW", "WQhdShFdRmkG", "W6yglCkUW7NdQG", "WPhdLdRcNCog", "hwFcPs1q", "p8k2dexdVa", "W4RcQmkTW5CB", "WPuikmkDcW", "fCkamvRdRa", "WQ7cK8kTc2D+W4hcStCB", "WOhcUCoicW", "W4LyWRu1ea", "WQLCf8osgG", "AgaBWQJdUa", "puNcUWXx", "WR1VW4RdNSoP", "BXLZxr8", "W6BdLGxcLa", "WQn+W7GtWRJcQf4/WR3cOG", "WQNcPCkaiIK", "zH14wIO", "zgWvWP0", "hHddGv/dRa", "odSjWRddGG", "iLX+WQC", "isVdGeNdUa", "WQPgsHhcNW", "WOZcHtdcT8oU", "WRRdKMmuW6W", "WO7dL8owWR3cKa", "W7pdKuW", "WRddVIpcV8oL", "W7FcUSokWPRdPCkjBsT/vG", "yqFcUCkGAmklWO3dQa", "fx7cPsTwvG", "WRChW4pdQCoI", "W6xdHWdcS8oIumk5", "WRlcN8k/hHG", "aWRcKG0e", "WRpcUCksjXa", "tmoGCNhdNq", "qHLEuY8", "WRvCe8oiaG", "WQtdJ8oEWOlcTW", "mCkVzCkgWO4", "WOFcO8kGiWS", "xcpcQ8katq", "FeWNW7LgW7/cOmk1W6RcHa", "mCoHWRG8W7O", "WQNdULVdGCkA", "WR7cSSodfea", "CWX3xq", "WOPRwtG", "FdKrW4G", "hsBdOvldNa", "W6rxWR0JW6G", "W64ppCk1", "WPSPW5tdV8ofDLSZ", "e27cSdX5rG", "WQL9W6RdHSoP", "WOv5vt7cRq", "WPf6W5ddKSoZwai", "WPhcSsZcO8oAimob", "W5lcUmo/WPZdJa", "DmooW4JdNSkh", "WRtdQH/cR8o3", "WQBcPCoZWRhdTCkpyW", "W4r3WRGGnghdGSospMG", "WQebWRCCo8oJ", "WORdQuZdUmk2", "vmkNW5Xwiq", "jCkyr8k2WR4", "W4BdOmkncfHgC8kmW6mZ", "C8koWQTCWPC", "rmouwwZdVq", "k8kBkNhdOZ3cKSo3k3i", "WOVcPmkjbX4", "WPO+oCkQjG", "vIhdLdpdH8oiwCouW4/cLG", "bSkeo3NdOW", "bmkhhvJdJG", "hsq9W4Oma0rUWRyr", "WOhcTmoffeeisglcPCow", "BSo8qxRdGa", "WOFdJCobWP/cKG", "sSk4WPzVWPe", "WPpdUXJcKbhdKfa", "W7lcHmkkW48f", "W6/dVmoDWQtdPrhdJarauq", "lWJdM211WORdHSoqWRxcRW", "WQ0KemotBG", "WOtdPCodWP3dPxhcJghcRqa", "WOBcQmohcLS", "W5DaW5lcPCkt", "WOLhe8oooW", "WQneyHlcTa", "W7tdKHdcImoSWOSnWQ/cQJC", "W5pcRCoZWPCTWQVdNmo3icy", "s8orCu7dTa", "rSkDWQT9WRy", "WOBcLW7cG8oZ", "W7tdKtVcGCo9", "WOhcVCoxhuO", "tstcTcnirSkRW5PQEW", "WR7cKHNcT8o5", "WQ5NW4xdPCkd", "e3pcOZXDxmkXWO4", "WQFdQmoaWQ/dOfu", "WRX6W5xdKSoVwHrpn3e", "WQ0agmoixSobA1ZdOsO", "m8oDnmogW40", "sSoZDhW", "W43cVmo+xda", "uvS0W7vnW7FcRSkPW6NdGq", "FGjY", "W59AW5FcKCkd", "bCoPc8o+W6q", "W7pdHWNcKG", "fKZcPsHT", "ymkeW4hcS1G", "xSouq3ddQq", "W5ZcQSohWQ3dKa", "xvmOW4f0", "WRiqWOq5cq", "jSoQWRWIW6juW6W", "W7LxWRSZW6u", "WP81W5pdKmoCC00gWOBdQG", "WOFdOfqTW6OaW4OqWR7cHW", "dY3dGxNdIq", "l8kapwddVftdICk3mh4", "WPBcHmo0nKO", "WQlcGSkLjJ0", "WR9UW5ddSSkpW58ZENu", "W75YW4RcTW", "s8oZy3xcNLTnWRKqWQ0", "W4xdPJBcS8oE", "aJK3WRldVW", "WRVdKr7cQ8oK", "W7tcJCoGWRNdQa", "cJmAWOddGG", "WP/cUSk5aZ8", "kKjZW6GrW6hdVmk7WR/cNq", "W7hcVmo5WPxdTCk4", "EJPKrq", "W7/dMZ/cPCoA", "W47cTmkVW5S6WRFdMSo8", "vs82", "WQ8odSoyu8ob", "rCo9W6ddMCkK", "W6VcM3hdSCkfWQ1YWR7cR8oE", "W6CkpSkOWQZdRs7dUCoVEq", "emooemoMW58", "WRJdHstcMSkGk8k0W5xdM8kI", "jb5SWQpcImkudh0nbq", "wSkBW5pcR0e", "W7vbWOemma", "xrpdHJNdIW", "WQFcKSoKhKq", "WRyroCkHcW", "ydzdu8kt", "W7DeWQOXW7NdOYnQW7tdVG", "WOj5cSobaa", "aX0fWQddIG", "WO7cT8ohbL5Mg3RcVSot", "WRX6W4FdK8oKFWvkbx0", "gHldG1xdSmku", "vSo9W6ZdN8kV", "WRtcG8kqisa", "WQzYW5ZdTmkfW4yVzgq", "rSo8FMa", "WRm2W5RcQmkfW5y5", "WReOW5hdHSol", "WRxcSSk3cXKVW6W", "WRSvWQyw", "WQldIwRdSCkFWQW", "wCoCW4/dSCkK", "WRZcJSkdnbm", "mmk6B8k2WRG", "wmkHW6q", "W7RdIadcS8oTqmkZWO05W74", "WRP2W5ldM8o4", "WPm8fCopwa", "CqNcNSk1n8krWOBdOZuP", "WQZdP8oyWOddUmkXz2eIxG", "usutW7GP", "DmktW7vccq", "lCo9WRWBW4K", "WQxcUZhcTSob", "W61HWP4KW4m", "W7FcRCoF", "F8kAkmooW5rhhSoBb3W", "WQZdHspcImo5n8kPW47dJ8kP", "BmoyW5NdI8kM", "emomW5alW5JdVmovW5xcI0C", "W6ddHWxcO8o7WOGpWQtcSg4", "WRFdTYdcV8oM", "W4zCW6FcM8kY", "WPtcSCobea", "W7fHWOuLaa", "W7RdNK/dTmk8bmo6W55/WQS", "W7zZW4VcMmkaWP9+", "c8k8W6BcSsS+WQzUsIi", "WQSkbmoUrq", "WR3dKctcIq", "WR16W5tdGCo0tXq", "W5D+WRKGnwi", "WQJdR0VdHCkN", "W4H+WRaMiIpdG8owj3y", "WQ4AW5tdTmoI", "WRaFWQiphW", "nXmAWRu", "WRBdJXZcSmoJvSkNWP8+W7y", "W6zRWQuEfG", "jrVcHamJ", "W7dcP8o9yIPYv8olECoq", "WRtcKSkZgrS", "tSoMy2y", "oLrfWQFcUq", "rJdcOCk1Fq", "n8o6WR48W6zzW6RdKq", "W79wWR4mda", "WOpdRuupW7uwW5Cb", "WPvXW4NdPmkq", "W7hcVmokWOFcRmkQyZrQtW", "W57cQ8kVW40", "W7XxWRWFW7RdQdz0W77dOW", "aI3dHfxdSa", "WQhcVmkqccm", "W6pcVmozWP3dR8k6AZLN", "xLWWW5Hk", "WRVcOmotfLW", "DW3cMmk1BG", "WRODcmoe", "jf7dHmoNnSotW5dcR2f/", "ecFdQMldNq", "ydJcHmkDEq", "WPBdN2COW5u", "WPZdPCox", "CqvQWQpcN8kErNSnba", "CYy+W5KF", "W595W7xcI8kq", "WQOsn8kOkW", "WQZdLJ/cJ8oIk8kIW5hdNW", "WPdcGSk9lJnaW5BcPW", "WRfLW4C", "putcNZLk", "dXddMLFdUCkvW7S", "WRimlmkQeCoKAcf/W5O", "DCoTg8ovzSksW4C9WPm3", "WQPVf8oVcG", "WReldW", "Amk1W5Lgeq", "nrJcOqKO", "W74sgSkVW7O", "WPFdNrtcVCok", "tgRcUg5BxSkZWOr6jW", "vwKTW51I", "WOJdUqBcGu3dJKBdUSkwgW", "F0yYW6zcW4lcQ8kMW7RcGa", "WR/dJdhcIComkW", "W7PzWR09W6ZdQG", "uchdGt/dKmodFmorW4u", "WPtdIxVdNCkJ", "WRdcOCopawi", "WQ/dT8odWOZcUW", "W717W5hcJmkq", "rmo6hSomAq", "B10pW6O", "W6BcPmokWQBdKq", "sH5erGe", "W5PVW7VcQ8k3", "r8kRW7FcIx9JW6vYvZK", "WQ3dTmobWQe", "k8khzSkGWOpdLq", "sSo4hSoEAq", "WOZdQKC", "pSk9z8kWWOe", "WOFcQ1KdW6SaW40BWRNdNa", "W4f+WRC9jMRdKSoqjG", "W5xcM8okFqu", "W4ullCkRW5O", "u8kwWPfhWO0", "y8k9W7zufW", "WO5ylmotprVdR8kN", "CCk4W79WnNP3", "vmkrWRDkWPtcR8ojW5G", "tSoRDMBdKKy", "cvzMWQFcH8kziNShhq", "WPVcUCoAeW", "W6tdKbtcH8oJWOGNWQ3cU3C", "WPlcQSole11bfMxcQq", "WPZdNgZdSCkFWRXZ", "E1pcH3e", "W4JdJsVcNSoK", "WRxcN8kfhai", "v8ofcmomtG", "WQGzW53dNCom", "W5lcVI/cTW", "CMyHW6Xe", "irLMW7DpW7ZcVmk0WRpdHG", "uYddGW", "W7BcUSoeWPNdGSk1yY1Dvq", "W6tdGX3cIG", "WRP0W7FdUCkf", "AKP+WRBcGSkqbs8ueq", "WPFdQN/dNmk9", "W5rWWQqdoq", "WRD0W4FdSG", "xuykW6bs", "WOJcLmkPobu", "W5HzWQ40W6JdOG", "WP1VsJZcVmocDa", "ySkmW5tcSxi", "mSkjwmkqWQq", "rchdLqddG8ottSoq", "W6hcO8oZzYbUxCoEuSkd", "g8oNW6JdImkMhviNAhO", "FdmnW5G3", "W47dNHdcSYC", "hc/dGItdH8ouxmoBW4BcGW", "WO7dOrPpWQ5eWOGeW7/cGG", "W4rVWQa9", "eraxWQxdTW", "F1OvWOldQG", "WRtcG8kBkdi", "s2ypWOpdJtnsW6XLlq", "wmk6W4ZcJe8", "W43cPmk+W5KVWR3dIW", "jHJcGGOXW5VcISkeWP/cRW", "zrRcHCkIrCklWOC", "hK94WO3cNq", "WQWhfContCoCjvq", "WR7dJt7cNW", "WOZdIwldOmkP", "cCkGW6JcHmo9uXSQDZC", "CstcU8kvEa", "ibOhWQtdVCoIvN4", "p2hcMrHa", "W7pcO8o1kG", "xYxdLtFdI8oi", "sSkBWPDpWOe", "s8oFw13dKG", "ymkXW71SjwW", "CmoyEcJdJLZdISkQEsm", "j8kysSkAWRy", "WRdcI8oSaf4", "W7tcUSoMDs8", "Ea7dRrRdKW", "xSohDhVdUW", "WO0xW6NdTCob", "dCkQE8kFWOS", "a8kcW5bvW5BcVmkxW4JdJG", "W6NdLXZcHmoYWP8", "r8k7W6ZcN1u", "WQOwjSo6DW", "C8k+W7f7", "DazOtmkvW6pcOCkd", "EefNWRhcGmkqbsisaG", "WOJcSmk4asu", "W6lcRmoSWRldRG", "WR1Cnmo7bmoMrcDIWPS", "EIFcJmkIxq", "ASktWOffWQi", "W5pcSCoLzWa", "A8krW7pcR3L6W69cFq", "mHGwWQBdIG", "WQbPW5BdTW", "W7FcVmo8CIWHbmkir8om", "A8olnSoiWOzwfSkruHC", "oXmCWR3cPCkI", "wa/cVmkYxa", "yCooW6hdQ8kf", "jvf3WQ7cJG", "W71yWQHQWR/cTHz+WQRdTq", "EhKjW7Tq", "rSkRW6dcUhH6WQ17tIW", "nmoxlCkaW4nnhCkrqxO", "WRbJvdpcR8oeFmocW583", "iSkAb3NdHW", "WRPCWRO9W6hdPW4RW6hdOq", "DmkTWPnnWQi", "EmkyW5pcJ0y", "nGOAWRhdO8oV", "W4bVWPWhnW", "xGNcH8k9Aq", "WQdcRmoAe3a", "WOjUW4FdImkR", "Amk8W5Dtmq", "WOFdOfqHW7CAW40nWRNcGq", "DHRcJ8k1BSkhWQBdOZuN", "zGPHxG", "EZXOhaxcLZ3cM8kdnW", "pMXiWQNcKW", "WOpcPCkNW4nUWR3dGSoKnJS", "WQnQWO7cOmovWPCRW7ldKG", "cW3dGetcS8kzW6tdRXzs", "w8oPg8oC", "W5P9WPdcJmkfjGH5W5JcTW", "W6jLWOldU8kvWOrVW6/cJCo8", "WPpcOSkUjXC", "W5FcOSkAW5Wj", "WQBdR8oiWOtcTa", "W6BcKuddU8oV", "iH3cHsC", "AJ5Oua", "jHePW6rxW7tcOmkPWRa", "WQBdNtRdSSkEWROGWOZcPmox", "W5VcG8oXWRddIa", "WPpdN3ZdKCkF", "W5BdUmkwuXalu2xcRCog", "WOzjW6VdOCon", "WQddMgJdOmk4WRXLWRlcNG", "WRXaudhcVa", "W7DAWQ4JW77dIaDRW7q", "C0OJW7Ko", "wYhcPSkLAq", "pMmyWOtdHdfoW6fulq", "cCkGW63dK8k3qKnSzwa", "fdpdNv3dTW", "WQxdTCoa", "WOK9W5ZdLCoD", "iKBdNSoLvSotW5pcO2yg", "W4z0WQC7", "oaVdKupdUq", "WPxcGmkZoHa", "W4DaWOK2W4S", "W6pcOmocWOtdSCk0BdHDtW", "W7naWO0NW5W", "WPBdSg4uW58", "e0PpWOpcNq", "zHZcJ8k6F8kq", "w8omfSocFa", "WP4KW4xdJ8ktjHGWWOZdUa", "WPdcMmk5db0", "EveOW6bgW7pcUW", "oKbGWQxcN8kx", "WRimlmkJbG", "WO8HW57dTSo6", "W4BcU8otxdK", "c8kOtCkAo8okWP9TW4KL", "W5pcR8ouaaHfC8khW7LL", "W7dcLwpcS8k4cCoQWPddSSo/", "WQNdIatcI8o7WOWkW6ZcRMG", "dWFdI0q", "WPldRfJdN8k3", "W4tcO8oeWQpdLW", "W5jBW5xcRmkJ", "FSk7W7fN", "s8oKweBdKq", "yq3cJG", "WQ3dOqJcMCo+", "WPVdK0RdJCkH", "xW1JqSkBW7ddQCojWPRcLa", "W4RcSmknW5WI", "WRRcTSkXcWqGW7NdVgpcPq", "mNSiWOxdIsrdWQGjlW", "WOBcRKBdHeldQatcPCoubW", "WOCIWRWNbG", "vsruCmka", "W7rCW7m", "rtJcOCkIsG", "oWydWRG", "WOH3WR0HkcFdM8oFkgi", "W7pcSmolxIu", "xmkkWQbqWOK", "u23cTc1zx8kZWOnODa", "WPvpqSkfF1lcSCoGWQ/dNG", "jLDNWQhcJG", "yGzLtCkl", "WOFcK8kUcXe", "W5ZdOIa", "CaBcNG", "W6RcM8kfW6yz", "lmkCtCkuWQNdI8oJpeRcJq", "pCoLWQexW68", "pmofxSke", "W71yWQyK", "WPSmd8kneW", "kXNcIcGZW5y", "W78ohCkvW6C", "BLS+W6a", "WQrqFbJcNG", "WR/cImo0jMK", "WQpdPmoaWQVdRvNdPrnFrG", "AWJdJZBdOa", "W4ZdGXpcPa", "v1S3WQ/dKG", "WRhdPmorWQtdQ0m", "E8oLl8oquG", "u0qoW75O", "WRLoW5xdLSoK", "WRtcISkRks4", "iGuPWQxdUW", "W6LUW6/cS8kr", "W69HWQCenq", "m8kDjN7cSq", "W6pdNbZcOau", "Fb7dISk9FSoFW4hdVZu4", "WRTymSo1oG", "kWHQWQurW5hdVSo3WQldKa", "WRhdNgRdUmkqWQTL", "WQJcNSoRa38", "EeCjW4Xx", "W63dIxxdP8kfW6vIWRdcPCoa", "W7BdIr/dUCoPsCkOWPSPWRa", "WQtcOdZcHmot", "W59cW4/cRSkr", "WQ0ne8oqBW", "W7DxWR0KW47dQqPZW7ZdVq", "WQ/dKdxcLCoOlq", "sSoNk8oaECkAW507", "W77dPCoyW7q", "W5tdRrJcHXxdILBdRa", "W63dM3VdOmkqWRSTWR3cRSob", "WOSFcCk+jG", "WOCImmo5uSowpL7dSYG", "WQNcOXtcGmoP", "mg4F", "sIu7W4qmge9/", "z8kjWQnXWPq", "Crn0tmkCW6y", "WPNcUdVcOW", "WPlcICk9ca", "vCowC27dNW", "gSk3W6ZcQgj7W6j4", "WPvOW57dMSkH", "WQDKW5xdLSke", "WPHsgCoiprFdKSkHW6VcJW", "WONcTComaW", "W7xdHXZcICoHWOG", "W7zZW4VcICk1WQHDW7VcJCoG", "W6OVW4ddSmklW5XO", "WQRdK1aBW70", "z8oBW6tdM8kK", "W7NdGrxcVmoy", "WQaEWRqAi8oJlmoYWQ7dQa", "iuT8WOBcMW", "AJ5Oub/cNc8", "WOHyqGJcLG", "C8ohnCovBa", "B8oVd8onEq", "WPRcICk3", "WR5oW7NdUSkO", "W5rCgSotkGddOmkUW7RcIW", "WQTYhCoLoW", "W6pcRCoFWRVdTmkPBJPQ", "W6bzWRSXW6e", "ubC1W50m", "CCkhW5lcUKa", "WOVdQ8odWPO", "lWxcHCk6DCkrWPpdRJmV", "WQVdVCotW7ddQfJdKHzo", "WQykmmkRka", "mmoUWRGVW7bsW70", "W7hcVmoFWOy", "W5z8WOhdSmkylWz3W4ZcQq", "zCoZEwhdKLPb", "WRlcSSkTcq8M", "sLRdVWhcQ8oEWR3cV10g", "WPRdO8orWQxcQG", "EHqtW5Sf", "W67cRCkSW4qh", "i3v6WPBcOG", "WP1VwtxcS8ovpmobW50I", "fW3dKLq", "FwGD", "FG5ZvJK", "ySk1W6jMpx1W", "WPCNhCo1BG", "WRVcJrxcJ8oHW5m", "jHObWRRdGa", "iHhcLsep", "fSoKW6JdMmk0db43zgC", "nXmAWRxdVSoUta", "WQVdNCobWRBcTq", "W53dOt3cTmoh", "WR3dGCoHWOBcIW", "d8kKt8kAp8ocW79TW4KN", "o8kmF8kIWP4", "AKWPW6bmW6NcTSk3W6S", "W7rJW7BcSSkM", "wGDTwI8", "l8oul3NdOWldM8k6oMy", "W4TVWPyRbW", "u8omhCoXxW", "vdXPCIu", "kSkgsmkwWQRdSSoSpuO", "WOpcG8k0aILe", "zZnWde7cMI7cHSotBa", "W7FdJqlcKSk6WOqpWQdcUx8", "dmkwW5yjWOxcRmoeW4FcJbi", "W7/dVGJcS8oF", "m8kBiN/cOqFcGG", "W6f8WPOwW4a", "WRy1bCk6jq", "W78ciq", "W4FdUr7cNvddGaJcT8k1bW", "WQlcR8osc0e", "WRPLW53dP8kEW5O", "WPFdKgeRW5u", "W5fpWPCdW5q", "WRFdL0ddVCkf", "WOJdPr3cN8ol", "W43cICkPgtzoW4VdTciv", "W7yzWRWjySoVg8o7WQlcUW", "WOHwc8kAAa", "W4BcMmkmW4mK", "iGHTWQpcMCkqhNWhha", "W54UW4ldMCoiy00", "W7ZcSSorWO7dTa", "wSolChpdPq", "WRGqWQajbSoOc8o7WRC", "WQPgFX3cMmoVrq", "z1WSWQ7dOW", "uXGlW74g", "W5ldRa4", "y0uKW7vaW7BcQmk1W6hcLa", "WOVcV8k1eW8", "jCoDlCoaW5bf", "W73dHWdcSCoT", "rSoNW6ddISkXfreKr2u", "DKRdIhP/W7ldLCodW73dTW", "WPpdRu8B", "utr5sd/cJsK", "ve/cNa", "kJFdSxVdMa", "cXddNetdSCkeW7ddVHq", "WOmpgSkSbq", "W4ddMbFcTmoH", "W4ZcSSoQwXm", "W6iQWPdcTmovW5uNW77dN8oz", "i8oxk8oaWOHjgW", "wcK2W4G", "tSoPcSorzCkh", "w8kyW5rKiq", "WOrmvr3cJW", "WPSFWRqwjSo0u8kXWQddQW", "A8o7r1RdTq", "WQpcSSkPcWuKW7/dUw3dTW", "gSk9W6RcSgzIW6vEqZ8", "WP4KW4pdJmofDLe", "WRDVAZlcHa", "WQVdGSo5WQFcNG", "zgyHWOBdNZvuWO9fla", "ierIWRFcJG", "W7DKW57cSCkeWQ53W6VcJmoP", "x8oShmo3z8ksW4aV", "W6ldGclcKCoq", "WOFdOfq5W4O3W7uwWRlcHG", "kGy7WRldRa", "WPJcKmkskrK", "emoalSoHW6O", "WQddUCohWQVcRLZdHqTDqa", "e8kbsCkkWRu", "W7lcLs3cUSofW7LmW67dTCkv", "b8k/W4JcI8oTtv9ZitK", "WO/dTeNdPmka", "aZVdTJPxrSkZWPSKEa", "WRe9WR0oia", "W7tcSmo2", "W5RdO8oW", "scK9W5S", "WOJdSweOW4q", "uCoUW73dM8oSdXOVzgO", "jXSbWRRcSW", "mSovBCogW4HogSkgb2S", "WP3cQSohbKu", "W77cSSkhW7ek", "WQBcTmo+yh52r8obsmku", "WOZdLK0yW40", "jv8QW6aEW7FcVmkOW6ddJa", "FdPXxHRcNa", "W6zebSoTumk+f2zLW4a", "faddMvxdVCke", "W7ddHJJcKSo8", "W7lcV8o6CdS", "W7ldGWy", "W78ZWPhcMCkPht0Artq", "W43cOmkKW5qHWRddICoUldO", "WOXIwYlcNSooDCocW7a3", "W6FcSmoMus95wColsmon", "W6dcIZhdHCkXo8kYW5FcMSkT", "WQuipmkYW7pdVcRdUCo8Fq", "wmo6f8ozsmkBW5iUWR5K", "WQTXd8oJhW", "gxxcGYTzvSkR", "dW3dV1/dQCkvW7VdJrbe", "WQ/dRWlcSSoK", "aqZcJGq1", "y0jlW6/dUCoUqg1Xwa", "W5nVW7BcUa", "W6ldMGxcG8o5WOK", "W5rUWRuHn27dG8oh", "WR5YW5RcUSkaWP53W7RdJW", "W6bQWPCEdW", "W5XmWQixgq", "W6D3W5m", "qCoGW5RdJSkZfreK", "zmkBj3FdPahcLq", "WQjZWPZdPmkpW5q3yw1K", "WOlcJSkWhs9iW4VcSWub", "W7ddHXhcVG", "gmoHWQSeW7q", "W78UiCklW5i", "W6OhpCkdW6ddQYxdO8oxDq", "DG1WCGe", "xmk7W5PuiG", "wbTbu8ku", "CqDGASkEW6pcPSkv", "WOVcTs3cVG", "W6ddJqlcVmo7", "zaBcGSkdAG", "W6inpCkJW67dGs0", "W4hdSdFcUmov", "DGtcHCkNF8krWPC", "WQ7dPCorW7FcRa", "WQX4mmoKoa", "W63dKr7cImoN", "WQyuWQmrlSoLcG", "lSo7W79Zj2bSW4dcSG", "WR3cSCoJee8", "Eq1Nw8kxW6/cSmkiWOe", "cqFdKLtdPW", "rSkxW7PXcG", "WPm5W5xdKCo2z1OPWPFdOa", "W5z6WQiQ", "q8kkWOfhWOpcSG", "WONdRSorWPy", "CMOMWQFdPa", "irxcIcS", "WQxdQJ/cI8of", "C8kfW63cQLi", "mqCaWRpdPmkREx0Xua", "WOBcQmohcGu", "WOHRb3C", "rmkBWPXD", "W7tcH8kQW4un", "dmkYlwddJa", "EX4RW7fnW7RcQmkYW6dcGa", "W5lcRSozWOhdMq", "WRKoomkfeq", "WQ7dGZe", "WQ/cKSoxmNK", "WP3cLSo4dfK", "y8o9DNddLKW", "W4zecCoaBWtdQmkLW6RcQa", "W6DtWQm1W67dSG", "f8kUhfpdVa", "emoSgCoaASoEW4mUWPjV", "ECobENxdTq", "W5BdQbRcKb7dGa", "W7xcKSkbW7TGWQ3dMSo3lcy", "emorbCoiW74", "xSo8uu7dVq", "jeb9WQFcMCkjdMSKgq", "qwG1WO/dSq", "mSokWRW9W6a", "WRuvWRC4oCoJaCoQWOpdSG", "wCo7WQ7cHmkrfrmQAsK", "vbXPEsG", "ySo1FMddIW", "W7NcMSoLCs0", "WRLoW7pdV8ov", "W53cNSo6WPldGa", "jdFcKXK3", "WRCzWRipdmoPc8o7WO7dRW", "WOrBAX7cIa", "WPaUW5ZdUCor", "mg1qW4VdPwetW6iqBG", "rmkrWPbiWOO", "qIZcMCkmBG", "mMpcSZzq", "WP3cKSo+uW9iW4NcVtXu", "jvfHWQ8", "WPdcVCouc1nwcG", "WPRdQ0pdNmkq", "W5FcVSo7WR3dUa", "DNWdWORdNdLjWQi", "WOrWW73dOCkK", "mHWPW7jfWRldRCoU", "WR8tp8kUe8otxYzKW5C", "jxDIWORcUq", "WORdQX/cUmo6", "lLXAWPRcJa", "sI8SW40b", "BSkuhSkpW7/dP8k2jb4", "WQXqW6FdOCkb", "WOddVvJdNCk6", "WPldTCosWPVcOq", "WPxdV20KW70", "BSkgW5VcR1W", "rmkqWQnWWQG", "iCkvoMq", "p8ozm8oGW5fol8kgsIu", "FriUW6yE", "WQtdVSk3dWC6W7tdS3ddOa", "W5tdTb3cUSol", "WQNdVH/cImoI", "WOhcP8kgjIW", "WO7cSs/cVmoAjmob", "W6pcVCoZzGjO", "WRrgj8oPla", "WQhcVCogWR0", "ierI", "W4nCWPWBjW", "W6VdJrlcH8oJWOqnWQ8", "WOlcISkWdJO", "WRTODaJcTW", "WPGzlmo0ra", "WPhdRCoaWPNcKq", "W6xdKWhcVG", "CGjWsmkbWQ/cOSkhWP7cKa", "umoHW7RdK8oHpreNycK", "W4fxWQOhW4u", "FWC3W6iI", "WQn9W4FdN8o2tr8", "W4lcUmoLWPxdJW", "fCoTWOGxW6i", "WQ7dVr7cN8og", "WOpcRSk+W4eNWRhdGmkLmYK", "W6PRWPhcV8koWOvOW7RcK8o5", "lmkCxSkAWQldVmoRpLC", "xhO7W4mdaKLZW7Sx", "W5HfgSoekHZdTCoTW7hcIW", "W5xcRSkNW5S", "WONcMCoibLK", "WRWEWRqBaq", "W6u0ASoHtSk0z3e4WOm", "WRDzWQe3W6BdQru", "hbRdMhxdIG", "W6H5W5BcNSk4", "WPtcTCk7oG4", "W7tdGHBcLCoGrCk5WO0", "wq7dKqRdGW", "WPVcSsVcLCoxiSojfWCH", "i8oDomoB", "WQiIWPWmdG", "lHldIZWKW4ZcJCkaWQFdOa", "WQNdTSotWQBcVq", "WRdcT8kNkqyRW6VdOq", "W5D+WRCQlxm", "WQDzW5tdLCo1", "WOFdL8orWO/dRq", "WQBdQ8o6WRNcQq", "DCkXW6rgp2XUW4VdOH0", "W7pdOGxcLCo4", "WPlcJSk4hXXoW4hcSrua", "WPrRW7tdLmow", "WPxcQSoffXul", "ieD2WOdcPW", "W4nBWPWhW74", "WRGkcmoOACo2gfBdTsK", "WPBcJCkkkta", "nCkrjh/dUqVcP8oSlwe", "W4TUWRGJ", "WRPTW4/dKmo6sqm", "drldTNJdNq", "WQ7cTmo8CYH9gCokt8ok", "WPDggSocnq", "eg1JWOtcHG", "W6jMW5pcTCkv", "WQzRW4VdMW", "W5ivf8ogprxdOmoVWR/dGW", "lHZcHCkKimosW5JdVtKT", "pKXQWQC", "xr17FbK", "WPi/W5xdMG", "WRfOW77dLCkC", "WRaEWOaEpCoPa8oY", "gwJcVYTkESkgWRPf", "W5NcQmkGW5e", "mqVcMmkXE8kwWOy", "WQLTlCoFcq", "DLeNW7a", "WRVcVrRcT8oJ", "WRldTSkxWPddQmkRiJXYwW", "W6JcRSkjW78D", "C8kiEMZcVrldLSoKAg8", "gHldG1ZdPW", "WR8kfSkznG", "WOVdRfauW6q", "WO4IW6pdImoBFKyN", "FrnHrCkgW63cVSkjW5VcJq", "WPxdVqtcKCok", "FGPuAmkz", "WQZcGmouc0a", "C8kVWQGVW7DwWQtdGaRcKq", "fJJdThNdJG", "W6NcN8oDWQZdMW", "W7ZdPZFcOCoR", "WOhcUCowe3fAa2dcOCoC", "WPeqWRuxla", "WOtdVHBcQmoL", "oe7cSazR", "Cb3cVSkEFW", "W4hcKCo1wXa", "WQqhpmkGW7FdUYFdO8k1", "W4j+WQa", "W7XcWQi8", "WR3cTSkTdr4I", "BmovW5ZdKSka", "Cb/cQmk7ySoFW4hcV3b6", "wZaCW4GJ", "WRVdIXZcGCk3WOWoWRxdOZG", "WPFcQ1KdW6SaW40BWRNdNa", "lCknt8kwWQldR8kVne/cHG", "W5ZdTHdcVbi", "mGylWRpdOSo5utLYvG", "l8kapwddVftdICk3lMq", "WRWDgCoCsCoqcfldPdi", "W6XHWRW+W7G", "W7KgnmkPW6ddQW", "W4tcKCoHEay", "WPu3gmkBoa", "WPaEnCozvW", "meXGWQy", "o1vRWQ7cN8kqagbmgq", "ecJcHWuM", "iCkzp0RdNa", "WPBdRKpdSSk3", "uSoYaSooFG", "WOpcSmkXhsW", "WPdcQ8oRbxO", "WPdcUZZcSCoxfmoqhrS0", "fmo4WRhdPsm5WRaUf3K", "WO/cSsS", "g8kEqCkJWOC", "CCkdW4vqkq", "WQZdVxi6W5S", "WRhdKhpdPmkL", "WPvae8oKlGddRSk1W67cJW", "gwJdVd1Bqmk7WOD9pa", "WOHshSodnG", "W43cJ8oLwJi", "WRFdUCobWRZdIW", "FaXNsmkEW5hcOCkjWOFcHq", "j1bVWQZcN8kwh3y", "imkrpq", "W6hcV8oZBa", "W7pcR8oTWQ7dKW", "Fmk9W5LumG", "eJldN1xdUa", "WRJdQCo/WR/dQG", "WOpcS8oqeHjfcNVcQ8ov", "qCo9W6ddNCkMgq0", "m30Ubu7dMtpcKCoiBG", "WQBdTCoxWQpdO1ddJa", "WQFcKL3dHSkNW4fcW7hdScm", "WPhdIapcQ8of", "nJtdOLBdNW", "W7pdJtlcK8oLWP8hWQ/cVwm", "cqFdKfxdSmkeWQtdOHbv", "W6FdGWlcUSoTr8kV", "W5zDWQarW4y", "w8kIW67cRMq", "mmkydN3dMG", "WQJdM2pdH8kl", "xSokW5ZdQSk7", "W6nHWOuvfq", "mNhcSWvH", "WO7cUSowaLO", "BCo9BYNcKrGiW6vvW7W", "WOlcQ13dG0FcKGBdVCkXySo/WQzq", "mbmcWRG", "W6r9W4/cTSkw", "WRSGl8o5wW", "wmoyxMldPa", "obxdT3ZdMG", "W7pcOmooWPFdQSkYDYTntW", "vXXYqJu", "WP3cK8k8uh1fW4dcSJub", "EgGFWO7dIq", "ESoNWQ08W6rw", "W4VcRSkeW6ybWPa", "Eb3cNmkGEq", "WPdcKSkThZzdW5dcOdeh", "W6Kkn8kI", "zgyUWPZdMIjdWQjhjG", "E8oBlxNdUvddMSk3pxO", "WRRdJt7cNW", "pmkatCkbWO/dTmoMpw/cKa", "W6DEWQaN", "W57cICklW4u5", "WOxcL8oRjx0", "j8onm8oh", "WQWhe8ok", "WOGOW53dK8oFCMK0WOddTW", "W6ldTXZcRmoh", "WOJdPCoAWQm", "WPdcKSkXttSCWOFcMwvn", "y3PqW4VdMd9vWRGjnG", "zazG", "W5tcKmoBBqa", "WPxcG8k6bdjaW4K", "mNbVqq3cL2xdLa", "WPZdQ8oZWPVcQIhcMx3cOr0", "iaicWR3dUq", "WPb2dColfq", "WQdcUSovlNW", "C2OiWPRdMW", "nurIWQ4", "dLvIWQ7cUG", "AKLNW6lcImktcNWrtq", "W6ddHdxcMSoN", "e2FcVsi", "DSoCcmo+uq", "W5JcQmkOW4W", "WRVcNCoVa24", "wJddIJW", "WQpdSCo+WQpdMG", "WQpcIeFdRSowbSoLW4bXWRa", "WOFcOmoqfvnQc3tcUmot", "WQBdLhJdTCkiWQLYWR7cR8kE", "dCk2WQxcImoZxe52ltS", "nhnmWQRcOq", "WPToW6pdV8oe", "qchdHJtdMW", "k8kNd1VdQG", "eMZcOb5l", "oCkAq8kEWO/dS8oJkM3cIW", "WQ3dRCoFWRNcKG", "WOtcS8om", "WPShW5VdQmol", "WQJcTG3cH8oS", "W7TuDmoHvmkPaga9WP8", "W6inmmkY", "W6PxjSkFeSklDXZdPta", "hSoBWPOdW4a", "WPXiW47dVCoj", "WQaioCkHgSoY", "CSkBW6lcPxu", "i1yWamooWQ3cPCoyW4NcLW", "fHNcNbSF", "WR5pwblcQq", "o8oIm8oRW44", "qCoGW73dM8kTdbOUy2G", "WR5cCdxcRW", "zHJcHSk9BG", "vqVdNvBdSCoDW77dVbHd", "WONdVmoLWPNcKG", "WPtcOmoUn3a", "W4RcSCkQW5q6WRS", "w8k/e8ooBSkMW7a9WO9E", "WQazWR0qiG", "WPVdKSoOWP/cGG", "W4XJWPyIeG", "cbVcKa4I", "W4FcVmogwGW", "W7eVgmk3W64", "sMqfWPZdHq", "EbDPrq", "zSkoBmkEWPrStSoecwq", "WR3cVmkfccq", "W5NdKcdcSbe", "v8kNWOD5WRu", "WQldJxlcQSonW6DZWQNcPSkh", "W4FcGCo1qIC", "iZWXqXVdLG", "WPxcQfqjW7meW5qyWQJcLW", "W7JcVmogWPG", "WR7cKmkPaJO", "w8k4W5Trjq", "pKbVWQBcJSknowav", "pqRdVgNdSW", "WOddJL7dMmk1", "WR7cOCoFWPhdRmoWCtzKxW", "irCdWRVdU8oU", "tWqPW4G1", "WP5yeCoc", "zqNcK8kIFW", "WRVdGstcUSo5k8kPW4JdMmk7", "lCoVbSoyW5C", "WRNdHtpcKW", "WRtcRbRcQSoD", "WOBdPeqjW5CA", "qCoQWQNdK8kVfv8Vyg4", "xmkfW7hcJMm", "W6BdJH3cICoGWOSxWQ3cSMK", "pCk5B8kCWQq", "E8kKW6FcU1S", "umkfW4VcNK4", "nSoukCoSW5i", "zmk1W7X2nG", "vCkUW7zrjq", "DfDRWQ7cISkldMTpgq", "juXsW7VdOCoIbG", "W6lcTmoMDtaXq8optCon", "WRCggmoy", "W6pcVCoZEIr5", "qSoUW6ldJSk0vfy", "iCoZjCooW7i", "WQ3dVSohWOhcNq", "WQr3W7/dImkZ", "WOfOW7RdO8kU", "WPtdPfG+W78aW50", "W6v5W5JcU8knWO5yW6lcGmo/", "WPBdVSoxWR/dVa", "pX3cPb0u", "iHhcGYeZ", "WQldTCo2kwfrbSkFcmkj", "WRVdH8ocWPldLa", "zGxdTWBdOa", "W4nYWROR", "x8oShmoXFCkwW50OWRfI", "WP9LAtlcLa", "WQSkbmoj", "qGdcJSkBFW", "mSk5deldQa", "WONcRmkwW7a6WOZdJW", "dmknE8k1WQS", "oWpcJ8kGF8kqWOldOtCR", "yZvcWOhcNg4AWRWAka", "WOVcTW7cNaBcMGNcUSkCxW", "hNFcIq18", "pXCaWRpdUCoJ", "WR9nW4pdUmkV", "CqPmxmkO", "W7evgmkRW4i", "WPBdTxtdJCkB", "w8ovW6FdV8kP", "dSk9W6BcSxnTW7r4rG", "jmoDnmoUW5judCkDrYa", "fCkBpG", "WQtcHmkClGy", "WRRcKSo2ixC", "jL9MW7DpW7ZcVmk0WRpdGW", "WO0Wwt/cS8ovCmooW58W", "t8o9gCoAF8kAW4CL", "WQtcRmoga3a", "WPS5W4tdJG", "jX0IWRVdUSoUsLO9sG", "l1nLWOpcMa", "W5JcTY3cTCoAm8ob", "ea3dHKq", "WQKklCkJW7VcOW", "WPFcKCo0huC", "nSoEnmokW5rZhSkcqa", "zt5Zubq", "nbVcIbK9", "WPNdSaVcHXFdHq", "umoIW6VdN8kL", "nbtcItHQW5BcI8ke", "W4/dLGFcGSoF", "W6n3W5VcTCko", "WQORkSkxjq", "WRBdMM7cUCkyWQzMWRddO8kh", "W6bxWO0Uma", "W44ipSkUW5S", "W4TsWQOZW7/dOWTJW7/dPW", "WPRcRSoo", "WRFcSCkOocy", "wmk8BNVdHLXDWRCqW6a", "W5ZcQCkVW4CnWRhdISoGbdW", "WO3cTCocfge", "cCkBa0FdVG", "W6nwWR8ilq", "WPThd8ocirBdGSkOW7tcHG", "WP/cVCowaKyCASklW70", "WOOSW4ldMCohyW", "aMpcOsjzuCk3", "WR5TW4NdG8oYwaHBfa", "WORdRCoEWORcKt3cJgBcTHC", "xZaOW4au", "bGO8WQxdRW", "ysS9W5u+aLO", "WRajlSk9gSoUsda", "qmkFWPzmWOJcTa", "rIhdNYq", "W5RdUr7cLHG", "WR3cVmkIdKHQW7ddOghdOW", "nmkCigddVWFcImo/gMy", "ArBcKYiRW5/cJmoDWQpcTa", "mSozi8oh", "WQVdJvVdKmkR", "WQNdIahcGq", "WOakcSoyu8oboa", "WR5VW5tdLSkK", "W6u6a8kiW68", "cdtdTwhdPG", "WRlcTre", "cW3cIGCq", "WQZcV8osdxy", "WQBdT0ddOSkx", "q8ktW517ja", "pmoYd8oFW6e", "aJdcOWicW7dcSa", "W4/cKmkHW5iB", "WRNdISoDWPtcVW", "WO7dKqdcLSo7", "D1lcICk7DmkwWOldPJ45", "WQyuWQuypCo1cG", "W6hdIYlcKSoQnSk1W7W", "imoNWQKVW6C", "mSksxSkHWQG", "s8kXW7fX", "WO/cStpcTCoym8olaa", "WPhcSCoEaGGax2xcTmop", "WRvSW5ldS8kzW7W3Ewq", "WRj9W4RcRSkiWPK", "W6xcRCorWQ7dQG", "WONdQ04jW6W8W6W0WPa", "WPWRpSo0DG", "wCoHhSon", "WRddGt7cNmo5nW", "uSk7W63cVMjNW69Z", "W5HHW6RcMSks", "sSo6eCotBmkwW4e", "d05cWOtcMG", "W4tcOSoUWO3dOW", "DbdcU8kyqW", "WP7cStNcV8ojiSo2fWq6", "W6GlomkOW7hdQW", "mtaHWPJdOq", "W7zJW5/dOCkzW4fRnMj1", "WQRcLJZcKSo4", "W7axoCkShSoTsJ13W5G", "WQVdKmoHWQJcTW", "FmkJW7DHha", "C8kwWRDrWQS", "mb0aWQddQmoLta", "xttdKZNdJCoitG", "W4hcMSoSewDDWPi", "a3BcVsDm", "tmo6DMBdSeDmWRa0WRO", "m2tcKaHl", "WOxdJrtcUSoz", "WPFdVfFdLZ3cLqdcU8ombW", "ECoqiCoDW4fbuSkqtcy", "jmkCkgldJahcGSo9ggC", "W6fKW5dcQmkoWP9IW77cHa", "W4/dNJdcGbe", "WPBdS8odWPZdMa", "W4DFWQeGW4C", "W7HtWQe3W7NdRG", "W78giCkY", "WOlcJSkWhs9iW4VcSW", "ht8PWPZdPa", "smoGDNRdL3XhWQeuWQi", "WPRcVthcTa", "sI8uW4mAe1PzW7qx", "W7NdLZ3cSGG", "WOtcSCokaW", "WQFcPSkneIS", "WRpdUCosWP3dIG", "WQ8odSoyu8oboa", "W7j3W5pcSa", "W7/cP8oh", "WQRdPmoaWRRdVqVcJ0Ptrq", "WOPqW6VdTmoYqGvoh2W", "capdHvu", "WPRdLMKMW7K", "e8kJqSkFWQm", "WP3cG8k3cITj", "WPVcHCkKjqG", "rWXTubq", "w8oWdmorzCkx", "rHD9Et8", "WRLTW4/dG8o4BXbzbq", "n8kvo2pdQG", "q8o9DhxdH0fhWRS", "rmkrWQDCWPtcSSoaW5RcNfy", "W67dLHtcI8oiWO8hWRpcV24", "WO0hWQimkW", "WPqToSoSEW", "WRRcI8o7aw4", "WP7cVthcTa", "vf89WOFdIG", "W7tcRmoICq", "W7NdGc3cLae", "j8o2WQeSW6XB", "W5pdMmoLctzxWOxcTZGv", "W6/cSCoNF2n1wSoEu8on", "WR4jcmoyt8oMkKxdSW", "WORdNbJcT8ok", "xrZcNmkWuG", "W5ddVr4", "WPlcLmk8dcTe", "WOSnjmkUea", "qNagWO/dUa", "WQ0NWRSAbW", "jSkHef/dMa", "W6hdOmo2xKn2WRFdOJRcUq", "WPtdQWBcNbtdGuFdPCkxrq", "dYNcOcuJ", "AqnHW6DwW7/dOSkZW6hcLq", "WQ3cN8oleeq", "WQrrW6FdTCk5", "WQHcoSoQfW", "xmkBWOPoWPlcQa", "W7n3W5FdSCkrWPL0W6RcLmoV", "l19LWOdcKq", "yXNcNCkGCa", "C2yjWOW", "W6Wglq", "WQComSoEEW", "m8kDsCooW64", "WOxcG8kHgq", "WPbLW5hdSSkFW5mKFq", "x8oZzxhdNvW", "WR3dKmoiWRJcLW", "jvyZW6dcMmkxcMSnbW", "WQpdTgOBW5e", "l8o2nCojW6K", "lSkAlxxdTYhcGa", "WPRdS8oHWRVdLW", "mCkCB8kCWQddTmoWEG7cKG", "vbhdL1tdU8kwW6JdUX1d", "WPT6ud/cKa", "WRa2jmk8mW", "WR3cVmkGcWyzW6ZdVxBdPa", "DXhdHmo0ACklWO7dVZuM", "iSkwoetdOq", "WONcR8onnKe", "W5TLW7FcUSkZ", "W6pcPSotWQFdHW", "W7HJW5JcRCkiW4y4oc94", "WQdcI8ojlMK", "WQZcS8ogjx0", "W7xcQCoiWPW", "iKP8WOpcH8kt", "W6tdIGtcImo8", "oXCpWRa", "DmoSnCoEEG", "WQTTW5ldJG", "W4ddPSkybHjwa3tcV8ob", "vSo8fCoy", "WOjOW7xdUSov", "fGyeWQddIq", "umo3W6RdLSk0gbOfC2y", "zmkglhZdRHRcG8o8DhG", "WP9kW6tdVmoB", "yCkXW6q", "WQldNx7dLSkuWQbHWQNcQmow", "W6tcRCotWOa", "WQFcLg7dPSkqWQzZWQ/cOmol", "W5DSWOG+W6m", "WPldJNCwW64", "WPnzg8ocnZ3dPW", "W6xcM8kLW5en", "W7DIWR8PeW", "WOpdQKqj", "W7KgomkIW68", "W47dVcNcHWq", "EfCOW7a", "WPTdc8ov", "kaVcIGWMW4ZcI8kfWQdcOW", "W7hcPmoFWPhdS8kZyYT7", "zcBdQIJdOW", "hteNWQFdVa", "WQFcL8oYp1C", "W6JdHGtcJq", "W6/cIcNdNmoaW7TwW67dUmoX", "lSoVnSo3W7W", "W6FcJmogtca", "WQG0W5VdMSo5", "ySkjWO1QWPu", "bHS8WRVdVW", "WRRcNZJcQSoJ", "WO3dTSozWOdcVZlcIhlcReq", "W6Cwpmo7WRq", "WO7cT8od", "tCo7Exa", "Bs15vai", "W63dK2/dUCkDWQLOW7lcSCol", "W6ddOmoBWRNdUHZdLaXora", "WOxdQCo+WQhdUq", "W6hdIX/cGG", "W5lcPCoCDq0", "rSkFWOG", "W5hdQqtcRCor", "Fmo/FeddOq", "WQ/dRhldHCkd", "mqtdPMBdKG", "W68epmkYWRtcSa", "WP7cGSkSbN8pW4JcVtO", "WP8/W4tdHq", "WO7cUSk3dWC5WRtcVhpdRa", "W6VdHX/cGCoJWOu", "xGVcI8kIBa", "WOxcJ8kthIO", "W4jAWRSBma", "qrjGAmk7", "WQXTW7JdQCkE", "WRXoCJBcNa", "W4JcTCkhW4ldQMhcVYldT0O", "WPlcICk3gtPpW5e", "n8kCqCkF", "WO/dGmo1WQddMG", "sSoTamoa", "WPOBe8k/bG", "WOJdVchcKmoo", "WOVdJmoBWQRcRG", "WQnqW4FdLmkJ", "WPauhCkPjW", "kSkXs8kuWPO", "eG/dGa", "BcVcRSktEW", "Brm3W7yK", "WP3cSIVcTCoj", "WQBcTqRcOCoj", "WRdcP8k3ga", "W6OxlCkNW7xdPG7dOCo+CG", "vSkxWOPn", "xSkwW7NcUeu", "j8okkComW4m", "W7lcKSorxrO", "WROTcSofBW", "WR7cOSkxcaS", "k8keECkYWQi", "W4RdGWtcS8oIumk5", "WRFcJ8o9axq", "WQNdGatcJCo2W4arWQNcV2G", "WO5+tIi", "WPJdHXVcSSoR", "W6vjWP9mESkOw8kVW6pcQG", "tIeQW4KdaG", "WP8edSkzoG", "WPDEtCoRcmo9EGddGhC", "jvbTWQhcJSkmga", "WQJdIYtcMSoH", "iSkmpxxdOqO", "WQtdKCozWQldHq", "F18mW7PW", "BSo1qv7dSq", "rqvZymkN", "EmoUW5JdQSkZ", "hwFcTISvrCkGWPz5oG", "DbJcMSkXDmkgWQddPZKM", "mSkelxhdUWS", "bvBcKW93", "bufkWQNcQG", "WPZcRmoodLW", "FXa9W4qI", "WQZdHslcNSoJkW", "E8k7W4xcSvq", "W7VcMMZcKSoGomo7W5ldImkT", "WPrthG", "qhmSW5DS", "jCoskmolW54", "WPzfW6ddPmo1", "a8keoxRdPq", "WPFdK1/dRCkt", "pSkwg3xdRq", "D0GXW4f1", "W4VcRSkDW4e8WRFdGmoI", "CaiCWRVdU8oIvMO1", "W5PvWOyQW4O", "Amo4p8oIyW", "WPlcSmkXjIi", "rSkVW63cUxLJ", "WO4IW4tdNCofF0KYWPpdPa", "WRNcP8kUbG", "naS3WPFdPW", "W7WadSk8W7e", "WR4DkmkSfW", "Fmk3W5RcRga", "WOP9WReQj3tcMmoopwG", "WO5RxJRcQa", "WRTSW6pdTSoq", "mub6WOpcN8klgwyabq", "vXhcO8kW", "WQtdOmohWPtcIW", "WQ1TW4pdLSoPstrhfhu", "WOlcLSk1bcS", "WPRdKCo/WQlcJq", "hGpdKfG", "WQddLxVdP8kcWOzHWRlcPa", "WPX+sdNcS8og", "rJBdJJFdHCodtW", "W7hdGX0", "zaXWsmkE", "WPNcVCoo", "W4H5WRuNkgBdMq", "pMemWPVdJZelWQHnla", "W5dcRSohcXucpmkqW6vI", "WRFdNgldOa", "E8k0W6tcRMu", "jCkDehBdGq", "WQCJg8owzW", "WPKBWPOlhq", "WQ3cOCoRbee", "W6JdSrRcGSo5", "W7BdJHFcTCoNqCkU", "W614WP4aW7G", "tg7dO25BxSkZWOr6jW", "WQj6W4JdKmoPra", "x8kCWR57WPq", "W4hcTComauCFBCkrW6r5", "WO0+mmoxtq", "W6VdOrdcNmoe", "W6Cmh8kKW5G", "W7pcIsRcPa", "ySk/W7rHma", "W6BdJHVcPSo8tCkKWPK", "WOfRvZe", "WPXVscBcTmocDa", "W5fmWRG/W4G", "W5RdTZNcP8oV", "WP7dNrNcNW", "WOO/W5/dImogy1eWWPe", "Dmk9W75N", "yshdItNdJa", "W5zpWQSBW7O", "vCkgWPbmWOJcPa", "ga3dNH/dQmkzWQy", "CCo8W4hdJSkN", "WOLbgmkz", "W43dPG0EW6K", "W4WWl8kZW7O", "p35EW5NcMh1oW78uBW", "W5BdRb7cHW", "W6VcK8oCBa0", "WOpcUComafXA", "usJdHsxdTq", "WOZdLJ/cN8o4nmo7W4JdLmkN", "aMpcPYTkqCk3", "WQFcLmoHkND7oW", "W7TyW7e", "WQaEWP8somoJhCoDWQ7dQa", "FbCJf8kIW6VcUCkpWP3dHa", "zCkSWQGjWPtcPCouW4hcLL0", "ewRdRgK", "WPpcICk9fa", "zb3cJ8kMy8kXWOBdOZuP", "xSklWOHf", "WR3dHSo9WR7cTW", "WRVdGsq", "W5pcM8k9W7eM", "DLeH", "W5pcPmkGW5i6WRy", "wmkNW63cTG", "W5NcN8orCq0", "ASoRdCoWEq", "WOO/W5NdN8om", "WR4iWRehpG", "WOddOwNdSSka", "W7ngW6JcRmkM", "W4y+W4ddNCohn0eKW4NcOG", "v8kHW63cRMj8W7v+vIi", "aMpcVcfovW", "pI7dTN3dM8k+W50", "pCoHWQiRW7f/W53dPsC", "WPLJxYC", "WPaIW5NdKG", "WRjCdCoFoa", "W6WglCktW4ldJrJdSSo4CW", "W4lcUXWiW7CcWPGAWRdcKW", "WOpcGCk4", "W5q7W5NdMCoEoKSHWOBdSq", "W53dMHJcMGy", "W6PZW4FdUCkgW5DODM50", "W5ZcJSoPWPBdGG", "WOZdSevrWRKqW50FWR3cHW", "WOqAWPi7jG", "vmo7W73dIa", "i1vQWQpcN8kA", "iZBcGX8w", "h8kjW5CzW5BdRConWOFdJX8", "WRKwmmk8nq", "WRZcPSoIDs08v8ocr8ok", "xIRcO8k1va", "AG1XsSkC", "W4VdRCoGW54RWQZdJ8oRlYK", "W4f9WP8ccW", "rCkmWOG", "W7xcSmoFWPhdR8k5", "W7fyWRS", "W77dV8oeWR7dP17dJKvmsq", "xbLEuCkf", "zwW9WQpdNW", "CCk7W70SnMrHW4VdQey", "lCobWRy6W4O", "qmkHW7FcVhPSW6vVqZK", "EuP+WRBcGSkqbte", "s8o6fG", "WRldLMGlW7i", "W7JcRmkGW6az", "W6xdIX/cGG", "nmkejxNdUW", "xmoMDNpdLNHjWRerWQC", "W6qpn8keW4y", "zHRcIq", "W78mmSkPWRJdPY8", "WO3cPSko", "W6v3W5JcKSkaWOz+", "rsxdJctdL8kofa", "WRmah8oCuCoMp1ZdPcC", "ggFcOG", "xmk6W67cSq", "n8k1gMhdQW", "Bq4mW5qh", "WP/cPJRcSCopiSoHhGW4", "DCocq0ZdMq", "W6tcGmoLWPNdPW", "WQv+W4tcIG", "AdzYvq", "WRxdKdxcLSosmCk6W4ZdN8kr", "zmkuW5BcNMu", "oCojgmoSW6i", "WQauWQa", "WRmkeSoAsCoD", "ArvVAmkb", "B04IW7vxW7G", "WPZcSSksoHG", "W5NdIWBcH8oP", "w8o6dmon", "WPqSW53dMq", "WPNcQ1ZcUeNcIatcRCkUbW", "W6X5WQaika", "DCkdW5tcQNu", "WORdOCowWOhcQJBcVxFcPG", "vc3dItq", "ud3cIxddKCopumofW4tcJG", "W5ZdQLayW7CBW5zzWQRcKW", "oZ0eWOZdNa", "n8kAw8k8WOi", "W4xdSGlcKqG", "W4lcPSoSWRldQG", "WRpcQCobmKq", "WR7dGtBcLmo/oSkyW4NdN8kT", "W5n/vNdcVSonCmouW4j+", "WO3dPfHbW6WrW4SmWRdcHG", "B8oJW5RdS8kj", "CLxdNs0OW4ZcGmkvWQhdVa", "wYRdGZxdMSoPwW", "WQVdPmorWQFdVq", "zSkrW7zlhW", "W7FdTXhcSCo+", "W6BdLGFcJXC", "WOBcGtpcMSo/", "WOyOjmkzdq", "DxezWOZdHJq", "pSkjzSkAWPG", "f8kNewRdOa", "De7dHNPPWOZdKmoCW6ldSG", "sSkWkq", "W6fJW4ZcTa", "W7FcRCoFWQddQmkWzW", "aebFWO/cMq", "WPyiWPOz", "EMeHWQVdGq", "y3So", "W6bpWQ0LW7q", "W6ZdIslcNSoe", "mbmCWQddJSoKvgWXvW", "wCoQW6FdNCk1fa", "iX3cKI4", "tJiXW48i", "W4hdVGpcVCop", "WQ7cUComp3G", "Dgq+WR3dNq", "WQi/W5NdTSoV", "W7FcHSkVW6mC", "W6tcP8oBWPJdOmkKp24", "WQPVdmoGiq", "W70cnCkZW7m", "WQ3dONykW5G", "W7CbWRypjSoOcmo/WRVdUG", "WPBcVCox", "W4DuD8o3WQhcONRcO8k1kW", "WOJdHJNcUmo3", "W7hcImkdW5Sz", "uamRW7OH", "u8osp8o9wW", "v8kMW6BcVN1HW7vPzcW", "W6PZW4pdOCkeWPi1EgbJ", "WQJcOSkIbXO", "W75zWQy+", "WR4dcCoyamks", "WP8cW6hdLmok", "WRdcRmokWOddOmoWBdbSvW", "WPH/kCoJjq", "WQOpW6xdQ8o/", "WPqDdSkGjq", "eZ7cIYqi", "WOJcP3dcTmoEiCofbWuH", "W6ZdN3/dSCkvWRSVWQ/cRSok", "W6pcUmohWP3dTq", "aCo7WRpdQYu/W7ztBqHdaW", "CqDG", "fSotk8obW74", "WO/cNI7cVmo3", "W4hdPCkusXKanmowWRuT", "FtPOCbJcJsNcNCodFa", "qSk2W4NcJvq", "ymklWQbQWRu", "gxlcTcnQxCkLW5D7Dq", "WOXIwZ7cUSoe", "W6/cO8k7W7KP", "WPW3W6z9yZlcM8kmyZu", "vmk2WPbSWQu", "WPxcUJhcTCojd8oWpYu", "lmkDt8kqWQNdQmoX", "rcH8FSkq", "mCkvjwxdQG", "v8kHW6FcUa", "omoCnCoe", "WQ7cOrRcNCoJ", "W6Oepa", "mGO/WPJdLa", "zgGv", "kH3cKIWV", "W4JcJSoIWOddMa", "rmkVW7hcRNm", "W6ddLYdcMSoJF8k4W43dM8k9", "vfmBWOldNa", "DWzW", "WRpcKmkiaq8", "WRFdUCkJjG8KgSkBh8kv", "W7ZcTCkCW70d", "WRmRWQuTbG", "rI3cN8kCva", "eGuRWPpdIq", "i01uWO3cQG", "W5hcNSolCJe", "WQJcVmk2hH8OW73cVgFdQG", "BaHZzG4", "WQhdVmovWRNdVq", "jvXJWQdcHmkt", "xGf+Emk/", "W6xdLb3cOmoLsSkPWPS", "WRhdPSotW7q", "W5/dKsZcNGG", "CaNcICk8", "WPxcOdRcVCoKkmoubGa6", "hvFcSWr2", "WRygjmk5oG", "hqddNfRdKG", "WRhcIZxcLSoVoSk/", "CWhcHmkW", "WRJdIGpcNCom", "CG3cNSkbtSkHWQ7dPJ4/", "WRDEe8oVpa", "lGpdTMxdUq", "fxlcTq", "W5mLtZZdOW", "W7NdSCkSdaXLWRRcUW", "rGldOb/dKa", "WO7cL8oGlL0", "W6NcL2FdJCk6ACoOW4NdS8kAnCoMW5S", "WOJcUCowmNXXxmkwW6fH", "W67cSSkVhLCGW6VdVwO", "WPNdSCorWOdcRdRcIgO", "W6ztWRWLW6hdSHu", "WRxcJqVcUSo8", "W4yPW5NdISkx", "WQTWW6FdG8oA", "W5bgWOqLW4q", "WRNcPrZcGCo3", "qSoHW7VdVSkX", "WR4fW5FdRSoL", "mSoOe8oKW6W", "W6n3W5xcVCkoWOv8W6xcImo+", "WQ3dOCoGWQJdRW", "wSk2W5HmbW", "Eh1xW5NcKZXdWQPqzq", "WRG6hSk3ka", "CNeSW4XY", "xWtcQCkdDG", "W44XWOhdGmkAAXG8W4y", "WQiOp8k7eq", "WOpcRmoqfq", "tMCTW7Xi", "iMPqcuddI2VcVmkqpW", "WQZdJK4aW7e", "l8kMFmkaWR0", "kWtcJXuO", "v8kHW7dcQwu", "omoQWQiPW7DF", "oxmTaYddGxxdGCkyjq", "WP3cH8k7cdm", "WR3cPCkPhqS", "FSkGWRi9a2bVW4FdPeK", "FhWiW5tcJZrdWQPfkG", "CNipW7L3", "WOJdOsxcJmoC", "WOBdLmotWR7dTG", "WPFcLmovbge", "WPZcQmkGW5mHWQZdG8oKnIe", "W4zoWR0Naq", "WO5/tJ/cRConCmoEW7KS", "W6H8WPKinG", "WPG0WP7cNmoAFKuWWPhdQq", "WOBdOJlcJCod", "W75xWQi", "jSkOWQf/yhuZW5lcVG", "uSoTfSotF8kB", "gxlcQbe", "cq3cVGeK", "W7/dIZ7cNmoMmmkO", "smoHhCod", "ivhcLbXSA8khWR5gsG", "W5n5tdFdVCoxEmocW4yb", "aryxWOtdPq", "vmo7f8oAEW", "CYW1W7KU", "ibNcKG", "AG5pqmkg", "zGmoW64Jo1LTW7aw", "zW3cMSk4E8kbWOy", "WRtcVSkMbb4", "oLeSW7ZcU8kwb2ykua", "CqDGA8kxW6RcTmkqWPZcIW", "vSouBvldPa", "WR0VlSkCda", "jLtcUIX0", "tSo8odBcMG", "WPBcVCoa", "ALz+WQpcHCoFaMTFvW", "WO4RcCoxDa", "zc9TwSkgW6FcU8kdWOC", "WQhdV8oAWRNdOv3dHq", "jmkUaNJdPa", "EwSVW7XH", "W5HEWQu2W4O", "mCkqb1JdQa", "W7/cPmofWRBdKq", "WQyGc8oyuW", "W7VcUCkSW5GK", "emoLhCoAFSoEW5ePWPzQ", "FfCOW7a", "umo4oSo+Aq", "WRivWP8onG", "smo3y0hdP2TGWROaWRW", "W7dcJsO", "WQZcTbHcWQHaWPrmWPtdHW", "hNxcKHpcL8kkdmkbWO/dLa", "W6ldGXlcJG", "DSkqWPr5WOK", "fJeKWQBdTa", "yWzWAmkgW7BcP8kpWPFcKq", "WOhdTKea", "vmoRW63dV8k3gre3twa", "WQyvWPq7ia", "WRhdVmoDWQ7dQ2xdJWjDra", "pLfJWQ4", "W57cJSkSW5OK", "WQWFemousq", "fGpdH1hdSmoEW7NdPGe", "W6NcHCkPW4ie", "CXvOq8k/", "W6ddKb7cSSoB", "r8k8W6a", "mZFdTvRdUG", "WPdcUZ7cTa", "w8oMW5NdU8kQ", "W6ZdMgBcH8k4i8oPW53cICkY", "pHW7WP7dMa", "WO7cRmosc1e", "WR8SW4RdSCoK", "DJasW4q7", "W5JdIWxcG8o6WP4", "WQ3dKthcLCo5nSkVW5G", "mHWAWR3dUCoYANGOxa", "WQ/dJh/cQCowWQXLWRNcOmom", "WOnxW6RdPSkS", "W5JcPmk6", "W4yHW5NcNmokE0KZWOFcUa", "fmkyrCk5WO0", "WQ7cG8kVcdfvW5y", "qdVcGSkbAq", "WRtdMh3dRSkz", "dL1EWONcVa", "q8oUW6u", "jXmw", "iJhdLwtdNa", "W4zaW4NcJ8ko", "WPixhCkUla", "jGJcKJ0", "wSkVW67cVa", "W63dKg7dSCkCW6vZWRBcU8oC", "WRWykCkKx8oPrtLJW4i", "WOZcQ8oahKe", "qCkoW4j7fq", "WR9hmmoQpG", "yIjfCCkq", "WPvUW7xdK8kA", "E8oPaSo5rG", "W7FcQ8oeWP/dGa", "FvSYW5fpW7JcOSkIW6dcLq", "jGikWRxdUCoU", "W5ldJY3cMYa", "rJlcSSkWCW", "W4TtWRK1W6pdSHu", "W5pcQCoor0TEE8kqW74W", "vf8i", "AsPUEaO", "W5BdICoNuxbaWPS", "WQ4edmoXrW", "mXNcHsCMW5dcG8kv", "W7j5W5ldS8kxWOi0", "CgSCW6ne", "WQCIp8o2EW", "WRhcTs3cTCop", "WRHsfCo0WRJcT3ZcU8kOva", "WR50W4FdSmkzWOH5o3j5", "W5jsW7tcMSkI", "BJi3W4GyhqH4W7aw", "WRhdTCogWRZdP1ldHq", "WOxdVumjW64aW5ewWRi", "WR9oW4FdNSoq", "EaBcGmkfCW", "vCoQc8ovuG", "WOpdG8ofWP3dGG", "x0GFW5vY", "hSkCr8kEWPW", "p0TGWQFcMCk3p0iU", "AZfOeulcIttcH8ovja", "WRrLW5xdR8kyW5CfDxD1", "W4/dIIhcN8oe", "WOxdPCoxWOVdTstcJNlcSKq", "cSkRtCkkWQi", "W6nZW4/cSmkaWOH+", "WOpdPeWa", "C1iXW7Tb", "WRSihCkljq", "pqCcWRG", "WPBcG8kTkdneW4JcStOa", "wCo6W6ZcH8oJ", "WQDAWOFdSmoqW5LxWR/dLCkG", "uZddKYi", "tsGXW5WDh0z9", "WO9hg8ogoXC", "nXBdM3FdPa", "ehRcMZtdI8oqhCowW43cGW", "WOn4W4ddRmkh", "WRBdTCohWR4", "WQNdH1lcVSo+qCkSW4nV", "WRatl8k7", "W4tcICo7WQldGW", "r8khW4r1eG", "WQNdUmoeWQhdVG", "vmoaW6VdLCkR", "WP9OW7xdTmo2", "WQ4mW6hdLCod", "WP4SW4tdNCkeze0SWPhdPG", "v8oMhmorC8k8W5u", "W5iOsJ/cRSovpmooW5WI", "i0FcGrXW", "dCkDxmkAWQ3dS8kIeudcGa", "xHT3F8kL", "WPWyW4pdVSoe", "WRhdNgZdSCkdWRTL", "p2dcQbDs", "WR7dSGlcMSoi", "WR99W57cQmkeWOX0W7ZcImkH", "W6y9BmoHtCk1b3K4WOq", "W4tdLtxcQSot", "ymo1W4pdVCkL", "WQJcItpcMSo/mmkUW5ldN8kI", "aCkok1pdNa", "WPHYCcFcNW", "caFdH3hdQSkeW7VdPXnc", "WOhdQqDs", "ahZcLMNcMSkuumoXW6ZcSCkZW4q", "WRKqWQCEjW", "Db7dKdldKW", "zCoBW5/dU8ka", "n8kCwmkdWR/cOCkTD1NcKW", "WQjytbpcLq", "W65bzW", "W6tdJslcRmoK", "WPddG8o+WQJcLa", "W7RdLYtcMSo/k8o2W4JdLmkQ", "WPpcScRcUW", "W50BcmkfW5C", "W5NdKd/cKCoU", "W78mcSkYW6tdPYxdSa", "me/dLN9QW5BdL8oaW6pdQW", "WORcRmojcW", "xmoMgCoDzW", "haFdHW", "CCkAWRDmWQW", "a03cGWDr", "lsddTxxdRq", "WR9KW5RcSmkaWP9+W6RdJmo4", "xYxdKZpdIG", "WP7cO8k7hJi", "WPZdQ8oeWO/cTa", "zZnzEcC", "WRWfWR4r", "WQL+tGlcQq", "W5FdPmkouGyhvSosWROJ", "kbdcIZW1", "eGBcRaGJ", "jSkjxSksWQlcVmkIo0lcHq", "WR8zmSkOc8oO", "WP9pc8ociry", "nCkjqq", "w8kGW7hcUhDQW7LUvIW", "WQ7cGdlcSCoE", "FWFcG8k6", "WO1VvNldOW", "p2RcUJ52", "WRvzW4FdJ8ky", "W7ldLc/cUdxdQMe", "tSoIz3hdNuW", "WOLkW4JdM8om", "EvGxWQxdVW", "u8kRW7C", "WOVcV8kqiYi", "x8kuW67cRwW", "fwVcTcbm", "WORdVmo2aKvcDSkcW7LO", "pSkCwmkb", "W6ddIbpcT8oIbmk+WPSGW68", "ttq9W4iiba", "ASkoW5vAia", "WR7cNdFcNCoS", "W6DgWQm5W7K", "vbHxuGS", "bCkeF8k6WOq", "WQTNW5ldKSoZsa", "WRibkCo3Aa", "EJDZrbJdLdNcM8ozjq", "WQrLW5ldPmkt", "jmkvo2tdJahcISoTnh0", "p29/WOJcIa", "W5ldTH4", "ga7dMLpdTq", "W5iWp8ksW5q", "y8otvfJdGa", "WPhcUGRcMSoU", "m8oodCoxW4G", "pSoGWQuG", "W5NdGdVcSmo6", "W6yclCkLW74", "DXmOW7KI", "jCo6WQ0GW7DEW73dKq", "n3/cMYvp", "iKr2WPdcISkldG", "WReCW74uiCoOcSoSW63cPq", "W6b1W5pdMSoXtrKgawO", "m8kBa0pdGca", "WORdRmkAjLfbbMpcRCog", "WRj5W5hcU8kkWOrO", "CCoaEa", "WPxcTSkkcGW", "WQ3cQmoclv0", "wgWVW5H6", "WOpdGsBcNSoJk8kO", "WOWzkSkQeCo0wa", "WQVdTSogWQVdO1q", "W7pcVSkgW73cRGFcJfCkbG", "a8kJnYBcGGqDWPzhW78", "W7FdHWdcLCos", "CvCmW5bh", "W7JcUSooWPi", "WPDJtbhcJq", "u8krWPDD", "oSornSo2W7q", "WOBcQehdMK0", "WRrsW7jYW4dcVKGZWQJcVW", "yJ5+vaa", "zSk2W714WRmaWRVdKJZcGSkVa0G", "E0mBWRpdIq", "W4PyWRCcea", "W7zOWQuSoG", "nSkfsW", "WPygkSk6nW", "b3ZdVxlcJCkyaCkAW5lcLa", "FSk7W7nIp1P3W4hdVGG", "rZtdGZhdLSod", "nSoIWRGOW5m", "W6ZcImk2W4yg", "W6ZcUSoZCa", "gLhcPXTY", "oND0WQNcSW", "eqygWQhdGa", "q8khWOLlWONcRa", "W4BcU8owaLnbcG", "qCkoWQXdWOW", "WOxcICkTddndW4dcPJua", "p0TTWRdcJSksdMew", "zrPfyY8", "n8oGWQe+W69sW73dJq", "yshcG8ktEq", "WPlcQSonbfC", "W4ddLbpcImoc", "sdxdVx8kFSoJW4iNlG", "WRFdOmoqWQVdULq", "W5hdTqlcHSo2", "jSoQWQeHW7vsW4ZdNG7cJq", "WRTVW4ldLSoPsq", "WO9mW7JdSSk9", "FCk6W6qUnwHUW4FdOba", "c8oKWQK3W5bdW7S", "pGyuWQBdHa", "abC5WPldQG", "W6iPkmkmW7u", "WQ4vWQK2W6VcVrzNW7xdTW", "D8o/WQK8W6PzW67dIr/cGG", "jSoApx/dOGZcICo0Dhe", "WOFcTCogaG", "WQNdGgNdTCk+", "W6ybomk8W5W", "WQT+W4xdNW", "WQJdQMRdKmkA", "WPr6W7xdVmol", "WPWKW57dMa", "W57cTCk6W4C", "WRyDp8kN", "WRCxWQOohq", "g8o9gCoNW6G", "WRBdLbFcUSoTumkVWPPGW7q", "WO7cSHpcGCou", "ehHQWObCrMqRWQzi", "W7tcOCoD", "tCkbW5RcL0q", "WRa+W7JdMSo7", "iG/dUwFdVq", "y8kHW7fTj2b3W5C", "qCk9W6BcSq", "WP8OW7FdN8o+", "quGGWRhdGG", "vmkBWODaWOVcOCoj", "jxhcMH5Q", "nCkrkNxdOrRdI8o+nxi", "uN8QWPZdGq", "nM8S", "zweJWR/dJG", "WR0yzSoSt8kWgZq1W4y", "WPVcS8o3f1HxAmkGW6X+", "WO3dNbpcTCo0", "W5tcGSoetcS", "iXNcIIyQW5FcKmkvWQe", "WPhdSxBdUSkL", "W4FdRrNcNq", "WQpdPmoaWRJdP1pdLrfFwW", "CKq2W7vg", "W490WR0H", "smo3yW", "WPDrW7BdMSop", "WRVcGSk2dXGZ", "zMGb", "BrzquGe", "W7HXW6NcU8kP", "W4BdR8ovWPZcUt3cLNlcRam", "WQxcICk6isC", "iKbQ", "WONdSmoeWPW", "WO3dOe4fW6O", "WQ/dSCoe", "W5pcJmkxW7KT", "A8kRW7xcUhH6W7m", "uCo2W67dOmkN", "x8kXWPviWQG", "WR0hWPG5cq", "Dmo4W4ZdVCkf", "WRCBeCor", "s8o7yMFcIrKyWQunWRm", "WOLXW6RdGmow", "WPmjW7pdMmoM", "ALz4WQxdI8kmh3yofq", "W6reWQaKW6ldSH92W7q", "WQKuW71KWQ/cPG5JW7JdTa", "k8khymkCWRVdVSoWg0/cLW", "FYBdIWJdIG", "xrxdQWRdSq", "WRFdI3pdS8kwWQ1Y", "WRFdLLNdOCkdWRPLWRhcOSoa", "W7X4WP01W6e", "m8oQWRG", "W7FcRCoFWQhdLCkErJ5QxW", "ESooaCoeta", "b8olWOqOW4i", "W7nzWRWOgG", "WRBcLCkQdZW", "WQtdUCoAWQ4", "W5RcG8kuW486", "W57cSCk+W5aGWRO", "WQjVW7/dR8kDW5CKv2bJ", "wuldNvhdS8kvWRtcRa", "q0SkWRpdRW", "d3H4WPTbrXbxWQrs", "W7pdRJRcHCob", "WPekjSoTAG", "mmkqeCorW7ZcU8kYEbZdKa", "oCoUWRrJW7fsW7RdNqFcLW", "W4FdS8kdW57dQh7cLcddSLq", "W7hdOSo1rLH4W5dcQKFcSG", "mub6", "WRXNk8oGlG", "WPa/cSo6uG", "WPlcISkWdJq", "WO5yoCoonXFdPq", "bbtcPYKF", "W4NcOCo3Eq", "yCkXW6rcj31XW4FdRHW", "W6DIWOuEja", "WPxcSdFcSCoY", "mKr6WQpcMmkAhW", "WOzKvdxcR8oPrCoQW70", "WP5ogmo9kq", "zGhcKmkXimoqW5pdVYG3", "WOBcP8kTccS", "WRX1W47dK8oL", "W4hcS8orfvTh", "CGz2smkg", "W6pcUCo9zYzVqa", "WRieWR0Eo8oVamoW", "kqddMmo0ECkoWOldVcn3", "zSoKW6hdJ8ku", "yCkKW7XQjW", "dWVdNxhdLW", "W4dcQ8krvXGFCSoqWR09", "nJlcVGau", "W6iiW7n/W6hdR1G", "WO1tnSotja", "WPhdJtZcS8o+", "W5xcLSkxW7GO", "WQxdIwuHW5S6W6W", "sX7cGKZcRmkmWRRdSKu", "WOdcV8ogk1y", "Dvq/W7Pe", "cWZdTNNdSq", "W6BcOCooWOm", "cWtcTbKc", "W5FcM8oNWQ7dRW", "WQ/dLdZcKSo5", "WOhdHCo1WPNcVW", "W53dRItcR8oA", "WOCfomk5gG", "WOhdJMiLW6S", "vGFcJSkwtW", "WPtcH8k6bq", "WOJcSsFcPa", "WRxdKdxcLSoslSkUW4ddLmk6", "W4/cOmk3W4mR", "WQCbWRitnmoGamoWWRVcTG", "W4FcK8oAzbC", "raL7FG4", "WONdQ1azW6O", "W6ldGHJcSCoF", "uSoQW70", "W5pdVr7cLbpdJhddO8kDwa", "WPDxW7xdSCoT", "WP/cRSktkd4", "WQpdT8or", "x8oGW6ddLa", "oHaBWQddQa", "rmoRW77dS8kr", "WOaIWOisaG", "vmoPW5ZdVCkO", "yZRcPCkBCW", "W5RdKJVcS8oN", "n1v+WQFcHCkB", "WQxdOIRcVCoA", "WONcVCoh", "AJ1ZEIm", "W6jdWRG2W4m", "W7XUW5dcTCkI", "W5lcOmk6W5yM", "W7FcPCosWRddUW", "W4ZcPmkVW4CTWRy", "pCkbqSkx", "tmoTfCoBFCkw", "xsP+etJcLI/cLConkq", "WRlcV8kIgrKeW7NdV2e", "ESkdW5PXja", "W5tcQ8odWP7cUt3dGI/dRqa", "WRb+l8orhG", "mmoDna", "WPOScSkJoa", "W7rWWReEmG", "WQnZW5BdRa", "W5vFdSodkHtdOmk1W7hcNG", "WQRdUCoqWQ8", "W4BcMSoeWOxdIG", "WO5sb8ot", "iCoaWQuFW4e", "dWpdIW", "vLKSW5vX", "yxWmWOFdNdLsWRu", "q1m1WO3dGq", "DtrkWP3dJsHsW6Sekq", "WPmJW57dMCoBx3WnWRG", "WQFdQ0xdUSk9hmklW4XHWQ0", "teOoW6nj", "WPauWPWCha", "WOLCW5hdHmoT", "WPddSfme", "lXxcGIO", "WRuxWQCypCohc8o6", "hc7dKJ3dJSohvCkyW5hcKa", "Cw0j", "W6PmoSk4eCo5sHK", "WOS4mCo2Aa", "W7nzWOmJjW", "Fs9WwbG", "WRPWW5ldLSoX", "j2NcLGrR", "W48NkSkQW5m", "W5mhlmkFW4m", "pLlcGX9Z", "hMldQZXFumkZW585nG", "vCk6W7FcRW", "WPddPfijW7aa", "FSoeFhJdGq", "WPK0bN/cSCoilW", "W5pcTWNcKbVdU17dTmkAqW", "W77cOCodWRVdSq", "hJGDWOhdHG", "W4XRWPajnq", "tYhcHmkmtW", "v00pWOddNW", "W4/dRSkwrryoASkcW7LL", "WPGgWOaWbW", "WQrMW4FdVmksWOr3W6FcHCkS", "ir3cLtS", "rGZcOmkXBa", "z8oyha", "FvBdLSo7ACkuWOtcSq", "ucdcGmkfAa", "WRNdO3xdGmkK", "WRXVW5RdRG", "w8k/W5FcV3C", "WQ3dOeK", "Eh0aWOu", "W6DaWPbmEmkOv8kTW6pcQq", "waNdGWtdMG", "yqH0zCki", "WOTUAqhcJW", "W6rbW7zgo8oJf8oQW6ldUG", "WOKYjSkFoq", "WR3dNahcT8ou", "W4BdRCoeWOVcTqhcK2q", "W7hcOSokWOW", "v8k1W6RdLCkVcb4QB3O", "w8ktW5fbcG", "WQZcOCoje0S", "mWPQt8kDW7dcUmkhWOBcJq", "WOTYWQaQlIRdHmoxkh4", "oGVdNf7dHa", "WOCDWPGWpG", "WQS1W5NcUSkhW5bRW6/cHCoO", "WQu3WOhcRCkj", "qJBdIcBdVCopwCki", "A8orlSoFW5nux8kaxcu", "WRlcMrJcMmos", "WOeidSk/eq", "orVdULq", "o8knt8kAWQhdUSoU", "WOpdVmo8WRddHq", "WQ/dSCo3WOZcTW", "WOhcH8kRhJO", "W7tcUSohzdn5rSoTr8ok", "FSklW7lcQue", "vCkjW6dcJ0u", "zSo8W47dV8kk", "WPVdRmoFWPK", "AZ5/wq", "iSodWOShW7i", "ybfRxCkDW7BcRmkwWPa", "FaXLtq", "W70cnq", "WRufWQCp", "w8kcW4hcLua", "W70OnmkKW74", "W5hcVZdcO8oukCod", "CWLfrmkk", "DbZcNSkM", "W5BcJSoiWPldOa", "kvpcKIfo", "WR4NW7hdQmoD", "shOsW4D3", "vSoHhmor", "aSoGsSkuAmkFW5iVWO42", "WQJdNSoGWR/dNW", "kgpcKGDC", "W53cH8kjW4u2", "WQJdGsJcJW", "WRBcI8kAhYm", "yGz0rCktW6hcSa", "WODNqclcJW", "WR7cSCkPdWK+", "Cw0jWQRdHdfvWR8", "WR4Dg8oCemobjeFdTYO", "aL1uWQJcHW", "wXmiW6aN", "W7BdIJ7cNse", "W5hcNCoyCte", "nehdHcCMW4ZcG8krW7hdUa", "W4TDWQOPW57dSHq", "W554W5JcT8kiWPKNWQhcJSo8", "dbCyWRhdO8o/sW", "WQZdNw/dV8orWQfUWQ/cTmon", "W43cH8o5bs1eW4pdQxy", "WRSooCkP", "D8orfCoLBa", "WOFdNhq0W70", "d8kOt8kyoCobW7bPW5mZ", "oCo3gCo3W78", "DCk6W6RcJLS", "W6jxWQm", "WOFcPSokn00", "WO7dSSoiWOxcIq", "WRmahCoz", "A8kdW6zBcq", "WPVdKGdcSSo0", "WRLBpmowha", "WQZdP8oyWOtdOmkZpa", "WP8SW5pdLa", "W7BcNmoDEcG", "AfS2W7HcW77cQG", "Cx0zWPS", "W5vPWRS7lhpdJSoonW", "eaRdG1VdRG", "W51XWQaicW", "Ex8MWQ3dRG", "uchdLthdLG", "xCkGW6FcUg5bW6y", "W6xdTZlcTHq", "WQVcRmobcG", "f17cHdrr", "WQH2W4JdKW", "lH/cGYe0W5VdICktWRZcOG", "pHJdHuxdLG", "WPD7e8oGlq", "WQJcLq/cHSo5", "uCkoWPrfWP8", "WOtdPfqnWRmhW50vWRNcKq", "WRDKW5FdHCkCW5C4ye15", "WOddOCoxWOVdJq", "WOVcPJBcPmoEbmofab0", "sgORW7vg", "W6ZdOSorWQBdR0xdHqexwG", "WRZdUSoHzcjYcG", "W7HaW6SWFSkQxCowW7VcTq", "A1/cKIaZW5/cImoDWRVcPW", "W7vuWOCB", "WOFcGSkmhr4", "EbJcJ8k4BSknWOJdOh4J", "CaG5W5Sz", "WRBcMCkQohiUEmkFeSkv", "oxysW5LVWQtdTSoNWQdcJq", "mtBdPx3dNq", "WRGEWRaCi8ovg8oXWR3dUG", "qdldGJhdJW", "W6CmpG", "uI85W4G", "WQhcSmk6itW", "ECoNW6pdNmkg", "wb1lxqG", "F0yYW7fnW7K", "W5JcK8oBybO", "n8ooWOa/W7e", "W53dQb7cLCo2", "nCkMEmkgWP0", "qCoTW7pdSmkw", "zZ7dRrFdHG", "W4xdRwBdQCkcFmouhrO8", "W4GSk8kVW4i", "FmkaW7vIhq", "hcFdJh3dGmosu8kzWO/cIG", "e8kozCkvWRO", "DwGoWOe", "WOHsd8ollHhdPa", "dCoAaSoEW6u", "rSoKkq", "WQvtsINcMG", "fh9QWRtcPq", "W4/cGmkDW4qQ", "WQj+BdZcNG", "WQ7dVHBcN8od", "W6RcUCkCW4qS", "uI4iW5KJ", "yCkAW7dcRMm", "WRVcOmoqeh0", "WRaqnCkSfa", "WRBdIx7dTCkfWQ0", "tmo+DL7dSG", "WQNdOIBcRmoQ", "WQJcRGJcVmok", "WRqueCkAcq", "W6ldJXpcG8oZ", "F8oVgCoMyW", "WQVdQmoZWPRdPa", "aCo7ExldNavkWQabWRO", "W6jKW7pcUmkm", "vW/dTbNdOq", "W4BcJCobWPFdQW", "WRaDmmkJ", "nbJcKG0t", "EmoqmColW4nghSkbsse", "W79bWQWUja", "CCo/dSoAAG", "zspcJCkhCW", "W71ZW5hcU8kvWOm", "W5ddJsJcVmoP", "W6bEWRO9W68", "WRGEWRiz", "l8oYcCoEW6C", "vCoCyLldOq", "W4L+WROOn28", "WR3dGZu", "WRFcV8o3fNe", "xSk5W6xcV30", "WOrpW57dG8oQ", "W71/W4NcUq", "fGpdH1pdTG", "Ft5wzI4", "WOBcR8ojceysACklW6j6", "WQFdSCoxWQi", "W5zbWR46W4q", "EcXUCCkJ", "ofbJWQdcJSkn", "xYq8W68bf1TP", "W5xdQrNcHCog", "iJRdVKhdJq", "WR/cSmoreKa", "sCo7Exa", "h8oHycldVuPJWQuKW7m", "trnEDX0", "zZf7eqJcMc/cLCkBkq", "Ed5W", "WP1VtIxcR8op", "vLypW5bg", "uCoQW6RdImkKerOTDq", "WPiKW5tdMq", "WP7cPCoPa2y", "W4OXWOpdGmkBAXK8W4a", "WQqjjmkvlq", "WOtcVComr1XxD8ktW6fS", "WP81W4tdMCohCW", "oeWJW7DgW7pcU8oQW7NcIa", "WRbPW53dPa", "w8kqWOnAWQG", "c8k7FCkCWOe", "tmoAW5JdRCk5", "C2ueWORdGW", "WR3dKctcMSoUn8kEW5FdN8kG", "ptxdGMxdPW", "WR8tpCkR", "vs8TW5G", "wJuRW4SG", "vCkdW55seG", "W7XeWQO2", "lCknxmkFWQ3dUmoN", "WRZcTCk3htC", "WOxdSrpcLmo7", "WQlcTSk3kX4+W6RdU2BdSa", "ECknECoJWPums8k8fam", "WROLeSowsG", "pCoEWR0SW44", "pX0j", "WRBdTComWR4", "WRqyWQaNW6hcQWvNW6pdVa", "b3pcHIHj", "xNelW5DmW7pcU8kIW6dcLq", "WQZdV8oqWQ/dGfddJqa", "WQ9RW5ldHq", "m1D6WRS", "v8o1W43dQmk5", "W7FdOSoODWH2x8ocBCop", "ecOTW4ebf0a3W6uw", "WQVcRSkApti", "WPpdTuWfW6O", "WPtcI8k7cdS", "W5DXWPSdW7W", "WR4Bcmop", "W7VdNGlcOCoa", "nCo7WRG8", "EbDWwCkbWRJdUSojWOlcKW", "xse0W4apf0TX", "W6/cR8oeyae", "AdaFW7Of", "WOBcSCos", "W4VcSmkeW5RdOZdcK3/cRry", "WR1Rwcu", "uSkhWQTXWPi", "WR3cICk4ctPf", "W6ldUq/cOJG", "WPVcSsS", "nbNcKGaYW4RcImkvWQC", "W57cPCkQW7yIWR/dNCo2", "WOldPfqnW61zW48yWRFcHG", "W7Sck8kJW7JdUG", "hc3dKZxdJ8o0uSoc", "cZ3cPqm0", "rmkrWQHgWPhcPCoxW7FcNLW", "W4JcHCoNWRddRSk+DZj7va", "vITxEY4", "v8oQW7VdM8k1", "ECozlSoiW41buSkqtcy", "WPz1W6ZdRCox", "W63cVmkZhGmLW7BcSNldPa", "wmkIWR7dV3v7W7jVrYm", "FgWdWO7dNdG", "WP7cUJNcNmoz", "yCkXW7fXmge", "W5FcOmk9W7O5WRddVSo3kJG", "FCk8W5FcRga", "nHldG2tdVq", "sSkbW4nufa", "uSoQW73dU8k1ca0Qy3W", "vqNdLKtdU8kcW6JdObzw", "WRddRZNcK8ov", "WR1YkW", "W6lcRCohWPxdTCk4zG", "W6ldIJxcU8oz", "WRa6WPS+fW", "W4xdGstcKtS", "sCoKtvddQG", "qSkBWOG", "WOanoCkEfG", "W63cTmoMDYS", "W4pdP0uaW78AW5iyW7ddNa", "jrpcGJy", "W5XNW6FcM8kP", "yJFdKqRdRa", "WP7cGSk9", "WQlcUSkUgGyVW5VdS3BdSq", "AGPkqCky", "b2pcLtTt", "WQJdHbtcG8oZWP5nWRhcSwK", "WPaUW6r5CdBdGCoWhv4KW7O", "WQRdPCocWOldNW", "C0OJW7L8W6NcP8kYW6pcGW", "WRdcJSoqkxu", "fYBcTJWU", "xSoGW6C", "WOhdSmovWOpcQW", "D2Wz", "oCkAF8kRWQG", "WOVcS8obeKvxDmkxW4HH", "ESkGW6rZidmSWOhdVWa", "WO3dQW/cMrxdH0hdSmkC", "W5XCWRiviG", "W7efcCoquCouiX7dPJq", "WP/cSCoRcLa", "W7hdVCkWdXORW6RdS3ddQG", "ESoRWQu9W6HyW6FcHrVcKq", "WQtdUCorWQBdQKi", "aCoiW4OCW57cJmkuWOFdKr4", "WQJcOaRcNmoJ", "WQ3dM8osWQddNq", "u8oJW6BdLCkZ", "yYf9FCktW6xcM8khWPJcGq", "WORdHmoeWOddLa", "W6RcHtxdU8kbWRXPWRdcR8kh", "WPOFeCkzdq", "kCkzCcJcUfJdK8kSAIe", "fwVcSYTC", "W7pcJSkQW5if", "W5ZdTLylWR4cW5eCWQVcSa", "W6pcHmoOWOxdTW", "fWiLWQhdHa", "W7Gcl8kJ", "WP9whmop", "WQrkW7SSWRZdULr6WQi", "WOJdNgyoW5K", "ucVdSq", "q8kBWPbGWOJcSmoqW4a", "Ee97WQ/cH8kEaYisaG", "WQRdL3pdOa", "gwDxWRxcKG", "W4xcHSoYWRRdOW", "W5tcN8oUWPVdRW", "W6tdSqJcPZi", "CtddTrJdRW", "thWrW7Hh", "iNpcGsno", "WQHFoSofpG", "W4Gxc8koW5S", "WOrLva", "WQxcVmkObuqJW7W", "W7n5W5VcPq", "W5RdRY7cLdW", "W5f+WQW7", "DCkXW6q", "WOzUW5/dRSk/", "W4VcLv/dLmk7W5XwW6/dQcK", "n1v+WQFcHCkBkgClha", "EGZcN8k/", "DL81W6CEWR/cV8k1W6hcHq", "WPdcTt3cTCox", "W7X8WQabgq", "k8knvmkh", "s8okDK7dQG", "W7dcTmoHzZD0rSobu8oE", "WQuDma", "mNxcHdPI", "W67dHapcH8o6WOG", "WRGde8oFxmozgeFdUtq", "WQNcTZpcSCod", "W65kWRmRbq", "fIJdIMtdSW", "nfuJW6bgW6/cRSkPW6NcGa", "WOlcVCos", "WQtdNg7dKCkDWQ1TWRRcR8on", "WRejWQCyiCoI", "y8ohrmobW7i", "qWztB8kv", "W5xcSConcuDbASkcW65O", "q1hcNWhcRmk8WRJcU18d", "WO3cN8o9huu", "WQCzWRWk", "W7H4W5hcUCktWQnpW4pcRq", "WROsmSkQdCoiFWrA", "W4qSo8kCW5m", "W5XsW4BcS8kU", "crC9WP/dMW", "W7RcSmknW6qc", "FwCLW4rW", "rrVcNmkova", "WR7dRmoQWRJcLq", "jb3cIIm", "CMadWO0", "Arnkrtq", "W64bcSkXW5e", "W7/dJZhcMCo4l8k6W5xdN8kG", "WQz2W4ldKG", "WOKBlCkFea", "W6hcVCoOvGa", "j8o/WQaNW7C", "WPddU33dMCke", "o8oDlSoiW5ji", "WRddKSoKWQZdOa", "WQxdJfNdNmke", "umkiW6ZcR3SUW4n1rY4", "W49JWOJcHCkfjHbGW4xcSG", "W4tdUrZcKa", "WQfXW4RdMmo8sa", "WRxcTSkVaWCJW6ZdT3y", "WPhcHJNcHCo2", "jCkBjNZdQG/cIa", "bmoPWQOlW60", "WRuSW5tdNSo6", "W5FdNZVcSG", "q8kxWRXlWRy", "lSoPWQKPW5C", "W4ZcVCoBucy", "WRP/AWNcLW", "jKHhWQ/cKW", "fxtcOYfk", "fKRcQcfW", "W5tdIXpcTmov", "DSk3W6FcLMe", "bSo/oCo6W68", "yJPYvHJcKq", "WP0OW4tdQCo9vgaVWOhdTW", "vCk9W5zkiG", "pKr9WQVcH8oFd2yweq", "WRxcKSoei00", "vSkcW6FcJ2C", "AvSYW5vxW6NcVCkUW6ZcLa", "DLSOW7nxW7u", "WQdcVSo9zYXYuW", "W5NdTW7cKctdNuxdSa", "WPlcTtlcTq", "W4xcKSo9wYS", "xmkxWOPc", "W4tcS8oeqHi", "WRK6W7tdSmoT", "WOZcRSohbLXx", "W7lcRmobFWW", "hCo8f8oaASkFW4m5WPbP", "W49oWO44ja", "WRBcTSk3", "q8oZzgddUKzmWRan", "DGzpx8kK", "W6ZdQHVcR8ov", "edRcGtya", "wmoeW6pdJ8kd", "WP8HW5tdJW", "W7bxWRSXW77dOXi", "zSobq2tdLq", "W7JcVmkrW4tcUSkXzZLQaa", "vSkXW6zMp2zZW4VdQeK", "W4ddSqtcKX/cMqxcS8kzqW", "W6tdJHdcLCoKW5bfWRBcT34", "WPTuhmosprpdOSk5", "DmoQW4FdOmkB", "DI1Lu8ki", "uCkkWPbB", "zJ5VFHVcLWVcHSooEq", "jubIWQFcImklbh0", "fmkvk2tdUG", "q8oZDxhdNW", "W5nzWPC+lW", "tta0W4uz", "WOJcUCow", "W5lcHSoACY8", "W4j8WQOsW4a", "W4/cHmoJDrq", "W5/cVCoTWPJdGW", "WPJcPmkwlbK", "fWddGwldKG", "mCotnmoFW6S", "W7OBWQmA", "WQrgW5xdV8o7", "vmoGnmo2yG", "W5pcRSkTW5q6WRFdGCoR", "v8kVW7hcQvvHW6XOtYm", "WQxcVmk3cWyOW73dOgxdSq", "eSoaW5HnWO/cTSkfW5FcK04", "WOPNxZ7cQq", "WPv6mCoUia", "WQvPW57dSmkgW5CvDxnK", "yunaW6tcVSogdtDVdW", "W53dRJpcJSor", "gSoRcSorASkhW5y", "frtcOY02", "W6pcVmokWPpdPmknyZT6uW", "WQJcI8oSnMK", "fCoHWQGVWQnAW6JdMWlcIW", "pqaPw8kfWQ0", "gSkIsSk9WOK", "W6xcQSoEWPRdPSk0iH56vW", "W7zWWRW6fG", "DWbRqSkZ", "WQpcTSkZbGSPW70", "W7hcUmoBWPhdR8k5qtD3vG", "W6FdSYVcSXK", "WO/dOCoeWQVcTdBcKxBcRba", "hM43W5Sbw0T7W6Cl", "t8obkSosqW", "mmo/kSoxW4C", "uCoFW77dMCk3", "W5zRWRGMnW", "grVcNrddRCkzW6tdVHrB", "WRddJ33cQG", "ztDzrJu", "W6VdGXpcG8o7", "sSoQy3hdNuW", "WPldOfaaW78xW50", "W6ldP8oZ", "W4rRWQqQlwm", "W7D/W5hcUa", "WPJdPCocWOVcTIFcJW", "wWSlW6uU", "W7tdGaBcS8o+", "nCoRWQGlW7vsW6FdNcFcIG", "W7xcUCkbW4il", "W7pcVCozWOBdPmkZysy", "WQX6W4ddMmoVssnohhC", "W4VdUMVdOCo3DSkuxL8z", "oCkbqSkx", "WRJdSCoOWQBcQa", "WP/cUYZcPmoi", "W5O4W57dImoCFaGIWP3dTG", "WOhcVCoum01kBG", "xIVdHdhdLSopuSoB", "W77cSCkaW7e8", "DWDEDqa", "jSkapwi", "jSopbCo3W6a", "ocyzWP7dLq", "pGPQt8kDWQ/cT8ktWOhcKa", "WR97oSoQcJZdLq", "mGyAWQy", "h8o2WQCHW7q", "W5/dLWxcUSoC", "AfSRW7TvW7G", "EvSQW7G", "x8oZzxhdNvXB", "WRDnvaNcIq", "W6OhpCkfW7RdRZJdPa", "gbddLLhdQSkvW4ZdOHrA", "vCkTW6dcQgrVW6nK", "n0JcHmk1D8khW57cRq", "uvOCWR7dPa", "W7xcSCo5WRFdTW", "W5RcVmo5WOpdIq", "EmogkmoxBW", "W6FcSmoM", "WQHxW684W7/dOWa7WRBdUq", "s8ozo8omFq", "uc8QW4Kg", "WOhdGSocWOddVq", "vdBdId3dOCooxmohW6lcJq", "W6VdJrdcGG", "WQNdMSocWPddRW", "WP/cTtpcVa", "W7lcSmo/EZv5", "WOJcUCowl0DhAmkq", "WOpdQueFW606W5KuWRK", "W7pcSmoMvtDOrSohrmom", "fM/cVYO", "W6pcUSo/zc95qmol", "yJBdIdtdL8onhCoxW4tcKa", "WOddSmoDWOi", "W60kn8kI", "W6mckSkjW6hdObVdPCo0Ba", "Aa1EtCky", "smo9emo/zq", "WP4OW5ZdNCoq", "WPhcQSkRW4eRWQZdJ8oRiIK", "W6pcVmooWPRdPmkV", "W6hcOmoMEZnWvCoxCSoq", "Ef4/W64", "WOakeSk8dq", "dW3dUwpdKCk+", "W7xcQCoHWPRdKG", "WRBcI8obl34", "EmkPW4lcMwC", "W7ddPXRcTSon", "WQegnSkTcW", "WOzKuYq", "WOJcPJBcT8oCiSow", "W41PWReP", "DHuEW4yj", "W4ZcQCkNW4u+WRFdGmoI", "bhfJWQpcJG", "W4XOWOyQiMpdJG", "WQWCW4BdHSof", "i0xcMgm", "hmkOfSovzSkwWO5+", "W5vDWQq+W5u", "W5pdIaNcP8o0", "WQxcMSkQlqK", "WOLEeSoxiXFdGSkHW6/cNG", "W6BdPr3cK8o7", "WPnzdmooyqldQCkW", "rmkFWPX7WOFcTmoa", "DvOZW78dW7tcOCk3W7VcLq", "W6tdLWpcLmoYWOmbWRG", "WQFcS8oYbui", "DZtdRZ7dUG", "W6jeemo+sSkUh3G6WOC", "W5zZWR0/m27dMCoz", "WPRdJLddMCkM", "W595W4NcUCkmWOL+W7W", "W67dLHtcI8oK", "oduDWQFdJa", "dCoWgCoeW5u", "xWpdGZldLW", "WPxdKLpdJSke", "WO7dGhxdS8k0", "vY42W4KFpNXxW5K", "W5VdQCkBxX0bl8kiW5D1tuLP", "WOGOW4ddKmoiDe0", "sSobr1JdUq", "W7pcPCo+FtC", "W5tdRmkv", "WQxcTSk7hG", "mmkDj3BdOfpdLSk+ogy", "usxdIZW", "WRlcKCkDirS", "nmkLl1ZdMa", "yHriyCkR", "WPhcVCowevTwcG", "W7nHWRahba", "WOTXWQeIl2BdN8ktiMK", "WOGOW53dK8oFCG", "omoUWQ4RW68", "W4lcM8ogWQZdUW", "WPNcVsNcN8o/", "gSkfrCklWOe", "W7BdIG3cJb8", "kMtcKZ97", "yMW0WO7dJq", "pSowjmokW55Vgq", "WOxcKSktpcG", "yqFcMmkvDSko", "DaZdIHBdJW", "r8k6W6BcS3n8", "WOBdUCoKWOtdIa", "dhj0WOhcRW", "WR5HW5ddOSk9", "ESkNWPrqWQe", "W79eECkIW7FdUIRcUSo5Eq", "jKr8WQFcHCkl", "mffGWQhcIq", "va1TzIa", "FtPO", "mWhdL1FdSa", "W7TuWQu1W67dSG", "bsVcPsTvqSk+WPz9FW", "phj7WPBcHa", "W63dVmkWgGSKWQy", "tX5vDb8", "WRespCkMeW", "WQtdTSoqWOZdQW", "sbixW5Sp", "W4tdRbJcNb7dGW", "W6btWRCK", "W5LxWOe1W6W", "BmoehCocW6lcOSk1gX/dKG", "WPFcVGZcKSoA", "kCkjqmkgWQK", "W6pcVmoeWPK", "WRddTCosW7FcRa", "WPyrnCk3mG", "W6TSW4JcMmkO", "WPnbx8ook0/cO8kWW7JcMa", "CCkZWRnCWRe", "W53cRmorWR/dLq", "W6tcP8o4WOddS8k0BdG", "WQJcV8oAagy", "xsddKJVcGSopu8ofW5tcLG", "qmoQW5/dO8k1", "WO7cUCogaL4", "WRxcSmkwpdW", "umkJW5FcSeW", "cCo8W7/dNCoHcHyMDKS", "WQNcGXtcImoy", "WP/dSCoiWRtcIG", "WRFcQCogjfK", "v8o8hCozvmkDW4yXWP9U", "mCknigJdMG", "WRiyWR0z", "W6dcSmohWQ/dVeFdIqzFfq", "WQ5rgmoKlq", "WOFdOfq", "W6JcOCo/Ea", "WQfNWPVcLCkTdeelqYW", "WPdcSthcT8oplW", "yCkwDCkxW7WcumokgxO", "W540amkGW5a", "W7X3W4VcV8kj", "xciUW4qi", "WQCqWQuy", "WOxcQCksacK", "bSooWQudW7S", "W7ZcP8oiWPxdTCk0Bte", "WQ/dMhJdSCkD", "EX3cH8k2F8kq", "BWeAWQ3dOCoUbNSZxq", "FbqlWRhdQCo4f2KZsG", "WR/dKslcICoOmCk4W5G", "WPtdQLqnW7i", "m8knqSkuWRJdSW", "uCoSdCoFk8kAW50SWOH/", "WRBcTSk3jWmKW63dPMhdTG", "W6tcUSoXys55wSoAy8ov", "fmkQWR7dV1S/WRuZfNW", "wcxcM8k5uG", "WRVcTSockuS", "WPVdTmoCWOFcRa", "mSkktCkjWOy", "gCoUi2JcGvqzWQLgWRi", "WO/cVColeKy", "BfzRWQ7cJSkCh2Og", "erOLWPxdJG", "WQTLW7pdLSoC", "WQaNW6NdRCosWQmUW5JdKmk9", "FgGzWOZcIcrdWQbfnW", "WOrtW57dMmkq", "wsuSW6qca1PP", "WQdcRSobdgi", "WOORW7ZdTmoS", "W7xdHWhcISo2WO4h", "WOj6xZZcQCooESoiWP8Q", "WPy8dmoOCG", "WRnqDCo3WQtdGNRcOSk1ka", "m8oDlmooW58", "WRWodSojDmoblL7dIq", "WQVcQSowjwS", "W4z6WRGJ", "W7pdGbBcKmoP", "W7ddOdVcVmo+", "WO/dUSkMW5aNWRNdHSoXF3K", "WQjfW5xdTCkd", "fqigWP/dVW", "W71yWRO5cG", "WRDWW5pdG8oOtHqfeNC", "z8oMkSoauq", "WQvwW7xdKCks", "WR3dQZhcSCo1", "W59UWP8LW7q", "pmkhsa", "ygGFWOZdHIrv", "oCkSw8kWWRG", "WOFcH8k1", "mCkMDCk8WOC", "E8khoxhdOu7cJ8o8zdq", "uSo8W6ddNmkn", "W6DmBCo9smk2gY1mW4BcQSkghq", "WQZcKmoGivK", "WPSkcSoyuCoAo1BdSMy", "u8kwWOvBWQxcR8obW5hcVLS", "qCoGW73dM8kThHOXyh0", "DHC6W6ddLCodg24wga", "wsuSW7K5nwX7W6eb", "WRpdGshdVmkuWQfNWRFcTCkd", "ECoqqhJdLW", "lstdKSo6l8oBW4/cVMzK", "fXFdLG3cVmkuW6ZdQbbc", "WR3cOXRcL8o/", "W57dTdRcPmoFESkg", "x8o8dmog", "WRJcIZpcNSoMamkWW4tdMCkV", "orddO3BdQW", "WOpdLJxcLSoIkCk+WOBcHa", "wmoJW7FcSMjVW6W", "WQCYWRCPlq", "nHWA", "r8k0WOv5WQq", "smo3y1hdN01fWRaBWRO", "W4JdN8oOw2SrW4dcHWmeWQlcGW", "m8krmwq", "zSk7W5n2ixTMW4ddRXa", "WQ7dMg7dT8kz", "WRpcN8kqcq", "leX3xCklW67cSmoyW4NcGa", "WPlcH8k1aq", "WRNcNq7cT8oT", "WPpcGSollMq", "WR4lgmo+uCouoea", "vSkdW59Wpq", "WRD0W5VcOmkoWO90wtaP", "W7nRWPKPlG", "WQ8CW7xdTmoW", "jmkBj2pdUXZcK8o7lxW", "W7hdIrhcO8oHqCkKWOOiW7m", "W6mckSkVW7RcRI/dVSoVFq", "usfQuCk3", "AvS0W6jkW77cQG", "amkbwmkwWQhdQa", "htq3W5GmgGv4W7aw", "WONcJrRcUSoi", "eCoPfmozW7i", "WQKJW6ddKCot", "W5D+WQiQmxtdKG", "W7pcOCoGFs17", "k8khwmksWQa", "mmoDnmoQW4PfeSkrsYe", "W6PZW4xdP8okW4q/Cxzs", "WQVdHtVcJ8o4D8oY", "W6jIW43cTCkpWOW", "WPpdTmoGWOr5W77cNmk1A3e", "WRvOEchcNG", "WRGaW5hdS8og", "W6FdGalcVtu", "WQpdS8oxWR/dVfddGXW", "W4X1WROQmu/dO8oZhG", "WPrweSoc", "cmoeqmkyoSobW79TW4KN", "WPy3W6CdCJ/cM8kmyJu", "A8kxl8oFW5jjemkAgW", "yCkGW7fKnLLIW4RdQaa", "WPZcQCobbe1bAq", "weCpW7a", "cvNdKvhdVCkBW67dVb5c", "WRhdO8kjW6JdPL7dLeHtxa", "B10gW6BcS8k3xhaQgq", "n1f6WRa", "nbCA", "W7jDW4RcISkr", "WQTVtdxcSCooyCocW5vJ", "WORdQ8ouWPC", "FazQtSkgW6O", "CmkXW6jIjYK", "W4X6xYlcTmopDSogW4uI", "WPhdSSoGWQxcMW", "r3WxWRJdJG", "W7zFWQe0", "W7W3pCk1W44", "WP/dS8o6WPv8W6RcJmk7EtG", "rIhdINddI8oswmoyWOW", "WRWEk8oevW", "W4ZdTrtcGSoo", "zmojW7NdVSkr", "jSkgpwRdPq", "WRTHW4FdO8kc", "W7pcQmoUW6JcSa3cJXvBxa", "WP55WRS9j2ldHCktihO", "qSkyW6xcU1C", "W4fKWOmAW5C", "W7jxWRWK", "WPhcQCkVW4CPWR8", "aM8OW40zhHyMWROx", "W7JdO8orWQBdQ1ldLabE", "bgFcQq", "qWddLJtdUG", "W5lcUSo3CGe", "W4VcPmk2W4e", "WRuvmSkR", "zHulW7SQ", "dCkeehhdIG", "FmkSWO5RWOS", "wbDYtCk6", "W67dIb7cMtu", "W7vgWR81W6pdOG", "W4zBfSkhlb7dOmkZW67dLW", "rcjuF8kW", "W5tdSrBcUSoC", "W7FcJSoNWP3dTW", "nuLNWQhcGa", "WPJdQW7cKrxdGLtdOmkuqG", "smo3qhFdIW", "xGBcUSkCtq", "WQLDzCkIW7/dUgVdTmo3Fq", "Eaj3", "vaDowSke", "bw7cIWf5", "WRSaWOCFlG", "ECkbW7tcLg4", "nhhcHH9n", "W7jxWQS1W4ldSXi", "W5rweCoajbpcRmkKW7tcMq", "wgKoW5Xi", "ySkMW793ph16W57dQq", "WQNdLqlcT8oIbmkPWPiSW6W", "W4v1W4RcMmkt", "WPLRvG", "W5LyeCoajb3dSG", "tmo7n8owqW", "W77dPGFcGmoz", "WPpcJ8k3cq", "WO3cGtZcV8oZ", "bKtcKJ9u", "WR/dT8okWPJdTCoGAcXXva", "WRayWQu", "oKPVWQy", "WQRdIv7dKSkh", "iCozlmoAW4nVgq", "mHBdLL0", "WPuhW5NdSSog", "rSkRW6lcUw9DW7r8vIG", "dIJdJNddGCokxmogW5ldNW", "W6ddIYdcJ8oKmmk1WOhdJmkV", "wZPVF8k2", "WP8CW7hdTmo+", "W7/dKshcVmo+", "WOBcUCoqbMzmh3a", "D8k6W6ZcKMa", "W5tcQ8odWP7cUt3dGJm", "pmkerCkqWQC", "WPdcObVcQCou", "rHLGyCk1", "W5hdUt3cSty", "WOPhxbhcKG", "W6VcICkKW7GD", "WQldL8o/WQddTIdcIghcQWO", "WRxcPmkXdq0", "WOz5AdxcVmofAa", "W6ddHWu", "W4ZcS8ole1nEqN3cRCoa", "WPBdPeWzW7S", "yLacWR/dHq", "vqpdVWNdMG", "WOdcSCoka31ag3NcQCog", "Bq5qssu", "WPxcUbNcHXpcMrC", "WP7dRIFcS8oJ", "EtzDzZS", "jmoilmogW5i", "wSoNg8obzSkwW50OWRHN", "W6BcUSoGusj/xa", "C0OJW7Lq", "WRddHsRcGSoHmmk6W4xcMmoW", "xHbpzq", "W7ddKYtcG8ov", "uthdLsldH8oixSom", "vSoUW6xdLG", "WPVdPCouWOZcQW", "W7JcUmozWPZdKq", "W5RdUJ7cGXS", "W7NcOSorWRxdGa", "Dd7dTGRdTa", "oWpcJ8kME8kmWONdRJ4T", "WRRdVwZdSSk/", "W77cHcpcNSo/kCkYW4ldN8oZ", "W4JcHSoyrqq", "AuWL", "sZ/dHthdGConwSohW47cLW", "W6hcVSkYpfi8W5xdHgBcVa", "W6jEWOa", "W73cUmkQW745", "A8o2yfldQG"];
  _0xd317 = function () {
    return _0x29c486;
  };
  return _0xd317();
}
_0x1f9055.shippingCustom = function () {
  return;
};
simpleCart(_0x1f9055);
$("#ongkos").on("change", function () {
  simpleCart.update();
});
simpleCart({
  "shippingCustom": function () {
    return $("#ongkos").find(":selected").val() / 1;
  }
});
$(function () {
  var _0x1137fc = {
    "prov_id": ''
  };
  $.get("https://simpeltoko.id/cek_provinsi.php", _0x1137fc).done(function (_0xd1d178) {
    var _0x11e0aa = JSON.parse(_0xd1d178);
    $.each(_0x11e0aa.rajaongkir.results, function () {
      $("#provinsi").append("<option value=\"" + this.province_id + "\">" + this.province + "</option>");
    });
  });
  $("#kabupaten").change(function () {
    var _0xc34f5f = $("#kabupaten").find(":selected").val();
    $.ajax({
      "type": "GET",
      "url": "https://simpeltoko.id/cek_kecamatan.php",
      "data": "kab=" + _0xc34f5f,
      "success": function (_0x3cb9ff) {
        $("#kecamatan").html("<option value=\"default\">Pilih Kecamatan</option>" + _0x3cb9ff);
      }
    });
  });
  $("#provinsi").change(function () {
    var _0x5c3f18 = $("#provinsi").find(":selected").val();
    $.ajax({
      "type": "GET",
      "url": "https://simpeltoko.id/cek_kabupaten.php",
      "data": "prov_id=" + _0x5c3f18,
      "success": function (_0x1864ed) {
        $("#kabupaten").html("<option value=\"default\">Pilih Kabupaten/Kota</option>" + _0x1864ed);
      }
    });
  });
  $("#kurir").change(function () {
    var _0x230bf0 = $("input[name=origin]").val();
    var _0x4656ed = $("#kecamatan").find(":selected").val();
    var _0x2b37b4 = $("#total-berat").attr("data-berat");
    var _0x4bdfd5 = [];
    $("#ongkos").html("<option value='default'>Pilih Ongkir</option>");
    if ($("#kurir").val() == "cod") {
      var _0x2d5f47;
      var _0x53b65e = "<option value='default'>Pilih Ongkir</option>";
      for (_0x2d5f47 = 0; _0x2d5f47 < ongkirCOD.length; _0x2d5f47++) {
        _0x53b65e += "<option value=\"" + ongkirCOD[_0x2d5f47].harga + "\" name=\"" + ongkirCOD[_0x2d5f47].nama + "\">" + angkaToRp(ongkirCOD[_0x2d5f47].harga) + " (" + ongkirCOD[_0x2d5f47].nama + ")</option>";
      }
      $("#ongkos").html(_0x53b65e);
    } else {
      function _0x168027(_0x704116) {
        var _0x2599ab = {
          kec: _0x4656ed,
          kurir: _0x704116
        };
        _0x2599ab.asal = _0x230bf0;
        _0x2599ab.berat = _0x2b37b4;
        $.ajax({
          "type": "POST",
          "url": "https://simpeltoko.id/cek_ongkir.php",
          "data": _0x2599ab,
          "success": function (_0x552111) {
            json = JSON.parse(_0x552111);
            results = json.rajaongkir.results;
            test = [];
            results.map((_0x326ba3, _0xe9e7bf) => {
              _0x326ba3.costs.map((_0x24e19a, _0x21dc81) => {
                let _0xbb31a7 = _0x24e19a.cost[0].value;
                let _0xb0cda = _0x326ba3.name.replace(/&/g, "N");
                let _0x483a9c = _0x326ba3.code.toUpperCase();
                let _0x4f7307 = angkaToRp(_0x24e19a.cost[0].value) + " (" + _0x483a9c + " " + _0x24e19a.service + ")";
                let _0x384824 = _0x24e19a.service;
                let _0x263314 = _0x24e19a.cost[0].etd;
                $("#ongkos").append("<option value=\"" + _0xbb31a7 + "\" etd=\"" + _0x263314 + "\" service=\"" + _0x384824 + "\" name=\"" + _0xb0cda + "\">" + _0x4f7307 + "</option>");
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
      _0x4bdfd5.forEach(_0x401049 => {
        _0x168027(_0x401049);
      });
    }
    ;
  });
});

function simpleHarga() {
  $(".data-produk").each(function () {
    var _0x25c252 = $(this);
    var _0x53730 = _0x25c252.data("id");
    $.ajax({
      "url": "/feeds/posts/default/" + _0x53730 + "?alt=json",
      "type": "get",
      "dataType": "jsonp",
      "success": function (_0x49b4c6) {
        var _0x161c7f = _0x49b4c6.entry.content.$t;
        var _0x1c460c = $("<div>").html(_0x161c7f);
        var _0xfe8fc1 = _0x1c460c.find("b:contains(\"harga/\")");
        var _0x5d4237 = _0x1c460c.find("b:contains(\"keterangan/\")");
        var _0x21bb96 = _0x1c460c.find("b:contains(\"diskon/\")");
        var _0x892551 = _0x1c460c.find("b:contains(\"off/\")");
        if (_0xfe8fc1.length > 0) {
          var _0xf8d03c = _0xfe8fc1.text().split("/")[1];
          _0x25c252.find(".harga").text(_0xf8d03c).parent().addClass("show");
        }
        if (_0x5d4237.length > 0) {
          var _0x1ac5cb = _0x5d4237.text().split("/")[1];
          _0x25c252.find(".keterangan").text(formatBerat(_0x1ac5cb)).parent().addClass("show");
          _0x25c252.find(".keterangan2").text(_0x1ac5cb).hide();
        }
        if (_0x21bb96.length > 0) {
          var _0x5f9a63 = _0x21bb96.text().split("/")[1];
          _0x25c252.find(".angka-diskon").text(_0x5f9a63).parent().addClass("show");
        }
        if (_0x892551.length > 0) {
          var _0x50b427 = _0x892551.text().split("/")[1];
          _0x25c252.find(".harga-diskon").text(_0x50b427).addClass("show");
        }
      }
    });
  });
}
$(".post-content .post-body").each(function () {
  var _0x1d5a9b = $(this);
  var _0x5d6aac = _0x1d5a9b.find("b:contains(\"harga/\")");
  var _0x47df98 = _0x1d5a9b.find("b:contains(\"diskon/\")");
  var _0x212fba = _0x1d5a9b.find("b:contains(\"keterangan/\")");
  a = _0x1d5a9b.find("b:contains(\"off/\")");
  if (_0x5d6aac.length > 0) {
    var _0x55884c = _0x5d6aac.text().split("/")[1];
    $(".kotak-harga").find(".harga").text(_0x55884c).parent().addClass("show");
    _0x5d6aac.hide();
  }
  if (_0x212fba.length > 0) {
    var _0x256213 = _0x212fba.text().split("/")[1];
    $(".kotak-harga").find(".keterangan").text(formatBerat(_0x256213)).parent().addClass("show");
    $(".kotak-harga").find(".keterangan2").text(_0x256213).hide();
    _0x212fba.hide();
  }
  if (_0x47df98.length > 0) {
    var _0x395e14 = _0x47df98.text().split("/")[1];
    $(".diskon-produk").find(".angka-diskon").text(_0x395e14).parent().addClass("show");
    _0x47df98.hide();
  }
  if (a.length > 0) {
    var _0x2be0e8 = a.text().split("/")[1];
    $(".kotak-harga").find(".harga-diskon").text(_0x2be0e8).addClass("show");
    a.hide();
  }
});
$(function () {
  function _0x1e689a(_0x2241be, _0x3e7160) {
    for (var _0x3da808 = 0; _0x3da808 < _0x2241be[_0x3e7160].link.length; _0x3da808++) {
      if ("alternate" == _0x2241be[_0x3e7160].link[_0x3da808].rel) {
        var _0x5eb18c = _0x2241be[_0x3e7160].link[_0x3da808].href;
        break;
      }
    }
    return _0x5eb18c;
  }
  function _0x407c46(_0x9de01e, _0x5e3b30) {
    var _0x52d9c6 = _0x9de01e[_0x5e3b30].title.$t;
    var _0x10eb3a = _0x9de01e[_0x5e3b30].content.$t;
    var _0x3bada6 = $("<div>").html(_0x10eb3a);
    if ("media$thumbnail" in _0x9de01e[_0x5e3b30]) {
      var _0x494e7b = _0x9de01e[_0x5e3b30].media$thumbnail.url;
      var _0x51c76b = _0x494e7b.replace(/.*?:\/\//g, "//");
      _0x51c76b = _0x51c76b.replace(/\/[w,s][0-9][0-9].*\//g, "/w300-h300-c-rw/");
      if (_0x51c76b.indexOf("/w300-h300-c-rw") == -1) {
        _0x51c76b = _0x494e7b.replace("s72-c", "w300-h300-c-rw");
      }
      if (_0x10eb3a.indexOf("youtube.com/embed") > -1) {
        _0x51c76b = _0x494e7b.replace("/default.", "/hqdefault.");
      }
    } else {
      _0x51c76b = _0x10eb3a.indexOf("<img") > -1 ? _0x3bada6.find("img:first").attr("src") : noThumbnail;
    }
    return "<img alt=\"" + _0x52d9c6 + "\" src=\"" + _0x51c76b + "\"/>";
  }
  function _0x543a38(_0xf2fc2f, _0x2b21d5) {
    var _0x39cb6b = _0xf2fc2f[_0x2b21d5].content.$t;
    var _0x1374bc = $("<div>").html(_0x39cb6b);
    var _0x4a312b = _0x1374bc.find("b:contains(\"harga/\")");
    var _0x43cafc = _0x1374bc.find("b:contains(\"off/\")");
    if (_0x4a312b.length > 0) {
      var _0xff4719 = _0x4a312b.text();
      var _0x5ac53b = _0xff4719.split("/");
      var _0x43a385 = _0x5ac53b[1];
    }
    if (_0x43cafc.length > 0) {
      var _0x5718ee = (_0x5ac53b = (_0xff4719 = _0x43cafc.text()).split("/"))[1];
    }
    if (null != _0x43a385) {
      var _0x50f4a2 = "<span class=\"harga\">" + _0x43a385 + "</span>";
    } else {
      _0x50f4a2 = '';
    }
    if (null != _0x5718ee) {
      var _0x5081fb = "<span class=\"harga-diskon show\">" + _0x5718ee + "</span>";
    } else {
      _0x5081fb = '';
    }
    return [_0x50f4a2, _0x5081fb];
  }
  function _0x5755ec(_0x330cb1, _0x3cbcc8, _0x23cd7c, _0x331649) {
    if (_0x3cbcc8.match("recent-label") || _0x3cbcc8.match("recent-flash") || _0x3cbcc8.match("related")) {
      var _0x15af59 = '';
      _0x15af59 = "recent" == _0x331649 ? "/feeds/posts/default?alt=json-in-script&max-results=" + _0x23cd7c : "random" == _0x331649 ? "/feeds/posts/default?max-results=" + _0x23cd7c + "&start-index=" + (Math.floor(Math.random() * _0x23cd7c) + 1) + "&alt=json-in-script" : "/feeds/posts/default/-/" + _0x331649 + "?alt=json-in-script&max-results=" + _0x23cd7c;
      $.ajax({
        "url": _0x15af59,
        "type": "get",
        "dataType": "jsonp",
        "beforeSend": function () {
          if (_0x3cbcc8.match("recent-label")) {
            _0x330cb1.html('').parent().addClass('');
          }
        },
        "success": function (_0x5302ce) {
          if (_0x3cbcc8.match("content_b")) {
            var _0x1f56f2 = "<ul>";
          } else if (_0x3cbcc8.match("recent-label")) {
            _0x1f56f2 = "<ul class=\"recent-label\">";
          } else if (_0x3cbcc8.match("recent-flash")) {
            _0x1f56f2 = "<ul class=\"recent-widget\">";
          } else if (_0x3cbcc8.match("related")) {
            _0x1f56f2 = "<ul class=\"related-product owl-carousel\">";
          }
          var _0x26b54f = _0x5302ce.feed.entry;
          if (null != _0x26b54f) {
            for (var _0x25f646 = 0; _0x25f646 < _0x26b54f.length; _0x25f646++) {
              var _0x313343 = _0x1e689a(_0x26b54f, _0x25f646);
              var _0x4e57d3 = "<a href=\"" + _0x313343 + "\">" + _0x26b54f[_0x299ccd].title.$t + "</a>";
              var _0x592f9c = _0x407c46(_0x26b54f, _0x25f646);
              var _0xd29942 = _0x543a38(_0x26b54f, _0x25f646);
              var _0x3b8e30 = '';
              if (_0x3cbcc8.match("bx")) {
                _0x3b8e30 += '';
              } else if (_0x3cbcc8.match("recent-label")) {
                _0x3b8e30 += "<li class=\"hot-item item-" + _0x25f646 + "\"><div class=\"hot-item-inner\"><a href=\"" + _0x313343 + "\">" + _0x592f9c + "</a><div class=\"product-info\"><h2 class=\"post-title\">" + _0x4e57d3 + "</h2>" + _0xd29942[0] + _0xd29942[1] + "</div></div></li>";
              } else if (_0x3cbcc8.match("recent-flash")) {
                _0x3b8e30 += "<li class=\"item-" + _0x25f646 + "\"><a class=\"post-image-link\" href=\"" + _0x313343 + "\">" + _0x592f9c + "</a><div class=\"product-info\"><h2 class=\"post-title\">" + _0x4e57d3 + "</h2>" + _0xd29942[0] + "</div></div></li>";
              } else if (_0x3cbcc8.match("related")) {
                _0x3b8e30 += "<li class=\"related-item item-" + _0x25f646 + "\"><div class=\"shadow\"><div class=\"post-image-wrap lazyload\"><a class=\"post-image-link lazyload\" href=\"" + _0x313343 + "\">" + _0x592f9c + "</a></div><h2 class=\"post-title\">" + _0x4e57d3 + "</h2><div class='widget-harga-wrap'>" + _0xd29942[0] + _0xd29942[1] + "</div></div></li>";
              }
              _0x1f56f2 += _0x3b8e30;
            }
            _0x1f56f2 += "</ul>";
          }
          if (_0x3cbcc8.match("bx")) {
            _0x330cb1.addClass('').append(_0x1f56f2);
            _0x330cb1.find('').attr('', function (_0x54b8de, _0x2e396e) {
              return _0x2e396e.replace(_0x2e396e, '');
            });
          } else if (_0x3cbcc8.match("recent-label")) {
            _0x330cb1.html(_0x1f56f2).parent().addClass("show-hot");
          } else {
            _0x330cb1.html(_0x1f56f2);
          }
        }
      });
    }
  }
  $(".related-ready").each(function () {
    var _0x28f560 = $(this);
    var _0x375697 = _0x28f560.find(".related-tag").data("label");
    _0x5755ec(_0x28f560, "related", 10, _0x375697);
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
var a;
var rekening = '';
function _0x4400b1(_0x45e06a, _0x3850dc, _0x32e99c, _0x353f30) {
  return _0x5557(_0x353f30 + 0x331, _0x3850dc);
}
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
  var _0x30b42c = {
    items: 0x1,
    stagePadding: 0x0
  };
  var _0x134fdd = {
    "0": _0x30b42c
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
    "responsive": _0x134fdd
  });
});
$(window).on("load", function () {
  var _0x3cd879 = {
    items: 0x1,
    stagePadding: 0x0
  };
  var _0x2df129 = {
    items: 0x2
  };
  var _0x39bd25 = {
    items: 0x3
  };
  var _0x59d8bb = {
    items: 0x4
  };
  var _0x2fb08d = {
    "0": _0x3cd879,
    "340": _0x2df129,
    "641": _0x39bd25,
    "800": _0x59d8bb
  };
  $("#related-kategori .owl-carousel").owlCarousel({
    "stagePadding": 0x0,
    "loop": 0x1,
    "autoplayHoverPause": true,
    "autoplay": true,
    "autoplayTimeout": 0x1388,
    "margin": 0xa,
    "nav": true,
    "navText": ["<svg viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"/></svg>", "<svg viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"/></svg>"],
    "responsive": _0x2fb08d
  });
});
$(".jumlah-produk input").on("keyup", function () {
  var _0x430208 = parseInt($(".jumlah-produk input").val());
  if (1 >= _0x430208) {
    $(".jumlah-produk input").val(1);
    totalPrice(1);
  }
  $(this).parents(".jumlah-produk").attr("data-selected", _0x430208);
});
$(".jumlah-produk .min").on("click", function () {
  var _0x320179 = parseInt($(".jumlah-produk input").val()) - 1;
  if (1 >= _0x320179) {
    $(".jumlah-produk input").val(1);
    $(this).parents(".jumlah-produk").attr("data-selected", 1);
  } else {
    $(".jumlah-produk input").val(_0x320179);
    $(this).parents(".jumlah-produk").attr("data-selected", _0x320179);
  }
});
$(".jumlah-produk .plus").on("click", function () {
  var _0x14ebe7 = parseInt($(".jumlah-produk input").val()) + 1;
  $(".jumlah-produk input").val(_0x14ebe7);
  $(this).parents(".jumlah-produk").attr("data-selected", _0x14ebe7);
});
!function () {
  var _0x45a3f5 = document.querySelectorAll(".youtube");
  for (var _0x2d8c1e = 0; _0x2d8c1e < _0x45a3f5.length; _0x2d8c1e++) {
    var _0x34977d = "https://img.youtube.com/vi/" + _0x45a3f5[_0x2d8c1e].dataset.embed + "/sddefault.jpg";
    var _0x5f0163 = new Image();
    _0x5f0163.src = _0x34977d;
    _0x5f0163.addEventListener("load", void _0x45a3f5[_0x2d8c1e].appendChild(_0x5f0163));
    _0x45a3f5[_0x2d8c1e].addEventListener("click", function () {
      var _0x5928e6 = document.createElement("iframe");
      _0x5928e6.setAttribute("frameborder", "0");
      _0x5928e6.setAttribute("allowfullscreen", '');
      _0x5928e6.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
      this.innerHTML = '';
      this.appendChild(_0x5928e6);
    });
  }
}();
