(function () {
    'use strict'

    $(document).ready(function () {
        var configureFormDefinition = {
            title : 'Configure o servidor SQL',
            id: 'configuration-form',
            fields: [
                { name: 'serverName', id: 'serverName', type: 'text', label: 'Nome do Servidor' },
                { name: 'server', id: 'server', type: 'text', label: 'Conexão do Servidor' },
                {
                    name: 'authenticationType',
                    label: 'Tipo de Autenticação',
                    id: 'authenticationType',
                    type: 'select',
                    items: [
                        { value: '0', name: 'Windows' },
                        { value: '1', name: 'SQL Server' },
                    ]
                },
                { name: 'logon', id: 'logon', type: 'text', label: 'Logon' },
                { name: 'password', id: 'password', type: 'password', label: 'Senha' }
            ],
        };

        var configurationForm = new Form('#configure-form', configureFormDefinition);
        configurationForm.mount(function () {
            $('#configuration-form').submit(function (ev) {
                ev.preventDefault();

                $.post('/api/ServerConnection', $('#configuration-form').serialize(), function (data, status) {
                    if (status === 'success') {
                        console.log('Saved!');
                    } else {
                        console.log(data);
                    }
                });
            });
        });
    });

})($)