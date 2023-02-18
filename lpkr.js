window.onload = function () {
  custom()
  pop()
  popwin()
  shortcode()
  lazyload()
  timeago()
  main()
}
function main() {
  $(window).click(function () {
    $('#chat').removeClass('show')
  })
  $('#chat figure').on('click', function (_0x1cf40b) {
    _0x1cf40b.stopPropagation()
    $('#chat').addClass('show')
    $('#chat figure figcaption').hide()
  })
  $('#chat .wrap').on('click', function (_0x5b06b7) {
    _0x5b06b7.stopPropagation()
  })
  $('.link').each(function () {
    var _0x281b01 = $(this).attr('href')
    $(this).attr('href', _0x281b01.split('|')[1]).text(_0x281b01.split('|')[0])
  })
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
  $('[data-feed]').length &&
    $('[data-feed]').each(function () {
      var _0xd5f46d = $(this),
        _0x1ea59d = $(this).attr('data-feed')
      _0xd5f46d.addClass('loading')
      _0xd5f46d.load(_0x1ea59d + ' .is_loop', function () {
        var _0x38f19f = $(this).html()
        _0xd5f46d.html(_0x38f19f)
        var _0xad7c94 = _0xd5f46d.closest('article').attr('id')
        _0xad7c94 &&
          (_0xd5f46d.find('article#' + _0xad7c94).length
            ? _0xd5f46d.find('article#' + _0xad7c94).remove()
            : _0xd5f46d.find('article:last-of-type').remove())
        lazyload()
        timeago()
        _0xd5f46d.removeClass('loading')
      })
    })
  $('.faq-item h2').on('click', function () {
    $(this).closest('.faq-item').toggleClass('open')
    $(this).next('p').slideToggle(200)
  })
  $('.faq-item:first h2').trigger('click')
  $('#pop-bagikan .copy button').on('click', function (_0x19c173) {
    var _0xb4a11c = $(this)
    _0xb4a11c.siblings('input').select()
    document.execCommand('copy')
    _0xb4a11c.text('Disalin!')
    setTimeout(function () {
      _0xb4a11c.text('Salin')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var _0x4b2566 = $('#header').outerHeight(),
        _0x3b2bc0 = $('.is_single article .attr-sticky').outerHeight()
      setTimeout(function () {
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop:
                $(window.location.hash).offset().top -
                _0x4b2566 -
                _0x3b2bc0 -
                20,
            },
            500
          )
        $(window.location.hash).addClass('focus')
        setTimeout(function () {
          $(window.location.hash).removeClass('focus')
        }, 2000)
      }, 500)
    }
  }
  $(document).on('click', 'a[href*="#"]', function (_0x243b76) {
    var _0x311b55 = $(this).attr('href').split('#')[0],
      _0x30d0b7 = '#' + $(this).attr('href').split('#')[1]
    if (!_0x311b55) {
      if ($(_0x30d0b7).length) {
        _0x243b76.preventDefault()
        var _0x5b9f11 = $('#header').outerHeight(),
          _0x3dfb88 = $('.is_single article .attr-sticky').outerHeight()
        _0x3dfb88
          ? $('html, body')
              .stop()
              .animate(
                {
                  scrollTop:
                    $(_0x30d0b7).offset().top - _0x5b9f11 - _0x3dfb88 - 20,
                },
                500
              )
          : $('html, body')
              .stop()
              .animate(
                { scrollTop: $(_0x30d0b7).offset().top - _0x5b9f11 - 20 },
                500
              )
        $(_0x30d0b7).addClass('focus')
        setTimeout(function () {
          $(_0x30d0b7).removeClass('focus')
        }, 2000)
      }
    }
  })
  $(window).scrollTop() > 0
    ? $('#header').addClass('onScroll')
    : $('#header').removeClass('onScroll')
  $(window).on('scroll', function () {
    $(this).scrollTop() > 0
      ? $('#header').addClass('onScroll')
      : $('#header').removeClass('onScroll')
    $(this).scrollTop() > $(window).height() / 2
      ? $('#chat').addClass('open')
      : $('#chat').removeClass('open')
  })
  $(document).on('click', '.loadmore-btn', function (_0x791279) {
    _0x791279.preventDefault()
    let _0x96187 = $(this).attr('href'),
      _0x2c710a = $('#blog-pager .loadmore-btn'),
      _0xfed0d8 = $('#blog-pager .loadmore-btn').text()
    _0x96187 &&
      $.ajax({
        url: _0x96187,
        beforeSend: function () {
          _0x2c710a.addClass('loading')
        },
        complete: function () {
          _0x2c710a.removeClass('loading')
        },
        success: function (_0x13a30e) {
          let _0x3c4ac5 = $(_0x13a30e).find('.is_loop').html(),
            _0x1d69d9 = $(_0x13a30e).find('.loadmore-btn').attr('href')
          $('.is_loop').append(_0x3c4ac5)
          _0x2c710a.show()
          lazyload()
          timeago()
          _0x1d69d9 ? _0x2c710a.attr('href', _0x1d69d9) : _0x2c710a.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var _0x1ec687 = $('a.blog-pager-older-link').text(),
      _0x35abde = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(_0x35abde + ' article h1', function () {
      var _0x61541c = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
          _0x1ec687 +
          '</b></small><h3>' +
          _0x61541c +
          '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        _0x35abde + ' article .post-body img:first-of-type',
        function () {
          var _0x575430 = $(this).html(),
            _0x4e8859 = _0x575430.split('src="')[1],
            _0x4764a5 = _0x4e8859.split('"')[0]
          if (_0x4764a5.indexOf('blogger.googleusercontent.com') >= 0) {
            $resize = _0x4764a5.split('=')[0] + '=w100-h100-c'
          } else {
            var _0x981b7e = _0x4764a5.split('/')[7]
            $resize = _0x4764a5
              .replace('1.bp.', '2.bp.')
              .replace(_0x981b7e, 'w100-h100-c')
          }
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + $resize + '"/>')
            .removeClass('loading')
        }
      )
    })
    var _0x79bad6 = $('a.blog-pager-newer-link').text(),
      _0x12bc8c = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(_0x12bc8c + ' article h1', function () {
      var _0x6b9dc5 = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
          _0x79bad6 +
          '</b></small><h3>' +
          _0x6b9dc5 +
          '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        _0x12bc8c + ' article .post-body img:first-of-type',
        function () {
          var _0x19693d = $(this).html(),
            _0x126e5d = _0x19693d.split('src="')[1],
            _0x5eddaf = _0x126e5d.split('"')[0]
          if (_0x5eddaf.indexOf('blogger.googleusercontent.com') >= 0) {
            $resize = _0x5eddaf.split('=')[0] + '=w100-h100-c'
          } else {
            var _0x66abe = _0x5eddaf.split('/')[7]
            $resize = _0x5eddaf
              .replace('1.bp.', '2.bp.')
              .replace(_0x66abe, 'w100-h100-c')
          }
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + $resize + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
  var _0x6f22ef = document.createElement('link')
  _0x6f22ef.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css'
  _0x6f22ef.rel = 'stylesheet'
  document.body.appendChild(_0x6f22ef)
  var _0x4e6732 = document.createElement('script')
  _0x4e6732.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js'
  _0x4e6732.type = 'text/javascript'
  document.body.appendChild(_0x4e6732)
  _0x4e6732.onload = function () {
    AOS.init()
  }
}
function lazyload() {
  $('[data-src]').each(function () {
    var _0x40fbcb = $(this).attr('data-src')
    $(this).attr('src', _0x40fbcb).removeAttr('data-src')
  })
}
function timeago() {
  $('[datetime]:not(.timeago)').each(function () {
    var _0x4e5b40 = $(this),
      _0x2deddc = _0x4e5b40.attr('datetime')
    _0x4e5b40.addClass('timeago')
    !_0x4e5b40.attr('title') && _0x4e5b40.attr('title', _0x2deddc)
    _0x4e5b40.text(_0x381a12(_0x2deddc))
  })
  function _0x381a12(_0x5b6062) {
    var _0x53edfb = 'ago',
      _0x5251ef = 'seconds',
      _0x1ac759 = 'minutes',
      _0x57b299 = 'hours',
      _0x528c44 = 'days',
      _0x3fc10c = 'months',
      _0x5d3b3b = 'years'
    $_config.language == 'in' &&
      ((_0x53edfb = 'yang lalu'),
      (_0x5251ef = 'detik'),
      (_0x1ac759 = 'menit'),
      (_0x57b299 = 'jam'),
      (_0x528c44 = 'hari'),
      (_0x3fc10c = 'bulan'),
      (_0x5d3b3b = 'tahun'))
    var _0x2ff72d = new Date(_0x5b6062),
      _0x55b586 = 86400000,
      _0x31fd3b = 30 * _0x55b586,
      _0x5a12f2 = 365 * _0x55b586,
      _0x49aa74 = _0x53edfb,
      _0x28ea82 = new Date() - _0x2ff72d
    return _0x28ea82 < 60000
      ? Math.round(_0x28ea82 / 1000) + ' ' + _0x5251ef + ' ' + _0x49aa74
      : _0x28ea82 < 3600000
      ? Math.round(_0x28ea82 / 60000) + ' ' + _0x1ac759 + ' ' + _0x49aa74
      : _0x28ea82 < _0x55b586
      ? Math.round(_0x28ea82 / 3600000) + ' ' + _0x57b299 + ' ' + _0x49aa74
      : _0x28ea82 < _0x31fd3b
      ? Math.round(_0x28ea82 / _0x55b586) + ' ' + _0x528c44 + ' ' + _0x49aa74
      : _0x28ea82 < _0x5a12f2
      ? Math.round(_0x28ea82 / _0x31fd3b) + ' ' + _0x3fc10c + ' ' + _0x49aa74
      : Math.round(_0x28ea82 / _0x5a12f2) + ' ' + _0x5d3b3b + ' ' + _0x49aa74
  }
  $('#comments .datetime a:not(.timeago)').each(function () {
    var _0x13f5e9 = $(this),
      _0xd06fcf = _0x13f5e9.text()
    _0x13f5e9.attr('datetime', _0xd06fcf)
    var _0x35af5c = _0x13f5e9.attr('datetime')
    _0x13f5e9.addClass('timeago')
    _0x13f5e9.attr('title', _0x35af5c)
    _0x13f5e9.text(_0x381a12(_0x35af5c))
  })
}
function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
      '        <div id="pop-video" data-pop-title="Video" data-pop-width="960">            <div class="video">                <iframe allowfullscreen="true"></iframe>            </div>        </div>        '),
    $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function () {
    var _0x24c012 = $(this),
      _0x13980b = _0x24c012.attr('id'),
      _0x4ee8d5 = _0x24c012.attr('data-pop-title'),
      _0x26bc1f = _0x24c012.attr('data-pop-width'),
      _0x29c64d = _0x24c012.attr('data-pop-height')
    _0x24c012.wrap('<div class="pop"></div>')
    _0x24c012.wrap('<div class="pop-wrap"></div>')
    _0x24c012.addClass('pop-content pop-loaded')
    var _0x4e9938 =
      '            <header class="pop-header">                <div class="pop-title">                    <h3>                        ' +
      _0x4ee8d5 +
      '                    </h3>                </div>                <div class="pop-close">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>                </div>            </header>        '
    _0x24c012.closest('.pop-wrap').prepend(_0x4e9938)
    _0x26bc1f && _0x24c012.closest('.pop-wrap').css('width', _0x26bc1f)
  })
  $('.pop-close').on('click', function () {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function (_0x5f340e) {
    _0x5f340e.preventDefault()
    var _0x430882 = $(this),
      _0x2bc553 = _0x430882.attr('target'),
      _0x397061 = _0x430882.attr('data-pop-title')
        ? _0x430882.attr('data-pop-title')
        : $('#' + _0x2bc553).attr('data-pop-title'),
      _0x56c016 = _0x430882.attr('data-pop-width'),
      _0x3bd2c4 = _0x430882.attr('data-pop-height')
    _0x430882.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + _0x2bc553).length &&
      ($('body').addClass('pop-open'),
      $('#' + _0x2bc553)
        .closest('.pop')
        .addClass('open'),
      _0x430882.closest('.pop-content').length &&
        (($back_id = _0x430882.closest('.pop-content').attr('id')),
        (_0x397061 =
          '<a target="' +
          $back_id +
          '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
          _0x397061)),
      _0x397061 &&
        $('#' + _0x2bc553)
          .closest('.pop')
          .find('.pop-title h3')
          .html(_0x397061),
      $('[data-src]').each(function () {
        var _0x34aca8 = $(this).attr('data-src')
        $(this).attr('src', _0x34aca8).removeAttr('data-src')
      }))
    if (_0x2bc553 == 'pop-video') {
      $href = $(this).attr('href')
      var _0x375067 = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x375067 = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + _0x375067 + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function () {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function (_0x47a804) {
    _0x47a804.stopPropagation()
  })
}
function popwin() {
  $(document).on('click', '[target="_popwin"]', function (_0x39a3d0) {
    _0x39a3d0.stopPropagation()
    _0x39a3d0.preventDefault()
    var _0x348f8c = $(this).attr('href'),
      _0x6ab505 = $(this).attr('data-popwin-width'),
      _0x5b9eac = $(this).attr('data-popwin-height'),
      _0x4198de = 960
    _0x6ab505 && (_0x4198de = _0x6ab505)
    var _0x16d7b0 = 540
    _0x5b9eac && (_0x16d7b0 = _0x5b9eac)
    var _0x2cde92 = Number(screen.width / 2 - _0x4198de / 2),
      _0x51005c = Number(screen.height / 2 - _0x16d7b0 / 2),
      _0x2cddaf = window.open(
        _0x348f8c,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
          _0x4198de +
          ', height=' +
          _0x16d7b0 +
          ', top=' +
          _0x51005c +
          ', left=' +
          _0x2cde92
      )
    _0x2cddaf.focus()
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
    var _0x415ada = $(this).attr('data-shortcode')
    if (_0x415ada == 'img') {
      var _0x5ed0ce = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + _0x5ed0ce + '"></a>')
    }
    if (_0x415ada == 'youtube') {
      var _0x4f7dd3 = $(this).attr('data-src'),
        _0x1d1f1d = _0x4f7dd3.split('/')[3]
      _0x4f7dd3.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x1d1f1d = get_url_parameter('v', _0x4f7dd3))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + _0x1d1f1d + '?autoplay=1&rel=0'
      )
    }
  })
}
