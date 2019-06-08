workflow "CI" {
  on = "push"
  resolves = ["Run tests"]
}

action "Install dependencies" {
  uses = "n6g7/actions-yarn@master"
  args = "install"
}

action "Run tests" {
  uses = "n6g7/actions-yarn@master"
  args = "test"
  needs = ["Install dependencies"]
}
