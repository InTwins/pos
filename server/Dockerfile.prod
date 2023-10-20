FROM node:18-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn prisma:generate
# RUN yarn prisma:migrate

RUN yarn build

EXPOSE 4000

ENV PORT 4000
ENV ORIGIN http://teescope.com
ENV JWT_SECRET pos
ENV JWT_ISSUER pos
ENV JWT_ACTIVATION_EXPIRATION 5m
ENV REDIS_URL redis://localhost:6379
ENV DATABASE_URL postgresql://postgres:postgres@postgres:5432/mydb?schema=public
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "dist/src/index.js"]
