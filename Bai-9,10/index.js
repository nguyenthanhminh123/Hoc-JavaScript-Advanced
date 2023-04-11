// Default parameters
function greeting(name = 'friend', language = 'ja'){
  if (language === 'en') {
    return `hi,${name}`;
  }

  if (language === 'ja'){
    return `Konnichiwa, ${name}`;
  }

  return 'Chao long';
}

greeting();