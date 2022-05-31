import { useAppDispatch } from "../../../lib/redux/store";
import useContent from "../hooks/useContent"
import useInterest from "../hooks/useInterest";
import { actions } from "../slice";

export default function Header() {
    const content = useContent();
    const interest = useInterest();
    const dispatch = useAppDispatch();

    return (
        <article>
            <h1>{content?.page.title}</h1>
            <h5>{content?.page.subtitle}</h5>

            <div className="grid">
                <p>
                    <a role="button" href={content?.page.cta.url}>{content?.page.cta.text}</a>
                </p>

                <p>
                    <label htmlFor="range">
                        How interested are you in our stuff?
                        <input
                            id="range"
                            type="range"
                            min={1}
                            max={5}
                            value={interest}
                            onChange={(e) => {
                                dispatch(actions.setInterest(parseInt(e.target.value)))
                            }}
                        />
                    </label>
                </p>
            </div>
        </article>
    )
}