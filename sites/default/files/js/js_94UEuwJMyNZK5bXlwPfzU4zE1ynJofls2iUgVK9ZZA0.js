/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {

  'use strict';

  // Use direct child elements to harden against XSS exploits when CSP is on.
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
window.drupalTranslations = {"strings":{"":{"An AJAX HTTP error occurred.":"\u0421\u0442\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430 AJAX HTTP.","HTTP Result Code: !status":"HTTP-\u043a\u043e\u0434 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456: !status","An AJAX HTTP request terminated abnormally.":"\u0417\u0430\u043f\u0438\u0442 AJAX HTTP \u043d\u0435\u0441\u043f\u043e\u0434\u0456\u0432\u0430\u043d\u043e \u043e\u0431\u0456\u0440\u0432\u0430\u0432\u0441\u044f","Debugging information follows.":"\u0414\u0430\u043b\u0456 \u043d\u0430\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0432\u0456\u0434\u043e\u043c\u043e\u0441\u0442\u0456 \u0434\u043b\u044f \u0437\u043d\u0435\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f.","Path: !uri":"\u0428\u043b\u044f\u0445: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u043d\u0443: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456: !responseText","ReadyState: !readyState":"\u0421\u0442\u0430\u043d \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0456: !readyState","CustomMessage: !customMessage":"\u0412\u043b\u0430\u0441\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f: !customMessage","Please wait...":"\u0417\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430...","The response failed verification so will not be processed.":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0435 \u043f\u0440\u043e\u0439\u0448\u043b\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443 \u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0442\u0438\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435.","The callback URL is not local and not trusted: !url":"URL \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u044c\u043e\u0433\u043e \u0437\u0432\u2019\u044f\u0437\u043a\u0443 \u043d\u0435 \u0454 \u043d\u0456 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u043c, \u043d\u0456 \u0434\u043e\u0432\u0456\u0440\u0435\u043d\u0438\u043c: !url","Changed":"\u0417\u043c\u0456\u043d\u0435\u043d\u043e","Home":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430","closed":"\u0437\u0430\u043a\u0440\u0438\u0442\u0435","Cancel":"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438","Edit":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438","Link":"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f","Image":"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f","Save":"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438","Open":"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u043e","Add":"\u0414\u043e\u0434\u0430\u0442\u0438","Continue":"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438","OK":"\u0413\u0430\u0440\u0430\u0437\u0434","Close":"\u0417\u0430\u043a\u0440\u0438\u0442\u0438","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438","Select all rows in this table":"\u041e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044f\u0434\u043a\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0456","Deselect all rows in this table":"\u0417\u043d\u044f\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0432\u0441\u0456\u0445 \u0440\u044f\u0434\u043a\u0456\u0432","Extend":"\u0420\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f","Loading...":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...","Hide":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438","Unlink":"\u041f\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f","Quick edit":"\u0428\u0432\u0438\u0434\u043a\u0435 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f","Edit Link":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f","Remove group":"\u0412\u0438\u043b\u0443\u0447\u0438\u0442\u0438 \u0433\u0440\u0443\u043f\u0443","@label":"@label","New revision":"\u041d\u043e\u0432\u0430 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u044f","Drag to re-order":"\u041f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0443\u0442\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u043d\u043d\u044f","Discard changes":"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438 \u0437\u043c\u0456\u043d\u0438","Saving":"\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f","This permission is inherited from the authenticated user role.":"\u0426\u0435 \u043f\u043e\u0432\u043d\u043e\u0432\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0441\u043f\u0430\u0434\u043a\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u0440\u043e\u043b\u0456 \u0022\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0022.","No revision":"\u0411\u0435\u0437 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u0457","Not restricted":"\u0411\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Restricted to certain pages":"\u0422\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u043f\u0435\u0432\u043d\u0438\u0445 \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0446\u0456\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0456.","Hide summary":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044e\u043c\u0435","Edit summary":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044e\u043c\u0435","Collapse":"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438","Re-order rows by numerical weight instead of dragging.":"\u041f\u0435\u0440\u0435\u0432\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u044f\u0434\u043a\u0456\u0432 \u0437\u0430 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u044e \u0432\u0430\u0433\u043e\u044e \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0430\u0433\u0443 \u0440\u044f\u0434\u043a\u0456\u0432","Hide row weights":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0430\u0433\u0443 \u0440\u044f\u0434\u043a\u0456\u0432","Apply (all displays)":"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 (\u0434\u043b\u044f \u0432\u0441\u0456\u0445 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c)","Apply (this display)":"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 (\u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f)","Revert to default":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438 \u0434\u043e \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c","You have unsaved changes":"\u0423 \u0432\u0430\u0441 \u0454 \u043d\u0435\u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0437\u043c\u0456\u043d\u0438","Needs to be updated":"\u041f\u043e\u0442\u0440\u0435\u0431\u0443\u0454 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f","Does not need to be updated":"\u041d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0454 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f","Show all columns":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0456 \u043a\u043e\u043b\u043e\u043d\u043a\u0438","Show table cells that were hidden to make the table fit within a small screen.":"\u041f\u043e\u043a\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043a\u043b\u0456\u0442\u0438\u043d\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0456, \u0449\u043e \u0431\u0443\u043b\u0438 \u0441\u0445\u043e\u0432\u0430\u043d\u0456 \u0434\u043b\u044f \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u0457 \u0434\u043e \u043c\u0430\u043b\u043e\u0433\u043e \u0435\u043a\u0440\u0430\u043d\u0443","List additional actions":"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0434\u0456\u0439","Flag other translations as outdated":"\u041f\u043e\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0456\u043d\u0448\u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438 \u044f\u043a \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043b\u0456","Do not flag other translations as outdated":"\u041d\u0435 \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u0442\u0438 \u0456\u043d\u0448\u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438 \u044f\u043a \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043b\u0456","opened":"\u0432\u0456\u0434\u043a\u0440\u0438\u0442\u043e","Horizontal orientation":"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430 \u043e\u0440\u0456\u0454\u043d\u0442\u0430\u0446\u0456\u044f","Vertical orientation":"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430 \u043e\u0440\u0456\u0454\u043d\u0442\u0430\u0446\u0456\u044f","Tray orientation changed to @orientation.":"\u041e\u0440\u0456\u0454\u043d\u0442\u0430\u0446\u0456\u044e \u043b\u043e\u0442\u043a\u0430 \u0437\u043c\u0456\u043d\u0435\u043d\u043e \u043d\u0430 @orientation.","You have unsaved changes.":"\u0412\u0438 \u043c\u0430\u0454\u0442\u0435 \u043d\u0435\u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0437\u043c\u0456\u043d\u0438","@action @title configuration options":"@action @title \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457","Tabbing is no longer constrained by the Contextual module.":"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u043a\u043b\u0430\u0434\u043e\u043a \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0435 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043e \u043c\u043e\u0434\u0443\u043b\u0435\u043c \u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442.","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u043a\u043b\u0430\u0434\u043e\u043a \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u0435 \u0434\u043b\u044f \u043d\u0430\u0431\u043e\u0440\u0443 @contextualsCount \u0456 \u0440\u0435\u0436\u0438\u043c\u0443 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u043c\u0438\u043a\u0430\u0447\u0430.","Press the esc key to exit.":"\u0414\u043b\u044f \u0432\u0438\u0445\u043e\u0434\u0443 \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043a\u043b\u0430\u0432\u0456\u0448\u0443 \u0022Esc\u0022.","@count contextual link\u0003@count contextual links":"@count \u043a\u043e\u043d\u0435\u043a\u0441\u0442\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u0003@count \u043a\u043e\u043d\u0435\u043a\u0441\u0442\u043d\u0438\u0445 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u0003@count \u043a\u043e\u043d\u0435\u043a\u0441\u0442\u043d\u0438\u0445 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u044c","!tour_item of !total":"!tour_item \u0437 !total","End tour":"\u041a\u0456\u043d\u0435\u0446\u044c \u0442\u0443\u0440\u0443","Discard changes?":"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438 \u0437\u043c\u0456\u043d\u0438?","The toolbar cannot be set to a horizontal orientation when it is locked.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u0430 \u0434\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0457 \u043e\u0440\u0456\u0454\u043d\u0442\u0430\u0446\u0456\u0457 \u043a\u043e\u043b\u0438 \u0437\u0430\u0431\u043b\u043e\u043a\u043e\u0432\u0430\u043d\u0430.","Could not load the form for \u003Cq\u003E@field-label\u003C\/q\u003E, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u003Cq\u003E@field-label\u003C\/q\u003E, \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0437 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043e\u043c \u0430\u0431\u043e \u0437 \u043c\u0435\u0440\u0435\u0436\u0435\u044e.\u003Cbr\u003E\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.","Your changes to \u003Cq\u003E@entity-title\u003C\/q\u003E could not be saved, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"\u041d\u0435 \u0432\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438 \u0434\u043e \u003Cq\u003E@entity-title\u003C\/q\u003E , \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0437 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043e\u043c \u0430\u0431\u043e \u0437 \u043c\u0435\u0440\u0435\u0436\u0435\u044e.\u003Cbr\u003E\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"\u0417\u043c\u0456\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0443 \u043d\u0430 %text_format \u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0438\u0439 \u0432 \u0446\u044c\u043e\u043c\u0443 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 \u0432\u043c\u0456\u0441\u0442. \u003Cbr\u003E\u003Cbr\u003E \u0429\u043e\u0431 \u0437\u0430\u043f\u043e\u0431\u0456\u0433\u0442\u0438 \u0432\u0442\u0440\u0430\u0442\u0456 \u0434\u0430\u043d\u0438\u0445, \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044c \u0437\u043c\u0456\u043d\u0438 \u0434\u043e \u043f\u0435\u0440\u0435\u043c\u0438\u043a\u0430\u043d\u043d\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0443.","Change text format?":"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442?","Rich Text Editor, !label field":"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0443, \u043f\u043e\u043b\u0435 !label","Tray \u0022@tray\u0022 @action.":"\u041b\u043e\u0442\u043e\u043a \u0022@tray\u0022 @action.","Tray @action.":"\u041b\u043e\u0442\u043e\u043a @action.","Hide lower priority columns":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u0432\u043f\u0446\u0456 \u0437 \u043d\u0438\u0437\u044c\u043a\u0438\u043c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c","!modules modules are available in the modified list.":"\u041c\u043e\u0434\u0443\u043b\u0456 !modules \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0443 \u0441\u043f\u0438\u0441\u043a\u0443 \u0437\u043c\u0456\u043d.","Network problem!":"\u0421\u043a\u043b\u0430\u0434\u043d\u043e\u0449\u0456 \u0437 \u043c\u0435\u0440\u0435\u0436\u0435\u044e!"}},"pluralFormula":{"1":0,"2":1,"3":1,"4":1,"21":0,"22":1,"23":1,"24":1,"31":0,"32":1,"33":1,"34":1,"41":0,"42":1,"43":1,"44":1,"51":0,"52":1,"53":1,"54":1,"61":0,"62":1,"63":1,"64":1,"71":0,"72":1,"73":1,"74":1,"81":0,"82":1,"83":1,"84":1,"91":0,"92":1,"93":1,"94":1,"101":0,"102":1,"103":1,"104":1,"121":0,"122":1,"123":1,"124":1,"131":0,"132":1,"133":1,"134":1,"141":0,"142":1,"143":1,"144":1,"151":0,"152":1,"153":1,"154":1,"161":0,"162":1,"163":1,"164":1,"171":0,"172":1,"173":1,"174":1,"181":0,"182":1,"183":1,"184":1,"191":0,"192":1,"193":1,"194":1,"default":2}};;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = {behaviors: {}, locale: {}};

// Class indicating that JavaScript is enabled; used for styling purpose.
document.documentElement.className += ' js';

// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (domready, Drupal, drupalSettings, drupalTranslations) {

  'use strict';

  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(function () { throw error; }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} detach
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * $(context).find(selector).once('behavior-name');` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  // Attach all behaviors.
  domready(function () { Drupal.attachBehaviors(document, drupalSettings); });

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `.findOnce()` and `.removeOnce()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `.removeOnce('behaviorName')`, to ensure the behavior
   * is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    var processedArgs = {};
    // Transform arguments before inserting them.
    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          // Escaped only.
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          // Pass-through.
          case '!':
            processedArgs[key] = args[key];
            break;

          // Escaped and placeholder.
          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      // Order the keys by the character length. The shortest one is the first.
      keys.sort(function (a, b) { return a.length - b.length; });
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    }
    catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {bool}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    }
    catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    }
    catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    // Determine the index of the plural form.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula['default'];
    }
    else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };

})(domready, Drupal, window.drupalSettings, window.drupalTranslations);
;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {

  'use strict';

  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach: function (context) {
      // Start by finding all potentially active links.
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='" + queryString + "']" : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map(function (selector) { return selector + ':not([hreflang])'; }),
        // Links with hreflang equals to the current language.
        originalSelectors.map(function (selector) { return selector + '[hreflang="' + path.currentLanguage + '"]'; })
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map(function (current) { return current + querySelector; });

      // Query the DOM.
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };

})(Drupal, drupalSettings);
;
(function () {

  'use strict';

  function findActiveStep(steps) {
    for (var i = 0; i < steps.length; i++) {
      if (steps[i].className === 'is-active') {
        return i + 1;
      }
    }
    // The final "Finished" step is never "active".
    if (steps[steps.length - 1].className === 'done') {
      return steps.length;
    }
    return 0;
  }

  function installStepsSetup() {
    var steps = document.querySelectorAll('.task-list li');
    if (steps.length) {
      var header = document.querySelector('header[role="banner"]');
      var stepIndicator = document.createElement('div');
      stepIndicator.className = 'step-indicator';
      stepIndicator.innerHTML = findActiveStep(steps) + '/' + steps.length;
      header.appendChild(stepIndicator);
    }
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', installStepsSetup);
  }

})();
;
