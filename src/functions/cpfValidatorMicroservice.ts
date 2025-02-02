import { app, HttpRequest, HttpResponseInit } from "@azure/functions";
import CPF from "cpf-check";

export async function cpfValidatorMicroservice(
  request: HttpRequest
): Promise<HttpResponseInit> {
  const body = request.body ? JSON.parse(await request.text()) : null;
  const cpfNumber = request.query.get("cpf") || (body && body.cpf);

  if (!cpfNumber) {
    return {
      status: 400,
      jsonBody: { error: "Por favor, forneça um CPF." },
    };
  }

  const isValid = CPF.validate(cpfNumber);

  return {
    status: 200,
    jsonBody: { cpf: cpfNumber, isValid },
  };
}

app.http("cpf-validator-microservice", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: cpfValidatorMicroservice,
});
