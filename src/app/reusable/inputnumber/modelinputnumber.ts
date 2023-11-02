export class Modelinputnumber
{
  a: {
    label: string,
    input: string,
    validity: boolean,
    premieressai: boolean,
    id: string,
    min: number,
    max: number,
    errormsg: string
  } = {
      label: '',
      input: '',
      validity: false,
      premieressai: true,
      id: '',
      min: 0,
      max: 0,
      errormsg: ''
    };

  constructor ( b: any )
  {
    this.a.errormsg = b.errormsg;
    this.a.id = b.id;
    this.a.input = b.input;
    this.a.label = b.label;
    this.a.max = b.max;
    this.a.min = b.min;
    this.a.premieressai = b.premieressai;
    this.a.validity = b.validity;
  }

  valid ()
  {
    return this.a.validity;
  }

}