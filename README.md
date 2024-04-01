
# Splitwise app with Nuxt3 Js
it created exactly like real Splitwise app on ios ui based on Web platform
## introduction
A bill spliting application
This will help you not to get confused about your money.<br>
the application uses Type-Script, Nuxt.js freamwork ui and tailwind for front of the Website <br>
<a href="https://supabase.com/">Supabase</a> has been used for the database and Authentication. <a href="https://supabase.com/docs">read supabase docs</a>
<br>
<a href="https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs">use supabase with Nuxt Js </a><br>
<a href="https://supabase.com/docs/guides/auth">Supabase for Auth</a>

## what is Splitwise? 
Splitwise is a Providence, RI-based company that makes it easy to split bills with friends and family. We organize all your shared expenses and IOUs in one place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with roommates, or paying someone back for lunch, Splitwise makes life easier. We store your data in the cloud so that you can access it anywhere: on iPhone, Android, or on your computer. <a href="https://www.splitwise.com/about"> for more </a>
## Technologies + Tools used
<a href="https://nuxt.com/">Nuxt Js</a><br>
<a href="https://www.typescriptlang.org/">TypeScript</a><br>
<a href="https://supabase.com">Supabase</a><br>
<a href="https://tailwindcss.com/">TailwindCSS</a><br>
<a href="https://heroicons.com/">heroicons</a><br>
<a href="https://axios-http.com/">axios api</a><br>
<a href="https://pinia.vuejs.org/">pinia store</a><br>

##  Auth
you can choose Google Auth or github for login, even you can log in just with your email with magic link (you need to enter your email then the app will send you an email to confirm then redirect to the app by clicking link)

<img width="300px" src="./Screenshots/login.png">
<img width="300px" src="./Screenshots/googleAuth.png">
<img width="300px" src="./Screenshots/githubAuth.png">


## Nuxt 3 Minimal Starter
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
