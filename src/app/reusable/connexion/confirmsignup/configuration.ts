export let email1 = {
  label: "Adresse mail",
  input: "",
  premieressai: false,
  validity: false,
  id: "confirmsignupemail",
  maxlength: 50,
  errormsg: "Adresse mail invalide",
};

export let code1 = {
  label: "Code reçu",
  input: "",
  premieressai: false,
  validity: false,
  id: "confirmsignupcode",
  min: 6,
  max: 6,
  errormsg: "Code invalide",
};
