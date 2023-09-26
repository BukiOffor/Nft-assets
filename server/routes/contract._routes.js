const ContractRoutes = (apiVersion, servicePath = 'contracts') => {
    return {
        get FETCH_CONTRACT() {
            return `${apiVersion}/${servicePath}/:address`
        },
        get CREATE_CONTRACT() {
            return `${apiVersion}/${servicePath}/create`
        }
    }
}

export default ContractRoutes;