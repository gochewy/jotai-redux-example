import { atom, useAtom } from "jotai";

export const quantityAtom = atom(0);
const increaseAtom = atom(null, (get, set, update) => {
    set(quantityAtom, (current) => current + 1);
})
const decreaseAtom = atom(null, (get, set, update) => {
    set(quantityAtom, (current) => current <= 0 ? 0 : current - 1);
})

export default function useWidgetQuantity() {
    const [quantity] = useAtom(quantityAtom);
    const [, increase] = useAtom(increaseAtom);
    const [, decrease] = useAtom(decreaseAtom);

    return {
        quantity,
        increase,
        decrease,
    }
}