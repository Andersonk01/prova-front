
function handleSubmit(event) {
  event.preventDefault();

  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('message').value;

  if (!nome.trim() || !email.trim() || !mensagem.trim()) {
    alert('Preencha todos os campos!');
    return;
  }

  let data = {
    nome: nome,
    email: email,
    mensagem: mensagem,
  };

  alert('sucesso!')
  console.log('Success:', data);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
