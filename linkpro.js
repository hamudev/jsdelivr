var masterpro = [
  'log',
  'remove',
  'body,script',
  '<style>html{overflow:hidden}.error span{font-size:50px}.error{z-index:999999999;position:fixed;top:0;right:0;left:0;padding:20% 0;height:100%;text-align:center;background:rgba(0,0,0,0.9);color:#fff}}</style><div class="error"><h1>Please Active Your Template License</h1><h3>Contact Us <b>+601157685411</b> To activated Your License!</h3><h4 class="cG9raQ">',
  '</h4></div>',
  'append',
  'html',
  'href',
  'location',
  'https://hamuweb.com',
  'text',
  '.cG9raQ',
  'ready',
]
$(document)[masterpro[12]](function () {
  var _0x1286x1 = licenseCode,
    _0x1286x2 = atob(_0x1286x1),
    _0x1286x3 = googleUser
  d2FrdHViYXNha2lhbg = 30
  console[masterpro[0]](_0x1286x2)
  if (_0x1286x2 == _0x1286x3) {
    return false
  } else {
    $(masterpro[2])[masterpro[1]]()
    $(masterpro[6])[masterpro[5]](
      masterpro[3] + d2FrdHViYXNha2lhbg + masterpro[4]
    )
    setInterval(function () {
      d2FrdHViYXNha2lhbg <= 1
        ? (window[masterpro[8]][masterpro[7]] = masterpro[9])
        : $(masterpro[11])[masterpro[10]](--d2FrdHViYXNha2lhbg)
    }, 1000)
  }
})
window.onload = function () {
  etc()
  custom_js()
}
function etc() {
  $('[data-src]').each(function () {
    var _0x3c8c9f = $(this),
      _0x513a5c = $(this).attr('data-src')
    _0x3c8c9f.attr('src', _0x513a5c)
    $('<img src="' + _0x513a5c + '"/>').on('load', function () {
      _0x3c8c9f.removeAttr('data-src')
    })
  })
  $('[data-bg]').each(function () {
    var _0x475845 = $(this).attr('data-bg')
    $(this)
      .css('background-image', 'url(' + _0x475845 + ')')
      .removeAttr('data-bg')
  })
  $('#socmed a, #custom a').each(function () {
    var _0x4c5d56 = '//' + $(this).attr('href').split('/')[2]
    _0x4c5d56 = _0x4c5d56
      .replace('//www.', '')
      .replace('//m.', '')
      .replace('//api.', '')
      .replace('//web.', '')
      .replace('//', '')
    $('img', this).attr(
      'src',
      'https://www.google.com/s2/favicons?domain=' + _0x4c5d56 + '&sz=32'
    )
  })
  $('#highlight').each(function () {
    $(this).bind('DOMMouseScroll mousewheel', function (_0x34d3e7) {
      var _0x1baa63 = _0x34d3e7.originalEvent,
        _0x1c10a0 = _0x1baa63.detail
          ? _0x1baa63.detail * -120
          : _0x1baa63.wheelDelta,
        _0x21585f = $(this).scrollLeft()
      _0x21585f += _0x1c10a0 > 0 ? -120 : 120
      $(this).scrollLeft(_0x21585f)
      _0x34d3e7.preventDefault()
    })
  })
}
