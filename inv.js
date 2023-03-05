// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
window.onload = function() {
  $("img#logo").attr("src", $_config.page.logo);
  var inSourceThemeName = $(".post-body table .client_name").text().replace(/  |\r\n|\n|\r/gm, "");
  $("#invoice .client .info").append('<h3><i class="icon left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="416" cy="152" r="48"/><path d="M416 218.5c-5.4 0-10.6-.7-15.6-1.9L353 264.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 305c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 155.3c-1.3-1.3-3.4-.4-3.4 1.4V376c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V198c-12.1 12.6-29.1 20.5-48 20.5z"/><path d="M349.5 152c0-11.6 3-22.5 8.2-32H79.9c-7.5 0-14.4 2.6-19.8 7L217 286.7c10.4 10.6 24.3 16.4 39.1 16.4s28.7-5.8 39.1-16.4l80.5-81.9c-16-12.2-26.2-31.3-26.2-52.8z"/></svg></i>' + 
  inSourceThemeName + "</h3>");
  var _0x3b02fa = $(".post-body table .client_info").html();
  $("#invoice .client .info").append("<small>" + _0x3b02fa + "</small>");
  var max = 0;
  var d = 0;
  $(".post-body table tbody.item tr").each(function() {
    var inSourceThemeName = $("td:nth-child(1)", this).text().replace(/  |\r\n|\n|\r/gm, "");
    var value = $("td:nth-child(2)", this).text().replace(/  |\r\n|\n|\r/gm, "").replaceAll(".", "");
    var analyzer_name = $("td:nth-child(3)", this).text().replace(/  |\r\n|\n|\r/gm, "");
    var p = value * analyzer_name.split(" ")[0];
    if (inSourceThemeName) {
      var photoText = "<tr>";
      photoText = photoText + ("<td><b>" + inSourceThemeName + "</b><br/><small>" + separator(value, "RM ") + " x " + analyzer_name + "</small></td>");
      photoText = photoText + ("<td>" + separator(p, "RM ") + "</td>");
      photoText = photoText + "</tr>";
      $("#invoice tbody").append(photoText);
      max = max + p;
    }
  });
  $("#invoice tfoot").append("<tr><td>" + $_config.text.subtotal + "</td><td><b>" + separator(max, "RM ") + "</b></td></tr>");
  var value = $(".post-body table .discount_val").text().replace(/  |\r\n|\n|\r/gm, "");
  if (value) {
    value = value.replaceAll(".", "");
    if (value.includes("%")) {
      value = value.replaceAll("%", "");
      var min = max * value / 100;
      $("#invoice tfoot").append("<tr><td>" + $_config.text.discount + " ( " + value + "% )</td><td><b>- " + separator(min, "RM ") + "</b></td>");
      d = max - min;
    } else {
      $("#invoice tfoot").append("<tr><td>" + $_config.text.discount + "</td><td><b>- " + separator(value, "RM ") + "</b></td>");
      d = max - value;
    }
  } else {
    d = max;
  }
  var h = $(".post-body table .tax_val").text().replace(/  |\r\n|\n|\r/gm, "");
  if (h) {
    h = h.replaceAll("%", "");
    $tax_count = d * h / 100;
    $("#invoice tfoot").append("<tr><td>" + $_config.text.tax + " ( " + h + "% )</td><td><b>" + separator($tax_count, "RM ") + "</b></td>");
    d = d + $tax_count;
  }
  $("#invoice .total h3").html(separator(d, "RM ") + ' <span class="btn small right" data-copy="' + d + '" title="' + $_config.text.grand_total + '">' + $_config.text.copy + "</span>");
  var spaceless_message = $(".post-body table .note").text().replace(/  |\r\n|\n|\r/gm, "");
  if (spaceless_message) {
    $("#invoice #detail").append("<br/><fieldset class='note' style='padding:15px 20px 20px;border:1px solid var(--key);border-radius:var(--radius);'><legend style='padding:0 10px;background:var(--silver);color:var(--key);'><i class='icon left'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M404.3 86l-202 202c-1.5 1.5-2.3 3.5-2.3 5.6v26.5c0 4.4 3.6 7.9 7.9 7.9h26.3c2.1 0 4.2-.8 5.7-2.3l202.1-202c3.1-3.1 3.1-8.1 0-11.2L415.5 86c-3.1-3.1-8.1-3.1-11.2 0zM475.6 67l-14.4-14.4-.2-.2c-3.1-2.7-7.2-4.4-11.5-4.4-4.4 0-8.5 1.7-11.6 4.5l-11.3 11.4c-1.5 1.6-1.5 4.1 0 5.6L437 79.9l21.7 21.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3c2.8-3.1 4.4-7.1 4.4-11.6-.1-4.4-1.7-8.6-4.5-11.7z'/><g><path d='M250 342c-3 3-7.1 4.7-11.3 4.7H197.3c-8.8 0-16-7.2-16-16V289.2c0-4.2 1.7-8.3 4.7-11.3l.8-.8 147.6-147.6c2.5-2.5.7-6.8-2.8-6.8H90.7C58.3 122.7 32 149 32 181.4v224c0 32.4 26.3 58.7 58.7 58.7h256c32.4 0 58.7-26.3 58.7-58.7v-209c0-3.6-4.3-5.3-6.8-2.8L250.8 341.2l-.8.8z'/></g></svg></i> <b>Catatan :</b></legend><p>" + 
    spaceless_message + "</p></fieldset>");
  }
  for (i in $_config.payment) {
    var photoText = '<label>        <img src="' + $_config.payment[i].img + '"/>       <div><div><b style="display:block;margin-bottom:10px;">' + i + "</b>" + $_config.payment[i].number + ' <span class="btn small right" data-copy="' + $_config.payment[i].number + '" title="No. Rekening / Tujuan">' + $_config.text.copy + "</span><br/><small>A/n. " + $_config.payment[i].name + '</small></div></div>        <div><input type="radio" name="payment" value="' + i + '" required></div>    </label>';
    $("#invoice .payment").append(photoText);
  }
  $("#invoice .pay-toggle").on("click", function() {
    $(this).closest(".cta").toggleClass("toggle");
    $("#detail").toggle();
    $("#form").toggle();
    $(window).scrollTop(0);
  });
  $(document).on("click", "[data-copy]", function(canCreateDiscussions) {
    var data_copy = $(this).attr("data-copy");
    var _0xe17074 = $(this).text();
    var successToast = $(this).attr("title");
    $("body").append('<input id="copy" type="text" value="' + data_copy + '" style="position:fixed;bottom:0;right:0;">');
    $("#copy").select();
    document.execCommand("copy");
    notice("<b>" + successToast + "</b> " + $_config.text.copied, 1);
    $("#copy").remove();
  });
  $("#invoice form").on("click", "button", function() {
    if (!$("#invoice form [name=payment]:checked").val()) {
      $(window).scrollTop(0);
    }
  });
  $("#invoice").on("submit", "form", function(event) {
    event.preventDefault();
    if (confirm("Kirim via WhatsApp?")) {
      var str = $_config.text.pay_submit_text.replaceAll("[invoice_title]", $_config.page.title + " - " + $_config.page.name).replaceAll("[invoice_payment]", $("#invoice form [name=payment]:checked").val()) + "            \n\n            via. " + $_config.url.canonical;
      location.href = "https://api.whatsapp.com/send?phone=" + $_config.whatsapp + "&text=" + encodeURIComponent(str).replaceAll("%20%20", "");
    }
  });
  custom_js();
};
function separator(num, path = "") {
  var errbuffer = "";
  var authorizationHeader = num.toString().split("").reverse().join("");
  var lastStringStartingBoundary = 0;
  for (; lastStringStartingBoundary < authorizationHeader.length; lastStringStartingBoundary++) {
    if (lastStringStartingBoundary % 3 == 0) {
      errbuffer = errbuffer + (authorizationHeader.substr(lastStringStartingBoundary, 3) + ".");
    }
  }
  return path ? path + " " + errbuffer.split("", errbuffer.length - 1).reverse().join("") : errbuffer.split("", errbuffer.length - 1).reverse().join("");
}
var timeout_notice;
function notice(text, rationale = "", renewTokenIn = 3000) {
  $("#notice").remove();
  window.clearTimeout(timeout_notice);
  var photoText = '    <div id="notice">        <p></p>    </div>    ';
  $("body").append(photoText);
  $("#notice p").html(text);
  setTimeout(function() {
    $("#notice").addClass("open");
  }, 100);
  timeout_notice = window.setTimeout(function() {
    $("#notice").removeClass("open");
    setTimeout(function() {
      $("#notice").remove();
    }, 100);
  }, renewTokenIn);
  $("#notice").on("click", function() {
    $(this).removeClass("open");
  });
}
function share() {
  if (navigator.share) {
    navigator.share({
      title : $_config.page.title,
      text : $_config.page.title + " - " + $_config.page.name,
      url : $_config.url.canonical
    }).then(() => {
      return console.log("Successful share");
    }).catch((contextReference) => {
      return console.log("Error share", contextReference);
    });
  } else {
    notice("* Fitur share tidak tersedia pada mode web-view..");
  }
}
