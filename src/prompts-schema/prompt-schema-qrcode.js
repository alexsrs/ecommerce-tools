import chalk from "chalk";


const PromptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link que deseja gerar o QR Code"),
    },
{
    name: "type",
    description: chalk.yellow("Escolha o tipo de QR Code [1] - Normal | [2] - Terminal"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Apenas números 1 ou 2"),
    required: true,
},


];

export default PromptSchemaQRCode;

