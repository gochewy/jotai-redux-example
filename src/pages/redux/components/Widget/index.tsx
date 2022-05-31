import { GetContentQuery } from "../../../../generated/graphql";
import { useAppDispatch, useAppSelector } from "../../../../lib/redux/store";
import { actions } from "../../slice";

interface WidgetProps {
    widget: GetContentQuery['widgets'][0];
}
export default function Widget({ widget }: WidgetProps) {
    const dispatch = useAppDispatch();
    const widgetState = useAppSelector(state => state.pages.redux.widgetStates[widget.id]) || {};
    return (
        <article>
            <p>{widget.name} &times; {widgetState?.quantity || 0}</p>
            <div className="grid">
                <button
                    className="outline"
                    onClick={() => {
                        dispatch(actions.decreaseWidgetQuantity(widget.id))
                    }}
                >
                    -
                </button>
                <button
                    className="outline"
                    onClick={() => {
                        dispatch(actions.increaseWidgetQuantity(widget.id))
                    }}
                >
                    +
                </button>
            </div>
        </article>
    )
}