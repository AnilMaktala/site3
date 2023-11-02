export class Modelinputemail
{
  a: {
    id: string,
    label: string,
    input: string,
    validity: boolean,
    premieressai: boolean,
    maxlength: number,
    errormsg: string
  } = {
      id: '',
      label: '',
      input: '',
      validity: false,
      premieressai: true,
      maxlength: 0,
      errormsg: ''
    };

  constructor ( b: any )
  {
    this.a.errormsg = b.errormsg;
    this.a.id = b.id;
    this.a.input = b.input;
    this.a.label = b.label;
    this.a.maxlength = b.maxlength;
    this.a.premieressai = b.premieressai;
    this.a.validity = b.validity;
  }

  valid ()
  {
    return this.a.validity;
  }

}