const email = document.querySelector('#email')
const user = document.querySelector('#user')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const inputs = document.querySelectorAll('input')
const termosdeUso = document.querySelector('#termos')

if (localStorage['Usuario']) {
 var usuariosUsuario = localStorage['Usuario'].split(',')
 var emailUsuario = localStorage['Email'].split(',')
 var senhaUsuario = localStorage['Senha'].split(',')
} else {
  var usuariosUsuario = ''
  var emailUsuario = ''
  var senhaUsuario = ''
}

function salvarDados() {
  if((email.value !== '') && (user.value !== '') && (password.value) !== '' && (confirmPassword.value !== '')) {
      if(password.value === confirmPassword.value) {
        if(termos.checked) {
          if((password.value.includes(',') || confirmPassword.value.includes(',') || email.value.includes(',') || user.value.includes(','))) {
            swal({
              title: "Erro!",
              text: "Nenhum dos dados podem conter virgulas.",
              icon: "warning",
              button: "Tentar novamente",
            });
          } else {
            if(usuariosUsuario.includes(`${user.value}`)) {
              swal({
                title: "Erro!",
                text: "Já existe um usuario com esse nome!",
                icon: "warning",
                button: "Tentar novamente",
              });
            }
            else if(emailUsuario.includes(`${email.value}`)) {
              swal({
                title: "Erro!",
                text: "Esse email já foi cadastrado!",
                icon: "warning",
                button: "Tentar novamente",
              });
            } else {
              if (password.value.length >= 8) {
                if (senhaUsuario.includes(password.value)) {
                  swal({
                    title: "Erro!",
                    text: "Sua senha é muito facil de ser descoberta, tente uma mais dificil.",
                    icon: "warning",
                    button: "Tentar novamente",
                  });
                } else {
                  usuariosUsuario += `,${user.value}`
                  emailUsuario += `,${email.value}`
                  senhaUsuario += `,${password.value}`
                  localStorage.setItem('Email', emailUsuario)
                  localStorage.setItem('Usuario', usuariosUsuario)
                  localStorage.setItem('Senha', senhaUsuario)
                  swal("Conta criada com sucesso!", {
                    text: "Parabens! Você criou sua conta com sucesso! Você será redirecionado para a página de login em alguns instantes.",
                    icon: "success",
                    buttons: false,
                    timer: 4000,
                  });
                  setTimeout(() => {
                    window.location.href = '/index.html'
                  }, 5000)
                }
              } else {
                swal({
                  title: "Erro!",
                  text: "Sua senha deve ser maior ou igual a 8 caracteres!",
                  icon: "warning",
                  button: "Tentar novamente",
                });
              }
            }
          }
        } else {
          swal({
            title: "Erro!",
            text: "Você precisa aceitar os termos e condições para continuar!",
            icon: "warning",
            button: "Tentar novamente",
          });
        }
      } else {
        swal({
          title: "Erro!",
          text: "As senhas não conferem!",
          icon: "warning",
          button: "Tentar novamente",
        });
      }
  } else {
    swal({
      title: "Erro!",
      text: "Há campos vázios!",
      icon: "warning",
      button: "Tentar novamente",
    });
  }
}