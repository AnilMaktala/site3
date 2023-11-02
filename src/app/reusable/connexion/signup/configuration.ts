export let email1 = {
  label: "Adresse mail",
  input: "",
  validity: false,
  premieressai: false,
  id: "email1",
  maxlength: 50,
  errormsg: "Adresse mail erronée",
};

export let password1 = {
  label: "Mot de passe",
  input: "",
  minlength: 8,
  maxlength: 12,
  premieressai: true,
  pattern: "[a-zA-Z0-9]*",
  validity: false,
  id: "password1",
  errormsg: "Mot de passe invalide",
};
