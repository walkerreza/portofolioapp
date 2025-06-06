# Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Debug: List files before build
RUN echo "=== FILES BEFORE BUILD ===" && ls -la

# Build the application
RUN npm run build

# Debug: List files after build
RUN echo "=== FILES AFTER BUILD ===" && ls -la
RUN echo "=== CURRENT DIRECTORY ===" && pwd

# Debug: Check if dist directory exists
RUN if [ -d "dist" ]; then \
    echo "=== DIST DIRECTORY EXISTS ===" && \
    ls -la dist && \
    echo "=== DIST DIRECTORY CONTENT ===" && \
    find dist -type f | sort && \
    echo "=== DIST INDEX.HTML CONTENT ===" && \
    cat dist/index.html; \
    else echo "=== DIST DIRECTORY DOES NOT EXIST ==="; \
    fi

# Production stage
FROM nginx:alpine AS production

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set timezone
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
    echo "Asia/Jakarta" > /etc/timezone

# Debug: Check nginx html directory
RUN echo "=== NGINX HTML DIRECTORY ===" && ls -la /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
