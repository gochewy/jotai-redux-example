import { atom, useAtom } from "jotai";
import _ from "lodash";
import { useAppSelector } from "../../../lib/redux/store";

const interestAtom = atom(1);
const setInterestAtom = atom<undefined, number>(undefined, (_get, set, update) => {
    const value = _.clamp(update, 1, 5);
    set(interestAtom, value);
})

export default function useInterest() {
    const [interest] = useAtom(interestAtom);
    const [, setInterest] = useAtom(setInterestAtom);

    return {
        interest,
        setInterest,
    }
}