BUILD_TAG = ""
ifdef tag
	# Build the tag
	BUILD_TAG=":$(tag)"
endif

help:
	@echo "Student Finance Challenge - Items"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build:  ## Build local Docker image
	@docker build . -t student-finance-api$(BUILD_TAG)

.PHONY: local-run
local-run:  ## Run local Docker image
	@docker run -p 3000:3000 -v $(shell pwd)/src:/app/src --rm --name student-finance-api student-finance-api$(BUILD_TAG) "start"

.PHONY: test
test:  ## Run tests
	@docker run -v $(shell pwd)/src:/app/src --rm --name student-finance-api student-finance-api$(BUILD_TAG) "test"

.PHONY: lint
lint:   ## Apply linter
	@docker run -v $(shell pwd)/src:/app/src --rm --name student-finance-api student-finance-api$(BUILD_TAG) "lint"

.PHONY: lint-fix
lint-fix:   ## Apply linter fix
	@docker run -v $(shell pwd)/src:/app/src --rm --name student-finance-api student-finance-api$(BUILD_TAG) "lint:fix"

.PHONY: clean
clean:  ## Clean all the environment
	@docker rm -f 'student-finance-api'
	@docker rmi $$(docker images 'student-finance-api' -a -q)

# Default command to help
.DEFAULT_GOAL := help
