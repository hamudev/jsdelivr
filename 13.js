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
