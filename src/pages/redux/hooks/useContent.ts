import { useAppSelector } from "../../../lib/redux/store";

export default function useContent() {
    return useAppSelector((state) => state.pages.redux.content);
}