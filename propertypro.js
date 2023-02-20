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
    shortcode()
    post_convert()
    post_sort()
    pop()
    popwin()
    lazyload()
    timeago()
    lightbox()
    slideshow()
    darkmode()
    custom_js()
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
    $('.LinkList li a[href*="#"]').each(function () {
      $(this).attr('href', 'javascript:void(0)')
      $(this).append(
        '<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>'
      )
      var _0x23e82f = $(this).parent('li')
      _0x23e82f.addClass('dropdown')
      _0x23e82f.wrapInner('<span class="dropdown-title"></span>')
      _0x23e82f.append('<ul class="sub"></ul>')
    })
    $('.LinkList li a:contains("_")').each(function () {
      var _0x444075 = $(this).parent('li').prev('.dropdown').find('ul')
      $(this).parent('li').appendTo(_0x444075)
      var _0x36f220 = $(this).text().replaceAll('_', '').replaceAll('_ ', '')
      $(this).text(_0x36f220)
    })
    $('#pop-faq').each(function () {
      var _0x3d27f9 = $('.faq-grid', this).html()
      _0x3d27f9 = _0x3d27f9.replaceAll('[question]', '<div class="question"><p>')
      _0x3d27f9 = _0x3d27f9.replaceAll('[/question]', '</p></div>')
      _0x3d27f9 = _0x3d27f9.replaceAll('[answer]', '<div class="answer"><p>')
      _0x3d27f9 = _0x3d27f9.replaceAll('[/answer]', '</p></div>')
      $('.faq-grid', this).html(_0x3d27f9)
      $('form', this).on('submit', function (_0xd584e2) {
        _0xd584e2.preventDefault()
        if (!confirm('Kirim via WhatsApp?')) {
          return false
        } else {
          var _0xf72fef = $_config.cta.whatsapp
              .replaceAll('+', '')
              .replaceAll(' ', '')
              .replaceAll('-', ''),
            _0x11ecab = $('[name=text]', this).val()
          window.open(
            'https://api.whatsapp.com/send?phone=' +
              _0xf72fef +
              '&text=' +
              encodeURIComponent(_0x11ecab) +
              '%0A%0Avia. ' +
              $_config.url.canonical
          )
        }
      })
    })
    $('.LinkList').on('click', 'li.dropdown', function () {
      $(this).find('ul:first').toggle()
      $(this).toggleClass('active')
    })
    $('[data-feed]').length &&
      $('[data-feed]').each(function () {
        var _0x3d9806 = $(this),
          _0x4bd839 = $(this).attr('data-feed')
        _0x3d9806.addClass('loading')
        _0x3d9806.load(_0x4bd839 + ' .is_loop', function () {
          var _0x14723c = $(this).html()
          _0x3d9806.html(_0x14723c)
          var _0x5209da = _0x3d9806.attr('data-hide-id')
          _0x5209da &&
            (_0x3d9806.find('article#' + _0x5209da).length
              ? _0x3d9806.find('article#' + _0x5209da).remove()
              : _0x3d9806.find('article:last-of-type').remove())
          post_convert()
          lazyload()
          timeago()
          _0x3d9806.removeClass('loading')
        })
      })
    $('#pop-share .copy button').on('click', function (_0x342847) {
      var _0x4fb24a = $(this)
      _0x4fb24a.siblings('input').select()
      document.execCommand('copy')
      _0x4fb24a.text('Disalin!')
      setTimeout(function () {
        _0x4fb24a.text('Salin')
      }, 2000)
    })
    if (window.location.hash) {
      if ($(window.location.hash).length) {
        var _0x5d3606 = $('#header').outerHeight(),
          _0x2c8acb = $('.is_single article .attr-sticky').outerHeight()
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop:
                $(window.location.hash).offset().top - _0x5d3606 - _0x2c8acb - 20,
            },
            500
          )
        $(window.location.hash).addClass('focus')
        setTimeout(function () {
          $(window.location.hash).removeClass('focus')
        }, 2000)
      }
    }
    $(document).on('click', 'a[href*="#"]', function (_0x5b4bec) {
      var _0x2ecb34 = '#' + $(this).attr('href').split('#')[1]
      if ($(_0x2ecb34).length && $(this).attr('href').split('#')[0] === '') {
        _0x5b4bec.preventDefault()
        var _0x15af35 = $('#header').outerHeight(),
          _0x175c27 = $('.is_single article .attr-sticky').outerHeight()
        _0x175c27
          ? $('html, body')
              .stop()
              .animate(
                {
                  scrollTop:
                    $(_0x2ecb34).offset().top - _0x15af35 - _0x175c27 - 20,
                },
                500
              )
          : $('html, body')
              .stop()
              .animate(
                { scrollTop: $(_0x2ecb34).offset().top - _0x15af35 - 20 },
                500
              )
        $(_0x2ecb34).addClass('focus')
        setTimeout(function () {
          $(_0x2ecb34).removeClass('focus')
        }, 2000)
      }
    })
    $(document).on('click', '.loadmore-btn', function (_0x368949) {
      _0x368949.preventDefault()
      let _0x5af14a = $(this).attr('href'),
        _0x5ded8b = $('#blog-pager .loadmore-btn'),
        _0x55a0e6 = $('#blog-pager .loadmore-btn').text()
      _0x5af14a &&
        $.ajax({
          url: _0x5af14a,
          beforeSend: function () {
            _0x5ded8b.addClass('loading')
          },
          complete: function () {
            _0x5ded8b.removeClass('loading')
          },
          success: function (_0x3e9ba6) {
            let _0x41fdbe = $(_0x3e9ba6).find('.Blog .is_loop').html(),
              _0x284923 = $(_0x3e9ba6).find('.loadmore-btn').attr('href')
            $('.Blog .is_loop').append(_0x41fdbe)
            _0x5ded8b.show()
            post_convert()
            post_sort()
            lazyload()
            timeago()
            _0x284923 ? _0x5ded8b.attr('href', _0x284923) : _0x5ded8b.fadeOut()
          },
        })
    })
    if ($_config.url.view == 'single') {
      var _0x11ba1b = $('a.blog-pager-older-link').text(),
        _0x55136d = $('a.blog-pager-older-link').attr('href')
      $('a.blog-pager-older-link').load(_0x55136d + ' article h1', function () {
        var _0x37fba1 = $('a.blog-pager-older-link').text()
        $('a.blog-pager-older-link').html(
          '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
            _0x11ba1b +
            '</b></small><h3>' +
            _0x37fba1 +
            '</h3></div></div>'
        )
        $('a.blog-pager-older-link > figure').load(
          _0x55136d + ' article .post-body img:first-of-type',
          function () {
            var _0x1ceab7 = $(this).html(),
              _0x2d6620 = _0x1ceab7.split('src="')[1],
              _0x579299 = _0x2d6620.split('"')[0],
              _0x4b5168 = _0x579299.split('=')[0],
              _0x3d866e = _0x4b5168.split('/')[7]
            _0x4b5168 =
              _0x4b5168.replace(_0x3d866e, 'w100-h100-c') + '=w100-h100-c'
            $('a.blog-pager-older-link > figure')
              .html('<img src="' + _0x4b5168 + '"/>')
              .removeClass('loading')
          }
        )
      })
      var _0x1fb415 = $('a.blog-pager-newer-link').text(),
        _0xeef41 = $('a.blog-pager-newer-link').attr('href')
      $('a.blog-pager-newer-link').load(_0xeef41 + ' article h1', function () {
        var _0x115f74 = $('a.blog-pager-newer-link').text()
        $('a.blog-pager-newer-link').html(
          '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
            _0x1fb415 +
            '</b></small><h3>' +
            _0x115f74 +
            '</h3></div></div>'
        )
        $('a.blog-pager-newer-link > figure').load(
          _0xeef41 + ' article .post-body img:first-of-type',
          function () {
            var _0x5dfc52 = $(this).html(),
              _0x538b1d = _0x5dfc52.split('src="')[1],
              _0x603936 = _0x538b1d.split('"')[0],
              _0x2a722c = _0x603936.split('=')[0],
              _0x9c5e8e = _0x2a722c.split('/')[7]
            _0x2a722c =
              _0x2a722c.replace(_0x9c5e8e, 'w100-h100-c') + '=w100-h100-c'
            $('a.blog-pager-newer-link > figure')
              .html('<img src="' + _0x2a722c + '"/>')
              .removeClass('loading')
          }
        )
      })
    }
  }
  function slideshow() {
    $('.slideshow').each(function () {
      var _0xf3468b = $(this),
        _0x139669 = 4000,
        _0x448a28 = parseInt(_0xf3468b.attr('data-delay')),
        _0x2f74f3 = 1000,
        _0x567038 = parseInt(_0xf3468b.attr('data-fade')),
        _0x2bfb53
      _0x448a28.length && (_0x139669 = _0x448a28)
      _0x567038.length && (_0x2f74f3 = _0x567038)
      $('.slideshow-item, .widget', _0xf3468b).length > 1 &&
        ((_0x2bfb53 = setInterval(function () {
          $('.slideshow-item:visible, .widget:visible', _0xf3468b).each(
            function () {
              var _0x3d6486 = $(this)
              _0x3d6486.hide()
              _0x3d6486.next('.slideshow-item, .widget').length
                ? _0x3d6486.next('.slideshow-item, .widget').fadeIn(_0x2f74f3)
                : _0x3d6486
                    .closest('.slideshow')
                    .find('.slideshow-item, .widget')
                    .first()
                    .fadeIn(_0x2f74f3)
            }
          )
        }, _0x139669)),
        $(this).append(
          '  <button class="nav-left">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   '
        ))
      $('.nav-left', _0xf3468b).on('click', function () {
        clearInterval(_0x2bfb53)
        $('.slideshow-item:visible, .widget:visible', _0xf3468b).each(
          function () {
            var _0x3dfd9b = $(this)
            _0x3dfd9b.hide()
            _0x3dfd9b.prev('.slideshow-item, .widget').length
              ? _0x3dfd9b.prev('.slideshow-item, .widget').fadeIn(_0x2f74f3)
              : _0x3dfd9b
                  .closest('.slideshow')
                  .find('.slideshow-item, .widget')
                  .last()
                  .fadeIn(_0x2f74f3)
          }
        )
      })
      $('.nav-right', _0xf3468b).on('click', function () {
        clearInterval(_0x2bfb53)
        $('.slideshow-item:visible, .widget:visible', _0xf3468b).each(
          function () {
            var _0x503500 = $(this)
            _0x503500.hide()
            _0x503500.next('.slideshow-item, .widget').length
              ? _0x503500.next('.slideshow-item, .widget').fadeIn(_0x2f74f3)
              : _0x503500
                  .closest('.slideshow')
                  .find('.slideshow-item, .widget')
                  .first()
                  .fadeIn(_0x2f74f3)
          }
        )
      })
    })
  }
  function darkmode() {
    localStorage.getItem('darkmode') == 1 && $('a[href="#darkmode"] i').toggle()
    $('a[href="#darkmode"]').on('click', function (_0x4f932a) {
      _0x4f932a.preventDefault()
      $('html').toggleClass('dark')
      $('i', this).toggle()
      localStorage.getItem('darkmode') == 1
        ? localStorage.setItem('darkmode', 0)
        : localStorage.setItem('darkmode', 1)
      darkmode_head()
    })
  }
  function post_sort() {
    $('#sort select').on('change', function () {
      $('#sort').addClass('loading')
      if ($(this).val() == 'terbaru') {
        var _0x3cd21b = $('.Blog article')
        _0x3cd21b.sort(function (_0x121066, _0x2c1c5c) {
          return (
            new Date(
              $('[itemprop="releaseDate"]', _0x2c1c5c).attr('content')
            ).getTime() -
            new Date(
              $('[itemprop="releaseDate"]', _0x121066).attr('content')
            ).getTime()
          )
        })
        setTimeout(function () {
          $('.Blog .is_loop').append(_0x3cd21b)
          $('#sort').removeClass('loading')
          lazyload()
        }, 500)
      }
      if ($(this).val() == 'terlama') {
        var _0x3cd21b = $('.Blog article')
        _0x3cd21b.sort(function (_0x5dc1ee, _0x140806) {
          return (
            new Date(
              $('[itemprop="releaseDate"]', _0x5dc1ee).attr('content')
            ).getTime() -
            new Date(
              $('[itemprop="releaseDate"]', _0x140806).attr('content')
            ).getTime()
          )
        })
        setTimeout(function () {
          $('.Blog .is_loop').append(_0x3cd21b)
          $('#sort').removeClass('loading')
          lazyload()
        }, 500)
      }
      if ($(this).val() == 'terendah') {
        var _0x3cd21b = $('.Blog article')
        _0x3cd21b.sort(function (_0x464a81, _0x32d5ed) {
          return (
            $('.harga [data-harga]', _0x464a81).attr('data-harga') -
            $('.harga [data-harga]', _0x32d5ed).attr('data-harga')
          )
        })
        setTimeout(function () {
          $('.Blog .is_loop').append(_0x3cd21b)
          $('#sort').removeClass('loading')
          lazyload()
        }, 500)
      }
      if ($(this).val() == 'tertinggi') {
        var _0x3cd21b = $('.Blog article')
        _0x3cd21b.sort(function (_0x2b82e1, _0x4cfed8) {
          return (
            $('.harga [data-harga]', _0x4cfed8).attr('data-harga') -
            $('.harga [data-harga]', _0x2b82e1).attr('data-harga')
          )
        })
        setTimeout(function () {
          $('.Blog .is_loop').append(_0x3cd21b)
          $('#sort').removeClass('loading')
          lazyload()
        }, 500)
      }
    })
    $('#sort select').val() != 'terbaru' && $('#sort select').trigger('change')
  }
  function post_convert() {
    $('article:not(.field_loaded)').each(function () {
      var _0x3933db = $(this)
      if ($('.field', _0x3933db).length) {
        _0x3933db.addClass('field_loaded')
        _0x3933db.hasClass('is_post') &&
          $('.field .gallery', this).length &&
          ($('.field .gallery img', this).each(function (_0x332e30) {
            if (_0x332e30 > 0) {
              var _0x57b190 = $(this).attr('src'),
                _0x59d7e2 = _0x57b190,
                _0x264a7e = _0x57b190
              if (_0x57b190.indexOf('blogger.googleusercontent.com') >= 0) {
                if (_0x57b190.indexOf('=') >= 0) {
                  _0x59d7e2 = _0x57b190.split('=')[0] + '=w1000'
                  _0x264a7e = _0x57b190.split('=')[0] + '=w150-h150-c'
                } else {
                  var _0xba12d = _0x57b190.split('/')[7]
                  _0x59d7e2 = _0x57b190.replace(_0xba12d, 'w1000')
                  _0x264a7e = _0x57b190.replace(_0xba12d, 'w150-h150-c')
                }
              } else {
                var _0xba12d = _0x57b190.split('/')[7]
                _0x59d7e2 = _0x57b190
                  .replace('1.bp.', '2.bp.')
                  .replace(_0xba12d, 'w1000')
                _0x264a7e = _0x57b190
                  .replace('1.bp.', '2.bp.')
                  .replace(_0xba12d, 'w150-h150-c')
              }
              $('figure.cover', _0x3933db).append(
                '<a href="' +
                  _0x59d7e2 +
                  '" title="' +
                  $_config.page.name +
                  ' ( \xA9 ' +
                  $_config.page.title +
                  ' )"><img data-src="' +
                  _0x264a7e +
                  '" alt="' +
                  $_config.page.name +
                  ' ( \xA9 ' +
                  $_config.page.title +
                  ' )"/></a>'
              )
            }
          }),
          $('figure.cover a', _0x3933db).attr('data-lightbox', 'gallery'),
          $('figure.cover a', _0x3933db).attr(
            'data-lightbox-title',
            $_config.page.name +
              '<br/><small style="opacity:.5;">\xA9 ' +
              $_config.page.title +
              '</small>'
          ))
        var _0x4fa2ac = ''
        $('.field .normal_price td:last-of-type', _0x3933db).length &&
          (_0x4fa2ac = $('.field .normal_price td:last-of-type', _0x3933db)
            .text()
            .replaceAll(' ', '')
            // .replaceAll('.', '')
            // .replaceAll(',', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        var _0x13a329 = ''
        $('.field .discount_price td:last-of-type', _0x3933db).length &&
          (_0x13a329 = $('.field .discount_price td:last-of-type', _0x3933db)
            .text()
            .replaceAll(' ', '')
            // .replaceAll('.', '')
            // .replaceAll(',', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        var _0x58f3d4 = ''
        $('.field .attr_price td:last-of-type', _0x3933db).length &&
          (_0x58f3d4 = $('.field .attr_price td:last-of-type', _0x3933db)
            .text()
            .replaceAll('  ', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        var _0x12b870 = ''
        if (_0x4fa2ac) {
          _0x12b870 += '<div class="harga"><span class="wrap">'
          if (_0x13a329) {
            var _0x294178 = ''
            _0x13a329.includes('%')
              ? ((_0x294178 = _0x13a329.replaceAll('%', '')),
                (_0x13a329 = Number(_0x4fa2ac - (_0x4fa2ac * _0x294178) / 100)))
              : (_0x294178 = Math.round(100 - (_0x13a329 / _0x4fa2ac) * 100))
            _0x12b870 +=
              '                        <small class="persen">-' +
              _0x294178 +
              '%</small>                        <s>' +
              format_price(
                _0x4fa2ac,
                $_config.local.country_id,
                $_config.local.currency
              ) +
              '</s>                        <b data-harga="' +
              _0x13a329 +
              '">' +
              format_price(
                _0x13a329,
                $_config.local.country_id,
                $_config.local.currency
              ) +
              '</b>                        ' +
              (_0x58f3d4 ? '<small>' + _0x58f3d4 + '</small>' : '') +
              '                    '
            $('[itemprop="price"]', this).attr('content', _0x13a329)
          } else {
            _0x12b870 +=
              '                        <b data-harga="' +
              _0x4fa2ac +
              '">' +
              format_price(
                _0x4fa2ac,
                $_config.local.country_id,
                $_config.local.currency
              ) +
              '</b>                        ' +
              (_0x58f3d4 ? '<small>' + _0x58f3d4 + '</small>' : '') +
              '                    '
            $('[itemprop="price"]', this).attr('content', _0x4fa2ac)
          }
          _0x12b870 += '</span></div>'
        }
        _0x3933db.hasClass('is_post') &&
          (($admin = encodeURIComponent(
            $('[itemprop="author"] b', this).text()
          ).replaceAll('%0A', '')),
          (_0x4d3f4a = encodeURIComponent($('h1.title', this).text()).replaceAll(
            '%0A',
            ''
          )),
          (_0x12b870 +=
            '                    <div class="cta">                        <a class="link" href="https://api.whatsapp.com/send?phone=' +
            $_config.cta.whatsapp
              .replaceAll('+', '')
              .replaceAll(' ', '')
              .replaceAll('-', '') +
            '&text=' +
            $_config.cta.order_text
              .replaceAll('[admin]', $admin)
              .replaceAll('[title]', _0x4d3f4a) +
            '%0A%0Avia. ' +
            $_config.url.canonical +
            '" target="_popwin">                            <i class="icon left">                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg>                            </i>                             ' +
            $_config.cta.order_button_text +
            '                        </a>                        <a class="share" target="pop-share">                            <i class="icon">                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg>                            </i>                        </a>                    </div>                '))
        var _0x52e369 = ''
        $('.field .qty_bedroom td:last-of-type', _0x3933db).length &&
          (_0x52e369 = $('.field .qty_bedroom td:last-of-type', _0x3933db)
            .text()
            .replaceAll('  ', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        var _0x27409f = ''
        $('.field .qty_bathroom td:last-of-type', _0x3933db).length &&
          (_0x27409f = $('.field .qty_bathroom td:last-of-type', _0x3933db)
            .text()
            .replaceAll('  ', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        var sqft = ''
        $('.field .qty_sqft td:last-of-type', _0x3933db).length &&
          (sqft = $('.field .qty_sqft td:last-of-type', _0x3933db)
            .text()
            .replaceAll('  ', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        var _0x332747 = ''
        $('.field .qty_floor td:last-of-type', _0x3933db).length &&
          (_0x332747 = $('.field .qty_floor td:last-of-type', _0x3933db)
            .text()
            .replaceAll('  ', '')
            .replaceAll(/(?:\r\n|\r|\n)/g, ''))
        _0x52e369 &&
          _0x27409f &&
          sqft &&
          _0x332747 &&
          (_0x12b870 +=
            '                    <div class="grid-info">                        <div class="item">                            <i class="icon">                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><g><path d="M54,27.102V20c0-4.963-4.041-9-9.007-9H13.007C8.04,11,4,15.037,4,20v7.102c-2.28,0.467-4,2.49-4,4.908V38 c0,0.553,0.448,1,1,1h1v2v6h2v-5h50v5h2v-6v-2h1c0.552,0,1-0.447,1-1v-5.99C58,29.592,56.28,27.569,54,27.102z M6,20 c0-3.859,3.144-7,7.007-7h31.985C48.856,13,52,16.141,52,20v7h-5v-6c0-0.409-0.249-0.776-0.628-0.929 C46.16,19.987,41.162,18,38.5,18s-7.66,1.987-7.872,2.071C30.249,20.224,30,20.591,30,21v6h-2v-6c0-0.409-0.249-0.776-0.628-0.929 C27.16,19.987,22.162,18,19.5,18s-7.66,1.987-7.872,2.071C11.249,20.224,11,20.591,11,21v6H6V20z M45,27H32v-5.314 C33.674,21.06,36.849,20,38.5,20c1.649,0,4.825,1.06,6.5,1.687V27z M26,27H13v-5.314C14.674,21.06,17.849,20,19.5,20 c1.649,0,4.825,1.06,6.5,1.687V27z M54,40H4v-1h50V40z M56,37h-1H3H2v-4.99C2,30.351,3.348,29,5.005,29H12h15h4h15h6.995 C54.652,29,56,30.351,56,32.01V37z"/></g></svg>                            </i>                            <b>' +
            _0x52e369 +
            '</b>                            <small>' +
            ($_config.language == 'in' ? 'Bedroom' : 'Bedroom') +
            '</small>                        </div>                        <div class="item">                            <i class="icon">                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 211.667 211.667" style="enable-background:new 0 0 211.667 211.667;" xml:space="preserve"><path d="M211.667,98.551c0,2.209-1.791,4-4,4H201v26.448c0,13.403-7.085,25.178-17.702,31.792l7.999,14.878 c1.046,1.946,0.317,4.371-1.629,5.418c-0.603,0.323-1.251,0.478-1.891,0.478c-1.425,0-2.804-0.764-3.526-2.106l-8.164-15.186 c-3.918,1.395-8.131,2.161-12.522,2.161H48.102c-3.755,0-7.38-0.562-10.802-1.595l-7.86,14.62c-0.722,1.343-2.102,2.106-3.526,2.106 c-0.64,0-1.288-0.154-1.891-0.478c-1.946-1.047-2.675-3.472-1.629-5.418l7.512-13.972c-11.465-6.406-19.239-18.659-19.239-32.699 v-26.448H4c-2.209,0-4-1.791-4-4s1.791-4,4-4h10.667H197h10.667C209.876,94.551,211.667,96.342,211.667,98.551z M4,60.814h43.083 c3.584,0,6.5,2.916,6.5,6.5v8.5c0,2.209,1.791,4,4,4s4-1.791,4-4v-8.5c0-7.995-6.505-14.5-14.5-14.5H4c-2.209,0-4,1.791-4,4 S1.791,60.814,4,60.814z M9.25,48.602h6.833c2.209,0,4-1.791,4-4v-10.5c0-2.209-1.791-4-4-4H9.25c-5.101,0-9.25,4.149-9.25,9.25 S4.149,48.602,9.25,48.602z"/></svg>                            </i>                            <b>' +
            _0x27409f +
            '</b>                            <small>' +
            ($_config.language == 'in' ? 'Bathroom' : 'Bathroom') +
            '</small>                        </div>                        <div class="item">                            <i class="icon">                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="89.534px" height="89.535px" viewBox="0 0 89.534 89.535" style="enable-background:new 0 0 89.534 89.535;" xml:space="preserve"> <g> <path d="M12.241,88.083v-7.84h65.053v7.84c0,0.762,0.616,1.377,1.377,1.377s1.377-0.615,1.377-1.377v-8.107h8.109 c0.761,0,1.377-0.617,1.377-1.377c0-0.761-0.616-1.377-1.377-1.377h-8.109V12.313h8.109c0.761,0,1.377-0.617,1.377-1.377 c0-0.762-0.616-1.377-1.377-1.377h-8.109V1.451c0-0.761-0.616-1.377-1.377-1.377s-1.377,0.616-1.377,1.377V9.56H12.241V1.451 c0-0.761-0.616-1.377-1.377-1.377c-0.761,0-1.377,0.616-1.377,1.377V9.56h-8.11C0.616,9.56,0,10.175,0,10.937 c0,0.76,0.616,1.377,1.377,1.377h7.985v64.909H1.377C0.616,77.222,0,77.837,0,78.599c0,0.76,0.616,1.377,1.377,1.377h8.109v8.106 c0,0.761,0.616,1.377,1.377,1.377C11.624,89.459,12.241,88.845,12.241,88.083z M12.179,33.272V12.313h21.113v20.959H12.179z M34.21,33.272V12.313h21.052v20.959H34.21z M56.242,33.272V12.313h21.052v20.959H56.242z M12.179,55.306V34.19h21.113v21.114 H12.179V55.306z M34.211,55.306V34.191h21.053v21.115H34.211L34.211,55.306z M56.242,55.306V34.191h21.052v21.115H56.242 L56.242,55.306z M12.179,77.336V56.224h21.114v21.112H12.179z M34.211,77.336V56.224h21.053v21.112H34.211z M56.242,77.336V56.224 h21.052v21.112H56.242z M58.102,75.625V58.292h17.332v17.332H58.102z"/> </g> </svg>                            </i>                            <b>' +
            sqft +
            '</b>                            <small>' +
            ($_config.language == 'in' ? 'Square Feet' : 'Square Feet') +
            '</small>                        </div>                        <div class="item">                            <i class="icon">                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"/><path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"/></svg>                            </i>                            <b>' +
            _0x332747 +
            '</b>                            <small>' +
            ($_config.language == 'in' ? 'Floor' : 'Floor') +
            '</small>                        </div>                    </div>                ')
        var _0x4d3f4a = $('.title', this)
        $(_0x12b870).insertAfter(_0x4d3f4a)
        if ($('.field.facility', _0x3933db).length) {
          var _0x5aeef3 = '<table class="facility">'
          $('.field.facility tr', _0x3933db).each(function () {
            var _0x2d4276 = $(this),
              _0x4ef6bb = $('td:first-of-type', _0x2d4276)
                .text()
                .replaceAll('  ', '')
                .replaceAll(/(?:\r\n|\r|\n)/g, ''),
              _0x266c7a = $('td:last-of-type', _0x2d4276)
                .text()
                .replaceAll('  ', '')
                .replaceAll(/(?:\r\n|\r|\n)/g, '')
            _0x266c7a != '' &&
              (_0x5aeef3 +=
                '<tr><td>' + _0x4ef6bb + '</td><td>' + _0x266c7a + '</td></tr>')
          })
          _0x5aeef3 += '</table>'
          $('.post-body', _0x3933db).append(_0x5aeef3)
        }
        $('#pop-booking form#whatsapp button').on('click', function () {
          $('#pop-booking form#whatsapp button').removeClass('selected')
          $(this).addClass('selected')
        })
      }
    })
  }
  function popwin() {
    $(document).on('click', '[target="_popwin"]', function (_0x34a1b1) {
      _0x34a1b1.stopPropagation()
      _0x34a1b1.preventDefault()
      var _0x3070a3 = $(this).attr('href'),
        _0x391777 = $(this).attr('data-popwin-width'),
        _0x655124 = $(this).attr('data-popwin-height'),
        _0x22c568 = 960
      _0x391777 && (_0x22c568 = _0x391777)
      var _0x422d08 = 540
      _0x655124 && (_0x422d08 = _0x655124)
      var _0xcfff94 = Number(screen.width / 2 - _0x22c568 / 2),
        _0x5d9192 = Number(screen.height / 2 - _0x422d08 / 2),
        _0x368ed9 = window.open(
          _0x3070a3,
          '',
          'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
            _0x22c568 +
            ', height=' +
            _0x422d08 +
            ', top=' +
            _0x5d9192 +
            ', left=' +
            _0xcfff94
        )
      _0x368ed9.focus()
    })
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
      var _0x13a6ab = $(this).attr('data-shortcode')
      if (_0x13a6ab == 'img') {
        var _0x214eae = $(this).attr('src')
        $(this).wrap('<a data-lightbox="lightbox" href="' + _0x214eae + '"></a>')
      }
      if (_0x13a6ab == 'youtube') {
        var _0xd29256 = $(this).attr('data-src'),
          _0x5ecf1d = _0xd29256.split('/')[3]
        _0xd29256.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
          (_0x5ecf1d = get_url_parameter('v', _0xd29256))
        $(this).attr(
          'data-src',
          'https://www.youtube.com/embed/' + _0x5ecf1d + '?rel=0'
        )
      }
    })
  }
  function timeago() {
    $('[datetime]:not(.timeago)').each(function () {
      var _0x2341c5 = $(this),
        _0x2a92be = _0x2341c5.attr('datetime')
      _0x2341c5.addClass('timeago')
      !_0x2341c5.attr('title') && _0x2341c5.attr('title', _0x2a92be)
      _0x2341c5.text(_0x58dd34(_0x2a92be))
    })
    function _0x58dd34(_0x2548ce) {
      var _0x177739 = 'ago',
        _0x41fbc1 = 'seconds',
        _0x556b1f = 'minutes',
        _0x267352 = 'hours',
        _0x353482 = 'days',
        _0x29377a = 'months',
        _0x577447 = 'years'
      $_config.local.country_id == 'id-ID' &&
        ((_0x177739 = 'ago'),
        (_0x41fbc1 = 'seconds'),
        (_0x556b1f = 'minutes'),
        (_0x267352 = 'hours'),
        (_0x353482 = 'days'),
        (_0x29377a = 'months'),
        (_0x577447 = 'years'))
      var _0x4c73f1 = new Date(_0x2548ce),
        _0xa37f01 = 86400000,
        _0x27b557 = 30 * _0xa37f01,
        _0x4e8f59 = 365 * _0xa37f01,
        _0x4979ed = _0x177739,
        _0x51b930 = new Date() - _0x4c73f1
      return _0x51b930 < 60000
        ? Math.round(_0x51b930 / 1000) + ' ' + _0x41fbc1 + ' ' + _0x4979ed
        : _0x51b930 < 3600000
        ? Math.round(_0x51b930 / 60000) + ' ' + _0x556b1f + ' ' + _0x4979ed
        : _0x51b930 < _0xa37f01
        ? Math.round(_0x51b930 / 3600000) + ' ' + _0x267352 + ' ' + _0x4979ed
        : _0x51b930 < _0x27b557
        ? Math.round(_0x51b930 / _0xa37f01) + ' ' + _0x353482 + ' ' + _0x4979ed
        : _0x51b930 < _0x4e8f59
        ? Math.round(_0x51b930 / _0x27b557) + ' ' + _0x29377a + ' ' + _0x4979ed
        : Math.round(_0x51b930 / _0x4e8f59) + ' ' + _0x577447 + ' ' + _0x4979ed
    }
    $('#comments .datetime a:not(.timeago)').each(function () {
      var _0x477e1c = $(this),
        _0x252b88 = _0x477e1c.text()
      _0x477e1c.attr('datetime', _0x252b88)
      var _0x39514a = _0x477e1c.attr('datetime')
      _0x477e1c.addClass('timeago')
      _0x477e1c.attr('title', _0x39514a)
      _0x477e1c.text(_0x58dd34(_0x39514a))
    })
  }
  function format_price(_0x175151, _0x9afd6c, _0x114967) {
    return new Intl.NumberFormat(_0x9afd6c, {
      style: 'currency',
      currency: _0x114967,
      maximumSignificantDigits: 3,
    }).format(_0x175151)
  }
  function separator(_0x53d2d7, _0x258d3a = '') {
    var _0x2d17a1 = '',
      _0x49aec1 = _0x53d2d7.toString().split('').reverse().join('')
    for (var _0x3ab930 = 0; _0x3ab930 < _0x49aec1.length; _0x3ab930++) {
      if (_0x3ab930 % 3 == 0) {
        _0x2d17a1 += _0x49aec1.substr(_0x3ab930, 3) + '.'
      }
    }
    return _0x258d3a
      ? _0x258d3a +
          ' ' +
          _0x2d17a1
            .split('', _0x2d17a1.length - 1)
            .reverse()
            .join('')
      : _0x2d17a1
          .split('', _0x2d17a1.length - 1)
          .reverse()
          .join('')
  }
  function pop() {
    $('[target=pop-video]').length &&
      (($pop_video_html =
        ' <div id="pop-video" data-pop-title="Video" data-pop-width="960">   <div class="video">  <iframe allowfullscreen="true"></iframe>   </div> </div> '),
      $($pop_video_html).appendTo('body'))
    $('[id*="pop-"]:not(".pop-loaded")').each(function () {
      var _0x170f4e = $(this),
        _0x568c13 = _0x170f4e.attr('id'),
        _0x410fbc = _0x170f4e.attr('data-pop-title'),
        _0x4dc74e = _0x170f4e.attr('data-pop-width'),
        _0x548181 = _0x170f4e.attr('data-pop-height')
      _0x170f4e.wrap('<div class="pop"></div>')
      _0x170f4e.wrap('<div class="pop-wrap"></div>')
      _0x170f4e.addClass('pop-content pop-loaded')
      var _0x264c0f =
        '   <header class="pop-header">  <div class="pop-title">    <h3>   ' +
        _0x410fbc +
        '    </h3>  </div>  <div class="pop-close">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>  </div>   </header> '
      _0x170f4e.closest('.pop-wrap').prepend(_0x264c0f)
      _0x4dc74e && _0x170f4e.closest('.pop-wrap').css('width', _0x4dc74e)
    })
    $('.pop-close').on('click', function () {
      $(this).closest('.pop').removeClass('open')
      $('body').removeClass('pop-open')
      $('[id=pop-video] iframe').length &&
        $('[id=pop-video] iframe').attr('src', '')
    })
    $(document).on('click', '[target*="pop-"]', function (_0x2275a5) {
      _0x2275a5.preventDefault()
      var _0x183f62 = $(this),
        _0x54da4d = _0x183f62.attr('target'),
        _0x41b455 = _0x183f62.attr('data-pop-title')
          ? _0x183f62.attr('data-pop-title')
          : $('#' + _0x54da4d).attr('data-pop-title'),
        _0x4d108b = _0x183f62.attr('data-pop-width'),
        _0x1e2e5e = _0x183f62.attr('data-pop-height')
      _0x183f62.closest('.pop').removeClass('open')
      $('body').removeClass('pop-open')
      $('#' + _0x54da4d).length &&
        ($('body').addClass('pop-open'),
        $('#' + _0x54da4d)
          .closest('.pop')
          .addClass('open'),
        _0x183f62.closest('.pop-content').length &&
          (($back_id = _0x183f62.closest('.pop-content').attr('id')),
          (_0x41b455 =
            '<a target="' +
            $back_id +
            '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
            _0x41b455)),
        _0x41b455 &&
          $('#' + _0x54da4d)
            .closest('.pop')
            .find('.pop-title h3')
            .html(_0x41b455),
        $('[data-src]').each(function () {
          var _0x5296ac = $(this).attr('data-src')
          $(this).attr('src', _0x5296ac).removeAttr('data-src')
        }))
      if (_0x54da4d == 'pop-video') {
        $href = $(this).attr('href')
        var _0x5b734c = $href.split('/')[3]
        $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
          (_0x5b734c = get_url_parameter('v', $href))
        $('[id=pop-video] iframe').attr(
          'src',
          'https://www.youtube.com/embed/' + _0x5b734c + '?autoplay=1&showinfo=0'
        )
      }
    })
    $(document).on('click', '.pop.open', function () {
      $(this).find('.pop-close').trigger('click')
    })
    $(document).on('click', '.pop-wrap', function (_0x1c9098) {
      _0x1c9098.stopPropagation()
    })
  }
  function lazyload() {
    $('[data-bg]').each(function () {
      var _0x433017 = $(this),
        _0x2717ce = _0x433017.attr('data-bg')
      _0x433017
        .css('background-image', 'url(' + _0x2717ce + ')')
        .removeAttr('data-bg')
    })
    $('[data-src]:not([lazy="true"])').each(function () {
      var _0x1ce81a = $(this),
        _0x2b03cf = $(window).height(),
        _0x44ab02 = $(window).scrollTop(),
        _0x47931e = _0x44ab02 + _0x2b03cf,
        _0x114e88 = _0x1ce81a.offset().top
      _0x1ce81a.attr('data-offset-top', _0x114e88)
      var _0x50ba23 = _0x1ce81a.attr('data-src')
      _0x50ba23 = _0x50ba23.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x50ba23 = _0x50ba23.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x50ba23 = _0x50ba23.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x50ba23 = _0x50ba23.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var _0x4b1923 = _0x1ce81a.prop('tagName').toLowerCase()
      if (_0x114e88 <= _0x47931e) {
        if (_0x4b1923 == 'img') {
          _0x1ce81a.attr('src', _0x50ba23).removeAttr('data-src')
          _0x1ce81a.attr('lazy', 'true')
        } else {
          _0x4b1923 == 'iframe' &&
            (_0x1ce81a.attr('src', _0x50ba23).removeAttr('data-src'),
            _0x1ce81a.attr('lazy', 'true'))
        }
      }
    })
    $(window).on('scroll', function () {
      var _0x2d4ac8 = $(window).height(),
        _0x504df8 = $(window).scrollTop(),
        _0x118933 = _0x504df8 + _0x2d4ac8
      $('[data-src]:not([lazy="true"])').each(function () {
        var _0x19204e = $(this),
          _0x4f2a35 = $(window).height(),
          _0x1ef311 = _0x19204e.offset().top,
          _0x58c66d = _0x19204e.attr('data-src')
        _0x58c66d = _0x58c66d.replace(
          '1.bp.blogspot.com',
          'lh3.googleusercontent.com'
        )
        _0x58c66d = _0x58c66d.replace(
          '2.bp.blogspot.com',
          'lh3.googleusercontent.com'
        )
        _0x58c66d = _0x58c66d.replace(
          '3.bp.blogspot.com',
          'lh3.googleusercontent.com'
        )
        _0x58c66d = _0x58c66d.replace(
          '4.bp.blogspot.com',
          'lh3.googleusercontent.com'
        )
        var _0x3263a1 = _0x19204e.prop('tagName').toLowerCase()
        if (_0x1ef311 <= _0x118933) {
          if (_0x3263a1 == 'img') {
            _0x19204e.attr('src', _0x58c66d).removeAttr('data-src')
            _0x19204e.attr('lazy', 'true')
          } else {
            _0x3263a1 == 'iframe' &&
              (_0x19204e.attr('src', _0x58c66d).removeAttr('data-src'),
              _0x19204e.attr('lazy', 'true'))
          }
        }
      })
    })
  }
  function lightbox() {
    var _0x576410 =
      '        <div id="lightbox">            <div class="lb-wrap">                <figure>                    <div class="lb-img">                        <div class="lb-count"></div>                    </div>                    <nav class="lb-nav">                        <div class="lb-np lb-prev"></div>                        <div class="lb-close"></div>                        <div class="lb-np lb-next"></div>                    </nav>                </figure>            </div>        </div>    '
    $(_0x576410).appendTo('body')
    $('[data-lightbox]').each(function () {
      var _0xed0425 = $(this).attr('data-lightbox'),
        _0x13b4e0 = $('[data-lightbox=' + _0xed0425 + ']').length
      _0x13b4e0 > 1 &&
        $('[data-lightbox=' + _0xed0425 + ']').each(function (_0x314278) {
          $(this).attr('data-lightbox-index', _0x314278 + 1 + ' / ' + _0x13b4e0)
        })
      $(this).on('mousedown', function () {
        return false
      })
      $(this).on('contextmenu', function () {
        return alert('\xA9 ' + location.hostname), false
      })
    })
    $(document).on('click', '[data-lightbox]', function (_0x208deb) {
      _0x208deb.preventDefault()
      var _0x2426f4 = $(this),
        _0x413074 = _0x2426f4.attr('data-lightbox'),
        _0x512eb4 = _0x2426f4.attr('data-lightbox-index'),
        _0x33fce8 = _0x2426f4.attr('data-lightbox-title'),
        _0xe327af = _0x2426f4.attr('data-lightbox-desc'),
        _0xdbd963 = _0x2426f4.attr('href')
      $('#lightbox').scrollTop(0)
      $('#lightbox .lb-close').hide()
      $('#lightbox .lb-wrap figure .lb-img img').remove()
      $('#lightbox .lb-count').hide()
      $('#lightbox .lb-wrap figure figcaption').remove()
      $('#lightbox .lb-np').hide()
      _0xdbd963 &&
        ($('#lightbox .lb-wrap').addClass('lb-loading'),
        $('#lightbox .lb-wrap figure .lb-img').prepend(
          '<img data-src="' + _0xdbd963 + '"/>'
        ),
        $('#lightbox .lb-wrap figure .lb-img img')
          .attr('src', _0xdbd963)
          .on('load', function () {
            $(this).removeAttr('data-src')
            $(this).on('mousedown', function () {
              return false
            })
            $(this).on('contextmenu', function () {
              return alert('\xA9 ' + location.hostname), false
            })
            $('#lightbox .lb-wrap').removeClass('lb-loading')
            ;(_0x33fce8 || _0xe327af) &&
              $('#lightbox .lb-wrap figure').append('<figcaption></figcaption>')
            _0x33fce8 &&
              $('#lightbox .lb-wrap figure figcaption').append(
                '<h4>' + _0x33fce8 + '</h4>'
              )
            _0xe327af &&
              $('#lightbox .lb-wrap figure figcaption').append(
                '<p>' + _0xe327af + '</p>'
              )
            _0x512eb4 && $('#lightbox .lb-count').html(_0x512eb4).show()
            $('#lightbox .lb-np').show()
            if (_0x2426f4.prev('[data-lightbox="' + _0x413074 + '"]').length) {
              var _0x16bf8a = _0x2426f4
                .prev('[data-lightbox="' + _0x413074 + '"]')
                .attr('href')
              $('#lightbox .lb-np.lb-prev')
                .attr('data-id', _0x413074)
                .attr('data-url', _0x16bf8a)
                .show()
              $('body').append(
                '<img src="' + _0x16bf8a + '" style="display:none;"/>'
              )
            } else {
              $('#lightbox .lb-np.lb-prev').hide()
            }
            if (_0x2426f4.next('[data-lightbox="' + _0x413074 + '"]').length) {
              var _0x16bf8a = _0x2426f4
                .next('[data-lightbox="' + _0x413074 + '"]')
                .attr('href')
              $('#lightbox .lb-np.lb-next')
                .attr('data-id', _0x413074)
                .attr('data-url', _0x16bf8a)
                .show()
              $('body').append(
                '<img src="' + _0x16bf8a + '" style="display:none;"/>'
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
      function (_0x2fe96a) {
        _0x2fe96a.stopPropagation()
        var _0x1e95bc = $(this).attr('data-url'),
          _0x3870d5 = $(this).attr('data-id')
        $(
          '[href="' + _0x1e95bc + '"][data-lightbox="' + _0x3870d5 + '"]'
        ).trigger('click')
      }
    )
    $('#lightbox').click(function () {
      $('#lightbox').removeClass('open')
      $('body').removeClass('lightbox_open')
    })
    $('#lightbox .lb-wrap').on('click', function (_0x4b976a) {
      _0x4b976a.stopPropagation()
    })
    $('#lightbox .lb-close').on('click', function (_0x2b46ae) {
      _0x2b46ae.stopPropagation()
      $('#lightbox').removeClass('open')
      $('body').removeClass('lightbox_open')
    })
    $(document).on('keydown', function (_0x5463cf) {
      var _0x174132 = _0x5463cf.keyCode || _0x5463cf.which
      _0x5463cf.key === 'Escape' &&
        ($('#lightbox').removeClass('open'),
        $('body').removeClass('lightbox_open'))
      _0x174132 === 37 && $('#lightbox .lb-np.lb-prev:visible').trigger('click')
      _0x174132 === 39 && $('#lightbox .lb-np.lb-next:visible').trigger('click')
      _0x174132 === 38 && $('#lightbox').scrollTop(0)
      if (_0x174132 === 40) {
        var _0x35e646 = $('#lightbox').height()
        $('#lightbox').scrollTop(_0x35e646)
      }
    })
  }
  function titleCase(_0xa8c3c9) {
    _0xa8c3c9 = _0xa8c3c9.split(' ')
    for (var _0x292b5f = 0; _0x292b5f < _0xa8c3c9.length; _0x292b5f++) {
      _0xa8c3c9[_0x292b5f] =
        _0xa8c3c9[_0x292b5f].charAt(0).toUpperCase() +
        _0xa8c3c9[_0x292b5f].slice(1)
    }
    return (_0xa8c3c9 = _0xa8c3c9.join(' ')), _0xa8c3c9
  }
  function $_GET(_0x18d889) {
    var _0x14f96f = window.location.search.substring(1),
      _0x2b4dbb = _0x14f96f.split('&'),
      _0x22a1c1,
      _0x2eea91
    for (_0x2eea91 = 0; _0x2eea91 < _0x2b4dbb.length; _0x2eea91++) {
      _0x22a1c1 = _0x2b4dbb[_0x2eea91].split('=')
      if (_0x22a1c1[0] === _0x18d889) {
        return _0x22a1c1[1] === undefined
          ? true
          : decodeURIComponent(_0x22a1c1[1])
      }
    }
  }
  function get_url_parameter(_0x354b98, _0x19e9b2) {
    _0x354b98 = _0x354b98.replace(/[\[\]]/g, '\\$&')
    var _0x3f73bc = new RegExp('[?&]' + _0x354b98 + '(=([^&#]*)|&|#|$)'),
      _0x3e82c4 = _0x3f73bc.exec(_0x19e9b2)
    if (!_0x3e82c4) {
      return null
    }
    if (!_0x3e82c4[2]) {
      return ''
    }
    return decodeURIComponent(_0x3e82c4[2].replace(/\+/g, ' '))
  }
  
