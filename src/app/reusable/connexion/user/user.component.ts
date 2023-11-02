import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';

@Component( {
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
} )
export class UserComponent implements OnInit
{
  snapshotParam: string | null | undefined;
  subscribedParam: string | null | undefined;

  constructor ( public global_service: GlobalService, private location: Location, private readonly route: ActivatedRoute, private readonly router: Router ) { }

  ngOnInit ()
  {
    this.global_service.scroll();
    this.global_service.spinneroff();
    this.global_service.errorstatus = 'off';

    // No Subscription
    this.snapshotParam = this.route.snapshot.paramMap.get( "mot" );
    //console.log( 'this.snapshotParam : ' + this.snapshotParam );

    // Subscribed
    this.route.paramMap.subscribe( params =>
    {
      this.subscribedParam = params.get( "mot" );
      //console.log( 'this.subscribedParam : ' + this.subscribedParam );
      if ( this.subscribedParam === 'confirmsignup' )
      {
        this.global_service.activelogin = 'confirmsignup';
        this.router.navigateByUrl( 'user' );
      }

    } );
  }

  retour ()
  {
    this.location.back();
  }

}
