FROM php:8.0-apache

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update && \
    apt-get install -y --no-install-recommends git unzip zip && \
    install-php-extensions pdo_mysql zip
