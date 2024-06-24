var contatos = [];
        var contatoAtualIndex = -1;

        function habilitarCampos() {
            var inputs = document.querySelectorAll('#nome, #sobrenome, #endereco, #telefone');
            inputs.forEach(function(input) {
                input.disabled = false;
            });
        }

        function desabilitarCampos() {
            var inputs = document.querySelectorAll('#nome, #sobrenome, #endereco, #telefone');
            inputs.forEach(function(input) {
                input.disabled = true;
            });
        }

        function incluir() {
            habilitarCampos();
            document.getElementById('nome').value = '';
            document.getElementById('sobrenome').value = '';
            document.getElementById('endereco').value = '';
            document.getElementById('telefone').value = '';
            document.querySelector('.salvar').disabled = false;
            document.querySelector('.cancelar').disabled = false;
            document.querySelector('.incluir').disabled = true;
            
        }

        function editar() {
            habilitarCampos();
            document.querySelector('.salvar').disabled = false;
            document.querySelector('.cancelar').disabled = false;
            document.querySelector('.incluir').disabled = true;
            document.querySelector('.editar').disabled = true;
            if (nome === '' || sobrenome === '' || endereco === '' || telefone ==='') {
                console.log('Por favor, preencha o nome e o sobrenome.');
                return;
            }
        }

        function salvar() {
            let nomeElement = document.getElementById('nome');
            let sobrenomeElement = document.getElementById('sobrenome');
            let enderecoElement = document.getElementById('endereco');
            let telefoneElement = document.getElementById('telefone');

            if (nomeElement && sobrenomeElement && enderecoElement && telefoneElement) {
                let nome = nomeElement.value;
                let sobrenome = sobrenomeElement.value;
                let endereco = enderecoElement.value;
                let telefone = telefoneElement.value;

                contatos.push({ nome, sobrenome, endereco, telefone });

                if (nome === '' || sobrenome === '' || endereco === '' || telefone ==='') {
                    console.log('Por favor, preencha o nome e o sobrenome.');
                    return;
                }

                console.log("Contato incluído com sucesso:");
                console.log(contatos);

                
                contatoAtualIndex = contatos.length - 1;
            } else {
                console.error('Um ou mais elementos do formulário não foram encontrados!');
            }

            desabilitarCampos();
            document.querySelector('.salvar').disabled = true;
            document.querySelector('.cancelar').disabled = true;
            document.querySelector('.incluir').disabled = false;
            document.querySelector('.editar').disabled = false;
            document.querySelector('.excluir').disabled = false;
        }

        function cancelar() {
            desabilitarCampos();
            document.querySelector('.salvar').disabled = true;
            document.querySelector('.cancelar').disabled = true;
            document.querySelector('.incluir').disabled = false;
            document.querySelector('.editar').disabled = false;
            document.querySelector('.excluir').disabled = true;
        }

        function excluir() {
            let nomeElement = document.getElementById('nome');
            let sobrenomeElement = document.getElementById('sobrenome');
            let enderecoElement = document.getElementById('endereco');
            let telefoneElement = document.getElementById('telefone');

            nomeElement.value = '';
            sobrenomeElement.value = '';
            enderecoElement.value = '';
            telefoneElement.value = '';
            

            desabilitarCampos();
            document.querySelector('.salvar').disabled = true;
            document.querySelector('.cancelar').disabled = true;
            document.querySelector('.incluir').disabled = false;
            document.querySelector('.editar').disabled = false;
            document.querySelector('.excluir').disabled = true;
            if (nome === '' || sobrenome === '' || endereco === '' || telefone ==='') {
                console.log('Por favor, preencha o nome e o sobrenome.');
                return;}
        }

        function atualizarCampos(contato) {
            document.getElementById('nome').value = contato.nome;
            document.getElementById('sobrenome').value = contato.sobrenome;
            document.getElementById('endereco').value = contato.endereco;
            document.getElementById('telefone').value = contato.telefone;
        }

        function primeiro() {
            if (contatos.length > 0) {
                contatoAtualIndex = 0;
                atualizarCampos(contatos[0]);
                console.log("Primeiro contato exibido nos campos do formulário.");
            } else {
                console.log("Nenhum contato cadastrado ainda.");
            }
        }

        function ultimo() {
            if (contatos.length > 0) {
                contatoAtualIndex = contatos.length - 1;
                atualizarCampos(contatos[contatoAtualIndex]);
                console.log("Último contato exibido nos campos do formulário.");
            } else {
                console.log("Nenhum contato cadastrado ainda.");
            }
        }

        function anterior() {
            if (contatoAtualIndex > 0) {
                contatoAtualIndex--;
                atualizarCampos(contatos[contatoAtualIndex]);
                console.log("Contato anterior exibido nos campos do formulário.");
            } else {
                console.log("Não há contatos anteriores.");
            }
        }

        function proximo() {
            if (contatoAtualIndex < contatos.length - 1) {
                contatoAtualIndex++;
                atualizarCampos(contatos[contatoAtualIndex]);
                console.log("Próximo contato exibido nos campos do formulário.");
            } else {
                console.log("Não há contatos.");
            }
        }

        document.querySelector('.incluir').disabled = false;
        document.querySelector('.editar').disabled = true;
        document.querySelector('.salvar').disabled = true;
        document.querySelector('.cancelar').disabled = true;
        document.querySelector('.excluir').disabled = true;
        desabilitarCampos()