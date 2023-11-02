export class Modelinputpassword {
  a: {
    label: string;
    input: string;
    minlength: number;
    maxlength: number;
    validity: boolean;
    premieressai: boolean;
    id: string;
    pattern: string;
    errormsg: string;
  } = {
    label: "",
    input: "",
    minlength: 0,
    maxlength: 0,
    validity: false,
    premieressai: true,
    id: "",
    pattern: "[a-zA-Z0-9]*",
    errormsg: "",
  };

  constructor(b: any) {
    this.a.errormsg = b.errormsg;
    this.a.id = b.id;
    this.a.input = b.input;
    this.a.label = b.label;
    this.a.maxlength = b.maxlength;
    this.a.minlength = b.minlength;
    this.a.pattern = b.pattern;
    this.a.premieressai = b.premieressai;
    this.a.validity = b.validity;
  }

  valid() {
    return this.a.validity;
  }

}
