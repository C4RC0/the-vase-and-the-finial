import App from "./components/App";
import routes from "./config/constants/routes";

export default function setContents(p = {}) {

    const {wapp} = p;

    function getTitle({wapp, req, res, title}) {
        const config = wapp.getTargetObject().config;
        const {siteName = "Wapplr"} = config;
        const {statusCode, statusMessage, errorMessage} = res.wappResponse;
        if (statusCode === 404) {
            title = statusMessage || "Not found";
        }
        if (statusCode === 500) {
            title = errorMessage || statusMessage || "Internal Server Error";
        }
        return title + " | " + siteName;
    }

    wapp.contents.add({
        pureCss: {
            render: App,
            description: "Pure css",
            renderType: "react",
            title: function (p) {
                return getTitle({...p, title: "Pure css"})
            }
        },
        concept: {
            render: App,
            description: "Concept",
            renderType: "react",
            title: function (p) {
                return getTitle({...p, title: "Concept"})
            }
        },
    });

    wapp.router.replace([
        {path: "/", contentName: "pureCss"},
        {path: routes.pureCssRoute, contentName: "pureCss"},
        {path: routes.conceptRoute, contentName: "concept"},
    ])

}
