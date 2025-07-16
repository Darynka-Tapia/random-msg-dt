const messages = {
  en: [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
  ],
  es: [
    "Aquí es donde todo comienza...",
    "Commit hecho con éxito",
    "El control de versiones es horrible",
    "¡CONFIRMA TODOS LOS ARCHIVOS!",
    "Lo mismo que hacemos todas las noches, Pinky: ¡intentar conquistar el mundo!",
    "S-foils en posición de ataque",
    "Este commit es una mentira",
    "¡Te lo explico cuando seas grande!",
    "Aquí hay dragones",
    "Reinventando la rueda. Otra vez.",
    "Este no es el mensaje de commit que estás buscando",
    "¡Batman! (este commit no tiene padres)",
  ]
};

const supportedLangs = ['en', 'es'];
let lang = 'en';
const getSupportedLangs = (args) => {
  args.forEach(arg => {
    if (arg === '--es' || arg === '--en') {
      lang = arg.replace('--', '');
      return
    }
    
    if (arg.startsWith('--lang=')) {
      const value = arg.split('=')[1];
      if (supportedLangs.includes(value)) {
        lang = value;
        return
      }
      console.log("\x1b[33mWarning: Invalid argument. Supported languages are 'es' and 'en'.\x1b[0m");
    }
  });
  return lang;
}
const funnyCommit = (args) => {
  const lang = getSupportedLangs(args);
  const langMessages = messages[lang];
  const message = langMessages[Math.floor(Math.random() * langMessages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};