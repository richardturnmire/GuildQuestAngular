import { Injectable, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Year } from 'app/Models/year';
import { Dollar } from 'app/Models/dollar';

@Injectable( {
  providedIn: 'root'
} )

export class SearchService 
{
  
  private currentYear: number = parseInt( formatDate( Date.now(), 'yyyy', 'en-US' ) );
  private numberofYears: number = 30;
  private cutoffYear: number = this.currentYear + 1;
  private firstYear: number = this.currentYear - this.numberofYears + 1;

  public beginYears: Year[] = new Array<Year>(this.numberofYears); // = new Array<number>( this.numberofYears );
  public endYears: Year[] = new Array<Year>( this.numberofYears );  // new Array<number>( this.numberofYears );
  public beginDollars: Dollar[] = new Array<Dollar>( 10 );
  public endDollars: Dollar[] = new Array<Dollar>( 10 );

  public beginYear: Year;
  public endYear: Year;
  public beginDolar: Dollar;
  public endDollar: Dollar;


  ngOnInit()
  {
    this.setup();
  }
 
  setup() {


    //console.log( "Year is " + this.currentYear );
    //console.log( "Cutoff year is " + this.cutoffYear );
    //console.log( "First year is " + this.firstYear );

    for ( let i = 0; i < this.numberofYears; i++ )
    {
      let tyear = i + this.firstYear;
      this.beginYears[i] = new Year(tyear, tyear);
      this.endYears[i] = new Year( tyear + 1, tyear + 1 );
      //console.log(this.beginYears[i].year);
    }
    for ( let i = 0; i < 10; i++ ) {
      let tdollar = i * 10000;
      this.beginDollars[i] = new Dollar( tdollar, tdollar );
      this.endDollars[i] = new Dollar( tdollar + 5000, tdollar + 5000 );
      //console.log(this.beginDollars[i].amount);
    }
    //console.log( this.beginYears );
    //console.log( this.beginDollars );
  }
} 

