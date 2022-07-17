"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTags = void 0;
const removeTags = (str) => {
    if (str === null || str === "")
        return ``;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
};
exports.removeTags = removeTags;
//# sourceMappingURL=removeTags.js.map