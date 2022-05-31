import { useAppSelector } from "../../../lib/redux/store";

export default function useInterest() {
    return useAppSelector((state) => state.pages.redux.interest);
}