import prompt from "prompt";
import PromptSchemaQrCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQrCode() {
    prompt.get(PromptSchemaQrCode, handle);
    prompt.start();
}

export default createQrCode;
