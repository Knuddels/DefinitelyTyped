// Type definitions for connect-busboy 0.0
// Project: https://github.com/mscdex/connect-busboy
// Definitions by: Pinguet62 <https://github.com/pinguet62>
//                 Chris Gedrim <https://github.com/chrisgedrim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as busboy from 'busboy';
import { RequestHandler } from 'express';
import * as http from 'http';

declare function connectBusboy(options?: connectBusboy.ConnectBusboyOptions): RequestHandler;

declare namespace connectBusboy {
    interface ConnectBusboyOptions extends Omit<busboy.BusboyConfig, 'headers'> {
        headers?: http.IncomingHttpHeaders;
        immediate?: boolean | undefined;
    }
}

declare global {
    namespace Express {
        interface Request {
            busboy: busboy.Busboy;
        }
    }
}

export = connectBusboy;
