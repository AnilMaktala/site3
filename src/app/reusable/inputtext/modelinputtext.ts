export class Modelinputtext
{
  a: {
    label: string,
    input: string,
    minlength: number,
    maxlength: number,
    validity: boolean,
    premieressai: boolean,
    id: string,
    errormsg: string
  } = {
      label: '',
      input: '',
      minlength: 0,
      maxlength: 0,
      validity: false,
      premieressai: true,
      id: '',
      errormsg: ''
  };

  constructor (b:any)
  {
    this.a.errormsg = b.errormsg;
    this.a.id = b.id;
    this.a.input = b.input;
    this.a.label = b.label;
    this.a.maxlength = b.maxlength;
    this.a.minlength = b.minlength;
    this.a.premieressai = b.premieressai;
    this.a.validity = b.validity;
  }

  valid ()
  {
    return this.a.validity;
  }

}