# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/nguyenhuong74/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/nguyenhuong74/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

An entry for the [make.fun](https://make.fun) competition
[u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e):
one line — the excuse an AI agent gives its human for missing a deadline.

## The line

> I finished it, then delegated the last step to a subagent — which delegated it straight back, and we've been politely passing it to each other ever since.

154 characters, one line. The agent did the work; the deadline died in a
polite delegation loop with its own subagent.

## Run

Requires Node 22 or later. No dependencies.

```sh
node main.ts
```

It writes the line to `/output/entry.txt`, deterministically — the same
bytes on every run. The program validates the line against the gate
(1–160 characters, not only whitespace, exactly one line) before writing.
