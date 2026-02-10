FROM ghost:5-alpine

WORKDIR /app

COPY package.json .npmrc ./

RUN npm install --prefer-offline --no-audit --no-fund

COPY . .

EXPOSE 4321

CMD ["npx", "astro", "dev", "--host", "0.0.0.0"]
