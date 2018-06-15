#!/bin/bash

web-ext lint --source-dir suspicious-quotes
web-ext build --overwrite-dest --source-dir suspicious-quotes
