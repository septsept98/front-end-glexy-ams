import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-template',
  templateUrl: './general-template.component.html',
  styleUrls: ['./general-template.component.css']
})
export class GeneralTemplateComponent implements OnInit {

  constructor() { }

  dashboard: boolean = true
  master: boolean = true
  auth: boolean = true

  ngOnInit(): void {

  }

  iconOnly(): void {
    const body = document.getElementsByTagName('body')[0]
    if (body?.className.match('sidebar-icon-only')) {
      body?.classList.remove('sidebar-icon-only')
    } else {
      body?.classList.add('sidebar-icon-only')
    }
  }

  openMenu(): void {
    const menu = document.getElementById('sidebar')
    if (menu?.className.match('active')) {
      menu?.classList.remove('active')
    } else {
      menu?.classList.add('active')
    }
  }

  hoverOpen(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body?.className.match('sidebar-icon-only')) {
      data.classList.add('hover-open')
    }
  }

  hoverClose(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body?.className.match('sidebar-icon-only')) {
      data.classList.remove('hover-open')
    }
  }

}
