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
  var _0x1b3b28 =
    '        <fieldset>            <input type="text" name="name" placeholder="' +
    $_config.text.checkout_name +
    '" required>            <input type="tel" name="phone" placeholder="' +
    $_config.text.checkout_phone +
    '" required>        </fieldset>    '
  $_config.checkout_form.email &&
    (_0x1b3b28 +=
      '            <input type="email" name="email" placeholder="' +
      $_config.text.checkout_email +
      '" required>        ')
  $_config.checkout_form.address &&
    (_0x1b3b28 +=
      '            <textarea name="address" placeholder="' +
      $_config.text.checkout_address +
      '" required></textarea>        ')
  $_config.checkout_form.note &&
    (_0x1b3b28 +=
      '            <textarea name="note" placeholder="' +
      $_config.text.checkout_note +
      '"></textarea>        ')
  if ($_config.checkout_form.shipping) {
    _0x1b3b28 +=
      '            <select name="shipping" required>                <option value="" selected hidden>' +
      $_config.text.checkout_shipping +
      '</option>                <optgroup label="' +
      $_config.text.checkout_shipping +
      ' :">        '
    for (var _0x29a2fd in $_config.checkout_form_shipping) {
      var _0x46323a = $_config.checkout_form_shipping[_0x29a2fd]
      _0x46323a.status == true &&
        ($('<img src="' + _0x46323a.img + '"/>').on('load', function () {}),
        (_0x1b3b28 +=
          '                    <option value="' +
          _0x29a2fd +
          '" data-info="' +
          _0x46323a.info +
          '" data-img="' +
          _0x46323a.img +
          '">                        ' +
          _0x29a2fd +
          '                    </option>                '))
    }
    _0x1b3b28 += '                </optgroup>            </select>        '
  }
  if ($_config.checkout_form.payment) {
    $('#contact').append(
      '<p class="shippay"><b>' + $_config.text.checkout_payment + ' :</b></p>'
    )
    _0x1b3b28 +=
      '            <select name="payment" required>                <option value="" selected hidden>' +
      $_config.text.checkout_payment +
      '</option>                <optgroup label="' +
      $_config.text.checkout_payment +
      ' :">        '
    for (var _0x29a2fd in $_config.checkout_form_payment) {
      var _0x5c333d = $_config.checkout_form_payment[_0x29a2fd]
      _0x5c333d.status == true &&
        ($('#contact .shippay').append(
          '<figure><img alt="' +
            _0x29a2fd +
            '" src="' +
            _0x5c333d.img +
            '" width="24" height="24"/><figcaption>' +
            _0x29a2fd +
            '</figcaption></figure>'
        ),
        $('<img src="' + _0x5c333d.img + '"/>').on('load', function () {}),
        (_0x1b3b28 +=
          '                    <option value="' +
          _0x29a2fd +
          '" data-info="' +
          _0x5c333d.info +
          '" data-img="' +
          _0x5c333d.img +
          '">                        ' +
          _0x29a2fd +
          '                    </option>                '))
    }
    _0x1b3b28 += '                </optgroup>            </select>        '
  }
  $('#cart .form').append(_0x1b3b28)
  $('#cart .form').on('change', 'select', function () {
    var _0x33a854 = $(this),
      _0x4750f0 = _0x33a854.val(),
      _0x5c205e = $('option:selected', _0x33a854),
      _0x46e2db = _0x5c205e.attr('data-info'),
      _0x47a02f = _0x5c205e.attr('data-img')
    _0x33a854.prev('.detail').remove()
    $('<img src="' + _0x47a02f + '"/>').on('load', function () {
      $(
        '                <div class="detail">                    <img src="' +
          _0x47a02f +
          '">                    <h4>' +
          _0x4750f0 +
          '</h4>                    <p>' +
          _0x46e2db +
          '</p>                </div>            '
      )
        .insertBefore(_0x33a854)
        .hide()
        .fadeIn()
    })
  })
  $('#cart .form').on('click', '.detail', function () {
    $(this).next('select').focus()
  })
  var _0x1caad7 = []
  localStorage.cart &&
    ((_0x1caad7 = JSON.parse(localStorage.cart)), _0x22eb00())
  $('.product').on('click', '.cart-add', function () {
    var _0x152458 = $(this).closest('.product'),
      _0xe498bb = Number(_0x152458.attr('id')),
      _0x5447bc = $('.img', _0x152458).attr('src'),
      _0x12c6d9 = location.href,
      _0x28252f = $('.title', _0x152458)
        .text()
        .replace(/\n/g, '')
        .replaceAll('  ', ''),
      _0x4f4e50 = '',
      _0x4dee6c = Number($('.price b', _0x152458).attr('data-price')),
      _0x5c5f12 = Number($('.price', _0x152458).attr('data-weight')),
      _0x13d184 = $('.price', _0x152458).attr('data-unit'),
      _0x3fd1dc = Number($('.qty input', _0x152458).val())
    $('.variant', _0x152458).length &&
      $('.variant button.active', _0x152458).length &&
      ((_0xe498bb =
        _0xe498bb +
        '|' +
        $('.variant label', _0x152458)
          .text()
          .replace(/\n/g, '')
          .replaceAll('  ', '') +
        ' : ' +
        $('.variant button.active', _0x152458)
          .text()
          .replace(/\n/g, '')
          .replaceAll('  ', '')),
      (_0x4f4e50 = {
        label: $('.variant label', _0x152458)
          .text()
          .replace(/\n/g, '')
          .replaceAll('  ', ''),
        value: $('.variant button.active', _0x152458)
          .text()
          .replace(/\n/g, '')
          .replaceAll('  ', ''),
      }))
    $('#cart-btn').removeClass('open')
    setTimeout(function () {
      $('#cart-btn').addClass('open')
    }, 100)
    for (var _0x4e9c3f in _0x1caad7) {
      if (_0x1caad7[_0x4e9c3f].id == _0xe498bb) {
        _0x1caad7[_0x4e9c3f].qty = _0x3fd1dc
        _0xee7080()
        _0x22eb00()
        return
      }
    }
    var _0x5250f9 = {
      id: _0xe498bb,
      img: _0x5447bc,
      title: _0x28252f,
      link: _0x12c6d9,
      variant: _0x4f4e50,
      price: _0x4dee6c,
      weight: _0x5c5f12,
      unit: _0x13d184,
      qty: _0x3fd1dc,
    }
    _0x1caad7.push(_0x5250f9)
    _0xee7080()
    _0x22eb00()
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
    var _0x371966 = $(this).closest('.item'),
      _0x5cefdd = Number($('.qty input', _0x371966).val())
    $(this).text() == '-'
      ? (_0x5cefdd = _0x5cefdd - 1)
      : (_0x5cefdd = _0x5cefdd + 1)
    $('.qty input', _0x371966).val(_0x5cefdd).trigger('change')
  })
  $('#cart').on('change', '.item .qty input', function () {
    var _0x4d7ffb = $(this).closest('.item'),
      _0x2524ad = _0x4d7ffb.attr('data-index'),
      _0x2bd37e = Number($(this).val())
    if (_0x2bd37e > 0) {
      _0x1caad7[_0x2524ad].qty = _0x2bd37e
      _0xee7080()
      _0x22eb00()
      return
    } else {
      !confirm($_config.text.cart_remove)
        ? ((_0x2bd37e = 1),
          $('.qty input', _0x4d7ffb).val(_0x2bd37e).trigger('change'))
        : (_0x1caad7.splice(_0x2524ad, 1), _0xee7080(), _0x22eb00())
    }
  })
  $('#cart').on('change', '.item .note', function () {
    var _0x16276b = $(this).closest('.item'),
      _0x160525 = _0x16276b.attr('data-index'),
      _0x3b08cd = $(this).val()
    _0x1caad7[_0x160525].note = _0x3b08cd
    _0xee7080()
    _0x22eb00()
  })
  var _0x4cf9dd = {}
  $('#cart').on('change', '[name]', function () {
    var _0x181c68 = $(this).attr('name'),
      _0x6bf566 = $(this).val()
    _0x181c68 != 'note' &&
      _0x181c68 != 'shipping' &&
      _0x181c68 != 'payment' &&
      ((_0x4cf9dd[_0x181c68] = _0x6bf566),
      (localStorage.buyer = JSON.stringify(_0x4cf9dd)))
  })
  if (localStorage.buyer) {
    var _0x4cf9dd = JSON.parse(localStorage.buyer)
    for (var _0x1db138 in _0x4cf9dd) {
      $('#cart .form [name=' + _0x1db138 + ']')
        .val(_0x4cf9dd[_0x1db138])
        .trigger('change')
    }
  }
  $('#cart').on('submit', function (_0x18c08f) {
    _0x18c08f.preventDefault()
    if (!confirm($_config.text.checkout_confirm)) {
      return
    } else {
      var _0x226915 = { _0x182da3: _0x48ddbe }
      $('[name]:visible', this).each(function () {
        var _0x43c843 = $(this).attr('name'),
          _0x49dcbb = $(this).val()
      })
      var _0x411b17 = $_config.text.checkout_intro + '\n\n',
        _0x289068 = 0,
        _0x493b6b = 0,
        _0x2f32c8 = 0,
        _0x36171d = 0
      for (var _0x4aa6ff in _0x1caad7) {
        _0x36171d++
        var _0x1e9617 = _0x1caad7[_0x4aa6ff]
        _0x411b17 +=
          '                    ' +
          (_0x1caad7.length > 1 ? _0x36171d + '. ' : '') +
          '*' +
          _0x1e9617.title +
          '*\n\n                    ' +
          (_0x1e9617.variant
            ? '[tab]' +
              _0x1e9617.variant.label +
              ' : *' +
              _0x1e9617.variant.value +
              '*\n'
            : '') +
          '                    [tab]' +
          $_config.text.cart_qty_n_price +
          ' : *' +
          _0x1e9617.qty +
          '* x ' +
          format_currency(_0x1e9617.price) +
          ' = *' +
          format_currency(_0x1e9617.price * _0x1e9617.qty) +
          '*\n                    [tab]' +
          $_config.text.cart_note +
          ' : ' +
          (_0x1e9617.note ? '*' + _0x1e9617.note + '*' : '-') +
          '\n                    \n                '
        _0x289068 = _0x289068 + Number(_0x1e9617.qty)
        _0x493b6b = _0x493b6b + Number(_0x1e9617.price * _0x1e9617.qty)
        _0x2f32c8 = _0x2f32c8 + Number(_0x1e9617.weight * _0x1e9617.qty)
      }
      _0x411b17 +=
        '                \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014\n                \n                ' +
        (_0x2f32c8
          ? $_config.text.cart_weight + ' = *' + kg(_0x2f32c8) + '*\n'
          : '') +
        '                ' +
        $_config.text.cart_total +
        ' ( ' +
        _0x289068 +
        ' ' +
        $_config.text.cart_order +
        ' ) = *' +
        format_currency(_0x493b6b) +
        '*\n                \n                \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014\n                \n                \uD83D\uDCCB ' +
        $_config.text.checkout_info +
        ' :\n                \n                *' +
        _0x226915.name +
        '* ( ' +
        _0x226915.phone +
        ' )\n                \n                ' +
        (_0x226915.email
          ? '*' +
            $_config.text.checkout_email +
            '* : ' +
            _0x226915.email +
            '\n\n'
          : '') +
        '                ' +
        (_0x226915.address
          ? '*' +
            $_config.text.checkout_address +
            '* :\n\n' +
            _0x226915.address +
            '\n\n'
          : '') +
        '                *' +
        $_config.text.checkout_note +
        '* : ' +
        (_0x226915.note ? '\n\n' + _0x226915.note : '-') +
        '\n\n                ' +
        (_0x226915.shipping
          ? '*' +
            $_config.text.checkout_shipping +
            '* : ' +
            _0x226915.shipping +
            '\n' +
            $_config.checkout_form_shipping[_0x226915.shipping].info +
            '\n\n'
          : '') +
        '                ' +
        (_0x226915.payment
          ? '*' +
            $_config.text.checkout_payment +
            '* : ' +
            _0x226915.payment +
            '\n' +
            $_config.checkout_form_payment[_0x226915.payment].info +
            '\n\n'
          : '') +
        '                via. ' +
        location.protocol +
        '//' +
        location.hostname +
        '            '
      _0x411b17 = _0x411b17.replaceAll('  ', '').replaceAll('[tab]', '    ')
      _0x411b17 = encodeURIComponent(_0x411b17)
      var _0x225ffd =
        'https://api.whatsapp.com/send?phone=' +
        $_config.whatsapp +
        '&text=' +
        _0x411b17
      localStorage.removeItem('cart')
      location.href = _0x225ffd
    }
  })
  function _0xee7080() {
    window.localStorage && (localStorage.cart = JSON.stringify(_0x1caad7))
  }
  function _0x22eb00() {
    $('#cart .list').empty()
    if (_0x1caad7.length == 0) {
      $('#cart .list_n_form, #cart .cta').hide()
      $('#cart-btn').removeClass('open')
      $('#cart .empty').show()
      return
    }
    $('#cart .list_n_form, #cart .cta').show()
    $('#cart-btn').addClass('open')
    $('#cart .empty').hide()
    var _0x31028d = 0,
      _0x2080b6 = 0,
      _0x23010a = 0
    for (var _0x334698 in _0x1caad7) {
      var _0x22e776 = _0x1caad7[_0x334698],
        _0x181d34 =
          '                <div class="item" data-id="' +
          _0x22e776.id +
          '" data-index="' +
          _0x334698 +
          '">                    <div class="left">                        <b class="title">' +
          _0x22e776.title +
          '</b>                        <br>                        ' +
          (_0x22e776.variant
            ? _0x22e776.variant.label +
              ' : <b class="variant">' +
              _0x22e776.variant.value +
              '</b><br>'
            : '') +
          '                        <input class="note" type="text" placeholder="+ ' +
          $_config.text.cart_note +
          '.." value="' +
          (_0x22e776.note ? _0x22e776.note : '') +
          '">                        <b class="total">' +
          format_currency(_0x22e776.price) +
          '</b>' +
          (_0x22e776.unit
            ? ' <span class="unit">/' + _0x22e776.unit + '</span>'
            : '') +
          '                    </div>                    <div class="right">                        <a class="link" href="' +
          _0x22e776.link +
          '">                            <img class="img" src="' +
          _0x22e776.img +
          '"/>                            ' +
          (_0x22e776.weight
            ? '<small class="weight" title="' +
              $_config.text.cart_weight +
              '">' +
              kg(_0x22e776.weight) +
              '</small>'
            : '') +
          '                        </a>                        <fieldset class="qty">                            <button type="button">-</button>                            <input type="number" value="' +
          _0x22e776.qty +
          '">                            <button type="button">+</button>                        </fieldset>                    </div>                </div>'
      $('#cart .list').prepend(_0x181d34)
      _0x31028d = _0x31028d + Number(_0x22e776.qty)
      _0x2080b6 = _0x2080b6 + Number(_0x22e776.price * _0x22e776.qty)
      _0x23010a = _0x23010a + Number(_0x22e776.weight * _0x22e776.qty)
    }
    $('#cart .cta .subtotal .wrap .grid.weight').remove()
    _0x23010a > 0
      ? ($('#cart .cta .subtotal .wrap').prepend(
          '                <div class="grid weight">                    <span>                        ' +
            $_config.text.cart_weight +
            '                    </span>                    <b>' +
            kg(_0x23010a) +
            '</b>                </div>            '
        ),
        $('#cart [name=shipping]').show().removeAttr('disabled'),
        $('#cart [name=shipping]').prev('.detail').show())
      : ($('#cart [name=shipping]').hide().attr('disabled', true),
        $('#cart [name=shipping]').prev('.detail').hide())
    $('#cart .cta .subtotal .qty, #cart-btn .qty').text(_0x31028d)
    $('#cart .cta .subtotal .sub, #cart-btn .sub').text(
      format_currency(_0x2080b6)
    )
    $('#cart-btn').removeClass('open')
    setTimeout(function () {
      $('#cart-btn').addClass('open')
    }, 100)
  }
}
function slideshow() {
  $('.slideshow').each(function () {
    var _0x47c61b = $(this),
      _0x66a0d0 = 4000,
      _0x458ac1 = parseInt(_0x47c61b.attr('data-delay')),
      _0x3f2937 = 1000,
      _0xcefc33 = parseInt(_0x47c61b.attr('data-fade')),
      _0x188805
    _0x458ac1.length && (_0x66a0d0 = _0x458ac1)
    _0xcefc33.length && (_0x3f2937 = _0xcefc33)
    $('.slideshow-item, .widget', _0x47c61b).length > 1 &&
      ((_0x188805 = setInterval(function () {
        $('.slideshow-item:visible, .widget:visible', _0x47c61b).each(
          function () {
            var _0x5481d1 = $(this)
            _0x5481d1.hide()
            _0x5481d1.next('.slideshow-item, .widget').length
              ? _0x5481d1.next('.slideshow-item, .widget').fadeIn(_0x3f2937)
              : _0x5481d1
                  .closest('.slideshow')
                  .find('.slideshow-item, .widget')
                  .first()
                  .fadeIn(_0x3f2937)
          }
        )
      }, _0x66a0d0)),
      $(this).append(
        '  <button class="nav-left" aria-label="Navigation">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right" aria-label="Navigation">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   '
      ))
    $('.nav-left', _0x47c61b).on('click', function () {
      clearInterval(_0x188805)
      $('.slideshow-item:visible, .widget:visible', _0x47c61b).each(
        function () {
          var _0x2c5864 = $(this)
          _0x2c5864.hide()
          _0x2c5864.prev('.slideshow-item, .widget').length
            ? _0x2c5864.prev('.slideshow-item, .widget').fadeIn(_0x3f2937)
            : _0x2c5864
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .last()
                .fadeIn(_0x3f2937)
        }
      )
    })
    $('.nav-right', _0x47c61b).on('click', function () {
      clearInterval(_0x188805)
      $('.slideshow-item:visible, .widget:visible', _0x47c61b).each(
        function () {
          var _0x7d09f = $(this)
          _0x7d09f.hide()
          _0x7d09f.next('.slideshow-item, .widget').length
            ? _0x7d09f.next('.slideshow-item, .widget').fadeIn(_0x3f2937)
            : _0x7d09f
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .first()
                .fadeIn(_0x3f2937)
        }
      )
    })
  })
}
function product_sort() {
  $('#sort select').on('change', function () {
    $('#sort').addClass('loading')
    if ($(this).val() == 'terbaru') {
      var _0x323b2a = $('.Blog article')
      _0x323b2a.sort(function (_0x433a04, _0x493b56) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', _0x493b56).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', _0x433a04).attr('content')
          ).getTime()
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x323b2a)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terlama') {
      var _0x323b2a = $('.Blog article')
      _0x323b2a.sort(function (_0x1d6600, _0x261270) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', _0x1d6600).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', _0x261270).attr('content')
          ).getTime()
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x323b2a)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terendah') {
      var _0x323b2a = $('.Blog article')
      _0x323b2a.sort(function (_0x4a3900, _0x7b27a2) {
        return (
          $('.price b', _0x4a3900).attr('data-price') -
          $('.price b', _0x7b27a2).attr('data-price')
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x323b2a)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'tertinggi') {
      var _0x323b2a = $('.Blog article')
      _0x323b2a.sort(function (_0x21aee1, _0x5d92d6) {
        return (
          $('.price b', _0x5d92d6).attr('data-price') -
          $('.price b', _0x21aee1).attr('data-price')
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0x323b2a)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
  })
  $('#sort select').val() != '' && $('#sort select').trigger('change')
}
function product_convert() {
  $('.product:not(.field_loaded)').each(function () {
    var _0x34f709 = $(this)
    _0x34f709.addClass('field_loaded')
    $('meta[itemprop="priceCurrency"]', _0x34f709).attr(
      'content',
      $_config.money.currency
    )
    _0x34f709.hasClass('is_post') &&
      $('.image .gallery', this).length &&
      $('.image .gallery img', this).each(function (_0x5cdcf2) {
        var _0x2b5cb1 = $(this).attr('src').split('=')[0],
          _0x8e905a = _0x2b5cb1.split('/')[7],
          _0x3c10a5 =
            _0x2b5cb1.replace(_0x8e905a, 'w150-h150-c') + '=w150-h150-c',
          _0x2cf478 = _0x2b5cb1.replace(_0x8e905a, 's800') + '=s800'
        $('figure.cover', _0x34f709).append(
          '<a data-lightbox="gallery" data-lightbox-title="' +
            $('.title', _0x34f709).text() +
            '" href="' +
            _0x2cf478 +
            '"><img data-src="' +
            _0x3c10a5 +
            '"/></a>'
        )
      })
    var _0x5c56cc = {}
    $('.field td[class]', _0x34f709).each(function () {
      var _0x421c10 = $(this).attr('class')
      _0x421c10 != 'img' &&
        (_0x5c56cc[_0x421c10] = $(this)
          .text()
          .replaceAll(' ', '')
          .replaceAll('%', '')
          .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    })
    _0x5c56cc.status == 'off' &&
      (_0x34f709.addClass('empty'),
      $('figure.cover a:first', _0x34f709).append(
        '<span class="empty"><b>' + $_config.text.product_empty + '</b></span>'
      ),
      $('[itemprop="availability"]', _0x34f709).attr(
        'content',
        'https://schema.org/OutOfStock'
      ))
    var _0x102638 =
      '            <div class="price" data-price="' +
      Number(_0x5c56cc.price) +
      '" data-discount="' +
      Number(_0x5c56cc.discount) +
      '" data-unit="' +
      _0x5c56cc.unit +
      '" data-weight="' +
      Number(_0x5c56cc.weight) +
      '"></div>        '
    if (_0x34f709.hasClass('is_post')) {
      _0x102638 +=
        '                <br>                <div class="option">            '
      var _0x51b0c3 = $('.variant', _0x34f709)
      $('.status', _0x51b0c3).text() == 'on' &&
        ((_0x102638 +=
          '                    <div class="item variant">                        <label>                            ' +
          $('.label', _0x51b0c3).text() +
          '                        </label>                        <fieldset>                '),
        $('.name', _0x51b0c3).each(function () {
          $(this).text() &&
            (_0x102638 +=
              '                            <button ' +
              ($(this).next('.price').text()
                ? 'data-price="' + $(this).next('.price').text() + '"'
                : '') +
              '>' +
              $(this).text() +
              '</button>                        ')
        }),
        (_0x102638 +=
          '                        </fieldset>                    </div>                '))
      _0x102638 +=
        '                <div class="item qty">                    <label>                        ' +
        $_config.text.product_qty +
        '                    </label>                    <fieldset>                        <button>-</button>                        <input type="number" value="1">                        <button>+</button>                    </fieldset>                </div>            '
      _0x102638 +=
        '                </div>                <div class="cta ' +
        (_0x5c56cc.status == 'off' ? 'disabled' : '') +
        '">                    <button class="chat" target="pop-chat">                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">                            <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>                        </svg>                    </button>            '
      _0x102638 +=
        '                <button class="cart-add">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">                        <path d="M387.9 373.7h49.2l17.5-75.4h-66.7zM387.9 448h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448zM265.4 392.5h103.7V448H265.4zM75 373.7h49v-75.4H57.5zM142.9 192h103.7v87.5H142.9zM265.4 192h103.7v87.5H265.4zM85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8zM142.9 392.5h103.7V448H142.9zM265.4 298.3h103.7v75.4H265.4zM142.9 298.3h103.7v75.4H142.9z" />                        <path d="M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z" />                    </svg>                    ' +
        $_config.text.product_add +
        '                </button>            '
      _0x102638 += '                </div>            '
      if (_0x5c56cc.status == 'on') {
        var _0x316670 = $('.marketplace', _0x34f709)
        $('.status', _0x316670).text() == 'on' &&
          ((_0x102638 +=
            '                        <div class="marketplace">                            <small>' +
            $_config.text.product_via_marketplace +
            '</small>                            <br>                    '),
          $('.link', _0x316670).each(function () {
            $(this).text() &&
              (_0x102638 +=
                '                                <a href="' +
                $(this).text() +
                '" target="_blank" title="' +
                $(this).text().split('/')[2].toLowerCase().replace('www.', '') +
                '" rel="nofollow">                                    <img src="https://www.google.com/s2/favicons?domain=' +
                $(this).text().split('/')[2] +
                '&sz=24" alt="favicon"/>                                </a>                            ')
          }),
          (_0x102638 += '                        </div>                    '))
      }
    }
    var _0x2ba8db = $('.title', this)
    $(_0x102638).insertAfter(_0x2ba8db)
    var _0x34f709 = $(this),
      _0x3d7c9e = $('.price', _0x34f709).attr('data-unit'),
      _0x4feb5d = Number($('.price', _0x34f709).attr('data-price')),
      _0x285447 = Number($('.price', _0x34f709).attr('data-discount'))
    if (_0x285447) {
      var _0xd11740 = _0x4feb5d - (_0x4feb5d * _0x285447) / 100
      $('.price', _0x34f709).html(
        '<small>-' +
          _0x285447 +
          '%</small><s>' +
          format_currency(_0x4feb5d) +
          '</s><b data-price="' +
          _0xd11740 +
          '">' +
          format_currency(_0xd11740) +
          '</b>' +
          (_0x3d7c9e ? '<span>/' + _0x3d7c9e + '</span>' : '')
      )
      $('[itemprop="price"]', this).attr('content', _0xd11740)
    } else {
      $('.price', _0x34f709).html(
        '<b data-price="' +
          _0x4feb5d +
          '">' +
          format_currency(_0x4feb5d) +
          '</b>' +
          (_0x3d7c9e ? '<span>/' + _0x3d7c9e + '</span>' : '')
      )
      $('[itemprop="price"]', this).attr('content', _0x4feb5d)
    }
    $('.variant button', _0x34f709).each(function () {
      var _0x39c211 = $(this).attr('data-price')
      if (!_0x39c211) {
        var _0x423303 = $('.price', _0x34f709).attr('data-price')
        $(this).attr('data-price', _0x423303)
      }
    })
    $('.variant button', _0x34f709).on('click', function () {
      $('.variant button', _0x34f709).removeClass('active')
      $(this).addClass('active')
      var _0x33c9cc = $(this).attr('data-price')
      if (_0x33c9cc) {
        if (_0x285447) {
          var _0x5ec501 = _0x33c9cc - (_0x33c9cc * _0x285447) / 100
          $('.price', _0x34f709).html(
            '<small>-' +
              _0x285447 +
              '%</small><s>' +
              format_currency(_0x33c9cc) +
              '</s><b data-price="' +
              _0x5ec501 +
              '">' +
              format_currency(_0x5ec501) +
              '</b>' +
              (_0x3d7c9e ? '<span>/' + _0x3d7c9e + '</span>' : '')
          )
          $('[itemprop="price"]', this).attr('content', _0x5ec501)
        } else {
          $('.price', _0x34f709).html(
            '<b data-price="' +
              _0x33c9cc +
              '">' +
              format_currency(_0x33c9cc) +
              '</b>' +
              (_0x3d7c9e ? '<span>/' + _0x3d7c9e + '</span>' : '')
          )
          $('[itemprop="price"]', this).attr('content', _0x33c9cc)
        }
      }
    })
    $('.variant button:first', _0x34f709).trigger('click')
    $('.qty input', _0x34f709).on('change', function () {
      var _0x5f5403 = Number($('.qty input', _0x34f709).val())
      _0x5f5403 < 1 && (_0x5f5403 = 1)
      $('.qty input', _0x34f709).val(_0x5f5403)
    })
    $('.qty button', _0x34f709).on('click', function () {
      var _0x211fd4 = Number($('.qty input', _0x34f709).val())
      $(this).text() == '-'
        ? (_0x211fd4 = _0x211fd4 - 1)
        : (_0x211fd4 = _0x211fd4 + 1)
      $('.qty input', _0x34f709).val(_0x211fd4).trigger('change')
    })
  })
}
function popwin(_0xb403f9 = '', _0x5e5ed0 = '', _0x145916 = '') {
  if (_0xb403f9) {
    var _0x184e1c = _0xb403f9,
      _0x348b05 = 960
    _0x5e5ed0 && (_0x348b05 = _0x5e5ed0)
    var _0x275f18 = 540
    _0x145916 && (_0x275f18 = _0x145916)
    var _0x5602f7 = Number(screen.width / 2 - _0x348b05 / 2),
      _0xc1decd = Number(screen.height / 2 - _0x275f18 / 2),
      _0x5cb2e4 = window.open(
        _0x184e1c,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
          _0x348b05 +
          ', height=' +
          _0x275f18 +
          ', top=' +
          _0xc1decd +
          ', left=' +
          _0x5602f7
      )
    _0x5cb2e4.focus()
  } else {
    $(document).on('click', '[target="_popwin"]', function (_0x1e80c3) {
      _0x1e80c3.stopPropagation()
      _0x1e80c3.preventDefault()
      var _0x44ed81 = $(this).attr('href'),
        _0x27e2af = $(this).attr('data-popwin-width'),
        _0x535365 = $(this).attr('data-popwin-height'),
        _0x4b889a = 960
      _0x27e2af && (_0x4b889a = _0x27e2af)
      var _0x32b54d = 540
      _0x535365 && (_0x32b54d = _0x535365)
      var _0x239be5 = Number(screen.width / 2 - _0x4b889a / 2),
        _0x119e9f = Number(screen.height / 2 - _0x32b54d / 2),
        _0x930e25 = window.open(
          _0x44ed81,
          '',
          'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
            _0x4b889a +
            ', height=' +
            _0x32b54d +
            ', top=' +
            _0x119e9f +
            ', left=' +
            _0x239be5
        )
      _0x930e25.focus()
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
    var _0x58623f = $(this).attr('data-shortcode')
    if (_0x58623f == 'img') {
      var _0x68af41 = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + _0x68af41 + '"></a>')
    }
    if (_0x58623f == 'youtube') {
      var _0x406d4e = $(this).attr('data-src'),
        _0x42a050 = _0x406d4e.split('/')[3]
      _0x406d4e.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x42a050 = get_url_parameter('v', _0x406d4e))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + _0x42a050 + '?rel=0'
      )
    }
  })
}
function translate() {
  $('[data-text]').each(function () {
    var _0x402700 = $(this).attr('data-text')
    $_config.text[_0x402700]
      ? $(this).text($_config.text[_0x402700])
      : $(this).text(_0x402700)
  })
  $('[data-text-label]').each(function () {
    var _0x3dfd04 = $(this).attr('data-text-label')
    $_config.text[_0x3dfd04]
      ? $(this).attr('label', $_config.text[_0x3dfd04])
      : $(this).attr('label', _0x3dfd04)
  })
  $('[data-text-placeholder]').each(function () {
    var _0x5d447d = $(this).attr('data-text-placeholder')
    $_config.text[_0x5d447d]
      ? $(this).attr('placeholder', $_config.text[_0x5d447d])
      : $(this).attr('placeholder', _0x5d447d)
  })
  $('[data-text-pop-title]').each(function () {
    var _0xb13df2 = $(this).attr('data-text-pop-title')
    $_config.text[_0xb13df2]
      ? $(this).attr('data-pop-title', $_config.text[_0xb13df2])
      : $(this).attr('data-pop-title', _0xb13df2)
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
  $('#pop-chat').on('submit', 'form', function (_0x3d330a) {
    _0x3d330a.preventDefault()
    var _0x5925fa = $('input', this).val() + '\n\nvia. ' + location.href,
      _0x42b054 =
        'https://api.whatsapp.com/send?phone=' +
        $_config.whatsapp +
        '&text=' +
        encodeURIComponent(_0x5925fa)
    popwin(_0x42b054)
  })
  $('.LinkList li a[href*="#"]').each(function () {
    $(this).attr('href', 'javascript:void(0)')
    $(this).append(
      '<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>'
    )
    var _0x132d18 = $(this).parent('li')
    _0x132d18.addClass('dropdown')
    _0x132d18.wrapInner('<span class="dropdown-title"></span>')
    _0x132d18.append('<ul class="sub"></ul>')
  })
  $('.LinkList li a:contains("_")').each(function () {
    var _0x5694a9 = $(this).parent('li').prev('.dropdown').find('ul')
    $(this).parent('li').appendTo(_0x5694a9)
    var _0x5f2dad = $(this).text().replaceAll('_', '').replaceAll('_ ', '')
    $(this).text(_0x5f2dad)
  })
  $('.LinkList').on('click', 'li.dropdown', function () {
    $(this).find('ul:first').toggle()
    $(this).toggleClass('active')
  })
  $('[data-feed]').length &&
    $('[data-feed]').each(function () {
      var _0x4e346b = $(this),
        _0x2325bf = $(this)
          .attr('data-feed')
          .replace('?m=1', '')
          .replace('&m=1', '')
          .replaceAll(' ', '%20')
      _0x4e346b.addClass('loading')
      _0x4e346b.load(_0x2325bf + ' .is_loop', function () {
        var _0x3d0731 = $(this).html()
        _0x4e346b.html(_0x3d0731)
        var _0x1544dd = _0x4e346b.attr('data-hide-id')
        _0x1544dd &&
          (_0x4e346b.find('article#' + _0x1544dd).length
            ? _0x4e346b.find('article#' + _0x1544dd).remove()
            : _0x4e346b.find('article:last-of-type').remove())
        product_convert()
        lazyload()
        timeago()
        _0x4e346b.removeClass('loading')
        _0x4e346b.find('article').length == 0 &&
          _0x4e346b.closest('#related').remove()
      })
    })
  $('#pop-bagikan .copy button').on('click', function (_0x3e27f7) {
    var _0x41fdd1 = $(this)
    _0x41fdd1.siblings('input').select()
    document.execCommand('copy')
    _0x41fdd1.text('Copied!')
    setTimeout(function () {
      _0x41fdd1.text('Copy')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var _0x155eb6 = $('#header').outerHeight(),
        _0xf8a36f = $('.is_single article .attr-sticky').outerHeight()
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop:
              $(window.location.hash).offset().top - _0x155eb6 - _0xf8a36f - 20,
          },
          500
        )
      $(window.location.hash).addClass('focus')
      setTimeout(function () {
        $(window.location.hash).removeClass('focus')
      }, 2000)
    }
  }
  $(document).on('click', 'a[href*="#"]', function (_0x4bf8e7) {
    var _0xac97ac = '#' + $(this).attr('href').split('#')[1]
    if ($(_0xac97ac).length && $(this).attr('href').split('#')[0] === '') {
      _0x4bf8e7.preventDefault()
      var _0x4d42fb = $('#header').outerHeight(),
        _0x1dadb8 = $('.is_single article .attr-sticky').outerHeight()
      _0x1dadb8
        ? $('html, body')
            .stop()
            .animate(
              {
                scrollTop:
                  $(_0xac97ac).offset().top - _0x4d42fb - _0x1dadb8 - 20,
              },
              500
            )
        : $('html, body')
            .stop()
            .animate(
              { scrollTop: $(_0xac97ac).offset().top - _0x4d42fb - 20 },
              500
            )
      $(_0xac97ac).addClass('focus')
      setTimeout(function () {
        $(_0xac97ac).removeClass('focus')
      }, 2000)
    }
  })
  $(document).on('click', '.loadmore-btn', function (_0x38d4f5) {
    _0x38d4f5.preventDefault()
    let _0x2424e4 = $(this).attr('href'),
      _0x4004b1 = $('#blog-pager .loadmore-btn'),
      _0x7bbdb3 = $('#blog-pager .loadmore-btn').text()
    _0x2424e4 &&
      $.ajax({
        url: _0x2424e4,
        beforeSend: function () {
          _0x4004b1.addClass('loading')
        },
        complete: function () {
          _0x4004b1.removeClass('loading')
        },
        success: function (_0x1d5a85) {
          let _0x3ebc07 = $(_0x1d5a85).find('.Blog .is_loop').html(),
            _0x375724 = $(_0x1d5a85).find('.loadmore-btn').attr('href')
          $('.Blog .is_loop').append(_0x3ebc07)
          _0x4004b1.show()
          product_convert()
          product_sort()
          lazyload()
          timeago()
          _0x375724 ? _0x4004b1.attr('href', _0x375724) : _0x4004b1.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var _0x17ba3b = $_config.text.product_prev,
      _0xa8e7a = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(_0xa8e7a + ' article h1', function () {
      var _0x330923 = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
          _0x17ba3b +
          '</b></small><h3>' +
          _0x330923 +
          '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        _0xa8e7a + ' article .post-body img:first-of-type',
        function () {
          var _0x3178b7 = $(this).html(),
            _0x565097 = _0x3178b7.split('src="')[1],
            _0x27f038 = _0x565097.split('"')[0],
            _0x43a5b1 = _0x27f038.split('=')[0],
            _0x34898f = _0x43a5b1.split('/')[7]
          _0x43a5b1 =
            _0x43a5b1.replace(_0x34898f, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + _0x43a5b1 + '"/>')
            .removeClass('loading')
        }
      )
    })
    var _0x3e5889 = $_config.text.product_next,
      _0x262650 = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(_0x262650 + ' article h1', function () {
      var _0x41dab6 = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
          _0x3e5889 +
          '</b></small><h3>' +
          _0x41dab6 +
          '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        _0x262650 + ' article .post-body img:first-of-type',
        function () {
          var _0x55033a = $(this).html(),
            _0x4ecfff = _0x55033a.split('src="')[1],
            _0x59c201 = _0x4ecfff.split('"')[0],
            _0x33a704 = _0x59c201.split('=')[0],
            _0x44d52f = _0x33a704.split('/')[7]
          _0x33a704 =
            _0x33a704.replace(_0x44d52f, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + _0x33a704 + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
}
function timeago() {
  $('[datetime]:not(.timeago)').each(function () {
    var _0x3902aa = $(this),
      _0x312157 = _0x3902aa.attr('datetime')
    _0x3902aa.addClass('timeago')
    !_0x3902aa.attr('title') && _0x3902aa.attr('title', _0x312157)
    _0x3902aa.text(_0x287f2a(_0x312157))
  })
  function _0x287f2a(_0xfa159a) {
    var _0x2d0f50 = 'ago',
      _0x298d1f = 'seconds',
      _0x25cae6 = 'minutes',
      _0x28c86b = 'hours',
      _0x1205f1 = 'days',
      _0x44e5df = 'months',
      _0x132e34 = 'years'
    $_config.money.country_id == 'id-ID' &&
      ((_0x2d0f50 = 'yang lalu'),
      (_0x298d1f = 'detik'),
      (_0x25cae6 = 'menit'),
      (_0x28c86b = 'jam'),
      (_0x1205f1 = 'hari'),
      (_0x44e5df = 'bulan'),
      (_0x132e34 = 'tahun'))
    var _0x5cd1b0 = new Date(_0xfa159a),
      _0x39e95e = 2592000000,
      _0x36ab5a = 31536000000,
      _0x54dd69 = _0x2d0f50,
      _0x558c11 = new Date() - _0x5cd1b0
    return _0x558c11 < 60000
      ? Math.round(_0x558c11 / 1000) + ' ' + _0x298d1f + ' ' + _0x54dd69
      : _0x558c11 < 3600000
      ? Math.round(_0x558c11 / 60000) + ' ' + _0x25cae6 + ' ' + _0x54dd69
      : _0x558c11 < 86400000
      ? Math.round(_0x558c11 / 3600000) + ' ' + _0x28c86b + ' ' + _0x54dd69
      : _0x558c11 < _0x39e95e
      ? Math.round(_0x558c11 / 86400000) + ' ' + _0x1205f1 + ' ' + _0x54dd69
      : _0x558c11 < _0x36ab5a
      ? Math.round(_0x558c11 / _0x39e95e) + ' ' + _0x44e5df + ' ' + _0x54dd69
      : Math.round(_0x558c11 / _0x36ab5a) + ' ' + _0x132e34 + ' ' + _0x54dd69
  }
  $('#comments .datetime a:not(.timeago)').each(function () {
    var _0x4ceffa = $(this),
      _0x45fc94 = _0x4ceffa.text()
    _0x4ceffa.attr('datetime', _0x45fc94)
    var _0x25fb5c = _0x4ceffa.attr('datetime')
    _0x4ceffa.addClass('timeago')
    _0x4ceffa.attr('title', _0x25fb5c)
    _0x4ceffa.text(_0x287f2a(_0x25fb5c))
  })
}
function format_currency(
  _0x5f1240,
  _0x4b5ed5 = $_config.money.country_id,
  _0x2b2dab = $_config.money.currency
) {
  return new Intl.NumberFormat(_0x4b5ed5, {
    style: 'currency',
    currency: _0x2b2dab,
    maximumSignificantDigits: 3,
  }).format(_0x5f1240)
}
function separator(_0x147ce8) {
  var _0x5229a9 = '',
    _0x4006b3 = _0x147ce8.toString().split('').reverse().join('')
  for (var _0x133a78 = 0; _0x133a78 < _0x4006b3.length; _0x133a78++) {
    _0x133a78 % 3 == 0 && (_0x5229a9 += _0x4006b3.substr(_0x133a78, 3) + '.')
  }
  return _0x5229a9
    .split('', _0x5229a9.length - 1)
    .reverse()
    .join('')
}
function kg(_0x9f2b7e) {
  var _0x5d60bd = _0x9f2b7e + ' Gram'
  return _0x9f2b7e >= 1000 && (_0x5d60bd = _0x9f2b7e / 1000 + ' Kg'), _0x5d60bd
}
function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
      '             <div id="pop-video" data-pop-title="Video" data-pop-width="960">               <div class="video">              <iframe allowfullscreen="true"></iframe>               </div>             </div>             '),
    $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function () {
    var _0x910478 = $(this),
      _0x37f73c = _0x910478.attr('id'),
      _0x1fb60d = _0x910478.attr('data-pop-title'),
      _0x55e939 = _0x910478.attr('data-pop-width'),
      _0x13cc2a = _0x910478.attr('data-pop-height')
    _0x910478.wrap('<div class="pop"></div>')
    _0x910478.wrap('<div class="pop-wrap"></div>')
    _0x910478.addClass('pop-content pop-loaded')
    var _0x41dfd5 =
      '            <header class="pop-header">                <div class="pop-title">                    <h3>                           ' +
      _0x1fb60d +
      '                    </h3>                </div>                <div class="pop-close">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>                </div>            </header>        '
    _0x910478.closest('.pop-wrap').prepend(_0x41dfd5)
    _0x55e939 && _0x910478.closest('.pop-wrap').css('width', _0x55e939)
  })
  $('.pop-close').on('click', function () {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function (_0xf844e0) {
    _0xf844e0.preventDefault()
    var _0x1bea1e = $(this),
      _0x221224 = _0x1bea1e.attr('target'),
      _0x693184 = _0x1bea1e.attr('data-pop-title')
        ? _0x1bea1e.attr('data-pop-title')
        : $('#' + _0x221224).attr('data-pop-title'),
      _0x51addf = _0x1bea1e.attr('data-pop-width'),
      _0x2d1648 = _0x1bea1e.attr('data-pop-height')
    _0x1bea1e.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + _0x221224).length &&
      ($('body').addClass('pop-open'),
      $('#' + _0x221224)
        .closest('.pop')
        .addClass('open'),
      _0x1bea1e.closest('.pop-content').length &&
        (($back_id = _0x1bea1e.closest('.pop-content').attr('id')),
        (_0x693184 =
          '<a target="' +
          $back_id +
          '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
          _0x693184)),
      _0x693184 &&
        $('#' + _0x221224)
          .closest('.pop')
          .find('.pop-title h3')
          .html(_0x693184),
      $('[data-src]').each(function () {
        var _0x52783c = $(this).attr('data-src')
        $(this).attr('src', _0x52783c).removeAttr('data-src')
      }))
    if (_0x221224 == 'pop-video') {
      $href = $(this).attr('href')
      var _0xce8ba4 = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0xce8ba4 = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + _0xce8ba4 + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function () {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function (_0x178a09) {
    _0x178a09.stopPropagation()
  })
}
function lightbox() {
  var _0x56237f =
    '        <div id="lightbox">            <div class="lb-wrap">                <figure>                    <div class="lb-img">                        <div class="lb-count"></div>                    </div>                    <nav class="lb-nav">                        <div class="lb-np lb-prev"></div>                        <div class="lb-close"></div>                        <div class="lb-np lb-next"></div>                    </nav>                </figure>            </div>        </div>    '
  $(_0x56237f).appendTo('body')
  $('[data-lightbox]').each(function () {
    var _0x22f654 = $(this).attr('data-lightbox'),
      _0x40a9ae = $('[data-lightbox=' + _0x22f654 + ']').length
    _0x40a9ae > 1 &&
      $('[data-lightbox=' + _0x22f654 + ']').each(function (_0x530504) {
        $(this).attr('data-lightbox-index', _0x530504 + 1 + ' / ' + _0x40a9ae)
      })
    $(this).on('mousedown', function () {
      return false
    })
    $(this).on('contextmenu', function () {
      return alert('\xA9 ' + $_config.page.title), false
    })
  })
  $(document).on('click', '[data-lightbox]', function (_0x332e3b) {
    _0x332e3b.preventDefault()
    var _0x2e87c0 = $(this),
      _0x10a843 = _0x2e87c0.attr('data-lightbox'),
      _0x295ef8 = _0x2e87c0.attr('data-lightbox-index'),
      _0x17713d = _0x2e87c0.attr('data-lightbox-title'),
      _0x366ae0 = _0x2e87c0.attr('data-lightbox-desc'),
      _0xbadddc = _0x2e87c0.attr('href')
    $('#lightbox').scrollTop(0)
    $('#lightbox .lb-close').hide()
    $('#lightbox .lb-wrap figure .lb-img img').remove()
    $('#lightbox .lb-count').hide()
    $('#lightbox .lb-wrap figure figcaption').remove()
    $('#lightbox .lb-np').hide()
    _0xbadddc &&
      ($('#lightbox .lb-wrap').addClass('lb-loading'),
      $('#lightbox .lb-wrap figure .lb-img').prepend(
        '<img data-src="' + _0xbadddc + '"/>'
      ),
      $('#lightbox .lb-wrap figure .lb-img img')
        .attr('src', _0xbadddc)
        .on('load', function () {
          $(this).removeAttr('data-src')
          $(this).on('mousedown', function () {
            return false
          })
          $(this).on('contextmenu', function () {
            return alert('\xA9 ' + $_config.page.title), false
          })
          $('#lightbox .lb-wrap').removeClass('lb-loading')
          ;(_0x17713d || _0x366ae0) &&
            $('#lightbox .lb-wrap figure').append('<figcaption></figcaption>')
          _0x17713d &&
            $('#lightbox .lb-wrap figure figcaption').append(
              '<h4>' + _0x17713d + '</h4>'
            )
          _0x366ae0 &&
            $('#lightbox .lb-wrap figure figcaption').append(
              '<p>' + _0x366ae0 + '</p>'
            )
          _0x295ef8 && $('#lightbox .lb-count').html(_0x295ef8).show()
          $('#lightbox .lb-np').show()
          if (_0x2e87c0.prev('[data-lightbox="' + _0x10a843 + '"]').length) {
            var _0x4ddd90 = _0x2e87c0
              .prev('[data-lightbox="' + _0x10a843 + '"]')
              .attr('href')
            $('#lightbox .lb-np.lb-prev')
              .attr('data-id', _0x10a843)
              .attr('data-url', _0x4ddd90)
              .show()
            $('body').append(
              '<img src="' + _0x4ddd90 + '" style="display:none;"/>'
            )
          } else {
            $('#lightbox .lb-np.lb-prev').hide()
          }
          if (_0x2e87c0.next('[data-lightbox="' + _0x10a843 + '"]').length) {
            var _0x4ddd90 = _0x2e87c0
              .next('[data-lightbox="' + _0x10a843 + '"]')
              .attr('href')
            $('#lightbox .lb-np.lb-next')
              .attr('data-id', _0x10a843)
              .attr('data-url', _0x4ddd90)
              .show()
            $('body').append(
              '<img src="' + _0x4ddd90 + '" style="display:none;"/>'
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
    function (_0x45cffe) {
      _0x45cffe.stopPropagation()
      var _0x438b73 = $(this).attr('data-url'),
        _0x4fefda = $(this).attr('data-id')
      $(
        '[href="' + _0x438b73 + '"][data-lightbox="' + _0x4fefda + '"]'
      ).trigger('click')
    }
  )
  $('#lightbox').click(function () {
    $('#lightbox').removeClass('open')
    $('body').removeClass('lightbox_open')
  })
  $('#lightbox .lb-wrap').on('click', function (_0x404a8d) {
    _0x404a8d.stopPropagation()
  })
  $('#lightbox .lb-close').on('click', function (_0x89ad68) {
    _0x89ad68.stopPropagation()
    $('#lightbox').removeClass('open')
    $('body').removeClass('lightbox_open')
  })
  $(document).on('keydown', function (_0x2f9688) {
    var _0x402f5b = _0x2f9688.keyCode || _0x2f9688.which
    _0x2f9688.key === 'Escape' &&
      ($('#lightbox').removeClass('open'),
      $('body').removeClass('lightbox_open'))
    _0x402f5b === 37 && $('#lightbox .lb-np.lb-prev:visible').trigger('click')
    _0x402f5b === 39 && $('#lightbox .lb-np.lb-next:visible').trigger('click')
    _0x402f5b === 38 && $('#lightbox').scrollTop(0)
    if (_0x402f5b === 40) {
      var _0x8b77a1 = $('#lightbox').height()
      $('#lightbox').scrollTop(_0x8b77a1)
    }
  })
}
function lazyload() {
  $('[data-bg]').each(function () {
    var _0x3b9012 = $(this),
      _0x47804d = _0x3b9012.attr('data-bg')
    _0x3b9012
      .css('background-image', 'url(' + _0x47804d + ')')
      .removeAttr('data-bg')
  })
  $('[data-src]:not([lazy="true"])').each(function () {
    var _0x308a2b = $(this),
      _0x21b073 = $(window).height(),
      _0xa31696 = $(window).scrollTop(),
      _0x2657ff = _0xa31696 + _0x21b073,
      _0x4ce304 = _0x308a2b.offset().top
    _0x308a2b.attr('data-offset-top', _0x4ce304)
    var _0x436af = _0x308a2b.attr('data-src')
    _0x436af = _0x436af.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x436af = _0x436af.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x436af = _0x436af.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x436af = _0x436af.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    var _0x11c619 = _0x308a2b.prop('tagName').toLowerCase()
    _0x4ce304 <= _0x2657ff &&
      (_0x11c619 == 'img'
        ? (_0x308a2b.attr('src', _0x436af).removeAttr('data-src'),
          _0x308a2b.attr('lazy', 'true'))
        : _0x11c619 == 'iframe' &&
          (_0x308a2b.attr('src', _0x436af).removeAttr('data-src'),
          _0x308a2b.attr('lazy', 'true')))
  })
  $(window).on('scroll', function () {
    var _0x493e17 = $(window).height(),
      _0x2d4586 = $(window).scrollTop(),
      _0x42b052 = _0x2d4586 + _0x493e17
    $('[data-src]:not([lazy="true"])').each(function () {
      var _0x5d12b1 = $(this),
        _0x150bc1 = $(window).height(),
        _0x40aa28 = _0x5d12b1.offset().top,
        _0x6df186 = _0x5d12b1.attr('data-src')
      _0x6df186 = _0x6df186.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x6df186 = _0x6df186.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x6df186 = _0x6df186.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x6df186 = _0x6df186.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var _0x2183f2 = _0x5d12b1.prop('tagName').toLowerCase()
      _0x40aa28 <= _0x42b052 &&
        (_0x2183f2 == 'img'
          ? (_0x5d12b1.attr('src', _0x6df186).removeAttr('data-src'),
            _0x5d12b1.attr('lazy', 'true'))
          : _0x2183f2 == 'iframe' &&
            (_0x5d12b1.attr('src', _0x6df186).removeAttr('data-src'),
            _0x5d12b1.attr('lazy', 'true')))
    })
  })
}
function titleCase(_0x4fcd52) {
  _0x4fcd52 = _0x4fcd52.split(' ')
  for (var _0x229341 = 0; _0x229341 < _0x4fcd52.length; _0x229341++) {
    _0x4fcd52[_0x229341] =
      _0x4fcd52[_0x229341].charAt(0).toUpperCase() +
      _0x4fcd52[_0x229341].slice(1)
  }
  return (_0x4fcd52 = _0x4fcd52.join(' ')), _0x4fcd52
}
function $_GET(_0x4e9dc6) {
  var _0x33ec96 = window.location.search.substring(1),
    _0x401cd0 = _0x33ec96.split('&'),
    _0x1c6871,
    _0x32a873
  for (_0x32a873 = 0; _0x32a873 < _0x401cd0.length; _0x32a873++) {
    _0x1c6871 = _0x401cd0[_0x32a873].split('=')
    if (_0x1c6871[0] === _0x4e9dc6) {
      return _0x1c6871[1] === undefined
        ? true
        : decodeURIComponent(_0x1c6871[1])
    }
  }
}
function get_url_parameter(_0x130a46, _0x20ccea) {
  _0x130a46 = _0x130a46.replace(/[\[\]]/g, '\\$&')
  var _0x3ac3a3 = new RegExp('[?&]' + _0x130a46 + '(=([^&#]*)|&|#|$)'),
    _0x4ffec9 = _0x3ac3a3.exec(_0x20ccea)
  if (!_0x4ffec9) {
    return null
  }
  if (!_0x4ffec9[2]) {
    return ''
  }
  return decodeURIComponent(_0x4ffec9[2].replace(/\+/g, ' '))
}
