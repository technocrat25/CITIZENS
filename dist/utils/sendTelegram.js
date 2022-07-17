"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTelegram = void 0;
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const removeTags_1 = require("./removeTags");
const sendTelegram = ({ message, medias, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formData = new form_data_1.default();
        formData.append(`message`, removeTags_1.removeTags(message));
        formData.append(`telegramId`, process.env.TELEGRAM_ID);
        if (!medias) {
            yield fetch(`${process.env.BOT_LINK}/message`, {
                method: `POST`,
                body: formData,
            });
        }
        if (medias) {
            for (let i = 0; i < medias.length; i++) {
                formData.append(`medias`, fs_1.default.createReadStream(medias[i].path));
            }
            yield fetch(`${process.env.BOT_LINK}/medias`, {
                method: `POST`,
                body: formData,
                headers: Object.assign({}, formData.getHeaders()),
            });
        }
        return `Message sent`;
    }
    catch (error) {
        return `Message could not be sent`;
    }
});
exports.sendTelegram = sendTelegram;
//# sourceMappingURL=sendTelegram.js.map