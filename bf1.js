window.onload = function() {
  etc();
  slideshow();
  product_convert();
  product_sort();
  shortcode();
  cart();
  lazyload();
  lightbox();
  pop();
  popwin();
  timeago();
  translate();
  custom_js();
};
function cart() {
  function callback() {
    if (window.localStorage) {
      localStorage.cart = JSON.stringify(data);
    }
  }
  function render() {
    $("#cart .list").empty();
    if (data.length == 0) {
      $("#cart .list_n_form, #cart .cta").hide();
      $("#cart-btn").removeClass("open");
      $("#cart .empty").show();
      return;
    }
    $("#cart .list_n_form, #cart .cta").show();
    $("#cart-btn").addClass("open");
    $("#cart .empty").hide();
    var count = 0;
    var seconds = 0;
    var row = 0;
    var i;
    for (i in data) {
      var item = data[i];
      var arrowDiv = '                <div class="item" data-id="' + item.id + '" data-index="' + i + '">                    <div class="left">                        <b class="title">' + item.title + "</b>                        <br>                        " + (item.variant ? item.variant.label + ' : <b class="variant">' + item.variant.value + "</b><br>" : "") + '                        <input class="note" type="text" placeholder="+ ' + $_config.text.cart_note + '.." value="' + (item.note ? item.note : 
      "") + '">                        <b class="total">' + format_currency(item.price) + "</b>" + (item.unit ? ' <span class="unit">/' + item.unit + "</span>" : "") + '                    </div>                    <div class="right">                        <a class="link" href="' + item.link + '">                            <img class="img" src="' + item.img + '"/>                            ' + (item.weight ? '<small class="weight" title="' + $_config.text.cart_weight + '">' + kg(item.weight) + 
      "</small>" : "") + '                        </a>                        <fieldset class="qty">                            <button type="button">-</button>                            <input type="number" value="' + item.qty + '">                            <button type="button">+</button>                        </fieldset>                    </div>                </div>';
      $("#cart .list").prepend(arrowDiv);
      count = count + Number(item.qty);
      seconds = seconds + Number(item.price * item.qty);
      row = row + Number(item.weight * item.qty);
    }
    $("#cart .cta .subtotal .wrap .grid.weight").remove();
    if (row > 0) {
      $("#cart .cta .subtotal .wrap").prepend('                <div class="grid weight">                    <span>                        ' + $_config.text.cart_weight + "                    </span>                    <b>" + kg(row) + "</b>                </div>            ");
      $("#cart [name=shipping]").show().removeAttr("disabled");
      $("#cart [name=shipping]").prev(".detail").show();
    } else {
      $("#cart [name=shipping]").hide().attr("disabled", true);
      $("#cart [name=shipping]").prev(".detail").hide();
    }
    $("#cart .cta .subtotal .qty, #cart-btn .qty").text(count);
    $("#cart .cta .subtotal .sub, #cart-btn .sub").text(format_currency(seconds));
    $("#cart-btn").removeClass("open");
    setTimeout(function() {
      $("#cart-btn").addClass("open");
    }, 100);
  }
  var photoText = '        <fieldset>            <input type="text" name="name" placeholder="' + $_config.text.checkout_name + '" required>            <input type="tel" name="phone" placeholder="' + $_config.text.checkout_phone + '" required>        </fieldset>    ';
  if ($_config.checkout_form.email) {
    photoText = photoText + ('            <input type="email" name="email" placeholder="' + $_config.text.checkout_email + '" required>        ');
  }
  if ($_config.checkout_form.address) {
    photoText = photoText + ('            <textarea name="address" placeholder="' + $_config.text.checkout_address + '" required></textarea>        ');
  }
  if ($_config.checkout_form.note) {
    photoText = photoText + ('            <textarea name="note" placeholder="' + $_config.text.checkout_note + '"></textarea>        ');
  }
  if ($_config.checkout_form.shipping) {
    photoText = photoText + ('            <select name="shipping" required>                <option value="" selected hidden>' + $_config.text.checkout_shipping + '</option>                <optgroup label="' + $_config.text.checkout_shipping + ' :">        ');
    var name;
    for (name in $_config.checkout_form_shipping) {
      var cookie = $_config.checkout_form_shipping[name];
      if (cookie.status == true) {
        $('<img src="' + cookie.img + '"/>').on("load", function() {
        });
        photoText = photoText + ('                    <option value="' + name + '" data-info="' + cookie.info + '" data-img="' + cookie.img + '">                        ' + name + "                    </option>                ");
      }
    }
    photoText = photoText + "                </optgroup>            </select>        ";
  }
  if ($_config.checkout_form.payment) {
    $("#contact").append('<p class="shippay"><b>' + $_config.text.checkout_payment + " :</b></p>");
    photoText = photoText + ('            <select name="payment" required>                <option value="" selected hidden>' + $_config.text.checkout_payment + '</option>                <optgroup label="' + $_config.text.checkout_payment + ' :">        ');
    for (name in $_config.checkout_form_payment) {
      var cookie = $_config.checkout_form_payment[name];
      if (cookie.status == true) {
        $("#contact .shippay").append('<figure><img alt="' + name + '" src="' + cookie.img + '" width="24" height="24"/><figcaption>' + name + "</figcaption></figure>");
        $('<img src="' + cookie.img + '"/>').on("load", function() {
        });
        photoText = photoText + ('                    <option value="' + name + '" data-info="' + cookie.info + '" data-img="' + cookie.img + '">                        ' + name + "                    </option>                ");
      }
    }
    photoText = photoText + "                </optgroup>            </select>        ";
  }
  $("#cart .form").append(photoText);
  $("#cart .form").on("change", "select", function() {
    var start = $(this);
    var _0x5d6bad = start.val();
    var element = $("option:selected", start);
    var geo = element.attr("data-info");
    var image = element.attr("data-img");
    start.prev(".detail").remove();
    $('<img src="' + image + '"/>').on("load", function() {
      $('                <div class="detail">                    <img src="' + image + '">                    <h4>' + _0x5d6bad + "</h4>                    <p>" + geo + "</p>                </div>            ").insertBefore(start).hide().fadeIn();
    });
  });
  $("#cart .form").on("click", ".detail", function() {
    $(this).next("select").focus();
  });
  var data = [];
  if (localStorage.cart) {
    data = JSON.parse(localStorage.cart);
    render();
  }
  $(".product").on("click", ".cart-add", function() {
    var goalBox = $(this).closest(".product");
    var val = Number(goalBox.attr("id"));
    var imgSrc = $(".img", goalBox).attr("src");
    var url = location.href;
    var shortfilename = $(".title", goalBox).text().replace(/\n/g, "").replaceAll("  ", "");
    var propVal = "";
    var price = Number($(".price b", goalBox).attr("data-price"));
    var actual = Number($(".price", goalBox).attr("data-weight"));
    var unit = $(".price", goalBox).attr("data-unit");
    var step = Number($(".qty input", goalBox).val());
    if ($(".variant", goalBox).length && $(".variant button.active", goalBox).length) {
      val = val + "|" + $(".variant label", goalBox).text().replace(/\n/g, "").replaceAll("  ", "") + " : " + $(".variant button.active", goalBox).text().replace(/\n/g, "").replaceAll("  ", "");
      propVal = {
        label : $(".variant label", goalBox).text().replace(/\n/g, "").replaceAll("  ", ""),
        value : $(".variant button.active", goalBox).text().replace(/\n/g, "").replaceAll("  ", "")
      };
    }
    $("#cart-btn").removeClass("open");
    setTimeout(function() {
      $("#cart-btn").addClass("open");
    }, 100);
    var i;
    for (i in data) {
      if (data[i].id == val) {
        data[i].qty = step;
        callback();
        render();
        return;
      }
    }
    var metadata = {
      id : val,
      img : imgSrc,
      title : shortfilename,
      link : url,
      variant : propVal,
      price : price,
      weight : actual,
      unit : unit,
      qty : step
    };
    data.push(metadata);
    callback();
    render();
  });
  $("#cart-btn, .cart-btn-head").on("click", function() {
    $("#cart").addClass("open");
    $("body").css("overflow", "hidden");
  });
  $("#cart-close").on("click", function() {
    $("#cart").removeClass("open");
    $("body").css("overflow", "auto");
  });
  $("#cart").on("click", ".qty button", function() {
    var prev_form = $(this).closest(".item");
    var cur_mins = Number($(".qty input", prev_form).val());
    if ($(this).text() == "-") {
      cur_mins = cur_mins - 1;
    } else {
      cur_mins = cur_mins + 1;
    }
    $(".qty input", prev_form).val(cur_mins).trigger("change");
  });
  $("#cart").on("change", ".item .qty input", function() {
    var $this = $(this).closest(".item");
    var i = $this.attr("data-index");
    var cur_mins = Number($(this).val());
    if (cur_mins > 0) {
      data[i].qty = cur_mins;
      callback();
      render();
      return;
    } else {
      if (!confirm($_config.text.cart_remove)) {
        cur_mins = 1;
        $(".qty input", $this).val(cur_mins).trigger("change");
      } else {
        data.splice(i, 1);
        callback();
        render();
      }
    }
  });
  $("#cart").on("change", ".item .note", function() {
    var $stepDiv = $(this).closest(".item");
    var i = $stepDiv.attr("data-index");
    var n = $(this).val();
    data[i].note = n;
    callback();
    render();
  });
  var params = {};
  $("#cart").on("change", "[name]", function() {
    var name = $(this).attr("name");
    var res = $(this).val();
    if (name != "note" && name != "shipping" && name != "payment") {
      params[name] = res;
      localStorage.buyer = JSON.stringify(params);
    }
  });
  if (localStorage.buyer) {
    params = JSON.parse(localStorage.buyer);
    var i;
    for (i in params) {
      $("#cart .form [name=" + i + "]").val(params[i]).trigger("change");
    }
  }
  $("#cart").on("submit", function(event) {
    event.preventDefault();
    if (!confirm($_config.text.checkout_confirm)) {
      return;
    } else {
      var $scope = {
        _0x182da3 : _0x48ddbe
      };
      $("[name]:visible", this).each(function() {
        var versionByName = $(this).attr("name");
        var _0x48ddbe = $(this).val();
      });
      var url = $_config.text.checkout_intro + "\n\n";
      var pointsPossible = 0;
      var start = 0;
      var row = 0;
      var _0xcda33b = 0;
      var i;
      for (i in data) {
        _0xcda33b++;
        var item = data[i];
        url = url + ("                    " + (data.length > 1 ? _0xcda33b + ". " : "") + "*" + item.title + "*\n\n                    " + (item.variant ? "[tab]" + item.variant.label + " : *" + item.variant.value + "*\n" : "") + "                    [tab]" + $_config.text.cart_qty_n_price + " : *" + item.qty + "* x " + format_currency(item.price) + " = *" + format_currency(item.price * item.qty) + "*\n                    [tab]" + $_config.text.cart_note + " : " + (item.note ? "*" + item.note + "*" : 
        "-") + "\n                    \n                ");
        pointsPossible = pointsPossible + Number(item.qty);
        start = start + Number(item.price * item.qty);
        row = row + Number(item.weight * item.qty);
      }
      url = url + ("                \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014\n                \n                " + (row ? $_config.text.cart_weight + " = *" + kg(row) + "*\n" : "") + "                " + $_config.text.cart_total + " ( " + pointsPossible + " " + $_config.text.cart_order + " ) = *" + format_currency(start) + "*\n                \n                \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014\n                \n                \ud83d\udccb " + 
      $_config.text.checkout_info + " :\n                \n                *" + $scope.name + "* ( " + $scope.phone + " )\n                \n                " + ($scope.email ? "*" + $_config.text.checkout_email + "* : " + $scope.email + "\n\n" : "") + "                " + ($scope.address ? "*" + $_config.text.checkout_address + "* :\n\n" + $scope.address + "\n\n" : "") + "                *" + $_config.text.checkout_note + "* : " + ($scope.note ? "\n\n" + $scope.note : "-") + "\n\n                " + 
      ($scope.shipping ? "*" + $_config.text.checkout_shipping + "* : " + $scope.shipping + "\n" + $_config.checkout_form_shipping[$scope.shipping].info + "\n\n" : "") + "                " + ($scope.payment ? "*" + $_config.text.checkout_payment + "* : " + $scope.payment + "\n" + $_config.checkout_form_payment[$scope.payment].info + "\n\n" : "") + "                via. " + location.protocol + "//" + location.hostname + "            ");
      url = url.replaceAll("  ", "").replaceAll("[tab]", "    ");
      url = encodeURIComponent(url);
      var redirectUrl = "https://api.whatsapp.com/send?phone=" + $_config.whatsapp + "&text=" + url;
      localStorage.removeItem("cart");
      location.href = redirectUrl;
    }
  });
}
function slideshow() {
  $(".slideshow").each(function() {
    var $el = $(this);
    var rumbleSpeed = 4000;
    var viewPart = parseInt($el.attr("data-delay"));
    var milliseconds = 1000;
    var fraction = parseInt($el.attr("data-fade"));
    var rumbleInterval;
    if (viewPart.length) {
      rumbleSpeed = viewPart;
    }
    if (fraction.length) {
      milliseconds = fraction;
    }
    if ($(".slideshow-item, .widget", $el).length > 1) {
      rumbleInterval = setInterval(function() {
        $(".slideshow-item:visible, .widget:visible", $el).each(function() {
          var socialButton = $(this);
          socialButton.hide();
          if (socialButton.next(".slideshow-item, .widget").length) {
            socialButton.next(".slideshow-item, .widget").fadeIn(milliseconds);
          } else {
            socialButton.closest(".slideshow").find(".slideshow-item, .widget").first().fadeIn(milliseconds);
          }
        });
      }, rumbleSpeed);
      $(this).append('  <button class="nav-left" aria-label="Navigation">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right" aria-label="Navigation">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   ');
    }
    $(".nav-left", $el).on("click", function() {
      clearInterval(rumbleInterval);
      $(".slideshow-item:visible, .widget:visible", $el).each(function() {
        var socialButton = $(this);
        socialButton.hide();
        if (socialButton.prev(".slideshow-item, .widget").length) {
          socialButton.prev(".slideshow-item, .widget").fadeIn(milliseconds);
        } else {
          socialButton.closest(".slideshow").find(".slideshow-item, .widget").last().fadeIn(milliseconds);
        }
      });
    });
    $(".nav-right", $el).on("click", function() {
      clearInterval(rumbleInterval);
      $(".slideshow-item:visible, .widget:visible", $el).each(function() {
        var socialButton = $(this);
        socialButton.hide();
        if (socialButton.next(".slideshow-item, .widget").length) {
          socialButton.next(".slideshow-item, .widget").fadeIn(milliseconds);
        } else {
          socialButton.closest(".slideshow").find(".slideshow-item, .widget").first().fadeIn(milliseconds);
        }
      });
    });
  });
}
function product_sort() {
  $("#sort select").on("change", function() {
    $("#sort").addClass("loading");
    if ($(this).val() == "terbaru") {
      var inputel = $(".Blog article");
      inputel.sort(function(ItemElem, fleetBox) {
        return (new Date($('[itemprop="releaseDate"]', fleetBox).attr("content"))).getTime() - (new Date($('[itemprop="releaseDate"]', ItemElem).attr("content"))).getTime();
      });
      setTimeout(function() {
        $(".Blog .is_loop").append(inputel);
        $("#sort").removeClass("loading");
        lazyload();
      }, 500);
    }
    if ($(this).val() == "terlama") {
      inputel = $(".Blog article");
      inputel.sort(function(ItemElem, fleetBox) {
        return (new Date($('[itemprop="releaseDate"]', ItemElem).attr("content"))).getTime() - (new Date($('[itemprop="releaseDate"]', fleetBox).attr("content"))).getTime();
      });
      setTimeout(function() {
        $(".Blog .is_loop").append(inputel);
        $("#sort").removeClass("loading");
        lazyload();
      }, 500);
    }
    if ($(this).val() == "terendah") {
      inputel = $(".Blog article");
      inputel.sort(function(ItemElem, fleetBox) {
        return $(".price b", ItemElem).attr("data-price") - $(".price b", fleetBox).attr("data-price");
      });
      setTimeout(function() {
        $(".Blog .is_loop").append(inputel);
        $("#sort").removeClass("loading");
        lazyload();
      }, 500);
    }
    if ($(this).val() == "tertinggi") {
      inputel = $(".Blog article");
      inputel.sort(function(ItemElem, fleetBox) {
        return $(".price b", fleetBox).attr("data-price") - $(".price b", ItemElem).attr("data-price");
      });
      setTimeout(function() {
        $(".Blog .is_loop").append(inputel);
        $("#sort").removeClass("loading");
        lazyload();
      }, 500);
    }
  });
  if ($("#sort select").val() != "") {
    $("#sort select").trigger("change");
  }
}
function product_convert() {
  $(".product:not(.field_loaded)").each(function() {
    var item = $(this);
    item.addClass("field_loaded");
    $('meta[itemprop="priceCurrency"]', item).attr("content", $_config.money.currency);
    if (item.hasClass("is_post") && $(".image .gallery", this).length) {
      $(".image .gallery img", this).each(function(canCreateDiscussions) {
        var originalBaseURL = $(this).attr("src").split("=")[0];
        var inputRegExp = originalBaseURL.split("/")[7];
        var _0x12a5ea = originalBaseURL.replace(inputRegExp, "w150-h150-c") + "=w150-h150-c";
        var _0x1992fb = originalBaseURL.replace(inputRegExp, "s800") + "=s800";
        $("figure.cover", item).append('<a data-lightbox="gallery" data-lightbox-title="' + $(".title", item).text() + '" href="' + _0x1992fb + '"><img data-src="' + _0x12a5ea + '"/></a>');
      });
    }
    var data = {};
    $(".field td[class]", item).each(function() {
      var a = $(this).attr("class");
      if (a != "img") {
        data[a] = $(this).text().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("%", "").replaceAll(/(?:\r\n|\r|\n)/g, "");
      }
    });
    if (data.status == "off") {
      item.addClass("empty");
      $("figure.cover a:first", item).append('<span class="empty"><b>' + $_config.text.product_empty + "</b></span>");
      $('[itemprop="availability"]', item).attr("content", "https://schema.org/OutOfStock");
    }
    var breadCrumbList = '            <div class="price" data-price="' + Number(data.price) + '" data-discount="' + Number(data.discount) + '" data-unit="' + data.unit + '" data-weight="' + Number(data.weight) + '"></div>        ';
    if (item.hasClass("is_post")) {
      breadCrumbList = breadCrumbList + '                <br>                <div class="option">            ';
      var _item = $(".variant", item);
      if ($(".status", _item).text() == "on") {
        breadCrumbList = breadCrumbList + ('                    <div class="item variant">                        <label>                            ' + $(".label", _item).text() + "                        </label>                        <fieldset>                ");
        $(".name", _item).each(function() {
          if ($(this).text()) {
            breadCrumbList = breadCrumbList + ("                            <button " + ($(this).next(".price").text() ? 'data-price="' + $(this).next(".price").text().replaceAll(".", "").replaceAll(",", "") + '"' : "") + ">" + $(this).text() + "</button>                        ");
          }
        });
        breadCrumbList = breadCrumbList + "                        </fieldset>                    </div>                ";
      }
      breadCrumbList = breadCrumbList + ('                <div class="item qty">                    <label>                        ' + $_config.text.product_qty + '                    </label>                    <fieldset>                        <button>-</button>                        <input type="number" value="1">                        <button>+</button>                    </fieldset>                </div>            ');
      breadCrumbList = breadCrumbList + ('                </div>                <div class="cta ' + (data.status == "off" ? "disabled" : "") + '">                    <button class="chat" target="pop-chat">                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">                            <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>                        </svg>                    </button>            ');
      breadCrumbList = breadCrumbList + ('                <button class="cart-add">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">                        <path d="M387.9 373.7h49.2l17.5-75.4h-66.7zM387.9 448h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448zM265.4 392.5h103.7V448H265.4zM75 373.7h49v-75.4H57.5zM142.9 192h103.7v87.5H142.9zM265.4 192h103.7v87.5H265.4zM85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8zM142.9 392.5h103.7V448H142.9zM265.4 298.3h103.7v75.4H265.4zM142.9 298.3h103.7v75.4H142.9z" />                        <path d="M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z" />                    </svg>                    ' + 
      $_config.text.product_add + "                </button>            ");
      breadCrumbList = breadCrumbList + "                </div>            ";
      if (data.status == "on") {
        var _item = $(".marketplace", item);
        if ($(".status", _item).text() == "on") {
          breadCrumbList = breadCrumbList + ('                        <div class="marketplace">                            <small>' + $_config.text.product_via_marketplace + "</small>                            <br>                    ");
          $(".link", _item).each(function() {
            if ($(this).text()) {
              breadCrumbList = breadCrumbList + ('                                <a href="' + $(this).text() + '" target="_blank" title="' + $(this).text().split("/")[2].toLowerCase().replace("www.", "") + '" rel="nofollow">                                    <img src="https://www.google.com/s2/favicons?domain=' + $(this).text().split("/")[2] + '&sz=24" alt="favicon"/>                                </a>                            ');
            }
          });
          breadCrumbList = breadCrumbList + "                        </div>                    ";
        }
      }
    }
    var wRow = $(".title", this);
    $(breadCrumbList).insertAfter(wRow);
    item = $(this);
    var unit = $(".price", item).attr("data-unit");
    var i = Number($(".price", item).attr("data-price"));
    var springFactor = Number($(".price", item).attr("data-discount"));
    if (springFactor) {
      var row = i - i * springFactor / 100;
      $(".price", item).html("<small>-" + springFactor + "%</small><s>" + format_currency(i) + '</s><b data-price="' + row + '">' + format_currency(row) + "</b>" + (unit ? "<span>/" + unit + "</span>" : ""));
      $('[itemprop="price"]', this).attr("content", row);
    } else {
      $(".price", item).html('<b data-price="' + i + '">' + format_currency(i) + "</b>" + (unit ? "<span>/" + unit + "</span>" : ""));
      $('[itemprop="price"]', this).attr("content", i);
    }
    $(".variant button", item).each(function() {
      var priceString = $(this).attr("data-price");
      if (!priceString) {
        var classesLine = $(".price", item).attr("data-price");
        $(this).attr("data-price", classesLine);
      }
    });
    $(".variant button", item).on("click", function() {
      $(".variant button", item).removeClass("active");
      $(this).addClass("active");
      var i = $(this).attr("data-price");
      if (i) {
        if (springFactor) {
          var row = i - i * springFactor / 100;
          $(".price", item).html("<small>-" + springFactor + "%</small><s>" + format_currency(i) + '</s><b data-price="' + row + '">' + format_currency(row) + "</b>" + (unit ? "<span>/" + unit + "</span>" : ""));
          $('[itemprop="price"]', this).attr("content", row);
        } else {
          $(".price", item).html('<b data-price="' + i + '">' + format_currency(i) + "</b>" + (unit ? "<span>/" + unit + "</span>" : ""));
          $('[itemprop="price"]', this).attr("content", i);
        }
      }
    });
    $(".variant button:first", item).trigger("click");
    $(".qty input", item).on("change", function() {
      var cur_mins = Number($(".qty input", item).val());
      if (cur_mins < 1) {
        cur_mins = 1;
      }
      $(".qty input", item).val(cur_mins);
    });
    $(".qty button", item).on("click", function() {
      var cur_mins = Number($(".qty input", item).val());
      if ($(this).text() == "-") {
        cur_mins = cur_mins - 1;
      } else {
        cur_mins = cur_mins + 1;
      }
      $(".qty input", item).val(cur_mins).trigger("change");
    });
  });
}
function popwin(error = "", status = "", message = "") {
  if (error) {
    var type = error;
    var calculateSectionStatus = 960;
    if (status) {
      calculateSectionStatus = status;
    }
    var ongoingMessage = 540;
    if (message) {
      ongoingMessage = message;
    }
    var y = Number(screen.width / 2 - calculateSectionStatus / 2);
    var enc_length = Number(screen.height / 2 - ongoingMessage / 2);
    var expressionInput = window.open(type, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" + calculateSectionStatus + ", height=" + ongoingMessage + ", top=" + enc_length + ", left=" + y);
    expressionInput.focus();
  } else {
    $(document).on("click", '[target="_popwin"]', function(event) {
      event.stopPropagation();
      event.preventDefault();
      var svurl = $(this).attr("href");
      var viewportCenter = $(this).attr("data-popwin-width");
      var width = $(this).attr("data-popwin-height");
      var interestingPoint = 960;
      if (viewportCenter) {
        interestingPoint = viewportCenter;
      }
      var whatToScale = 540;
      if (width) {
        whatToScale = width;
      }
      var y = Number(screen.width / 2 - interestingPoint / 2);
      var enc_length = Number(screen.height / 2 - whatToScale / 2);
      var expressionInput = window.open(svurl, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" + interestingPoint + ", height=" + whatToScale + ", top=" + enc_length + ", left=" + y);
      expressionInput.focus();
    });
  }
}
function shortcode() {
  $(".post-body").each(function() {
    $(this).html($(this).html().replace(/\[youtube\]/g, '<div class="video"><iframe allowfullscreen="true" data-shortcode="youtube" data-src="').replace(/\[\/youtube\]/g, '"></iframe></div>').replace(/\[code\]/g, '<pre data-shortcode="code"><code>').replace(/\[\/code\]/g, "</code></pre>").replace(/\[img\]/g, '<img style="display:block;width:100%;border-radius:10px;" data-shortcode="img" src="').replace(/\[\/img\]/g, '" alt="image"/>').replace(/\[url\]/g, '<a data-shortcode="url" href="').replace(/\[\/url\]/g, 
    '" target="_blank" rel="nofollow external">Lihat Tautan</a>'));
  });
  $("[data-shortcode]").each(function() {
    var type = $(this).attr("data-shortcode");
    if (type == "img") {
      var srcAngle = $(this).attr("src");
      $(this).wrap('<a class="lightbox" href="' + srcAngle + '"></a>');
    }
    if (type == "youtube") {
      var source = $(this).attr("data-src");
      var content = source.split("/")[3];
      if (source.indexOf("https://www.youtube.com/watch?v=") >= 0) {
        content = get_url_parameter("v", source);
      }
      $(this).attr("data-src", "https://www.youtube.com/embed/" + content + "?rel=0");
    }
  });
}
function translate() {
  $("[data-text]").each(function() {
    var i = $(this).attr("data-text");
    if ($_config.text[i]) {
      $(this).text($_config.text[i]);
    } else {
      $(this).text(i);
    }
  });
  $("[data-text-label]").each(function() {
    var i = $(this).attr("data-text-label");
    if ($_config.text[i]) {
      $(this).attr("label", $_config.text[i]);
    } else {
      $(this).attr("label", i);
    }
  });
  $("[data-text-placeholder]").each(function() {
    var i = $(this).attr("data-text-placeholder");
    if ($_config.text[i]) {
      $(this).attr("placeholder", $_config.text[i]);
    } else {
      $(this).attr("placeholder", i);
    }
  });
  $("[data-text-pop-title]").each(function() {
    var i = $(this).attr("data-text-pop-title");
    if ($_config.text[i]) {
      $(this).attr("data-pop-title", $_config.text[i]);
    } else {
      $(this).attr("data-pop-title", i);
    }
  });
}
function etc() {
  $(window).on("beforeunload", function() {
    $("body").addClass("loading");
    setTimeout(function() {
      $("body").removeClass("loading");
    }, 2000);
  });
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("shadow");
    } else {
      $("#header").removeClass("shadow");
    }
  });
  $("#header a[target=pop-search]").on("click", function() {
    setTimeout(function() {
      $("#header #pop-search [type=search]").focus();
    }, 50);
  });
  $("#pop-chat").on("submit", "form", function(event) {
    event.preventDefault();
    var mdnKeywords = $("input", this).val() + "\n\nvia. " + location.href;
    var artistTrack = "https://api.whatsapp.com/send?phone=" + $_config.whatsapp + "&text=" + encodeURIComponent(mdnKeywords);
    popwin(artistTrack);
  });
  $('.LinkList li a[href*="#"]').each(function() {
    $(this).attr("href", "javascript:void(0)");
    $(this).append('<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>');
    var item = $(this).parent("li");
    item.addClass("dropdown");
    item.wrapInner('<span class="dropdown-title"></span>');
    item.append('<ul class="sub"></ul>');
  });
  $('.LinkList li a:contains("_")').each(function() {
    var $itemGroup = $(this).parent("li").prev(".dropdown").find("ul");
    $(this).parent("li").appendTo($itemGroup);
    var readableSubdomain = $(this).text().replaceAll("_", "").replaceAll("_ ", "");
    $(this).text(readableSubdomain);
  });
  $(".LinkList").on("click", "li.dropdown", function() {
    $(this).find("ul:first").toggle();
    $(this).toggleClass("active");
  });
  if ($("[data-feed]").length) {
    $("[data-feed]").each(function() {
      var res = $(this);
      var proxyPath = $(this).attr("data-feed").replace("?m=1", "").replace("&m=1", "").replaceAll(" ", "%20");
      res.addClass("loading");
      res.load(proxyPath + " .is_loop", function() {
        var formattedChosenQuestion = $(this).html();
        res.html(formattedChosenQuestion);
        var slug = res.attr("data-hide-id");
        if (slug) {
          if (res.find("article#" + slug).length) {
            res.find("article#" + slug).remove();
          } else {
            res.find("article:last-of-type").remove();
          }
        }
        product_convert();
        lazyload();
        timeago();
        res.removeClass("loading");
        if (res.find("article").length == 0) {
          res.closest("#related").remove();
        }
      });
    });
  }
  $("#pop-bagikan .copy button").on("click", function(canCreateDiscussions) {
    var $clip = $(this);
    $clip.siblings("input").select();
    document.execCommand("copy");
    $clip.text("Disalin!");
    setTimeout(function() {
      $clip.text("Salin");
    }, 2000);
  });
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var excessSpaceAbove = $("#header").outerHeight();
      var excessSpaceBelow = $(".is_single article .attr-sticky").outerHeight();
      $("html, body").stop().animate({
        scrollTop : $(window.location.hash).offset().top - excessSpaceAbove - excessSpaceBelow - 20
      }, 500);
      $(window.location.hash).addClass("focus");
      setTimeout(function() {
        $(window.location.hash).removeClass("focus");
      }, 2000);
    }
  }
  $(document).on("click", 'a[href*="#"]', function(event) {
    var navPrmySel = "#" + $(this).attr("href").split("#")[1];
    if ($(navPrmySel).length && $(this).attr("href").split("#")[0] === "") {
      event.preventDefault();
      var excessSpaceAbove = $("#header").outerHeight();
      var excessSpaceBelow = $(".is_single article .attr-sticky").outerHeight();
      if (excessSpaceBelow) {
        $("html, body").stop().animate({
          scrollTop : $(navPrmySel).offset().top - excessSpaceAbove - excessSpaceBelow - 20
        }, 500);
      } else {
        $("html, body").stop().animate({
          scrollTop : $(navPrmySel).offset().top - excessSpaceAbove - 20
        }, 500);
      }
      $(navPrmySel).addClass("focus");
      setTimeout(function() {
        $(navPrmySel).removeClass("focus");
      }, 2000);
    }
  });
  $(document).on("click", ".loadmore-btn", function(event) {
    event.preventDefault();
    let requestOrUrl = $(this).attr("href");
    let $img = $("#blog-pager .loadmore-btn");
    let _0x6c7c50 = $("#blog-pager .loadmore-btn").text();
    if (requestOrUrl) {
      $.ajax({
        url : requestOrUrl,
        beforeSend : function() {
          $img.addClass("loading");
        },
        complete : function() {
          $img.removeClass("loading");
        },
        success : function(dzixml) {
          let photoText = $(dzixml).find(".Blog .is_loop").html();
          let _gif = $(dzixml).find(".loadmore-btn").attr("href");
          $(".Blog .is_loop").append(photoText);
          $img.show();
          product_convert();
          product_sort();
          lazyload();
          timeago();
          if (_gif) {
            $img.attr("href", _gif);
          } else {
            $img.fadeOut();
          }
        }
      });
    }
  });
  if ($_config.url.view == "single") {
    var _0x1e7dcb = $_config.text.product_prev;
    var section = $("a.blog-pager-older-link").attr("href");
    $("a.blog-pager-older-link").load(section + " article h1", function() {
      var _0xd8258f = $("a.blog-pager-older-link").text();
      $("a.blog-pager-older-link").html('<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' + _0x1e7dcb + "</b></small><h3>" + _0xd8258f + "</h3></div></div>");
      $("a.blog-pager-older-link > figure").load(section + " article .post-body img:first-of-type", function() {
        var masterAddr = $(this).html();
        var menupath = masterAddr.split('src="')[1];
        var componentsStr = menupath.split('"')[0];
        var originalBaseURL = componentsStr.split("=")[0];
        var inputRegExp = originalBaseURL.split("/")[7];
        originalBaseURL = originalBaseURL.replace(inputRegExp, "w100-h100-c") + "=w100-h100-c";
        $("a.blog-pager-older-link > figure").html('<img src="' + originalBaseURL + '"/>').removeClass("loading");
      });
    });
    var _0x1f7f05 = $_config.text.product_next;
    var url = $("a.blog-pager-newer-link").attr("href");
    $("a.blog-pager-newer-link").load(url + " article h1", function() {
      var _0x184455 = $("a.blog-pager-newer-link").text();
      $("a.blog-pager-newer-link").html('<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' + _0x1f7f05 + "</b></small><h3>" + _0x184455 + "</h3></div></div>");
      $("a.blog-pager-newer-link > figure").load(url + " article .post-body img:first-of-type", function() {
        var masterAddr = $(this).html();
        var menupath = masterAddr.split('src="')[1];
        var componentsStr = menupath.split('"')[0];
        var originalBaseURL = componentsStr.split("=")[0];
        var inputRegExp = originalBaseURL.split("/")[7];
        originalBaseURL = originalBaseURL.replace(inputRegExp, "w100-h100-c") + "=w100-h100-c";
        $("a.blog-pager-newer-link > figure").html('<img src="' + originalBaseURL + '"/>').removeClass("loading");
      });
    });
  }
}
function timeago() {
  function relativeTime(string) {
    var token = "ago";
    var s = "seconds";
    var measure = "minutes";
    var units = "hours";
    var total = "days";
    var M = "months";
    var Y = "years";
    if ($_config.money.country_id == "id-ID") {
      token = "yang lalu";
      s = "detik";
      measure = "menit";
      units = "jam";
      total = "hari";
      M = "bulan";
      Y = "tahun";
    }
    var date = new Date(string);
    var pageSize = 86400000;
    var offset = 30 * pageSize;
    var maxElementCount = 365 * pageSize;
    var arrowsCount = token;
    var pageCount = new Date - date;
    return pageCount < 60000 ? Math.round(pageCount / 1000) + " " + s + " " + arrowsCount : pageCount < 3600000 ? Math.round(pageCount / 60000) + " " + measure + " " + arrowsCount : pageCount < pageSize ? Math.round(pageCount / 3600000) + " " + units + " " + arrowsCount : pageCount < offset ? Math.round(pageCount / pageSize) + " " + total + " " + arrowsCount : pageCount < maxElementCount ? Math.round(pageCount / offset) + " " + M + " " + arrowsCount : Math.round(pageCount / maxElementCount) + " " + 
    Y + " " + arrowsCount;
  }
  $("[datetime]:not(.timeago)").each(function() {
    var $el = $(this);
    var value = $el.attr("datetime");
    $el.addClass("timeago");
    if (!$el.attr("title")) {
      $el.attr("title", value);
    }
    $el.text(relativeTime(value));
  });
  $("#comments .datetime a:not(.timeago)").each(function() {
    var element = $(this);
    var classesLine = element.text();
    element.attr("datetime", classesLine);
    var value = element.attr("datetime");
    element.addClass("timeago");
    element.attr("title", value);
    element.text(relativeTime(value));
  });
}
function format_currency(start, locale = $_config.money.country_id, currency = $_config.money.currency) {
  return (new Intl.NumberFormat(locale, {
    style : "currency",
    currency : currency,
    maximumSignificantDigits : 3
  })).format(start);
}
function separator(i) {
  var errbuffer = "";
  var authorizationHeader = i.toString().split("").reverse().join("");
  var lastStringStartingBoundary = 0;
  for (; lastStringStartingBoundary < authorizationHeader.length; lastStringStartingBoundary++) {
    if (lastStringStartingBoundary % 3 == 0) {
      errbuffer = errbuffer + (authorizationHeader.substr(lastStringStartingBoundary, 3) + ".");
    }
  }
  return errbuffer.split("", errbuffer.length - 1).reverse().join("");
}
function kg(start) {
  var m = start + " Gram";
  return start >= 1000 && (m = start / 1000 + " Kg"), m;
}
function pop() {
  if ($("[target=pop-video]").length) {
    $pop_video_html = '             <div id="pop-video" data-pop-title="Video" data-pop-width="960">               <div class="video">              <iframe allowfullscreen="true"></iframe>               </div>             </div>             ';
    $($pop_video_html).appendTo("body");
  }
  $('[id*="pop-"]:not(".pop-loaded")').each(function() {
    var slideDom = $(this);
    var salesTeam = slideDom.attr("id");
    var _0x1a34c6 = slideDom.attr("data-pop-title");
    var meterPos = slideDom.attr("data-pop-width");
    var _0x4d47ba = slideDom.attr("data-pop-height");
    slideDom.wrap('<div class="pop"></div>');
    slideDom.wrap('<div class="pop-wrap"></div>');
    slideDom.addClass("pop-content pop-loaded");
    var arrowDiv = '            <header class="pop-header">                <div class="pop-title">                    <h3>                           ' + _0x1a34c6 + '                    </h3>                </div>                <div class="pop-close">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>                </div>            </header>        ';
    slideDom.closest(".pop-wrap").prepend(arrowDiv);
    if (meterPos) {
      slideDom.closest(".pop-wrap").css("width", meterPos);
    }
  });
  $(".pop-close").on("click", function() {
    $(this).closest(".pop").removeClass("open");
    $("body").removeClass("pop-open");
    if ($("[id=pop-video] iframe").length) {
      $("[id=pop-video] iframe").attr("src", "");
    }
  });
  $(document).on("click", '[target*="pop-"]', function(event) {
    event.preventDefault();
    var $deepPage = $(this);
    var conid = $deepPage.attr("target");
    var formattedChosenQuestion = $deepPage.attr("data-pop-title") ? $deepPage.attr("data-pop-title") : $("#" + conid).attr("data-pop-title");
    var _0x4e7b27 = $deepPage.attr("data-pop-width");
    var _0x54e6da = $deepPage.attr("data-pop-height");
    $deepPage.closest(".pop").removeClass("open");
    $("body").removeClass("pop-open");
    if ($("#" + conid).length) {
      $("body").addClass("pop-open");
      $("#" + conid).closest(".pop").addClass("open");
      if ($deepPage.closest(".pop-content").length) {
        $back_id = $deepPage.closest(".pop-content").attr("id");
        formattedChosenQuestion = '<a target="' + $back_id + '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' + formattedChosenQuestion;
      }
      if (formattedChosenQuestion) {
        $("#" + conid).closest(".pop").find(".pop-title h3").html(formattedChosenQuestion);
      }
      $("[data-src]").each(function() {
        var url = $(this).attr("data-src");
        $(this).attr("src", url).removeAttr("data-src");
      });
    }
    if (conid == "pop-video") {
      $href = $(this).attr("href");
      var t_numtype = $href.split("/")[3];
      if ($href.indexOf("https://www.youtube.com/watch?v=") >= 0) {
        t_numtype = get_url_parameter("v", $href);
      }
      $("[id=pop-video] iframe").attr("src", "https://www.youtube.com/embed/" + t_numtype + "?autoplay=1&showinfo=0");
    }
  });
  $(document).on("click", ".pop.open", function() {
    $(this).find(".pop-close").trigger("click");
  });
  $(document).on("click", ".pop-wrap", function(event) {
    event.stopPropagation();
  });
}
function lightbox() {
  var timezonesHTML = '        <div id="lightbox">            <div class="lb-wrap">                <figure>                    <div class="lb-img">                        <div class="lb-count"></div>                    </div>                    <nav class="lb-nav">                        <div class="lb-np lb-prev"></div>                        <div class="lb-close"></div>                        <div class="lb-np lb-next"></div>                    </nav>                </figure>            </div>        </div>    ';
  $(timezonesHTML).appendTo("body");
  $("[data-lightbox]").each(function() {
    var data = $(this).attr("data-lightbox");
    var subidx = $("[data-lightbox=" + data + "]").length;
    if (subidx > 1) {
      $("[data-lightbox=" + data + "]").each(function(canCreateDiscussions) {
        $(this).attr("data-lightbox-index", canCreateDiscussions + 1 + " / " + subidx);
      });
    }
    $(this).on("mousedown", function() {
      return false;
    });
    $(this).on("contextmenu", function() {
      return alert("\u00a9 " + $_config.page.title), false;
    });
  });
  $(document).on("click", "[data-lightbox]", function(event) {
    event.preventDefault();
    var $link = $(this);
    var data = $link.attr("data-lightbox");
    var account_recovery_question_text = $link.attr("data-lightbox-index");
    var inputWin = $link.attr("data-lightbox-title");
    var winRef = $link.attr("data-lightbox-desc");
    var image_href = $link.attr("href");
    $("#lightbox").scrollTop(0);
    $("#lightbox .lb-close").hide();
    $("#lightbox .lb-wrap figure .lb-img img").remove();
    $("#lightbox .lb-count").hide();
    $("#lightbox .lb-wrap figure figcaption").remove();
    $("#lightbox .lb-np").hide();
    if (image_href) {
      $("#lightbox .lb-wrap").addClass("lb-loading");
      $("#lightbox .lb-wrap figure .lb-img").prepend('<img data-src="' + image_href + '"/>');
      $("#lightbox .lb-wrap figure .lb-img img").attr("src", image_href).on("load", function() {
        $(this).removeAttr("data-src");
        $(this).on("mousedown", function() {
          return false;
        });
        $(this).on("contextmenu", function() {
          return alert("\u00a9 " + $_config.page.title), false;
        });
        $("#lightbox .lb-wrap").removeClass("lb-loading");
        if (inputWin || winRef) {
          $("#lightbox .lb-wrap figure").append("<figcaption></figcaption>");
        }
        if (inputWin) {
          $("#lightbox .lb-wrap figure figcaption").append("<h4>" + inputWin + "</h4>");
        }
        if (winRef) {
          $("#lightbox .lb-wrap figure figcaption").append("<p>" + winRef + "</p>");
        }
        if (account_recovery_question_text) {
          $("#lightbox .lb-count").html(account_recovery_question_text).show();
        }
        $("#lightbox .lb-np").show();
        if ($link.prev('[data-lightbox="' + data + '"]').length) {
          var url = $link.prev('[data-lightbox="' + data + '"]').attr("href");
          $("#lightbox .lb-np.lb-prev").attr("data-id", data).attr("data-url", url).show();
          $("body").append('<img src="' + url + '" style="display:none;"/>');
        } else {
          $("#lightbox .lb-np.lb-prev").hide();
        }
        if ($link.next('[data-lightbox="' + data + '"]').length) {
          url = $link.next('[data-lightbox="' + data + '"]').attr("href");
          $("#lightbox .lb-np.lb-next").attr("data-id", data).attr("data-url", url).show();
          $("body").append('<img src="' + url + '" style="display:none;"/>');
        } else {
          $("#lightbox .lb-np.lb-next").hide();
        }
        $("#lightbox .lb-close").show();
      });
    }
    $("#lightbox").addClass("open");
    $("body").addClass("lightbox_open");
  });
  $("#lightbox .lb-np.lb-prev, #lightbox .lb-np.lb-next").on("click", function(event) {
    event.stopPropagation();
    var url = $(this).attr("data-url");
    var _td_h = $(this).attr("data-id");
    $('[href="' + url + '"][data-lightbox="' + _td_h + '"]').trigger("click");
  });
  $("#lightbox").click(function() {
    $("#lightbox").removeClass("open");
    $("body").removeClass("lightbox_open");
  });
  $("#lightbox .lb-wrap").on("click", function(event) {
    event.stopPropagation();
  });
  $("#lightbox .lb-close").on("click", function(event) {
    event.stopPropagation();
    $("#lightbox").removeClass("open");
    $("body").removeClass("lightbox_open");
  });
  $(document).on("keydown", function(event) {
    var _0x5cacc8 = event.keyCode || event.which;
    if (event.key === "Escape") {
      $("#lightbox").removeClass("open");
      $("body").removeClass("lightbox_open");
    }
    if (_0x5cacc8 === 37) {
      $("#lightbox .lb-np.lb-prev:visible").trigger("click");
    }
    if (_0x5cacc8 === 39) {
      $("#lightbox .lb-np.lb-next:visible").trigger("click");
    }
    if (_0x5cacc8 === 38) {
      $("#lightbox").scrollTop(0);
    }
    if (_0x5cacc8 === 40) {
      var roundedTop = $("#lightbox").height();
      $("#lightbox").scrollTop(roundedTop);
    }
  });
}
function lazyload() {
  $("[data-bg]").each(function() {
    var element = $(this);
    var bg = element.attr("data-bg");
    element.css("background-image", "url(" + bg + ")").removeAttr("data-bg");
  });
  $('[data-src]:not([lazy="true"])').each(function() {
    var t = $(this);
    var courseId = $(window).height();
    var admincoursecontents = $(window).scrollTop();
    var courseContentPage = admincoursecontents + courseId;
    var top_orig = t.offset().top;
    t.attr("data-offset-top", top_orig);
    var src = t.attr("data-src");
    src = src.replace("1.bp.blogspot.com", "lh3.googleusercontent.com");
    src = src.replace("2.bp.blogspot.com", "lh3.googleusercontent.com");
    src = src.replace("3.bp.blogspot.com", "lh3.googleusercontent.com");
    src = src.replace("4.bp.blogspot.com", "lh3.googleusercontent.com");
    var name = t.prop("tagName").toLowerCase();
    if (top_orig <= courseContentPage) {
      if (name == "img") {
        t.attr("src", src).removeAttr("data-src");
        t.attr("lazy", "true");
      } else {
        if (name == "iframe") {
          t.attr("src", src).removeAttr("data-src");
          t.attr("lazy", "true");
        }
      }
    }
  });
  $(window).on("scroll", function() {
    var courseId = $(window).height();
    var admincoursecontents = $(window).scrollTop();
    var courseContentPage = admincoursecontents + courseId;
    $('[data-src]:not([lazy="true"])').each(function() {
      var t = $(this);
      var _0x220366 = $(window).height();
      var fhTop = t.offset().top;
      var src = t.attr("data-src");
      src = src.replace("1.bp.blogspot.com", "lh3.googleusercontent.com");
      src = src.replace("2.bp.blogspot.com", "lh3.googleusercontent.com");
      src = src.replace("3.bp.blogspot.com", "lh3.googleusercontent.com");
      src = src.replace("4.bp.blogspot.com", "lh3.googleusercontent.com");
      var name = t.prop("tagName").toLowerCase();
      if (fhTop <= courseContentPage) {
        if (name == "img") {
          t.attr("src", src).removeAttr("data-src");
          t.attr("lazy", "true");
        } else {
          if (name == "iframe") {
            t.attr("src", src).removeAttr("data-src");
            t.attr("lazy", "true");
          }
        }
      }
    });
  });
}
function titleCase(s) {
  s = s.split(" ");
  var i = 0;
  for (; i < s.length; i++) {
    s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
  }
  return s = s.join(" "), s;
}
function $_GET(s) {
  var componentsStr = window.location.search.substring(1);
  var row = componentsStr.split("&");
  var matches;
  var CR_index;
  CR_index = 0;
  for (; CR_index < row.length; CR_index++) {
    matches = row[CR_index].split("=");
    if (matches[0] === s) {
      return matches[1] === undefined ? true : decodeURIComponent(matches[1]);
    }
  }
}
function get_url_parameter(name, element) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var is_jsonp_re = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var orgAttrs = is_jsonp_re.exec(element);
  if (!orgAttrs) {
    return null;
  }
  if (!orgAttrs[2]) {
    return "";
  }
  return decodeURIComponent(orgAttrs[2].replace(/\+/g, " "));
}
