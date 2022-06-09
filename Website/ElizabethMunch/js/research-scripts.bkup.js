"use strict";

$(document).ready(function () {
  //Research Items
  var data = researchJSON.paperInfo;
  $.each(data, function (i, researchItem) {
    $('.paper-listing').append(
      "<section class=\"paper-listing__item\">\n        <section class=\"paper-listing__item__image\">\n  "
    + (researchItem.image ? "<img src=\"" + researchItem.image + "\" alt=\"" + researchItem.altText + "\">" : '')
    + "\n        </section>\n        <section>\n          "
    + (researchItem.title ? "<h4 class=\"paper-listing__item__title\">" + researchItem.title + "</h4>" : '')
    + "\n          " + (researchItem.authors ? "<p class=\"paper-listing__item__authors\"><em>By: "
    + researchItem.authors
    + "</em></p>" : '')
    + "\n          <p class=\"paper-listing__item__venue\">\n            " + (researchItem.venue ? "" + researchItem.venue : '')
    + (researchItem.venue && researchItem.date ? ',' : '')
    + "\n            "
    + (researchItem.date ? ""
    + researchItem.date : '')
    + "\n  </p>\n          "
    + (researchItem.originalLink ? "<a class=\"paper-listing__item__link\" href=\""
    + researchItem.originalLink
    + "\">Publisher Website</a>" : '')
    + "\n\n  <section class=\"paper-listing__item__more\">\n"    
    +"<section class=\"paper-listing__item__tabs\">\n              "
    + (researchItem.abstract ? "\n                <p class=\"paper-listing__item__more__abstract-tab\">Abstract <span>&raquo;</span></p>\n              " : '')
    + "\n\n              "
    + (researchItem.bibtex ? "\n  <p class=\"paper-listing__item__more__bibtex-tab\">Bibtex <span>&raquo;</span></p>\n              " : '')
    + "\n            </section>\n\n            "
    + (researchItem.abstract ? "<p class=\"paper-listing__item__more__abstract-body\">"
    + researchItem.abstract + "</p>" : '')
    + "\n\n            " + (researchItem.bibtex ? "<p class=\"paper-listing__item__more__bibtex-body\"><code>"
    + researchItem.bibtex + "</code></p>" : '')
    + "\n          </section>\n        </section>\n      ");
  });
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
});
