"use client";
import React, { useState } from "react"

export type PageStatusType = "idle" | "success" | "loading" | "error";
export type TSetPageStatus = React.Dispatch<React.SetStateAction<PageStatusType>>
export type TSetReload = React.Dispatch<React.SetStateAction<boolean>>
/**
 * 頁面狀態
 * * idle
 * * success
 * * loading
 * * error
 * @returns \{ pageStatus, setPageStatus }
 */
export const usePageStatus = () => {
    const [pageStatus, setPageStatus] = useState<PageStatusType>("idle");
    return { pageStatus, setPageStatus }
}

export const useReload = (defaultReload = false) => {
    const [reload, setReload] = useState<boolean>(defaultReload);
    return { reload, setReload };
};
