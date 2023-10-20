FROM node:18-alpine 

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

COPY . .

RUN pnpm prisma:generate

EXPOSE 4000

ENV PORT 4000
ENV ORIGIN http://localhost:5173
ENV JWT_SECRET pos
ENV JWT_ISSUER pos
ENV JWT_ACTIVATION_EXPIRATION 5m
ENV REDIS_URL redis://localhost:6379
ENV DATABASE_URL postgresql://postgres:postgres@postgres:5432/mydb?schema=public
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["pnpm", "dev"]
