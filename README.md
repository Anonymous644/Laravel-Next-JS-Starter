# Laravel Next JS Starter Pack

## Components

-   [ ] Backend [Laravel](https://laravel.com/docs/9.x/installation)
-   [ ] Frontend [Next.js](https://nextjs.org/)
-   [ ] Docker [Laravel/Sail](https://laravel.com/docs/9.x/sail)

## Installation

### Setup Docker

Before Cloning on Windows, Make Sure You Have:

-   [ ] [Docker](https://www.docker.com/products/docker-desktop/) Installed
-   [ ] [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) Setup with a Linux Distro (Prefered Ubuntu-20.04)
-   [ ] [WSL_v2](https://docs.docker.com/desktop/windows/wsl/) Setup as Default Distro

### Cloning

-   CMD Run "wsl"
-   Clone the Repository
-   To Install All [Laravel] [Dependencies], Go to Repository Location and Run the following command:
-   docker run --rm \
     -u "$(id -u):$(id -g)" \
     -v "$(pwd):/var/www/html" \
     -w /var/www/html \
     laravelsail/php81-composer:latest \
     composer install --ignore-platform-reqs

### Installation Of Next JS Dependencies

-   To Install Next JS Dependencies You Need [NPM]() [installed]() [in]() [wsl](), Install NPM then
-   Go to ./client and Run the following command:
-   npm install

### Install Additional NEXT JS Dependencies

-   [Stop]() [Sail]() By Running
-   ./vendor/bin/sail down

-   Go to ./client and Run the following command:
-   npm install [${library-name}]()

## Run Sail (Docker/Docker-compose)

    First Time Only

-   Duplicate .env.example and rename it to .env

-   Run Command
-   ./vendor/bin/sail artisan key:generate

    To Run Sail

-   [ ] ./vendor/bin/sail [up]()
-   or
-   [ ] ./vendor/bin/sail [up]() [-d]() (To Run In Detatched Mode)
-   [Additional-Sail-Commands](https://laravel.com/docs/9.x/sail#executing-sail-commands)

### Migrate Database

-   [After]() [Running]() [Sail]()
-   [ ] ./vendor/bin/sail artisan [migrate]()
-   or
-   [ ] ./vendor/bin/sail artisan [migrate]() --seed

### Run Additional PHP Artisan Commands

-   [After]() [Running]() [Sail]()
-   [ ] ./vendor/bin/sail artisan [${command}]()
-   eg. {./vendor/bin/sail artisan make:model ModelName --migration}

### Run Additional Composer Artisan Commands

-   [After]() [Running]() [Sail]()
-   [ ] ./vendor/bin/sail composer [${command}]()
-   eg. {./vendor/bin/sail composer install}

## Support

-   [ ] Ashan Ali Zaman [aashan64@gmail.com]()

## Author

-   [ ] [Ashan]() [Ali]() [Zaman]()

<!-- ## License
Open Source License
Licensed [@aashan64]() -->
