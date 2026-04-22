# Araga
> Exploring a minimal full stack approach with Cloudflare Workers 
> Docs: https://developers.cloudflare.com/workers/

## Setup

**Install Wrangler**


    npm i -D wrangler@latest


## Workflow

### D1 - Database

**Create database**


    npx wrangler d1 create [DB_NAME]
    

**Running a migration**
- local is default flag if omitted.


    npx wrangler d1 execute [DB_NAME] --local --file=./database/[FILE].sql
    *can be opted into --remote


**Executing a query**


    npx wrangler d1 execute [DB_NAME] --local --command="[QUERY]"


