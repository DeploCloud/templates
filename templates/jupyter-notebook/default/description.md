Jupyter Notebook is the document-centric web interface for creating and running notebooks, deployed from the official Jupyter Docker Stacks minimal-notebook image with a Python kernel, a terminal, git and LaTeX for PDF export.
The whole `/home/jovyan` home directory persists on a named volume, so notebooks and files (the server opens in the home directory), settings and packages installed with `pip install --user` survive redeploys.
Sign in with the generated `JUPYTER_TOKEN`; from the login page you can also set a password, which is stored in the persistent home directory.
