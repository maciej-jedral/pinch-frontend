# Local development image only. Production deploys go to Vercel directly
# from the repo, not through this Dockerfile.
FROM node:24

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
