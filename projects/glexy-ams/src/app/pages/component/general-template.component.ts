import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-template',
  templateUrl: './general-template.component.html',
  styleUrls: ['./general-template.component.css']
})
export class GeneralTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  iconOnly(): void {
    const body = document.getElementsByTagName('body')[0];
    if (body.className.match("sidebar-icon-only")) {
      body.classList.remove('sidebar-icon-only')
    } else {
      body.classList.add('sidebar-icon-only')
    }
  }

  sidebarActive(): void {
    const offCanvas = document.getElementById('sidebar')
    if (offCanvas?.className.match('active')) {
      offCanvas?.classList.remove('active')
    } else {
      offCanvas?.classList.add('active')
    }
  }
}
