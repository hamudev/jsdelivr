$(document).ready(function () {
  $('img[src]').each(function () {
    var _0x54ff05 = $(this).attr('src')
    _0x54ff05 = _0x54ff05.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x54ff05 = _0x54ff05.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x54ff05 = _0x54ff05.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x54ff05 = _0x54ff05.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    $(this).attr('src', _0x54ff05)
  })
  $('a[href]').each(function () {
    var _0x37e190 = $(this).attr('href')
    _0x37e190 = _0x37e190.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x37e190 = _0x37e190.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x37e190 = _0x37e190.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x37e190 = _0x37e190.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    $(this).attr('href', _0x37e190)
  })
  $('.widget-item-control').remove()
  tw_config.virtual_products &&
    ($('.productCheckoutInfo .ongkir').remove(),
    $('#checkoutWhatsApp .alamat').closest('label').remove(),
    $('.productCheckout').addClass('virtual'),
    $(
      '.productOptionInfo small:nth-last-child(1), .productOptionInfo small:nth-last-child(2)'
    ).remove())
  $('a[href*="https://www.youtube.com/watch?v="]').each(function () {
    var _0x3c071c = $(this).attr('href'),
      _0x8c71c4 = _0x3c071c.split('v=')[1],
      _0xb1baf4 = _0x8c71c4.indexOf('&')
    _0xb1baf4 != -1 && (_0x8c71c4 = video_id.substring(0, _0xb1baf4))
    $(this).attr(
      'href',
      'https://www.youtube.com/embed/' + _0x8c71c4 + '?autoplay=1'
    )
    $(this).addClass('popWin videoYoutube')
    var _0x424b42 =
      'https://img.youtube.com/vi/' + _0x8c71c4 + '/maxresdefault.jpg'
    $(this).attr('style', 'background-image:url(' + _0x424b42 + ');')
  })
  $('.quickedit').removeAttr('onclick')
  $('.quickedit').removeAttr('target')
  $('.quickedit').addClass('popWin')
  $('.quickedit').attr('data-popWidth', 600)
  $('.quickedit img').remove()
  $('.quickedit').append('<i class="icon ion-md-create"></i>')
  var _0x428878 = tw_socmed
  $.each(_0x428878, function (_0x554993, _0x451544) {
    _0x554993 != null &&
      _0x451544 != '' &&
      $('#follow .followBtn, .followBtn2').append(
        '<a class="popWin ' +
          _0x554993 +
          '" data-popWidth="1280" href="' +
          _0x451544 +
          '"><i class="icon ion-logo-' +
          _0x554993 +
          '"></i></a>'
      )
  })
  $('#page-loader').fadeOut(500)
  $(window).on('beforeunload', function () {
    $('.poptamv').removeClass('open')
    $.magnificPopup.close()
    $('#page-loader').fadeIn(500).delay(1000).fadeOut(1000)
  })
  $(window).on('load', function () {
    $('iframe').each(function () {
      var _0x31b436 = $(this).attr('data-src')
      $(this).attr('src', _0x31b436)
      $(this).removeAttr('data-src')
    })
    var _0x344f30 =
        location.href.split('/')[0] + '//' + location.href.split('/')[2] + '/',
      _0x3ae88c =
        location.href.split('/')[0] +
        '//' +
        location.href.split('/')[2] +
        '/?m=1'
    ;((!localStorage.getItem('load_notif') && location.href == _0x344f30) ||
      location.href == _0x3ae88c) &&
      ($('a.btnNotif').trigger('click'), localStorage.setItem('load_notif', 1))
    $('img[data-src]').each(function () {
      var _0x535376 = $(this).attr('data-src')
      _0x535376 = _0x535376.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x535376 = _0x535376.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x535376 = _0x535376.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x535376 = _0x535376.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      $(this).attr('src', _0x535376)
      $(this).removeAttr('data-src')
    })
    $('.lazy-bg[data-src]').each(function () {
      var _0x4ace3f = $(this).attr('data-src')
      _0x4ace3f = _0x4ace3f.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x4ace3f = _0x4ace3f.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x4ace3f = _0x4ace3f.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x4ace3f = _0x4ace3f.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      $(this).attr('style', 'background-image:url("' + _0x4ace3f + '");')
      $(this).removeAttr('data-src')
      $(this).removeClass('lazy-bg')
    })
  })
  $(window).on('scroll', function () {
    $('header').each(function () {
      $(window).scrollTop() >= 1
        ? $(this).addClass('onScroll')
        : $(this).removeClass('onScroll')
    })
  })
  $('.productTitle').each(function () {
    var _0x38f0bc = $(this).parents('.itemPost').find('.productDetail')
    $(this).prependTo(_0x38f0bc)
  })
  $('.productPrice').each(function () {
    var _0x59fb9b = $(this).text(),
      _0x57075b = $(this).attr('data-discount-percent')
    if (!_0x57075b || _0x57075b == 0 || _0x57075b == '') {
      var _0x39c8f5 = $(this).closest('.productDetail').find('.data_discount')
      _0x57075b = _0x39c8f5.text()
      _0x39c8f5.remove()
    }
    var _0x122014 = _0x59fb9b - (_0x59fb9b * _0x57075b) / 100,
      _0x32aa63 = ''
    $(this).after("<span class='productPrice_after'>Test</span>")
    if (!_0x57075b || _0x57075b == 0 || _0x57075b == '') {
      $(this)
        .next('.productPrice_after')
        .html('<b>' + angkaToRp(_0x59fb9b) + '</b>')
      var _0x32aa63 = _0x59fb9b
    } else {
      $(this)
        .next('.productPrice_after')
        .html(
          '<small><span>-' +
            _0x57075b +
            '%</span><s>' +
            angkaToRp(_0x59fb9b) +
            '</s></small><b>' +
            angkaToRp(_0x122014) +
            '</b>'
        )
      var _0x32aa63 = _0x122014
    }
    $(this).attr('data-selected', _0x32aa63)
    $(this).parents('.itemPost').attr('data-price', _0x32aa63)
  })
  $('.lightbox').each(function () {
    $(this).magnificPopup({
      type: 'image',
      verticalFit: false,
      gallery: { enabled: true },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            'mfp-figure',
            'mfp-figure mfp-with-anim'
          )
          this.st.mainClass = this.st.el.attr('data-effect')
        },
      },
      closeOnContentClick: true,
      midClick: true,
    })
  })
  $('.pageBody a:has(img), .tabContent a:has(img)').each(function () {
    $(this).addClass('lightbox')
  })
  $(window).on('load', function () {
    $('.productPhotoWrapper:not(.gallery) a').each(function () {
      var _0x326444 = $(this)
      if ($(this).css('background-image').indexOf('=') != -1) {
        var _0x3618fb = $(this).css('background-image').split('=')[0],
          _0x1b54e4 = _0x3618fb.replace('url("', '') + '=w250-h250-c'
        _0x326444.removeAttr('style')
        _0x326444.attr('style', 'background-image:url(' + _0x1b54e4 + ')')
      }
    })
    $('.productPhotoWrapper:is(.gallery) a').each(function () {
      var _0x5418f1 = $(this)
      if ($(this).css('background-image').indexOf('=') != -1) {
        var _0x2fedda = $(this).css('background-image').split('=')[0],
          _0x285ecd = _0x2fedda.replace('url("', '') + '=s0',
          _0x1ace1f = _0x2fedda.replace('url("', '') + '=w640-h640-c'
        _0x5418f1.removeAttr('style')
        _0x5418f1.attr('href', _0x285ecd)
        _0x5418f1.attr('style', 'background-image:url(' + _0x1ace1f + ')')
      }
    })
  })
  $('.gallery').each(function () {
    $(this).magnificPopup({
      delegate: 'a:has(img)',
      type: 'image',
      preload: [1, 2],
      verticalFit: false,
      gallery: { enabled: true },
      closeOnContentClick: true,
      midClick: true,
    })
  })
  $('.lightframe').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: false,
    fixedContentPos: false,
  })
  $('.poptamv-btn, .tombol-wa').on('click', function () {
    $('body').addClass('hideScroll')
    var _0x2e1a0e = $(this).attr('data-title'),
      _0x374c92 = $(this).attr('href')
    $(_0x374c92).addClass('open')
    $(_0x374c92).find('.title-content').html(_0x2e1a0e)
    if ($(this).attr('data-img') != null) {
      var _0x30ab19 = $(this).attr('data-img')
      $(_0x374c92).find('.content img').show()
      $(_0x374c92).find('.content img').attr('src', _0x30ab19)
    }
    if ($(this).attr('data-width') != null) {
      var _0x4f62c3 = $(this).attr('data-width')
      $(_0x374c92)
        .find('.wrap')
        .attr('style', 'max-width:' + _0x4f62c3 + 'px!important;')
    }
    if ($(this).attr('data-tooltip') != null) {
      var _0x162f05 = $(this).attr('data-tooltip')
      $(_0x374c92).find('.poptamv-wrap').show()
      $(_0x374c92).find('.poptamv-wrap').html(_0x162f05)
    }
  })
  $('.poptamv .closeTamv').on('click', function () {
    $('body').removeClass('hideScroll')
    $(this).parents('.poptamv').removeClass('open')
  })
  $(document).keyup(function (_0x4df52c) {
    _0x4df52c.key === 'Escape' && $('.poptamv .closeTamv').trigger('click')
  })
  if (pageMode != 'related') {
    var _0x5599a1 = document.createElement('audio')
    _0x5599a1.src = 'https://kangrian.github.io/TokoWhatsApp/wa.mp3'
    _0x5599a1.preload = 'auto'
    sessionStorage.getItem('waFix') === null &&
      _0x5599a1.addEventListener(
        'canplaythrough',
        function () {
          setTimeout(function () {
            $('.waFix').addClass('show')
          }, 6000)
        },
        false
      )
  }
  $(document).on('click', '.waFix', function () {
    $(this).removeClass('show')
    sessionStorage.setItem('waFix', false)
  })
  $(document).on('keypress', '.formWA input, .formWA textarea', function () {
    event.keyCode === 13 &&
      $(this).parents('.formWA').find('.submit').trigger('click')
  })
  $('.formWA .wajib').each(function () {
    title = $(this).attr('placeholder')
    label = $(this).parents('label')
    $(
      '<span class="validasi"><b>' + title + '</b> (dibutuhkan)</span>'
    ).appendTo(label)
  })
  $(document).on('keyup', '.formWA .wajib', function () {
    $(this).val() != '' &&
      ($(this).removeClass('focus'),
      $(this).parents('label').find('.validasi').removeClass('show'))
  })
  $(document).on('change', '.formWA select', function () {
    $(this).removeClass('focus')
    $(this).parents('label').find('.validasi').removeClass('show')
  })
  $(document).on('click', '.formWA .submit', function () {
    return _0x372416($(this).parents('.poptamv').attr('id')), false
  })
  $('.formWA [type=email]').each(function () {
    $(this)
      .attr('type', 'tel')
      .attr('placeholder', 'No. HP ( Aktif )..')
      .removeClass('email')
      .addClass('hp')
    $(this)
      .closest('.item')
      .find('.icon')
      .removeClass('ion-md-mail')
      .addClass('ion-md-phone-portrait')
    $(this).closest('.item').find('.validasi b').text('No. HP ( Aktif )..')
  })
  $('.formWA textarea.catatan')
    .closest('.item')
    .insertBefore('#checkoutWhatsApp .formWA .submit')
  function _0x372416(_0x49b396) {
    var _0xa4b823 = true
    $('#' + _0x49b396 + ' .wajib').each(function () {
      ;($.trim($(this).val()) == '' || $.trim($(this).val()) == 'default') &&
        $(this).addClass('focus')
    })
    $('#' + _0x49b396 + ' .wajib').each(function () {
      if ($.trim($(this).val()) == '') {
        return (
          (_0xa4b823 = false),
          $(this).parents('label').find('.validasi').addClass('show'),
          $(this).focus(),
          false
        )
      } else {
        if ($.trim($(this).val()) == 'default') {
          return (
            (_0xa4b823 = false),
            $(this).parents('label').find('.validasi').addClass('show'),
            false
          )
        }
      }
    })
    if (_0xa4b823 === true) {
      var _0x5ab9ad = '',
        _0x3141a4 = 'https://api.whatsapp.com/send'
      ;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && (_0x3141a4 = 'whatsapp://send')
      if (_0x49b396 == 'kirimWhatsApp') {
        var _0x352cca = tw_config.nama_admin,
          _0x4dc0ae = tw_config.pesan_salam,
          _0x5143a7 = 62,
          _0x2a113d = tw_config.no_whatsapp,
          _0x24e5fe = $('#' + _0x49b396 + ' .title-content').text(),
          _0x566830 = $('#' + _0x49b396 + ' .nama').val(),
          _0x47739c = $('#' + _0x49b396 + ' .hp').val(),
          _0x2b283c = $('#' + _0x49b396 + ' .pesan').val(),
          _0x5ab9ad =
            _0x3141a4 +
            '?phone=' +
            _0x5143a7 +
            _0x2a113d +
            '&text=' +
            _0x4dc0ae +
            ' ' +
            _0x352cca +
            '.. ' +
            'perkenalkan, saya *' +
            _0x566830 +
            '*.%0A%0A' +
            '\uD83D\uDCAC ' +
            _0x2b283c +
            '%0A%0A' +
            'No. HP ( Aktif ) : ' +
            _0x47739c +
            '%0A' +
            'via ' +
            location.href
      } else {
        if (_0x49b396 == 'checkoutWhatsApp') {
          var _0x352cca = tw_config.nama_admin,
            _0x4dc0ae = tw_config.pesan_salam,
            _0x5143a7 = 62,
            _0x2a113d = tw_config.no_whatsapp,
            _0x24e5fe = $(
              '#' + _0x49b396 + ' .productCheckoutInfo .infoTitle'
            ).text(),
            _0x343a3c = $('#' + _0x49b396 + ' .productOptionInfo').text(),
            _0x29f7bd = $('#' + _0x49b396 + ' .totalqty').text(),
            _0x566830 = $('#' + _0x49b396 + ' .nama').val(),
            _0x47739c = $('#' + _0x49b396 + ' .hp').val(),
            _0x679848 = $('#' + _0x49b396 + ' .jumlah').val(),
            _0x1620b4 = $('#' + _0x49b396 + ' .pembayaran').val(),
            _0x38d040 = $('#' + _0x49b396 + ' .catatan').val(),
            _0x2ea53c = $('#' + _0x49b396 + ' .alamat').val()
          if (tw_config.virtual_products) {
            var _0x5ab9ad =
              _0x3141a4 +
              '?phone=' +
              _0x5143a7 +
              _0x2a113d +
              '&text=' +
              _0x4dc0ae +
              ' ' +
              _0x352cca +
              '.. ' +
              'saya mau beli *' +
              _0x24e5fe +
              '.*%0A%0A' +
              _0x343a3c +
              '%0A' +
              '\u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014%0A%0A' +
              _0x29f7bd +
              '%0A%0A' +
              '\u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014%0A%0A' +
              '*Catatan :*%0A' +
              _0x38d040 +
              '%0A%0A' +
              '*Metode Pembayaran :*%0A' +
              _0x1620b4 +
              '%0A%0A' +
              'Atas Nama.%0A*' +
              _0x566830 +
              '* ( ' +
              _0x47739c +
              ' )%0A%0A' +
              'via ' +
              location.href
          } else {
            var _0x5ab9ad =
              _0x3141a4 +
              '?phone=' +
              _0x5143a7 +
              _0x2a113d +
              '&text=' +
              _0x4dc0ae +
              ' ' +
              _0x352cca +
              '.. ' +
              'saya mau beli *' +
              _0x24e5fe +
              '.*%0A%0A' +
              _0x343a3c +
              '%0A' +
              '\u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014%0A%0A' +
              _0x29f7bd +
              '%0A%0A' +
              '\u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014%0A%0A' +
              '*Catatan :*%0A' +
              _0x38d040 +
              '%0A%0A' +
              '*Metode Pembayaran :*%0A' +
              _0x1620b4 +
              '%0A%0A' +
              '*Alamat :*%0A' +
              _0x2ea53c +
              '%0A%0A' +
              'Atas Nama.%0A*' +
              _0x566830 +
              '* ( ' +
              _0x47739c +
              ' )%0A%0A' +
              'via ' +
              location.href
          }
        } else {
          alert('id tidak ditemukan')
        }
      }
      $(this).attr('href', _0x5ab9ad)
      var _0x30edef = Number(screen.width / 2 - 480),
        _0x4dc105 = Number(screen.height / 2 - 270),
        _0x1a52f1 = window.open(
          this.href,
          '',
          'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
            960 +
            ', height=' +
            540 +
            ', top=' +
            _0x4dc105 +
            ', left=' +
            _0x30edef
        )
      return _0x1a52f1.focus(), false
    }
  }
  $(document).on('click', '.popWin', function () {
    var _0x46861f = $(this).attr('href'),
      _0x5d13e0 = $(this).attr('data-popWidth'),
      _0x48a73a = $(this).attr('data-popHeight')
    return (
      _0x5d13e0 == null && (_0x5d13e0 = 960),
      _0x48a73a == null && (_0x48a73a = 540),
      (left = Number(screen.width / 2 - _0x5d13e0 / 2)),
      (tops = Number(screen.height / 2 - _0x48a73a / 2)),
      (popupWindow = window.open(
        _0x46861f,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
          _0x5d13e0 +
          ', height=' +
          _0x48a73a +
          ', top=' +
          tops +
          ', left=' +
          left
      )),
      popupWindow.focus(),
      false
    )
  })
  $('.LinkList li a[href*="#"]').each(function () {
    $(this).parent('li').addClass('dd')
    $(this).parent('li').append('<ul></ul>')
    $(this).attr('href', 'javascript:void(0)')
  })
  $('.LinkList li a:contains("_")').each(function () {
    var _0x5618aa = $(this).parent('li').prev('.dd').find('ul')
    $(this).parent('li').appendTo(_0x5618aa)
    var _0x6dcda = $(this).text().replace('_', '')
    $(this).text(_0x6dcda)
  })
  $('.LinkList li.dd').click(function () {
    $(this).find('ul:first').toggle()
    $(this).toggleClass('active')
  })
  $('.btnCat, .closeCategory, .btnCategory, .tw_category .utama').click(
    function () {
      $('.tw_category .Label').toggle()
    }
  )
  $('.btnMenu, .closeMenu').click(function () {
    $('.tw_menu .LinkList').toggle()
    $('.tw_category .Label').hide()
    $('.btnMenu').find('i').toggleClass('ion-ios-menu')
    $('.btnMenu').find('i').toggleClass('ion-ios-arrow-up')
    $('.closeMenuCategory').fadeToggle()
  })
  $('.closeMenuCategory').click(function () {
    $('.tw_menu .LinkList').hide()
    $('.tw_category .Label').hide()
    $('.btnMenu').find('i').removeClass('ion-ios-arrow-up')
    $('.btnMenu').find('i').addClass('ion-ios-menu')
    $('.closeMenuCategory').fadeOut()
  })
  $('.btnSearch').click(function () {
    $('.headerSearch').show()
    $('.headerSearch form .text').focus()
  })
  $('.headerSearch i.ion-ios-arrow-back').click(function () {
    $('.headerSearch').hide()
    $('.headerSearch form .text').blur()
  })
  $('.tw_search').click(function () {
    ;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) && $('.headerSearch i.ion-ios-arrow-back').trigger('click')
    $('.headerSearch form i.ion-md-close').trigger('click')
  })
  $(document).on('keyup', '.headerSearch form .text', function () {
    if (event.keyCode === 13) {
      ;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? $('.headerSearch i.ion-ios-arrow-back').trigger('click')
        : $('.tw_search').hide()
    }
  })
  $('.headerSearch form .text').keyup(function () {
    $(this).val() != ''
      ? ($('.tw_search').show(), $('.headerSearch form i.ion-md-close').show())
      : ($('.tw_search').hide(), $('.headerSearch form i.ion-md-close').hide())
  })
  $('.headerSearch form i.ion-md-close').click(function () {
    $('.tw_search').hide()
    $('.headerSearch form i.ion-md-close').hide()
    $('.headerSearch form .text').val('')
  })
  sessionStorage.getItem('ss_notif') == null && $('.btnNotif span').fadeIn()
  $('.btnNotif').click(function () {
    $('.btnNotif span').hide()
    sessionStorage.setItem('ss_notif', false)
  })
  ;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? $('a').each(function () {
        var _0x2d9905 = $(this).attr('href') + '?m=1',
          _0x52d01e = $(this).attr('href') + '&m=1'
        ;(_0x2d9905 == window.location || _0x52d01e == window.location) &&
          $(this).addClass('active')
      })
    : $('a').each(function () {
        var _0x45142b = $(this).attr('href')
        _0x45142b == window.location && $(this).addClass('active')
      })
  $('textarea.code').each(function () {
    var _0x3229ee = $(this).val(),
      _0x414196 = _0x3229ee.replace(/<br\s?\/?>/g, '')
    $(this).val(_0x414196)
    $(this).on('click', function () {
      $(this).select()
    })
    $(this).attr('readonly', 'readonly')
  })
  ;(tw_config.FBPixel_ID != null || tw_config.FBPixel_ID != '') &&
    (!(function (
      _0x16c434,
      _0xb34c00,
      _0x2bc9b9,
      _0x35c03a,
      _0xa4f7c3,
      _0xa48679,
      _0x633ed4
    ) {
      if (_0x16c434.fbq) {
        return
      }
      _0xa4f7c3 = _0x16c434.fbq = function () {
        _0xa4f7c3.callMethod
          ? _0xa4f7c3.callMethod.apply(_0xa4f7c3, arguments)
          : _0xa4f7c3.queue.push(arguments)
      }
      if (!_0x16c434['_fbq']) {
        _0x16c434['_fbq'] = _0xa4f7c3
      }
      _0xa4f7c3.push = _0xa4f7c3
      _0xa4f7c3.loaded = true
      _0xa4f7c3.version = '2.0'
      _0xa4f7c3.queue = []
      _0xa48679 = _0xb34c00.createElement(_0x2bc9b9)
      _0xa48679.async = true
      _0xa48679.src = _0x35c03a
      _0x633ed4 = _0xb34c00.getElementsByTagName(_0x2bc9b9)[0]
      _0x633ed4.parentNode.insertBefore(_0xa48679, _0x633ed4)
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    ),
    fbq('init', tw_config.FBPixel_ID),
    pageMode != 'related' &&
      (fbq('track', 'PageView'),
      $(
        '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' +
          tw_config.FBPixel_ID +
          '&amp;ev=PageView&amp;noscript=1"/></noscript>'
      ).appendTo('body')),
    $('.productPhotoWrapper a').each(function () {
      var _0x45922a = $(this).parents('.itemPost').attr('data-price'),
        _0x5df7ad = $(this).parents('.itemPost').attr('data-blogID'),
        _0x52eb11 = $(this).parents('.itemPost').attr('id')
      $(this).click(function () {
        fbq('track', 'ViewContent', {
          value: _0x45922a,
          currency: 'IDR',
        })
      })
    }),
    $('.productOrder a.tombol-wa').click(function () {
      fbq('track', 'InitiateCheckout')
    }),
    $('#checkoutWhatsApp .submit').each(function () {
      $(this).on('click', function () {
        var _0x27d48b = rpToAngka($('.productCheckoutInfo .total').text())
        fbq('track', 'Purchase', {
          value: _0x27d48b,
          currency: 'IDR',
        })
      })
    }),
    $('.poptamv-btn.waFix').click(function () {
      fbq('track', 'Contact')
    }))
  $(window).on('load', function () {
    $('.productQty .min').trigger('click')
    $('.productCheckoutMP a').each(function () {
      var _0x591d79 = $(this).attr('href').split('/')[2]
      $('img', this).attr(
        'src',
        'https://www.google.com/s2/favicons?domain=' + _0x591d79 + '&sz=24'
      )
    })
  })
})
