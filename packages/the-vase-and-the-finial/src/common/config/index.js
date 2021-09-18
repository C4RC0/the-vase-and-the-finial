export function getConfig(p = {}) {

    const {config = {}} = p;

    const commonConfig = config.common || {};
    const globalsConfig = config.globals || {};

    const common = {
        ...commonConfig,
        siteName: "The vase and the finial",
        description: "A conceptual, new-media-art website for the 'The vase and the finial' painting",
    };

    return {
        config: {
            ...config,
            common: common
        },
    }
}
