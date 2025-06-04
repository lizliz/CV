"use strict";

$(document).ready(function () {
  //Research Items
  var data = researchJSON.paperInfo;
  $.each(data, function (i, researchItem) {
    $('.paper-listing').append(
      "<section class=\"paper-listing__item\">\n" +
      "<section class=\"paper-listing__item__image\">\n " +
      // Image
      (researchItem.image ? "<img src=\"" + researchItem.image +
      "\" alt=\"" + researchItem.altText + "\">" : '') +
      "\n </section>"+
      "\n <section>\n " +
      // Title
      (researchItem.title ?
        "<h4 class=\"paper-listing__item__title\">" +
              researchItem.title +
        "</h4>" : '') +
      "\n " +
      // Authors
      (researchItem.authors ?
        "<p class=\"paper-listing__item__authors\"><em>" +
        researchItem.authors +
        "</em></p>" : '') +
      // Journal, Date
      "\n <p class=\"paper-listing__item__venue\">\n " +
        (researchItem.venue ? "" + researchItem.venue : '') +
        (researchItem.venue && researchItem.date ? ',' : '') +
      "\n " +
      (researchItem.date ? "" + researchItem.date : '') +
      "\n </p>\n " +
      // Link to external website
      (researchItem.publishedLink ?
        "<a class=\"paper-listing__item__link\" href=\"" + researchItem.publishedLink + "\">Published Version</a> &emsp;" : '') +
      (researchItem.arXivLink ?
          "<a class=\"paper-listing__item__link\" href=\"" + researchItem.arXivLink + "\">Preprint</a>" : '') +
      "\n\n <section class=\"paper-listing__item__more\">\n"+
      // Keywords 
      (researchItem.keywords && researchItem.keywords.length > 0 ?
        "<div class=\"paper-listing__item__keywords\">" +
          researchItem.keywords.map(function(kw) {
            return "<span class=\"keyword-badge\">" + kw + "</span>";
          }).join(' ') +
        "</div>"
        : '') +
      // Tabbed box for abstract and bibtex
      " <section class=\"paper-listing__item__tabs\">\n " +
        (researchItem.abstract ?
          "\n  <p class=\"paper-listing__item__more__abstract-tab\">Abstract <span>&raquo;</span></p>\n " : '') +
      "\n\n" +
      (researchItem.bibtex ?
        "\n <p class=\"paper-listing__item__more__bibtex-tab\">Bibtex <span>&raquo;</span></p>\n  " : '') +
      "\n </section>\n\n  " +
      (researchItem.abstract ?
        "<p class=\"paper-listing__item__more__abstract-body\">" +
        researchItem.abstract + "</p>" : '') +
      "\n\n " +
      (researchItem.bibtex ?
        "<p class=\"paper-listing__item__more__bibtex-body\"><code>" +
        researchItem.bibtex + "</code></p>" : '') +
      "\n </section>\n </section>\n      ");
  });

  // --- Keyword filter button code START ---
  // Collect all unique keywords
  const allKeywords = new Set();
  data.forEach(item => {
    if (item.keywords) {
      item.keywords.forEach(kw => allKeywords.add(kw));
    }
  });

  // Render keyword buttons, including "Show all"
  const $filterDiv = $('#keyword-filters');
  $filterDiv.append(`<button class="keyword-filter-btn active" data-keyword="__all__">Show all</button> `);
  allKeywords.forEach(kw => {
    $filterDiv.append(`<button class="keyword-filter-btn" data-keyword="${kw}">${kw}</button> `);
  });

  // Click handlers for filtering and highlighting
  $('.keyword-filter-btn').on('click', function() {
    $('.keyword-filter-btn').removeClass('active');
    $(this).addClass('active');
    const keyword = $(this).data('keyword');
    if (keyword === "__all__") {
      $('.paper-listing__item').show();
    } else {
      $('.paper-listing__item').hide().filter(function() {
        return $(this).find('.keyword-badge').filter(function() {
          return $(this).text() === keyword;
        }).length > 0;
      }).show();
    }
  });
  // --- Keyword filter button code END ---

  $('.paper-listing__item__more__abstract-tab').click(function () {
    var self = $(this);
    var itemToggle = self.parent().parent().find('.paper-listing__item__more__abstract-body');

    if (itemToggle.hasClass('expanded')) {
      itemToggle.removeClass('expanded').slideUp();
    } else {
      if (itemToggle.siblings().hasClass('expanded')) {
        itemToggle.siblings().removeClass('expanded');
        $('.paper-listing__item__more__bibtex-body').slideUp();
        setTimeout(function () {
          itemToggle.addClass('expanded').slideDown();
        }, 400);
      } else {
        itemToggle.addClass('expanded').slideDown();
      }
    }
  });

  $('.paper-listing__item__more__bibtex-tab').click(function () {
    var self = $(this);
    var itemToggle = self.parent().parent().find('.paper-listing__item__more__bibtex-body');

    if (itemToggle.hasClass('expanded')) {
      itemToggle.removeClass('expanded').slideUp();
    } else {
      if (itemToggle.siblings().hasClass('expanded')) {
        itemToggle.siblings().removeClass('expanded');
        $('.paper-listing__item__more__abstract-body').slideUp();
        setTimeout(function () {
          itemToggle.addClass('expanded').slideDown();
        }, 400);
      } else {
        itemToggle.addClass('expanded').slideDown();
      }
    }
  });

  // --- Foldable keyword description code START ---
  $('.paper-listing__item__more__keywords-tab').click(function () {
    var $body = $('.paper-listing__item__more__keywords-body');
    if ($body.hasClass('expanded')) {
      $body.removeClass('expanded').slideUp();
    } else {
      $body.addClass('expanded').slideDown();
    }
  });
  // --- Foldable keyword description code END ---
});