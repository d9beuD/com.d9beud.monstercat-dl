# Install

## Build `montsercat-dl`

If you just want an already built PHP executable, just go to the [download](#download-monstercat-dl) section.

Download the source code from a [release](https://github.com/d9beuD/monstercat-dl/releases), not from master branch. Unzip the archive and cd into it.

```sh
cd monstercat-dl
```

To setup autoloading, download [Composer's](https://getcomposer.org/) [composer.phar](https://getcomposer.org/composer.phar) file and paste it in the `src` directory. Then let it update autoloading classes for you.

```sh
wget https://getcomposer.org/composer.phar
php composer.phar update
```

Compile the source code into a PHP executable file by running the `build-phar.php` script.

```sh
php create-phar.php
```

You can now jumb to the [global installation](#install-globaly-warning-linux-and-macos-only) section if you wish to access this tool anywhere from your terminal app.

## Download `monstercat-dl`

Go to the repository [releases list](https://github.com/d9beuD/monstercat-dl/releases) and choose the first one (which should be the latest in date).

## Install globaly (:warning: Linux and macOS only)

If you have compiled the tool yourself, you can execute the `install.sh` script. Otherwise, execute the following lines.

```sh
cp ./monstercat-dl.phar ./monstercat-dl
chmod +x ./monstercat-dl
sudo mkdir -p /usr/local/bin
cp ./monstercat-dl /usr/local/bin
```
