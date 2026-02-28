FROM node:18-alpine

# Install OS dependencies for tools
RUN apk add --no-cache go git bash libc6-compat gawk

# Install HTTPX and Nuclei globally
RUN go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest && \
    go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

ENV PATH=$PATH:/root/go/bin

WORKDIR /app
COPY package*.json ./
# Make sure we don't install nodemon for production
RUN npm install

COPY . .

# Create uploads and temp directories
RUN mkdir -p uploads temp template

EXPOSE 3000
CMD ["node", "app.js"]
