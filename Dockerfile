# Base image
FROM node:18.15-alpine as base-node

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

#---------------------------------------------------------------------------------------
# DEVELOPMENT image
#---------------------------------------------------------------------------------------
FROM base-node AS development

# Set environment variable to development
ENV NODE_ENV=development

# Expose port 3050
EXPOSE 3050

# Run application.
ENTRYPOINT ["npm","run"]