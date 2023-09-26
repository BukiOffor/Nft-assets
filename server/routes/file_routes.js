const FileRoutes = (apiVersion, servicePath = 'files') => {
    return {
        get UPLOAD() {
            return `${apiVersion}/${servicePath}/upload`
        }
    }
}

export default FileRoutes;