window.onload = function () {
  darkmode()
  shortcode()
  etc()
  pop()
  lazyload()
  popwin()
  timeago()
  lightbox()
  typeof custom_js === 'function' && custom_js()
}
function darkmode() {
  localStorage.getItem('darkmode') == 1 && $('a[href="#darkmode"] i').toggle()
  $('a[href="#darkmode"]').on('click', function (_0x4267e1) {
    _0x4267e1.preventDefault()
    $('html').toggleClass('dark')
    $('i', this).toggle()
    localStorage.getItem('darkmode') == 1
      ? localStorage.setItem('darkmode', 0)
      : localStorage.setItem('darkmode', 1)
    darkmode_head()
  })
}
function popwin() {
  $(document).on('click', '[target="_popwin"]', function (_0x2196fa) {
    _0x2196fa.stopPropagation()
    _0x2196fa.preventDefault()
    var _0x3afdbd = $(this).attr('href'),
      _0x399cb0 = $(this).attr('data-popwin-width'),
      _0x5bc7d5 = $(this).attr('data-popwin-height'),
      _0x19773b = 960
    _0x399cb0 && (_0x19773b = _0x399cb0)
    var _0x5678db = 540
    _0x5bc7d5 && (_0x5678db = _0x5bc7d5)
    var _0x3b9fb1 = Number(screen.width / 2 - _0x19773b / 2),
      _0x1c43a5 = Number(screen.height / 2 - _0x5678db / 2),
      _0x9147ad = window.open(
        _0x3afdbd,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
          _0x19773b +
          ', height=' +
          _0x5678db +
          ', top=' +
          _0x1c43a5 +
          ', left=' +
          _0x3b9fb1
      )
    _0x9147ad.focus()
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
    var _0x34a969 = $(this).attr('data-shortcode')
    if (_0x34a969 == 'img') {
      var _0x39abfc = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + _0x39abfc + '"></a>')
    }
    if (_0x34a969 == 'youtube') {
      var _0x3b611f = $(this).attr('data-src'),
        _0x54f5fd = _0x3b611f.split('/')[3]
      _0x3b611f.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x54f5fd = get_url_parameter('v', _0x3b611f))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + _0x54f5fd + '?autoplay=1&rel=0'
      )
    }
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
  $('[data-feed]').length &&
    $('[data-feed]').each(function () {
      var _0x1ae500 = $(this),
        _0x49ffb4 = $(this).attr('data-feed')
      _0x1ae500.addClass('loading')
      _0x1ae500.load(_0x49ffb4 + ' .is_loop', function () {
        var _0x32d1b3 = $(this).html()
        _0x1ae500.html(_0x32d1b3)
        var _0x5e267a = _0x1ae500.closest('article').attr('id')
        _0x5e267a &&
          (_0x1ae500.find('article#' + _0x5e267a).length
            ? _0x1ae500.find('article#' + _0x5e267a).remove()
            : _0x1ae500.find('article:last-of-type').remove())
        lazyload()
        timeago()
        _0x1ae500.removeClass('loading')
      })
    })
  $('[data-comments]').length &&
    $('[data-comments]').each(function () {
      var _0x29f37d = $(this),
        _0x22e2a6 = _0x29f37d.attr('data-comments')
      _0x29f37d.addClass('loading')
      $.getJSON(
        $_config.url.home +
          'feeds/comments/default?alt=json&max-results=' +
          _0x22e2a6,
        function (_0x5bfab9) {
          var _0x2dd9ba = ''
          $.each(_0x5bfab9.feed.entry, function (_0x138a78, _0x26b25d) {
            _0x2dd9ba += '<div class="item">'
            _0x2dd9ba += '<div class="left">'
            _0x2dd9ba +=
              '<img data-src="' +
              _0x26b25d.author[0]['gd$image'].src.replace(
                _0x26b25d.author[0]['gd$image'].src.split('/')[7],
                'w60-h60-c'
              ) +
              '"/>'
            _0x2dd9ba += '</div>'
            _0x2dd9ba += '<div class="right">'
            _0x2dd9ba +=
              '<b>' +
              _0x26b25d.author[0].name['$t'] +
              '</b> ' +
              ($_config.language == 'in' ? 'mengomentari' : 'comment on') +
              ' '
            _0x26b25d['thr$in-reply-to'].href.includes('/p/')
              ? (_0x2dd9ba +=
                  '<a href="' +
                  _0x26b25d.link[2].href +
                  '">' +
                  titleCase(
                    _0x26b25d['thr$in-reply-to'].href
                      .split('/')[4]
                      .replace('.html', '')
                      .replace(/-/g, ' ')
                  ) +
                  '..</a>')
              : (_0x2dd9ba +=
                  '<a href="' +
                  _0x26b25d.link[2].href +
                  '">' +
                  titleCase(
                    _0x26b25d['thr$in-reply-to'].href
                      .split('/')[5]
                      .replace('.html', '')
                      .replace(/-/g, ' ')
                  ) +
                  '..</a>')
            _0x2dd9ba += '<br/>'
            _0x2dd9ba +=
              '<small><time datetime="' +
              _0x26b25d.published['$t'] +
              '"></time></small>'
            _0x2dd9ba += '</div>'
            _0x2dd9ba += '</div>'
          })
          _0x29f37d.html(_0x2dd9ba)
          lazyload()
          timeago()
          _0x29f37d.removeClass('loading')
        }
      )
    })
  $('#pop-bagikan .copy button').on('click', function (_0x28d2fc) {
    var _0x5befdf = $(this)
    _0x5befdf.siblings('input').select()
    document.execCommand('copy')
    _0x5befdf.text('Disalin!')
    setTimeout(function () {
      _0x5befdf.text('Salin')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var _0x5ed125 = $('#header').outerHeight(),
        _0x125be1 = $('.is_single article .attr-sticky').outerHeight()
      setTimeout(function () {
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop:
                $(window.location.hash).offset().top -
                _0x5ed125 -
                _0x125be1 -
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
  $(document).on('click', 'a[href*="#"]', function (_0x1bb09c) {
    var _0x512e66 = $(this).attr('href').split('#')[0],
      _0x2b7218 = '#' + $(this).attr('href').split('#')[1]
    if (!_0x512e66) {
      if ($(_0x2b7218).length) {
        _0x1bb09c.preventDefault()
        var _0x44ccaf = $('#header').outerHeight(),
          _0x367e49 = $('.is_single article .attr-sticky').outerHeight()
        _0x367e49
          ? $('html, body')
              .stop()
              .animate(
                {
                  scrollTop:
                    $(_0x2b7218).offset().top - _0x44ccaf - _0x367e49 - 20,
                },
                500
              )
          : $('html, body')
              .stop()
              .animate(
                { scrollTop: $(_0x2b7218).offset().top - _0x44ccaf - 20 },
                500
              )
        $(_0x2b7218).addClass('focus')
        setTimeout(function () {
          $(_0x2b7218).removeClass('focus')
        }, 2000)
      }
    }
  })
  $(document).on('click', '.loadmore-btn', function (_0x377e3f) {
    _0x377e3f.preventDefault()
    let _0x5ed192 = $(this).attr('href'),
      _0x17ec08 = $('#blog-pager .loadmore-btn'),
      _0x3b8a3c = $('#blog-pager .loadmore-btn').text()
    _0x5ed192 &&
      $.ajax({
        url: _0x5ed192,
        beforeSend: function () {
          _0x17ec08.addClass('loading')
        },
        complete: function () {
          _0x17ec08.removeClass('loading')
        },
        success: function (_0x252cec) {
          let _0x5b2195 = $(_0x252cec).find('.is_loop').html(),
            _0x5502dd = $(_0x252cec).find('.loadmore-btn').attr('href')
          $('.is_loop').append(_0x5b2195)
          _0x17ec08.show()
          lazyload()
          timeago()
          _0x5502dd ? _0x17ec08.attr('href', _0x5502dd) : _0x17ec08.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var _0x4de0fd = $('a.blog-pager-older-link').text(),
      _0x586c34 = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(_0x586c34 + ' article h1', function () {
      var _0x2f8a9d = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
          _0x4de0fd +
          '</b></small><h3>' +
          _0x2f8a9d +
          '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        _0x586c34 + ' article .post-body img:first-of-type',
        function () {
          var _0x2a392b = $(this).html(),
            _0xc60a0a = _0x2a392b.split('src="')[1],
            _0x4e5a70 = _0xc60a0a.split('"')[0],
            _0x5dcf5e = _0x4e5a70.split('=')[0],
            _0x25dcf1 = _0x5dcf5e.split('/')[7]
          _0x5dcf5e =
            _0x5dcf5e.replace(_0x25dcf1, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + _0x5dcf5e + '"/>')
            .removeClass('loading')
        }
      )
    })
    var _0x49a093 = $('a.blog-pager-newer-link').text(),
      _0x2fca9f = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(_0x2fca9f + ' article h1', function () {
      var _0x4dc5af = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
          _0x49a093 +
          '</b></small><h3>' +
          _0x4dc5af +
          '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        _0x2fca9f + ' article .post-body img:first-of-type',
        function () {
          var _0x3d3d18 = $(this).html(),
            _0x52a9ae = _0x3d3d18.split('src="')[1],
            _0x4e404c = _0x52a9ae.split('"')[0],
            _0x4c71e5 = _0x4e404c.split('=')[0],
            _0xf15e7b = _0x4c71e5.split('/')[7]
          _0x4c71e5 =
            _0x4c71e5.replace(_0xf15e7b, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + _0x4c71e5 + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
}
function timeago() {
  $('[datetime]:not(.timeago)').each(function () {
    var _0xd2f122 = $(this),
      _0x6a8a1c = _0xd2f122.attr('datetime')
    _0xd2f122.addClass('timeago')
    !_0xd2f122.attr('title') && _0xd2f122.attr('title', _0x6a8a1c)
    _0xd2f122.text(_0x5d6376(_0x6a8a1c))
  })
  function _0x5d6376(_0x51027e) {
    var _0x45a2d0 = 'ago',
      _0x25d04d = 'seconds',
      _0x3d79fe = 'minutes',
      _0x4e3fba = 'hours',
      _0x73c896 = 'days',
      _0x33152f = 'months',
      _0x881865 = 'years'
    $_config.language == 'in' &&
      ((_0x45a2d0 = 'yang lalu'),
      (_0x25d04d = 'detik'),
      (_0x3d79fe = 'menit'),
      (_0x4e3fba = 'jam'),
      (_0x73c896 = 'hari'),
      (_0x33152f = 'bulan'),
      (_0x881865 = 'tahun'))
    var _0x5a2f0f = new Date(_0x51027e),
      _0x2c9085 = 86400000,
      _0x3b746e = 30 * _0x2c9085,
      _0x52800b = 365 * _0x2c9085,
      _0xa01e32 = _0x45a2d0,
      _0x30a247 = new Date() - _0x5a2f0f
    return _0x30a247 < 60000
      ? Math.round(_0x30a247 / 1000) + ' ' + _0x25d04d + ' ' + _0xa01e32
      : _0x30a247 < 3600000
      ? Math.round(_0x30a247 / 60000) + ' ' + _0x3d79fe + ' ' + _0xa01e32
      : _0x30a247 < _0x2c9085
      ? Math.round(_0x30a247 / 3600000) + ' ' + _0x4e3fba + ' ' + _0xa01e32
      : _0x30a247 < _0x3b746e
      ? Math.round(_0x30a247 / _0x2c9085) + ' ' + _0x73c896 + ' ' + _0xa01e32
      : _0x30a247 < _0x52800b
      ? Math.round(_0x30a247 / _0x3b746e) + ' ' + _0x33152f + ' ' + _0xa01e32
      : Math.round(_0x30a247 / _0x52800b) + ' ' + _0x881865 + ' ' + _0xa01e32
  }
  $('#comments .datetime a:not(.timeago)').each(function () {
    var _0x3c51ad = $(this),
      _0x3495e9 = _0x3c51ad.text()
    _0x3c51ad.attr('datetime', _0x3495e9)
    var _0x44d577 = _0x3c51ad.attr('datetime')
    _0x3c51ad.addClass('timeago')
    _0x3c51ad.attr('title', _0x44d577)
    _0x3c51ad.text(_0x5d6376(_0x44d577))
  })
}
function separator(_0x235e58, _0x30a2dd = '') {
  var _0x4c81fa = '',
    _0x1b2714 = _0x235e58.toString().split('').reverse().join('')
  for (var _0x3c069b = 0; _0x3c069b < _0x1b2714.length; _0x3c069b++) {
    if (_0x3c069b % 3 == 0) {
      _0x4c81fa += _0x1b2714.substr(_0x3c069b, 3) + '.'
    }
  }
  return _0x30a2dd
    ? _0x30a2dd +
        ' ' +
        _0x4c81fa
          .split('', _0x4c81fa.length - 1)
          .reverse()
          .join('')
    : _0x4c81fa
        .split('', _0x4c81fa.length - 1)
        .reverse()
        .join('')
}
function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
      '        <div id="pop-video" data-pop-title="Video" data-pop-width="960">            <div class="video">                <iframe allowfullscreen="true"></iframe>            </div>        </div>        '),
    $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function () {
    var _0x291fc8 = $(this),
      _0x3c7a26 = _0x291fc8.attr('id'),
      _0x133231 = _0x291fc8.attr('data-pop-title'),
      _0x357e3e = _0x291fc8.attr('data-pop-width'),
      _0x2b311a = _0x291fc8.attr('data-pop-height')
    _0x291fc8.wrap('<div class="pop"></div>')
    _0x291fc8.wrap('<div class="pop-wrap"></div>')
    _0x291fc8.addClass('pop-content pop-loaded')
    var _0x36a5bd =
      '            <header class="pop-header">                <div class="pop-title">                    <h3>                        ' +
      _0x133231 +
      '                    </h3>                </div>                <div class="pop-close">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>                </div>            </header>        '
    _0x291fc8.closest('.pop-wrap').prepend(_0x36a5bd)
    _0x357e3e && _0x291fc8.closest('.pop-wrap').css('width', _0x357e3e)
  })
  $('.pop-close').on('click', function () {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function (_0x2587ee) {
    _0x2587ee.preventDefault()
    var _0x4f6a24 = $(this),
      _0x3fa0ed = _0x4f6a24.attr('target'),
      _0x50baa3 = _0x4f6a24.attr('data-pop-title')
        ? _0x4f6a24.attr('data-pop-title')
        : $('#' + _0x3fa0ed).attr('data-pop-title'),
      _0x57f2d6 = _0x4f6a24.attr('data-pop-width'),
      _0x37bda6 = _0x4f6a24.attr('data-pop-height')
    _0x4f6a24.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + _0x3fa0ed).length &&
      ($('body').addClass('pop-open'),
      $('#' + _0x3fa0ed)
        .closest('.pop')
        .addClass('open'),
      _0x4f6a24.closest('.pop-content').length &&
        (($back_id = _0x4f6a24.closest('.pop-content').attr('id')),
        (_0x50baa3 =
          '<a target="' +
          $back_id +
          '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
          _0x50baa3)),
      _0x50baa3 &&
        $('#' + _0x3fa0ed)
          .closest('.pop')
          .find('.pop-title h3')
          .html(_0x50baa3),
      $('[data-src]').each(function () {
        var _0x5e8f70 = $(this).attr('data-src')
        $(this).attr('src', _0x5e8f70).removeAttr('data-src')
      }))
    if (_0x3fa0ed == 'pop-video') {
      $href = $(this).attr('href')
      var _0x52927b = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x52927b = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + _0x52927b + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function () {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function (_0x1d475d) {
    _0x1d475d.stopPropagation()
  })
}
function lightbox() {
  $('.lightbox-auto').length &&
    $('.lightbox-auto').each(function () {
      $('img', this)
        .closest('a')
        .each(function () {
          $(this).addClass('lightbox')
        })
    })
  if ($('.lightbox').length) {
    var _0x1caff3 = '   <div id="lightbox">    <figure></figure>   </div>  '
    $('body').append(_0x1caff3)
    $(document).on('click', '.lightbox', function (_0x57e052) {
      _0x57e052.preventDefault()
      var _0x240312 = $(this).attr('href')
      $('#lightbox').addClass('open')
      $('#lightbox figure').addClass('loading')
      $('#lightbox figure').html('<img src="' + _0x240312 + '"/>')
      $('#lightbox figure img').on('load', function () {
        $('#lightbox figure').removeClass('loading')
        $(this).addClass('open')
      })
    })
    $(document).on('click', '#lightbox', function (_0x561cd9) {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
    $(window).on('scroll', function () {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
  }
}
function lazyload() {
  $('[data-bg]').each(function () {
    var _0x8d1061 = $(this),
      _0x4e2f31 = _0x8d1061.attr('data-bg')
    _0x8d1061
      .css('background-image', 'url(' + _0x4e2f31 + ')')
      .removeAttr('data-bg')
  })
  $('[data-src]:not([lazy="true"])').each(function () {
    var _0x432d7b = $(this),
      _0x5113d4 = $(window).height(),
      _0x32ae9b = $(window).scrollTop(),
      _0x1a8fa8 = _0x32ae9b + _0x5113d4,
      _0x49cd06 = _0x432d7b.offset().top
    _0x432d7b.attr('data-offset-top', _0x49cd06)
    var _0x1f0cd6 = _0x432d7b.attr('data-src')
    _0x1f0cd6 = _0x1f0cd6.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x1f0cd6 = _0x1f0cd6.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x1f0cd6 = _0x1f0cd6.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x1f0cd6 = _0x1f0cd6.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    var _0x36c5bf = _0x432d7b.prop('tagName').toLowerCase()
    if (_0x49cd06 <= _0x1a8fa8) {
      if (_0x36c5bf == 'img') {
        _0x432d7b.attr('src', _0x1f0cd6).removeAttr('data-src')
        _0x432d7b.attr('lazy', 'true')
      } else {
        _0x36c5bf == 'iframe' &&
          (_0x432d7b.attr('src', _0x1f0cd6).removeAttr('data-src'),
          _0x432d7b.attr('lazy', 'true'))
      }
    }
  })
  $(window).on('scroll', function () {
    var _0x58b868 = $(window).height(),
      _0xfe60c1 = $(window).scrollTop(),
      _0x4ee512 = _0xfe60c1 + _0x58b868
    $('[data-src]:not([lazy="true"])').each(function () {
      var _0x4efefa = $(this),
        _0x34c71c = $(window).height(),
        _0x1e9cdd = _0x4efefa.offset().top,
        _0x25ada2 = _0x4efefa.attr('data-src')
      _0x25ada2 = _0x25ada2.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x25ada2 = _0x25ada2.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x25ada2 = _0x25ada2.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x25ada2 = _0x25ada2.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var _0x3c7b9a = _0x4efefa.prop('tagName').toLowerCase()
      if (_0x1e9cdd <= _0x4ee512) {
        if (_0x3c7b9a == 'img') {
          _0x4efefa.attr('src', _0x25ada2).removeAttr('data-src')
          _0x4efefa.attr('lazy', 'true')
        } else {
          _0x3c7b9a == 'iframe' &&
            (_0x4efefa.attr('src', _0x25ada2).removeAttr('data-src'),
            _0x4efefa.attr('lazy', 'true'))
        }
      }
    })
  })
}
function titleCase(_0x7e10b8) {
  _0x7e10b8 = _0x7e10b8.split(' ')
  for (var _0x2de246 = 0; _0x2de246 < _0x7e10b8.length; _0x2de246++) {
    _0x7e10b8[_0x2de246] =
      _0x7e10b8[_0x2de246].charAt(0).toUpperCase() +
      _0x7e10b8[_0x2de246].slice(1)
  }
  return (_0x7e10b8 = _0x7e10b8.join(' ')), _0x7e10b8
}
function get_url_parameter(_0x18287d, _0x33832b) {
  _0x18287d = _0x18287d.replace(/[\[\]]/g, '\\$&')
  var _0x2889ca = new RegExp('[?&]' + _0x18287d + '(=([^&#]*)|&|#|$)'),
    _0xfca93 = _0x2889ca.exec(_0x33832b)
  if (!_0xfca93) {
    return null
  }
  if (!_0xfca93[2]) {
    return ''
  }
  return decodeURIComponent(_0xfca93[2].replace(/\+/g, ' '))
}
