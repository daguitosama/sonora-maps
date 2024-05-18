/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate, useParams } from "@remix-run/react";
import { Fragment } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MAP_PINS_IDS } from "~/lib/db/db";
// code notes
// making content take full area:
// https://github.com/BetterTyped/react-zoom-pan-pinch/issues/130#issuecomment-902439742
//

export default function BoardMap({ map }: { map: JSX.Element }) {
    const params = useParams();
    const program = params.program as string;
    const navigate = useNavigate();
    const onClick: React.MouseEventHandler<HTMLOrSVGElement> = (event) => {
        const element = event.target;
        if (!element) {
            return;
        }
        const institution_route = parse_pin_route(element as HTMLElement);
        if (institution_route) {
            navigate(`/${program}/${institution_route}`);
        }
    };
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className='h-[50vh] sm:h-[100vh] sm:w-[55vw]'
            onClick={onClick}
        >
            <TransformWrapper
                initialScale={2.5}
                initialPositionY={-400}
                initialPositionX={-400}
            >
                {(utils) => (
                    <Fragment>
                        <Controls {...utils} />
                        <TransformComponent
                            wrapperClass='w-full h-full'
                            contentStyle={{ width: 1155, height: 928 }}
                        >
                            {map}
                        </TransformComponent>
                    </Fragment>
                )}
            </TransformWrapper>
        </div>
    );
}

export function BoardMapNational({ map }: { map: JSX.Element }) {
    const params = useParams();
    const program = params.program as string;
    const navigate = useNavigate();
    const onClick: React.MouseEventHandler<HTMLOrSVGElement> = (event) => {
        const element = event.target;
        if (!element) {
            return;
        }
        const institution_route = parse_pin_route(element as HTMLElement);
        if (institution_route) {
            navigate(`/${program}/${institution_route}`);
        }
    };
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className='h-[50vh] sm:h-[100vh] sm:w-[65vw]'
            onClick={onClick}
        >
            <TransformWrapper
                initialScale={1}
                initialPositionY={0}
                initialPositionX={0}
            >
                {(utils) => (
                    <Fragment>
                        <Controls {...utils} />
                        <TransformComponent
                            wrapperClass='w-full h-full'
                            contentStyle={{ width: 1155, height: 928 }}
                        >
                            {map}
                        </TransformComponent>
                    </Fragment>
                )}
            </TransformWrapper>
        </div>
    );
}

const Controls = ({
    // @ts-ignore
    zoomIn,
    // @ts-ignore
    zoomOut,
    // @ts-ignore
    resetTransform,
}) => (
    <div className='absolute z-10 left-0 bottom-0 w-full flex items-center justify-end gap-3 p-2  '>
        <button
            className='bg-white py-1 px-3 rounded-full leading-none flex items-center justify-center'
            onClick={() => zoomIn()}
        >
            +
        </button>
        <button
            className='bg-white py-1 px-3 rounded-full leading-none flex items-center justify-center'
            onClick={() => zoomOut()}
        >
            -
        </button>
        <button
            className='bg-white py-1 px-3 rounded-full leading-none flex items-center justify-center'
            onClick={() => resetTransform()}
        >
            x
        </button>
    </div>
);

function parse_pin_route(element: HTMLElement): string | undefined {
    return MAP_PINS_IDS.get(element.id);
}
