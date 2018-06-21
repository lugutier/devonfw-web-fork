import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-oasp',
  templateUrl: './oasp.component.html',
  styleUrls: ['./oasp.component.css']
})
export class OASPComponent implements OnInit {
  public current: any;
  constructor(private router: Router) {
    this.router.events.subscribe((val: NavigationEnd) => {
      this.current = val.url;
    });
  }

  ngOnInit() {

    $.ajax({
      url: 'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
      dataType: 'jsonp',
      method: 'GET',
      timeout: 2000,
      error: function(hrx, textStatus, error) {
        if (textStatus === 'parsererror') {
          $('.cg_internal').show();
          $('.extern').hide();
          $('[data-cap-href]').each(function() {
            $(this).attr('href', $(this).data('cap-href'));
          });
        } else {
          $('.extern').show();
        }
      }
    });
}
}
