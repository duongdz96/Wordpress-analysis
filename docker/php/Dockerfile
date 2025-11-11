FROM wordpress:6-php8.2-apache
RUN apt-get update && apt-get install -y git unzip less vim && rm -rf /var/lib/apt/lists/*
RUN pecl install xdebug && docker-php-ext-enable xdebug
RUN a2enmod rewrite
# Composer (tùy chọn, hữu ích cho plugin dùng PHP deps)
RUN php -r "copy('https://getcomposer.org/installer','composer-setup.php');" \
 && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
 && rm composer-setup.php