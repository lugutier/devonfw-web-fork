import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isCollapsed: boolean;
  public current: any;
  constructor(private router: Router) {
    this.isCollapsed = true;
    this.router.events.subscribe((val: NavigationEnd) => {
      this.current = val.url;
    });
  }

  ngOnInit() {
        $.ajax({
          url:'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
          dataType: 'jsonp',
          method: 'GET',
          timeout:3000,
          error: function(hrx,textStatus,error){          
            if (textStatus=='parsererror'){
              $('.cg_internal').show();
              $('[data-cap-href]').each(function(){
                $(this).attr('href', $(this).data('cap-href'));
              });
            }
          }
        });
    }

  isCurrentPath(path) {
    if (this.current === undefined) {
      return false;
    }
    const x = this.current.split('#')[0] || this.current;
    return x === path;
  }

}
