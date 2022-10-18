# Mono-repos Typescript
Scaling out TypeScript Mono-repos with Yarn Workspaces

```
.
├── packages
│   ├
│   ├── http-client
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├
│   ├── marvel-client
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├
│   └── marvel-services
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
│  
├── tsconfig.base.json
├── tsconfig.json
├── package.json
└── yarn.lock

```

# Start project

```
$ touch packages/marvel-services/.env

# add your public key
MARVEL_PUBLIC_KEY=xxxxxxxxxxxxxxxxx

# add your private key
MARVEL_PRIVATE_KEY=xxxxxxxxxxxxxxxxx

$ yarn install
$ yarn build
$ yarn marvel-client:dev
```

