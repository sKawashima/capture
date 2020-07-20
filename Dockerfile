FROM node:12.14.0-buster

RUN cd /tmp && \
  mkdir noto && \
  curl -O -L https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip && \
  unzip NotoSansCJKjp-hinted.zip -d ./noto && \
  mkdir -p /usr/share/fonts/noto && \
  cp ./noto/*.otf /usr/share/fonts/noto/ && \
  chmod 644 /usr/share/fonts/noto/*.otf && \
  fc-cache -fv && \
  rm -rf NotoSansCJKjp-hinted.zip ./noto

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update \
  && apt-get install -y \
  gconf-service \
  libasound2 \
  libatk1.0-0 \
  libc6 \
  libcairo2 \
  libcups2 \
  libdbus-1-3 \
  libexpat1 \
  libfontconfig1 \
  libgcc1 \
  libgconf-2-4 \
  libgdk-pixbuf2.0-0 \
  libglib2.0-0 \
  libgtk-3-0 \
  libnspr4 \
  libpango-1.0-0 \
  libpangocairo-1.0-0 \
  libstdc++6 \
  libx11-6 \
  libx11-xcb1 \
  libxcb1 \
  libxcomposite1 \
  libxcursor1 \
  libxdamage1 \
  libxext6 \
  libxfixes3 \
  libxi6 \
  libxrandr2 \
  libxrender1 \
  libxss1 \
  libxtst6 \
  ca-certificates \
  fonts-liberation \
  libappindicator1 \
  libnss3 \
  lsb-release \
  xdg-utils \
  wget

RUN pwd&&ls -l

RUN npm install

COPY ./index.ts ./index.ts

CMD npm start
