import { Provider } from "jotai";
import { GetContentQuery } from "../../../../generated/graphql";
import { createInitialValues } from "../../../../lib/jotai/helpers/createInitialValues";
import useWidgetQuantity, { quantityAtom } from "../../hooks/useWidgetQuantity";

interface WidgetProps {
    widget: GetContentQuery['widgets'][0];
}

function Inner({ widget }: WidgetProps) {
    const { quantity, increase, decrease } = useWidgetQuantity();
    return (
        <article>
            <p>{widget.name} &times; {quantity || 0}</p>
            <div className="grid">
                <button
                    className="outline"
                    onClick={decrease}
                >
                    -
                </button>
                <button
                    className="outline"
                    onClick={increase}
                >
                    +
                </button>
            </div>
        </article>
    )
}

export default function Widget({ widget }: WidgetProps) {
    const { get, set } = createInitialValues();
    set(quantityAtom, 0);
    const initialValues = get();
    return (
        <Provider
            initialValues={initialValues}
        >
            <Inner widget={widget} />
        </Provider>
    )
}