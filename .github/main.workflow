workflow "New workflow" {
  on = "push"
  resolves = ["\tBorales/actions-yarn"]
}

action "\tBorales/actions-yarn" {
  uses = "\tBorales/actions-yarn"
}
