import React from "react";
export type PageStatusType = "idle" | "success" | "loading" | "error";
export type TSetPageStatus = React.Dispatch<React.SetStateAction<PageStatusType>>;
export type TSetReload = React.Dispatch<React.SetStateAction<boolean>>;
/**
 * 頁面狀態
 * * idle
 * * success
 * * loading
 * * error
 * @returns \{ pageStatus, setPageStatus }
 */
export declare const usePageStatus: () => {
    pageStatus: PageStatusType;
    setPageStatus: React.Dispatch<React.SetStateAction<PageStatusType>>;
};
export declare const useReload: (defaultReload?: boolean) => {
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
};
