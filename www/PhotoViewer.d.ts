declare module PhotoViewer {
    interface PhotoViewerOptions {
        share?: boolean;
        closeButton?: boolean;
        copyToReference?: boolean;
    }
    export function show(url:string, title:string, options:PhotoViewerOptions): void;
}
export = PhotoViewer;