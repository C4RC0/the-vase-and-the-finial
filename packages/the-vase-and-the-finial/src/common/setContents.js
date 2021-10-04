import App from "./components/App";
import routes from "./config/constants/routes";
import titles from "./config/constants/titles";

export default function setContents(p = {}) {

    const {wapp} = p;

    function getTitle({wapp, res, title}) {
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
            renderType: "react",
            title: function (p) {
                return getTitle({...p, title: titles.pureCssTitle})
            }
        },
        concept: {
            render: App,
            renderType: "react",
            title: function (p) {
                return getTitle({...p, title: titles.conceptTitle})
            }
        },
    });

    wapp.router.replace([
        {path: "/", contentName: "pureCss"},
        {path: routes.pureCssRoute, contentName: "pureCss"},
        {path: routes.conceptRoute, contentName: "concept"},
    ])

}
