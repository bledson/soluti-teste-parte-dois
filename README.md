# Soluti Teste Parte Dois

## o que foi feito

* documentação API
* back-end
    * cadastro
    * login
    * upload de certificado
    * leitura de informações do certificado usando a biblioteca indicada
    * verificações de unicidade
    * log de ações e exceções em um arquivo definido
* front-end
    * tela de cadastro
    * tela de login
    * tela com informações do certificado

## o que faltou fazer
* consegui salvar o certificado usando postman, mas pela aplicação o upload falha sem erro significativo, o que dificultou a depuração, apesar que outros endpoints funcionam corretamente
* docker-compose.yml para rodar a aplicação de forma mais simples, atualmente utilizei podman e um pod para agrupar as dependencias de infra (php, node com angular e mysql)

## o que poderia ter sido melhor
* interface (espaçamento, cores)
* redirecionar o usuário após login/registro
* intencionalmente foi deixado de fora a verificação por email para simplicidade de testes
