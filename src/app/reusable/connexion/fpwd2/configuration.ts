export let email1 = {
  label: "Adresse mail",
  input: "",
  validity: false,
  premieressai: false,
  id: "email1",
  maxlength: 50,
  errormsg: "Adresse mail erronnée",
};

export let code1 = {
  label: "Code",
  input: "",
  validity: false,
  premieressai: false,
  id: "code1",
  min: 6,
  max: 6,
  errormsg: "erreur",
};

export let password1 = {
  label: "Mot de passe",
  input: "",
  minlength: 6,
  maxlength: 12,
  premieressai: false,
  pattern: "[a-zA-Z0-9]*",
  validity: false,
  id: "password1",
  errormsg: "Mot de passe invalide",
};
