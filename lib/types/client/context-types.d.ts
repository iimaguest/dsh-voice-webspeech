/** DSH client contracts consumed by the browser half (0.1.x and 0.2.x). */
import type { Context as ClientContext } from '@deepseek-ai/cordis';
import type { zh } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        'voice.webspeech': keyof typeof zh;
    }
}
export type Context = ClientContext;
