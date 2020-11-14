/// <reference types="react" />
export default function checkSerializable(o: {
    [key: string]: any;
}): {
    serializable: true;
} | {
    serializable: false;
    location: import("react").ReactText[];
    reason: string;
};
