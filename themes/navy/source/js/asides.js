(function(){
  'use strict';

  const notice_elems = document.getElementsByClassName('notice');
  const caution_elems = document.getElementsByClassName('caution');
  const warning_elems = document.getElementsByClassName('warning');
  const tip_elems = document.getElementsByClassName('tip');

  function insertIcons(el_arr, icon) {
    const arr_len = el_arr.length;
    const icon_html = `<i class="fa ${icon} fa-lg fa-fw"></i>`;

    for (let i = 0; i < arr_len; i++) {
      const existing = el_arr[i].innerHTML;
      el_arr[i].innerHTML = `${icon_html}${existing}`;
    }
  }

  insertIcons(notice_elems, `fa-info-circle`);
  insertIcons(caution_elems, `fa-exclamation-triangle`);
  insertIcons(warning_elems, `fa-exclamation-circle`);
  insertIcons(tip_elems, `fa-check-circle`);

})();