import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState, RenderersProps } from "../../..";
import { Classes } from "reactcss";

export interface SketchPickerStylesProps {
    picker: CSSProperties;
    saturation: CSSProperties;
    Saturation: CSSProperties;
    controls: CSSProperties;
    sliders: CSSProperties;
    color: CSSProperties;
    activeColor: CSSProperties;
    hue: CSSProperties;
    Hue: CSSProperties;
    alpha: CSSProperties;
    Alpha: CSSProperties;
}

type PresetColor = { color: string; title: string } | string;
export interface SketchPickerProps extends RenderersProps, CustomPickerProps {
    disableAlpha?: boolean | undefined;
    presetColors?: PresetColor[] | undefined;
    width?: string | undefined;
    styles?: Partial<Classes<SketchPickerStylesProps>> | undefined;
    onSwatchHover?: ((color: ColorState, event: MouseEvent) => void) | undefined;
}

export default class SketchPicker extends Component<SketchPickerProps> { }

export { };
