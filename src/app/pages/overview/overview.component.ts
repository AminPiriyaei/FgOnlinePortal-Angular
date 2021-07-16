import { DomainName } from './../../Utilities/PathTools';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public domain:string = DomainName;

  constructor() { }

  ngOnInit(): void {



  }

}
