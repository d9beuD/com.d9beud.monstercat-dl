# Usage

## Find the release you want

First, browse [monstercat.com](https://monstercat.com) and find the release you wish to download. The URL of the page you are on should look like the following:

```
https://www.monstercat.com/release/MCEP157
```

We just need the release ID at the end, in this case it’s `MCEP157`. Copy it, we’ll use it in the next step.

## Download

Download all songs in this release with this simple command:

```sh
monstercat-dl download MCEP157
```

It should output something like this:

```sh
$ monstercat-dl download MCEP157
Finding data about MCEP157 release...
Release name: Thrill of It
  Track 1: All I Want
  Track 2: Stars
  Track 3: Remember You
  Track 4: Heartbeat
  Track 5: Thrill of It

Downloading tracks from release Thrill of It...
  Downloading 0 - All I Want
  Downloading 1 - Stars
  Downloading 2 - Remember You
  Downloading 3 - Heartbeat
  Downloading 4 - Thrill of It
```

### Download several releases at once

Isn't as fast as what you expected? Download several releases at once by appending other releases IDs to the `download` command.

```sh
monstercat-dl download MCEP157 MCX006 MCS778
```

::: tip
`monstercat-dl` uses [Guzzle](https://docs.guzzlephp.org/en/stable/index.html) internaly to make HTTP calls and download tracks with a progress overview.
:::
