import prompt from "prompt";
import PromptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQrCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(PromptSchemaMain, async (err, choose) => {
            if (err) console.log(err);
            if (choose.select == "1") await createQrCode();
            if (choose.select == "2") await createPassword();
        });
    prompt.start();
}

main();

