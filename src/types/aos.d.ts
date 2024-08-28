//Declaracion de tipos para la libreria de transicion AOS

declare module 'aos' {
    interface AosOptions {
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
        }
    
        export function init(options?: AosOptions): void;
        export function refresh(): void;
        export function refreshHard(): void;
        export function destroy(): void;
    
        const AOS: {
        init: typeof init;
        refresh: typeof refresh;
        refreshHard: typeof refreshHard;
        destroy: typeof destroy;
        };
    
        export default AOS;
    }
    