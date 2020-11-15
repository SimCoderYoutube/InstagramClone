declare const _default: {
    document: {
        title: string;
    };
    location: URL;
    history: {
        readonly state: any;
        pushState(state: any, _: string, path: string): void;
        replaceState(state: any, _: string, path: string): void;
        go(n: number): void;
        back(): void;
        forward(): void;
    };
    addEventListener: (type: "popstate", listener: () => void) => void;
    removeEventListener: (type: "popstate", listener: () => void) => void;
};
export default _default;
