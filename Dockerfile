FROM node:18-alpine AS baseWORKDIR /app

Copy package.json package-lock.json* ./

RUN npm ci --omit=dev

COPY . .

USER node

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]