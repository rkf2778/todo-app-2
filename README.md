# ToDo List App  
A simple ToDo app made with Next.js 14, Prisma and Tailwind  

# Live Demo [here](https://todo-list-rkf2778.vercel.app/)  

## Technologies & Frameworks  
- Next.js
- React
- React-Dom
- Prisma
- Tailwind
- Postcss
- Autoprefixer
- ESLint
- Prettier
- React Hot Toast
- Typescript

## Versions used for the app :  
Sure, here's the information in a tabular format:  

| Package                  | Version   |
|--------------------------|-----------|
| @prisma/client           | ^5.12.1   |
| @types/node              | 20.12.4   |
| @types/react             | 18.2.74   |
| @types/react-dom         | 18.2.24   |
| autoprefixer             | 10.4.19   |
| eslint                   | 8.57.0    |
| eslint-config-next       | 14.1.4    |
| next                     | 14.1.4    |
| postcss                  | 8.4.38    |
| react                    | 18.2.0    |
| react-dom                | 18.2.0    |
| react-hot-toast          | ^2.4.1    |
| tailwindcss              | 3.4.3     |
| typescript               | 5.4.4     |
| @tailwindcss/forms       | ^0.5.7    |
| prettier                 | ^3.2.5    |
| prettier-plugin-tailwindcss | ^0.5.13 |
| prisma                   | ^5.12.1   |

## Getting Started  

1. Install Node.js  
2. Run the command :  
```
npm install
```
3. Create `.env` file
```
DATABASE_URL=add_your_db_url
```
To setup above URL, you could use `local database` or `cloud services` like [Railway](https://railway.app/) or [Neon](https://console.neon.tech/) or [PlanetScale](https://planetscale.com/) etc


4. To actually create the tables in your database, you now can use the following command of the Prisma CLI:
```
npx prisma db push
```

(Optional - prisma studio)
```
npx prisma studio
```

Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:

```
npx prisma generate
```

5. RUN THE APP
```
npm run dev
```
