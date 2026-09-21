# Local development image only. Production deploys go to Vercel directly
# from the repo, not through this Dockerfile.
#
# Source is bind-mounted over /app at runtime, node_modules/ included
# (install.sh runs `npm ci` in the container), so nothing is baked in here.
FROM node:24

WORKDIR /app

EXPOSE 3000

CMD ["npm", "run", "dev"]
