import wapplrServer from "wapplr";
import wapplrReact from "wapplr-react";

import Head from "./components/Head";
import setContents from "../common/setContents";

import {getConfig as getCommonConfig} from "../common/config";
import favicon from "./images/icon_192x192.png";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export function getConfig(p = {}) {

    const {config = {}} = p;

    const serverConfig = config.server || {};
    const commonConfig = getCommonConfig(p).config;

    const common = {...commonConfig.common};
    const globals = {...commonConfig.globals};

    const server = {
        ...serverConfig,
        icon: favicon,
        database: {
            mongoConnectionString: "mongodb://localhost/thevaseandthefinial",
        }
    };

    const dirname = globals.ROOT || __dirname;
    const credentialsFolder = "secure/";

    if (
        !globals.DEV &&
        fs.existsSync(path.resolve(dirname, credentialsFolder, "thevaseandthefinial.com.key")) &&
        fs.existsSync(path.resolve(dirname, credentialsFolder, "thevaseandthefinial.com.crt"))
    ){
        server.credentials = {
            key: fs.readFileSync(path.resolve(dirname, credentialsFolder, "thevaseandthefinial.com.key"), "utf8"),
            cert: fs.readFileSync(path.resolve(dirname, credentialsFolder, "thevaseandthefinial.com.crt"), "utf8"),
        }
    }

    let secret = null;

    try {
        if (fs.existsSync(path.resolve(dirname, credentialsFolder, "secret.json"))){
            secret = JSON.parse(fs.readFileSync(path.resolve(dirname, credentialsFolder, "secret.json"), "utf8"));
        } else {
            const newSecretJson = {
                masterCode: Math.random().toString(36).substr(2, 8),
                cookieSecret: crypto.randomBytes(256).toString('hex'),
                adminPassword: Math.random().toString(36).substr(2, 8)
            };
            fs.writeFileSync(path.resolve(dirname, credentialsFolder, "secret.json"), JSON.stringify(newSecretJson, null, "    "));
            secret = JSON.parse(fs.readFileSync(path.resolve(dirname, credentialsFolder, "secret.json"), "utf8"));
        }
    } catch (e) {
        console.log(e)
    }

    if (secret){
        Object.keys(secret).forEach(function (key) {
            server[key] = secret[key];
        });
    }

    return {
        config: {
            ...config,
            common: common,
            server: server,
        },
    }
}

export default async function createServer(p = {}) {

    const {config} = getConfig(p);
    const wapp = p.wapp || wapplrServer({...p, config});

    wapplrReact({wapp});

    wapp.contents.addComponent({
        head: Head
    });

    setContents({wapp});

    return wapp;
}

export async function createMiddleware(p = {}) {
    // eslint-disable-next-line no-unused-vars
    const wapp = p.wapp || await createServer(p);
    return [
        function middleware(req, res, next) {
            next()
        }
    ]
}

const defaultConfig = {
    config: {
        globals: {
            DEV: (typeof DEV !== "undefined") ? DEV : undefined,
            WAPP: (typeof WAPP !== "undefined") ? WAPP : undefined,
            RUN: (typeof RUN !== "undefined") ? RUN : undefined,
            TYPE: (typeof TYPE !== "undefined") ? TYPE : undefined,
            ROOT: (typeof ROOT !== "undefined") ? ROOT : __dirname,
            NAME: (typeof NAME !== "undefined") ? NAME : undefined,
        }
    }
};

export async function run(p = defaultConfig) {

    if (p?.config?.globals && !p.config.globals.RUN){
        p.config.globals.RUN = p.config?.globals.NAME || "the-vase-and-the-finial"
    }

    const {env} = process;
    env.NODE_ENV = process.env.NODE_ENV;

    const {config} = getConfig(p);
    const wapp = await createServer({...p, config});
    const globals = wapp.globals;
    const {DEV} = globals;

    const app = wapp.server.app;
    app.use(await createMiddleware({wapp, ...p}));
    wapp.server.listen();

    if (typeof DEV !== "undefined" && DEV && module.hot){
        app.hot = module.hot;
        module.hot.accept("./index");
    }

    return wapp;
}

if (typeof RUN !== "undefined" && RUN === "the-vase-and-the-finial") {
    run();
}
