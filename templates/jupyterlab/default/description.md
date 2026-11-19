JupyterLab is a web-based environment for notebooks, code, terminals and data, deployed from the official Jupyter Docker Stacks minimal-notebook image with Python, git and LaTeX for PDF export.
The whole `/home/jovyan` home directory persists on a named volume, so notebooks in `work/`, JupyterLab settings and packages installed with `pip install --user` survive redeploys.
Packages installed into the base conda environment with `mamba install` or a plain `pip install` live in the container and are lost when it is recreated.
Sign in with the generated `JUPYTER_TOKEN`; from the login page you can also set a password, which is stored in the persistent home directory.
