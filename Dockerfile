FROM node:22.23.4-alpine AS base

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NEXT_TELEMETRY_DISABLED=1


# Dependencies
FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci --no-audit --no-fund


# Build
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


# Production
FROM base AS runner

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs \
    && adduser -S -u 1001 -G nodejs nextjs \
    && mkdir -p /app/.next/cache \
    && chown -R nextjs:nodejs /app

COPY --from=builder --chown=nextjs:nodejs \
    /app/public ./public

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]