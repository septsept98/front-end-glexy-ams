import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-template',
  templateUrl: './general-template.component.html',
  styleUrls: ['./general-template.component.css']
})
export class GeneralTemplateComponent implements OnInit {

  constructor() { }

  body = document.getElementsByTagName('body')[0]

  ngOnInit(): void {

  }

  hoverOpen(data: any): void {
    if (this.body.className.match("sidebar-icon-only")) {
      data.classList.add('hover-open')
    }
  }

  hoverClose(data: any): void {
    if (this.body.className.match("sidebar-icon-only")) {
      data.classList.remove('hover-open')
    }
  }

  iconOnly(): void {
    if (this.body.className.match("sidebar-icon-only")) {
      this.body.classList.remove('sidebar-icon-only')
    } else {
      this.body.classList.add('sidebar-icon-only')
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
