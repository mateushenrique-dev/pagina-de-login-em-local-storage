const usuarioInput = document.querySelector('#user')
const senhaInput = document.querySelector('#password')
const lembrese = document.querySelector ('#forget')


if (localStorage['Usuario']) {
  var usuariosUsuario = localStorage['Usuario'].split(',')
  var emailUsuario = localStorage['Email'].split(',')
  var senhaUsuario = localStorage['Senha'].split(',')
} else {
   var usuariosUsuario = ''
   var emailUsuario = ''
   var senhaUsuario = ''
}

if(localStorage['Lembrar'] === 'true') {
  usuarioInput.value = usuariosUsuario[localStorage['Login Usuario']]
  senhaInput.value = senhaUsuario[localStorage['Login Senha']]
  lembrese.checked = true
}

function logar() {
  indexUsuario = usuariosUsuario.findIndex(usuario => usuario === usuarioInput.value)
  indexSenha = senhaUsuario.findIndex(senha => senha === senhaInput.value)

  if(usuarioInput.value === '' || senhaInput.value === '') {
    swal({
      title: "Há campos vazios!",
      text: "Lembre-se de não deixar campos em branco :)",
      icon: "warning",
      button: "Tentar novamente",
    });
  }
  else if(indexUsuario === -1 || indexUsuario === 0) {
    swal({
      title: "Usuario não encontrado!",
      text: "O usuario digitado não foi encontrado, verifique se digitou corretamente e tente novamente.",
      icon: "warning",
      button: "Tentar novamente",
    });
  }
  else if(senhaInput.value.length < 8) {
    swal({
      title: "Senha menor que o permitido!",
      text: "A senha deve ser maior que 8 caracteres.",
      icon: "warning",
      button: "Tentar novamente",
    });
  }
  else if(indexSenha !== indexUsuario) {
    swal({
      title: "Senha ou usario incorretos!",
      text: "A senha ou usuario digitado está incorreto.",
      icon: "warning",
      button: "Tentar novamente",
    });
  }
  else {
    swal({
      title: `Seja bem vindo ${usuarioInput.value}!`,
      text: "Login realizado com sucesso.",
      icon: "success",
      button: "Ok",
    });
  }
  
  if (lembrese.checked) {
    localStorage.setItem('Lembrar', true)
    localStorage.setItem('Login Usuario', indexUsuario)
    localStorage.setItem('Login Senha', indexSenha)
  } else {
    localStorage.setItem('Lembrar', false)
  }
}


