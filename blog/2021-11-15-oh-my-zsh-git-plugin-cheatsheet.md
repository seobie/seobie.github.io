---
slug: 'oh-my-zsh-git-plugin-cheatsheet'
title: 'oh-my-zsh git plugin cheatsheet'
authors: 'seob'
tags: ['zsh', 'terminal', 'oh-my-zsh', 'git']
---

oh-my-zsh의 git plugin은 많은 깃 단축어를 제공한다.

모든 단축어는 [여기](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git#aliases)에 잘 정리되어있다.

이 중 자주 사용하는 단축어를 정리해두려고 한다.

<!--truncate-->

| Alias | Command                                                                                                      |
| ----- | ------------------------------------------------------------------------------------------------------------ |
| gst   | git state                                                                                                    |
| ga    | git add                                                                                                      |
| gaa   | git add -all                                                                                                 |
| gl    | git pull                                                                                                     |
| ggl   | git pull origin $(current branch)                                                                            |
| gp    | git push                                                                                                     |
| ggp   | git push origin $(current branch)                                                                            |
| gco   | git checkout                                                                                                 |
| gco - | (git checkout to previous branch)                                                                            |
| gcb   | git checkout -b                                                                                              |
| glgga | git log --graph --decorate --all                                                                             |
| glola | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all |
| gd    | git diff                                                                                                     |
