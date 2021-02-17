const aprendiendoJS = {
    version: {
        nueva: "la mas nueva",
        anterior: "una mas vieja"
    },
    frameworks: ["React No es un framework", "VueJS", "AngularJS"]
}

//para extraer algo por destructuring:

let {nueva} = aprendiendoJS.version;
console.log(nueva);