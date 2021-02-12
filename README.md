# Render Methods Experiment (SSR, SSG, CSR (data-wise))
Purpose of this is to play around with different rendering methods of a next.js app.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First run `yarn install` to get all dependencies.
During development every request will be fetched new from the resources. The benefits will only be visible in production mode.
To run the project use following commands for different purposes:

Development: `yarn dev` 

Production: `yarn production`  

Both will start a counterfit api server from `./express` on [http://localhost:9000](http://localhost:9000) that will pretend to have a little latency and the next.js server on [http://localhost:3001](http://localhost:3001).

## Exploring render methods
### SSG - The "What's on" page
This page will be generated during build time, so the page can be served statically. This is possible due to the `getStaticProps` function of next.js
But we can use a stale-while-revalidate-ish configuration to set a TTL to the page. With that, the page will be stale for the time configured, and is going to be refetched by the first request after that. If this revalidation setting is abscent, the page is only generated to build time.
```
    return {
        props: {
            articles: news
        },
        revalidate: 15 // Page is stale for 15 seconds and gets refreshed with the next request.
    }
```
__Now if we change the data source in the api and edit the `data.json` we can discover the change on the page after the revalidation period.__

Besides that, the __"Imprint"__ page is fully static because it hasn't any data dependency to the api.
### SSR - The "Who's online" page
This page is regenerated on the server with every request made. This is possible due to the `getServerSideProps` function of next.js.

### CSR (data-wise) - The "My private space" page
This page is rendered at build time, because of the abscence of `getServerSideProps` or `getInitialProps` next.js treats it as a static page just like the "imprint" page.
But in this case we are fetching data from client side.
