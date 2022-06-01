import { atom, useAtom } from "jotai";
import { GetContentQuery } from "../../../generated/graphql";

const contentAtom = atom<GetContentQuery | undefined>(undefined);

export default function useContent() {
    const [content, setContent] = useAtom(contentAtom);

    return {
        content,
        setContent
    }
}