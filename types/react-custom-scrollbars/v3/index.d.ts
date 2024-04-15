import * as React from "react";

export as namespace ReactCustomScrollbars;

export interface positionValues {
    top: number;
    left: number;
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
}

export interface ScrollbarProps extends React.HTMLProps<Scrollbars> {
    onScroll?: React.UIEventHandler<any> | undefined;
    onScrollFrame?: ((values: positionValues) => void) | undefined;
    onScrollStart?: (() => void) | undefined;
    onScrollStop?: (() => void) | undefined;
    onUpdate?: ((values: positionValues) => void) | undefined;

    renderView?: React.FunctionComponent<any> | undefined;
    renderTrackHorizontal?: React.FunctionComponent<any> | undefined;
    renderTrackVertical?: React.FunctionComponent<any> | undefined;
    renderThumbHorizontal?: React.FunctionComponent<any> | undefined;
    renderThumbVertical?: React.FunctionComponent<any> | undefined;

    autoHide?: boolean | undefined;
    autoHideTimeout?: number | undefined;
    autoHideDuration?: number | undefined;

    thumbSize?: number | undefined;
    thumbMinSize?: number | undefined;
    universal?: boolean | undefined;

    style?: React.CSSProperties | undefined;
}

export class Scrollbars extends React.Component<ScrollbarProps> {
    scrollTop(top: number): void;
    scrollLeft(left: number): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    scrollToLeft(): void;
    scrollToRight(): void;
    getScrollLeft(): number;
    getScrollTop(): number;
    getScrollWidth(): number;
    getScrollHeight(): number;
    getWidth(): number;
    getHeight(): number;
    getValues(): positionValues;
}

export default Scrollbars;
