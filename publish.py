import os
from distutils.dir_util import copy_tree

os.system("npm --prefix frontend/ run build")

copy_tree("frontend/bin", "docs");