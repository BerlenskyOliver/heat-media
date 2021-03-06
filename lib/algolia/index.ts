import algoliasearch from "algoliasearch";

const getClient = (env: string = 'client') => {
    return env === 'admin' ?
    algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
        , process.env.ALGOLIA_ADMIN_API_KEY)
    :
    algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
        , process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_API_KEY);
}

export default getClient


