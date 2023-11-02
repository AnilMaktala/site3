import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _spinner: boolean = false;
  private _activelink: string = "search";
  private _menuheader: boolean = false;
  private _activelogin: string = "signin";
  private _spinnercookie: boolean = false;
  private _errorstatus: string = "off";
  private _todolist: boolean = true;
  progress = 0;
  timeToWait: number = 1;
  private _listresult: boolean = false;
  private _containered: boolean = true;
  private default_ms = 16;
  private _selectedproid: string = "";
  private _selectedLocationId: string = "";
  //private _selectedLocation: Localiteentreprise = { id: '',entrepriseid:'', latitude:0,longitude:0, distance: 0, adresse: '', nomentreprise: '' };
  //center: google.maps.LatLng = new google.maps.LatLng( 0, 0 );
  private _demandederdv: boolean = false;
  private _email: string = "";

  constructor() {}

  public get demandederdv(): boolean {
    return this._demandederdv;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public set demandederdv(value: boolean) {
    this._demandederdv = value;
  }

  public get spinner(): boolean {
    return this._spinner;
  }

  public set spinner(value: boolean) {
    this._spinner = value;
  }

  public get activelink(): string {
    return this._activelink;
  }

  public set activelink(value: string) {
    this._activelink = value;
  }

  public get menuheader(): boolean {
    return this._menuheader;
  }

  public set menuheader(value: boolean) {
    this._menuheader = value;
  }

  public get activelogin(): string {
    return this._activelogin;
  }

  public set activelogin(value: string) {
    this._activelogin = value;
  }

  public get spinnercookie(): boolean {
    return this._spinnercookie;
  }

  public set spinnercookie(value: boolean) {
    this._spinnercookie = value;
  }

  public get errorstatus(): string {
    return this._errorstatus;
  }

  public set errorstatus(value: string) {
    this._errorstatus = value;
  }

  public get todolist(): boolean {
    return this._todolist;
  }

  public set todolist(value: boolean) {
    this._todolist = value;
  }

  public get selectedLocationId(): string {
    return this._selectedLocationId;
  }

  public set selectedLocationId(value: string) {
    this._selectedLocationId = value;
  }

  public get selectedproid(): string {
    return this._selectedproid;
  }

  public set selectedproid(value: string) {
    this._selectedproid = value;
  }

  /*   public get selectedLocation (): Localiteentreprise
    {
      return this._selectedLocation;
    }
  
    public set selectedLocation ( value: Localiteentreprise )
    {
      this._selectedLocation = value;
    }
   */

  public reset() {
    this.scroll();
  }

  public get listresult(): boolean {
    return this._listresult;
  }

  public set listresult(value: boolean) {
    this._listresult = value;
  }

  public get containered(): boolean {
    return this._containered;
  }

  public set containered(value: boolean) {
    this._containered = value;
  }

  public scroll() {
    window.scrollTo(0, 0);
  }

  togglemenuheader() {
    this._menuheader = !this._menuheader;
  }

  async init(): Promise<void> {
    for (let i = 1; i > 0 && this._spinner === true; i++) {
      this.progress = 1;
      while (this.progress <= 99) {
        this.progress += 1 / this.timeToWait;
        await this.sleep(this.default_ms);
      }
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  spinneroff() {
    this._spinner = false;
  }

  spinneron() {
    this._spinner = true;
    this.init();
  }
}
