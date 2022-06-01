import { useEffect } from "react";
import getSdk from "../../../lib/sdk/getSdk";
import useContent from "./useContent";

export default function useFetchContent() {
    const { setContent } = useContent();
    useEffect(() => {
        (async () => {
            const content = await getSdk().GetContent();
            setContent(content);
        })();
    }, []); // only run once
}