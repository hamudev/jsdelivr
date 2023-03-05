window.onload = function () {
  $('img#logo').attr('src', $_config.page.logo)
  var _0xa4112c = $('.post-body table .client_name')
    .text()
    .replace(/  |\r\n|\n|\r/gm, '')
  $('#invoice .client .info').append(
    '<h3><i class="icon left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="416" cy="152" r="48"/><path d="M416 218.5c-5.4 0-10.6-.7-15.6-1.9L353 264.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 305c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 155.3c-1.3-1.3-3.4-.4-3.4 1.4V376c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V198c-12.1 12.6-29.1 20.5-48 20.5z"/><path d="M349.5 152c0-11.6 3-22.5 8.2-32H79.9c-7.5 0-14.4 2.6-19.8 7L217 286.7c10.4 10.6 24.3 16.4 39.1 16.4s28.7-5.8 39.1-16.4l80.5-81.9c-16-12.2-26.2-31.3-26.2-52.8z"/></svg></i>' +
      _0xa4112c +
      '</h3>'
  )
  var _0x3b02fa = $('.post-body table .client_info').html()
  $('#invoice .client .info').append('<small>' + _0x3b02fa + '</small>')
  var _0x30e5a2 = 0,
    _0x57b2ed = 0
  $('.post-body table tbody.item tr').each(function () {
    var _0x22b9f4 = $('td:nth-child(1)', this)
        .text()
        .replace(/  |\r\n|\n|\r/gm, ''),
      _0x53a28c = $('td:nth-child(2)', this)
        .text()
        .replace(/  |\r\n|\n|\r/gm, '')
        .replaceAll('.', ''),
      _0x3e07d6 = $('td:nth-child(3)', this)
        .text()
        .replace(/  |\r\n|\n|\r/gm, ''),
      _0x28dbf3 = _0x53a28c * _0x3e07d6.split(' ')[0]
    if (_0x22b9f4) {
      var _0x59ec86 = '<tr>'
      _0x59ec86 +=
        '<td><b>' +
        _0x22b9f4 +
        '</b><br/><small>' +
        separator(_0x53a28c, 'RM ') +
        ' x ' +
        _0x3e07d6 +
        '</small></td>'
      _0x59ec86 += '<td>' + separator(_0x28dbf3, 'RM ') + '</td>'
      _0x59ec86 += '</tr>'
      $('#invoice tbody').append(_0x59ec86)
      _0x30e5a2 = _0x30e5a2 + _0x28dbf3
    }
  })
  $('#invoice tfoot').append(
    '<tr><td>' +
      $_config.text.subtotal +
      '</td><td><b>' +
      separator(_0x30e5a2, 'RM ') +
      '</b></td></tr>'
  )
  var _0x587968 = $('.post-body table .discount_val')
    .text()
    .replace(/  |\r\n|\n|\r/gm, '')
  if (_0x587968) {
    _0x587968 = _0x587968.replaceAll('.', '')
    if (_0x587968.includes('%')) {
      _0x587968 = _0x587968.replaceAll('%', '')
      var _0x2963df = (_0x30e5a2 * _0x587968) / 100
      $('#invoice tfoot').append(
        '<tr><td>' +
          $_config.text.discount +
          ' ( ' +
          _0x587968 +
          '% )</td><td><b>- ' +
          separator(_0x2963df, 'RM ') +
          '</b></td>'
      )
      _0x57b2ed = _0x30e5a2 - _0x2963df
    } else {
      $('#invoice tfoot').append(
        '<tr><td>' +
          $_config.text.discount +
          '</td><td><b>- ' +
          separator(_0x587968, 'RM ') +
          '</b></td>'
      )
      _0x57b2ed = _0x30e5a2 - _0x587968
    }
  } else {
    _0x57b2ed = _0x30e5a2
  }
  var _0x6573f = $('.post-body table .tax_val')
    .text()
    .replace(/  |\r\n|\n|\r/gm, '')
  _0x6573f &&
    ((_0x6573f = _0x6573f.replaceAll('%', '')),
    ($tax_count = (_0x57b2ed * _0x6573f) / 100),
    $('#invoice tfoot').append(
      '<tr><td>' +
        $_config.text.tax +
        ' ( ' +
        _0x6573f +
        '% )</td><td><b>' +
        separator($tax_count, 'RM ') +
        '</b></td>'
    ),
    (_0x57b2ed = _0x57b2ed + $tax_count))
  $('#invoice .total h3').html(
    separator(_0x57b2ed, 'RM ') +
      ' <span class="btn small right" data-copy="' +
      _0x57b2ed +
      '" title="' +
      $_config.text.grand_total +
      '">' +
      $_config.text.copy +
      '</span>'
  )
  var _0x5dcfd9 = $('.post-body table .note')
    .text()
    .replace(/  |\r\n|\n|\r/gm, '')
  _0x5dcfd9 &&
    $('#invoice #detail').append(
      "<br/><fieldset class='note' style='padding:15px 20px 20px;border:1px solid var(--key);border-radius:var(--radius);'><legend style='padding:0 10px;background:var(--silver);color:var(--key);'><i class='icon left'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M404.3 86l-202 202c-1.5 1.5-2.3 3.5-2.3 5.6v26.5c0 4.4 3.6 7.9 7.9 7.9h26.3c2.1 0 4.2-.8 5.7-2.3l202.1-202c3.1-3.1 3.1-8.1 0-11.2L415.5 86c-3.1-3.1-8.1-3.1-11.2 0zM475.6 67l-14.4-14.4-.2-.2c-3.1-2.7-7.2-4.4-11.5-4.4-4.4 0-8.5 1.7-11.6 4.5l-11.3 11.4c-1.5 1.6-1.5 4.1 0 5.6L437 79.9l21.7 21.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3c2.8-3.1 4.4-7.1 4.4-11.6-.1-4.4-1.7-8.6-4.5-11.7z'/><g><path d='M250 342c-3 3-7.1 4.7-11.3 4.7H197.3c-8.8 0-16-7.2-16-16V289.2c0-4.2 1.7-8.3 4.7-11.3l.8-.8 147.6-147.6c2.5-2.5.7-6.8-2.8-6.8H90.7C58.3 122.7 32 149 32 181.4v224c0 32.4 26.3 58.7 58.7 58.7h256c32.4 0 58.7-26.3 58.7-58.7v-209c0-3.6-4.3-5.3-6.8-2.8L250.8 341.2l-.8.8z'/></g></svg></i> <b>Catatan :</b></legend><p>" +
        _0x5dcfd9 +
        '</p></fieldset>'
    )
  for (i in $_config.payment) {
    var _0xb6ca84 =
      '<label>        <img src="' +
      $_config.payment[i].img +
      '"/>       <div><div><b style="display:block;margin-bottom:10px;">' +
      i +
      '</b>' +
      $_config.payment[i].number +
      ' <span class="btn small right" data-copy="' +
      $_config.payment[i].number +
      '" title="No. Rekening / Tujuan">' +
      $_config.text.copy +
      '</span><br/><small>A/n. ' +
      $_config.payment[i].name +
      '</small></div></div>        <div><input type="radio" name="payment" value="' +
      i +
      '" required></div>    </label>'
    $('#invoice .payment').append(_0xb6ca84)
  }
  $('#invoice .pay-toggle').on('click', function () {
    $(this).closest('.cta').toggleClass('toggle')
    $('#detail').toggle()
    $('#form').toggle()
    $(window).scrollTop(0)
  })
  $(document).on('click', '[data-copy]', function (_0x1ae5f2) {
    var _0x3afaa5 = $(this).attr('data-copy'),
      _0xe17074 = $(this).text(),
      _0x5f019e = $(this).attr('title')
    $('body').append(
      '<input id="copy" type="text" value="' +
        _0x3afaa5 +
        '" style="position:fixed;bottom:0;right:0;">'
    )
    $('#copy').select()
    document.execCommand('copy')
    notice('<b>' + _0x5f019e + '</b> ' + $_config.text.copied, 1)
    $('#copy').remove()
  })
  $('#invoice form').on('click', 'button', function () {
    !$('#invoice form [name=payment]:checked').val() && $(window).scrollTop(0)
  })
  $('#invoice').on('submit', 'form', function (_0x16d171) {
    _0x16d171.preventDefault()
    if (confirm('Kirim via WhatsApp?')) {
      var _0x24dc00 =
        $_config.text.pay_submit_text
          .replaceAll(
            '[invoice_title]',
            $_config.page.title + ' - ' + $_config.page.name
          )
          .replaceAll(
            '[invoice_payment]',
            $('#invoice form [name=payment]:checked').val()
          ) +
        '            \n\n            via. ' +
        $_config.url.canonical
      location.href =
        'https://api.whatsapp.com/send?phone=' +
        $_config.whatsapp +
        '&text=' +
        encodeURIComponent(_0x24dc00).replaceAll('%20%20', '')
    }
  })
  custom_js()
}
function separator(_0x4cbc68, _0x37f207 = '') {
  var _0xaa8267 = '',
    _0x4221c9 = _0x4cbc68.toString().split('').reverse().join('')
  for (var _0x5a4946 = 0; _0x5a4946 < _0x4221c9.length; _0x5a4946++) {
    if (_0x5a4946 % 3 == 0) {
      _0xaa8267 += _0x4221c9.substr(_0x5a4946, 3) + '.'
    }
  }
  return _0x37f207
    ? _0x37f207 +
        ' ' +
        _0xaa8267
          .split('', _0xaa8267.length - 1)
          .reverse()
          .join('')
    : _0xaa8267
        .split('', _0xaa8267.length - 1)
        .reverse()
        .join('')
}
var timeout_notice
function notice(_0xef1d9a, _0x4fdc25 = '', _0xb6ae0b = 3000) {
  $('#notice').remove()
  window.clearTimeout(timeout_notice)
  var _0x45bdfa = '    <div id="notice">        <p></p>    </div>    '
  $('body').append(_0x45bdfa)
  $('#notice p').html(_0xef1d9a)
  setTimeout(function () {
    $('#notice').addClass('open')
  }, 100)
  timeout_notice = window.setTimeout(function () {
    $('#notice').removeClass('open')
    setTimeout(function () {
      $('#notice').remove()
    }, 100)
  }, _0xb6ae0b)
  $('#notice').on('click', function () {
    $(this).removeClass('open')
  })
}
function share() {
  navigator.share
    ? navigator
        .share({
          title: $_config.page.title,
          text: $_config.page.title + ' - ' + $_config.page.name,
          url: $_config.url.canonical,
        })
        .then(() => console.log('Successful share'))
        .catch((_0x3162b8) => console.log('Error share', _0x3162b8))
    : notice('* Fitur share tidak tersedia pada mode web-view..')
}
