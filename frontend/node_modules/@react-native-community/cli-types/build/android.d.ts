export interface AndroidProjectConfig {
    sourceDir: string;
    isFlat: boolean;
    folder: string;
    stringsPath: string;
    manifestPath: string;
    buildGradlePath: string;
    settingsGradlePath: string;
    assetsPath: string;
    mainFilePath: string;
    packageName: string;
    packageFolder: string;
    appName: string;
}
export declare type AndroidProjectParams = Partial<AndroidProjectConfig>;
export interface AndroidDependencyConfig {
    sourceDir: string;
    folder: string;
    packageImportPath: string;
    packageInstance: string;
    manifestPath: string;
    packageName: string;
}
export declare type AndroidDependencyParams = Partial<AndroidDependencyConfig>;
//# sourceMappingURL=android.d.ts.map