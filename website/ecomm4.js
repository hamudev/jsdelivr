const $license_item = 'hamuweb-ecommerce-template'
license()
function license() {
  function _0x4ca65b(_0x5d7804) {
    function _0x3674a9(_0x38c972) {
      try {
        return btoa(atob(_0x38c972)) == _0x38c972
      } catch (_0x19ae20) {
        return false
      }
    }
    if (_0x3674a9(_0x5d7804)) {
      _0x5d7804 = atob(_0x5d7804)
      _0x5d7804 = _0x5d7804.replaceAll('XXX', '.')
      _0x5d7804 = _0x5d7804.replaceAll('YY', '-')
      _0x5d7804 = _0x5d7804.replaceAll('O5', 'a')
      _0x5d7804 = _0x5d7804.replaceAll('E4', 'i')
      _0x5d7804 = _0x5d7804.replaceAll('U3', 'u')
      _0x5d7804 = _0x5d7804.replaceAll('I2', 'e')
      _0x5d7804 = _0x5d7804.replaceAll('A1', 'o')
      function _0xbf2401(_0x46e96f) {
        const _0x5b16a9 = _0x46e96f.split(''),
          _0x96f16e = _0x5b16a9.reverse(),
          _0x5b66cd = _0x96f16e.join('')
        return _0x5b66cd
      }
      return (_0x5d7804 = _0xbf2401(_0x5d7804)), _0x5d7804
    } else {
      return ''
    }
  }
  function _0x59a12f(_0x1ce0db) {
    var _0x4c1945 =
      '            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">            <style>hr { margin:0!important; } body { padding: 0px!important; } * { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; }</style>            <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;">                <div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;">                    <svg style="fill:#636363;width:100px;height:100px;display:block;margin:0 auto 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg>                    <h2><b>WARNING!</b> :</h2>                    <br>                    <p>' +
      _0x1ce0db +
      '</p>                    <br>                    <hr style="border:0;border-top:1px solid #ddd;">                    <br>                    <a href="https://hamwueb.com/' +
      $license_item +
      '" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:1px;">https://hamuweb.com</a>                </div>            </div>        '
    return (document.body.innerHTML = _0x4c1945)
  }
  if (typeof $license_key === 'undefined') {
    _0x59a12f('Dont remove license field <b>$license_key</b>..')
  } else {
    if (typeof $license_item === 'undefined') {
      _0x59a12f('Dont remove license field <b>$license_item</b>..')
    } else {
      if (
        location.hostname.indexOf('localhost') != -1 ||
        location.hostname.indexOf('.blogspot.com') != -1 ||
        location.hostname.indexOf('.blogger.com') != -1
      ) {
        console.log(
          'Design by. https://hamuweb.com ( Free / Trial Version )'
        )
        var _0x3711dc = document.getElementById('copyright')
        if (_0x3711dc === null) {
          _0x59a12f(
            '<b>Made with love</b><br><br><small>by Hamuweb.</small><br><br><small>#ERR_COPYRIGHT</small>'
          )
        } else {
          var _0xd5bdf5 = new Date().getFullYear()
          _0x3711dc.innerHTML =
            '&#0169;' +
            _0xd5bdf5 +
            ' &#8212; Design by. <a href="https://hamuweb.com/' +
            $license_item +
            '" target="_blank"><b>Hamuweb</b></a>'
          _0x3711dc.setAttribute(
            'style',
            'display:inline-block!important;opacity:1!important;position:static!important;visibility:visible!important;text-indent:0px!important;color:currentColor!important'
          )
        }
      } else {
        if ($license_key === '') {
          _0x59a12f(
            '<b>License Key</b> is needed..<br><br><small>#ERR_LICENSE</small>'
          )
        } else {
          const _0x4352db = _0x4ca65b($license_key).split('|')[0],
            _0x25bef4 = _0x4ca65b($license_key).split('|')[1]
          if (_0x4352db == '' || _0x4352db == undefined) {
            _0x59a12f(
              '<b>License Key</b> INVALID.</b><br><br><small>#ERR_KEY</small>'
            )
          } else {
            if (location.hostname.indexOf(_0x4352db) == -1) {
              _0x59a12f(
                '<b>Current License Key</b> only can use for : <b>' +
                  _0x4352db +
                  '</b><br><br><small>#ERR_DOMAIN</small>'
              )
            } else {
              if (_0x25bef4 != $license_item) {
                function _0x5ea708(_0x3a56ff) {
                  _0x3a56ff = _0x3a56ff.split(' ')
                  for (
                    var _0x9f134f = 0;
                    _0x9f134f < _0x3a56ff.length;
                    _0x9f134f++
                  ) {
                    _0x3a56ff[_0x9f134f] =
                      _0x3a56ff[_0x9f134f].charAt(0).toUpperCase() +
                      _0x3a56ff[_0x9f134f].slice(1)
                  }
                  return (_0x3a56ff = _0x3a56ff.join(' ')), _0x3a56ff
                }
                _0x59a12f(
                  '<b>Current License Key</b> only can use for <b>' +
                    _0x5ea708($license_item.replaceAll('-', ' ')) +
                    '</b><br><br><small>#ERR_ITEM</small>'
                )
              } else {
                console.log(
                  'Design by Hamuweb.com'
                )
              }
            }
          }
        }
      }
    }
  }
}
window.onload = function () {
  etc()
  slideshow()
  product_convert()
  product_sort()
  shortcode()
  cart()
  lazyload()
  lightbox()
  pop()
  popwin()
  timeago()
  translate()
  custom_js()
}
function cart() {
  var _0x98b432 =
    '        <fieldset>            <input type="text" name="name" placeholder="' +
    $_config.text.checkout_name +
    '" required>            <input type="tel" name="phone" placeholder="' +
    $_config.text.checkout_phone +
    '" required>        </fieldset>    '
  $_config.checkout_form.email &&
    (_0x98b432 +=
      '            <input type="email" name="email" placeholder="' +
      $_config.text.checkout_email +
      '" required>        ')
  $_config.checkout_form.address &&
    (_0x98b432 +=
      '            <textarea name="address" placeholder="' +
      $_config.text.checkout_address +
      '" required></textarea>        ')
  $_config.checkout_form.note &&
    (_0x98b432 +=
      '            <textarea name="note" placeholder="' +
      $_config.text.checkout_note +
      '"></textarea>        ')
  if ($_config.checkout_form.shipping) {
    _0x98b432 +=
      '            <select name="shipping" required>                <option value="" selected hidden>' +
      $_config.text.checkout_shipping +
      '</option>                <optgroup label="' +
      $_config.text.checkout_shipping +
      ' :">        '
    for (var _0x49176e in $_config.checkout_form_shipping) {
      var _0xe26c0 = $_config.checkout_form_shipping[_0x49176e]
      _0xe26c0.status == true &&
        ($('<img src="' + _0xe26c0.img + '"/>').on('load', function () {}),
        (_0x98b432 +=
          '                    <option value="' +
          _0x49176e +
          '" data-info="' +
          _0xe26c0.info +
          '" data-img="' +
          _0xe26c0.img +
          '">                        ' +
          _0x49176e +
          '                    </option>                '))
    }
    _0x98b432 += '                </optgroup>            </select>        '
  }
  if ($_config.checkout_form.payment) {
    $('#contact').append(
      '<p class="shippay"><b>' + $_config.text.checkout_payment + ' :</b></p>'
    )
    _0x98b432 +=
      '            <select name="payment" required>                <option value="" selected hidden>' +
      $_config.text.checkout_payment +
      '</option>                <optgroup label="' +
      $_config.text.checkout_payment +
      ' :">        '
    for (var _0x49176e in $_config.checkout_form_payment) {
      var _0x2342e4 = $_config.checkout_form_payment[_0x49176e]
      _0x2342e4.status == true &&
        ($('#contact .shippay').append(
          '<figure><img alt="' +
            _0x49176e +
            '" src="' +
            _0x2342e4.img +
            '" width="24" height="24"/><figcaption>' +
            _0x49176e +
            '</figcaption></figure>'
        ),
        $('<img src="' + _0x2342e4.img + '"/>').on('load', function () {}),
        (_0x98b432 +=
          '                    <option value="' +
          _0x49176e +
          '" data-info="' +
          _0x2342e4.info +
          '" data-img="' +
          _0x2342e4.img +
          '">                        ' +
          _0x49176e +
          '                    </option>                '))
    }
    _0x98b432 += '                </optgroup>            </select>        '
  }
  $('#cart .form').append(_0x98b432)
  $('#cart .form').on('change', 'select', function () {
    var _0x5d0124 = $(this),
      _0x5d6bad = _0x5d0124.val(),
      _0x22e48b = $('option:selected', _0x5d0124),
      _0x14c02b = _0x22e48b.attr('data-info'),
      _0x2149dd = _0x22e48b.attr('data-img')
    _0x5d0124.prev('.detail').remove()
    $('<img src="' + _0x2149dd + '"/>').on('load', function () {
      $(
        '                <div class="detail">                    <img src="' +
          _0x2149dd +
          '">                    <h4>' +
          _0x5d6bad +
          '</h4>                    <p>' +
          _0x14c02b +
          '</p>                </div>            '
      )
        .insertBefore(_0x5d0124)
        .hide()
        .fadeIn()
    })
  })
  $('#cart .form').on('click', '.detail', function () {
    $(this).next('select').focus()
  })
  var _0x31ae04 = []
  localStorage.cart &&
    ((_0x31ae04 = JSON.parse(localStorage.cart)), _0x5e1fbd())
  $('.product').on('click', '.cart-add', function () {
    var _0x1a7ba8 = $(this).closest('.product'),
      _0x381396 = Number(_0x1a7ba8.attr('id')),
      _0x1590d2 = $('.img', _0x1a7ba8).attr('src'),
      _0x2eebb5 = location.href,
      _0x329a71 = $('.title', _0x1a7ba8)
        .text()
        .replace(/\n/g, '')
        .replaceAll('  ', ''),
      _0x2864bb = '',
      _0x4984f6 = Number($('.price b', _0x1a7ba8).attr('data-price')),
      _0x3417e9 = Number($('.price', _0x1a7ba8).attr('data-weight')),
      _0x4c8bc7 = $('.price', _0x1a7ba8).attr('data-unit'),
      _0x36d334 = Number($('.qty input', _0x1a7ba8).val())
    $('.variant', _0x1a7ba8).length &&
      $('.variant button.active', _0x1a7ba8).length &&
        ((_0x381396 =
          _0x381396 +
          '|' +
          $('.variant label', _0x1a7ba8)
            .text()
            .replace(/\n/g, '')
            .replaceAll('  ', '') +
          ' : ' +
          $('.variant button.active', _0x1a7ba8)
            .text()
            .replace(/\n/g, '')
            .replaceAll('  ', '')),
        (_0x2864bb = {
          label: $('.variant label', _0x1a7ba8)
            .text()
            .replace(/\n/g, '')
            .replaceAll('  ', ''),
          value: $('.variant button.active', _0x1a7ba8)
            .text()
            .replace(/\n/g, '')
            .replaceAll('  ', ''),
        }))
    $('#cart-btn').removeClass('open')
    setTimeout(function () {
      $('#cart-btn').addClass('open')
    }, 100)
    for (var _0x266253 in _0x31ae04) {
      if (_0x31ae04[_0x266253].id == _0x381396) {
        _0x31ae04[_0x266253].qty = _0x36d334
        _0xf396a0()
        _0x5e1fbd()
        return
      }
    }
    var _0x16adfe = {
      id: _0x381396,
      img: _0x1590d2,
      title: _0x329a71,
      link: _0x2eebb5,
      variant: _0x2864bb,
      price: _0x4984f6,
      weight: _0x3417e9,
      unit: _0x4c8bc7,
      qty: _0x36d334,
    }
    _0x31ae04.push(_0x16adfe)
    _0xf396a0()
    _0x5e1fbd()
  })
  $('#cart-btn, .cart-btn-head').on('click', function () {
    $('#cart').addClass('open')
    $('body').css('overflow', 'hidden')
  })
  $('#cart-close').on('click', function () {
    $('#cart').removeClass('open')
    $('body').css('overflow', 'auto')
  })
  $('#cart').on('click', '.qty button', function () {
    var _0x4322b6 = $(this).closest('.item'),
      _0x5245ed = Number($('.qty input', _0x4322b6).val())
    $(this).text() == '-'
      ? (_0x5245ed = _0x5245ed - 1)
      : (_0x5245ed = _0x5245ed + 1)
    $('.qty input', _0x4322b6).val(_0x5245ed).trigger('change')
  })
  $('#cart').on('change', '.item .qty input', function () {
    var _0x27ce58 = $(this).closest('.item'),
      _0x3eb5d3 = _0x27ce58.attr('data-index'),
      _0x1460ef = Number($(this).val())
    if (_0x1460ef > 0) {
      _0x31ae04[_0x3eb5d3].qty = _0x1460ef
      _0xf396a0()
      _0x5e1fbd()
      return
    } else {
      !confirm($_config.text.cart_remove)
        ? ((_0x1460ef = 1),
          $('.qty input', _0x27ce58).val(_0x1460ef).trigger('change'))
        : (_0x31ae04.splice(_0x3eb5d3, 1), _0xf396a0(), _0x5e1fbd())
    }
  })
  $('#cart').on('change', '.item .note', function () {
    var _0xd6001d = $(this).closest('.item'),
      _0x2a1c05 = _0xd6001d.attr('data-index'),
      _0x13796c = $(this).val()
    _0x31ae04[_0x2a1c05].note = _0x13796c
    _0xf396a0()
    _0x5e1fbd()
  })
  var _0x364ba7 = {}
  $('#cart').on('change', '[name]', function () {
    var _0x5ccc41 = $(this).attr('name'),
      _0x77dca3 = $(this).val()
    _0x5ccc41 != 'note' &&
      _0x5ccc41 != 'shipping' &&
      _0x5ccc41 != 'payment' &&
      ((_0x364ba7[_0x5ccc41] = _0x77dca3),
      (localStorage.buyer = JSON.stringify(_0x364ba7)))
  })
  if (localStorage.buyer) {
    var _0x364ba7 = JSON.parse(localStorage.buyer)
    for (var _0x96c104 in _0x364ba7) {
      $('#cart .form [name=' + _0x96c104 + ']')
        .val(_0x364ba7[_0x96c104])
        .trigger('change')
    }
  }
  $('#cart').on('submit', function (_0x1085ff) {
    _0x1085ff.preventDefault()
    if (!confirm($_config.text.checkout_confirm)) {
      return
    } else {
      var _0x43d661 = { _0x182da3: _0x48ddbe }
      $('[name]:visible', this).each(function () {
        var _0x182da3 = $(this).attr('name'),
          _0x48ddbe = $(this).val()
      })
      var _0x5610ad = $_config.text.checkout_intro + '\n\n',
        _0x165afb = 0,
        _0x3ea847 = 0,
        _0xd5cf0a = 0,
        _0xcda33b = 0
      for (var _0x83d75d in _0x31ae04) {
        _0xcda33b++
        var _0xc8670b = _0x31ae04[_0x83d75d]
        _0x5610ad +=
          '                    ' +
          (_0x31ae04.length > 1 ? _0xcda33b + '. ' : '') +
          '*' +
          _0xc8670b.title +
          '*\n\n                    ' +
          (_0xc8670b.variant
            ? '[tab]' +
              _0xc8670b.variant.label +
              ' : *' +
              _0xc8670b.variant.value +
              '*\n'
            : '') +
          '                    [tab]' +
          $_config.text.cart_qty_n_price +
          ' : *' +
          _0xc8670b.qty +
          '* x ' +
          format_currency(_0xc8670b.price) +
          ' = *' +
          format_currency(_0xc8670b.price * _0xc8670b.qty) +
          '*\n                    [tab]' +
          $_config.text.cart_note +
          ' : ' +
          (_0xc8670b.note ? '*' + _0xc8670b.note + '*' : '-') +
          '\n                    \n                '
        _0x165afb = _0x165afb + Number(_0xc8670b.qty)
        _0x3ea847 = _0x3ea847 + Number(_0xc8670b.price * _0xc8670b.qty)
        _0xd5cf0a = _0xd5cf0a + Number(_0xc8670b.weight * _0xc8670b.qty)
      }
      _0x5610ad +=
        '                \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014\n                \n                ' +
        (_0xd5cf0a
          ? $_config.text.cart_weight + ' = *' + kg(_0xd5cf0a) + '*\n'
          : '') +
        '                ' +
        $_config.text.cart_total +
        ' ( ' +
        _0x165afb +
        ' ' +
        $_config.text.cart_order +
        ' ) = *' +
        format_currency(_0x3ea847) +
        '*\n                \n                \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014\n                \n                \uD83D\uDCCB ' +
        $_config.text.checkout_info +
        ' :\n                \n                *' +
        _0x43d661.name +
        '* ( ' +
        _0x43d661.phone +
        ' )\n                \n                ' +
        (_0x43d661.email
          ? '*' +
            $_config.text.checkout_email +
            '* : ' +
            _0x43d661.email +
            '\n\n'
          : '') +
        '                ' +
        (_0x43d661.address
          ? '*' +
            $_config.text.checkout_address +
            '* :\n\n' +
            _0x43d661.address +
            '\n\n'
          : '') +
        '                *' +
        $_config.text.checkout_note +
        '* : ' +
        (_0x43d661.note ? '\n\n' + _0x43d661.note : '-') +
        '\n\n                ' +
        (_0x43d661.shipping
          ? '*' +
            $_config.text.checkout_shipping +
            '* : ' +
            _0x43d661.shipping +
            '\n' +
            $_config.checkout_form_shipping[_0x43d661.shipping].info +
            '\n\n'
          : '') +
        '                ' +
        (_0x43d661.payment
          ? '*' +
            $_config.text.checkout_payment +
            '* : ' +
            _0x43d661.payment +
            '\n' +
            $_config.checkout_form_payment[_0x43d661.payment].info +
            '\n\n'
          : '') +
        '                via. ' +
        location.protocol +
        '//' +
        location.hostname +
        '            '
      _0x5610ad = _0x5610ad.replaceAll('  ', '').replaceAll('[tab]', '    ')
      _0x5610ad = encodeURIComponent(_0x5610ad)
      var _0x13bdb1 =
        'https://api.whatsapp.com/send?phone=' +
        $_config.whatsapp +
        '&text=' +
        _0x5610ad
      localStorage.removeItem('cart')
      location.href = _0x13bdb1
    }
  })
  function _0xf396a0() {
    window.localStorage && (localStorage.cart = JSON.stringify(_0x31ae04))
  }
  function _0x5e1fbd() {
    $('#cart .list').empty()
    if (_0x31ae04.length == 0) {
      $('#cart .list_n_form, #cart .cta').hide()
      $('#cart-btn').removeClass('open')
      $('#cart .empty').show()
      return
    }
    $('#cart .list_n_form, #cart .cta').show()
    $('#cart-btn').addClass('open')
    $('#cart .empty').hide()
    var _0x4f0a8a = 0,
      _0x225549 = 0,
      _0x7b357d = 0
    for (var _0x374432 in _0x31ae04) {
      var _0xe6f07f = _0x31ae04[_0x374432],
        _0x54cc2d =
          '                <div class="item" data-id="' +
          _0xe6f07f.id +
          '" data-index="' +
          _0x374432 +
          '">                    <div class="left">                        <b class="title">' +
          _0xe6f07f.title +
          '</b>                        <br>                        ' +
          (_0xe6f07f.variant
            ? _0xe6f07f.variant.label +
              ' : <b class="variant">' +
              _0xe6f07f.variant.value +
              '</b><br>'
            : '') +
          '                        <input class="note" type="text" placeholder="+ ' +
          $_config.text.cart_note +
          '.." value="' +
          (_0xe6f07f.note ? _0xe6f07f.note : '') +
          '">                        <b class="total">' +
          format_currency(_0xe6f07f.price) +
          '</b>' +
          (_0xe6f07f.unit
            ? ' <span class="unit">/' + _0xe6f07f.unit + '</span>'
            : '') +
          '                    </div>                    <div class="right">                        <a class="link" href="' +
          _0xe6f07f.link +
          '">                            <img class="img" src="' +
          _0xe6f07f.img +
          '"/>                            ' +
          (_0xe6f07f.weight
            ? '<small class="weight" title="' +
              $_config.text.cart_weight +
              '">' +
              kg(_0xe6f07f.weight) +
              '</small>'
            : '') +
          '                        </a>                        <fieldset class="qty">                            <button type="button">-</button>                            <input type="number" value="' +
          _0xe6f07f.qty +
          '">                            <button type="button">+</button>                        </fieldset>                    </div>                </div>'
      $('#cart .list').prepend(_0x54cc2d)
      _0x4f0a8a = _0x4f0a8a + Number(_0xe6f07f.qty)
      _0x225549 = _0x225549 + Number(_0xe6f07f.price * _0xe6f07f.qty)
      _0x7b357d = _0x7b357d + Number(_0xe6f07f.weight * _0xe6f07f.qty)
    }
    $('#cart .cta .subtotal .wrap .grid.weight').remove()
    _0x7b357d > 0
      ? ($('#cart .cta .subtotal .wrap').prepend(
          '                <div class="grid weight">                    <span>                        ' +
            $_config.text.cart_weight +
            '                    </span>                    <b>' +
            kg(_0x7b357d) +
            '</b>                </div>            '
        ),
        $('#cart [name=shipping]').show().removeAttr('disabled'),
        $('#cart [name=shipping]').prev('.detail').show())
      : ($('#cart [name=shipping]').hide().attr('disabled', true),
        $('#cart [name=shipping]').prev('.detail').hide())
    $('#cart .cta .subtotal .qty, #cart-btn .qty').text(_0x4f0a8a)
    $('#cart .cta .subtotal .sub, #cart-btn .sub').text(
      format_currency(_0x225549)
    )
    $('#cart-btn').removeClass('open')
    setTimeout(function () {
      $('#cart-btn').addClass('open')
    }, 100)
  }
}
function slideshow() {
  $('.slideshow').each(function () {
    var _0xe2e451 = $(this),
      _0x235734 = 4000,
      _0x347e15 = parseInt(_0xe2e451.attr('data-delay')),
      _0x11d971 = 1000,
      _0x3a0565 = parseInt(_0xe2e451.attr('data-fade')),
      _0x33d89a
    _0x347e15.length && (_0x235734 = _0x347e15)
    _0x3a0565.length && (_0x11d971 = _0x3a0565)
    $('.slideshow-item, .widget', _0xe2e451).length > 1 &&
      ((_0x33d89a = setInterval(function () {
        $('.slideshow-item:visible, .widget:visible', _0xe2e451).each(
          function () {
            var _0x21b812 = $(this)
            _0x21b812.hide()
            _0x21b812.next('.slideshow-item, .widget').length
              ? _0x21b812.next('.slideshow-item, .widget').fadeIn(_0x11d971)
              : _0x21b812
                  .closest('.slideshow')
                  .find('.slideshow-item, .widget')
                  .first()
                  .fadeIn(_0x11d971)
          }
        )
      }, _0x235734)),
      $(this).append(
        '  <button class="nav-left" aria-label="Navigation">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right" aria-label="Navigation">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   '
      ))
    $('.nav-left', _0xe2e451).on('click', function () {
      clearInterval(_0x33d89a)
      $('.slideshow-item:visible, .widget:visible', _0xe2e451).each(
        function () {
          var _0x34715d = $(this)
          _0x34715d.hide()
          _0x34715d.prev('.slideshow-item, .widget').length
            ? _0x34715d.prev('.slideshow-item, .widget').fadeIn(_0x11d971)
            : _0x34715d
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .last()
                .fadeIn(_0x11d971)
        }
      )
    })
    $('.nav-right', _0xe2e451).on('click', function () {
      clearInterval(_0x33d89a)
      $('.slideshow-item:visible, .widget:visible', _0xe2e451).each(
        function () {
          var _0x40384a = $(this)
          _0x40384a.hide()
          _0x40384a.next('.slideshow-item, .widget').length
            ? _0x40384a.next('.slideshow-item, .widget').fadeIn(_0x11d971)
            : _0x40384a
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .first()
                .fadeIn(_0x11d971)
        }
      )
    })
  })
}
function product_sort() {
  $('#sort select').on('change', function () {
    $('#sort').addClass('loading')
    if ($(this).val() == 'terbaru') {
      var _0x11c1a1 = $('.Blog article')
      _0x11c1a1.sort(function (_0x2d7339, _0x308bf2) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', _0x308bf2).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', _0x2d7339).attr('content')
          ).getTime()
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x11c1a1)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terlama') {
      var _0x11c1a1 = $('.Blog article')
      _0x11c1a1.sort(function (_0x3fc531, _0x1f878b) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', _0x3fc531).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', _0x1f878b).attr('content')
          ).getTime()
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x11c1a1)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terendah') {
      var _0x11c1a1 = $('.Blog article')
      _0x11c1a1.sort(function (_0x3b03b7, _0x3ae59f) {
        return (
          $('.price b', _0x3b03b7).attr('data-price') -
          $('.price b', _0x3ae59f).attr('data-price')
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x11c1a1)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'tertinggi') {
      var _0x11c1a1 = $('.Blog article')
      _0x11c1a1.sort(function (_0x7c79d, _0x392c79) {
        return (
          $('.price b', _0x392c79).attr('data-price') -
          $('.price b', _0x7c79d).attr('data-price')
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x11c1a1)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
  })
  $('#sort select').val() != '' && $('#sort select').trigger('change')
}
function product_convert() {
  $('.product:not(.field_loaded)').each(function () {
    var _0x54c8c6 = $(this)
    _0x54c8c6.addClass('field_loaded')
    $('meta[itemprop="priceCurrency"]', _0x54c8c6).attr(
      'content',
      $_config.money.currency
    )
    _0x54c8c6.hasClass('is_post') &&
      $('.image .gallery', this).length &&
      $('.image .gallery img', this).each(function (_0x47cd05) {
        var _0x245af6 = $(this).attr('src').split('=')[0],
          _0xd7a85a = _0x245af6.split('/')[7],
          _0x12a5ea =
            _0x245af6.replace(_0xd7a85a, 'w150-h150-c') + '=w150-h150-c',
          _0x1992fb = _0x245af6.replace(_0xd7a85a, 's800') + '=s800'
        $('figure.cover', _0x54c8c6).append(
          '<a data-lightbox="gallery" data-lightbox-title="' +
            $('.title', _0x54c8c6).text() +
            '" href="' +
            _0x1992fb +
            '"><img data-src="' +
            _0x12a5ea +
            '"/></a>'
        )
      })
    var _0x50ad3c = {}
    $('.field td[class]', _0x54c8c6).each(function () {
      var _0x33e09a = $(this).attr('class')
      _0x33e09a != 'img' &&
        (_0x50ad3c[_0x33e09a] = $(this)
          .text()
          .replaceAll(' ', '')
          .replaceAll('.', '')
          .replaceAll(',', '')
          .replaceAll('%', '')
          .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    })
    _0x50ad3c.status == 'off' &&
      (_0x54c8c6.addClass('empty'),
      $('figure.cover a:first', _0x54c8c6).append(
        '<span class="empty"><b>' + $_config.text.product_empty + '</b></span>'
      ),
      $('[itemprop="availability"]', _0x54c8c6).attr(
        'content',
        'https://schema.org/OutOfStock'
      ))
    var _0x30c618 =
      '            <div class="price" data-price="' +
      Number(_0x50ad3c.price) +
      '" data-discount="' +
      Number(_0x50ad3c.discount) +
      '" data-unit="' +
      _0x50ad3c.unit +
      '" data-weight="' +
      Number(_0x50ad3c.weight) +
      '"></div>        '
    if (_0x54c8c6.hasClass('is_post')) {
      _0x30c618 +=
        '                <br>                <div class="option">            '
      var _0x555eeb = $('.variant', _0x54c8c6)
      $('.status', _0x555eeb).text() == 'on' &&
        ((_0x30c618 +=
          '                    <div class="item variant">                        <label>                            ' +
          $('.label', _0x555eeb).text() +
          '                        </label>                        <fieldset>                '),
        $('.name', _0x555eeb).each(function () {
          $(this).text() &&
            (_0x30c618 +=
              '                            <button ' +
              ($(this).next('.price').text()
                ? 'data-price="' +
                  $(this)
                    .next('.price')
                    .text()
                    .replaceAll('.', '')
                    .replaceAll(',', '') +
                  '"'
                : '') +
              '>' +
              $(this).text() +
              '</button>                        ')
        }),
        (_0x30c618 +=
          '                        </fieldset>                    </div>                '))
      _0x30c618 +=
        '                <div class="item qty">                    <label>                        ' +
        $_config.text.product_qty +
        '                    </label>                    <fieldset>                        <button>-</button>                        <input type="number" value="1">                        <button>+</button>                    </fieldset>                </div>            '
      _0x30c618 +=
        '                </div>                <div class="cta ' +
        (_0x50ad3c.status == 'off' ? 'disabled' : '') +
        '">                    <button class="chat" target="pop-chat">                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">                            <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>                        </svg>                    </button>            '
      _0x30c618 +=
        '                <button class="cart-add">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">                        <path d="M387.9 373.7h49.2l17.5-75.4h-66.7zM387.9 448h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448zM265.4 392.5h103.7V448H265.4zM75 373.7h49v-75.4H57.5zM142.9 192h103.7v87.5H142.9zM265.4 192h103.7v87.5H265.4zM85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8zM142.9 392.5h103.7V448H142.9zM265.4 298.3h103.7v75.4H265.4zM142.9 298.3h103.7v75.4H142.9z" />                        <path d="M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z" />                    </svg>                    ' +
        $_config.text.product_add +
        '                </button>            '
      _0x30c618 += '                </div>            '
      if (_0x50ad3c.status == 'on') {
        var _0x2ddb59 = $('.marketplace', _0x54c8c6)
        $('.status', _0x2ddb59).text() == 'on' &&
          ((_0x30c618 +=
            '                        <div class="marketplace">                            <small>' +
            $_config.text.product_via_marketplace +
            '</small>                            <br>                    '),
          $('.link', _0x2ddb59).each(function () {
            $(this).text() &&
              (_0x30c618 +=
                '                                <a href="' +
                $(this).text() +
                '" target="_blank" title="' +
                $(this).text().split('/')[2].toLowerCase().replace('www.', '') +
                '" rel="nofollow">                                    <img src="https://www.google.com/s2/favicons?domain=' +
                $(this).text().split('/')[2] +
                '&sz=24" alt="favicon"/>                                </a>                            ')
          }),
          (_0x30c618 += '                        </div>                    '))
      }
    }
    var _0x47ca79 = $('.title', this)
    $(_0x30c618).insertAfter(_0x47ca79)
    var _0x54c8c6 = $(this),
      _0x4921bd = $('.price', _0x54c8c6).attr('data-unit'),
      _0x197318 = Number($('.price', _0x54c8c6).attr('data-price')),
      _0x3c53a2 = Number($('.price', _0x54c8c6).attr('data-discount'))
    if (_0x3c53a2) {
      var _0x4cc5ce = _0x197318 - (_0x197318 * _0x3c53a2) / 100
      $('.price', _0x54c8c6).html(
        '<small>-' +
          _0x3c53a2 +
          '%</small><s>' +
          format_currency(_0x197318) +
          '</s><b data-price="' +
          _0x4cc5ce +
          '">' +
          format_currency(_0x4cc5ce) +
          '</b>' +
          (_0x4921bd ? '<span>/' + _0x4921bd + '</span>' : '')
      )
      $('[itemprop="price"]', this).attr('content', _0x4cc5ce)
    } else {
      $('.price', _0x54c8c6).html(
        '<b data-price="' +
          _0x197318 +
          '">' +
          format_currency(_0x197318) +
          '</b>' +
          (_0x4921bd ? '<span>/' + _0x4921bd + '</span>' : '')
      )
      $('[itemprop="price"]', this).attr('content', _0x197318)
    }
    $('.variant button', _0x54c8c6).each(function () {
      var _0x429551 = $(this).attr('data-price')
      if (!_0x429551) {
        var _0x32f65b = $('.price', _0x54c8c6).attr('data-price')
        $(this).attr('data-price', _0x32f65b)
      }
    })
    $('.variant button', _0x54c8c6).on('click', function () {
      $('.variant button', _0x54c8c6).removeClass('active')
      $(this).addClass('active')
      var _0xbcfedc = $(this).attr('data-price')
      if (_0xbcfedc) {
        if (_0x3c53a2) {
          var _0x6bc210 = _0xbcfedc - (_0xbcfedc * _0x3c53a2) / 100
          $('.price', _0x54c8c6).html(
            '<small>-' +
              _0x3c53a2 +
              '%</small><s>' +
              format_currency(_0xbcfedc) +
              '</s><b data-price="' +
              _0x6bc210 +
              '">' +
              format_currency(_0x6bc210) +
              '</b>' +
              (_0x4921bd ? '<span>/' + _0x4921bd + '</span>' : '')
          )
          $('[itemprop="price"]', this).attr('content', _0x6bc210)
        } else {
          $('.price', _0x54c8c6).html(
            '<b data-price="' +
              _0xbcfedc +
              '">' +
              format_currency(_0xbcfedc) +
              '</b>' +
              (_0x4921bd ? '<span>/' + _0x4921bd + '</span>' : '')
          )
          $('[itemprop="price"]', this).attr('content', _0xbcfedc)
        }
      }
    })
    $('.variant button:first', _0x54c8c6).trigger('click')
    $('.qty input', _0x54c8c6).on('change', function () {
      var _0x4e9e42 = Number($('.qty input', _0x54c8c6).val())
      _0x4e9e42 < 1 && (_0x4e9e42 = 1)
      $('.qty input', _0x54c8c6).val(_0x4e9e42)
    })
    $('.qty button', _0x54c8c6).on('click', function () {
      var _0xe41037 = Number($('.qty input', _0x54c8c6).val())
      $(this).text() == '-'
        ? (_0xe41037 = _0xe41037 - 1)
        : (_0xe41037 = _0xe41037 + 1)
      $('.qty input', _0x54c8c6).val(_0xe41037).trigger('change')
    })
  })
}
function popwin(_0x119892 = '', _0x469be1 = '', _0x461cc6 = '') {
  if (_0x119892) {
    var _0x3b84a4 = _0x119892,
      _0x4729d0 = 960
    _0x469be1 && (_0x4729d0 = _0x469be1)
    var _0x57c616 = 540
    _0x461cc6 && (_0x57c616 = _0x461cc6)
    var _0x73898e = Number(screen.width / 2 - _0x4729d0 / 2),
      _0x5ceb00 = Number(screen.height / 2 - _0x57c616 / 2),
      _0x1adace = window.open(
        _0x3b84a4,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
          _0x4729d0 +
          ', height=' +
          _0x57c616 +
          ', top=' +
          _0x5ceb00 +
          ', left=' +
          _0x73898e
      )
    _0x1adace.focus()
  } else {
    $(document).on('click', '[target="_popwin"]', function (_0x22cd03) {
      _0x22cd03.stopPropagation()
      _0x22cd03.preventDefault()
      var _0x581117 = $(this).attr('href'),
        _0x43e034 = $(this).attr('data-popwin-width'),
        _0x47d9e7 = $(this).attr('data-popwin-height'),
        _0x36cc79 = 960
      _0x43e034 && (_0x36cc79 = _0x43e034)
      var _0x106e5e = 540
      _0x47d9e7 && (_0x106e5e = _0x47d9e7)
      var _0x4e6014 = Number(screen.width / 2 - _0x36cc79 / 2),
        _0x850c11 = Number(screen.height / 2 - _0x106e5e / 2),
        _0x5a306b = window.open(
          _0x581117,
          '',
          'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
            _0x36cc79 +
            ', height=' +
            _0x106e5e +
            ', top=' +
            _0x850c11 +
            ', left=' +
            _0x4e6014
        )
      _0x5a306b.focus()
    })
  }
}
function shortcode() {
  $('.post-body').each(function () {
    $(this).html(
      $(this)
        .html()
        .replace(
          /\[youtube\]/g,
          '<div class="video"><iframe allowfullscreen="true" data-shortcode="youtube" data-src="'
        )
        .replace(/\[\/youtube\]/g, '"></iframe></div>')
        .replace(/\[code\]/g, '<pre data-shortcode="code"><code>')
        .replace(/\[\/code\]/g, '</code></pre>')
        .replace(
          /\[img\]/g,
          '<img style="display:block;width:100%;border-radius:10px;" data-shortcode="img" src="'
        )
        .replace(/\[\/img\]/g, '" alt="image"/>')
        .replace(/\[url\]/g, '<a data-shortcode="url" href="')
        .replace(
          /\[\/url\]/g,
          '" target="_blank" rel="nofollow external">Lihat Tautan</a>'
        )
    )
  })
  $('[data-shortcode]').each(function () {
    var _0x11fe05 = $(this).attr('data-shortcode')
    if (_0x11fe05 == 'img') {
      var _0x3f7c81 = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + _0x3f7c81 + '"></a>')
    }
    if (_0x11fe05 == 'youtube') {
      var _0x354f11 = $(this).attr('data-src'),
        _0x35a914 = _0x354f11.split('/')[3]
      _0x354f11.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x35a914 = get_url_parameter('v', _0x354f11))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + _0x35a914 + '?rel=0'
      )
    }
  })
}
function translate() {
  $('[data-text]').each(function () {
    var _0x7199d1 = $(this).attr('data-text')
    $_config.text[_0x7199d1]
      ? $(this).text($_config.text[_0x7199d1])
      : $(this).text(_0x7199d1)
  })
  $('[data-text-label]').each(function () {
    var _0x489b33 = $(this).attr('data-text-label')
    $_config.text[_0x489b33]
      ? $(this).attr('label', $_config.text[_0x489b33])
      : $(this).attr('label', _0x489b33)
  })
  $('[data-text-placeholder]').each(function () {
    var _0x4b2984 = $(this).attr('data-text-placeholder')
    $_config.text[_0x4b2984]
      ? $(this).attr('placeholder', $_config.text[_0x4b2984])
      : $(this).attr('placeholder', _0x4b2984)
  })
  $('[data-text-pop-title]').each(function () {
    var _0x5dc45c = $(this).attr('data-text-pop-title')
    $_config.text[_0x5dc45c]
      ? $(this).attr('data-pop-title', $_config.text[_0x5dc45c])
      : $(this).attr('data-pop-title', _0x5dc45c)
  })
}
function etc() {
  $(window).on('beforeunload', function () {
    $('body').addClass('loading')
    setTimeout(function () {
      $('body').removeClass('loading')
    }, 2000)
  })
  $(window).on('scroll', function () {
    $(window).scrollTop() > 0
      ? $('#header').addClass('shadow')
      : $('#header').removeClass('shadow')
  })
  $('#header a[target=pop-search]').on('click', function () {
    setTimeout(function () {
      $('#header #pop-search [type=search]').focus()
    }, 50)
  })
  $('#pop-chat').on('submit', 'form', function (_0xc1207d) {
    _0xc1207d.preventDefault()
    var _0xa69642 = $('input', this).val() + '\n\nvia. ' + location.href,
      _0x38e164 =
        'https://api.whatsapp.com/send?phone=' +
        $_config.whatsapp +
        '&text=' +
        encodeURIComponent(_0xa69642)
    popwin(_0x38e164)
  })
  $('.LinkList li a[href*="#"]').each(function () {
    $(this).attr('href', 'javascript:void(0)')
    $(this).append(
      '<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>'
    )
    var _0x2fd84d = $(this).parent('li')
    _0x2fd84d.addClass('dropdown')
    _0x2fd84d.wrapInner('<span class="dropdown-title"></span>')
    _0x2fd84d.append('<ul class="sub"></ul>')
  })
  $('.LinkList li a:contains("_")').each(function () {
    var _0x801bf6 = $(this).parent('li').prev('.dropdown').find('ul')
    $(this).parent('li').appendTo(_0x801bf6)
    var _0x25486d = $(this).text().replaceAll('_', '').replaceAll('_ ', '')
    $(this).text(_0x25486d)
  })
  $('.LinkList').on('click', 'li.dropdown', function () {
    $(this).find('ul:first').toggle()
    $(this).toggleClass('active')
  })
  $('[data-feed]').length &&
    $('[data-feed]').each(function () {
      var _0x5833ae = $(this),
        _0x2bf99d = $(this)
          .attr('data-feed')
          .replace('?m=1', '')
          .replace('&m=1', '')
          .replaceAll(' ', '%20')
      _0x5833ae.addClass('loading')
      _0x5833ae.load(_0x2bf99d + ' .is_loop', function () {
        var _0x1cad47 = $(this).html()
        _0x5833ae.html(_0x1cad47)
        var _0x5b1138 = _0x5833ae.attr('data-hide-id')
        _0x5b1138 &&
          (_0x5833ae.find('article#' + _0x5b1138).length
            ? _0x5833ae.find('article#' + _0x5b1138).remove()
            : _0x5833ae.find('article:last-of-type').remove())
        product_convert()
        lazyload()
        timeago()
        _0x5833ae.removeClass('loading')
        _0x5833ae.find('article').length == 0 &&
          _0x5833ae.closest('#related').remove()
      })
    })
  $('#pop-bagikan .copy button').on('click', function (_0x35ff07) {
    var _0x5e2fc9 = $(this)
    _0x5e2fc9.siblings('input').select()
    document.execCommand('copy')
    _0x5e2fc9.text('Disalin!')
    setTimeout(function () {
      _0x5e2fc9.text('Salin')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var _0x250af4 = $('#header').outerHeight(),
        _0x4859c2 = $('.is_single article .attr-sticky').outerHeight()
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop:
              $(window.location.hash).offset().top - _0x250af4 - _0x4859c2 - 20,
          },
          500
        )
      $(window.location.hash).addClass('focus')
      setTimeout(function () {
        $(window.location.hash).removeClass('focus')
      }, 2000)
    }
  }
  $(document).on('click', 'a[href*="#"]', function (_0x2fe7c0) {
    var _0x30bae6 = '#' + $(this).attr('href').split('#')[1]
    if ($(_0x30bae6).length && $(this).attr('href').split('#')[0] === '') {
      _0x2fe7c0.preventDefault()
      var _0x23ef0f = $('#header').outerHeight(),
        _0xffd7ee = $('.is_single article .attr-sticky').outerHeight()
      _0xffd7ee
        ? $('html, body')
            .stop()
            .animate(
              {
                scrollTop:
                  $(_0x30bae6).offset().top - _0x23ef0f - _0xffd7ee - 20,
              },
              500
            )
        : $('html, body')
            .stop()
            .animate(
              { scrollTop: $(_0x30bae6).offset().top - _0x23ef0f - 20 },
              500
            )
      $(_0x30bae6).addClass('focus')
      setTimeout(function () {
        $(_0x30bae6).removeClass('focus')
      }, 2000)
    }
  })
  $(document).on('click', '.loadmore-btn', function (_0x3ff404) {
    _0x3ff404.preventDefault()
    let _0x399822 = $(this).attr('href'),
      _0xeb2d70 = $('#blog-pager .loadmore-btn'),
      _0x6c7c50 = $('#blog-pager .loadmore-btn').text()
    _0x399822 &&
      $.ajax({
        url: _0x399822,
        beforeSend: function () {
          _0xeb2d70.addClass('loading')
        },
        complete: function () {
          _0xeb2d70.removeClass('loading')
        },
        success: function (_0x3e7cd8) {
          let _0x48b031 = $(_0x3e7cd8).find('.Blog .is_loop').html(),
            _0x3ecfc9 = $(_0x3e7cd8).find('.loadmore-btn').attr('href')
          $('.Blog .is_loop').append(_0x48b031)
          _0xeb2d70.show()
          product_convert()
          product_sort()
          lazyload()
          timeago()
          _0x3ecfc9 ? _0xeb2d70.attr('href', _0x3ecfc9) : _0xeb2d70.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var _0x1e7dcb = $_config.text.product_prev,
      _0x59590c = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(_0x59590c + ' article h1', function () {
      var _0xd8258f = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
          _0x1e7dcb +
          '</b></small><h3>' +
          _0xd8258f +
          '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        _0x59590c + ' article .post-body img:first-of-type',
        function () {
          var _0x1d0f24 = $(this).html(),
            _0x4b2b8e = _0x1d0f24.split('src="')[1],
            _0x253f24 = _0x4b2b8e.split('"')[0],
            _0x2be9c7 = _0x253f24.split('=')[0],
            _0x1b3f84 = _0x2be9c7.split('/')[7]
          _0x2be9c7 =
            _0x2be9c7.replace(_0x1b3f84, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + _0x2be9c7 + '"/>')
            .removeClass('loading')
        }
      )
    })
    var _0x1f7f05 = $_config.text.product_next,
      _0x4963fc = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(_0x4963fc + ' article h1', function () {
      var _0x184455 = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
          _0x1f7f05 +
          '</b></small><h3>' +
          _0x184455 +
          '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        _0x4963fc + ' article .post-body img:first-of-type',
        function () {
          var _0x38ede3 = $(this).html(),
            _0x123a56 = _0x38ede3.split('src="')[1],
            _0x1ae93d = _0x123a56.split('"')[0],
            _0x3605c6 = _0x1ae93d.split('=')[0],
            _0x212e6c = _0x3605c6.split('/')[7]
          _0x3605c6 =
            _0x3605c6.replace(_0x212e6c, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + _0x3605c6 + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
}
function timeago() {
  $('[datetime]:not(.timeago)').each(function () {
    var _0xf00734 = $(this),
      _0x22f9ff = _0xf00734.attr('datetime')
    _0xf00734.addClass('timeago')
    !_0xf00734.attr('title') && _0xf00734.attr('title', _0x22f9ff)
    _0xf00734.text(_0x22ec10(_0x22f9ff))
  })
  function _0x22ec10(_0x57ab42) {
    var _0x151360 = 'ago',
      _0xfbe255 = 'seconds',
      _0x4b31b2 = 'minutes',
      _0x1edf17 = 'hours',
      _0x4418d9 = 'days',
      _0x3cf60d = 'months',
      _0x53d596 = 'years'
    $_config.money.country_id == 'id-ID' &&
      ((_0x151360 = 'yang lalu'),
      (_0xfbe255 = 'detik'),
      (_0x4b31b2 = 'menit'),
      (_0x1edf17 = 'jam'),
      (_0x4418d9 = 'hari'),
      (_0x3cf60d = 'bulan'),
      (_0x53d596 = 'tahun'))
    var _0x192bfb = new Date(_0x57ab42),
      _0x35917d = 86400000,
      _0xe1b63b = 30 * _0x35917d,
      _0x454d36 = 365 * _0x35917d,
      _0x82e32c = _0x151360,
      _0x16a422 = new Date() - _0x192bfb
    return _0x16a422 < 60000
      ? Math.round(_0x16a422 / 1000) + ' ' + _0xfbe255 + ' ' + _0x82e32c
      : _0x16a422 < 3600000
      ? Math.round(_0x16a422 / 60000) + ' ' + _0x4b31b2 + ' ' + _0x82e32c
      : _0x16a422 < _0x35917d
      ? Math.round(_0x16a422 / 3600000) + ' ' + _0x1edf17 + ' ' + _0x82e32c
      : _0x16a422 < _0xe1b63b
      ? Math.round(_0x16a422 / _0x35917d) + ' ' + _0x4418d9 + ' ' + _0x82e32c
      : _0x16a422 < _0x454d36
      ? Math.round(_0x16a422 / _0xe1b63b) + ' ' + _0x3cf60d + ' ' + _0x82e32c
      : Math.round(_0x16a422 / _0x454d36) + ' ' + _0x53d596 + ' ' + _0x82e32c
  }
  $('#comments .datetime a:not(.timeago)').each(function () {
    var _0x990006 = $(this),
      _0x4a6be7 = _0x990006.text()
    _0x990006.attr('datetime', _0x4a6be7)
    var _0x5a59ba = _0x990006.attr('datetime')
    _0x990006.addClass('timeago')
    _0x990006.attr('title', _0x5a59ba)
    _0x990006.text(_0x22ec10(_0x5a59ba))
  })
}
function format_currency(
  _0x2a6b8e,
  _0x19c09e = $_config.money.country_id,
  _0xb43a28 = $_config.money.currency
) {
  return new Intl.NumberFormat(_0x19c09e, {
    style: 'currency',
    currency: _0xb43a28,
    maximumSignificantDigits: 3,
  }).format(_0x2a6b8e)
}
function separator(_0x4976fa) {
  var _0x20227c = '',
    _0x307726 = _0x4976fa.toString().split('').reverse().join('')
  for (var _0x2f60c4 = 0; _0x2f60c4 < _0x307726.length; _0x2f60c4++) {
    if (_0x2f60c4 % 3 == 0) {
      _0x20227c += _0x307726.substr(_0x2f60c4, 3) + '.'
    }
  }
  return _0x20227c
    .split('', _0x20227c.length - 1)
    .reverse()
    .join('')
}
function kg(_0x2acbc) {
  var _0x350fce = _0x2acbc + ' Gram'
  return _0x2acbc >= 1000 && (_0x350fce = _0x2acbc / 1000 + ' Kg'), _0x350fce
}
function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
      '             <div id="pop-video" data-pop-title="Video" data-pop-width="960">               <div class="video">              <iframe allowfullscreen="true"></iframe>               </div>             </div>             '),
    $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function () {
    var _0x4f3004 = $(this),
      _0x21131b = _0x4f3004.attr('id'),
      _0x1a34c6 = _0x4f3004.attr('data-pop-title'),
      _0x4db9ff = _0x4f3004.attr('data-pop-width'),
      _0x4d47ba = _0x4f3004.attr('data-pop-height')
    _0x4f3004.wrap('<div class="pop"></div>')
    _0x4f3004.wrap('<div class="pop-wrap"></div>')
    _0x4f3004.addClass('pop-content pop-loaded')
    var _0x54781d =
      '            <header class="pop-header">                <div class="pop-title">                    <h3>                           ' +
      _0x1a34c6 +
      '                    </h3>                </div>                <div class="pop-close">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>                </div>            </header>        '
    _0x4f3004.closest('.pop-wrap').prepend(_0x54781d)
    _0x4db9ff && _0x4f3004.closest('.pop-wrap').css('width', _0x4db9ff)
  })
  $('.pop-close').on('click', function () {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function (_0x2a9049) {
    _0x2a9049.preventDefault()
    var _0x566f91 = $(this),
      _0x3c19f8 = _0x566f91.attr('target'),
      _0xc9f731 = _0x566f91.attr('data-pop-title')
        ? _0x566f91.attr('data-pop-title')
        : $('#' + _0x3c19f8).attr('data-pop-title'),
      _0x4e7b27 = _0x566f91.attr('data-pop-width'),
      _0x54e6da = _0x566f91.attr('data-pop-height')
    _0x566f91.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + _0x3c19f8).length &&
      ($('body').addClass('pop-open'),
      $('#' + _0x3c19f8)
        .closest('.pop')
        .addClass('open'),
      _0x566f91.closest('.pop-content').length &&
        (($back_id = _0x566f91.closest('.pop-content').attr('id')),
        (_0xc9f731 =
          '<a target="' +
          $back_id +
          '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
          _0xc9f731)),
      _0xc9f731 &&
        $('#' + _0x3c19f8)
          .closest('.pop')
          .find('.pop-title h3')
          .html(_0xc9f731),
      $('[data-src]').each(function () {
        var _0xb44f43 = $(this).attr('data-src')
        $(this).attr('src', _0xb44f43).removeAttr('data-src')
      }))
    if (_0x3c19f8 == 'pop-video') {
      $href = $(this).attr('href')
      var _0x29dcbf = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x29dcbf = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + _0x29dcbf + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function () {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function (_0x78549) {
    _0x78549.stopPropagation()
  })
}
function lightbox() {
  var _0x28c695 =
    '        <div id="lightbox">            <div class="lb-wrap">                <figure>                    <div class="lb-img">                        <div class="lb-count"></div>                    </div>                    <nav class="lb-nav">                        <div class="lb-np lb-prev"></div>                        <div class="lb-close"></div>                        <div class="lb-np lb-next"></div>                    </nav>                </figure>            </div>        </div>    '
  $(_0x28c695).appendTo('body')
  $('[data-lightbox]').each(function () {
    var _0x5f20b8 = $(this).attr('data-lightbox'),
      _0x2bb2bb = $('[data-lightbox=' + _0x5f20b8 + ']').length
    _0x2bb2bb > 1 &&
      $('[data-lightbox=' + _0x5f20b8 + ']').each(function (_0xb9e43d) {
        $(this).attr('data-lightbox-index', _0xb9e43d + 1 + ' / ' + _0x2bb2bb)
      })
    $(this).on('mousedown', function () {
      return false
    })
    $(this).on('contextmenu', function () {
      return alert('\xA9 ' + $_config.page.title), false
    })
  })
  $(document).on('click', '[data-lightbox]', function (_0x27fa27) {
    _0x27fa27.preventDefault()
    var _0x2f7867 = $(this),
      _0x35b946 = _0x2f7867.attr('data-lightbox'),
      _0x34ad4f = _0x2f7867.attr('data-lightbox-index'),
      _0x4a9f1a = _0x2f7867.attr('data-lightbox-title'),
      _0x5eadec = _0x2f7867.attr('data-lightbox-desc'),
      _0x1fec93 = _0x2f7867.attr('href')
    $('#lightbox').scrollTop(0)
    $('#lightbox .lb-close').hide()
    $('#lightbox .lb-wrap figure .lb-img img').remove()
    $('#lightbox .lb-count').hide()
    $('#lightbox .lb-wrap figure figcaption').remove()
    $('#lightbox .lb-np').hide()
    _0x1fec93 &&
      ($('#lightbox .lb-wrap').addClass('lb-loading'),
      $('#lightbox .lb-wrap figure .lb-img').prepend(
        '<img data-src="' + _0x1fec93 + '"/>'
      ),
      $('#lightbox .lb-wrap figure .lb-img img')
        .attr('src', _0x1fec93)
        .on('load', function () {
          $(this).removeAttr('data-src')
          $(this).on('mousedown', function () {
            return false
          })
          $(this).on('contextmenu', function () {
            return alert('\xA9 ' + $_config.page.title), false
          })
          $('#lightbox .lb-wrap').removeClass('lb-loading')
          ;(_0x4a9f1a || _0x5eadec) &&
            $('#lightbox .lb-wrap figure').append('<figcaption></figcaption>')
          _0x4a9f1a &&
            $('#lightbox .lb-wrap figure figcaption').append(
              '<h4>' + _0x4a9f1a + '</h4>'
            )
          _0x5eadec &&
            $('#lightbox .lb-wrap figure figcaption').append(
              '<p>' + _0x5eadec + '</p>'
            )
          _0x34ad4f && $('#lightbox .lb-count').html(_0x34ad4f).show()
          $('#lightbox .lb-np').show()
          if (_0x2f7867.prev('[data-lightbox="' + _0x35b946 + '"]').length) {
            var _0x4f973d = _0x2f7867
              .prev('[data-lightbox="' + _0x35b946 + '"]')
              .attr('href')
            $('#lightbox .lb-np.lb-prev')
              .attr('data-id', _0x35b946)
              .attr('data-url', _0x4f973d)
              .show()
            $('body').append(
              '<img src="' + _0x4f973d + '" style="display:none;"/>'
            )
          } else {
            $('#lightbox .lb-np.lb-prev').hide()
          }
          if (_0x2f7867.next('[data-lightbox="' + _0x35b946 + '"]').length) {
            var _0x4f973d = _0x2f7867
              .next('[data-lightbox="' + _0x35b946 + '"]')
              .attr('href')
            $('#lightbox .lb-np.lb-next')
              .attr('data-id', _0x35b946)
              .attr('data-url', _0x4f973d)
              .show()
            $('body').append(
              '<img src="' + _0x4f973d + '" style="display:none;"/>'
            )
          } else {
            $('#lightbox .lb-np.lb-next').hide()
          }
          $('#lightbox .lb-close').show()
        }))
    $('#lightbox').addClass('open')
    $('body').addClass('lightbox_open')
  })
  $('#lightbox .lb-np.lb-prev, #lightbox .lb-np.lb-next').on(
    'click',
    function (_0x3d3dd9) {
      _0x3d3dd9.stopPropagation()
      var _0x28a2d9 = $(this).attr('data-url'),
        _0x579749 = $(this).attr('data-id')
      $(
        '[href="' + _0x28a2d9 + '"][data-lightbox="' + _0x579749 + '"]'
      ).trigger('click')
    }
  )
  $('#lightbox').click(function () {
    $('#lightbox').removeClass('open')
    $('body').removeClass('lightbox_open')
  })
  $('#lightbox .lb-wrap').on('click', function (_0x407b3c) {
    _0x407b3c.stopPropagation()
  })
  $('#lightbox .lb-close').on('click', function (_0x28e6ed) {
    _0x28e6ed.stopPropagation()
    $('#lightbox').removeClass('open')
    $('body').removeClass('lightbox_open')
  })
  $(document).on('keydown', function (_0x3c1f1b) {
    var _0x5cacc8 = _0x3c1f1b.keyCode || _0x3c1f1b.which
    _0x3c1f1b.key === 'Escape' &&
      ($('#lightbox').removeClass('open'),
      $('body').removeClass('lightbox_open'))
    _0x5cacc8 === 37 && $('#lightbox .lb-np.lb-prev:visible').trigger('click')
    _0x5cacc8 === 39 && $('#lightbox .lb-np.lb-next:visible').trigger('click')
    _0x5cacc8 === 38 && $('#lightbox').scrollTop(0)
    if (_0x5cacc8 === 40) {
      var _0x1e4fa1 = $('#lightbox').height()
      $('#lightbox').scrollTop(_0x1e4fa1)
    }
  })
}
function lazyload() {
  $('[data-bg]').each(function () {
    var _0x3a2f74 = $(this),
      _0x172397 = _0x3a2f74.attr('data-bg')
    _0x3a2f74
      .css('background-image', 'url(' + _0x172397 + ')')
      .removeAttr('data-bg')
  })
  $('[data-src]:not([lazy="true"])').each(function () {
    var _0x3e0edf = $(this),
      _0x506821 = $(window).height(),
      _0x4478be = $(window).scrollTop(),
      _0x3acc90 = _0x4478be + _0x506821,
      _0x4c539e = _0x3e0edf.offset().top
    _0x3e0edf.attr('data-offset-top', _0x4c539e)
    var _0x1d37fd = _0x3e0edf.attr('data-src')
    _0x1d37fd = _0x1d37fd.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x1d37fd = _0x1d37fd.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x1d37fd = _0x1d37fd.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x1d37fd = _0x1d37fd.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    var _0x3be078 = _0x3e0edf.prop('tagName').toLowerCase()
    if (_0x4c539e <= _0x3acc90) {
      if (_0x3be078 == 'img') {
        _0x3e0edf.attr('src', _0x1d37fd).removeAttr('data-src')
        _0x3e0edf.attr('lazy', 'true')
      } else {
        _0x3be078 == 'iframe' &&
          (_0x3e0edf.attr('src', _0x1d37fd).removeAttr('data-src'),
          _0x3e0edf.attr('lazy', 'true'))
      }
    }
  })
  $(window).on('scroll', function () {
    var _0x3fd650 = $(window).height(),
      _0x1b765e = $(window).scrollTop(),
      _0x17db52 = _0x1b765e + _0x3fd650
    $('[data-src]:not([lazy="true"])').each(function () {
      var _0xd52fae = $(this),
        _0x220366 = $(window).height(),
        _0x5b583f = _0xd52fae.offset().top,
        _0x5cbcb8 = _0xd52fae.attr('data-src')
      _0x5cbcb8 = _0x5cbcb8.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x5cbcb8 = _0x5cbcb8.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x5cbcb8 = _0x5cbcb8.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x5cbcb8 = _0x5cbcb8.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var _0x27fa62 = _0xd52fae.prop('tagName').toLowerCase()
      if (_0x5b583f <= _0x17db52) {
        if (_0x27fa62 == 'img') {
          _0xd52fae.attr('src', _0x5cbcb8).removeAttr('data-src')
          _0xd52fae.attr('lazy', 'true')
        } else {
          _0x27fa62 == 'iframe' &&
            (_0xd52fae.attr('src', _0x5cbcb8).removeAttr('data-src'),
            _0xd52fae.attr('lazy', 'true'))
        }
      }
    })
  })
}
function titleCase(_0x5adc6a) {
  _0x5adc6a = _0x5adc6a.split(' ')
  for (var _0x14c1f2 = 0; _0x14c1f2 < _0x5adc6a.length; _0x14c1f2++) {
    _0x5adc6a[_0x14c1f2] =
      _0x5adc6a[_0x14c1f2].charAt(0).toUpperCase() +
      _0x5adc6a[_0x14c1f2].slice(1)
  }
  return (_0x5adc6a = _0x5adc6a.join(' ')), _0x5adc6a
}
function $_GET(_0x41d711) {
  var _0x309fba = window.location.search.substring(1),
    _0x6ee4f6 = _0x309fba.split('&'),
    _0x545936,
    _0x386a5f
  for (_0x386a5f = 0; _0x386a5f < _0x6ee4f6.length; _0x386a5f++) {
    _0x545936 = _0x6ee4f6[_0x386a5f].split('=')
    if (_0x545936[0] === _0x41d711) {
      return _0x545936[1] === undefined
        ? true
        : decodeURIComponent(_0x545936[1])
    }
  }
}
function get_url_parameter(_0x2a3a13, _0x192e79) {
  _0x2a3a13 = _0x2a3a13.replace(/[\[\]]/g, '\\$&')
  var _0x19c908 = new RegExp('[?&]' + _0x2a3a13 + '(=([^&#]*)|&|#|$)'),
    _0x34768c = _0x19c908.exec(_0x192e79)
  if (!_0x34768c) {
    return null
  }
  if (!_0x34768c[2]) {
    return ''
  }
  return decodeURIComponent(_0x34768c[2].replace(/\+/g, ' '))
}
