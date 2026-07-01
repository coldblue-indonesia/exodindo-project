.PHONY: help install dev prod build up down logs clean

help:
	@echo "EXODINDO Project - Makefile Commands"
	@echo ""
	@echo "Development:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make test     - Run tests"
	@echo "  make lint     - Run linter"
	@echo ""
	@echo "Production:"
	@echo "  make build    - Build for production"
	@echo "  make prod     - Start production server"
	@echo ""
	@echo "Docker:"
	@echo "  make up       - Start Docker containers"
	@echo "  make down     - Stop Docker containers"
	@echo "  make logs     - View Docker logs"
	@echo ""
	@echo "Maintenance:"
	@echo "  make clean    - Clean build files"

install:
	@echo "Installing dependencies..."
	cd backend && npm install

dev:
	@echo "Starting development server..."
	cd backend && npm run dev

prod:
	@echo "Starting production server..."
	cd backend && npm start

build:
	@echo "Building for production..."
	cd backend && npm run build

test:
	@echo "Running tests..."
	cd backend && npm test

lint:
	@echo "Running linter..."
	cd backend && npm run lint

up:
	@echo "Starting Docker containers..."
	docker-compose up -d

down:
	@echo "Stopping Docker containers..."
	docker-compose down

logs:
	@echo "Viewing logs..."
	docker-compose logs -f backend

clean:
	@echo "Cleaning build files..."
	rm -rf backend/dist backend/build
