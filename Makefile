SHELL := /bin/bash

.DEFAULT_GOAL := help

COMPOSE_DEV := docker compose -f infra/docker-compose/docker-compose.dev.yml
COMPOSE_PROD := docker compose -f infra/docker-compose/docker-compose.prod.yml

API_DIR := apps/api
WEB_DIR := apps/web
WORKER_DIR := apps/worker
REDIRECTOR_DIR := apps/redirector

.PHONY: help \
	install install-api install-web install-worker install-redirector \
	apps-build apps-lint apps-test apps-format \
	api-dev api-build api-lint api-test api-format \
	web-dev web-build web-lint \
	worker-dev worker-build worker-lint worker-test worker-format \
	redirector-dev redirector-build redirector-lint redirector-test redirector-format \
	dev-up dev-stop dev-down dev-build dev-rebuild dev-logs dev-ps dev-restart \
	prod-up prod-stop prod-down prod-build prod-rebuild prod-logs prod-ps prod-restart

help: ## Show available commands
	@printf "\nUsage: make <target> [SERVICE=name]\n\n"
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*## / {printf "  %-18s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: install-api install-web install-worker install-redirector ## Install dependencies for all apps

install-api: ## Install dependencies for API
	npm --prefix $(API_DIR) ci

install-web: ## Install dependencies for web
	npm --prefix $(WEB_DIR) ci

install-worker: ## Install dependencies for worker
	npm --prefix $(WORKER_DIR) ci

install-redirector: ## Install dependencies for redirector
	npm --prefix $(REDIRECTOR_DIR) ci

apps-build: api-build web-build worker-build redirector-build ## Build all apps

apps-lint: api-lint web-lint worker-lint redirector-lint ## Run lint for all apps

apps-test: api-test worker-test redirector-test ## Run tests for apps that define test scripts

apps-format: api-format worker-format redirector-format ## Run format for apps that define format scripts

api-dev: ## Run API in dev mode
	npm --prefix $(API_DIR) run start:dev

api-build: ## Build API
	npm --prefix $(API_DIR) run build

api-lint: ## Lint API
	npm --prefix $(API_DIR) run lint

api-test: ## Test API
	npm --prefix $(API_DIR) run test

api-format: ## Format API
	npm --prefix $(API_DIR) run format

web-dev: ## Run web in dev mode
	npm --prefix $(WEB_DIR) run dev

web-build: ## Build web
	npm --prefix $(WEB_DIR) run build

web-lint: ## Lint web
	npm --prefix $(WEB_DIR) run lint

worker-dev: ## Run worker in dev mode
	npm --prefix $(WORKER_DIR) run start:dev

worker-build: ## Build worker
	npm --prefix $(WORKER_DIR) run build

worker-lint: ## Lint worker
	npm --prefix $(WORKER_DIR) run lint

worker-test: ## Test worker
	npm --prefix $(WORKER_DIR) run test

worker-format: ## Format worker
	npm --prefix $(WORKER_DIR) run format

redirector-dev: ## Run redirector in dev mode
	npm --prefix $(REDIRECTOR_DIR) run start:dev

redirector-build: ## Build redirector
	npm --prefix $(REDIRECTOR_DIR) run build

redirector-lint: ## Lint redirector
	npm --prefix $(REDIRECTOR_DIR) run lint

redirector-test: ## Test redirector
	npm --prefix $(REDIRECTOR_DIR) run test

redirector-format: ## Format redirector
	npm --prefix $(REDIRECTOR_DIR) run format

dev-up: ## Start dev stack with Docker Compose. Optional: SERVICE=api
	$(COMPOSE_DEV) up -d $(SERVICE)

dev-stop: ## Stop dev containers without removing them. Optional: SERVICE=api
	$(COMPOSE_DEV) stop $(SERVICE)

dev-down: ## Stop dev stack
	$(COMPOSE_DEV) down

dev-build: ## Build dev images. Optional: SERVICE=api
	$(COMPOSE_DEV) build $(SERVICE)

dev-rebuild: ## Rebuild and restart dev stack. Optional: SERVICE=api
	$(COMPOSE_DEV) up -d --build $(SERVICE)

dev-logs: ## Follow dev logs. Optional: SERVICE=api
	$(COMPOSE_DEV) logs -f $(SERVICE)

dev-ps: ## Show dev services status
	$(COMPOSE_DEV) ps

dev-restart: ## Restart dev services. Optional: SERVICE=api
	$(COMPOSE_DEV) restart $(SERVICE)

prod-up: ## Start prod stack with Docker Compose. Optional: SERVICE=api
	$(COMPOSE_PROD) up -d $(SERVICE)

prod-stop: ## Stop prod containers without removing them. Optional: SERVICE=api
	$(COMPOSE_PROD) stop $(SERVICE)

prod-down: ## Stop prod stack
	$(COMPOSE_PROD) down

prod-build: ## Build prod images. Optional: SERVICE=api
	$(COMPOSE_PROD) build $(SERVICE)

prod-rebuild: ## Rebuild and restart prod stack. Optional: SERVICE=api
	$(COMPOSE_PROD) up -d --build $(SERVICE)

prod-logs: ## Follow prod logs. Optional: SERVICE=api
	$(COMPOSE_PROD) logs -f $(SERVICE)

prod-ps: ## Show prod services status
	$(COMPOSE_PROD) ps

prod-restart: ## Restart prod services. Optional: SERVICE=api
	$(COMPOSE_PROD) restart $(SERVICE)
