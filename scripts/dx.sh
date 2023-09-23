#! /usr/bin/bash

pnpm db:up
pnpm prisma:generate
pnpm prisma:migrate
pnpm dev