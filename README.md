# CPF Validator Microservice

[2025] Este projeto é um microsserviço para validação de CPF, desenvolvido em TypeScript e Node.js. Com o intuito de publicar nos recursos do Azure como parte do treinamento, ministrado pela Digital Innovation One, para a Certificação AZ-204 da Microsoft.

## Tecnologias Utilizadas

- **Linguagem:** TypeScript 5.x
- **Runtime:** Node.js 22.x
- **Framework:** Azure Functions v4
- **Dependências Principais:**
  - @azure/functions: Framework principal
  - cpf-check: Validação de CPF
- **Dependências de Desenvolvimento:**
  - typescript: Suporte ao TypeScript
  - rimraf: Limpeza de diretórios
  - concurrently: Execução paralela de scripts

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/tiagomaciels/AZ-204-cpf-validator-microservice.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd AZ-204-cpf-validator-microservice
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npm start
   ```

## Endpoints

### GET

- **URL**: `/api/cpf-validator-microservice`
- **Método**: `GET`
- **Parâmetros**: `cpf` (query parameter)
- **Exemplo**:

```bash
curl -X GET "http://localhost:7071/api/cpf-validator-microservice?cpf=12345678909"
```

- **Resposta**:

```bash
{
  "cpf": "12345678909",
  "isValid": true
}
```

### POST

- **URL**: `/api/cpf-validator-microservice`
- **Método**: `POST`
- **Corpo da Requisição**:

```json
{
  "cpf": "12345678909"
}
```

- **Exemplo**:

```bash
curl -X POST "http://localhost:7071/api/cpf-validator-microservice" -H "Content-Type: application/json" -d '{"cpf":"12345678909"}'
```

- **Resposta**:

```bash
{
    "cpf": "12345678909",
    "isValid": true
}
```

## Funcionalidades

- Validação de CPF 

## Contato

- **Autor:** Tiago Maciel da Silva - [**LinkedIn**](https://www.linkedin.com/in/tiagomaciels/)
