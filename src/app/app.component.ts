import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    $(document).ready(function () {
      $('.navbar a.dropdown-toggle').on('click', function (e) {
        let $el = $(this);
        let $parent = $(this).offsetParent('.dropdown-menu');
        $(this).parent('li').toggleClass('open');

        if (!$parent.parent().hasClass('nav')) {
          $el.next().css({ 'top': $el[0].offsetTop, 'left': $parent.outerWidth() - 4 });
        }
        $('.nav li.open').not($(this).parents('li')).removeClass('open');

        return false;
      });

      $('#togglenavbar8').click(function () {
        $('.nav-side-menu').toggleClass('open');
      });
    });
  }
}
