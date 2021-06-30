#!/bin/sh
python3.8 -m pip install setuptools
python3.8 -m pip install wheel
python3.8 -m pip install torch==1.4.0
python3.8 -m pip install transformers==2.10.0
python3.8 -m pip install seqeval>=0.0.12
python3.8 -m pip install flask
python3.8 -m pip install waitress
python3.8 -m pip install kss
python3.8 -m pip install flair
python3.8 -m pip install price-parser
python3.8 -m pip install gdown
cd model
gdown --id 1MRZNgj5F-lxRoP8wCkZjviDDF3BB_st9
cd ..