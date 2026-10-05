#!/bin/sh
# One-time setup, run ON brainpi by JT:  sh setup-gallery-push.sh
# Installs git, creates a deploy key for jtembry/embry.dev, and prints the public half.
set -e
command -v git >/dev/null || { sudo apt-get update -qq; sudo apt-get install -y -qq git; }
mkdir -p ~/.ssh && chmod 700 ~/.ssh
[ -f ~/.ssh/embry_dev_deploy ] || ssh-keygen -q -t ed25519 -f ~/.ssh/embry_dev_deploy -N "" -C "brainpi gallery publisher"
grep -q "Host github-embry" ~/.ssh/config 2>/dev/null || printf 'Host github-embry\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/embry_dev_deploy\n  IdentitiesOnly yes\n  StrictHostKeyChecking accept-new\n' >> ~/.ssh/config
chmod 600 ~/.ssh/config
echo "Public key (add to the repo as a deploy key WITH write access):"
cat ~/.ssh/embry_dev_deploy.pub
