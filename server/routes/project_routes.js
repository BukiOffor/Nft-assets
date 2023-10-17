const ProjectRoutes = (apiVersion, servicePath = 'project') => {
    return {
        get LIST_PROJECTS() {
            return `${apiVersion}/${servicePath}/all`
        },
        get FETCH_PROJECT() {
            return `${apiVersion}/${servicePath}/:id`
        }
    }
}

export default ProjectRoutes;