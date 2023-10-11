# Application Data Directory

The per-user application data directory is located in the following directory:

- `%APPDATA%\serpdown` on Windows
- `$XDG_CONFIG_HOME/serpdown` or `~/.config/serpdown` on Linux
- `~/Library/Application Support/serpdown` on macOS

When [portable mode](PORTABLE.md) is enabled, the directory location is either the `--user-data-dir` parameter or `serpdown-user-data` directory.
