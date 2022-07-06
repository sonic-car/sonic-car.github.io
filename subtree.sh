#! /bin/bash


git remote add github.io https://github.com/sonic-car/sonic-car.github.io.git

rm -r pages

git subtree add --prefix=pages gituhub.io main --squash

