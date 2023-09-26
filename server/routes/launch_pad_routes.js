const LaunchPadRoutes = (apiVersion, servicePath = 'launchpad') => {
    return {
        get CREATE_PACKAGE() {
            return `${apiVersion}/${servicePath}/create`
        }
    }
}

export default LaunchPadRoutes;