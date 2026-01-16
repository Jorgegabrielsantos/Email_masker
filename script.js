function maskEmail(email) {
    // 1. Encontrar a posição do "@"
    let atIndex = email.indexOf("@");
  
    // 2. Separar nome de usuário e domínio
    let username = email.slice(0, atIndex);
    let domain = email.slice(atIndex);
  
    // 3. Se o nome tiver 2 letras ou menos, não mascarar
    if (username.length <= 2) {
      return email;
    }
  
    // 4. Pegar primeira e última letra
    let firstLetter = username[0];
    let lastLetter = username[username.length - 1];
  
    // 5. Criar os asteriscos para o meio
    let maskedMiddle = "*".repeat(username.length - 2);
  
    // 6. Juntar tudo
    let maskedUsername = firstLetter + maskedMiddle + lastLetter;
  
    // 7. Retornar e-mail final
    return maskedUsername + domain;
  }
  
  let email = "Jorgegabriel@gmail.com";
  
  console.log(maskEmail(email));
  
  
  
  