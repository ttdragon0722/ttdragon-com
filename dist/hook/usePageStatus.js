"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReload = exports.usePageStatus = void 0;
const react_1 = require("react");
/**
 * 頁面狀態
 * * idle
 * * success
 * * loading
 * * error
 * @returns \{ pageStatus, setPageStatus }
 */
const usePageStatus = () => {
    const [pageStatus, setPageStatus] = (0, react_1.useState)("idle");
    return { pageStatus, setPageStatus };
};
exports.usePageStatus = usePageStatus;
const useReload = (defaultReload = false) => {
    const [reload, setReload] = (0, react_1.useState)(defaultReload);
    return { reload, setReload };
};
exports.useReload = useReload;
