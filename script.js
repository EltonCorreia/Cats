function verificarFormulario() {
    // Verifica o nome
    var elementosNome = document.getElementsByClassName('input-nome');
    var nome = elementosNome[0].value;
    if (nome.length < 4) {
      alert('O nome deve ter pelo menos 5 caracteres!');
      return false;
    }
  
    // Verifica o e-mail
    var elementosEmail = document.getElementsByClassName('input-email');
    var email = elementosEmail[0].value;
    if (email.length < 4) {
        alert('O e-mail deve ter pelo menos 5 caracteres!');
        return false;
      }
  
    // Se ambas as validações passarem, permite o envio do formulário
    return true;

}