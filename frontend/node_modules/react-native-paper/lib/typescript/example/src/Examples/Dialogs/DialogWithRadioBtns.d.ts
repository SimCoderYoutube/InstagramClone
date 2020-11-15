/// <reference types="react" />
declare type Props = {
    visible: boolean;
    close: () => void;
};
declare const DialogWithRadioBtns: ({ visible, close }: Props) => JSX.Element;
export default DialogWithRadioBtns;
