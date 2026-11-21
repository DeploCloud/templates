RStudio Server is the browser-based IDE for R, deployed from the Rocker project's versioned rocker/rstudio image with R 4.6, pandoc and Quarto.
The `/home/rstudio` home directory (projects, files, IDE settings and session state) and the R site library at `/usr/local/lib/R/site-library` (packages installed with `install.packages()`) persist on named volumes.
Sign in as user `rstudio` with the generated `PASSWORD`; system libraries installed with apt are not persisted and the user has no sudo access.
