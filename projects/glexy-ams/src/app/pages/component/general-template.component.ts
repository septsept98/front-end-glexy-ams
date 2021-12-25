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
    const parentDiv = document.getElementById('parent-body')
    const btnSideBar = document.getElementById('btn-sidebar')
    if (btnSideBar?.className.match('is-active')) {
      btnSideBar?.classList.remove('is-active')
    } else {
      btnSideBar?.classList.add('is-active')
    }
    if (parentDiv?.className.match('closed-sidebar')) {
      parentDiv?.classList.remove('closed-sidebar')
    } else {
      parentDiv?.classList.add('closed-sidebar')
    }
  }

  closeSidebar(): void {
    const parentDiv = document.getElementById('parent-body')
    const btnSideBar = document.getElementById('btn-sidebar-mobile')
    if (btnSideBar?.className.match('is-active')) {
      btnSideBar?.classList.remove('is-active')
    } else {
      btnSideBar?.classList.add('is-active')
    }
    if (parentDiv?.className.match('sidebar-mobile-open')) {
      parentDiv?.classList.remove('sidebar-mobile-open')
    } else {
      parentDiv?.classList.add('sidebar-mobile-open')
    }
  }

  openMenu(): void {
    const menu = document.getElementById('menu-mobile')
    const btnMenuMob = document.getElementById('btn-menu-mobile')
    if (btnMenuMob?.className.match('active')) {
      btnMenuMob?.classList.remove('active')
    } else {
      btnMenuMob?.classList.add('active')
    }
    if (menu?.className.match('header-mobile-open')) {
      menu?.classList.remove('header-mobile-open')
    } else {
      menu?.classList.add('header-mobile-open')
    }
  }

}
