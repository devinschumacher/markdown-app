# Portable Mode

serpdown stores all user configuration inside the [application data directory](APPLICATION_DATA_DIRECTORY.md) that can be changed with `--user-data-dir` command-line flag.

## Linux and Windows

On Linux and Windows you can also create a directory called `serpdown-user-data` to save all user data inside the directory. Like:

```
serpdown-portable/
 ├── serpdown (Linux) or serpdown.exe (Windows)
 ├── serpdown-user-data/
 ├── resources/
 ├── THIRD-PARTY-LICENSES.txt
 └── ...
```
