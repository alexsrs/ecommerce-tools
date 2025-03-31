
import chalk from "chalk";
const PromptSchemaMain = [
    {
        name: "select",
        description: chalk.blue.bold("Escolha a ferramenta [1]- QRCODE | [2] - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Apenas números 1 ou 2"),
        required: true,
    },

];

export default PromptSchemaMain;
