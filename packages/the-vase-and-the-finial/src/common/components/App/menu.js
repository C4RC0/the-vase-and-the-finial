import React from "react";

import CodeIcon from  "@material-ui/icons/Code";
import ArticleOutlinedIcon from "@material-ui/icons/ArticleOutlined";
import GitHubIcon from  "@material-ui/icons/GitHub";

function getMenu(props = {}) {

    const {appContext} = props;
    const {menus, routes} = appContext;

    async function onClickBefore(p) {
        const {narrow, open, drawerClose} = p;
        if (narrow && open){
            await drawerClose();
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    return [
        {
            name: menus.pureCssMenu,
            href: routes.pureCssRoute,
            Icon: CodeIcon,
            onClickBefore
        },
        {
            name: menus.conceptMenu,
            href: routes.conceptRoute,
            Icon: ArticleOutlinedIcon,
            onClickBefore
        },
        {
            name: menus.gitHubMenu,
            href: routes.gitHubUrl,
            target: "_blank",
            Icon: GitHubIcon,
            onClickBefore
        },
    ];

}

export default getMenu;
